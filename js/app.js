/* La PSE avec Maki : moteur du site. Vous n'avez pas besoin de modifier ce fichier.
   Aucune donnée n'est envoyée : la progression reste dans le navigateur de l'élève
   et peut être transportée avec un code de reprise. */
(function () {
  "use strict";
  var S = window.SITE, Q = window.QCM || {}, P = window.PERSO || { metiers: [], communes: [], infosCommune: {} };
  var KEY = "pse-en-poche-v1";
  var $app = document.getElementById("app");

  /* ---------- Index des ressources ---------- */
  var RES = {}, MAXNUM = 0;
  Object.keys(S.modules).forEach(function (niv) {
    S.modules[niv].forEach(function (m) {
      m.ressources.forEach(function (r) {
        r.niveau = niv; r.module = m.code;
        RES[r.num] = r; if (r.num > MAXNUM) MAXNUM = r.num;
      });
    });
  });
  function qcmRes(id) { for (var n in RES) if (RES[n].type === "qcm" && RES[n].lien === id) return RES[n]; return null; }

  /* ---------- État (localStorage) ---------- */
  function defaut() { return { pseudo: "", pg: null, av: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], theme: 0, fil: 0, com: 0, qcm: {}, vu: {}, prof: false }; }
  var st;
  try { st = JSON.parse(localStorage.getItem(KEY)) || defaut(); } catch (e) { st = defaut(); }
  if (!st.av || st.av.length !== 11) st.av = defaut().av; // ancien format d'avatar
  if (!st.qcm) st.qcm = {}; if (!st.vu) st.vu = {};
  function save() { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} majEntete(); }

  /* ---------- Code de reprise ---------- */
  var B32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  var LARG = [3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3]; // nombre de bits par réglage d'avatar
  function encode() {
    var bits = [];
    function w(v, n) { for (var i = n - 1; i >= 0; i--) bits.push((v >> i) & 1); }
    var top = 0;
    for (var n = 1; n <= MAXNUM; n++) if (st.vu[n] || st.qcm[n] != null) top = n;
    w(3, 4); st.av.forEach(function (a, k) { w(a, LARG[k]); });
    w(st.theme || 0, 3); w(st.fil || 0, 4); w(st.com || 0, 5);
    if (st.pg) { w(1, 1); w(st.pg[0], 5); w(st.pg[1], 5); } else w(0, 1);
    w(top, 8);
    for (n = 1; n <= top; n++) {
      if (RES[n] && RES[n].type === "qcm") w(st.qcm[n] != null ? st.qcm[n] + 1 : 0, 4);
      else w(st.vu[n] ? 1 : 0, 1);
    }
    while (bits.length % 5) bits.push(0);
    var s = "", sum = 0;
    for (var i = 0; i < bits.length; i += 5) {
      var v = 0; for (var j = 0; j < 5; j++) v = v * 2 + bits[i + j];
      s += B32[v]; sum += v * (i / 5 + 1);
    }
    s += B32[sum % 32];
    return s.match(/.{1,4}/g).join("-");
  }
  function decode(code) {
    code = code.toUpperCase().replace(/[\s-]/g, "").replace(/O/g, "0").replace(/[IL]/g, "1").replace(/U/g, "V");
    if (code.length < 7) return null;
    var vals = [];
    for (var i = 0; i < code.length; i++) { var v = B32.indexOf(code[i]); if (v < 0) return null; vals.push(v); }
    var chk = vals.pop(), sum = 0;
    vals.forEach(function (v, k) { sum += v * (k + 1); });
    if (sum % 32 !== chk) return null;
    var bits = []; vals.forEach(function (v) { for (var k = 4; k >= 0; k--) bits.push((v >> k) & 1); });
    var p = 0;
    function r(n) { var v = 0; for (var k = 0; k < n; k++) v = v * 2 + (bits[p++] || 0); return v; }
    if (r(4) !== 3) return null;
    var ns = defaut(); ns.prof = st.prof;
    for (i = 0; i < LARG.length; i++) ns.av[i] = Math.min(r(LARG[i]), OPT[i] - 1);
    ns.theme = Math.min(r(3), THEMES.length - 1);
    ns.fil = r(4); if (ns.fil > P.metiers.length) ns.fil = 0;
    ns.com = r(5); if (ns.com > P.communes.length) ns.com = 0;
    if (r(1)) { ns.pg = [r(5), r(5)]; ns.pseudo = nomPseudo(ns.pg); } else ns.pseudo = st.pseudo;
    var top = r(8);
    for (var n = 1; n <= top; n++) {
      if (RES[n] && RES[n].type === "qcm") { var q = r(4); if (q) { ns.qcm[n] = Math.min(q - 1, 10); ns.vu[n] = true; } }
      else if (r(1)) ns.vu[n] = true;
    }
    return ns;
  }

  /* ---------- Progression ---------- */
  function fait(r) { return r.type === "qcm" ? (st.qcm[r.num] || 0) >= 7 : !!st.vu[r.num]; }
  function dispo(m) { return m.ressources.filter(function (r) { return r.lien; }); }
  function avancement(m) {
    var d = dispo(m); if (!d.length) return null;
    return d.filter(fait).length / d.length;
  }
  function xp() {
    var x = 0;
    for (var n in st.vu) if (st.vu[n] && RES[n] && RES[n].type !== "qcm") x += 20;
    for (n in st.qcm) x += st.qcm[n] * 10;
    return x;
  }
  function badges() {
    var b = [];
    if (Object.keys(st.vu).length) b.push(["🌱", "Premier pas"]);
    for (var n in st.qcm) if (st.qcm[n] === 10) { b.push(["🎯", "Sans faute"]); break; }
    Object.keys(S.modules).forEach(function (niv) {
      S.modules[niv].forEach(function (m) { if (avancement(m) === 1) b.push(["🏅", niv.toUpperCase() + " " + m.code]); });
    });
    if (xp() >= 500) b.push(["🔥", "500 XP"]);
    return b;
  }

  /* ---------- Avatar (dessin, jamais de photo) ---------- */
  var PEAU = ["#8d5524", "#c68642", "#e0ac69", "#5c3a1e", "#f1c27d", "#3b2414", "#a8754f", "#ffdbac"];
  var CHEV = ["#1b1b1b", "#4a2c17", "#8a5a2b", "#c9a15b", "#b5332e", "#2e5aa8", "#6b6b6b", "#d94f8a"];
  var HAUT = ["#0f8b8d", "#ec6b56", "#f2b134", "#3a5a98", "#6a4c93", "#2a9d58", "#222831", "#d94f8a"];
  var FOND = ["#fff6e5", "#cdeff0", "#d9f2dd", "#ffe0d6", "#e7defa", "#ffeaa0", "#d5e3ff", "#2b3648"];
  // Les 11 réglages : 0 peau, 1 coiffure, 2 couleur cheveux, 3 yeux, 4 bouche, 5 tenue,
  // 6 couleur tenue, 7 couvre-chef, 8 lunettes, 9 accessoire, 10 fond
  var NOMS = [null,
    ["Courte", "Bouclée", "Longue", "Chignon", "Rasée", "Tresses", "Afro", "Mèche", "Crête", "Couettes", "Locks", "Carré"], null,
    ["Ronds", "Rieurs", "Grands", "Clin d'œil", "Sérieux", "Cils"],
    ["Sourire", "Grand sourire", "Neutre", "Surpris", "En coin", "Langue"],
    ["T-shirt", "Sweat à capuche", "Bleu de travail", "Gilet de sécurité", "Blouse", "Chemise"], null,
    ["Rien", "Casquette", "Casque de chantier", "Kofia", "Foulard", "Bonnet", "Bandeau", "Chapeau de paille"],
    ["Sans", "Rondes", "Carrées", "Soleil", "Protection"],
    ["Rien", "Casque audio", "Fleur", "Boucles d'oreilles", "Collier", "Badge secouriste", "Masque", "Étoile"], null];
  var OPT = [8, 12, 8, 6, 6, 6, 8, 8, 5, 8, 8];
  var AVN = 0;
  function avatar(av, taille) {
    var p = PEAU[av[0]], c = CHEV[av[2]], h = HAUT[av[6]], id = "avc" + (AVN++), s = "", i;
    var coif = av[7] === 4 ? -1 : av[1]; // le foulard couvre les cheveux
    var calotte = '<path d="M36 50c0-18 12-26 24-26s24 8 24 26c-6-8-14-12-24-12s-18 4-24 12z" fill="' + c + '"/>';
    s += '<svg viewBox="0 0 120 120" width="' + taille + '" height="' + taille + '" aria-hidden="true">';
    s += '<clipPath id="' + id + '"><circle cx="60" cy="60" r="58"/></clipPath>';
    s += '<circle cx="60" cy="60" r="58" fill="' + FOND[av[10]] + '"/><g clip-path="url(#' + id + ')">';
    // cheveux derrière la tête
    if (coif === 2) s += '<rect x="30" y="38" width="60" height="58" rx="22" fill="' + c + '"/>';
    if (coif === 6) s += '<circle cx="60" cy="44" r="36" fill="' + c + '"/>';
    if (coif === 11) s += '<rect x="32" y="32" width="56" height="48" rx="18" fill="' + c + '"/>';
    if (coif === 10) for (i = 0; i < 8; i++) s += '<rect x="' + (30 + i * 7.6) + '" y="36" width="6" height="' + (50 + (i % 2) * 6) + '" rx="3" fill="' + c + '"/>';
    // tenue
    var corps = "M22 122c2-28 20-40 38-40s36 12 38 40z";
    s += '<path d="' + corps + '" fill="' + (av[5] === 4 ? "#fafafa" : h) + '"/>';
    switch (av[5]) {
      case 1: s += '<path d="M40 88q20-14 40 0l-6 8q-14-8-28 0z" fill="#000" opacity=".2"/><path d="M54 94v12M66 94v12" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>'; break;
      case 2: s += '<path d="' + corps + '" fill="#000" opacity=".12"/><rect x="45" y="96" width="30" height="30" rx="3" fill="' + h + '"/><path d="M47 97l-5-13M73 97l5-13" stroke="' + h + '" stroke-width="6"/><circle cx="48" cy="99" r="2" fill="#fff"/><circle cx="72" cy="99" r="2" fill="#fff"/>'; break;
      case 3: s += '<path d="M50 83l10 16 10-16z" fill="#2b3648"/><path d="M24 106h72" stroke="#e8e8e8" stroke-width="6"/><path d="M44 86v36M76 86v36" stroke="#e8e8e8" stroke-width="5"/>'; break;
      case 4: s += '<path d="M50 83l10 18 10-18" fill="none" stroke="#cfd6da" stroke-width="2.5"/><path d="M60 101v20" stroke="#cfd6da" stroke-width="2"/><rect x="68" y="102" width="12" height="10" rx="2" fill="' + h + '"/>'; break;
      case 5: s += '<path d="M50 83l10 10-9 6zM70 83l-10 10 9 6z" fill="#fff"/><circle cx="60" cy="102" r="1.8" fill="#fff"/><circle cx="60" cy="110" r="1.8" fill="#fff"/>'; break;
    }
    // cou, oreilles, tête
    s += '<rect x="52" y="68" width="16" height="17" rx="6" fill="' + p + '"/><rect x="52" y="68" width="16" height="9" fill="#000" opacity=".12"/>';
    s += '<circle cx="36.5" cy="55" r="5" fill="' + p + '"/><circle cx="83.5" cy="55" r="5" fill="' + p + '"/>';
    s += '<circle cx="60" cy="52" r="24" fill="' + p + '"/>';
    // yeux
    var noir = "#1d1d1d";
    switch (av[3]) {
      case 0: s += '<circle cx="51" cy="54" r="3" fill="' + noir + '"/><circle cx="69" cy="54" r="3" fill="' + noir + '"/>'; break;
      case 1: s += '<path d="M47 55q4-6 8 0M65 55q4-6 8 0" stroke="' + noir + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>'; break;
      case 2: s += '<circle cx="51" cy="54" r="5.5" fill="#fff"/><circle cx="69" cy="54" r="5.5" fill="#fff"/><circle cx="52" cy="55" r="2.8" fill="' + noir + '"/><circle cx="70" cy="55" r="2.8" fill="' + noir + '"/>'; break;
      case 3: s += '<circle cx="51" cy="54" r="3" fill="' + noir + '"/><path d="M65 55q4-5 8 0" stroke="' + noir + '" stroke-width="2.6" fill="none" stroke-linecap="round"/>'; break;
      case 4: s += '<circle cx="51" cy="55" r="3" fill="' + noir + '"/><circle cx="69" cy="55" r="3" fill="' + noir + '"/><path d="M46 47l9 3M74 47l-9 3" stroke="' + noir + '" stroke-width="2.6" stroke-linecap="round"/>'; break;
      case 5: s += '<circle cx="51" cy="55" r="3" fill="' + noir + '"/><circle cx="69" cy="55" r="3" fill="' + noir + '"/><path d="M46 51l-2-3M49 50l-1-3M71 50l1-3M74 51l2-3" stroke="' + noir + '" stroke-width="1.8" stroke-linecap="round"/>'; break;
    }
    // bouche
    switch (av[4]) {
      case 0: s += '<path d="M52 63q8 7 16 0" stroke="' + noir + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>'; break;
      case 1: s += '<path d="M51 62h18a9 9 0 0 1-18 0z" fill="#6b1d1d"/><path d="M53 62h14v3h-14z" fill="#fff"/>'; break;
      case 2: s += '<path d="M54 66h12" stroke="' + noir + '" stroke-width="2.5" stroke-linecap="round"/>'; break;
      case 3: s += '<ellipse cx="60" cy="66" rx="3.2" ry="4.2" fill="#6b1d1d"/>'; break;
      case 4: s += '<path d="M54 66q8 3 13-4" stroke="' + noir + '" stroke-width="2.5" fill="none" stroke-linecap="round"/>'; break;
      case 5: s += '<path d="M53 62h14a7 7 0 0 1-14 0z" fill="#6b1d1d"/><ellipse cx="60" cy="68" rx="3.6" ry="3" fill="#f08aa0"/>'; break;
    }
    // cheveux devant
    switch (coif) {
      case 0: case 2: case 6: case 10: s += calotte; break;
      case 1: for (i = 0; i < 7; i++) s += '<circle cx="' + (38 + i * 7.3) + '" cy="' + (34 + Math.abs(3 - i) * 2) + '" r="7" fill="' + c + '"/>'; break;
      case 3: s += '<circle cx="60" cy="22" r="10" fill="' + c + '"/>' + calotte; break;
      case 4: s += '<path d="M37 47c2-15 12-21 23-21s21 6 23 21c-6-5-14-7-23-7s-17 2-23 7z" fill="' + c + '" opacity=".4"/>'; break;
      case 5: s += calotte + '<rect x="29" y="44" width="7" height="40" rx="3.5" fill="' + c + '"/><rect x="84" y="44" width="7" height="40" rx="3.5" fill="' + c + '"/><circle cx="32.5" cy="86" r="3" fill="#f4b400"/><circle cx="87.5" cy="86" r="3" fill="#f4b400"/>'; break;
      case 7: s += '<path d="M36 50c0-18 12-26 24-26s24 8 24 26c-10-4-20-14-30-12-8 2-14 6-18 12z" fill="' + c + '"/>'; break;
      case 8: s += '<path d="M37 47c2-15 12-21 23-21s21 6 23 21c-6-5-14-7-23-7s-17 2-23 7z" fill="' + c + '" opacity=".3"/><path d="M50 34l3-18 5 10 4-14 4 14 5-9 1 18z" fill="' + c + '"/>'; break;
      case 9: s += '<circle cx="31" cy="38" r="10" fill="' + c + '"/><circle cx="89" cy="38" r="10" fill="' + c + '"/>' + calotte; break;
      case 11: s += '<path d="M35 54c0-22 12-30 25-30s25 8 25 30c-3-8-7-12-12-12h-26c-5 0-9 4-12 12z" fill="' + c + '"/>'; break;
    }
    // couvre-chef
    switch (av[7]) {
      case 1: s += '<path d="M34 40c4-14 14-18 26-18s22 4 26 18z" fill="' + h + '"/><rect x="58" y="36" width="38" height="6" rx="3" fill="' + h + '"/><path d="M34 40h52" stroke="#000" stroke-opacity=".2" stroke-width="2"/>'; break;
      case 2: s += '<path d="M34 43a26 25 0 0 1 52 0z" fill="#f4b400"/><rect x="56.5" y="17" width="7" height="24" rx="3.5" fill="#d99a00"/><rect x="29" y="40" width="62" height="6.5" rx="3.2" fill="#d99a00"/>'; break;
      case 3: s += '<path d="M38 40l2-15q20-7 40 0l2 15z" fill="#f7f3e8"/><path d="M41 34l5-5 5 5 5-5 5 5 5-5 5 5 5-5 3 3" fill="none" stroke="' + h + '" stroke-width="2"/>'; break;
      case 4: s += '<path d="M32 56c0-22 12-34 28-34s28 12 28 34l-5 30c-2-26-9-40-23-40s-21 14-23 40z" fill="' + h + '"/><path d="M37 48c3-12 12-18 23-18s20 6 23 18" fill="none" stroke="#fff" stroke-opacity=".45" stroke-width="2"/>'; break;
      case 5: s += '<path d="M35 45a25 27 0 0 1 50 0z" fill="' + h + '"/><rect x="33" y="38" width="54" height="9" rx="4.5" fill="' + h + '"/><rect x="33" y="38" width="54" height="9" rx="4.5" fill="#000" opacity=".2"/><circle cx="60" cy="17" r="6" fill="#fff"/>'; break;
      case 6: s += '<rect x="36" y="35" width="48" height="7" rx="3" fill="' + h + '"/>'; break;
      case 7: s += '<ellipse cx="60" cy="38" rx="38" ry="7" fill="#dcb967"/><path d="M42 38q2-21 18-21t18 21z" fill="#edd28f"/><path d="M43 33q17 5 34 0v5q-17 5-34 0z" fill="' + h + '"/>'; break;
    }
    // lunettes
    switch (av[8]) {
      case 1: s += '<g fill="#fff" fill-opacity=".25" stroke="#222" stroke-width="2.4"><circle cx="51" cy="54" r="7.5"/><circle cx="69" cy="54" r="7.5"/><path d="M58.5 54h3"/></g>'; break;
      case 2: s += '<g fill="#fff" fill-opacity=".25" stroke="#222" stroke-width="2.4"><rect x="43.5" y="48" width="14" height="11" rx="2.5"/><rect x="62.5" y="48" width="14" height="11" rx="2.5"/><path d="M57.5 53h5"/></g>'; break;
      case 3: s += '<rect x="43" y="48" width="15" height="11" rx="5" fill="#16181d"/><rect x="62" y="48" width="15" height="11" rx="5" fill="#16181d"/><path d="M58 52h4M43 52l-6-2M77 52l6-2" stroke="#16181d" stroke-width="2.4"/>'; break;
      case 4: s += '<rect x="41" y="46.5" width="38" height="15" rx="7" fill="#bfe9ff" fill-opacity=".55" stroke="#f4b400" stroke-width="2.6"/><path d="M41 54l-5-2M79 54l5-2" stroke="#f4b400" stroke-width="3"/>'; break;
    }
    // accessoire
    switch (av[9]) {
      case 1: s += '<path d="M34 54c0-19 12-29 26-29s26 10 26 29" stroke="#222" stroke-width="4" fill="none"/><rect x="29" y="48" width="9" height="15" rx="4" fill="#222"/><rect x="82" y="48" width="9" height="15" rx="4" fill="#222"/>'; break;
      case 2: s += '<g fill="#fff"><circle cx="81" cy="33" r="4.2"/><circle cx="87" cy="38" r="4.2"/><circle cx="81" cy="43" r="4.2"/><circle cx="75" cy="38" r="4.2"/></g><circle cx="81" cy="38" r="3.2" fill="#f2b134"/>'; break;
      case 3: s += '<circle cx="36" cy="63" r="3.2" fill="#f4b400"/><circle cx="84" cy="63" r="3.2" fill="#f4b400"/>'; break;
      case 4: s += '<path d="M50 84q10 11 20 0" stroke="#f4b400" stroke-width="2.4" fill="none"/><circle cx="60" cy="91" r="3.2" fill="#f4b400"/>'; break;
      case 5: s += '<circle cx="79" cy="104" r="8" fill="#fff"/><path d="M79 99v10M74 104h10" stroke="#2a9d58" stroke-width="3.6"/>'; break;
      case 6: s += '<path d="M37 58l9 3M83 58l-9 3M38 66l8 4M82 66l-8 4" stroke="#fff" stroke-width="1.8"/><rect x="45.5" y="58" width="29" height="17" rx="7" fill="#cfe8f3"/><path d="M49 64h22M49 69h22" stroke="#a9cfe0" stroke-width="1.4"/>'; break;
      case 7: s += '<path d="M92 16l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" fill="#f2b134"/>'; break;
    }
    return s + "</g></svg>";
  }

  /* ---------- Pseudos (sans vrai nom) ---------- */
  var ANIMAUX = ["Maki", "Tortue", "Dauphin", "Baleine", "Roussette", "Gecko", "Crabe", "Poisson", "Requin", "Raie", "Caméléon", "Héron", "Perroquet", "Papillon", "Zébu", "Cabri", "Coq", "Colibri", "Pieuvre", "Étoile", "Corail", "Baobab", "Cocotier", "Manguier", "Ylang", "Volcan", "Lagon", "Pirogue", "Alizé", "Comète", "Tigre", "Lion"];
  var QUALITES = ["Brave", "Calme", "Agile", "Rapide", "Sage", "Solide", "Fidèle", "Habile", "Honnête", "Tenace", "Lucide", "Robuste", "Tranquille", "Sympa", "Unique", "Fiable", "Magique", "Pacifique", "Énergique", "Solidaire", "Responsable", "Dynamique", "Libre", "Drôle", "Sincère", "Modeste", "Aimable", "Fantastique", "Formidable", "Intrépide", "Optimiste", "Zen"];
  function nomPseudo(pg) { return ANIMAUX[pg[0] % 32] + " " + QUALITES[pg[1] % 32]; }
  function hasard(n) { return Math.floor(Math.random() * n); }

  /* ---------- Thèmes de couleur ---------- */
  var THEMES = [["Lagon", "#0b5d63", "#f4f7f5"], ["Forêt", "#1f5d3a", "#f1f6ee"], ["Coucher de soleil", "#9c3250", "#fff3ec"],
                ["Violet", "#4b2e83", "#f5f1fb"], ["Chantier", "#2b2f36", "#faf6ea"], ["Nuit", "#16233c", "#0f1724"]];
  function appliquerTheme() {
    document.documentElement.setAttribute("data-couleur", (st.acc && st.acc.c) ? "c" : (st.theme || 0));
    var m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", THEMES[st.theme || 0][1]);
  }

  /* ---------- Outils ---------- */
  function esc(t) { return String(t).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  var I = window.DECOR.icones;
  I.lecon = I.cours;
  var TYPE = { lecon: "Leçon", cours: "Cours", exercice: "Exercice", qcm: "QCM", audio: "Audio", short: "Short", jeu: "Jeu" };
  I.jeu = I.exercice;
  function base() { return location.href.split("#")[0]; }
  function lienProf(href) {
    if (!st.prof) return "";
    return '<button class="lien" data-copie="' + esc(href) + '" title="Copier le lien pour Pronote" aria-label="Copier le lien">' + I.lien + "</button>";
  }

  function majEntete() {
    document.getElementById("moi").innerHTML = avatar(st.av, 40) +
      '<span><b>' + esc(st.pseudo || "Mon profil") + '</b><small>Niv. ' + (Math.floor(xp() / 100) + 1) + " · " + xp() + " XP</small></span>";
  }

  /* ---------- Pages ---------- */
  function global() {
    var t = 0, f = 0;
    Object.keys(S.modules).forEach(function (n) { S.modules[n].forEach(function (m) { dispo(m).forEach(function (r) { t++; if (fait(r)) f++; }); }); });
    return t ? f / t : 0;
  }
  function pageAccueil() {
    var u = S.aLaUne, g = Math.round(global() * 100), h = "";
    h += '<section class="hero"><div class="hero-texte">' +
      '<div data-lire class="objectif-zone"><p class="objectif">' + esc(S.objectif || "") + "</p>" + parle() + "</div>" +
      '<p class="jauge"><b>Mon parcours</b><span class="barre"><i style="width:' + g + '%"></i></span><small>' + g + " %</small></p></div>" +
      '<div class="hero-img" id="route">' + window.DECOR.scene() + "</div></section>";
    h += '<div class="contenu">';
    if (u && (!st.niv || st.niv === u.niveau)) h += '<a class="une" href="#/' + u.niveau + "/" + u.module + '">' + I.epingle + "<span><small>Cette semaine</small>" + esc(u.texte) + "</span>" + I.fleche + "</a>";
    h += cartesNiveaux();
    h += carteComp() + carteInstaller() + '<h2>Quatre domaines pour être responsable</h2><div class="grille domaines">';
    [["A", "Ma santé"], ["B", "Mon environnement"], ["C", "Mon travail"], ["D", "Mes achats"]].forEach(function (d) {
      h += '<div class="domaine t' + d[0] + '"><span class="pic">' + I[d[0]] + "</span><b>" + d[1] + "</b><small>" + esc(S.thematiques[d[0]]) + "</small></div>";
    });
    h += "</div>";
    if (!st.pseudo || !st.fil || !st.com) h += '<a class="carte invite" href="#/profil">' + avatar(st.av, 56) + "<span><b>Personnalise ton parcours</b><small>Ton avatar, ton pseudo, ton métier et ta commune : les exemples s'adaptent à toi. Tout reste sur ton téléphone.</small></span>" + I.fleche + "</a>";
    return h + "</div>";
  }
  /* La route : ligne de départ, arche d'arrivée, et l'avatar placé selon la progression */
  function placerMarcheur() {
    var g = document.getElementById("marcheur"); if (!g) return;
    var NS = "http://www.w3.org/2000/svg", p = document.createElementNS(NS, "path");
    p.setAttribute("d", window.DECOR.chemin); p.setAttribute("fill", "none"); g.parentNode.insertBefore(p, g);
    var L = p.getTotalLength(), F0 = 0.07, F1 = 0.925, av = global();
    var d = p.getPointAtLength(L * F0), d2 = p.getPointAtLength(L * F0 + 4), a = p.getPointAtLength(L * F1);
    var pt = p.getPointAtLength(L * (F0 + (F1 - F0) * av));
    var ang = Math.atan2(d2.y - d.y, d2.x - d.x) * 180 / Math.PI, s = "", i, j;
    // ligne de départ : damier en travers de la route + drapeau
    s += '<g transform="translate(' + d.x + " " + d.y + ") rotate(" + ang + ')">';
    for (i = 0; i < 2; i++) for (j = 0; j < 6; j++) s += '<rect x="' + (i * 6 - 6) + '" y="' + (j * 5 - 15) + '" width="6" height="5" fill="' + ((i + j) % 2 ? "#fff" : "#1d1d1d") + '"/>';
    s += "</g>";
    s += '<path d="M' + d.x + " " + (d.y - 14) + 'v-62" stroke="#3b3b3b" stroke-width="4" stroke-linecap="round"/>' +
      '<rect x="' + d.x + '" y="' + (d.y - 78) + '" width="78" height="26" rx="4" fill="#2a9d58"/>' +
      '<text x="' + (d.x + 39) + '" y="' + (d.y - 60) + '" text-anchor="middle" font-size="15" font-weight="800" fill="#fff" font-family="system-ui,sans-serif">DÉPART</text>';
    // arche d'arrivée
    var x0 = a.x - 46, x1 = a.x + 46, yb = a.y + 8, yt = a.y - 104;
    s += '<path d="M' + x0 + " " + yb + "V" + yt + "M" + x1 + " " + yb + "V" + yt + '" stroke="#e63946" stroke-width="7" stroke-linecap="round"/>';
    s += '<rect x="' + (x0 - 4) + '" y="' + (yt - 4) + '" width="100" height="30" rx="5" fill="#fff"/>';
    for (i = 0; i < 16; i++) for (j = 0; j < 2; j++) if ((i + j) % 2) s += '<rect x="' + (x0 - 2 + i * 6) + '" y="' + (yt - 2 + j * 4) + '" width="6" height="4" fill="#1d1d1d"/>';
    s += '<text x="' + a.x + '" y="' + (yt + 22) + '" text-anchor="middle" font-size="14" font-weight="800" fill="#1d1d1d" font-family="system-ui,sans-serif">ARRIVÉE</text>';
    // petites bornes à 25, 50 et 75 %
    [0.25, 0.5, 0.75].forEach(function (f) {
      var b = p.getPointAtLength(L * (F0 + (F1 - F0) * f));
      s += '<circle cx="' + b.x + '" cy="' + b.y + '" r="9" fill="' + (av >= f ? "#f4b400" : "#fff") + '" stroke="#1d1d1d" stroke-opacity=".25" stroke-width="2"/>';
    });
    // l'avatar
    s += '<g class="pion"><ellipse cx="' + pt.x + '" cy="' + (pt.y + 3) + '" rx="26" ry="6" fill="#000" opacity=".2"/>' +
      avatar(st.av, 72).replace("<svg ", '<svg x="' + (pt.x - 36) + '" y="' + (pt.y - 70) + '" ') +
      (av >= 1 ? '<text x="' + pt.x + '" y="' + (pt.y - 78) + '" text-anchor="middle" font-size="16" font-weight="800" fill="#1d1d1d" font-family="system-ui,sans-serif">Bravo !</text>' : "") + "</g>";
    g.innerHTML = s;
    // sur téléphone, la route défile : on centre la vue sur l'avatar
    var route = document.getElementById("route"), svg = route.querySelector("svg");
    var ech = svg.getBoundingClientRect().width / 1200;
    route.scrollLeft = pt.x * ech - route.clientWidth / 2;
  }

  function pageNiveau(niv) {
    var n = S.niveaux.filter(function (x) { return x.id === niv; })[0];
    var mods = S.modules[niv]; if (!n || !mods) return page404();
    var h = '<div class="contenu"><nav class="fil"><a href="#/">Accueil</a> › ' + esc(n.nom) + "</nav><h1>PSE " + esc(n.nom) + "</h1>";
    h += '<a class="monparcours" href="#/profil">' + (metier() ? "<span><small>Mon diplôme</small>" + esc(metier().diplome) + "</span>" : "<span><small>Mon diplôme</small>À choisir</span>") +
      (commune() ? "<span><small>Ma commune</small>" + esc(commune()) + "</span>" : "<span><small>Ma commune</small>À choisir</span>") + "<em>Modifier</em></a>";
    h += carteComp();
    ["A", "B", "C", "D"].forEach(function (t) {
      var ms = mods.filter(function (m) { return m.code[0] === t; }); if (!ms.length) return;
      h += '<h2 class="theme t' + t + '"><span class="pic">' + I[t] + "</span><span><small>Thématique " + t + "</small>" + esc(S.thematiques[t]) + '</span></h2><div class="grille">';
      ms.forEach(function (m) {
        var a = avancement(m), nb = dispo(m).length;
        h += '<a class="carte module t' + t + (nb ? "" : " vide") + '" href="#/' + niv + "/" + m.code + '">' +
          '<span class="code">' + m.code + "</span>" + ((MODS_METIER[m.code] && metier()) ? '<span class="tag">' + esc(metier().metier) + "</span>" : (m.code === "B2" && commune()) ? '<span class="tag">' + esc(commune()) + "</span>" : "") + "<b>" + esc(m.titre) + "</b>" +
          (nb ? '<span class="barre"><i style="width:' + Math.round(a * 100) + '%"></i></span><small>' + nb + " ressource" + (nb > 1 ? "s" : "") + (a === 1 ? " · terminé" : "") + "</small>"
              : "<small>Bientôt</small>") + (a === 1 ? '<span class="tampon">' + I.medaille + "</span>" : "") + "</a>";
      });
      h += "</div>";
    });
    return h + "</div>";
  }

  function pageModule(niv, code) {
    var m = (S.modules[niv] || []).filter(function (x) { return x.code === code; })[0];
    if (!m) return page404();
    var t = code[0], h = '<div class="contenu"><nav class="fil"><a href="#/">Accueil</a> › <a href="#/' + niv + '">' + niv.toUpperCase() + "</a> › " + code + "</nav>";
    h += '<header class="tete t' + t + '"><span class="pic">' + I[t] + "</span><div><small>Module " + code + " · " + esc(S.thematiques[t]) + "</small><h1>" + esc(m.titre) + "</h1></div>" + lienProf(base() + "#/" + niv + "/" + code) + "</header>";
    if (!m.ressources.length) return h + makiDit("pense", (carteMetier(code) && metier()) ? "Je prépare encore les ressources de ce module. En attendant, voici ce qu'il faut savoir pour ton métier." : "Je prépare encore ce module. Reviens bientôt !") + carteMetier(code) + carteCommune(code) + "</div>";
    if (lecon(niv, code)) return pageParcours(niv, code, m, h);
    h += makiDit("salut", m.conseil || "Commence par le cours, fais l'exercice, puis teste-toi avec le QCM.");
    h += carteMetier(code) + carteCommune(code);
    h += '<div data-lire>' + parle("Écouter la liste") + '<ul class="ressources">';
    m.ressources.forEach(function (r) {
      var ok = fait(r), cible, attr = "";
      if (!r.lien) { h += '<li class="res off ' + r.type + '"><span class="ic">' + I[r.type] + "</span><span><b>" + esc(r.titre) + "</b><small>" + TYPE[r.type] + " · bientôt</small></span><span class=\"etat\">" + I.bientot + "</span></li>"; return; }
      if (r.type === "qcm") { cible = "#/qcm/" + r.lien; }
      else if (r.type === "lecon") { cible = "#/" + r.lien + "/lecon/0"; }
      else if (r.type === "jeu") { cible = "#/jeu/" + r.lien; }
      else { cible = r.lien; attr = ' target="_blank" rel="noopener" data-vu="' + r.num + '"'; }
      var info = TYPE[r.type];
      if (r.type === "qcm" && st.qcm[r.num] != null) info += " · meilleur score " + st.qcm[r.num] + "/10";
      var abs = cible.charAt(0) === "#" ? base() + cible : (/^https?:/.test(cible) ? cible : new URL(cible, base()).href);
      h += '<li class="res ' + r.type + (ok ? " ok" : "") + '"><a href="' + esc(cible) + '"' + attr + '><span class="ic">' + I[r.type] + "</span><span><b>" + esc(r.titre) + "</b><small>" + info + "</small></span><span class=\"etat\">" + (ok ? I.ok : I.fleche) + "</span></a>" + lienProf(abs) + "</li>";
    });
    return h + "</ul></div></div>";
  }

  var quiz = null;
  function melange(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), x = a[i]; a[i] = a[j]; a[j] = x; } return a; }
  function pageQcm(id) {
    if (id === "metier") Q.metier = qcmMetier();
    var q = Q[id], r = qcmRes(id); if (!q) return id === "metier" ? '<div class="contenu etroit">' + inviteMetier("Quel métier prépares-tu ?") + "</div>" : page404();
    var seuil = Math.ceil(q.questions.length * 0.7), retour = r ? "#/" + r.niveau + "/" + r.module : (id === "metier" ? "#/cap/C3" : "");
    if (!quiz || quiz.id !== id) quiz = { id: id, i: 0, score: 0, rep: null, qs: q.questions.map(function (x) { return { q: x.q, ctx: x.ctx, fb: x.fb, a: melange(x.a) }; }) };
    var h = '<div class="contenu etroit"><nav class="fil"><a href="#/">Accueil</a> › ' + (retour ? '<a href="' + retour + '">' + retour.split("/").pop() + "</a> › " : "") + "QCM</nav>";
    h += '<h1 class="qtitre">' + esc(q.titre) + "</h1>";
    if (quiz.i >= quiz.qs.length) {
      var s = quiz.score, n = quiz.qs.length, etoiles = s >= n * 0.9 ? 3 : s >= seuil ? 2 : s >= n / 2 ? 1 : 0;
      if (r && (st.qcm[r.num] == null || s > st.qcm[r.num])) { st.qcm[r.num] = s; st.vu[r.num] = true; save(); }
      h += '<div class="fin">' + window.DECOR.maki(s >= seuil ? "bravo" : "pense", 96) + '<div class="etoiles">' + "★★★".slice(0, etoiles) + '<span>' + "★★★".slice(etoiles) + "</span></div><p class=\"gros\">" + s + " / " + quiz.qs.length + "</p><p>" +
        (s >= seuil ? (r ? "Bravo, QCM validé ! +" + s * 10 + " XP" : "Bravo, tu sais analyser une situation de ton métier !") : "Encore un effort : il faut " + seuil + "/" + n + " pour valider. Relis le cours et recommence.") + "</p>" +
        '<button class="btn" data-action="recommencer">Recommencer</button> ' + (retour ? '<a class="btn sec" href="' + retour + '">Retour au module</a>' : "") + "</div></div>";
      return h;
    }
    var cur = quiz.qs[quiz.i];
    h += '<div class="progress"><i style="width:' + (quiz.i / quiz.qs.length * 100) + '%"></i></div><p class="num">Question ' + (quiz.i + 1) + " sur " + quiz.qs.length + '</p><div data-lire id="zoneq">' + parle("Écouter la question") + (cur.ctx ? '<p class="contexte">' + esc(cur.ctx) + "</p>" : "") + '<p class="question">' + esc(cur.q) + '</p><div class="choix">';
    cur.a.forEach(function (a, k) {
      var cls = "";
      if (quiz.rep !== null) cls = a.ok ? " juste" : (k === quiz.rep ? " faux" : " grise");
      h += '<button class="rep' + cls + '" data-rep="' + k + '"' + (quiz.rep !== null ? " disabled" : "") + ">" + esc(a.t) + "</button>";
    });
    h += "</div></div>";
    if (quiz.rep !== null) {
      var bon = cur.a[quiz.rep].ok;
      h += '<div data-lire role="status" class="retour ' + (bon ? "oui" : "non") + '"><b>' + (bon ? "Bonne réponse !" : "Pas tout à fait.") + "</b> " + esc(cur.fb) + " " + parle() + '</div><button class="btn" data-action="suivant">' + (quiz.i + 1 < quiz.qs.length ? "Question suivante →" : "Voir mon score") + "</button>";
    }
    return h + "</div>";
  }

  var ONGLETS = [["Peau", [0]], ["Cheveux", [1, 2]], ["Visage", [3, 4]], ["Tenue", [5, 6]], ["Tête", [7, 8]], ["Extras", [9, 10]]];
  var TITRE = ["Couleur de peau", "Coiffure", "Couleur des cheveux", "Yeux", "Bouche", "Tenue", "Couleur de la tenue", "Sur la tête", "Lunettes", "Accessoire", "Couleur du fond"];
  var COUL = { 0: PEAU, 2: CHEV, 6: HAUT, 10: FOND };
  var onglet = 0;
  function editeur() {
    var h = '<div class="onglets" role="tablist">';
    ONGLETS.forEach(function (o, k) { h += '<button role="tab" aria-selected="' + (k === onglet) + '" class="onglet' + (k === onglet ? " actif" : "") + '" data-onglet="' + k + '">' + o[0] + "</button>"; });
    h += "</div>";
    ONGLETS[onglet][1].forEach(function (slot) {
      h += '<div class="choixav"><span>' + TITRE[slot] + '</span><div class="' + (COUL[slot] ? "pastilles" : "vignettes") + '">';
      for (var k = 0; k < OPT[slot]; k++) {
        var sel = st.av[slot] === k ? " sel" : "";
        if (COUL[slot]) h += '<button class="pastille' + sel + '" style="background:' + COUL[slot][k] + '" data-av="' + slot + "," + k + '" aria-label="' + TITRE[slot] + " " + (k + 1) + '"></button>';
        else { var essai = st.av.slice(); essai[slot] = k; h += '<button class="vignette' + sel + '" data-av="' + slot + "," + k + '">' + avatar(essai, 64) + "<small>" + NOMS[slot][k] + "</small></button>"; }
      }
      h += "</div></div>";
    });
    return h;
  }
  function pageProfil() {
    var h = '<div class="contenu"><nav class="fil"><a href="#/">Accueil</a> › Mon profil</nav><h1>Mon profil</h1>';
    h += '<div class="profil"><div class="apercu"><div id="grand">' + avatar(st.av, 170) + '</div><b id="nomav">' + esc(st.pseudo || "Sans pseudo") + "</b>" +
      '<button class="btn sec petitbtn" data-action="hasard-avatar">' + I.de + "Au hasard</button></div><div>";
    h += '<label for="pseudo">Mon pseudo <small>(invente-le : jamais ton vrai nom)</small></label>' +
      '<div class="reprise"><input id="pseudo" maxlength="20" value="' + esc(st.pseudo) + '" placeholder="Écris ton pseudo" autocomplete="off">' +
      '<button class="btn sec" data-action="hasard-pseudo">' + I.de + "Une idée</button></div>";
    h += '<div id="editeur">' + editeur() + "</div></div></div>";
    h += '<h2>Mon parcours</h2><p>Dis-moi ce que tu prépares et où tu habites : les exemples des cours seront adaptés à ton métier et à ta commune.</p><div class="parcours">' +
      '<label for="nivsel">Ma classe</label><select id="nivsel"><option value="">Je choisis…</option>' + S.niveaux.map(function (n) { return '<option value="' + n.id + '"' + (st.niv === n.id ? " selected" : "") + ">" + esc(n.nom) + "</option>"; }).join("") + "</select>" +
      '<label for="fil">Mon diplôme</label><select id="fil"><option value="0">Je choisis…</option>' +
      P.metiers.map(function (m, k) { return '<option value="' + (k + 1) + '"' + (st.fil === k + 1 ? " selected" : "") + ">" + esc(m.diplome) + "</option>"; }).join("") + "</select>" +
      '<label for="com">Ma commune</label><select id="com"><option value="0">Je choisis…</option>' +
      P.communes.map(function (c, k) { return '<option value="' + (k + 1) + '"' + (st.com === k + 1 ? " selected" : "") + ">" + esc(c) + "</option>"; }).join("") + "</select></div>";
    h += '<h2>Mon thème de couleur</h2><div class="themes">';
    THEMES.forEach(function (t, k) {
      h += '<button class="theme-btn' + ((st.theme || 0) === k ? " sel" : "") + '" data-theme="' + k + '"><span style="background:linear-gradient(135deg,' + t[1] + " 55%," + t[2] + ' 55%)"></span>' + t[0] + "</button>";
    });
    h += "</div>";
    var b = badges();
    h += '<h2>Mes badges</h2><div class="badges">' + (b.length ? b.map(function (x) { return "<span>" + I.medaille + esc(x[1]) + "</span>"; }).join("") : "<small>Fais ta première activité pour gagner un badge.</small>") + "</div>";
    h += blocCompte();
    h += '<h2>Mon code de reprise</h2><p>Recopie ce code dans ton cahier. Sur un autre téléphone ou au CDI, tape-le pour retrouver ton avatar, ton thème et ta progression.</p>';
    h += '<div class="code-reprise" id="code">' + encode() + '</div><button class="btn sec" data-action="copier-code">Copier le code</button>';
    h += '<h2>Reprendre avec un code</h2><div class="reprise"><input id="saisie" placeholder="XXXX-XXXX-XXXX" autocomplete="off"><button class="btn" data-action="reprendre">Reprendre</button></div><p id="msg" class="msg"></p>';
    h += '<p class="petit"><button class="lienbtn" data-action="effacer">Effacer ma progression sur ce téléphone</button></p>';
    return h + "</div>";
  }
  // Met à jour l'éditeur sans recharger toute la page (le champ pseudo garde le curseur)
  function majProfil() {
    var e = document.getElementById("editeur"); if (!e) return;
    e.innerHTML = editeur();
    document.getElementById("grand").innerHTML = avatar(st.av, 170);
    document.getElementById("nomav").textContent = st.pseudo || "Sans pseudo";
    document.getElementById("code").textContent = encode();
  }

  function pageInfos() {
    return '<div class="contenu etroit"><nav class="fil"><a href="#/">Accueil</a> › Confidentialité</nav><h1>Confidentialité</h1>' +
      "<p>Ce site ne collecte <b>aucune donnée personnelle</b> : pas de nom, pas d'adresse, pas de photo, pas de statistiques de visite, pas de publicité.</p>" +
      "<p>Ton avatar, ton pseudo et ta progression sont enregistrés <b>uniquement dans le navigateur de ton téléphone</b>. Le code de reprise contient ton avatar et tes résultats, sans ton pseudo. Personne d'autre que toi ne peut les voir.</p>" +
      "<p>Ton compte, c'est un identifiant tiré au hasard et un code secret. Ils restent <b>dans ton téléphone</b> et ne sont envoyés nulle part. Personne, même ton professeur, ne peut savoir quel identifiant est le tien.</p>" +
      "<p>Les notes officielles restent dans Pronote.</p>" +
      '<h2>Espace enseignant</h2><label class="case"><input type="checkbox" id="prof"' + (st.prof ? " checked" : "") + "> Mode enseignant : afficher les boutons de lien pour copier l'adresse de chaque ressource (cahier de textes Pronote) et ouvrir l'exercice « SMS » sans refaire la leçon</label></div>";
  }
  function page404() { return '<div class="contenu"><h1>Page introuvable</h1><p><a href="#/">Retour à l\'accueil</a></p></div>'; }

  /* ---------- Accessibilité : lecture à voix haute et réglages ---------- */
  // La voix est celle du téléphone ou de l'ordinateur (synthèse vocale du navigateur) : rien n'est envoyé.
  var synth = window.speechSynthesis, VOIX_OK = !!(synth && window.SpeechSynthesisUtterance), lecture = null;
  function acc() { if (!st.acc) st.acc = { t: 0, f: 0, c: 0, a: 0, lent: 0, auto: 0 }; return st.acc; }
  function appliquerAcc() {
    var a = acc(), c = document.documentElement.classList;
    c.toggle("facile", !!a.f); c.toggle("calme", !!a.a); c.toggle("sans-voix", !VOIX_OK);
    document.body.style.zoom = [1, 1.15, 1.3][a.t] || 1;
    appliquerTheme();
  }
  function parle(texte) {
    return '<button class="parle" data-action="lire" aria-label="Écouter le texte">' + I.son + "<span>" + (texte || "Écouter") + "</span></button>";
  }
  // Les voix françaises de l'appareil, de la plus naturelle à la plus robotique
  function voixDispo() {
    function note(v) {
      var n = v.name.toLowerCase(), p = 0;
      if (/premium|natural|neural|siri/.test(n)) p += 40;
      if (/enhanced|améliorée|amelioree|google|online/.test(n)) p += 25;
      if (/compact|espeak/.test(n)) p -= 30;
      if (/eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley|jacques/.test(n)) p -= 15; // voix synthétiques anciennes
      if (/fr[-_]fr/i.test(v.lang)) p += 10;
      return p;
    }
    return synth.getVoices().filter(function (x) { return /^fr/i.test(x.lang); }).sort(function (a, b) { return note(b) - note(a); });
  }
  function voixFr() {
    var v = voixDispo(), nom = acc().voix;
    return (nom && v.filter(function (x) { return x.name === nom; })[0]) || v[0] || null;
  }
  // Découpe le texte d'un bloc en mots (un <span class="mot"> par mot) pour pouvoir les surligner
  function decouper(zone) {
    if (!zone.dataset.pret) {
      var w = document.createTreeWalker(zone, NodeFilter.SHOW_TEXT, null), n, noeuds = [];
      while ((n = w.nextNode())) if (n.nodeValue.trim() && !n.parentElement.closest(".parle,svg,.lien,.etat,.fermer,select,input")) noeuds.push(n);
      noeuds.forEach(function (t) {
        var f = document.createDocumentFragment();
        t.nodeValue.split(/(\s+)/).forEach(function (x) {
          if (!x) return;
          if (/^\s+$/.test(x)) f.appendChild(document.createTextNode(x));
          else { var s = document.createElement("span"); s.className = "mot"; s.textContent = x; f.appendChild(s); }
        });
        t.parentNode.replaceChild(f, t);
      });
      zone.dataset.pret = "1";
    }
    return Array.prototype.slice.call(zone.querySelectorAll(".mot"));
  }
  function arreter() {
    if (!lecture) return;
    var l = lecture; lecture = null;
    clearInterval(l.horloge); clearTimeout(l.attente);
    l.mots.forEach(function (m) { m.classList.remove("dit"); });
    if (l.btn && l.btn.isConnected) { l.btn.classList.remove("actif"); l.btn.querySelector("span").textContent = l.libelle; }
    try { synth.cancel(); } catch (e) {}
  }
  function lire(zone, btn) {
    if (!VOIX_OK || !zone) return;
    var memeBouton = lecture && lecture.btn === btn; arreter(); if (memeBouton && btn) return; // un 2e appui arrête
    var mots = decouper(zone); if (!mots.length) return;
    // texte à dire + position de chaque mot dans ce texte + durée estimée (si le téléphone ne signale pas les mots)
    var texte = "", pos = [], temps = [], t = 0, bloc = null, lent = acc().lent ? 0.75 : 0.95;
    mots.forEach(function (m, i) {
      var b = m.parentElement.closest("p,li,dt,dd,button,h1,h2,a,b,small,label") || zone;
      if (i && b !== bloc) { texte += /[.!?:…]$/.test(texte) ? "\n" : ".\n"; t += 450; } else if (i) texte += " ";
      bloc = b; pos.push(texte.length); temps.push(t); texte += m.textContent;
      t += (170 + 62 * m.textContent.length + (/[.!?:;,…]$/.test(m.textContent) ? 280 : 0)) / lent;
    });
    var u = new SpeechSynthesisUtterance(texte), v = voixFr();
    u.lang = v ? v.lang : "fr-FR"; if (v) u.voice = v; u.rate = lent;
    var l = lecture = { mots: mots, btn: btn, libelle: btn ? btn.querySelector("span").textContent : "", horloge: 0, attente: 0, precis: false };
    function montrer(i) {
      if (lecture !== l || i < 0 || i >= mots.length) return;
      mots.forEach(function (m, k) { m.classList.toggle("dit", k === i); });
      var r = mots[i].getBoundingClientRect();
      if (r.bottom > window.innerHeight - 90 || r.top < 70) mots[i].scrollIntoView({ block: "center", behavior: acc().a ? "auto" : "smooth" });
    }
    u.onstart = function () {
      var t0 = Date.now();
      // si aucun signal « mot » n'arrive, on surligne au rythme estimé
      l.attente = setTimeout(function () {
        if (l.precis || lecture !== l) return;
        l.horloge = setInterval(function () {
          var e = Date.now() - t0, i = 0; while (i + 1 < temps.length && temps[i + 1] <= e) i++;
          montrer(i);
        }, 80);
      }, 600);
      montrer(0);
    };
    u.onboundary = function (e) {
      if (e.name && e.name !== "word") return;
      l.precis = true; clearInterval(l.horloge);
      var i = 0; while (i + 1 < pos.length && pos[i + 1] <= e.charIndex) i++;
      montrer(i);
    };
    u.onend = u.onerror = function () { if (lecture === l) arreter(); };
    if (btn) { btn.classList.add("actif"); btn.querySelector("span").textContent = "Arrêter"; }
    synth.speak(u);
  }
  function pageAcces() {
    var a = acc(), h = '<div class="contenu etroit"><nav class="fil"><a href="#/">Accueil</a> › Accessibilité</nav><h1>Accessibilité</h1>';
    h += '<div data-lire><p>Règle le site comme tu préfères. Tes réglages restent sur ton téléphone.</p>' + parle() + "</div>";
    function choix(titre, cle, noms) {
      var s = '<fieldset class="reglage"><legend>' + titre + "</legend>";
      noms.forEach(function (n, k) { s += '<button class="mot-btn' + ((a[cle] || 0) === k ? " sel" : "") + '" aria-pressed="' + ((a[cle] || 0) === k) + '" data-acc="' + cle + "," + k + '">' + n + "</button>"; });
      return s + "</fieldset>";
    }
    h += choix("Taille du texte", "t", ["Normale", "Grande", "Très grande"]);
    h += choix("Lecture facilitée (lettres et lignes plus espacées)", "f", ["Non", "Oui"]);
    h += choix("Contraste fort (noir sur blanc)", "c", ["Non", "Oui"]);
    h += choix("Animations", "a", ["Avec", "Sans"]);
    if (VOIX_OK) {
      var vs = voixDispo(), cour = voixFr();
      if (vs.length > 1) h += '<fieldset class="reglage"><legend>Voix</legend><select id="voix" aria-label="Choisir la voix">' + vs.map(function (v) { return '<option value="' + esc(v.name) + '"' + (cour && cour.name === v.name ? " selected" : "") + ">" + esc(v.name) + "</option>"; }).join("") + "</select></fieldset>";
      h += '<div data-lire class="essai"><p>Bonjour, je suis la voix du site. Je lis les textes pour toi.</p>' + parle("Essayer la voix") + "</div>";
      h += choix("Vitesse de la voix", "lent", ["Normale", "Lente"]);
      h += choix("Lire les questions des QCM toute seule", "auto", ["Non", "Oui"]);
    } else h += '<p class="vide-msg">La lecture à voix haute n\'est pas disponible sur ce navigateur.</p>';
    return h + "</div>";
  }

  /* ---------- Leçons en petits écrans : situation, idées, exercices, « Je retiens » ---------- */
  var L = window.LECONS || {}, exo = null;
  function lecon(niv, code) { return L[niv + "/" + code] || null; }
  function leconRes(niv, code) { for (var n in RES) if (RES[n].type === "lecon" && RES[n].lien === niv + "/" + code) return RES[n]; return null; }
  function nbEcrans(l) { return 2 + 2 * l.idees.length + (l.sms ? 1 : 0); } // situation + (idée, exercice) × n + SMS à la mascotte (facultatif) + je retiens
  function posLecon(cle) { return (st.pos && st.pos[cle]) || 0; }
  function media(m) {
    if (!m) return "";
    var ic = I[m.type === "audio" ? "audio" : "short"], t = esc(m.titre || "");
    if (!m.lien) return '<div class="media bientot"><span class="ic">' + ic + "</span><span><b>" + t + "</b><small>" + (m.type === "audio" ? "Audio" : "Vidéo") + " · bientôt</small></span></div>";
    if (/\.(mp3|m4a|ogg|wav)$/i.test(m.lien)) return '<figure class="media"><figcaption>' + ic + t + '</figcaption><audio controls preload="none" src="' + esc(m.lien) + '"></audio></figure>';
    if (/\.(mp4|webm|mov)$/i.test(m.lien)) return '<figure class="media"><video controls playsinline preload="metadata" src="' + esc(m.lien) + '"></video><figcaption>' + t + "</figcaption></figure>";
    return '<figure class="media"><div class="cadre"><iframe src="' + esc(m.lien) + '" title="' + t + '" allowfullscreen loading="lazy" sandbox="allow-scripts allow-same-origin allow-popups"></iframe></div><figcaption>' + t + "</figcaption></figure>";
  }
  var IMG = window.IMAGES || { pictos: {}, dessins: {} };
  function pic(nom) { return nom && IMG.pictos[nom] ? '<span class="picto">' + IMG.pictos[nom] + "</span>" : ""; }
  // Illustration d'un écran : un dessin du site (nom) ou une photo de l'enseignant ({src, alt, credit})
  function illus(o) {
    var h = "";
    if (o.dessin && IMG.dessins[o.dessin]) h += '<figure class="illus">' + IMG.dessins[o.dessin] + "</figure>";
    if (o.image && o.image.src) h += '<figure class="illus photo"><img src="' + esc(o.image.src) + '" alt="' + esc(o.image.alt || "") + '" loading="lazy">' + (o.image.credit ? "<figcaption>" + esc(o.image.credit) + "</figcaption>" : "") + "</figure>";
    return h;
  }
  /* ---------- Le schéma du PAD (processus d'apparition d'un dommage) ---------- */
  var PADK = [
    ["danger", "Le danger", "Ce qui peut faire du mal", "danger"],
    ["operateur", "L'opérateur", "La personne exposée au danger", "operateur"],
    ["dangereuse", "La situation dangereuse", "L'opérateur est en présence du danger", "rencontre"],
    ["evenement", "L'événement dangereux", "Ce qui se passe et déclenche l'accident", "eclair"],
    ["dommage", "Le dommage", "La blessure", "pansement"]
  ];
  function padK(k) { for (var i = 0; i < PADK.length; i++) if (PADK[i][0] === k) return PADK[i]; return null; }
  // vals : textes déjà placés. o.jeu : cases vides cliquables. o.cache : cases masquées (reel). o.err, o.neuf : case en erreur, case qui vient d'être remplie
  function padVue(vals, o) {
    o = o || {}; vals = vals || {};
    var NOM = { danger: ["1", "Danger"], operateur: ["", "Opérateur"], dangereuse: ["2", "Situation dangereuse"], evenement: ["3", "Événement dangereux"], dommage: ["4", "Dommage"] };
    function b(k) {
      var v = vals[k], cls = "pad-b pb-" + k + (v ? " plein" : " vide") + (o.cache && o.cache[k] ? " cache" : "") + (o.err === k ? " faux" : "") + (o.neuf === k ? " neuf" : "");
      var dans = (NOM[k][0] ? '<span class="pad-n" aria-hidden="true">' + NOM[k][0] + "</span>" : "") + '<span class="pad-t">' + NOM[k][1] + "</span>" + (v ? "<b>" + esc(v) + "</b>" : "") + '<span class="pts" aria-hidden="true"></span>';
      return o.jeu && !v ? '<button class="' + cls + '" data-exo="b:' + k + '" aria-label="' + NOM[k][1] + ' : case vide">' + dans + "</button>" : '<div class="' + cls + '" data-k="' + k + '">' + dans + "</div>";
    }
    // Les deux ovales (danger, opérateur), leur zone commune, l'éclair et les deux flèches : dessin fixe, conforme au schéma de référence
    var dessin = '<svg viewBox="0 0 360 180" aria-hidden="true"><defs><clipPath id="pad-g"><ellipse cx="108" cy="110" rx="100" ry="66"/></clipPath><marker id="pad-f" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#222"/></marker></defs>' +
      '<ellipse cx="108" cy="110" rx="100" ry="66" fill="#fff" stroke="#2a9d9a" stroke-width="1.6"/><ellipse cx="252" cy="110" rx="100" ry="66" fill="#fff" stroke="#2a9d9a" stroke-width="1.6"/>' +
      '<ellipse cx="252" cy="110" rx="100" ry="66" fill="#f29bb0" clip-path="url(#pad-g)"/>' +
      '<ellipse cx="108" cy="110" rx="100" ry="66" fill="none" stroke="#2a9d9a" stroke-width="1.6"/><ellipse cx="252" cy="110" rx="100" ry="66" fill="none" stroke="#2a9d9a" stroke-width="1.6"/>' +
      '<path d="M200 46L168 112h13l-15 60 40-74h-14l16-52z" fill="#f6b21a" stroke="#e39a00" stroke-width="1" stroke-linejoin="round"/>' +
      '<path d="M92 0L168 92" stroke="#222" stroke-width="1.4" marker-end="url(#pad-f)"/><path d="M268 0L196 80" stroke="#222" stroke-width="1.4" marker-end="url(#pad-f)"/></svg>';
    var fleche = '<svg class="pad-bas" viewBox="0 0 30 30" aria-hidden="true"><path d="M10 0h10v14h8L15 30 2 14h8z" fill="#e2262b"/></svg>';
    return '<div class="pad"><div class="pad-rang">' + b("dangereuse") + b("evenement") + '</div><div class="pad-coeur">' + dessin + b("danger") + b("operateur") + "</div>" + fleche + b("dommage") + "</div>";
  }
  /* Le « reel » : le schéma se construit plan par plan, comme une story */
  var reel = null;
  function reelStop() { if (reel && reel.t) { clearInterval(reel.t); reel.t = null; } }
  function majReel() {
    var z = document.querySelector(".reel"); if (!z || !reel) return;
    var vus = {}, j;
    for (j = 0; j <= reel.i; j++) (reel.plans[j].montre || []).forEach(function (k) { vus[k] = j; });
    Array.prototype.forEach.call(z.querySelectorAll(".pad-b"), function (b) { var k = b.dataset.k; b.classList.toggle("cache", !(k in vus)); b.classList.toggle("neuf", vus[k] === reel.i); });
    Array.prototype.forEach.call(z.querySelectorAll(".reel-barres i"), function (b, n) { b.className = n < reel.i ? "vu" : n === reel.i ? "en" : ""; });
    z.querySelector(".reel-txt").textContent = reel.plans[reel.i].texte;
    z.querySelector(".reel-jeu").textContent = reel.t ? "❚❚ Pause" : reel.i >= reel.plans.length - 1 ? "↻ Revoir" : reel.i ? "▶ Continuer" : "▶ Lancer";
  }
  function reelAction(a) {
    if (!reel) return; var n = reel.plans.length;
    if (a === "reel-suiv") { reelStop(); reel.i = Math.min(n - 1, reel.i + 1); }
    if (a === "reel-prec") { reelStop(); reel.i = Math.max(0, reel.i - 1); }
    if (a === "reel-jeu") {
      if (reel.t) reelStop();
      else {
        reel.i = reel.i >= n - 1 ? 0 : reel.i + 1;
        reel.t = setInterval(function () { if (reel.i >= n - 1) reelStop(); else reel.i++; majReel(); }, acc().lent ? 7000 : 4800);
      }
    }
    majReel();
  }
  function schema(s) {
    if (!s) return "";
    if (s.type === "pad") return padVue(s.pad);
    if (s.type === "reel") {
      var cache = {}; PADK.forEach(function (K) { cache[K[0]] = true; });
      reel = { plans: s.plans, i: 0, t: null };
      return '<div class="reel"><div class="reel-barres" aria-hidden="true">' + s.plans.map(function () { return "<i></i>"; }).join("") + '</div><p class="reel-titre">' + esc(s.titre || "") + "</p>" + padVue(s.pad, { cache: cache }) +
        '<p class="reel-txt" aria-live="polite"></p><div class="reel-cmd"><button data-action="reel-prec" aria-label="Plan précédent">‹</button><button class="reel-jeu" data-action="reel-jeu">▶ Lancer</button><button data-action="reel-suiv" aria-label="Plan suivant">›</button></div></div>';
    }
    if (s.type === "barres") {
      var max = Math.max.apply(null, s.barres.map(function (b) { return +b.valeur || 0; })) || 1;
      return '<figure class="barres">' + (s.titre ? "<figcaption>" + esc(s.titre) + "</figcaption>" : "") + '<ul>' + s.barres.map(function (b, k) {
        return "<li>" + pic(b.picto) + '<span class="b-nom">' + esc(b.nom) + '</span><span class="b-piste"><i class="b' + (k % 4) + '" style="width:' + Math.max(2, (+b.valeur || 0) / max * 100) + '%"></i></span><b class="b-val">' + esc(String(b.valeur).replace(".", ",")) + (s.unite ? " " + esc(s.unite) : "") + "</b></li>";
      }).join("") + "</ul>" + (s.source ? "<small>Source : " + esc(s.source) + "</small>" : "") + "</figure>";
    }
    if (s.type === "compte") return '<ul class="comptage">' + s.lignes.map(function (c) {
      var n = Math.max(1, Math.min(12, +c.nombre || 1)), r = "";
      for (var j = 0; j < n; j++) r += pic(c.picto);
      return '<li><span class="rangee" aria-hidden="true">' + r + "</span><span>" + esc(c.texte) + "</span></li>";
    }).join("") + "</ul>";
    if (s.type === "formule") return '<div class="formule">' + s.termes.map(function (t, k) {
      return (k ? '<span class="op">' + (k === s.termes.length - 1 ? "=" : "+") + "</span>" : "") + '<div class="terme' + (k === s.termes.length - 1 ? " res-f" : "") + '"><b>' + esc(t) + "</b><small>" + esc((s.notes || [])[k] || "") + "</small></div>";
    }).join("") + "</div>";
    if (s.type === "paliers") return '<ol class="paliers">' + s.paliers.map(function (p) { return '<li style="--c:' + esc(p.couleur) + '"' + (p.picto ? ' class="avec-picto"' : "") + ">" + pic(p.picto) + "<div><b>" + esc(p.nom) + "</b><span>" + esc(p.texte) + "</span></div></li>"; }).join("") + "</ol>";
    if (s.type === "liste") return '<ul class="fiches">' + s.lignes.map(function (p) { return "<li" + (p.picto ? ' class="avec-picto"' : "") + ">" + pic(p.picto) + "<div><b>" + esc(p.nom) + "</b><span>" + esc(p.texte) + "</span></div></li>"; }).join("") + "</ul>";
    return "";
  }
  function initExo(cle, e) {
    exo = { cle: cle, fini: false, raté: 0, msg: "" };
    if (e.type === "choix") { exo.ordre = melange(e.choix.map(function (_, k) { return k; })); exo.faux = {}; }
    if (e.type === "trier") { exo.ordre = melange(e.cartes.map(function (_, k) { return k; })); exo.i = 0; }
    if (e.type === "cocher") { exo.ordre = melange(e.cartes.map(function (_, k) { return k; })); exo.coche = {}; exo.verifie = false; }
    if (e.type === "ordre") { exo.ordre = melange(e.cartes.map(function (_, k) { return k; })); if (exo.ordre[0] === 0) exo.ordre.push(exo.ordre.shift()); exo.place = 0; exo.err = -1; }
    if (e.type === "pad") {
      exo.place = {}; (e.donne || []).forEach(function (k) { exo.place[k] = true; });
      exo.cartes = melange(PADK.map(function (K) { return K[0]; }).filter(function (k) { return !exo.place[k]; }).concat((e.pieges || []).map(function (_, j) { return "x" + j; })));
      exo.sel = null; exo.err = null; exo.neuf = null;
    }
  }
  function vueExo(e) {
    var h = '<div data-lire><p class="consigne">' + esc(e.question) + "</p>", k;
    if (e.type === "choix") {
      h += '<div class="choix">';
      exo.ordre.forEach(function (k) {
        var cls = exo.fini ? (k === e.bon ? " juste" : " grise") : (exo.faux[k] ? " faux" : "");
        h += '<button class="rep' + cls + '" data-exo="' + k + '"' + (exo.fini || exo.faux[k] ? " disabled" : "") + ">" + pic((e.pictos || [])[k]) + "<span>" + esc(e.choix[k]) + "</span></button>";
      });
      h += "</div>";
    }
    if (e.type === "trier") {
      if (!exo.fini) {
        k = exo.ordre[exo.i];
        h += '<p class="compte">Carte ' + (exo.i + 1) + " sur " + e.cartes.length + '</p><div class="carte-tri">' + pic(e.cartes[k][2]) + "<span>" + esc(e.cartes[k][0]) + '</span></div><div class="cases">' +
          e.cases.map(function (c, j) { return '<button class="rep case-tri" data-exo="' + j + '">' + esc(c) + "</button>"; }).join("") + "</div>";
      } else {
        h += '<div class="bilan-tri">' + e.cases.map(function (c, j) {
          return "<div><b>" + esc(c) + "</b><ul>" + e.cartes.filter(function (x) { return x[1] === j; }).map(function (x) { return "<li>" + pic(x[2]) + "<span>" + esc(x[0]) + "</span></li>"; }).join("") + "</ul></div>";
        }).join("") + "</div>";
      }
    }
    if (e.type === "cocher") {
      h += '<div class="choix">';
      exo.ordre.forEach(function (k) {
        var on = !!exo.coche[k], cls = on ? " coche" : "";
        if (exo.fini) cls = e.cartes[k][1] ? " juste" : " grise"; else if (exo.verifie && on && !e.cartes[k][1]) cls += " faux";
        h += '<button class="rep case-a-cocher' + cls + '" role="checkbox" aria-checked="' + on + '" data-exo="' + k + '"' + (exo.fini ? " disabled" : "") + '><span class="boite">' + (on || (exo.fini && e.cartes[k][1]) ? I.ok : "") + "</span>" + pic(e.cartes[k][2]) + "<span>" + esc(e.cartes[k][0]) + "</span></button>";
      });
      h += "</div>" + (exo.fini ? "" : '<button class="btn" data-exo="verifier">Vérifier</button>');
    }
    if (e.type === "ordre") {
      h += '<ol class="rangs">';
      for (k = 0; k < e.cartes.length; k++) h += "<li" + (k < exo.place ? ' class="pose"' : "") + ">" + (k < exo.place ? esc(e.cartes[k]) : "") + "</li>";
      h += '</ol><div class="choix">';
      exo.ordre.forEach(function (k) { if (k >= exo.place) h += '<button class="rep' + (exo.err === k ? " faux" : "") + '" data-exo="' + k + '">' + esc(e.cartes[k]) + "</button>"; });
      h += "</div>";
    }
    if (e.type === "pad") {
      var vals = {}, txt = function (c) { return c.charAt(0) === "x" ? e.pieges[+c.slice(1)] : e.pad[c]; };
      PADK.forEach(function (K) { if (exo.place[K[0]]) vals[K[0]] = e.pad[K[0]]; });
      if (e.texte) h += '<p class="situation">' + esc(e.texte) + "</p>";
      if (!exo.fini) {
        h += '<div class="etiquettes">' + exo.cartes.filter(function (c) { return !exo.place[c]; }).map(function (c) {
          return '<button class="rep etq' + (exo.sel === c ? " coche" : "") + '" aria-pressed="' + (exo.sel === c) + '" data-exo="c:' + c + '">' + esc(txt(c)) + "</button>";
        }).join("") + "</div>";
        h += '<div class="pad-main' + (exo.msg ? " alerte" : "") + '" role="status">' + (exo.msg ? esc(exo.msg) : exo.sel ? "Où va « " + esc(txt(exo.sel)) + " » ? Touche sa case." : "Touche une étiquette, puis sa case sur le schéma.") + "</div>";
      }
      h += padVue(vals, { jeu: !exo.fini, err: exo.err, neuf: exo.neuf });
    }
    h += "</div>";
    if (exo.msg && !exo.fini && e.type !== "pad") h += '<p class="essaie" role="status">' + esc(exo.msg) + "</p>";
    return h;
  }
  // Renvoie true si l'écran doit être redessiné
  function jouerExo(e, v) {
    if (exo.fini) return false;
    var raté = function (m) { exo.raté++; exo.msg = m; };
    exo.msg = "";
    if (e.type === "choix") { if (+v === e.bon) exo.fini = true; else { exo.faux[+v] = true; raté("Pas encore. Relis l'idée dans ta tête et essaie une autre réponse."); } }
    if (e.type === "trier") {
      if (e.cartes[exo.ordre[exo.i]][1] === +v) { exo.i++; if (exo.i >= e.cartes.length) exo.fini = true; }
      else raté("Ce n'est pas cette case. Essaie l'autre.");
    }
    if (e.type === "cocher") {
      if (v === "verifier") {
        var err = 0; e.cartes.forEach(function (c, k) { if (!!exo.coche[k] !== c[1]) err++; });
        if (!err) exo.fini = true; else { exo.verifie = true; raté(err === 1 ? "Presque ! Il reste une erreur : une case en trop ou une case oubliée." : "Il reste " + err + " erreurs : des cases en trop ou des cases oubliées."); }
      } else { exo.coche[+v] = !exo.coche[+v]; exo.verifie = false; }
    }
    if (e.type === "ordre") {
      if (+v === exo.place) { exo.place++; exo.err = -1; if (exo.place >= e.cartes.length) exo.fini = true; }
      else { exo.err = +v; raté("Pas celle-là maintenant. Laquelle vient juste avant ?"); }
    }
    if (e.type === "pad") {
      var quoi = v.slice(0, 2), x = v.slice(2); exo.err = null; exo.neuf = null;
      if (quoi === "c:") exo.sel = exo.sel === x ? null : x;
      else if (!exo.sel) exo.msg = "Touche d'abord une étiquette, puis sa case.";
      else if (exo.sel === x) { exo.place[x] = true; exo.neuf = x; exo.sel = null; if (PADK.every(function (K) { return exo.place[K[0]]; })) exo.fini = true; }
      else { exo.err = x; raté(exo.sel.charAt(0) === "x" ? "Attention, cette étiquette est un piège : elle ne va dans aucune case. Qui est blessé ?" : "Pas dans cette case. " + padK(x)[1] + ", c'est : " + padK(x)[2].charAt(0).toLowerCase() + padK(x)[2].slice(1) + "."); }
    }
    return true;
  }
  /* ---------- « SMS à Maki » : l'élève écrit, le site repère les idées attendues (rien n'est envoyé ni gardé) ---------- */
  function normal(t) {
    t = String(t).toLowerCase();
    if (t.normalize) t = t.normalize("NFD").replace(/[̀-ͯ]/g, "");
    return t.replace(/œ/g, "oe").replace(/[^a-z0-9]+/g, " ").replace(/([a-z])\1{2,}/g, "$1").trim();
  }
  function ecart(a, b) { // nombre de lettres de différence entre deux mots
    var m = a.length, n = b.length, d = [], i, j;
    for (i = 0; i <= m; i++) d[i] = [i];
    for (j = 1; j <= n; j++) d[0][j] = j;
    for (i = 1; i <= m; i++) for (j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    return d[m][n];
  }
  function motProche(tok, mot) {
    if (tok === mot) return true;
    if (tok === mot + "s" || tok === mot + "x") return true;
    if (mot.length < 5) return false; // mots courts : pas de tolérance, sinon « veut » passerait pour « vent »
    if (tok.indexOf(mot) === 0) return true; // verbes conjugués, mots de la même famille
    if (tok[0] !== mot[0] || Math.abs(tok.length - mot.length) > 2) return false;
    return ecart(tok, mot) <= (mot.length >= 9 ? 2 : 1);
  }
  // Une expression est trouvée si tous ses mots sont dans le texte, à une faute près
  function ditIdee(toks, idee) {
    return idee.mots.some(function (x) {
      return normal(x).split(" ").every(function (m) { return toks.some(function (t) { return motProche(t, m); }); });
    });
  }
  function liste(a) { return a.length < 2 ? a.join("") : a.slice(0, -1).join(", ") + " et " + a[a.length - 1]; }
  function smsQuestion(sms) { exo.fil.push({ de: "m", t: sms.questions[exo.q].question }); exo.essais = 0; exo.texte = ""; exo.clos = false; exo.msg = ""; exo.aide = false; exo.brouillon = ""; }
  function smsClore(sms, avant) {
    var q = sms.questions[exo.q];
    exo.fil.push({ de: "m", t: (avant ? avant + " " : "") + "Voici ce que j'aurais écrit :", modele: q.modele });
    exo.clos = true; if (exo.q >= sms.questions.length - 1) exo.fini = true;
  }
  function jouerSms(sms, v) {
    var q = sms.questions[exo.q]; exo.msg = "";
    if (v === "suite") { if (exo.clos && !exo.fini) { exo.q++; smsQuestion(sms); } return true; }
    if (exo.clos) return false;
    if (v === "passe") { exo.fil.push({ de: "e", t: "Je ne sais pas." }); smsClore(sms, "Pas de souci, on apprend aussi comme ça."); return true; }
    var zone = document.getElementById("sms"), txt = zone ? zone.value.trim() : "";
    if (v === "aide") { exo.aide = true; exo.brouillon = txt; return true; }
    if (/^\+\d+$/.test(v)) { exo.brouillon = (txt ? txt + " " : "") + ((q.aides || [])[+v.slice(1)] || "") + " "; exo.focus = true; return true; }
    if (normal(txt).split(" ").filter(Boolean).length < 3) { exo.msg = "Écris au moins une phrase entière, avec tes mots."; exo.brouillon = txt; return true; }
    exo.brouillon = ""; exo.fil.push({ de: "e", t: txt }); exo.texte += " " + txt; exo.essais++;
    var toks = normal(exo.texte).split(" "), ok = [], non = [];
    q.idees.forEach(function (i) { (ditIdee(toks, i) ? ok : non).push(i); });
    var vu = ok.length ? "Dans ton message, je retrouve : " + liste(ok.map(function (i) { return i.nom; })) + "." : "";
    if (!non.length) smsClore(sms, "Bravo ! " + vu);
    else if (exo.essais < 2) exo.aide = true, exo.fil.push({ de: "m", t: (vu || "Merci pour ton message ! Je n'y retrouve pas encore les idées de la leçon.") + " Tu peux aller plus loin. Un indice : " + non[0].indice + " Complète ta réponse." });
    else smsClore(sms, (vu ? vu + " " : "") + "Tu pouvais aussi parler de : " + liste(non.map(function (i) { return i.nom; })) + ".");
    return true;
  }
  function vueSms(sms, suiv) {
    var h = '<p class="etiquette">Écris à ' + esc(M.nom) + '</p><div class="sms" aria-live="polite">', dern = -1;
    exo.fil.forEach(function (b, j) { if (b.de === "m") dern = j; });
    exo.fil.forEach(function (b, j) {
      if (b.de === "m") h += '<div class="msg maki-b" data-lire>' + (j === 0 || exo.fil[j - 1].de !== "m" ? '<span class="mk-av">' + window.DECOR.maki(exo.clos ? "bravo" : "pense", 44) + "</span>" : '<span class="mk-av"></span>') + "<div><p>" + esc(b.t) + "</p>" + (b.modele ? '<p class="modele">' + esc(b.modele) + "</p>" : "") + (j === dern ? parle() : "") + "</div></div>";
      else h += '<div class="msg eleve-b"><p>' + esc(b.t) + "</p></div>";
    });
    h += "</div>";
    if (exo.fini) h += '<a class="btn large" href="' + suiv + '">Continuer</a>';
    else if (exo.clos) h += '<button class="btn large" data-exo="suite">Question suivante</button>';
    else {
      if (exo.msg) h += '<p class="essaie" role="status">' + esc(exo.msg) + "</p>";
      h += '<div class="saisie"><textarea id="sms" rows="3" maxlength="500" placeholder="Écris ton message…" aria-label="Ton message à ' + esc(M.nom) + '">' + esc(exo.brouillon || "") + '</textarea><button class="btn" data-exo="envoyer">Envoyer</button></div>';
      var aides = sms.questions[exo.q].aides || [];
      if (exo.aide && aides.length) h += '<div class="amorces"><p>Touche un début de phrase, puis termine-la :</p>' + aides.map(function (a, j) { return '<button class="amorce" data-exo="+' + j + '">' + esc(a) + "…</button>"; }).join("") + "</div>";
      h += '<p class="aide-idee">' + (!exo.aide && aides.length ? '<button class="btn clair" data-exo="aide">Aide-moi</button> ' : "") + '<button class="lien-b" data-exo="passe">Je ne sais pas</button></p><p class="note-sms">Tu peux aussi dicter avec le micro de ton clavier.</p>';
    }
    return h + '<p class="note-sms">Ton message reste sur ton téléphone. Personne ne le reçoit.</p>';
  }
  /* ---------- Le jeu du PAD : s'entraîner directement sur le schéma ---------- */
  var JX = window.JEUX || {};
  function jeuRes(id) { for (var n in RES) if (RES[n].type === "jeu" && RES[n].lien === id) return RES[n]; return null; }
  function situsPad() { var a = []; JX.pad.niveaux.forEach(function (nv) { nv.situations.forEach(function (x) { a.push({ s: x, nv: nv }); }); }); return a; }
  // n = numéro de la situation (à partir de 1), ou "m" pour la situation du métier de l'élève
  function situJeu(n) {
    if (!JX.pad) return null;
    if (n === "m") {
      var m = metier(); if (!m) return null; var si = m.situation;
      return { qui: "Dans mon métier : " + m.metier, texte: si.texte, nv: null, exo: { type: "pad", question: JX.pad.consigne, retour: "Tu sais lire un accident de ton métier comme un pro de la prévention.",
        pad: { danger: si.danger, operateur: si.operateur || si.texte.split(",")[0], dangereuse: si.dangereuse, evenement: si.evenement, dommage: si.dommage } } };
    }
    var x = situsPad()[+n - 1]; if (!x) return null;
    return { qui: x.s.qui, texte: x.s.texte, nv: x.nv, exo: { type: "pad", question: JX.pad.consigne, pad: x.s.pad, donne: x.nv.donne, pieges: x.s.pieges, retour: x.s.retour } };
  }
  function pageJeu(id, n) {
    if (id !== "pad" || !JX.pad) return page404();
    var J = JX.pad, a = situsPad(), r = jeuRes("pad"), retour = r ? "#/" + r.niveau + "/" + r.module : "#/";
    var faits = (st.jeux && st.jeux.pad) || {}, nb = function () { return a.filter(function (_, j) { return faits[j + 1]; }).length; }, h, j;
    if (!n) { // la liste des situations
      h = '<div class="contenu etroit"><p><a class="lien-retour" href="' + retour + '">‹ Retour au module</a></p><h1>' + esc(J.titre) + "</h1>";
      h += makiDit(nb() >= a.length ? "bravo" : "salut", nb() >= a.length ? "Les " + a.length + " schémas sont réussis. Tu lis un accident comme un pro !" : "Voici " + a.length + " accidents du travail à Mayotte. Pour chacun, reconstruis le schéma du PAD. À partir de " + J.reussite + " schémas réussis, le jeu est validé.");
      h += '<div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + a.length + '" aria-valuenow="' + nb() + '"><i style="width:' + (nb() / a.length * 100) + '%"></i></div><p class="compte">' + nb() + " schéma" + (nb() > 1 ? "s" : "") + " réussi" + (nb() > 1 ? "s" : "") + " sur " + a.length + "</p>";
      j = 0;
      J.niveaux.forEach(function (nv) {
        h += "<h2>" + esc(nv.nom) + '</h2><ol class="etapes">';
        nv.situations.forEach(function (x) { j++; h += '<li class="etape' + (faits[j] ? " ok" : "") + '"><a href="#/jeu/pad/' + j + '"><span class="pastille-etape' + (faits[j] ? " ok" : "") + '">' + (faits[j] ? I.ok : j) + "</span><span><b>" + esc(x.qui) + "</b><small>" + esc(nv.aide || "") + '</small></span><span class="etat">' + I.fleche + "</span></a></li>"; });
        h += "</ol>";
      });
      h += "<h2>Et dans mon métier ?</h2>" + (metier() ? '<ol class="etapes"><li class="etape"><a href="#/jeu/pad/m"><span class="pastille-etape">★</span><span><b>Un accident de mon métier : ' + esc(metier().metier) + '</b><small>Le même schéma, avec une situation de ton métier</small></span><span class="etat">' + I.fleche + "</span></a></li></ol>" : inviteMetier("Quel métier prépares-tu ?"));
      return h + "</div>";
    }
    var sj = situJeu(n); if (!sj) return n === "m" ? '<div class="contenu etroit">' + inviteMetier("Quel métier prépares-tu ?") + "</div>" : page404();
    var cle = "jeu/pad/" + n; if (!exo || exo.cle !== cle) initExo(cle, sj.exo);
    if (exo.fini && n !== "m" && !faits[n]) {
      if (!st.jeux) st.jeux = {}; st.jeux.pad = faits; faits[n] = true;
      if (r && nb() >= J.reussite) st.vu[r.num] = true;
      save();
    }
    h = '<div class="contenu etroit lecon"><div class="lecon-haut"><a class="fermer-lecon" href="#/jeu/pad" aria-label="Retour à la liste des situations">×</a><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + a.length + '" aria-valuenow="' + nb() + '"><i style="width:' + (nb() / a.length * 100) + '%"></i></div></div>';
    h += '<p class="etiquette">' + (n === "m" ? "Mon métier" : "Situation " + (+n) + " sur " + a.length) + '</p><div class="histoire recit" data-lire><div><h1>' + esc(sj.qui) + "</h1><p>" + esc(sj.texte) + "</p>" + parle("Écouter la situation") + "</div></div>";
    if (sj.nv && sj.nv.aide && !exo.fini) h += '<p class="aide-niv">' + esc(sj.nv.aide) + "</p>";
    h += vueExo(sj.exo);
    if (exo.fini) {
      var suiv = 0; for (j = 1; j <= a.length; j++) if (!faits[j] && (!suiv || (suiv < +n && j > +n))) suiv = j;
      h += '<div class="retour oui succes" data-lire role="status">' + window.DECOR.maki("bravo", 64) + "<div><b>" + (exo.raté ? "Schéma complet, bien joué !" : "Schéma parfait, sans une erreur !") + "</b> " + esc(sj.exo.retour || "") + "</div></div>";
      h += suiv ? '<a class="btn large" href="#/jeu/pad/' + suiv + '">Situation suivante</a>' : '<a class="btn large" href="#/jeu/pad">Voir toutes les situations</a>';
    }
    return h + "</div>";
  }
  function pageLecon(niv, code, k) {
    var l = lecon(niv, code); if (!l) return page404();
    var cle = niv + "/" + code, N = nbEcrans(l), mod = "#/" + cle, r = leconRes(niv, code);
    k = Math.max(0, Math.min(N - 1, +k || 0));
    if (!st.prof && !(r && st.vu[r.num]) && k > posLecon(cle) + 1) k = posLecon(cle) + 1 > N - 1 ? N - 1 : posLecon(cle) + 1; // on ne saute pas d'écran
    if (!st.pos) st.pos = {};
    if (k > posLecon(cle)) { st.pos[cle] = k; save(); }
    var suiv = mod + "/lecon/" + (k + 1), h = '<div class="contenu etroit lecon">';
    h += '<div class="lecon-haut"><a class="fermer-lecon" href="' + mod + '" aria-label="Quitter la leçon">×</a><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + (N - 1) + '" aria-valuenow="' + k + '"><i style="width:' + (k / (N - 1) * 100) + '%"></i></div></div>';
    if (k === 0) { // la situation
      var s = l.situation;
      if (!exo || exo.cle !== cle + "/0") exo = { cle: cle + "/0", choisi: -1 };
      h += '<p class="etiquette">La situation</p>' + illus(s) + '<div class="histoire" data-lire>' + window.DECOR.maki("salut", 84) + "<div><h1>" + esc(s.titre) + "</h1>" + s.texte.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + parle("Écouter l'histoire") + "</div></div>";
      h += '<div data-lire><p class="consigne">' + esc(s.question) + '</p><div class="choix">' + s.choix.map(function (c, j) { return '<button class="rep' + (exo.choisi === j ? " coche" : "") + '" data-exo="' + j + '">' + esc(c[0]) + "</button>"; }).join("") + "</div></div>";
      if (exo.choisi >= 0) h += '<div class="retour oui" data-lire role="status">' + esc(s.choix[exo.choisi][1]) + " " + esc(s.suite || "") + '</div><a class="btn large" href="' + suiv + '">Commencer la leçon</a>';
    } else if (l.sms && k === N - 2) { // le SMS à la mascotte
      if (!exo || exo.cle !== cle + "/" + k) { exo = { cle: cle + "/" + k, q: 0, fil: [{ de: "m", t: l.sms.intro }], fini: false }; smsQuestion(l.sms); }
      h += vueSms(l.sms, suiv);
    } else if (k === N - 1) { // je retiens
      if (r && !st.vu[r.num]) { st.vu[r.num] = true; save(); }
      h += '<p class="etiquette">Je retiens</p><div class="fin">' + window.DECOR.maki("bravo", 96) + "<h1>Leçon terminée !</h1><p>+20 XP. Voici l'essentiel à garder en tête.</p></div>";
      h += '<div data-lire><ol class="retenir">' + l.retenir.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" + parle("Écouter") + "</div>";
      h += '<a class="btn large" href="' + mod + '">Passer à l\'entraînement</a>';
    } else {
      var n = Math.floor((k - 1) / 2), idee = l.idees[n], estExo = (k - 1) % 2 === 1;
      if (!estExo) { // l'idée
        h += '<p class="etiquette">Idée ' + (n + 1) + " sur " + l.idees.length + '</p><div data-lire><h1>' + esc(idee.titre) + "</h1>" + illus(idee) + idee.texte.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + schema(idee.schema) + parle() + "</div>" + media(idee.media);
        h += '<a class="btn large" href="' + suiv + '">J\'ai compris, à moi de jouer</a>';
      } else { // l'exercice
        if (!exo || exo.cle !== cle + "/" + k) initExo(cle + "/" + k, idee.exercice);
        h += '<p class="etiquette">À toi de jouer</p>' + vueExo(idee.exercice);
        if (exo.fini) h += '<div class="retour oui succes" data-lire role="status">' + window.DECOR.maki("bravo", 64) + "<div><b>" + (exo.raté ? "C'est ça, bien joué !" : "Bravo, du premier coup !") + "</b> " + esc(idee.exercice.retour || "") + '</div></div><a class="btn large" href="' + suiv + '">Continuer</a>';
        else h += '<p class="aide-idee"><a href="' + mod + "/lecon/" + (k - 1) + '">Revoir l\'idée</a></p>';
      }
    }
    return h + "</div>";
  }
  // La page d'un module qui a une leçon : un parcours en 5 étapes
  // Onglets de la page de module : [identifiant, nom affiché]
  var MODTABS = [["cours", "Cours"], ["exos", "Exercices"], ["qcm", "QCM"], ["defi", "Défi"], ["retenir", "Je retiens"]];
  var modTab = { cle: "", t: "cours" };
  function pageParcours(niv, code, m, h) {
    var l = lecon(niv, code), cle = niv + "/" + code, N = nbEcrans(l), pos = posLecon(cle), r = leconRes(niv, code), finie = !!(r && st.vu[r.num]);
    var libre = finie || !!st.prof;
    var acts = m.ressources.filter(function (x) { return (x.type === "qcm" || x.type === "jeu") && x.lien; });
    var qcms = acts.filter(function (x) { return x.type === "qcm"; }), jeux = acts.filter(function (x) { return x.type === "jeu"; });
    function vers(x) { return (x.type === "jeu" ? "#/jeu/" : "#/qcm/") + x.lien; }
    function ecran(k) { return "#/" + cle + "/lecon/" + k; }
    var ideesVues = Math.min(l.idees.length, Math.floor(pos / 2)), tout = finie && acts.filter(fait).length === acts.length;
    if (modTab.cle !== cle) modTab = { cle: cle, t: "cours" };
    var T = modTab.t, s = l.situation;

    // 1. La mise en situation
    h += '<section class="bloc-mod situ" data-lire><p class="etiquette">Mise en situation</p><div class="situ-in">' + window.DECOR.maki(tout ? "bravo" : "salut", 64) + "<div><h2>" + esc(s.titre) + "</h2>" + s.texte.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + parle("Écouter l'histoire") + "</div></div></section>";
    // 2. L'objectif du module
    if (l.objectif && l.objectif.length) h += '<section class="bloc-mod objectif" data-lire><p class="etiquette">Objectif du module</p><p class="obj-intro">À la fin, je sais :</p><ul>' + l.objectif.map(function (o) { return "<li>" + I.ok + "<span>" + esc(o) + "</span></li>"; }).join("") + "</ul></section>";

    // 3. La barre d'onglets
    h += '<div class="onglets modtabs" role="tablist" aria-label="Les parties du module">' + MODTABS.map(function (o) {
      return '<button role="tab" aria-selected="' + (o[0] === T) + '" class="onglet' + (o[0] === T ? " actif" : "") + '" data-modtab="' + o[0] + '">' + o[1] + "</button>";
    }).join("") + "</div>";

    function ligne(n, titre, detail, ok, lien, verrou, prof) {
      var in_ = '<span class="pastille-etape' + (ok ? " ok" : "") + '">' + (ok ? I.ok : n) + "</span><span><b>" + titre + "</b>" + (detail ? "<small>" + detail + "</small>" : "") + "</span>" + (verrou ? '<span class="etat">' + I.cadenas + "</span>" : lien ? '<span class="etat">' + I.fleche + "</span>" : "");
      return '<li class="etape' + (ok ? " ok" : "") + (verrou ? " verrou" : "") + '">' + (lien && !verrou ? '<a href="' + lien + '">' + in_ + "</a>" : "<div>" + in_ + "</div>") + (prof || "") + "</li>";
    }
    function verrouMsg(quoi) { return '<p class="vide-msg">' + I.cadenas + " Termine d'abord le cours pour ouvrir " + quoi + ".</p>"; }

    h += '<div class="panneau" role="tabpanel">';
    if (T === "cours") {
      var cta = pos === 0 ? ["Commencer le cours", ecran(0)] : !finie ? ["Continuer le cours", ecran(Math.min(pos, N - 1))] : ["Revoir le cours", ecran(0)];
      h += '<p class="avance"><b>' + ideesVues + " idée" + (ideesVues > 1 ? "s" : "") + " sur " + l.idees.length + "</b> · une idée, puis un exercice</p>";
      h += '<a class="btn large' + (finie ? " clair" : "") + '" href="' + cta[1] + '">' + cta[0] + "</a>";
      h += '<ol class="etapes" data-lire>' + l.idees.map(function (id, i) {
        var k = 1 + 2 * i;
        return ligne(i + 1, esc(id.titre), "", finie || pos > k + 1, ecran(k), !libre && k > pos + 1);
      }).join("") + "</ol>";
    } else if (T === "exos") {
      h += '<p class="avance">Chaque idée du cours a son exercice. Tu peux les refaire autant que tu veux.</p><ol class="etapes" data-lire>';
      h += l.idees.map(function (id, i) {
        var k = 2 + 2 * i;
        return ligne(i + 1, "Exercice " + (i + 1), esc(id.titre), finie || pos > k, ecran(k), !libre && k > pos + 1);
      }).join("");
      h += jeux.map(function (j) { return ligne(I.fleche, esc(j.titre), "Un jeu pour s'entraîner", fait(j), vers(j), false, lienProf(base() + vers(j))); }).join("") + "</ol>";
      var perso = carteMetier(code) + carteCommune(code);
      if (perso) h += "<h2>" + (code === "B2" ? "Chez moi" : "Dans mon métier") + "</h2>" + perso;
    } else if (T === "qcm") {
      if (!qcms.length) h += '<p class="vide-msg">Le QCM de ce module arrive bientôt.</p>';
      else if (!libre) h += verrouMsg("le QCM");
      else h += '<ol class="etapes">' + qcms.map(function (q, i) { return ligne(i + 1, esc(q.titre), st.qcm[q.num] != null ? "Mon score : " + st.qcm[q.num] + " sur 10" : "10 questions", fait(q), vers(q), false, lienProf(base() + vers(q))); }).join("") + "</ol>";
    } else if (T === "defi") {
      if (!l.sms) h += '<p class="vide-msg">Le défi de ce module arrive bientôt.</p>';
      else {
        h += makiDit("pense", "Mon défi : écris-moi un SMS pour me dire ce que tu as compris. Si c'est difficile, je te donne des débuts de phrases.");
        if (!libre && pos < N - 2) h += verrouMsg("le défi");
        else h += '<a class="btn large" href="' + ecran(N - 2) + '">Écrire à ' + esc(M.nom) + "</a>";
      }
    } else {
      if (!libre) h += verrouMsg("le résumé");
      else h += '<div data-lire><ol class="retenir">' + l.retenir.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" + parle("Écouter") + "</div>";
    }
    return h + "</div></div>";
  }

  /* ---------- Parcours personnalisé : métier et commune ---------- */
  /* ---------- Les compétences C1 à C6 (section commune à toutes les classes) ---------- */
  var CP = window.COMPETENCES || { liste: [] };
  var COMPTABS = [["comprendre", "Comprendre"], ["methode", "Méthode"], ["exemple", "Exemple"], ["progres", "Progresser"], ["exos", "Exercices"]];
  function comp(n) { return CP.liste.filter(function (c) { return c.id === +n; })[0] || null; }
  function compFaite(c) { return !!(st.comp && st.comp[c.id]); }
  function carteComp() {
    if (!CP.liste.length) return "";
    var nb = CP.liste.filter(compFaite).length;
    return '<a class="carte acces-comp" href="#/competences"><span class="comp-badge">C1<br>C6</span><span><b>' + esc(CP.titre) + "</b><small>Comprendre ce que la consigne me demande, et progresser" + (nb ? " · " + nb + " sur " + CP.liste.length + " travaillée" + (nb > 1 ? "s" : "") : "") + "</small></span>" + I.fleche + "</a>";
  }
  function pageCompetences(n, sub, i) {
    if (!CP.liste.length) return page404();
    if (!n) {
      var h = '<div class="contenu"><nav class="fil"><a href="#/">Accueil</a> › ' + esc(CP.titre) + "</nav><h1>" + esc(CP.titre) + "</h1>";
      h += makiDit("salut", CP.intro);
      h += '<ol class="etapes" data-lire>' + CP.liste.map(function (c) {
        var ok = compFaite(c);
        return '<li class="etape' + (ok ? " ok" : "") + '"><a href="#/competences/' + c.id + '"><span class="pastille-etape comp-p' + (ok ? " ok" : "") + '">C' + c.id + "</span><span><b>" + esc(c.court) + "</b><small>" + esc(c.officiel.cap) + '</small></span><span class="etat">' + (ok ? I.ok : I.fleche) + "</span></a></li>";
      }).join("") + "</ol>";
      if (CP.attention) h += '<p class="comp-note" data-lire>' + esc(CP.attention) + "</p>";
      if (CP.niveaux && CP.niveaux.length) h += '<h2>Où j\'en suis ?</h2><p>Pour chaque compétence, ton professeur te situe sur quatre niveaux. Le but est de monter d\'un niveau à chaque fois.</p><ol class="niveaux-comp" data-lire>' + CP.niveaux.map(function (v, k) { return '<li class="nv' + k + '"><b>' + esc(v[0]) + "</b><span><strong>" + esc(v[1]) + "</strong>" + esc(v[2]) + "</span></li>"; }).join("") + "</ol>";
      return h + "</div>";
    }
    var c = comp(n); if (!c) return page404();
    var url = "#/competences/" + c.id;
    if (sub === "exo") { // un exercice, en plein écran comme dans les leçons
      var N = c.exercices.length, k = Math.max(0, Math.min(N - 1, +i || 0)), e = c.exercices[k], cle = "comp/" + c.id + "/" + k;
      if (!exo || exo.cle !== cle) initExo(cle, e);
      var x = '<div class="contenu etroit lecon"><div class="lecon-haut"><a class="fermer-lecon" href="' + url + '" aria-label="Quitter l\'exercice">×</a><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + N + '" aria-valuenow="' + (k + (exo.fini ? 1 : 0)) + '"><i style="width:' + ((k + (exo.fini ? 1 : 0)) / N * 100) + '%"></i></div></div>';
      x += '<p class="etiquette">Compétence C' + c.id + " · exercice " + (k + 1) + " sur " + N + "</p>" + vueExo(e);
      if (exo.fini) {
        if (k === N - 1 && !compFaite(c)) { if (!st.comp) st.comp = {}; st.comp[c.id] = true; save(); }
        x += '<div class="retour oui succes" data-lire role="status">' + window.DECOR.maki("bravo", 64) + "<div><b>" + (exo.raté ? "C'est ça, bien joué !" : "Bravo, du premier coup !") + "</b> " + esc(e.retour || "") + '</div></div><a class="btn large" href="' + (k < N - 1 ? url + "/exo/" + (k + 1) : url) + '">' + (k < N - 1 ? "Continuer" : "Terminer") + "</a>";
      }
      return x + "</div>";
    }
    var cle2 = "comp/" + c.id;
    if (modTab.cle !== cle2) modTab = { cle: cle2, t: "comprendre" };
    var T = modTab.t, f = '<div class="contenu"><nav class="fil"><a href="#/">Accueil</a> › <a href="#/competences">' + esc(CP.titre) + "</a> › C" + c.id + "</nav>";
    f += '<header class="tete comp-tete"><span class="comp-badge">C' + c.id + "</span><div><small>Compétence C" + c.id + "</small><h1>" + esc(c.court) + "</h1></div></header>";
    f += '<section class="bloc-mod objectif" data-lire><p class="etiquette">Dans le programme</p><p class="officiel">' + esc(c.officiel.cap) + "</p>" + (c.officiel.bacpro && c.officiel.bacpro !== c.officiel.cap ? '<p class="officiel bp"><small>En Bac Pro</small>' + esc(c.officiel.bacpro) + "</p>" : "") + "</section>";
    f += '<div class="onglets modtabs comptabs" role="tablist" aria-label="Les parties de la fiche">' + COMPTABS.map(function (o) {
      return '<button role="tab" aria-selected="' + (o[0] === T) + '" class="onglet' + (o[0] === T ? " actif" : "") + '" data-modtab="' + o[0] + '">' + o[1] + "</button>";
    }).join("") + '</div><div class="panneau" role="tabpanel">';
    function puces(a) { return '<ul class="comp-liste">' + a.map(function (p) { return "<li>" + I.ok + "<span>" + esc(p) + "</span></li>"; }).join("") + "</ul>"; }
    if (T === "comprendre") {
      f += '<div data-lire><h2>Ça veut dire quoi ?</h2>' + c.cestquoi.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + parle() + "</div>";
      f += '<div data-lire><h2>Les mots de la consigne</h2><p>Quand tu lis un de ces mots, c\'est cette compétence qui est demandée.</p><p class="verbes">' + c.verbes.map(function (v) { return "<span>" + esc(v) + "</span>"; }).join("") + "</p></div>";
    } else if (T === "methode") {
      f += '<div data-lire><h2>Ma méthode</h2><ol class="retenir">' + c.methode.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("") + "</ol>" + parle() + "</div>";
    } else if (T === "exemple") {
      var x2 = c.exemple;
      f += '<div data-lire class="comp-ex">' + (x2.doc ? '<p class="doc"><small>Le document</small>' + esc(x2.doc) + "</p>" : "") + '<p class="consigne">' + esc(x2.consigne) + "</p>";
      f += '<p class="rep-ex non"><small>Réponse fragile</small>' + esc(x2.fragile) + '</p><p class="rep-ex oui"><small>Bonne réponse</small>' + esc(x2.bonne) + "</p><p>" + esc(x2.pourquoi) + "</p>" + parle() + "</div>";
    } else if (T === "progres") {
      f += '<div data-lire><h2>Pour progresser</h2>' + puces(c.progresser) + parle() + "</div>";
      if (c.lien) f += '<a class="btn clair" href="' + c.lien.href + '">' + esc(c.lien.texte) + "</a>";
    } else {
      f += '<p class="avance">' + (compFaite(c) ? "<b>Compétence travaillée.</b> Tu peux refaire les exercices quand tu veux." : c.exercices.length + " exercices pour t'entraîner.") + '</p><a class="btn large' + (compFaite(c) ? " clair" : "") + '" href="' + url + '/exo/0">' + (compFaite(c) ? "Refaire les exercices" : "Je m'entraîne") + "</a>";
    }
    return f + "</div></div>";
  }
  /* ---------- Le compte de l'élève : anonyme, gardé dans le téléphone ----------
     Un identifiant tiré au hasard (fruit ou légume + nombre) et un code secret choisi par l'élève.
     Rien n'est envoyé : personne, même l'enseignant, ne peut relier un identifiant à un élève.
     Le code secret sert à fermer le parcours quand le téléphone est prêté. */
  var FRUITS = ["Mangue", "Papaye", "Coco", "Banane", "Litchi", "Goyave", "Ananas", "Corossol", "Citron", "Orange", "Pastèque", "Avocat", "Tamarin", "Tomate", "Piment", "Manioc", "Carotte", "Aubergine", "Concombre", "Maïs", "Gingembre", "Vanille", "Citrouille", "Oignon"];
  function idHasard() { return FRUITS[hasard(FRUITS.length)] + " " + (10 + hasard(90)); }
  function hacher(sel, code) { // empreinte du code secret : le code lui-même n'est jamais enregistré
    var s = sel + ":" + code, h1 = 2166136261, h2 = 5381;
    for (var t = 0; t < 2000; t++) for (var i = 0; i < s.length; i++) { h1 = Math.imul(h1 ^ s.charCodeAt(i), 16777619) >>> 0; h2 = (Math.imul(h2, 33) + s.charCodeAt(i) + t) >>> 0; }
    return h1.toString(16) + "-" + h2.toString(16);
  }
  function codeBon(code) { return !!st.compte && hacher(st.compte.sel, code) === st.compte.h; }
  function codeValide(c) { return /^\d{4,8}$/.test(c); }
  var ouvert = false, cpt = { id: idHasard(), msg: "", oubli: false, vue: "choix" };
  try { ouvert = sessionStorage.getItem("pse-ouvert") === "1"; } catch (e) {}
  function ouvrir(oui) { ouvert = oui; try { if (oui) sessionStorage.setItem("pse-ouvert", "1"); else sessionStorage.removeItem("pse-ouvert"); } catch (e) {} }
  function champCode(id, label) { return '<label for="' + id + '">' + label + '</label><input id="' + id + '" class="code-secret" type="password" inputmode="numeric" pattern="[0-9]*" maxlength="8" autocomplete="off">'; }
  function pageCompte() {
    var h = '<div class="contenu etroit porte-page">';
    var retour = '<p class="petit"><button class="lienbtn" data-action="cpt-vue-choix">‹ Retour</button></p>';
    if (!st.compte && cpt.vue === "creer") {
      h += "<h1>Crée ton compte</h1>" + makiDit("salut", "Je ne te demande ni ton nom ni ton adresse. Voici ton identifiant, tiré au hasard. Choisis ensuite ton code secret.");
      h += '<p class="etiquette">Mon identifiant</p><div class="id-compte"><b id="cptid">' + esc(cpt.id) + '</b><button class="btn sec petitbtn" data-action="cpt-autre">' + I.de + "Un autre</button></div>";
      h += '<div class="form-compte">' + champCode("cpt1", "Mon code secret <small>(4 chiffres ou plus)</small>") + champCode("cpt2", "Encore une fois, pour vérifier") + "</div>";
      h += '<p id="cptm" class="msg non" role="alert">' + esc(cpt.msg) + '</p><button class="btn large" data-action="cpt-creer">Créer mon compte</button>';
      h += '<p class="comp-note">Recopie ton identifiant et ton code secret dans ton cahier. Personne ne peut les retrouver pour toi, même pas ton professeur.</p>' + retour;
    } else if (!st.compte && cpt.vue === "retrouver") {
      h += "<h1>Me connecter</h1>" + makiDit("pense", "Il n'y a pas encore de compte sur ce téléphone. Pour retrouver ton parcours ici, il me faut ton identifiant et ton code de reprise.");
      h += '<div class="form-compte"><label for="cptf">Mon identifiant</label><div class="id-choix"><select id="cptf">' + FRUITS.map(function (f) { return "<option>" + esc(f) + "</option>"; }).join("") + '</select><input id="cptn2" type="text" inputmode="numeric" pattern="[0-9]*" maxlength="2" placeholder="42" aria-label="Le nombre de mon identifiant" autocomplete="off"></div>';
      h += '<label for="cptr">Mon code de reprise <small>(noté dans mon cahier)</small></label><input id="cptr" class="code-reprise-saisie" placeholder="XXXX-XXXX-XXXX" autocomplete="off" autocapitalize="characters">';
      h += champCode("cpt1", "Mon code secret <small>(4 chiffres ou plus)</small>") + "</div>";
      h += '<p id="cptm" class="msg non" role="alert">' + esc(cpt.msg) + '</p><button class="btn large" data-action="cpt-retrouver">Me connecter</button>';
      h += '<p class="comp-note">Tu n\'as pas noté ton code de reprise ? Crée un nouveau compte : tu recommenceras ton parcours sur ce téléphone.</p>' + retour;
    } else if (!st.compte) {
      h += '<div class="porte-accueil">' + window.DECOR.maki("salut", 150) + "<h1>Karibu !</h1><p>Entre dans ton parcours de PSE.</p>";
      h += '<button class="btn large" data-action="cpt-vue-retrouver">Me connecter</button><button class="btn large clair" data-action="cpt-vue-creer">Créer mon compte</button>';
      h += '<p class="petit"><button class="lienbtn" data-action="cpt-tard">Continuer sans compte</button></p></div>';
    } else {
      h += '<div class="porte-accueil">' + window.DECOR.maki("salut", 120) + "<h1>Bonjour " + esc(st.compte.id) + " !</h1><p>Tape ton code secret pour ouvrir ton parcours.</p></div>";
      h += '<div class="form-compte">' + champCode("cptc", "Mon code secret") + "</div>";
      h += '<p id="cptm" class="msg non" role="alert">' + esc(cpt.msg) + '</p><button class="btn large" data-action="cpt-entrer">Entrer</button>';
      if (!cpt.oubli) h += '<p class="petit"><button class="lienbtn" data-action="cpt-oubli">J\'ai oublié mon code secret</button></p>';
      else h += '<div class="comp-note"><p>Personne ne connaît ton code secret : il est impossible de le retrouver. Tu peux créer un nouveau compte, mais ta progression sur ce téléphone sera effacée. Si tu as noté ton code de reprise, tu pourras la retrouver ensuite dans ton profil.</p><button class="btn sec" data-action="cpt-neuf">Créer un nouveau compte</button></div>';
    }
    return h + "</div>";
  }
  function blocCompte() { // dans le profil
    var h = "<h2>Mon compte</h2>";
    if (!st.compte) return h + '<p>Tu n\'as pas encore de compte sur ce téléphone.</p><button class="btn" data-action="cpt-ouvrir">Créer mon compte</button>';
    h += '<div class="id-compte"><span><small>Mon identifiant</small><b>' + esc(st.compte.id) + '</b></span><button class="btn sec petitbtn" data-action="cpt-verrou">' + I.cadenas + "Fermer mon parcours</button></div>";
    h += '<details class="changer-code"><summary>Changer mon code secret</summary><div class="form-compte">' + champCode("cpta", "Mon code secret actuel") + champCode("cptn", "Mon nouveau code secret <small>(4 chiffres ou plus)</small>") + '</div><button class="btn sec" data-action="cpt-changer">Changer</button><p id="cptm" class="msg"></p></details>';
    return h;
  }
  function actionCompte(a, el) {
    function val(id) { var z = document.getElementById(id); return z ? z.value.trim() : ""; }
    function dire(t) { cpt.msg = t; var m = document.getElementById("cptm"); if (m) { m.textContent = t; m.className = "msg non"; } }
    if (a.indexOf("cpt-vue-") === 0) { cpt.vue = a.slice(8); cpt.msg = ""; rendu(); window.scrollTo(0, 0); var z1 = document.querySelector(".porte-page input, .porte-page select"); if (z1 && cpt.vue !== "choix") z1.focus(); }
    else if (a === "cpt-retrouver") {
      var nb = val("cptn2"), cr = val("cpt1"), ns = decode(val("cptr"));
      if (!/^\d{2}$/.test(nb)) return dire("Écris le nombre de ton identifiant, par exemple 42.");
      if (!ns) return dire("Ton code de reprise n'est pas bon : vérifie chaque lettre.");
      if (!codeValide(cr)) return dire("Ton code secret doit avoir entre 4 et 8 chiffres.");
      var sel2 = String(Date.now()) + hasard(1e6), idr = document.getElementById("cptf").value + " " + nb;
      ns.compte = { id: idr, sel: sel2, h: hacher(sel2, cr) }; ns.intro = true; if (!ns.pseudo) ns.pseudo = idr;
      st = ns; cpt.msg = ""; cpt.vue = "choix"; save(); appliquerTheme(); ouvrir(true); rendu(); window.scrollTo(0, 0);
    }
    else if (a === "cpt-autre") { cpt.id = idHasard(); document.getElementById("cptid").textContent = cpt.id; }
    else if (a === "cpt-creer") {
      var c1 = val("cpt1"), c2 = val("cpt2");
      if (!codeValide(c1)) return dire("Ton code secret doit avoir entre 4 et 8 chiffres.");
      if (/^(\d)\1+$/.test(c1) || c1 === "1234" || c1 === "12345678") return dire("Ce code est trop facile à deviner. Choisis-en un autre.");
      if (c1 !== c2) return dire("Les deux codes ne sont pas pareils. Recommence.");
      var sel = String(Date.now()) + hasard(1e6);
      st.compte = { id: cpt.id, sel: sel, h: hacher(sel, c1) };
      if (!st.pseudo) st.pseudo = cpt.id;
      cpt.msg = ""; cpt.vue = "choix"; save(); ouvrir(true); rendu(); window.scrollTo(0, 0);
    }
    else if (a === "cpt-tard") { cpt.msg = ""; ouvrir(true); rendu(); }
    else if (a === "cpt-entrer") {
      if (codeBon(val("cptc"))) { cpt.msg = ""; cpt.oubli = false; ouvrir(true); rendu(); window.scrollTo(0, 0); }
      else { dire("Ce n'est pas le bon code secret. Essaie encore."); var z = document.getElementById("cptc"); if (z) { z.value = ""; z.focus(); } }
    }
    else if (a === "cpt-oubli") { cpt.oubli = true; cpt.msg = ""; rendu(); }
    else if (a === "cpt-neuf") {
      if (el.dataset.confirme) { st = defaut(); cpt = { id: idHasard(), msg: "", oubli: false, vue: "creer" }; save(); appliquerTheme(); rendu(); }
      else { el.dataset.confirme = "1"; el.textContent = "Tu es sûr ? Touche encore pour tout effacer"; }
    }
    else if (a === "cpt-ouvrir" || a === "cpt-verrou") { cpt.msg = ""; cpt.oubli = false; cpt.vue = a === "cpt-ouvrir" ? "creer" : "choix"; ouvrir(false); rendu(); window.scrollTo(0, 0); }
    else if (a === "cpt-changer") {
      var m = document.getElementById("cptm");
      if (!codeBon(val("cpta"))) { m.textContent = "Ton code secret actuel n'est pas le bon."; m.className = "msg non"; return; }
      if (!codeValide(val("cptn"))) { m.textContent = "Ton nouveau code doit avoir entre 4 et 8 chiffres."; m.className = "msg non"; return; }
      st.compte.h = hacher(st.compte.sel, val("cptn")); save();
      document.getElementById("cpta").value = ""; document.getElementById("cptn").value = "";
      m.textContent = "C'est fait, ton code secret est changé. Note-le dans ton cahier."; m.className = "msg oui";
    }
  }
  /* ---------- La première connexion : Maki présente la PSE, puis l'élève règle son profil ---------- */
  var ob = { i: 0, msg: "" }, OB_N = 4;
  function nivNom(id) { var n = S.niveaux.filter(function (x) { return x.id === id; })[0]; return n ? n.nom : ""; }
  function nivFini(id) { var ms = S.modules[id] || []; return ms.length > 0 && ms.every(function (m) { return dispo(m).length > 0 && avancement(m) === 1; }); }
  // Les niveaux proposés à l'accueil selon la classe choisie : [niveau, état] avec état = "ouvert", "bientot" ou "verrou"
  function niveauxPourMoi() {
    var ids = S.niveaux.map(function (n) { return n.id; }), moi = ids.indexOf(st.niv);
    function contenu(n) { return n.actif && (S.modules[n.id] || []).length > 0; }
    if (moi < 0) return S.niveaux.map(function (n) { return [n, contenu(n) ? "ouvert" : "bientot"]; }); // classe pas encore choisie
    if (st.niv === "cap") return [[S.niveaux[moi], contenu(S.niveaux[moi]) ? "ouvert" : "bientot"]];
    var bac = S.niveaux.filter(function (n) { return n.id !== "cap"; }), k = bac.map(function (n) { return n.id; }).indexOf(st.niv);
    return bac.map(function (n, j) {
      if (j <= k) return [n, contenu(n) ? "ouvert" : "bientot"]; // ma classe et les années d'avant
      var avant = bac.slice(0, j).every(function (x) { return nivFini(x.id); }); // les années d'après : seulement quand tout ce qui précède est fait
      return [n, avant ? (contenu(n) ? "ouvert" : "bientot") : "verrou"];
    });
  }
  function cartesNiveaux() {
    var liste = niveauxPourMoi(), h = "<h2>" + (st.niv ? "Mon niveau" : "Choisis ton niveau") + '</h2><div class="grille niveaux' + (liste.length === 1 ? " seul" : "") + '">';
    liste.forEach(function (x) {
      var n = x[0], moi = n.id === st.niv;
      if (x[1] === "ouvert") h += '<a class="carte niveau' + (moi ? " maclasse" : "") + '" href="#/' + n.id + '"><b>' + esc(n.nom) + "</b><small>" + (moi ? "Ma classe" : esc(n.detail)) + "</small>" + I.fleche + "</a>";
      else h += '<div class="carte niveau off' + (moi ? " maclasse" : "") + '"><b>' + esc(n.nom) + "</b><small>" + I.cadenas + (x[1] === "verrou" ? "Termine d'abord les années d'avant" : (moi ? "Ma classe · bientôt" : "Bientôt")) + "</small></div>";
    });
    return h + "</div>";
  }
  function choixClasse(id) {
    return '<div class="choix-classe" role="group" aria-label="Ma classe">' + S.niveaux.map(function (n) { return '<button class="rep' + (st.niv === n.id ? " coche" : "") + '" data-niv="' + n.id + '"' + (id ? ' data-ou="' + id + '"' : "") + ">" + esc(n.nom) + "</button>"; }).join("") + "</div>";
  }
  function pageIntro() {
    var i = ob.i, h = '<div class="contenu etroit intro"><div class="lecon-haut"><div class="progress" role="progressbar" aria-valuemin="0" aria-valuemax="' + OB_N + '" aria-valuenow="' + (i + 1) + '"><i style="width:' + ((i + 1) / OB_N * 100) + '%"></i></div></div>';
    if (i === 0) {
      h += '<div class="porte-accueil" data-lire>' + window.DECOR.maki("salut", 130) + "<h1>Moi, c'est " + esc(M.nom) + " !</h1><p class=\"gros\">Je vais t'accompagner en PSE : <b>Prévention Santé Environnement</b>.</p><p class=\"gros\">La PSE t'apprend à prendre soin de toi, des autres et de la planète. À la maison, dehors et au travail.</p>" + parle() + "</div>";
      h += '<div class="grille domaines mini">' + [["A", "Ma santé", "Dormir, manger, bouger"], ["B", "Mon environnement", "L'eau, l'énergie, les risques"], ["C", "Mon travail", "Rester en sécurité"], ["D", "Mes achats", "Gérer mon argent"]].map(function (d) {
        return '<div class="domaine t' + d[0] + '"><span class="pic">' + I[d[0]] + "</span><b>" + d[1] + "</b><small>" + d[2] + "</small></div>";
      }).join("") + "</div>";
    } else if (i === 1) {
      h += '<div data-lire><h1>Comment ça marche ?</h1><ol class="retenir"><li><span><b>Une histoire.</b> Elle pourrait t\'arriver.</span></li><li><span><b>Une idée, puis un exercice.</b> Si tu te trompes, tu recommences.</span></li><li><span><b>Un QCM et un défi.</b> Pour voir ce que tu as retenu.</span></li><li><span><b>Besoin d\'aide ?</b> Touche-moi, en bas de l\'écran. Je peux aussi lire les textes.</span></li></ol>' + parle() + "</div>";
      h += makiDit("pense", "Ici, il n'y a pas de note. Tu avances à ton rythme, et tout reste dans ton téléphone.");
    } else if (i === 2) {
      h += "<h1>Ma classe</h1><p>Je te montre les cours de ta classe.</p>" + choixClasse("intro");
      if (st.niv === "cap") h += '<div class="parcours"><label for="fil">Mon diplôme</label><select id="fil"><option value="0">Je choisis…</option>' + P.metiers.map(function (m, k) { return '<option value="' + (k + 1) + '"' + (st.fil === k + 1 ? " selected" : "") + ">" + esc(m.diplome) + "</option>"; }).join("") + "</select></div>";
      if (st.niv) h += '<div class="parcours"><label for="com">Ma commune</label><select id="com"><option value="0">Je choisis…</option>' + P.communes.map(function (c, k) { return '<option value="' + (k + 1) + '"' + (st.com === k + 1 ? " selected" : "") + ">" + esc(c) + "</option>"; }).join("") + "</select></div><p class=\"petit\">Les exemples des cours s'adaptent à ton métier et à ta commune.</p>";
      h += '<p id="obm" class="msg non" role="alert">' + esc(ob.msg) + "</p>";
    } else {
      h += '<h1>Mon style</h1><div class="porte-accueil"><div id="grand">' + avatar(st.av, 150) + '</div><button class="btn sec petitbtn" data-action="ob-avatar">' + I.de + "Un autre avatar</button></div>";
      h += '<h2>Mes couleurs</h2><div class="themes">' + THEMES.map(function (t, k) { return '<button class="theme-btn' + ((st.theme || 0) === k ? " sel" : "") + '" data-theme="' + k + '"><span style="background:linear-gradient(135deg,' + t[1] + " 55%," + t[2] + ' 55%)"></span>' + t[0] + "</button>"; }).join("") + "</div>";
      h += '<p class="petit">Tu pourras tout régler en détail dans ton profil : coiffure, tenue, pseudo…</p>';
    }
    h += '<button class="btn large" data-action="ob-suite">' + (i === OB_N - 1 ? "C'est parti !" : "Continuer") + "</button>";
    h += '<p class="petit ob-bas">' + (i > 0 ? '<button class="lienbtn" data-action="ob-retour">‹ Retour</button>' : "") + (i < 2 ? '<button class="lienbtn" data-action="ob-passer">Passer la présentation</button>' : "") + "</p>";
    return h + "</div>";
  }
  function actionIntro(a) {
    if (a === "ob-avatar") { st.av = OPT.map(function (n, k) { return k === 8 || k === 9 || k === 7 ? (hasard(2) ? hasard(n) : 0) : hasard(n); }); save(); rendu(); return; }
    if (a === "ob-retour") ob.i = Math.max(0, ob.i - 1);
    else if (a === "ob-passer") ob.i = 2; // on passe la présentation, pas le choix de la classe
    else if (a === "ob-suite") {
      if (ob.i === 2 && !st.niv) { ob.msg = "Touche ta classe pour continuer."; rendu(); return; }
      if (ob.i === OB_N - 1) { st.intro = true; ob.i = 0; save(); rendu(); window.scrollTo(0, 0); return; }
      ob.i++;
    }
    ob.msg = ""; rendu(); window.scrollTo(0, 0);
  }
  /* ---------- L'appli sur le téléphone ---------- */
  function installee() { return (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) || window.navigator.standalone === true; }
  function carteInstaller() {
    if (installee()) return "";
    return '<a class="carte acces-comp installer" href="#/installer"><img src="img/icone-192.png" alt="" width="52" height="52"><span><b>Installer l\'appli</b><small>Maki sur ton écran d\'accueil, même sans connexion</small></span>' + I.fleche + "</a>";
  }
  function pageInstaller() {
    var ios = /iphone|ipad|ipod/i.test(navigator.userAgent), h = '<div class="contenu etroit"><nav class="fil"><a href="#/">Accueil</a> › Installer l\'appli</nav><h1>Installer l\'appli</h1>';
    if (installee()) return h + makiDit("bravo", "L'appli est déjà installée sur ce téléphone. Tu peux l'ouvrir même sans connexion.") + "</div>";
    h += makiDit("salut", "Mets-moi sur ton écran d'accueil ! C'est gratuit, et ça marche même sans connexion.");
    function etapes(titre, a) { return '<div data-lire><h2>' + titre + '</h2><ol class="retenir">' + a.map(function (p) { return "<li><span>" + p + "</span></li>"; }).join("") + "</ol>" + parle() + "</div>"; }
    var iph = etapes("Sur iPhone", ["Ouvre ce site avec <b>Safari</b>.", "Touche le bouton <b>Partager</b> : le carré avec une flèche vers le haut.", "Touche <b>Sur l'écran d'accueil</b>.", "Touche <b>Ajouter</b>. L'icône de Maki apparaît."]);
    var and = etapes("Sur Android", ["Ouvre ce site avec <b>Chrome</b>.", "Touche les <b>trois points</b>, en haut à droite.", "Touche <b>Installer l'application</b> ou <b>Ajouter à l'écran d'accueil</b>.", "Touche <b>Installer</b>. L'icône de Maki apparaît."]);
    h += ios ? iph + and : and + iph;
    return h + '<p class="comp-note">Ton compte et ta progression restent dans ton téléphone. Pense à noter ton code de reprise, dans ton profil.</p></div>';
  }
  function metier() { return st.fil ? P.metiers[st.fil - 1] : null; }
  function commune() { return st.com ? P.communes[st.com - 1] : ""; }
  var MODS_METIER = { C2: 1, C3: 1, C4: 1, C5: 1 };
  function encadre(cls, titre, corps) { return '<aside class="perso ' + cls + '" data-lire><b class="perso-titre">' + titre + "</b>" + corps + parle() + "</aside>"; }
  function inviteMetier(quoi) {
    return '<a class="perso vide" href="#/profil">' + I.fleche + "<span><b>" + quoi + "</b><small>Dis-le dans « Mon profil » : les exemples seront adaptés.</small></span></a>";
  }
  function carteMetier(code) {
    if (!MODS_METIER[code]) return "";
    var m = metier(); if (!m) return inviteMetier("Quel métier prépares-tu ?");
    var t = "Dans ton métier : " + esc(m.metier), c = "";
    if (code === "C2") c = "<p>" + esc(m.c2) + "</p>";
    if (code === "C3") c = '<p class="situation">' + esc(m.situation.texte) + "</p><p>Retrouve le danger, la situation dangereuse, l'événement dangereux et le dommage.</p>" +
      '<a class="btn" href="#/jeu/pad/m">Je fais le schéma de cette situation</a> <a class="btn clair" href="#/qcm/metier">Le QCM de mon métier</a>';
    if (code === "C4") c = "<p>Le risque le plus important dans ton métier : <b>" + esc(m.risque) + "</b>.</p>" +
      '<dl><dt>Protections collectives (pour tout le monde, en premier)</dt><dd>' + esc(m.collectives) + "</dd><dt>Protections individuelles (EPI)</dt><dd>" + esc(m.epi) + "</dd></dl>";
    if (code === "C5") c = "<p>" + esc(m.c5) + "</p>";
    return encadre("tC", t, c);
  }
  function carteCommune(code) {
    if (code !== "B2") return "";
    var c = commune(); if (!c) return inviteMetier("Dans quelle commune habites-tu ?");
    var h = "<p>Comme toutes les communes de Mayotte, " + esc(c) + " peut être touchée par un cyclone, un séisme, une inondation ou un glissement de terrain. Près de la mer, il y a aussi le risque de tsunami.</p>" +
      "<p><b>Ma mission à " + esc(c) + " :</b></p><ul>" +
      "<li>Je repère un endroit en hauteur où aller à pied depuis chez moi.</li>" +
      "<li>Je demande à la mairie où se trouve l'abri le plus proche en cas de cyclone.</li>" +
      "<li>Je prépare avec ma famille un sac d'urgence : eau, lampe, radio, papiers.</li>" +
      '<li>Je regarde les risques de ma commune sur <a href="https://www.georisques.gouv.fr/" target="_blank" rel="noopener">georisques.gouv.fr</a>.</li></ul>';
    if (P.infosCommune && P.infosCommune[c]) h += "<p>" + esc(P.infosCommune[c]) + "</p>";
    return encadre("tB", "Chez toi, à " + esc(c), h);
  }
  // Un petit QCM fabriqué à partir de la situation du métier choisi (module C3)
  function qcmMetier() {
    var m = metier(); if (!m) return null;
    var s = m.situation, el = [["le danger", s.danger, "Le danger, c'est ce qui peut faire du mal."],
      ["la situation dangereuse", s.dangereuse, "La situation dangereuse, c'est la personne en présence du danger."],
      ["l'événement dangereux", s.evenement, "L'événement dangereux, c'est ce qui se passe et déclenche l'accident."],
      ["le dommage", s.dommage, "Le dommage, c'est la blessure ou l'atteinte à la santé."]];
    var qs = el.map(function (e, k) {
      return { ctx: s.texte, q: "Quel est " + e[0] + " ?", fb: e[2], a: el.map(function (x, j) { return { t: x[1], ok: j === k }; }) };
    });
    qs.push({ q: "Dans ton métier, quel est le risque le plus important ?", fb: "En " + m.diplome + " : " + m.risque + ".",
      a: [{ t: m.risque.charAt(0).toUpperCase() + m.risque.slice(1), ok: true }].concat(P.metiers.filter(function (x, k) { return x.risque !== m.risque && P.metiers.findIndex(function (y) { return y.risque === x.risque; }) === k; }).slice(0, 2).map(function (x) { return { t: x.risque.charAt(0).toUpperCase() + x.risque.slice(1), ok: false }; })) });
    qs.push({ q: "Quelle protection faut-il mettre en place en premier ?", fb: "On choisit d'abord la protection collective : elle protège tout le monde. Les EPI viennent en complément.",
      a: [{ t: "Une protection collective : " + m.collectives.split(",")[0], ok: true }, { t: "Un EPI : " + m.epi.split(",")[0], ok: false }, { t: "Aucune, il suffit de faire attention", ok: false }] });
    return { titre: "Une situation dans ton métier : " + m.metier, questions: qs };
  }

  /* ---------- La mascotte : le maki qui aide ---------- */
  var M = S.mascotte || { nom: "Maki" }, makiOuvert = false, makiTexte = "", page = [""];
  var FAQ = [
    ["Qui es-tu ?", "Je suis " + M.nom + ", un maki de Mayotte." + (M.surnom ? " Les élèves m'appellent aussi " + M.surnom + "." : "") + " Je connais la PSE par cœur : je te raconte des histoires, je t'explique les idées et je t'aide quand tu bloques."],
    ["Comment marche le site ?", "Choisis ton niveau, puis un module. Dans chaque module, tu trouves le cours, des exercices, un QCM, un audio et une vidéo courte. Fais-les dans l'ordre : c'est le plus simple."],
    ["Comment avancer sur la route ?", "Chaque ressource terminée te fait avancer. Un cours ou un exercice ouvert compte. Pour un QCM, il faut au moins 7 sur 10. Tu gagnes aussi des XP et des badges."],
    ["Comment réussir un QCM ?", "Lis la question en entier, puis toutes les réponses. Élimine celles qui sont fausses, c'est sûr. Si tu te trompes, lis bien l'explication : tu peux recommencer autant de fois que tu veux."],
    ["Je n'ai pas compris le cours", "C'est normal, ça arrive à tout le monde. Relis la leçon lentement, écoute l'audio, puis regarde la vidéo courte. Si ça bloque encore, note ta question et pose-la à ton professeur au prochain cours."],
    ["À quoi sert le code de reprise ?", "Il garde ton avatar et ta progression. Recopie-le dans ton cahier (Mon profil). Sur un autre téléphone ou au CDI, tape-le et tu reprends où tu en étais."],
    ["Je n'arrive pas à lire", "Touche le bouton « Écouter » avec le haut-parleur : je lis le texte pour toi et chaque mot se colore quand je le dis. Dans « Accessibilité », en haut de la page, tu peux aussi agrandir le texte."],
    ["Qui voit mes résultats ?", "Seulement toi. Rien n'est envoyé : tout reste sur ton téléphone. Ici tu t'entraînes, tu as le droit de te tromper. Les notes, c'est dans Pronote."]
  ];
  function conseilPage() {
    var p = page, g = global();
    if (p[0] === "installer") return "Suis les étapes une par une. Si tu n'y arrives pas, demande à ton professeur.";
    if (p[0] === "competences") return p[1] ? "Lis d'abord « Comprendre », puis la méthode et l'exemple. Ensuite, entraîne-toi avec les exercices." : "Les six compétences, c'est ce que tu dois savoir faire en PSE. Dans une évaluation, chaque question en travaille une. Touche une compétence pour la découvrir.";
    if (p[0] === "qcm") return "Prends ton temps : lis chaque réponse avant de choisir. Il te faut 7 sur 10 pour valider. Une erreur ? Lis l'explication, c'est comme ça qu'on apprend.";
    if (p[0] === "profil") return "Ici, tu crées ton avatar, tu choisis tes couleurs, ton diplôme et ta commune. Pour ton pseudo, invente un nom : jamais ton vrai nom. Pense à recopier ton code de reprise dans ton cahier.";
    if (p[2] === "lecon") return "Une idée, puis un exercice : c'est tout. Si tu te trompes, ce n'est pas grave, tu recommences. Tu peux toucher « Écouter » pour que je lise.";
    if (p[0] === "acces") return "Ici, tu règles le site pour toi : texte plus gros, lettres plus espacées, contraste, voix plus lente. Essaie, tu peux tout changer quand tu veux.";
    if (p[0] === "infos") return "Ce site ne garde aucune information sur toi. Tout reste sur ton téléphone.";
    if (p[1]) {
      var m = (S.modules[p[0]] || []).filter(function (x) { return x.code === p[1].toUpperCase(); })[0];
      if (m && MODS_METIER[m.code] && metier()) return "Regarde l'encadré « Dans ton métier » : les exemples parlent du métier de " + metier().metier + ". C'est ce que tu vivras à l'atelier et en stage.";
      if (m && m.conseil) return m.conseil;
      if (m && !dispo(m).length) return "Ce module n'est pas encore prêt. En attendant, tu peux revoir un module déjà ouvert.";
      return "Mon conseil : commence par le cours, fais l'exercice, puis teste-toi avec le QCM. L'audio et la vidéo t'aident à retenir l'essentiel.";
    }
    if (p[0]) return "Les modules sont rangés en quatre thématiques : A ma santé, B mon environnement, C mon travail, D mes achats. Les modules en couleur sont ouverts.";
    if (g >= 1) return "Bravo, tu es arrivé au bout de la route ! Tu peux refaire les QCM pour viser 10 sur 10.";
    if (g > 0) return "Content de te revoir ! Tu as déjà fait " + Math.round(g * 100) + " % du parcours. On continue ?";
    return "Karibu ! Moi, c'est " + M.nom + "." + (M.surnom ? " Mais tu peux m'appeler " + M.surnom + "." : "") + " Je t'accompagne sur la route. Choisis ton niveau pour commencer, et touche-moi quand tu as besoin d'aide.";
  }
  function majMaki() {
    var z = document.getElementById("maki"); if (!z) return;
    var h = "";
    if (makiOuvert) {
      h += '<div class="bulle" role="dialog" aria-label="Aide de ' + esc(M.nom) + '"><button class="fermer" data-action="maki" aria-label="Fermer">×</button>' +
        "<b>" + esc(M.nom) + (M.surnom ? ' <small class="surnom">alias ' + esc(M.surnom) + "</small>" : "") + '</b><div data-lire><p id="makidit">' + esc(makiTexte || conseilPage()) + "</p>" + parle() + '</div><div class="faq">';
      FAQ.forEach(function (q, k) { h += '<button data-faq="' + k + '">' + q[0] + "</button>"; });
      h += "</div></div>";
    }
    h += '<button class="maki-btn" data-action="maki" aria-label="Demander de l\'aide à ' + esc(M.nom) + '" aria-expanded="' + makiOuvert + '">' +
      window.DECOR.maki(makiOuvert ? "salut" : "calme", 64) + (makiOuvert ? "" : "<span>Aide</span>") + "</button>";
    z.innerHTML = h;
  }
  function makiDit(humeur, texte) {
    return '<div class="maki-dit" data-lire>' + window.DECOR.maki(humeur, 70) + '<p><b>' + esc(M.nom) + "</b>" + esc(texte) + parle() + "</p></div>";
  }

  /* ---------- Routeur ---------- */
  function rendu() {
    var p = (location.hash.replace(/^#\/?/, "") || "").split("/");
    var h; page = p; makiTexte = ""; arreter(); reelStop(); reel = null;
    var enIntro = ouvert && !st.intro && !st.prof;
    if (!ouvert) h = pageCompte();
    else if (enIntro) h = pageIntro();
    else if (!p[0]) h = pageAccueil();
    else if (p[0] === "qcm") h = pageQcm(p[1]);
    else if (p[0] === "profil") h = pageProfil();
    else if (p[0] === "infos") h = pageInfos();
    else if (p[0] === "acces") h = pageAcces();
    else if (p[0] === "jeu") h = pageJeu(p[1], p[2]);
    else if (p[0] === "competences") h = pageCompetences(p[1], p[2], p[3]);
    else if (p[0] === "installer") h = pageInstaller();
    else if (p[2] === "lecon") h = pageLecon(p[0], p[1].toUpperCase(), p[3]);
    else if (p[1]) h = pageModule(p[0], p[1].toUpperCase());
    else h = pageNiveau(p[0]);
    if (p[0] !== "qcm") quiz = null;
    if (p[2] !== "lecon" && p[0] !== "jeu" && !(p[0] === "competences" && p[2] === "exo")) exo = null;
    $app.innerHTML = h; majEntete(); placerMarcheur(); majMaki();
    document.documentElement.classList.toggle("porte", !ouvert || enIntro);
    document.documentElement.classList.toggle("en-lecon", ouvert && !enIntro && (p[2] === "lecon" || (p[0] === "jeu" && !!p[2]) || (p[0] === "competences" && p[2] === "exo")));
    majReel();
    if (p[0] === "qcm" && acc().auto && document.getElementById("zoneq") && quiz && quiz.rep === null) lire(document.getElementById("zoneq"), document.querySelector("#zoneq .parle"));
  }

  /* ---------- Interactions ---------- */
  function copier(t, el) {
    function ok() { if (el) { var o = el.innerHTML; el.innerHTML = "Copié !"; setTimeout(function () { el.innerHTML = o; }, 1500); } }
    if (navigator.clipboard) navigator.clipboard.writeText(t).then(ok, function () { montre(t, el); });
    else montre(t, el);
  }
  function montre(t, el) { if (el) el.insertAdjacentHTML("afterend", '<input class="copie" readonly value="' + esc(t) + '">'); }
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-rep],[data-action],[data-av],[data-vu],[data-copie],[data-onglet],[data-modtab],[data-niv],[data-theme],[data-faq],[data-acc],[data-exo]"); if (!el) return;
    if (el.dataset.action && el.dataset.action.indexOf("reel-") === 0) { reelAction(el.dataset.action); return; }
    if (el.dataset.exo != null && el.dataset.exo !== "" && page[0] === "competences" && page[2] === "exo") {
      var cc = comp(page[1]); if (cc && exo) { var ce = cc.exercices[Math.max(0, Math.min(cc.exercices.length - 1, +page[3] || 0))]; if (jouerExo(ce, el.dataset.exo)) rendu(); }
      return;
    }
    if (el.dataset.exo != null && el.dataset.exo !== "" && page[0] === "jeu") {
      var sj = situJeu(page[2]); if (sj && exo && jouerExo(sj.exo, el.dataset.exo)) rendu();
      return;
    }
    if (el.dataset.exo != null && el.dataset.exo !== "" && page[2] === "lecon") {
      var le = lecon(page[0], page[1].toUpperCase()), ke = +page[3] || 0;
      if (ke === 0) { exo.choisi = +el.dataset.exo; rendu(); }
      else if (le.sms && ke === nbEcrans(le) - 2) {
        if (jouerSms(le.sms, el.dataset.exo)) { rendu(); var za = document.getElementById("sms"), bs = document.querySelectorAll(".sms .msg"); if (bs.length > 2) bs[bs.length - 1].scrollIntoView({ block: "center" }); if (za && (exo.msg || exo.focus)) { za.focus(); za.setSelectionRange(za.value.length, za.value.length); } exo.focus = false; }
      }
      else if (jouerExo(le.idees[Math.floor((ke - 1) / 2)].exercice, el.dataset.exo)) rendu();
      return;
    }
    if (el.dataset.action === "lire") { e.preventDefault(); e.stopPropagation(); lire(el.closest("[data-lire]"), el); return; }
    if (el.dataset.acc) { var c = el.dataset.acc.split(","); acc()[c[0]] = +c[1]; save(); appliquerAcc(); rendu(); return; }
    if (el.dataset.faq) { arreter(); makiTexte = FAQ[+el.dataset.faq][1]; majMaki(); return; }
    if (el.dataset.copie) { e.preventDefault(); copier(el.dataset.copie, el); return; }
    if (el.dataset.vu) { st.vu[el.dataset.vu] = true; save(); setTimeout(rendu, 300); return; }
    if (el.dataset.rep) { quiz.rep = +el.dataset.rep; if (quiz.qs[quiz.i].a[quiz.rep].ok) quiz.score++; rendu(); return; }
    if (el.dataset.av) { var v = el.dataset.av.split(","); st.av[+v[0]] = +v[1]; save(); majProfil(); return; }
    if (el.dataset.onglet) { onglet = +el.dataset.onglet; majProfil(); return; }
    if (el.dataset.modtab) { modTab.t = el.dataset.modtab; var y = window.scrollY; rendu(); window.scrollTo(0, y); var ac = document.querySelector(".modtabs .actif"); if (ac) ac.focus({ preventScroll: true }); return; }
    if (el.dataset.niv) { st.niv = el.dataset.niv; if (st.niv !== "cap") st.fil = 0; ob.msg = ""; save(); rendu(); return; }
    if (el.dataset.theme) { st.theme = +el.dataset.theme; save(); appliquerTheme(); rendu(); return; }
    var a = el.dataset.action;
    if (a && a.indexOf("cpt-") === 0) { actionCompte(a, el); return; }
    if (a && a.indexOf("ob-") === 0) { actionIntro(a); return; }
    if (a === "maki") { arreter(); makiOuvert = !makiOuvert; makiTexte = ""; majMaki(); return; }
    if (a === "hasard-avatar") { st.av = OPT.map(function (n, k) { return k === 8 || k === 9 || k === 7 ? (hasard(2) ? hasard(n) : 0) : hasard(n); }); save(); majProfil(); }
    else if (a === "hasard-pseudo") { st.pg = [hasard(32), hasard(32)]; st.pseudo = nomPseudo(st.pg); save(); document.getElementById("pseudo").value = st.pseudo; majProfil(); }
    else if (a === "suivant") { quiz.i++; quiz.rep = null; rendu(); window.scrollTo(0, 0); }
    else if (a === "recommencer") { quiz = null; rendu(); }
    else if (a === "copier-code") copier(document.getElementById("code").textContent, el);
    else if (a === "reprendre") {
      var ns = decode(document.getElementById("saisie").value), msg = document.getElementById("msg");
      if (!ns) { msg.textContent = "Code incorrect : vérifie chaque lettre."; msg.className = "msg non"; return; }
      ns.compte = st.compte; ns.intro = st.intro; ns.niv = st.niv; st = ns; save(); appliquerTheme(); rendu(); var m2 = document.getElementById("msg"); m2.textContent = "C'est bon, ta progression est de retour !"; m2.className = "msg oui";
    }
    else if (a === "effacer") {
      if (el.dataset.confirme) { var cp0 = st.compte, nv0 = st.niv; st = defaut(); st.compte = cp0; st.niv = nv0; st.intro = true; save(); appliquerTheme(); rendu(); }
      else { el.dataset.confirme = "1"; el.textContent = "Tu es sûr ? Touche encore pour tout effacer"; }
    }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" || !e.target || !e.target.classList || !e.target.classList.contains("code-secret")) return;
    var b = document.querySelector('[data-action="cpt-creer"],[data-action="cpt-entrer"],[data-action="cpt-retrouver"],[data-action="cpt-changer"]'); if (b) { e.preventDefault(); b.click(); }
  });
  document.addEventListener("input", function (e) {
    if (e.target.id === "pseudo") { st.pseudo = e.target.value.trim(); st.pg = null; save(); majProfil(); }
  });
  document.addEventListener("change", function (e) {
    if (e.target.id === "prof") { st.prof = e.target.checked; save(); }
    if (e.target.id === "voix") { acc().voix = e.target.value; save(); }
    if (e.target.id === "fil") { st.fil = +e.target.value; save(); majProfil(); }
    if (e.target.id === "nivsel") { st.niv = e.target.value || ""; if (st.niv && st.niv !== "cap") st.fil = 0; save(); rendu(); }
    if (e.target.id === "com") { st.com = +e.target.value; save(); majProfil(); }
  });

  appliquerAcc();
  if (VOIX_OK) { try { synth.getVoices(); synth.onvoiceschanged = function () { if (page[0] === "acces" && !lecture) rendu(); }; } catch (e) {} }
  window.addEventListener("pagehide", arreter);
  document.getElementById("marque").textContent = S.titre;
  (function () { var lg = document.querySelector(".logo svg.marque"); if (lg) lg.outerHTML = '<span class="marque logo-maki" aria-hidden="true">' + window.DECOR.maki("salut", 60) + "</span>"; })();
  document.getElementById("sous").textContent = S.sousTitre;
  if ("serviceWorker" in navigator && /^https?:$/.test(location.protocol)) window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  window.addEventListener("hashchange", function () { rendu(); window.scrollTo(0, 0); $app.focus({ preventScroll: true }); });
  rendu();
})();
