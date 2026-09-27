// Resizes and compresses every JPG/PNG in a folder to WebP.
// Usage: node scripts/compress-images.mjs <inputDir> [outputDir]
// Originals are never modified; output defaults to <inputDir>/optimized.
import sharp from "sharp";
import fs from "node:fs/promises";
import path from "node:path";

const MAX_WIDTH = 1920;
const QUALITY = 75;

const inputDir = process.argv[2];
if (!inputDir) {
  console.error("Usage: node scripts/compress-images.mjs <inputDir> [outputDir]");
  process.exit(1);
}
const outputDir = process.argv[3] ?? path.join(inputDir, "optimized");
await fs.mkdir(outputDir, { recursive: true });

const toKb = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;
const files = (await fs.readdir(inputDir)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let before = 0;
let after = 0;
for (const file of files) {
  const src = path.join(inputDir, file);
  const name = path
    .parse(file)
    .name.toLowerCase()
    .replace(/^_+/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+$/, "");
  const dest = path.join(outputDir, `${name}.webp`);

  // .rotate() applies EXIF orientation; metadata is dropped by default.
  await sharp(src)
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(dest);

  const { size: inSize } = await fs.stat(src);
  const { size: outSize } = await fs.stat(dest);
  before += inSize;
  after += outSize;
  console.log(`${file.padEnd(22)} ${toKb(inSize).padStart(10)} -> ${toKb(outSize).padStart(8)}  ${path.basename(dest)}`);
}
console.log(`\nTotal: ${toKb(before)} -> ${toKb(after)}`);
