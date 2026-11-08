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


  // ---------- Citadel paint matching ----------
  function lab(hex) {
    const n = parseInt(hex.slice(1), 16);
    let [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => { v /= 255; return v > 0.04045 ? ((v + 0.055) / 1.055) ** 2.4 : v / 12.92; });
    let x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047, y = r * 0.2126 + g * 0.7152 + b * 0.0722, z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;
    const f = (t) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
    [x, y, z] = [f(x), f(y), f(z)];
    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
  }
  const PAINTS = window.CITADEL_PAINTS.map(([n, h]) => ({ n, h, lab: lab(h) }));
  const BONES = PAINTS.filter((p) => /Wraithbone|Ushabti|Screaming Skull|Rakarth|Pallid/.test(p.n));
  const M = window.CITADEL_METALS;
  const nearest = (hex, pool) => { const l = lab(hex); let best = null, bd = 1e9;
    pool.forEach((p) => { const d = (p.lab[0] - l[0]) ** 2 + (p.lab[1] - l[1]) ** 2 + (p.lab[2] - l[2]) ** 2; if (d < bd) { bd = d; best = p; } });
    return [best.n, best.h]; };
  const OVERRIDE = { "ultramarine blue": ["Macragge Blue", "#0d407f"], "sorcerous blue": ["Thousand Sons Blue", "#18abcc"],
    "wolf grey-blue": ["The Fang", "#436174"], "sea green": ["Sons of Horus Green", "#14544f"], "midnight blue": ["Kantor Blue", "#02134e"],
    "salamander green": ["Warpstone Glow", "#1e7331"], "plague green": ["Death Guard Green", "#6d774d"] };
  function paintFor(c) {
    const s = c.n.toLowerCase();
    if (OVERRIDE[s]) return OVERRIDE[s];
    if (/silver-white|polished steel|stormhost/.test(s)) return M.brightsilver;
    if (/gunmetal|metallic grey|metallic dark grey|dark silver|blue gunmetal/.test(s)) return M.gunmetal;
    if (/silver|steel|nickel/.test(s)) return M.silver;
    if (/brass/.test(s)) return M.brass;
    if (/bronze/.test(s)) return M.bronze;
    if (/copper/.test(s)) return M.copper;
    if (/\bgold\b|golden(?! yellow)/.test(s)) return M.gold;
    if (/black|sable|ebon/.test(s)) return ["Abaddon Black", "#231f20"];
    if (/off-white|bone|ivory|vellum|cream|parchment/.test(s)) return nearest(c.h, BONES);
    if (/white/.test(s) && !/blue-white/.test(s)) return ["White Scar", "#ffffff"];
    return nearest(c.h, PAINTS);
  }
  const PART = /\b(helms?|helmets?|stripe|shoulders?|pauldrons?|arms?|trim|aquila|lenses|pack|backpack|limbs|robes|tabard|faceplate|markings|flames|legs|insets?|skull|hands?|chevrons|vines|torso|knees|gauntlets|icons|horns|saltire|eye)\b/g;
  function partOf(c) {
    const words = c.n.toLowerCase().match(PART);
    if (words) return [...new Set(words)].join(" ").replace(/\bhelms?\b|\bhelmets?\b/, "helm");
    return { armour: "armour", armour2: "armour", trim: "trim" }[c.r] || "details";
  }
  function toPaints(scheme) {
    const seen = {};
    scheme.colours = scheme.colours.map((c) => {
      const [pn, ph] = paintFor(c);
      return { n: pn, h: ph, r: c.r, part: partOf(c), orig: c.n, origHex: c.h };
    }).filter((c) => {
      const prev = seen[c.n];
      if (prev) { if (!prev.part.split(", ").includes(c.part)) prev.part += ", " + c.part; return false; }
      seen[c.n] = c; return true;
    });
  }
  LEGIONS.forEach((lg) => lg.schemes.forEach(toPaints));
  CHAPTERS.forEach((ch) => toPaints(ch.scheme));

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
    const name = (c.orig || c.n).toLowerCase();
    if (/silver|steel|gold|brass|bronze|gunmetal|metal/.test(name)) return "metallic";
    if (/bone|ivory|parchment/.test(name)) return "bone";
    const { h, s, l } = hsl(c.origHex || c.h);
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
  const dots = (s) => `<span class="dotset">${s.colours.slice(0, 2).map((c) => `<i style="background:${c.h}"></i>`).join("")}</span>`;

  // ---------- entries ----------
  const entries = [], byId = {}, byLegion = {};
  LEGIONS.forEach((lg) => {
    const e = { kind: "legion", id: "legion-" + lg.num.toLowerCase(), legion: lg, name: lg.name, schemes: lg.schemes };
    entries.push(e); byId[e.id] = e; byLegion[lg.num] = { e, subs: [] };
  });
  const UNKNOWN = { num: "?", name: "Unknown lineage", primarch: "Unknown", allegiance: "Loyalist", schemes: [] };
  byLegion["?"] = { e: { kind: "group", id: "unknown", legion: UNKNOWN, name: UNKNOWN.name, schemes: [] }, subs: [] };
  CHAPTERS.forEach((ch) => {
    const lg = byLegion[ch.legion].e.legion;
    const e = { kind: "chapter", id: slug(ch.name), chapter: ch, legion: lg, name: ch.name, schemes: [ch.scheme] };
    entries.push(e); byId[e.id] = e; byLegion[ch.legion].subs.push(e);
  });
  Object.values(byLegion).forEach((g) => g.subs.sort((a, b) => a.name.localeCompare(b.name)));
  entries.forEach((e) => {
    const lg = e.legion;
    e.hay = [e.name, lg.name, lg.primarch, lg.allegiance, e.kind === "chapter" ? e.chapter.founding : "",
      ...e.schemes.flatMap((s) => s.colours.map((c) => c.n + " " + c.orig + " " + family(c)))].join(" ").toLowerCase();
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
    const unk = byLegion["?"].subs;
    if (unk.length) {
      const isOpen = open.has("?");
      html += `<div class="side-group"><div class="side-title">Other Chapters</div>
        <button class="leg-row ${isOpen ? "open" : ""}" data-toggle="?"><span class="caret">▸</span><span class="num">?</span><span class="nm">Unknown lineage</span><span class="cnt">${unk.length}</span></button>
        ${isOpen ? `<div class="subs">${unk.map((s) => `<button data-go="${s.id}" class="${current === s.id ? "sel" : ""}">${dots(s.schemes[0])}${esc(s.name)}</button>`).join("")}</div>` : ""}</div>`;
    }
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

  // ---------- Primaris status ----------
  const FIRSTBORN_ONLY = new Set(["Astral Knights", "Knights of Blood", "Shadow Wolves", "Soul Drinkers", "Fire Hawks", "Iron Hounds",
    "Emperor's Swords", "Crimson Castellans", "Astral Claws", "Relictors", "Sky Sentinels", "Angels Excelsis", "Angels of Retribution",
    "Crimson Consuls", "Marines Mordant", "Obsidian Glaives", "Star Scorpions", "Knights of Eternity", "Brazen Skulls", "Fists Exemplar",
    "Invictors", "Crimson Sabres", "Angels Resplendent"]);
  const SPECIAL_PRIMARIS = { "Grey Knights": "No Primaris (Grey Knights)", "Legion of the Damned": "Unknown (spectral warriors)", "Deathwatch": "Firstborn & Primaris (from many Chapters)" };
  function primaris(e) {
    if (e.kind === "legion") return e.legion.allegiance === "Traitor" ? "No Primaris (Traitor Legion)" : "Firstborn & Primaris";
    if (SPECIAL_PRIMARIS[e.name]) return SPECIAL_PRIMARIS[e.name];
    if (/Ultima/i.test(e.chapter.founding)) return "All Primaris (Ultima Founding)";
    if (FIRSTBORN_ONLY.has(e.name)) return "Firstborn only (lost or renegade before the Primaris)";
    return "Firstborn & Primaris";
  }
  const RENEGADE = new Set(["Soul Drinkers", "Knights of Blood", "Relictors", "Crimson Sabres"]), TRAITOR = new Set(["Astral Claws", "Invictors"]);
  const allegianceOf = (e) => e.kind === "legion" ? e.legion.allegiance : TRAITOR.has(e.name) ? "Traitor" : RENEGADE.has(e.name) ? "Renegade" : "Loyalist";
  const allegBadge = (e) => `<span class="badge ${allegianceOf(e)}">${allegianceOf(e)}</span>`;
  const primBadge = (e) => `<span class="badge prim">${esc(primaris(e))}</span>`;

  // ---------- views ----------
  function schemeBlock(s) {
    return `<div class="scheme">${pad(s)}<div>${s.label ? `<div class="name">${esc(s.label)}</div>` : ""}
      <div class="chiplist">${s.colours.map((c) => `<button class="chip" data-copy="${esc(c.n)}" title="Copy &quot;${esc(c.n)}&quot;"><i style="background:${c.h}"></i>${esc(c.n)} <small>${esc(c.part)}</small></button>`).join("")}</div>
      ${s.pattern !== "solid" ? `<div class="hint">${s.pattern === "halved" ? "Halved" : "Quartered"} livery</div>` : ""}</div></div>`;
  }
  const favBtn = (id) => `<button class="btn ${favs.has(id) ? "on" : ""}" data-fav="${id}">${favs.has(id) ? "★ Shortlisted" : "☆ Shortlist"}</button>`;
  const linkBtns = (name) => linksFor(name).map((l) => `<a class="btn" href="${l.u}" target="_blank" rel="noopener">${esc(l.t)} ↗</a>`).join("");
  const tile = (e) => `<button class="tile" data-go="${e.id}">${plate(plateSrc(e), e.name)}<span class="t">${esc(e.name)}</span>${bar(e.schemes[0])}</button>`;

  function welcome() {
    return `<div class="welcome"><h1>Kuur0's Warhammer Color Codex</h1></div>`;
  }

  function legionView(e) {
    const lg = e.legion, g = byLegion[lg.num];
    const pics = [...(PRIMARCH_PICS[lg.primarch] || []).map((p) => ({ label: `${lg.primarch}: ${p.label}`, src: imgUrl[p.file] })),
      { label: `${lg.name.split(" /")[0]}: colour scheme`, src: plateSrc(e) }];
    return `<div class="head"><div><h1>${esc(lg.name)}</h1>
        <div class="meta">Legion ${lg.num} · Primarch ${esc(lg.primarch)} · ${esc(lg.status)}</div>
        <div class="badges"><span class="badge ${lg.allegiance}">${lg.allegiance}</span>${primBadge(e)}</div></div>
        <div class="actions">${favBtn(e.id)}${linkBtns(lg.name)}</div></div>
      <div class="prose"><p>${esc(lg.primarchBio)}</p><p>${esc(lg.legionBio)}</p></div>
      <div class="section-title">Colour scheme${lg.schemes.length > 1 ? "s" : ""}</div><div class="section-hint">Closest Citadel paints · click one to copy its name</div><div class="schemes">${lg.schemes.map(schemeBlock).join("")}</div>
      <div class="section-title">Pictures</div>
      <div class="pics">${pics.map((p) => `<figure>${plate(p.src, p.label)}<figcaption>${esc(p.label)}</figcaption></figure>`).join("")}</div>`;
  }

  function chapterView(e) {
    const ch = e.chapter, lg = e.legion, g = byLegion[lg.num];
    const unk = lg.num === "?";
    return `<div class="crumbs">${unk ? "Unknown lineage" : `<button data-go="${g.e.id}">${esc(lg.name)}</button>`} › ${unk ? "Chapter" : "Successor Chapter"}</div>
      <div class="head"><div><h1>${esc(ch.name)}</h1><div class="meta">${unk ? "Gene-seed origin unknown" : `Successor of the ${esc(lg.name)}`} · Founding: ${esc(ch.founding)}</div>
        <div class="badges">${allegBadge(e)}${primBadge(e)}</div></div>
        <div class="actions">${favBtn(e.id)}${linkBtns(ch.name)}</div></div>
      <div class="prose">${ch.bio.split(/\n\n+/).map((p) => `<p>${esc(p)}</p>`).join("")}</div>
      <div class="section-title">Colour scheme</div><div class="section-hint">Closest Citadel paints · click one to copy its name</div><div class="schemes">${schemeBlock(ch.scheme)}</div>
      <div class="section-title">Picture</div><div class="pics"><figure>${plate(plateSrc(e), ch.name)}<figcaption>${esc(ch.name)}: colour scheme</figcaption></figure></div>`;
  }

  function route() {
    const id = location.hash.replace(/^#\/?/, "");
    const e = byId[id];
    current = e ? e.id : null;
    if (e) open.add(e.legion.num);
    uid = 0;
    $("#view").innerHTML = !e ? welcome() : e.kind === "legion" ? legionView(e) : chapterView(e);
    document.title = e ? `${e.name} · Kuur0's Warhammer Color Codex` : "Kuur0's Warhammer Color Codex";
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
      ? hits.map((e, i) => `<button data-go="${e.id}" data-i="${i}">${e.schemes[0] ? dots(e.schemes[0]) : ""}<span>${esc(e.kind === "legion" ? `${e.legion.name} (${e.legion.primarch})` : e.name)}</span><span class="sub">${e.kind === "legion" ? "Legion " + e.legion.num : (e.legion.num === "?" ? "Unknown lineage" : esc(e.legion.name.split(" /")[0]) + " successor")}</span></button>`).join("")
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
    const cp = ev.target.closest("[data-copy]");
    if (cp) {
      const t = cp.dataset.copy;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => toast(`Copied ${t}`), () => toast(t));
      return;
    }
    const tg = ev.target.closest("[data-toggle]");
    if (tg && (ev.target.closest(".caret") || !tg.dataset.go)) {
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
