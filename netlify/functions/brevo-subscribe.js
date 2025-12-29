// netlify/functions/brevo-subscribe.js
const baseHeaders = {
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

const maskEmail = (email = "") => {
  const [u, d] = String(email).split("@");
  if (!u || !d) return "***";
  return `${u.slice(0, 2)}***@${d}`;
};

exports.handler = async (event) => {
  const rid = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const log = (...args) => console.log(`[brevo-subscribe][${rid}]`, ...args);

  log("START", {
    method: event.httpMethod,
    hasBody: !!event.body,
    bodyLen: event.body ? String(event.body).length : 0,
    ua: event.headers?.["user-agent"] || event.headers?.["User-Agent"] || "",
    ip:
      event.headers?.["x-nf-client-connection-ip"] ||
      event.headers?.["x-forwarded-for"] ||
      "",
  });

  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    log("CORS preflight -> 204");
    return { statusCode: 204, headers: baseHeaders, body: "" };
  }

  // Only POST
  if (event.httpMethod !== "POST") {
    log("INVALID METHOD -> 405", event.httpMethod);
    return {
      statusCode: 405,
      headers: baseHeaders,
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listIdRaw = process.env.BREVO_LIST_ID;
  const listId = Number(listIdRaw);

  log("ENV CHECK", {
    hasApiKey: !!apiKey,
    apiKeyLen: apiKey ? apiKey.length : 0,
    apiKeyLast4: apiKey ? apiKey.slice(-4) : "",
    listIdRaw,
    listIdParsed: listId,
  });

  // IMPORTANT: listId must be integer > 0
  if (!apiKey || !Number.isInteger(listId) || listId <= 0) {
    log("ENV MISSING/INVALID -> 500");
    return {
      statusCode: 500,
      headers: baseHeaders,
      body: JSON.stringify({
        error: "Missing/invalid BREVO_API_KEY or BREVO_LIST_ID",
      }),
    };
  }

  // Parse body
  let payload = {};
  try {
    payload = JSON.parse(event.body || "{}");
    log("BODY PARSED OK", { keys: Object.keys(payload || {}) });
  } catch (e) {
    log("BODY PARSE FAIL", { msg: e?.message || String(e) });
    payload = {};
  }

  const email = String(payload.email || "")
    .trim()
    .toLowerCase();
  log("EMAIL EXTRACTED", {
    emailMasked: maskEmail(email),
    emailLen: email.length,
  });

  // minimal email check
  const emailOk = !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    log("EMAIL INVALID -> 400", { emailMasked: maskEmail(email) });
    return {
      statusCode: 400,
      headers: baseHeaders,
      body: JSON.stringify({ error: "Invalid email" }),
    };
  }

  // Call Brevo
  const url = "https://api.brevo.com/v3/contacts";
  const reqBody = {
    email,
    listIds: [listId],
    updateEnabled: true,
  };

  log("BREVO REQUEST", {
    url,
    listId,
    bodyPreview: { ...reqBody, email: maskEmail(email) },
  });

  try {
    const brevoRes = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": apiKey,
        Accept: "application/json",
      },
      body: JSON.stringify(reqBody),
    });

    log("BREVO RESPONSE META", {
      status: brevoRes.status,
      ok: brevoRes.ok,
      contentType: brevoRes.headers.get("content-type") || "",
    });

    const text = await brevoRes.text();
    log("BREVO RESPONSE TEXT LEN", text ? text.length : 0);

    let data = null;
    try {
      data = JSON.parse(text);
      log("BREVO RESPONSE JSON", {
        keys: data ? Object.keys(data) : [],
        message: data?.message || data?.error || "",
        code: data?.code || "",
      });
    } catch (_) {
      log(
        "BREVO RESPONSE NOT JSON (first 200 chars)",
        String(text).slice(0, 200)
      );
    }

    if (!brevoRes.ok) {
      const msg =
        (data && (data.message || data.error)) || text || "Brevo error";
      log("BREVO ERROR -> passthrough", {
        status: brevoRes.status,
        msg: String(msg).slice(0, 300),
      });
      return {
        statusCode: brevoRes.status,
        headers: baseHeaders,
        body: JSON.stringify({
          error: msg,
          status: brevoRes.status,
          // helpful for debugging, safe:
          brevoCode: data?.code || undefined,
        }),
      };
    }

    log("SUCCESS -> 200", { emailMasked: maskEmail(email), listId });
    return {
      statusCode: 200,
      headers: baseHeaders,
      body: JSON.stringify({ ok: true, message: "You have been subscribed." }),
    };
  } catch (err) {
    log("FETCH FAILED -> 500", { msg: err?.message || String(err) });
    return {
      statusCode: 500,
      headers: baseHeaders,
      body: JSON.stringify({ error: "Server error subscribing user." }),
    };
  }
};
