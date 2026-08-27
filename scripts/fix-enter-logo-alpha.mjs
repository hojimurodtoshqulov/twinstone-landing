// project-enter.webp was exported with its alpha channel capped at ~20%
// (max 51/255), making the logo nearly invisible. This stretches alpha
// back to the full 0-255 range without touching the RGB ink color.
import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");
const src = path.join(imagesDir, "project-enter.webp");
const out = path.join(imagesDir, "partners", "enter-engineering.webp");

const { data, info } = await sharp(src)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const factor = 255 / 51;

for (let i = 3; i < data.length; i += channels) {
  data[i] = Math.min(255, Math.round(data[i] * factor));
}

await sharp(data, { raw: { width, height, channels } }).webp().toFile(out);

console.log("fixed alpha, saved to", out);
