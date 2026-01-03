// generateResponsiveImages.js
// npm i openai sharp
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey:
    "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",
});

export const IMAGE_VARIANTS = [
  { key: "mobile", width: 640, height: 640, source: "square" },
  { key: "tablet", width: 1024, height: 1024, source: "square" },
  { key: "desktop", width: 1600, height: 1600, source: "square" },
  { key: "og", width: 1200, height: 630, source: "landscape" },
  { key: "social", width: 1080, height: 1080, source: "square" },
  { key: "pinterest", width: 1000, height: 1500, source: "portrait" },
];

export async function generateResponsiveImages({
  prompt,
  outDir = "static",
  baseName,
  quality = 80,
  variants = IMAGE_VARIANTS,
}) {
  if (!prompt || typeof prompt !== "string") {
    throw new Error("prompt is required and must be a string");
  }
  if (typeof quality !== "number" || quality < 1 || quality > 100) {
    throw new Error("quality must be a number between 1 and 100");
  }

  const absOutDir = path.resolve(process.cwd(), outDir);
  await fs.mkdir(absOutDir, { recursive: true });

  const id =
    (baseName && baseName.trim()) ||
    crypto
      .createHash("sha1")
      .update(prompt + "|" + Date.now())
      .digest("hex")
      .slice(0, 12);

  // --- 1) Generate master images (best results per aspect) ---
  const [squareB64, landscapeB64, portraitB64] = await Promise.all([
    generateB64({ prompt, size: "1024x1024" }), // square master
    generateB64({ prompt, size: "1536x1024" }), // landscape master
    generateB64({ prompt, size: "1024x1536" }), // portrait master
  ]);

  const masters = {
    square: Buffer.from(squareB64, "base64"),
    landscape: Buffer.from(landscapeB64, "base64"),
    portrait: Buffer.from(portraitB64, "base64"),
  };

  // --- 2) Produce variants (all webp @ quality 80) ---
  const files = {};
  await Promise.all(
    variants.map(async (v) => {
      const src = masters[v.source] || masters.square;

      // cover = fill the target size by cropping (best for hero/OG/social)
      const outPath = path.join(absOutDir, `${id}-${v.key}.webp`);

      await sharp(src)
        .resize(v.width, v.height, {
          fit: "cover",
          position: "attention", // good default; tries to keep salient areas
        })
        .webp({ quality })
        .toFile(outPath);

      files[v.key] = outPath;
    })
  );

  return {
    id,
    outDir: absOutDir,
    quality,
    variants,
    files, // e.g. files.mobile => ".../static/<id>-mobile.webp"
  };
}

/** Internal helper: generate base64 image from OpenAI */
async function generateB64({ prompt, size }) {
  const res = await openai.images.generate({
    model: "gpt-image-1",
    prompt,
    size,
  });

  const b64 = res?.data?.[0]?.b64_json;
  if (!b64) throw new Error(`No image returned from OpenAI for size ${size}`);
  return b64;
}
