document.addEventListener("DOMContentLoaded", () => {
  let i = [],
    s = !1,
    t = document.getElementById("searchInput"),
    l = document.getElementById("searchResults"),
    m = document.getElementById("menu");
  if (!t || !l || !m) return;
  t.addEventListener("focus", () => {
    if (s) return;
    fetch("/search-index.json")
      .then((r) => r.json())
      .then((d) => {
        (i = d), (s = !0);
      });
  });
  t.addEventListener("input", (e) => {
    if (!s) return;
    const q = e.target.value.toLowerCase();
    l.innerHTML = "";
    const r = i.filter((x) => x.name.toLowerCase().includes(q));
    (m.style.display = q && r.length ? "none" : ""),
      (l.style.display = q && r.length ? "" : "none"),
      r.slice(0, 10).forEach((x) => {
        const li = document.createElement("li"),
          a = document.createElement("a");
        (a.href = "/" + x.slug + "/"),
          (a.textContent = x.name),
          li.appendChild(a),
          l.appendChild(li);
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".img-wrap img").forEach((img) => {
    img.onerror = () => {
      if (!img._fb && img.dataset.fb)
        return (img._fb = 1), (img.src = img.dataset.fb);
      if (!img._main && img.dataset.main)
        return (img._main = 1), (img.src = img.dataset.main);
      if (!img._def && img.dataset.default)
        return (img._def = 1), (img.src = img.dataset.default);
      img.closest(".img-wrap")?.remove();
    };
    img.onerror(); // trigger first load
  });
});
