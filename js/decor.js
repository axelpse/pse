/* Illustrations du site (dessinées en SVG : aucune image à télécharger).
   Le chemin traverse le lagon, le centre de santé, la zone industrielle
   et l'entreprise : le parcours vers l'adulte responsable. */
window.DECOR = (function () {
  "use strict";

  function ic(d, extra) {
    return '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"' + (extra || "") + ">" + d + "</svg>";
  }
  var ICONES = {
    // thématiques
    A: ic('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/><path d="M7 11h3l1.5-2.5 2 5L15 11h2"/>'),
    B: ic('<path d="M5 15c4 0 9-3 10-11 3 4 3 10-2 13-3 2-6 1-8-2z"/><path d="M5 15c2-3 5-5 8-6"/><path d="M3 21c2-1.3 3.5-1.3 5 0s3 1.3 5 0 3.5-1.3 5 0"/>'),
    C: ic('<path d="M4 16h16"/><path d="M5 16a7 7 0 0 1 14 0"/><path d="M10 9.5V6.5a2 2 0 0 1 4 0v3"/><path d="M3 19h18"/>'),
    D: ic('<path d="M4 9h16l-1.6 9.2a2 2 0 0 1-2 1.8H7.6a2 2 0 0 1-2-1.8z"/><path d="M9 9l3-5 3 5"/><path d="M10 13v3M14 13v3"/>'),
    // types de ressources
    cours: ic('<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M9 8h7M9 11.5h5"/>'),
    exercice: ic('<path d="M15 4l5 5L9 20H4v-5z"/><path d="M13 6l5 5"/>'),
    qcm: ic('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="M8 12.5l3 3 5-6.5"/>'),
    audio: ic('<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>'),
    short: ic('<rect x="6" y="2.5" width="12" height="19" rx="3"/><path d="M10.5 9.5v5l4-2.5z" fill="currentColor"/>'),
    // divers
    fleche: ic('<path d="M9 5l7 7-7 7"/>'),
    ok: ic('<path d="M5 12.5l4.5 4.5L19 7.5"/>'),
    bientot: ic('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
    lien: ic('<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'),
    epingle: ic('<path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>'),
    medaille: ic('<circle cx="12" cy="15" r="5.5"/><path d="M8.5 10.5L6 3h4l2 4 2-4h4l-2.5 7.5"/><path d="M12 12.8v4.4M10 15h4"/>'),
    de: ic('<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><circle cx="8.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="15.5" cy="15.5" r="1.2" fill="currentColor"/><circle cx="12" cy="12" r="1.2" fill="currentColor"/><circle cx="15.5" cy="8.5" r="1.2" fill="currentColor"/><circle cx="8.5" cy="15.5" r="1.2" fill="currentColor"/>'),
    son: ic('<path d="M4 9.5h3.5L12 5.5v13l-4.5-4H4z" fill="currentColor"/><path d="M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11"/>'),
    acces: ic('<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="7.2" r="1.3" fill="currentColor"/><path d="M7.5 10h9M12 10v4.5M12 14.5l-2.5 4M12 14.5l2.5 4"/>'),
    cadenas: ic('<rect x="5" y="10.5" width="14" height="10" rx="2.5"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>')
  };

  /* Arbres de mangrove, vagues, bâtiments : quelques formes répétées */
  function mangrove(x, y, s) {
    return '<g transform="translate(' + x + " " + y + ") scale(" + s + ')">' +
      '<path d="M0 0 C-6 -10 -2 -24 0 -34 M0 0 C8 -8 6 -20 2 -32 M0 0 C-14 2 -16 -6 -10 -14" stroke="#5b4027" stroke-width="3" fill="none"/>' +
      '<ellipse cx="0" cy="-44" rx="26" ry="18" fill="#2f7d4f"/><ellipse cx="-12" cy="-50" rx="14" ry="11" fill="#3f9a62"/><ellipse cx="10" cy="-54" rx="12" ry="9" fill="#58b276"/></g>';
  }
  function fenetres(x, y, col, lig, dx, dy) {
    var s = "";
    for (var i = 0; i < col; i++) for (var j = 0; j < lig; j++)
      s += '<rect x="' + (x + i * dx) + '" y="' + (y + j * dy) + '" width="' + (dx - 7) + '" height="' + (dy - 8) + '" rx="2" fill="#bfe6f0"/>';
    return s;
  }

  // Le chemin du parcours (réutilisé pour placer l'avatar)
  var CHEMIN = "M -20 352 C 140 336 210 300 330 302 S 520 334 640 314 S 860 262 960 272 S 1140 300 1230 286";

  function scene() {
    var s = '<svg class="scene" viewBox="0 0 1200 380" preserveAspectRatio="xMidYMax slice" role="img" aria-label="Un chemin qui traverse le lagon et la mangrove, passe devant un centre de santé, une zone industrielle avec une grue, et arrive à une entreprise.">';
    s += '<defs><linearGradient id="ciel" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--ciel1,#9fdbe0)"/><stop offset=".75" style="stop-color:var(--ciel2,#e9f7f3)"/></linearGradient>' +
         '<linearGradient id="mer" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2bb3b1"/><stop offset="1" stop-color="#0b6f74"/></linearGradient>' +
         '<linearGradient id="sol" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8fcf7a"/><stop offset="1" stop-color="#5fae5c"/></linearGradient></defs>';
    s += '<rect width="1200" height="380" fill="url(#ciel)"/>';
    s += '<circle cx="1040" cy="78" r="38" style="fill:var(--astre,#ffd166)"/><circle cx="1040" cy="78" r="56" style="fill:var(--astre,#ffd166)" opacity=".25"/>';
    // nuages
    s += '<g fill="#fff" opacity=".9"><ellipse cx="220" cy="70" rx="46" ry="14"/><ellipse cx="250" cy="60" rx="28" ry="14"/><ellipse cx="760" cy="52" rx="40" ry="12"/><ellipse cx="785" cy="44" rx="22" ry="11"/></g>';
    // montagnes (le mont Choungui en clin d'œil)
    s += '<path d="M0 230 L120 170 L190 200 L260 120 L300 150 L330 110 L380 190 L470 170 L560 220 L0 260z" fill="#5aa98a" opacity=".55"/>';
    s += '<path d="M600 230 L700 180 L780 210 L880 160 L980 205 L1200 175 L1200 260 L600 260z" fill="#5aa98a" opacity=".45"/>';
    // lagon
    s += '<path d="M0 238 Q 150 226 330 240 L330 300 Q 160 318 0 330z" fill="url(#mer)"/>';
    s += '<g stroke="#e9fbf8" stroke-width="2.5" fill="none" opacity=".7" stroke-linecap="round"><path d="M30 262 q10 -6 20 0 t20 0"/><path d="M120 280 q10 -6 20 0 t20 0"/><path d="M220 258 q10 -6 20 0 t20 0"/><path d="M70 304 q10 -6 20 0 t20 0"/></g>';
    // pirogue
    s += '<g transform="translate(150 250)"><path d="M-26 0 Q0 12 26 0z" fill="#8a4b2a"/><path d="M-22 4 L-34 2 M22 4 L34 2" stroke="#8a4b2a" stroke-width="2"/><path d="M0 0 V-26 L14 -6z" fill="#fff"/></g>';
    // sol
    s += '<path d="M300 250 Q 640 226 1200 238 L1200 380 L0 380 L0 320 Q 160 306 300 296z" fill="url(#sol)"/>';
    s += mangrove(40, 320, 1) + mangrove(290, 300, 0.85) + mangrove(250, 322, 1.05);
    // centre de santé
    s += '<g transform="translate(400 160)"><rect x="0" y="40" width="150" height="100" rx="6" fill="#fff"/><rect x="0" y="40" width="150" height="16" fill="#e3f1ec"/>' +
         '<path d="M-8 44 L75 6 L158 44z" fill="#2a9d58"/>' + fenetres(14, 66, 2, 2, 26, 30) + fenetres(98, 66, 2, 2, 26, 30) +
         '<rect x="62" y="96" width="26" height="44" rx="3" fill="#2a9d58"/><rect x="66" y="56" width="18" height="30" rx="2" fill="#fff"/>' +
         '<g transform="translate(75 22)"><rect x="-13" y="-4" width="26" height="8" rx="2" fill="#e63946"/><rect x="-4" y="-13" width="8" height="26" rx="2" fill="#e63946"/></g></g>';
    // zone industrielle
    s += '<g transform="translate(610 150)"><rect x="0" y="62" width="170" height="86" fill="#7d8b99"/><path d="M0 62 L30 40 L30 62 L60 40 L60 62 L90 40 L90 62 L120 40 L120 62z" fill="#9aa8b5"/>' +
         '<rect x="132" y="0" width="16" height="70" fill="#5d6b78"/><rect x="132" y="10" width="16" height="7" fill="#e63946"/><rect x="152" y="18" width="12" height="52" fill="#5d6b78"/>' +
         '<g fill="#fff" opacity=".8"><circle cx="140" cy="-8" r="8"/><circle cx="150" cy="-18" r="10"/><circle cx="164" cy="-30" r="12"/></g>' +
         fenetres(12, 86, 5, 1, 24, 26) + '<rect x="128" y="104" width="34" height="44" fill="#4a5662"/><path d="M128 112h34M128 120h34M128 128h34M128 136h34" stroke="#5d6b78" stroke-width="2"/>' +
         '<g transform="translate(10 112)"><path d="M0 18 L10 0 L20 18z" fill="#f4b400"/><path d="M10 6v6M10 14v1" stroke="#222" stroke-width="2"/></g></g>';
    // grue de chantier
    s += '<g transform="translate(800 70)" stroke="#f4b400" stroke-width="5" fill="none"><path d="M20 230 V10"/><path d="M-30 18 H150"/><path d="M20 10 L-30 18 M20 10 L150 18"/><path d="M120 18 V70"/></g>' +
         '<path d="M800 80 l12 14 v190 h-12z" fill="none"/><rect x="908" y="140" width="26" height="18" fill="#2a3a4a"/><rect x="740" y="84" width="34" height="18" fill="#2a3a4a"/>';
    s += '<g transform="translate(800 70)"><path d="M14 230 V10 M26 230 V10" stroke="#d69a00" stroke-width="2"/></g>';
    // entreprise / bureaux
    s += '<g transform="translate(960 108)"><rect x="0" y="40" width="110" height="160" rx="4" fill="#3a5a98"/>' + fenetres(12, 54, 4, 5, 23, 28) +
         '<rect x="92" y="0" width="110" height="200" rx="4" fill="#28427a"/>' + fenetres(104, 14, 4, 6, 23, 28) +
         '<rect x="128" y="168" width="38" height="32" fill="#bfe6f0"/></g>';
    // chemin + jalons
    s += '<path d="' + CHEMIN + '" fill="none" stroke="#e9d8b0" stroke-width="30" stroke-linecap="round"/>';
    s += '<path d="' + CHEMIN + '" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="14 14" opacity=".8"/>';
    s += '<g id="marcheur"></g></svg>';
    return s;
  }

  /* La mascotte : un maki de Mayotte (lémur brun). humeur : "salut", "bravo", "pense" ou "calme" */
  function maki(humeur, taille) {
    var F = "#8a5a3c", N = "#3b2a22", C = "#ecdcc6", s = "";
    s += '<svg class="maki-svg" viewBox="0 0 120 132" width="' + taille + '" height="' + Math.round(taille * 1.1) + '" aria-hidden="true">';
    // queue
    s += '<g class="mk-queue"><path d="M80 112 C116 116 118 74 99 60" fill="none" stroke="' + F + '" stroke-width="13" stroke-linecap="round"/><path d="M102 66 Q101 62 99 60" fill="none" stroke="' + N + '" stroke-width="13" stroke-linecap="round"/></g>';
    // bras derrière le corps selon l'humeur
    function bras(d) { return '<path d="' + d + '" fill="none" stroke="' + F + '" stroke-width="10" stroke-linecap="round"/>'; }
    function main(x, y) { return '<circle cx="' + x + '" cy="' + y + '" r="6.5" fill="' + N + '"/>'; }
    if (humeur === "bravo") s += '<g class="mk-bras g">' + bras("M40 88 L22 64") + main(21, 62) + '</g><g class="mk-bras">' + bras("M80 88 L98 64") + main(99, 62) + "</g>";
    else if (humeur === "salut") s += '<g class="mk-bras">' + bras("M80 88 L100 68") + main(101, 66) + "</g>";
    // corps
    s += '<ellipse cx="60" cy="98" rx="27" ry="27" fill="' + F + '"/><ellipse cx="60" cy="102" rx="16" ry="19" fill="' + C + '"/>';
    s += '<ellipse cx="45" cy="124" rx="11" ry="6" fill="' + N + '"/><ellipse cx="75" cy="124" rx="11" ry="6" fill="' + N + '"/>';
    if (humeur === "salut") s += bras("M40 90 L36 108") + main(36, 110);
    if (humeur === "calme") s += bras("M40 90 L36 108") + main(36, 110) + bras("M80 90 L84 108") + main(84, 110);
    if (humeur === "pense") s += bras("M40 90 L36 108") + main(36, 110) + bras("M80 92 Q86 84 70 74") + main(69, 73);
    // oreilles et tête
    s += '<g class="mk-tete">' + '<circle cx="32" cy="29" r="10" fill="' + F + '"/><circle cx="32" cy="29" r="5.5" fill="' + C + '"/><circle cx="88" cy="29" r="10" fill="' + F + '"/><circle cx="88" cy="29" r="5.5" fill="' + C + '"/>';
    s += '<ellipse cx="60" cy="48" rx="31" ry="27" fill="' + F + '"/>';
    s += '<path d="M40 30 Q60 16 80 30 Q70 40 60 40 Q50 40 40 30z" fill="' + N + '"/>';
    s += '<ellipse cx="43" cy="53" rx="13" ry="12" fill="' + C + '"/><ellipse cx="77" cy="53" rx="13" ry="12" fill="' + C + '"/>';
    s += '<ellipse cx="60" cy="61" rx="12" ry="10" fill="' + N + '"/>';
    // yeux
    if (humeur === "bravo") s += '<path d="M39 50q6-8 12 0M69 50q6-8 12 0" fill="none" stroke="' + N + '" stroke-width="3.2" stroke-linecap="round"/>';
    else {
      var dy = humeur === "pense" ? -2 : 0, dx = humeur === "pense" ? 1.5 : 0;
      s += '<g class="mk-yeux"><circle cx="45" cy="49" r="7.5" fill="#f39a1e"/><circle cx="75" cy="49" r="7.5" fill="#f39a1e"/>' +
        '<circle cx="' + (45 + dx) + '" cy="' + (49 + dy) + '" r="3.6" fill="#141414"/><circle cx="' + (75 + dx) + '" cy="' + (49 + dy) + '" r="3.6" fill="#141414"/>' +
        '<circle cx="' + (46.5 + dx) + '" cy="' + (47.5 + dy) + '" r="1.3" fill="#fff"/><circle cx="' + (76.5 + dx) + '" cy="' + (47.5 + dy) + '" r="1.3" fill="#fff"/></g>';
    }
    // truffe et bouche
    s += '<ellipse cx="60" cy="56.5" rx="4" ry="3" fill="#141414"/>';
    s += humeur === "pense" ? '<path d="M56 65h8" stroke="' + C + '" stroke-width="2.2" stroke-linecap="round"/>'
       : humeur === "bravo" ? '<path d="M53 62h14a7 6 0 0 1-14 0z" fill="#f08aa0"/>'
       : '<path d="M54 63q6 5 12 0" fill="none" stroke="' + C + '" stroke-width="2.2" stroke-linecap="round"/>';
    s += "</g>";
    // foulard jaune du « prof »
    s += '<path d="M38 71q22 13 44 0l-1 8q-21 11-42 0z" fill="#f4b400"/><path d="M68 80l8 14-10-3-3-9z" fill="#d99a00"/>';
    return s + "</svg>";
  }

  return { icones: ICONES, scene: scene, chemin: CHEMIN, maki: maki };
})();
