/* =====================================================================
   FICHIER À MODIFIER : la liste des modules et des ressources du site.
   ---------------------------------------------------------------------
   Pour ajouter une ressource, copiez une ligne { ... } et changez :
     num   : un numéro UNIQUE (prenez le suivant, ne réutilisez jamais un
             numéro supprimé : il sert au code de reprise des élèves)
     type  : "lecon" (leçon du site, voir js/lecons.js), "jeu" (voir js/jeux.js), "qcm", "audio" ou "short"
     titre : ce que l'élève voit
     lien  : le fichier (docs/mon_fichier.pdf), une adresse web
             (vidéo Tube apps.education…) ou, pour un QCM, son code (b2-1)
             Laissez "" si la ressource n'est pas encore prête : la carte
             s'affiche « bientôt ».
   Ne mettez JAMAIS de corrigé d'évaluation ni de donnée d'élève ici.
   ===================================================================== */

window.SITE = {
  titre: "La PSE avec Maki",
  sousTitre: "Ma santé, ma sécurité, mon avenir.",

  // La phrase d'accueil : l'objectif du site
  objectif: "Ma santé, mon environnement, mon travail, ma vie de consommateur : un module à la fois, j'avance sur le chemin.",

  // La mascotte : changez son nom et son surnom ici si vous voulez (surnom vide = pas de surnom)
  mascotte: { nom: "Maki", surnom: "Monsieur PSE" },

  // Bandeau « Cette semaine » de l'accueil (modifiez chaque semaine)
  aLaUne: { texte: "Module B2 : les risques majeurs à Mayotte", niveau: "cap", module: "B2" },

  niveaux: [
    { id: "cap", nom: "CAP", detail: "1re et 2e année", actif: true },
    { id: "2de", nom: "2de Bac Pro", detail: "Bientôt", actif: false },
    { id: "1re", nom: "1re Bac Pro", detail: "Bientôt", actif: false },
    { id: "tle", nom: "Tle Bac Pro", detail: "Bientôt", actif: false }
  ],

  thematiques: {
    A: "L'individu responsable de son capital santé",
    B: "L'individu dans son environnement",
    C: "L'individu acteur des situations de travail",
    D: "L'individu consommateur averti"
  },

  modules: {
    cap: [
      { code: "A1", titre: "Le système de santé", ressources: [
        { num: 15, type: "lecon", titre: "La leçon : ma santé et le système de santé", lien: "cap/A1" },
        { num: 2, type: "audio", titre: "La leçon à écouter", lien: "" },
        { num: 3, type: "short", titre: "La Sécu en 60 secondes", lien: "" }
      ]},
      { code: "A2", titre: "Le sommeil, un rythme biologique", ressources: [
        { num: 16, type: "lecon", titre: "La leçon : pourquoi dormir ?", lien: "cap/A2" }
      ] },
      { code: "A3", titre: "L'activité physique", ressources: [
        { num: 17, type: "lecon", titre: "La leçon : bouger pour ma santé", lien: "cap/A3" }
      ] },
      { code: "A4", titre: "Les addictions", ressources: [
        { num: 18, type: "lecon", titre: "La leçon : comment devient-on dépendant ?", lien: "cap/A4" }
      ] },
      { code: "A5", titre: "La sexualité, la contraception", ressources: [
        { num: 19, type: "lecon", titre: "La leçon : contraception et consentement", lien: "cap/A5" }
      ] },
      { code: "A6", titre: "Les IST", ressources: [
        { num: 20, type: "lecon", titre: "La leçon : se protéger des IST", lien: "cap/A6" }
      ] },
      { code: "A7", titre: "L'alimentation adaptée à son activité", ressources: [
        { num: 21, type: "lecon", titre: "La leçon : manger selon mon activité", lien: "cap/A7" }
      ] },

      { code: "B1", titre: "Les ressources en eau", ressources: [
        { num: 22, type: "lecon", titre: "La leçon : l'eau à Mayotte", lien: "cap/B1" }
      ] },
      { code: "B2", titre: "Les risques majeurs",
        // conseil : la phrase que dit la mascotte en haut du module (facultatif)
        conseil: "À Mayotte, on connaît les cyclones et les séismes. Dans ce module, tu apprends à reconnaître un risque majeur et les bons réflexes quand l'alerte sonne.",
        ressources: [
        { num: 5, type: "lecon", titre: "La leçon : les risques majeurs à Mayotte", lien: "cap/B2" },   // le contenu est dans js/lecons.js
        { num: 4, type: "qcm", titre: "QCM 1 : reconnaître un risque majeur à Mayotte", lien: "b2-1" },
        { num: 6, type: "qcm", titre: "QCM 2 : s'informer, être alerté et réagir", lien: "b2-2" }
      ]},
      { code: "B3", titre: "Les ressources en énergie", ressources: [
        { num: 23, type: "lecon", titre: "La leçon : l'énergie, d'où vient-elle ?", lien: "cap/B3" }
      ] },
      { code: "B4", titre: "Le bruit au quotidien", ressources: [
        { num: 24, type: "lecon", titre: "La leçon : le bruit et mes oreilles", lien: "cap/B4" }
      ] },

      { code: "C1", titre: "Les différents contrats de travail", ressources: [
        { num: 25, type: "lecon", titre: "La leçon : quel contrat vais-je signer ?", lien: "cap/C1" }
      ] },
      { code: "C2", titre: "Les enjeux de la santé et sécurité au travail", ressources: [
        { num: 26, type: "lecon", titre: "La leçon : pourquoi protéger sa santé au travail ?", lien: "cap/C2" },
        { num: 9, type: "qcm", titre: "QCM 1 : accident du travail, de trajet ou maladie pro ?", lien: "c2-1" },
        { num: 10, type: "qcm", titre: "QCM 2 : que faire en cas d'accident du travail ?", lien: "c2-2" }
      ]},
      { code: "C3", titre: "Démarche de prévention : activité de travail", ressources: [
        { num: 13, type: "lecon", titre: "La leçon : du danger à la blessure", lien: "cap/C3" },   // le contenu est dans js/lecons.js
        { num: 14, type: "jeu", titre: "Le jeu du PAD : 10 accidents à Mayotte", lien: "pad" },      // les situations sont dans js/jeux.js
        { num: 12, type: "qcm", titre: "QCM : du danger à la blessure", lien: "c3" }
      ]},
      { code: "C4", titre: "Démarche de prévention : risque spécifique", ressources: [
        { num: 27, type: "lecon", titre: "La leçon : le risque de mon métier", lien: "cap/C4" }
      ] },
      { code: "C5", titre: "Risques liés à l'activité physique du métier", ressources: [
        { num: 28, type: "lecon", titre: "La leçon : protéger mon dos au travail", lien: "cap/C5" }
      ] },
      { code: "C6", titre: "Acteurs et organismes de la prévention", ressources: [
        { num: 29, type: "lecon", titre: "La leçon : qui s'occupe de ma sécurité ?", lien: "cap/C6" }
      ] },
      { code: "C7", titre: "Suivi médical des salariés et vaccination", ressources: [
        { num: 30, type: "lecon", titre: "La leçon : visite médicale et vaccins", lien: "cap/C7" }
      ] },
      { code: "C8", titre: "Gestion des situations d'urgence (SST)", ressources: [
        { num: 31, type: "lecon", titre: "La leçon : les quatre actions du sauveteur", lien: "cap/C8" }
      ] },

      { code: "D1", titre: "L'assurance", ressources: [
        { num: 32, type: "lecon", titre: "La leçon : à quoi sert une assurance ?", lien: "cap/D1" }
      ] },
      { code: "D2", titre: "Le budget", ressources: [
        { num: 33, type: "lecon", titre: "La leçon : gérer mon budget", lien: "cap/D2" }
      ] },
      { code: "D3", titre: "Les achats", ressources: [
        { num: 34, type: "lecon", titre: "La leçon : acheter sans se faire avoir", lien: "cap/D3" }
      ] }
    ]
  }
};
