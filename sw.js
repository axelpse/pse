/* ============================================================
   MODE HORS CONNEXION
   ------------------------------------------------------------
   Ce fichier garde une copie du site dans le téléphone.
   Avec du réseau, l'élève reçoit toujours la dernière version.
   Sans réseau, il retrouve la copie gardée.

   Si vous ajoutez un fichier au site (une image, un fichier js),
   ajoutez son nom dans la liste FICHIERS ci-dessous.
   ============================================================ */
var CACHE = "pse-maki-v3";
var FICHIERS = [
  "./", "index.html", "manifest.webmanifest", "css/style.css",
  "img/icone-180.png", "img/icone-192.png", "img/icone-512.png",
  "js/ressources.js", "js/metiers.js", "js/lecons.js", "js/lecons_A.js", "js/lecons_B.js", "js/lecons_C.js", "js/lecons_D.js",
  "js/jeux.js", "js/decor.js", "js/images.js", "js/qcm.js", "js/competences.js", "js/infos.js", "js/outils.js", "js/app.js"
];

self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(FICHIERS); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (noms) {
    return Promise.all(noms.filter(function (n) { return n !== CACHE; }).map(function (n) { return caches.delete(n); }));
  }).then(function () { return self.clients.claim(); }));
});

// D'abord le réseau (pour avoir les dernières leçons), sinon la copie gardée
self.addEventListener("fetch", function (e) {
  var r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== self.location.origin) return;
  e.respondWith(
    fetch(r).then(function (rep) {
      if (rep && rep.ok) { var copie = rep.clone(); caches.open(CACHE).then(function (c) { c.put(r, copie); }); }
      return rep;
    }).catch(function () {
      return caches.match(r, { ignoreSearch: true }).then(function (rep) { return rep || caches.match("index.html"); });
    })
  );
});
