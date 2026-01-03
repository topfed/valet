import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import OpenAI from "openai";
import admin from "firebase-admin";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: "spirit-92da0",
      clientEmail:
        "firebase-adminsdk-d5ah8@spirit-92da0.iam.gserviceaccount.com",
      privateKey:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYrmnQ1CQet27Y\ndENHxsPgTojLJzHIAQwSYs06xzH6+hs2PWiHT9YMiUTvNp7cc4vzMUf3rM4OZSTN\nBOXHK71XKcy1odGQsROLbgAWev4EdyQ14i62V0uPkhdX0B3QLtGs8KLNIcRffXky\nmFxNS2jo/zQKrcnIxGtlylLV0IHgSDIUpQozqg3GyW+N8+zydA3pB0csITpz0glT\naGerIAfwHp7tshDeH9xj0MkuH/Ue93PYXGHN+pqFQ8pr2PzCszUhwoecsuO16zlc\njsmXwkJ6D9+2oZGhpHv4n8KPeIv0DmQLMDxx48EJFwxHUtQy0TRZvyxbo1jHmNrU\nW/JeESfTAgMBAAECggEACHQLpsTAFTVJvVE+kmBGYwpmF31di7nHHdN7kmgJ89/a\nFtgyi99XNg15lBb9l64MDxRo7CUUqYZfEbzWLf9Vddh6HYpOjIjJULxv486+dqfU\nCOmzdWQC6nmHslRy+h5FfKI8GUhn03OifLMj1SG6NsA+dOLnW6bIXXPkvzLSpgSz\nWVonqf8BV2bbC5xIG7q6zNNzw+vgUnSwe7dbYCYMd6TkLeMiB33OA+Fgnl9VTQc+\naHGiT+eNaR3t0SuujtsnNiUKCgPc5a8EGK6j9SCrgty0N+MR0slJL2Uf6xPvm1va\nkwxajoa5H28V7afXmXKwK7bBppK8tEQ2yB2p3sKaJQKBgQDQGtaIcZqNQboKDR5h\n9EO0ID0uRUoTmlculAOecmsWraxMwRy6HWnzGeTK0WDMy3wiM2ur3MMSWqtsRoYE\nDXSaUyg4RUzz4iMwG1wMh14hqWmpekhojKUVWAEpygi6/GQ8Wl/Njmn+f9UUV4uQ\nN77g3zW2YASFSgrO6idjYUZ77wKBgQC70h7ddzpEsp+KBEAh53J01lpe7x7Q5KBb\ng0JHgp2v6g3d2T0eaGP2yVjtRVynZqs6hmxfDdXmcq0LWGd8dlUAGXoE55RLyg0f\nZOqWsyWb20CTQLzNF3WUFfY8eWQyhVZF0tNaiumTQT58Yc65446qpzy1kBIo9vJD\nWI2q3HH+XQKBgCD5777lSZlSrflDxOm+vC/B4BAB+NAMZ/5AhCZKeT+5u5DaFQRE\n/vH/y2p8LTumjwAYZ9pu/BZfecSJlFj2DOEbhkcMbDpFPlA0Nazikn8BCnZJo0m1\n577vGBgYJLQEpJmPtJitFYy3kvtLOBldTAj0Nd21b2HzrqzFHAK6emHPAoGBAJz+\nGYaMrkvV8rzuqJyuVWGL+qX3wg5hzBgyMyiK6TutrEGP4CKWp1gVHRvXKodSrjWR\nPuyFKBIkMLiXAIlsb8hRg0iuOarQDP/83olw3TLVpbhwGGBmB4XshZIu9a20/lQG\n0VuRWYQYuR5GswF2UD4c5AXvkv5izEW2s1PqR+6RAoGATOnaHmKSLuy3mTsk8OQL\njocbzjYirTzuphDPUCw2/qyzmdl0bMkHiiDC3xIU3p5VbJCbhKitL7u2sKyefZdt\nDIXX5Q1snvUbklG5QUgt4urtYZ3B3vo+IBbSC2rxIT22tI1wJRYtAPi48zgHvJ0g\nb98Z2RIR9w+EVJC98070B04=\n-----END PRIVATE KEY-----\n".replace(
          /\\n/g,
          "\n"
        ),
    }),
  });
}
const db = admin.firestore();

async function generateResponsiveImages({
  prompt,
  outDir = "static",
  baseName,
  quality = 80,
  apiKey = `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`,
  variants = [
    { key: "square-min", width: 640, height: 640, source: "square" },
    { key: "landscape", width: 1200, height: 630, source: "landscape" },
    { key: "square", width: 1080, height: 1080, source: "square" },
  ],
} = {}) {
  if (!apiKey)
    throw new Error(
      "Missing OpenAI API key. Set OPENAI_API_KEY or pass apiKey."
    );
  if (!prompt || typeof prompt !== "string")
    throw new Error("prompt is required and must be a string");
  if (typeof quality !== "number" || quality < 1 || quality > 100) {
    throw new Error("quality must be a number between 1 and 100");
  }

  const openai = new OpenAI({ apiKey });

  const absOutDir = path.resolve(process.cwd(), outDir);
  await fs.mkdir(absOutDir, { recursive: true });

  const id =
    (baseName && String(baseName).trim()) ||
    crypto
      .createHash("sha1")
      .update(prompt + "|" + Date.now())
      .digest("hex")
      .slice(0, 12);

  // Internal helper (kept INSIDE the function)
  const generateB64 = async (size) => {
    const res = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size, // "1024x1024" | "1536x1024" | "1024x1536"
    });
    const b64 = res?.data?.[0]?.b64_json;
    if (!b64) throw new Error(`No image returned from OpenAI for size ${size}`);
    return b64;
  };

  // 1) Generate masters (one per aspect ratio)
  const [squareB64, landscapeB64, portraitB64] = await Promise.all([
    generateB64("1024x1024"), // square master
    generateB64("1536x1024"), // landscape master
  ]);

  const masters = {
    square: Buffer.from(squareB64, "base64"),
    landscape: Buffer.from(landscapeB64, "base64"),
  };

  // 2) Produce variants (all WEBP @ quality)
  const files = {};
  await Promise.all(
    variants.map(async (v) => {
      const src = masters[v.source] || masters.square;
      const outPath = path.join(absOutDir, `${id}-${v.key}.webp`);

      await sharp(src)
        .resize(v.width, v.height, {
          fit: "cover",
          position: "attention",
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
    files, // { mobile: "...", tablet: "...", ... }
  };
}

async function firebaseAddData() {
  const snapshot = await db
    .collection("S_pages")
    .where("type", "==", "keyword")
    .get();
  let c = 0;
  console.log("✅ List Cities");
  for (const doc of snapshot.docs) {
    c++;
    if (c < 330) continue;
    const data = doc.data();
    if (data?.category === null) continue;
    console.log(
      `${c} - ${data?.display} - ${data?.name} | ${data?.slug} | ${data?.volume}`
    );

    //   const result = await generateResponsiveImages({
    //     prompt: `Create a clean background photo for a city page: ${data?.name} UK.
    // The image should contain no text or logos, only a memorable location in Bristol.
    // Use an ultra-realistic photographic style.`,
    //     outDir: "static/img",
    //     baseName: data?.slug,
    //     quality: 80,
    //   });

    const result = await generateResponsiveImages({
      prompt: `Ultra-realistic documentary-style photograph of professionals performing ${data?.name} in a real working environment.
Natural candid moment, not posed. Shot on a real camera, eye-level perspective.
Imperfect lighting, natural shadows, slight motion blur, realistic skin texture.
Real workplace details: tools in use, worn surfaces, cables, desks, paperwork, or equipment relevant to ${data?.name}.
Authentic human interaction and focus, no exaggerated expressions.
No text, no logos, no watermarks, no illustrations, no sexual, no CGI, no studio lighting, no stock-photo look.
Looks like a real photo taken on location.`,
      outDir: "static/keywords",
      baseName: data?.slug,
      quality: 80,
    });

    console.log(result.files);

    // console.dir(data, {
    //   depth: null,
    //   colors: true,
    //   maxArrayLength: null,
    // });
    // console.log(settings);
    // await db.collection("S_pages").doc(doc.id).update({
    //   settings: settings,
    // });
  }
}

firebaseAddData()
  .then(() =>
    console.log(
      "===================================================================================="
    )
  )
  .catch((error) =>
    console.error("Error processing Documents:", error.message)
  );
