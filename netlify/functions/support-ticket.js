// netlify/functions/support-ticket.js
"use strict";

const baseHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
};

const safe = (v) => String(v ?? "").trim();
const clamp = (s, n) => (s.length > n ? s.slice(0, n) : s);

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

exports.handler = async (event) => {
  const rid = `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  const log = (...args) => console.log(`[support-ticket][${rid}]`, ...args);

  // CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: baseHeaders, body: "" };
  }

  // Only POST
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: baseHeaders,
      body: JSON.stringify({ success: false, rid, message: "" }),
    };
  }

  // Parse JSON body safely (NEVER throw -> always JSON response)
  let body = {};
  try {
    body =
      typeof event.body === "string" && event.body.length
        ? JSON.parse(event.body)
        : {};
  } catch (e) {
    log("BODY_PARSE_FAIL", e?.message || String(e), {
      bodyLen: event.body ? String(event.body).length : 0,
      bodyFirst200: String(event.body || "").slice(0, 200),
    });
    return {
      statusCode: 400,
      headers: baseHeaders,
      body: JSON.stringify({ success: false, rid, message: "" }),
    };
  }

  const reqRid = safe(body.rid) || rid;

  try {
    const apiKey = process.env.BREVO_API_KEY;
    const toEmail = process.env.SUPPORT_TO_EMAIL || "parts.autoriven@gmail.com";

    // IMPORTANT: sender must be verified in Brevo
    const fromEmail = process.env.SUPPORT_FROM_EMAIL || "info@autoriven.eu";
    const fromName = process.env.SUPPORT_FROM_NAME || "AutoRiven Support";

    if (!apiKey || !toEmail) {
      log("ENV_MISSING", { hasKey: !!apiKey, hasTo: !!toEmail });
      return {
        statusCode: 500,
        headers: baseHeaders,
        body: JSON.stringify({ success: false, rid: reqRid, message: "" }),
      };
    }

    // Fields
    const fullName = safe(body.fullName);
    const phone = safe(body.phone);
    const email = safe(body.email).toLowerCase();
    const frameSerialNumber = safe(body.frameSerialNumber);
    const message = safe(body.message);
    const page = safe(body.page);
    const ua = safe(body.ua);

    // Minimal validation
    const emailOk = !!email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!fullName || !phone || !emailOk || !message) {
      log("VALIDATION_FAIL", {
        reqRid,
        hasFullName: !!fullName,
        hasPhone: !!phone,
        emailOk,
        hasMessage: !!message,
      });
      return {
        statusCode: 400,
        headers: baseHeaders,
        body: JSON.stringify({ success: false, rid: reqRid, message: "" }),
      };
    }

    // Email HTML (this is the EMAIL content, not the API response)
    const html = `
      <div style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.4;">
        <p><strong>RID:</strong> ${escapeHtml(reqRid)}</p>
        <p><strong>Full Name:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Frame/Order:</strong> ${escapeHtml(frameSerialNumber)}</p>
        <hr/>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr/>
        <p><strong>Page:</strong> ${escapeHtml(page)}</p>
        <p><strong>UA:</strong> ${escapeHtml(ua)}</p>
      </div>
    `.trim();

    const subject = clamp(`Support Ticket ${reqRid}`, 120);

    const brevoPayload = {
      sender: { email: fromEmail, name: fromName },
      to: [{ email: toEmail }],
      replyTo: { email, name: fullName },
      subject,
      htmlContent: html,
    };

    log("SEND", { reqRid, toEmail });

    // fetch compatibility (Node 18+ has global fetch)
    const fetchFn =
      typeof fetch === "function"
        ? fetch
        : (await import("node-fetch")).default;

    const resp = await fetchFn("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify(brevoPayload),
    });

    const contentType = resp.headers.get("content-type") || "";
    const text = await resp.text();

    log("BREVO_META", {
      status: resp.status,
      ok: resp.ok,
      contentType,
      textFirst200: String(text).slice(0, 200),
    });

    if (!resp.ok) {
      // keep “no new text” behavior
      return {
        statusCode: 502,
        headers: baseHeaders,
        body: JSON.stringify({ success: false, rid: reqRid, message: "" }),
      };
    }

    return {
      statusCode: 200,
      headers: baseHeaders,
      body: JSON.stringify({ success: true, rid: reqRid }),
    };
  } catch (err) {
    log("ERROR", err?.message || String(err));

    // keep “no new text” behavior
    return {
      statusCode: 500,
      headers: baseHeaders,
      body: JSON.stringify({ success: false, rid: reqRid, message: "" }),
    };
  }
};
