import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.join(__dirname, "..", "public", "images", "Twin Stone _logo.png");
const outDir = path.join(__dirname, "..", "public", "images");

const img = sharp(src);
const meta = await img.metadata();
console.log("source meta:", meta.width, meta.height, meta.channels, meta.hasAlpha);

// Trim uniform white/transparent border down to the actual artwork bbox.
const trimmed = sharp(src).trim({ threshold: 10 });
const trimmedBuf = await trimmed.png().toBuffer();
const trimmedMeta = await sharp(trimmedBuf).metadata();
console.log("trimmed meta:", trimmedMeta.width, trimmedMeta.height);

await sharp(trimmedBuf).png().toFile(path.join(outDir, "twinstone-logo.png"));
console.log("saved twinstone-logo.png");
