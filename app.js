(() => {
  "use strict";
  const { LEGIONS, CHAPTERS, PLATES, PRIMARCH_PICS } = window.CODEX;

  // ---------- helpers ----------
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const wikiTitle = (s) => encodeURIComponent(s.replace(/ /g, "_"));
  const WIKI_NAME = { "Sons of Horus / Black Legion": "Sons of Horus", "Carcharodons Astra": "Carcharodons" };
  const linksFor = (name) => {
    const w = WIKI_NAME[name] || name;
    return [
      { t: "Lexicanum", u: `https://wh40k.lexicanum.com/wiki/${wikiTitle(w)}` },
      { t: "Fandom wiki", u: `https://warhammer40k.fandom.com/wiki/${wikiTitle(w)}` },
    ];
  };

  // ---------- colour families (search by colour word) ----------
  function hsl(hex) {
    const n = parseInt(hex.slice(1), 16);
    const r = (n >> 16 & 255) / 255, g = (n >> 8 & 255) / 255, b = (n & 255) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2, d = max - min;
    let h = 0, s = 0;
    if (d) {
      s = d / (1 - Math.abs(2 * l - 1));
      h = max === r ? 60 * (((g - b) / d) % 6) : max === g ? 60 * ((b - r) / d + 2) : 60 * ((r - g) / d + 4);
      if (h < 0) h += 360;
    }
    return { h, s, l };
  }
  function family(c) {
    const name = c.n.toLowerCase();
    if (/silver|steel|gold|brass|bronze|gunmetal|metal/.test(name)) return "metallic";
    if (/bone|ivory|parchment/.test(name)) return "bone";
    const { h, s, l } = hsl(c.h);
    if (l < 0.16) return "black";
    if (s < 0.12) return l > 0.82 ? "white" : "grey";
    if (h >= 15 && h < 45 && l < 0.4) return "brown";
    if (h < 12 || h >= 340) return "red";
    if (h < 40) return "orange";
    if (h < 68) return "yellow";
    if (h < 165) return "green";
    if (h < 195) return "teal";
    if (h < 255) return "blue";
    if (h < 290) return "purple";
    return "pink";
  }

  // ---------- generic heraldic pauldron swatch ----------
  let uid = 0;
  const PAD = "M8 44 C8 14 26 6 50 6 C74 6 92 14 92 44 L92 92 C76 104 24 104 8 92 Z";
  function pad(scheme) {
    const id = "p" + (++uid);
    const pick = (r) => scheme.colours.find((c) => c.r === r);
    const a1 = (pick("armour") || scheme.colours[0]).h;
    const a2 = (pick("armour2") || pick("armour") || scheme.colours[0]).h;
    const trim = (pick("trim") || pick("armour") || scheme.colours[0]).h;
    const emblem = (pick("detail") || pick("trim") || scheme.colours[0]).h;
    let body = `<rect width="100" height="110" fill="${a1}"/>`;
    if (scheme.pattern === "halved") body = `<rect width="50" height="110" fill="${a1}"/><rect x="50" width="50" height="110" fill="${a2}"/>`;
    if (scheme.pattern === "quartered") body = `<rect width="50" height="55" fill="${a1}"/><rect x="50" width="50" height="55" fill="${a2}"/><rect y="55" width="50" height="55" fill="${a2}"/><rect x="50" y="55" width="50" height="55" fill="${a1}"/>`;
    return `<svg class="pad" viewBox="0 0 100 110" aria-hidden="true"><defs><clipPath id="${id}c"><path d="${PAD}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2=".6" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient></defs>
      <g clip-path="url(#${id}c)">${body}<rect width="100" height="110" fill="url(#${id}g)"/></g>
      <path d="${PAD}" fill="none" stroke="${trim}" stroke-width="13" clip-path="url(#${id}c)"/><path d="${PAD}" fill="none" stroke="rgba(0,0,0,.55)" stroke-width="1.5"/>
      <circle cx="50" cy="57" r="11" fill="${emblem}" stroke="rgba(0,0,0,.45)" stroke-width="1.5"/></svg>`;
  }
  const bar = (s) => `<div class="swatches">${s.colours.map((c) => `<span class="${c.r}" style="background:${c.h}"></span>`).join("")}</div>`;
  const dots = (s) => `<span class="dotset">${s.colours.filter((c) => c.r === "armour" || c.r === "armour2" || c.r === "trim").slice(0, 3).map((c) => `<i style="background:${c.h}"></i>`).join("")}</span>`;

  // ---------- entries ----------
  const entries = [], byId = {}, byLegion = {};
  LEGIONS.forEach((lg) => {
    const e = { kind: "legion", id: "legion-" + lg.num.toLowerCase(), legion: lg, name: lg.name, schemes: lg.schemes };
    entries.push(e); byId[e.id] = e; byLegion[lg.num] = { e, subs: [] };
  });
  CHAPTERS.forEach((ch) => {
    const lg = byLegion[ch.legion].e.legion;
    const e = { kind: "chapter", id: slug(ch.name), chapter: ch, legion: lg, name: ch.name, schemes: [ch.scheme] };
    entries.push(e); byId[e.id] = e; byLegion[ch.legion].subs.push(e);
  });
  Object.values(byLegion).forEach((g) => g.subs.sort((a, b) => a.name.localeCompare(b.name)));
  entries.forEach((e) => {
    const lg = e.legion;
    e.hay = [e.name, lg.name, lg.primarch, lg.allegiance, e.kind === "chapter" ? e.chapter.founding : "",
      ...e.schemes.flatMap((s) => s.colours.map((c) => c.n + " " + family(c)))].join(" ").toLowerCase();
  });

  // ---------- pictures: hand-picked files on the Warhammer 40k Fandom wiki, loaded live ----------
  const imgUrl = {};
  let imagesDone = false;
  async function loadImages() {
    const files = [...new Set([...Object.values(PLATES), ...Object.values(PRIMARCH_PICS).flat().map((p) => p.file)])];
    const norm = (f) => { const t = f.replace(/_/g, " "); return t.charAt(0).toUpperCase() + t.slice(1); };
    const byNorm = Object.fromEntries(files.map((f) => [norm(f), f]));
    for (let i = 0; i < files.length; i += 50) {
      try {
        const url = "https://warhammer40k.fandom.com/api.php?" + new URLSearchParams({
          action: "query", format: "json", origin: "*", prop: "imageinfo", iiprop: "url", iiurlwidth: "700",
          titles: files.slice(i, i + 50).map((f) => "File:" + f).join("|") });
        const j = await (await fetch(url)).json();
        Object.values(j.query.pages || {}).forEach((pg) => {
          const f = byNorm[norm(pg.title.replace(/^File:/, ""))];
          if (f && pg.imageinfo) imgUrl[f] = pg.imageinfo[0].thumburl || pg.imageinfo[0].url;
        });
      } catch (err) { console.warn("Picture lookup failed", err); }
    }
    imagesDone = true;
    route();
  }
  const plateSrc = (e) => imgUrl[PLATES[e.name]];
  const plate = (src, alt) => src
    ? `<div class="plate"><img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.parentNode.classList.add('empty');this.parentNode.textContent='N/A'"></div>`
    : `<div class="plate empty">${imagesDone ? "N/A" : "Loading…"}</div>`;

  // ---------- shortlist ----------
  let favs = new Set();
  try { favs = new Set(JSON.parse(localStorage.getItem("codex-favs") || "[]")); } catch (_) {}
  const saveFavs = () => { try { localStorage.setItem("codex-favs", JSON.stringify([...favs])); } catch (_) {} };

  // ---------- sidebar ----------
  const open = new Set();
  let current = null;
  function sidebar() {
    const groups = [["Loyalist Legions", "Loyalist"], ["Traitor Legions", "Traitor"]];
    let html = "";
    groups.forEach(([title, key]) => {
      html += `<div class="side-group"><div class="side-title">${title}</div>`;
      LEGIONS.filter((lg) => lg.allegiance === key).forEach((lg) => {
        const g = byLegion[lg.num];
        const isOpen = open.has(lg.num);
        html += `<button class="leg-row ${isOpen ? "open" : ""} ${current === g.e.id ? "sel" : ""}" data-go="${g.e.id}" data-toggle="${lg.num}">
          <span class="caret">${g.subs.length ? "▸" : ""}</span><span class="num">${lg.num}</span><span class="nm">${esc(lg.name.split(" /")[0])}</span>${lg.schemes[0] ? dots(lg.schemes[0]) : ""}</button>`;
        if (isOpen && g.subs.length) {
          html += `<div class="subs">${g.subs.map((s) => `<button data-go="${s.id}" class="${current === s.id ? "sel" : ""}">${dots(s.schemes[0])}${esc(s.name)}</button>`).join("")}</div>`;
        }
      });
      html += `</div>`;
    });
    $("#sidebar").innerHTML = html;
  }

  // ---------- shortlist button & panel ----------
  function shortlistUI() {
    const n = favs.size, c = $("#slCount");
    c.textContent = n; c.hidden = n === 0;
    const items = [...favs].map((id) => byId[id]).filter(Boolean);
    $("#slPanel").innerHTML = items.length
      ? `<div class="sl-head">Your shortlist (${items.length})</div>` + items.map((e) => `<div class="sl-item"><button class="sl-go" data-go="${e.id}">${e.schemes[0] ? dots(e.schemes[0]) : ""}<span>${esc(e.name.split(" /")[0])}</span><span class="sub">${e.kind === "legion" ? "Legion " + e.legion.num : esc(e.legion.name.split(" /")[0])}</span></button><button class="sl-x" data-fav="${e.id}" title="Remove" aria-label="Remove ${esc(e.name)}">×</button></div>`).join("")
      : `<div class="sl-empty">Nothing shortlisted yet. Use ☆ Shortlist on any Legion or Chapter to save it here.</div>`;
  }

  // ---------- views ----------
  function schemeBlock(s) {
    const seen = new Set();
    const cols = s.colours.filter((c) => { const k = c.h + c.n; if (seen.has(k)) return false; seen.add(k); return true; });
    return `<div class="scheme">${pad(s)}<div>${s.label ? `<div class="name">${esc(s.label)}</div>` : ""}
      <div class="chiplist">${cols.map((c) => `<button class="chip" data-hex="${c.h}" title="Copy ${c.h}"><i style="background:${c.h}"></i>${esc(c.n)} <small>${c.h}</small></button>`).join("")}</div>
      <div class="hint">${s.pattern === "halved" ? "Halved livery" : s.pattern === "quartered" ? "Quartered livery" : "Solid main colour"} · click a colour to copy its hex</div></div></div>`;
  }
  const favBtn = (id) => `<button class="btn ${favs.has(id) ? "on" : ""}" data-fav="${id}">${favs.has(id) ? "★ Shortlisted" : "☆ Shortlist"}</button>`;
  const linkBtns = (name) => linksFor(name).map((l) => `<a class="btn" href="${l.u}" target="_blank" rel="noopener">${esc(l.t)} ↗</a>`).join("");
  const tile = (e) => `<button class="tile" data-go="${e.id}">${plate(plateSrc(e), e.name)}<span class="t">${esc(e.name)}</span>${bar(e.schemes[0])}</button>`;

  function welcome() {
    return `<div class="welcome"><h1>Colour Codex</h1><p>Pick a Legion or Chapter from the sidebar, or search above.</p></div>`;
  }

  function legionView(e) {
    const lg = e.legion, g = byLegion[lg.num];
    const pics = [...(PRIMARCH_PICS[lg.primarch] || []).map((p) => ({ label: `${lg.primarch}: ${p.label}`, src: imgUrl[p.file] })),
      { label: `${lg.name.split(" /")[0]}: colour scheme`, src: plateSrc(e) }];
    return `<div class="head"><div><h1>${esc(lg.name)}</h1>
        <div class="meta">Legion ${lg.num} · Primarch ${esc(lg.primarch)} · ${esc(lg.status)} · <span class="badge ${lg.allegiance}">${lg.allegiance}</span></div></div>
        <div class="actions">${favBtn(e.id)}${linkBtns(lg.name)}</div></div>
      <div class="prose"><p>${esc(lg.primarchBio)}</p><p>${esc(lg.legionBio)}</p></div>
      <div class="section-title">Colour scheme${lg.schemes.length > 1 ? "s" : ""}</div><div class="schemes">${lg.schemes.map(schemeBlock).join("")}</div>
      <div class="section-title">Pictures</div>
      <div class="pics">${pics.map((p) => `<figure>${plate(p.src, p.label)}<figcaption>${esc(p.label)}</figcaption></figure>`).join("")}</div>`;
  }

  function chapterView(e) {
    const ch = e.chapter, lg = e.legion, g = byLegion[lg.num];
    return `<div class="crumbs"><button data-go="${g.e.id}">${esc(lg.name)}</button> › Successor Chapter</div>
      <div class="head"><div><h1>${esc(ch.name)}</h1><div class="meta">Successor of the ${esc(lg.name)} · Founding: ${esc(ch.founding)}</div></div>
        <div class="actions">${favBtn(e.id)}${linkBtns(ch.name)}</div></div>
      <div class="prose"><p>${esc(ch.bio)}</p></div>
      <div class="section-title">Colour scheme</div>${schemeBlock(ch.scheme)}
      <div class="section-title">Picture</div><div class="pics"><figure>${plate(plateSrc(e), ch.name)}<figcaption>${esc(ch.name)}: colour scheme</figcaption></figure></div>`;
  }

  function route() {
    const id = location.hash.replace(/^#\/?/, "");
    const e = byId[id];
    current = e ? e.id : null;
    if (e) open.add(e.legion.num);
    uid = 0;
    $("#view").innerHTML = !e ? welcome() : e.kind === "legion" ? legionView(e) : chapterView(e);
    document.title = e ? `${e.name} · Colour Codex` : "Colour Codex · Warhammer 40k Legions & Chapters";
    sidebar();
    shortlistUI();
    window.scrollTo(0, 0);
    document.body.classList.remove("nav-open");
  }
  const go = (id) => { if (location.hash === "#/" + id) route(); else location.hash = "/" + id; };

  // ---------- search ----------
  let active = -1, hits = [];
  function search(q) {
    const box = $("#results");
    q = q.trim().toLowerCase();
    if (!q) { box.hidden = true; return; }
    const words = q.split(/\s+/);
    hits = entries.filter((e) => words.every((w) => e.hay.includes(w)))
      .sort((a, b) => (b.name.toLowerCase().startsWith(q) - a.name.toLowerCase().startsWith(q)) || (a.kind === "legion" ? -1 : 1))
      .slice(0, 14);
    active = -1;
    box.innerHTML = hits.length
      ? hits.map((e, i) => `<button data-go="${e.id}" data-i="${i}">${e.schemes[0] ? dots(e.schemes[0]) : ""}<span>${esc(e.kind === "legion" ? `${e.legion.name} (${e.legion.primarch})` : e.name)}</span><span class="sub">${e.kind === "legion" ? "Legion " + e.legion.num : esc(e.legion.name.split(" /")[0]) + " successor"}</span></button>`).join("")
      : `<div class="none">No matches. Try a name, Primarch or a colour like "purple".</div>`;
    box.hidden = false;
  }
  $("#search").addEventListener("input", (ev) => search(ev.target.value));
  $("#search").addEventListener("focus", (ev) => ev.target.value && search(ev.target.value));
  $("#search").addEventListener("keydown", (ev) => {
    const btns = [...$("#results").querySelectorAll("button")];
    if (ev.key === "ArrowDown" || ev.key === "ArrowUp") {
      ev.preventDefault();
      active = Math.max(0, Math.min(btns.length - 1, active + (ev.key === "ArrowDown" ? 1 : -1)));
      btns.forEach((b, i) => b.classList.toggle("active", i === active));
    } else if (ev.key === "Enter" && btns.length) {
      go(btns[Math.max(active, 0)].dataset.go); closeSearch();
    } else if (ev.key === "Escape") closeSearch();
  });
  function closeSearch() { $("#results").hidden = true; $("#search").blur(); }

  // ---------- events ----------
  let toastT;
  const toast = (m) => { const t = $("#toast"); t.textContent = m; t.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 1400); };
  document.addEventListener("click", (ev) => {
    if (!ev.target.closest(".search")) $("#results").hidden = true;
    if (ev.target.closest("#slBtn")) { $("#slPanel").hidden = !$("#slPanel").hidden; return; }
    if (!ev.target.closest(".shortlist") || ev.target.closest(".sl-go")) $("#slPanel").hidden = true;
    const fav = ev.target.closest("[data-fav]");
    if (fav) {
      const id = fav.dataset.fav;
      favs.has(id) ? favs.delete(id) : favs.add(id); saveFavs();
      toast(favs.has(id) ? "Added to shortlist" : "Removed from shortlist");
      const keepOpen = !!fav.closest("#slPanel");
      route();
      if (keepOpen) $("#slPanel").hidden = false;
      return;
    }
    const hex = ev.target.closest("[data-hex]");
    if (hex) {
      const h = hex.dataset.hex;
      (navigator.clipboard ? navigator.clipboard.writeText(h) : Promise.reject()).then(() => toast(`Copied ${h}`), () => toast(h));
      return;
    }
    const tg = ev.target.closest("[data-toggle]");
    if (tg && ev.target.closest(".caret")) {
      const n = tg.dataset.toggle; open.has(n) ? open.delete(n) : open.add(n); sidebar(); return;
    }
    const g = ev.target.closest("[data-go]");
    if (g) {
      const e = byId[g.dataset.go];
      if (tg && e && current === e.id) { const n = tg.dataset.toggle; open.has(n) ? open.delete(n) : open.add(n); sidebar(); return; }
      go(g.dataset.go); closeSearch(); $("#search").value = ""; return;
    }
  });
  $("#home").addEventListener("click", (ev) => { ev.preventDefault(); history.pushState(null, "", location.pathname); route(); });
  $("#menuBtn").addEventListener("click", () => document.body.classList.toggle("nav-open"));
  window.addEventListener("hashchange", route);

  route();
  loadImages();
})();
