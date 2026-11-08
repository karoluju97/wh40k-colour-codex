(() => {
  "use strict";
  const { LEGIONS, CHAPTERS } = window.CODEX;

  // ---------- helpers ----------
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const wikiTitle = (s) => encodeURIComponent(s.replace(/ /g, "_")).replace(/%2F/g, "/");

  const WIKI_NAME = { "Sons of Horus / Black Legion": "Sons of Horus", "Carcharodons Astra": "Carcharodons" };
  const links = (name, extra = []) => {
    const w = WIKI_NAME[name] || name;
    const out = [
      { t: "Lexicanum", u: `https://wh40k.lexicanum.com/wiki/${wikiTitle(w)}` },
      { t: "Fandom wiki (art & gallery)", u: `https://warhammer40k.fandom.com/wiki/${wikiTitle(w)}` },
      { t: "Image search: painted models", u: `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(w + " space marines painted miniatures")}` },
    ];
    return out.concat(extra);
  };

  // ---------- colour families ----------
  const FAMILIES = [
    ["red", "Red", "#a3151c"], ["orange", "Orange", "#d9701f"], ["yellow", "Yellow", "#eec12a"],
    ["green", "Green", "#2f7a3b"], ["teal", "Teal", "#1f7a7a"], ["blue", "Blue", "#1d3f8f"],
    ["purple", "Purple", "#5b2a6e"], ["pink", "Pink", "#d1579c"], ["brown", "Brown", "#6b4a2e"],
    ["bone", "Bone / ivory", "#d9cca6"], ["white", "White", "#ecebe6"], ["grey", "Grey", "#7d8287"],
    ["black", "Black", "#1b1b1e"], ["metal", "Metallic", "linear-gradient(135deg,#ddd,#888 50%,#c49a3c)"],
  ];
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
    if (/silver|steel|gold|brass|bronze|gunmetal|metal/.test(name)) return "metal";
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

  // ---------- shoulder-pad swatch (generic heraldic pauldron, no chapter icons) ----------
  let uid = 0;
  const PAD = "M8 44 C8 14 26 6 50 6 C74 6 92 14 92 44 L92 92 C76 104 24 104 8 92 Z";
  function pad(scheme) {
    const id = "p" + (++uid);
    const pick = (r) => scheme.colours.find((c) => c.r === r);
    const a1 = (pick("armour") || scheme.colours[0]).h;
    const a2 = (pick("armour2") || pick("armour") || scheme.colours[0]).h;
    const trim = (pick("trim") || pick("armour")).h;
    const emblem = (scheme.colours.find((c) => c.r === "detail") || pick("trim")).h;
    let body;
    if (scheme.pattern === "halved") {
      body = `<rect x="0" y="0" width="50" height="110" fill="${a1}"/><rect x="50" y="0" width="50" height="110" fill="${a2}"/>`;
    } else if (scheme.pattern === "quartered") {
      body = `<rect x="0" y="0" width="50" height="55" fill="${a1}"/><rect x="50" y="0" width="50" height="55" fill="${a2}"/>` +
             `<rect x="0" y="55" width="50" height="55" fill="${a2}"/><rect x="50" y="55" width="50" height="55" fill="${a1}"/>`;
    } else {
      body = `<rect x="0" y="0" width="100" height="110" fill="${a1}"/>`;
    }
    return `<svg class="pad" viewBox="0 0 100 110" aria-hidden="true">
      <defs><clipPath id="${id}c"><path d="${PAD}"/></clipPath>
      <linearGradient id="${id}g" x1="0" y1="0" x2="0.6" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".28"/><stop offset=".45" stop-color="#fff" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient></defs>
      <g clip-path="url(#${id}c)">${body}<rect width="100" height="110" fill="url(#${id}g)"/></g>
      <path d="${PAD}" fill="none" stroke="${trim}" stroke-width="13" clip-path="url(#${id}c)"/>
      <path d="${PAD}" fill="none" stroke="rgba(0,0,0,.55)" stroke-width="1.5"/>
      <circle cx="50" cy="57" r="11" fill="${emblem}" stroke="rgba(0,0,0,.45)" stroke-width="1.5"/>
    </svg>`;
  }
  const bar = (scheme) => `<div class="swatches" title="${esc(scheme.label || "")}">${scheme.colours.map((c) => `<span class="${c.r}" style="background:${c.h}"></span>`).join("")}</div>`;

  // ---------- build entries ----------
  const entries = [];
  const byLegion = {};
  LEGIONS.forEach((lg) => {
    const e = { kind: "legion", id: "legion-" + lg.num.toLowerCase(), legion: lg, name: lg.name, allegiance: lg.allegiance, schemes: lg.schemes };
    entries.push(e);
    byLegion[lg.num] = { legion: e, successors: [] };
  });
  CHAPTERS.forEach((ch) => {
    const lg = byLegion[ch.legion].legion.legion;
    const e = { kind: "successor", id: slug(ch.name), chapter: ch, legion: lg, name: ch.name, allegiance: "Loyalist", schemes: [ch.scheme] };
    entries.push(e);
    byLegion[ch.legion].successors.push(e);
  });
  const byId = Object.fromEntries(entries.map((e) => [e.id, e]));
  entries.forEach((e) => {
    e.families = { armour: new Set(), all: new Set() };
    e.schemes.forEach((s) => s.colours.forEach((c) => {
      const f = family(c);
      e.families.all.add(f);
      if (c.r === "armour" || c.r === "armour2") e.families.armour.add(f);
    }));
    const lg = e.legion;
    e.haystack = [e.name, lg.name, lg.primarch, lg.num + " legion", e.allegiance,
      e.kind === "legion" ? lg.primarchBio + lg.legionBio + lg.homeworld : e.chapter.bio + e.chapter.founding,
      ...e.schemes.flatMap((s) => [s.label || "", ...s.colours.map((c) => c.n + " " + family(c))])].join(" ").toLowerCase();
  });


  // ---------- images (loaded live from the Warhammer 40k Fandom wiki; nothing is stored in this repo) ----------
  const API = "https://warhammer40k.fandom.com/api.php";
  const PRIMARCH_TITLE = { "Horus Lupercal": "Horus", "Lorgar Aurelian": "Lorgar", "Alpharius Omegon": "Alpharius" };
  const fandomTitle = (e) => e.kind === "legion" && !e.legion.lost
    ? (PRIMARCH_TITLE[e.legion.primarch] || e.legion.primarch)
    : (WIKI_NAME[e.name] || e.name);
  const leadImg = {};            // entry id -> thumbnail url
  const galleryCache = {};       // page title -> [{thumb, full, page}]
  async function api(params) {
    const url = API + "?" + new URLSearchParams({ format: "json", origin: "*", redirects: "1", ...params });
    const r = await fetch(url);
    if (!r.ok) throw new Error(r.status);
    return r.json();
  }
  async function loadLeadImages() {
    const want = entries.filter((e) => !e.legion.lost || e.kind !== "legion");
    const titleToIds = {};
    want.forEach((e) => { const t = fandomTitle(e); (titleToIds[t] = titleToIds[t] || []).push(e.id); });
    const titles = Object.keys(titleToIds);
    for (let i = 0; i < titles.length; i += 50) {
      const batch = titles.slice(i, i + 50);
      try {
        const j = await api({ action: "query", prop: "pageimages", piprop: "thumbnail", pithumbsize: "600", titles: batch.join("|") });
        const back = {};
        (j.query.normalized || []).forEach((n) => (back[n.to] = n.from));
        (j.query.redirects || []).forEach((n) => (back[n.to] = back[n.from] || n.from));
        Object.values(j.query.pages || {}).forEach((pg) => {
          if (!pg.thumbnail) return;
          const orig = back[pg.title] || pg.title;
          (titleToIds[orig] || titleToIds[pg.title] || []).forEach((id) => (leadImg[id] = pg.thumbnail.source));
        });
      } catch (err) { console.warn("Image lookup failed", err); }
    }
    render();
  }
  async function loadGallery(title) {
    if (galleryCache[title]) return galleryCache[title];
    const j = await api({ action: "query", generator: "images", titles: title, gimlimit: "60", prop: "imageinfo", iiprop: "url|size|mime", iiurlwidth: "420" });
    const skip = /icon|logo|stub|placeholder|wiki|button|banner|aquila_|_sp\./i;
    const out = Object.values((j.query && j.query.pages) || {})
      .map((pg) => ({ name: pg.title, ii: (pg.imageinfo || [])[0] }))
      .filter((x) => x.ii && /image\/(jpeg|png|webp)/.test(x.ii.mime) && x.ii.width >= 180 && !skip.test(x.name))
      .slice(0, 36)
      .map((x) => ({ thumb: x.ii.thumburl || x.ii.url, full: x.ii.url, page: x.ii.descriptionurl, name: x.name.replace(/^File:/, "").replace(/\.\w+$/, "") }));
    galleryCache[title] = out;
    return out;
  }
  async function fillGallery(el, titles) {
    try {
      const lists = await Promise.all(titles.map((t) => loadGallery(t).catch(() => [])));
      const seen = new Set();
      const imgs = lists.flat().filter((x) => !seen.has(x.full) && seen.add(x.full));
      el.innerHTML = imgs.length
        ? imgs.map((x) => `<a href="${esc(x.full)}" target="_blank" rel="noopener" title="${esc(x.name)}"><img src="${esc(x.thumb)}" alt="${esc(x.name)}" loading="lazy" referrerpolicy="no-referrer"></a>`).join("")
        : `<p class="muted">No pictures found on the wiki page. Try the links below.</p>`;
    } catch (_) {
      el.innerHTML = `<p class="muted">Couldn't reach the wiki for pictures right now. Try the links below.</p>`;
    }
  }

  // ---------- state ----------
  const state = { q: "", type: "all", alleg: "all", colours: new Set(), anyColour: false };
  let favs = new Set();
  try { favs = new Set(JSON.parse(localStorage.getItem("codex-favs") || "[]")); } catch (_) { /* storage unavailable */ }
  const saveFavs = () => { try { localStorage.setItem("codex-favs", JSON.stringify([...favs])); } catch (_) {} };

  function matches(e) {
    if (state.type === "legion" && e.kind !== "legion") return false;
    if (state.type === "successor" && e.kind !== "successor") return false;
    if (state.type === "fav" && !favs.has(e.id)) return false;
    if (state.alleg !== "all" && e.allegiance !== state.alleg) return false;
    if (state.colours.size) {
      const set = state.anyColour ? e.families.all : e.families.armour;
      if (![...state.colours].some((c) => set.has(c))) return false;
    }
    if (state.q) return state.q.split(/\s+/).every((w) => e.haystack.includes(w));
    return true;
  }

  // ---------- render ----------
  function card(e) {
    const isLeg = e.kind === "legion";
    const lg = e.legion;
    const fav = `<button class="fav ${favs.has(e.id) ? "on" : ""}" data-fav="${e.id}" title="Add to shortlist" aria-label="Add ${esc(e.name)} to shortlist">★</button>`;
    if (isLeg && lg.lost) {
      return `<article class="card primarch lost" tabindex="0" data-id="${e.id}">${fav}
        <div class="top-row"><div class="pad-lost">?</div><div><h3>${esc(lg.name)} (${lg.num})</h3><div class="meta">Primarch: unknown · records expunged</div></div></div>
        <p class="blurb">${esc(lg.legionBio)}</p></article>`;
    }
    const title = isLeg ? `${esc(lg.primarch)} &amp; the ${esc(lg.name)}` : esc(e.name);
    const meta = isLeg ? `${lg.allegiance} · ${esc(lg.status)}` : `Successor of the ${esc(lg.name)} · Founding: ${esc(e.chapter.founding)}`;
    const blurb = isLeg ? lg.legionBio : e.chapter.bio;
    const hero = leadImg[e.id] ? `<div class="hero"><img src="${esc(leadImg[e.id])}" alt="" loading="lazy" referrerpolicy="no-referrer"></div>` : "";
    return `<article class="card ${isLeg ? "primarch" : ""}" tabindex="0" data-id="${e.id}">${fav}${hero}
      <div class="top-row">${pad(e.schemes[0])}<div><h3>${title}</h3><div class="meta">${meta}</div></div></div>
      <p class="blurb">${esc(blurb)}</p>
      <div class="schemes-mini" style="flex-direction:column">${e.schemes.map(bar).join("")}</div>
    </article>`;
  }

  function render() {
    uid = 0;
    let html = "", nav = "", total = 0;
    LEGIONS.forEach((lg) => {
      const grp = byLegion[lg.num];
      const items = [grp.legion, ...grp.successors].filter(matches);
      if (!items.length) return;
      total += items.length;
      const sec = "L-" + lg.num;
      const cls = lg.allegiance === "Traitor" ? "traitor" : lg.allegiance === "Loyalist" ? "loyal" : "";
      nav += `<a href="#${sec}" class="${cls}" title="${esc(lg.name)}">${lg.num} ${esc(lg.name.split(" /")[0])}</a>`;
      html += `<section class="legion" id="${sec}">
        <div class="legion-head"><span class="numeral">${lg.num}</span><h2>${esc(lg.name)}</h2>
          <span class="sub">Primarch: ${esc(lg.primarch)}${grp.successors.length ? ` · ${grp.successors.length} successor${grp.successors.length > 1 ? "s" : ""} listed` : ""}</span>
          <span class="badge ${lg.allegiance}">${lg.allegiance}</span></div>
        <div class="grid">${items.map(card).join("")}</div></section>`;
    });
    $("#main").innerHTML = html;
    $("#jump").innerHTML = nav;
    $("#empty").hidden = total > 0;
  }

  function schemeBlock(s) {
    return `<div class="scheme">${pad(s)}<div>
      ${s.label ? `<div class="name">${esc(s.label)}</div>` : ""}
      <div class="chiplist">${s.colours.filter((c, i, arr) => arr.findIndex((x) => x.h === c.h && x.n === c.n) === i).map((c) => `<button class="chip" data-hex="${c.h}" title="Copy ${c.h}"><i style="background:${c.h}"></i>${esc(c.n)} <small>${c.h}</small></button>`).join("")}</div>
      <div class="meta" style="color:var(--muted);font-size:12px;margin-top:6px">${s.pattern === "halved" ? "Halved livery (left/right split)" : s.pattern === "quartered" ? "Quartered livery" : "Solid main colour"} · tap a colour to copy its hex</div>
    </div></div>`;
  }

  function openDetail(id, push = true) {
    const e = byId[id];
    if (!e) return;
    uid = 1000;
    const lg = e.legion;
    let body;
    if (e.kind === "legion") {
      const succ = byLegion[lg.num].successors;
      const lnk = links(lg.name, lg.lost ? [] : [{ t: `${lg.primarch} (Lexicanum)`, u: `https://wh40k.lexicanum.com/wiki/${wikiTitle(lg.primarch)}` }]);
      if (lg.name.includes("Black Legion")) lnk.splice(1, 0, { t: "Black Legion (Lexicanum)", u: "https://wh40k.lexicanum.com/wiki/Black_Legion" });
      body = `<div class="dlg-head">${e.schemes.length ? pad(e.schemes[0]) : `<div class="pad-lost" style="width:86px;height:95px;display:grid;place-items:center;border:2px dashed #4b4b52;border-radius:40px 40px 18px 18px;font:700 30px Cinzel">?</div>`}
          <div><h2>${esc(lg.name)}</h2><div class="meta">Legion ${lg.num} · <span class="badge ${lg.allegiance}">${lg.allegiance}</span></div></div></div>
        <dl class="facts"><dt>Primarch</dt><dd>${esc(lg.primarch)}</dd><dt>Status</dt><dd>${esc(lg.status)}</dd><dt>Homeworld</dt><dd>${esc(lg.homeworld)}</dd></dl>
        <h4>The Primarch</h4><p>${esc(lg.primarchBio)}</p>
        <h4>The Legion${lg.allegiance === "Loyalist" ? " &amp; Chapter" : ""}</h4><p>${esc(lg.legionBio)}</p>
        ${lg.lost ? "" : `<h4>Pictures from the wiki</h4><div class="gallery" data-gallery="${esc(JSON.stringify([fandomTitle(e), WIKI_NAME[lg.name] || lg.name]))}"><p class="muted">Loading pictures…</p></div>`}
        ${e.schemes.length ? `<h4>Colour schemes</h4>${e.schemes.map(schemeBlock).join("")}` : ""}
        ${succ.length ? `<h4>Successor Chapters in the Codex</h4><div class="chiplist">${succ.map((s) => `<button class="chip" data-open="${s.id}"><i style="background:${s.schemes[0].colours[0].h}"></i>${esc(s.name)}</button>`).join("")}</div>` : ""}
        ${lg.lost ? "" : `<h4>Pictures &amp; further reading</h4><div class="links">${lnk.map((l) => `<a href="${l.u}" target="_blank" rel="noopener">${esc(l.t)} ↗</a>`).join("")}</div>`}`;
    } else {
      const ch = e.chapter;
      body = `<div class="dlg-head">${pad(ch.scheme)}
          <div><h2>${esc(ch.name)}</h2><div class="meta">Successor of the <a href="#" data-open="${byLegion[lg.num].legion.id}">${esc(lg.name)}</a> (Legion ${lg.num}) · Founding: ${esc(ch.founding)}</div></div></div>
        <h4>About</h4><p>${esc(ch.bio)}</p>
        <h4>Colour scheme</h4>${schemeBlock(ch.scheme)}
        <h4>Pictures from the wiki</h4><div class="gallery" data-gallery="${esc(JSON.stringify([fandomTitle(e)]))}"><p class="muted">Loading pictures…</p></div>
        <h4>Pictures &amp; further reading</h4><div class="links">${links(ch.name).map((l) => `<a href="${l.u}" target="_blank" rel="noopener">${esc(l.t)} ↗</a>`).join("")}</div>`;
    }
    const fav = `<button class="chip" data-fav="${e.id}" style="margin-top:16px">${favs.has(e.id) ? "★ On your shortlist (remove)" : "☆ Add to shortlist"}</button>`;
    $("#detailBody").innerHTML = `<div class="dlg"><button class="close" aria-label="Close">×</button>${body}${fav}</div>`;
    const gal = $("#detailBody .gallery");
    if (gal) fillGallery(gal, JSON.parse(gal.dataset.gallery));
    const dlg = $("#detail");
    if (!dlg.open) dlg.showModal();
    dlg.scrollTop = 0;
    if (push) history.replaceState(null, "", "#/" + id);
  }
  function closeDetail() {
    const dlg = $("#detail");
    if (dlg.open) dlg.close();
    if (location.hash.startsWith("#/")) history.replaceState(null, "", location.pathname + location.search);
  }

  let toastT;
  function toast(msg) {
    const t = $("#toast");
    t.textContent = msg; t.classList.add("show");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("show"), 1400);
  }

  // ---------- controls ----------
  $("#colourChips").innerHTML = FAMILIES.map(([k, label, col]) => `<button data-colour="${k}"><span class="dot" style="background:${col}"></span>${label}</button>`).join("");

  let qT;
  $("#search").addEventListener("input", (ev) => { clearTimeout(qT); qT = setTimeout(() => { state.q = ev.target.value.trim().toLowerCase(); render(); }, 120); });
  $("#typeChips").addEventListener("click", (ev) => {
    const b = ev.target.closest("button"); if (!b) return;
    state.type = b.dataset.type;
    [...ev.currentTarget.children].forEach((x) => x.classList.toggle("on", x === b));
    render();
  });
  $("#allegChips").addEventListener("click", (ev) => {
    const b = ev.target.closest("button"); if (!b) return;
    state.alleg = b.dataset.alleg;
    [...ev.currentTarget.children].forEach((x) => x.classList.toggle("on", x === b));
    render();
  });
  $("#colourChips").addEventListener("click", (ev) => {
    const b = ev.target.closest("button"); if (!b) return;
    const k = b.dataset.colour;
    state.colours.has(k) ? state.colours.delete(k) : state.colours.add(k);
    b.classList.toggle("on", state.colours.has(k));
    render();
  });
  $("#anyColour").addEventListener("change", (ev) => { state.anyColour = ev.target.checked; render(); });

  document.addEventListener("click", (ev) => {
    const favB = ev.target.closest("[data-fav]");
    if (favB) {
      ev.stopPropagation();
      const id = favB.dataset.fav;
      favs.has(id) ? favs.delete(id) : favs.add(id);
      saveFavs();
      toast(favs.has(id) ? "Added to shortlist" : "Removed from shortlist");
      render();
      if ($("#detail").open) openDetail(id, false);
      return;
    }
    const hexB = ev.target.closest("[data-hex]");
    if (hexB) {
      const hex = hexB.dataset.hex;
      (navigator.clipboard ? navigator.clipboard.writeText(hex) : Promise.reject()).then(() => toast(`Copied ${hex}`), () => toast(hex));
      return;
    }
    const openB = ev.target.closest("[data-open]");
    if (openB) { ev.preventDefault(); openDetail(openB.dataset.open); return; }
    if (ev.target.closest(".close")) { closeDetail(); return; }
    const c = ev.target.closest(".card");
    if (c) openDetail(c.dataset.id);
  });
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Enter" && ev.target.classList && ev.target.classList.contains("card")) openDetail(ev.target.dataset.id);
  });
  $("#detail").addEventListener("click", (ev) => { if (ev.target === ev.currentTarget) closeDetail(); });
  $("#detail").addEventListener("close", () => { if (location.hash.startsWith("#/")) history.replaceState(null, "", location.pathname + location.search); });

  render();
  loadLeadImages();
  if (location.hash.startsWith("#/")) openDetail(location.hash.slice(2), false);
})();
