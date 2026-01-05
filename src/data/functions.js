/**
 * List Functions Utils
 */

export const splitParagraph = (text) => {
  const midpoint = Math.floor(text.length / 2);
  const before = text.lastIndexOf(".", midpoint);
  const after = text.indexOf(".", midpoint + 1);
  const splitIndex =
    before === -1
      ? after !== -1
        ? after + 1
        : midpoint
      : after === -1 || midpoint - before <= after - midpoint
      ? before + 1
      : after + 1;

  return [text.slice(0, splitIndex).trim(), text.slice(splitIndex).trim()];
};

export const productDescription = (description) => {
  if (!description) return [""];

  const periods = [...description.matchAll(/\./g)].map((match) => match.index);

  if (periods.length === 0) {
    return [description];
  }
  if (description.length > 850) {
    const firstMiddleIndex = Math.floor(description.length / 3);
    const secondMiddleIndex = Math.floor((2 * description.length) / 3);

    const bestFirstSplitIndex = periods.reduce((prev, curr) =>
      Math.abs(curr - firstMiddleIndex) < Math.abs(prev - firstMiddleIndex)
        ? curr
        : prev
    );

    const bestSecondSplitIndex = periods.reduce((prev, curr) =>
      Math.abs(curr - secondMiddleIndex) < Math.abs(prev - secondMiddleIndex)
        ? curr
        : prev
    );

    return [
      description.substring(0, bestFirstSplitIndex + 1).trim(),
      description
        .substring(bestFirstSplitIndex + 1, bestSecondSplitIndex + 1)
        .trim(),
      description.substring(bestSecondSplitIndex + 1).trim(),
    ];
  }

  const middleIndex = Math.floor(description.length / 2);
  const bestSplitIndex = periods.reduce((prev, curr) =>
    Math.abs(curr - middleIndex) < Math.abs(prev - middleIndex) ? curr : prev
  );

  return [
    description.substring(0, bestSplitIndex + 1).trim(),
    description.substring(bestSplitIndex + 1).trim(),
  ];
};

export const slugToTitle = (text) => {
  if (!text || typeof text !== "string") return "";

  return text
    .toLowerCase()
    .split(/[-_]/g)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatUpdatedDate = (value) => {
  if (!value) return "";

  const date =
    value?.toDate?.() ??
    (typeof value === "number" ? new Date(value) : new Date(value));

  if (isNaN(date.getTime())) return "";

  return `Updated ${date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })}`;
};

export const facebookImage = (social) => {
  if (!Array.isArray(social)) return null;

  // 1. Find a facebook link
  const fbLink = social.find(
    (u) => typeof u === "string" && /(facebook\.com|fb\.me)/i.test(u)
  );

  if (!fbLink) return null;

  // 2. Safe URL parse
  let url;
  try {
    url = new URL(fbLink.startsWith("http") ? fbLink : `https://${fbLink}`);
  } catch {
    return null;
  }

  // 3. profile.php?id=123
  const idParam = url.searchParams.get("id");
  if (idParam && /^\d+$/.test(idParam)) {
    return `https://graph.facebook.com/${idParam}/picture?type=square&width=200&height=200`;
  }

  // 4. Path parsing
  const parts = url.pathname
    .split("/")
    .map((p) => p.trim())
    .filter(Boolean);

  if (!parts.length) return null;

  // pages/name/123 or people/name/123
  if (
    (parts[0] === "pages" || parts[0] === "people") &&
    parts[2] &&
    /^\d+$/.test(parts[2])
  ) {
    return `https://graph.facebook.com/${parts[2]}/picture?type=square&width=200&height=200`;
  }

  // pg/username
  if (parts[0] === "pg" && parts[1]) {
    return `https://graph.facebook.com/${parts[1]}/picture?type=square&width=200&height=200`;
  }

  // Normal username page
  const handle = parts[0].replace(/^@/, "").replace(/\.+$/, "");

  const blocked = new Set([
    "home.php",
    "watch",
    "groups",
    "events",
    "marketplace",
    "login",
    "share",
    "reel",
  ]);

  if (!handle || blocked.has(handle.toLowerCase())) return null;

  return `https://graph.facebook.com/${handle}/picture?type=square&width=200&height=200`;
};
