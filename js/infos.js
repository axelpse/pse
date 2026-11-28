/* ============================================================
   JE M'INFORME — de courts articles en lecture facile
   ------------------------------------------------------------
   Pour ajouter un article, copiez un bloc { ... } et changez
   les textes entre guillemets. Le plus récent se place en premier.

   id        : un nom court, sans espace ni accent, jamais réutilisé
   rub       : "sante", "env" ou "eco"
   titre     : le titre, court
   date      : le mois de publication
   picto     : une petite image (voir la liste dans js/images.js)
   essentiel : l'info en une phrase
   texte     : 3 à 5 paragraphes très courts (une idée par phrase)
   chiffre   : le chiffre à retenir
   mot       : le mot à connaître et sa définition
   question  : une question à choix pour vérifier que l'élève a compris
   source    : d'où vient l'information (nom, et lien si possible)

   Règles de lecture facile : phrases courtes, mots simples,
   un seul chiffre important, pas de sigle sans explication.
   ============================================================ */
window.INFOS = {
  titre: "Je m'informe",
  intro: "Ici, je te raconte une info en une minute. Des phrases courtes, un chiffre, un mot à retenir, et une question pour voir si tu as compris.",
  rubriques: { sante: "Santé", env: "Environnement", eco: "Économie" },
  articles: [
    {
      id: "saison-cyclones", rub: "env", titre: "La saison des cyclones a commencé", date: "Novembre 2026", picto: "cyclone",
      essentiel: "À Mayotte, les cyclones peuvent arriver entre novembre et avril.",
      texte: [
        "Un cyclone est une énorme tempête. Elle se forme au-dessus de la mer chaude.",
        "Dans notre région, la saison des cyclones dure de novembre à avril. C'est la saison chaude et humide.",
        "Tous les cyclones ne touchent pas Mayotte. Mais il faut être prêt.",
        "Se préparer, c'est simple : connaître les couleurs de l'alerte, et garder chez soi de l'eau, une lampe et une radio."
      ],
      chiffre: { nombre: "6 mois", texte: "C'est la durée de la saison des cyclones, de novembre à avril." },
      mot: { mot: "Vigilance", def: "Faire attention et se tenir prêt, parce qu'un danger est possible." },
      question: { type: "choix", question: "Quand dure la saison des cyclones à Mayotte ?", choix: ["De novembre à avril", "De mai à octobre", "Toute l'année"], bon: 0, retour: "La saison des cyclones va de novembre à avril." },
      source: { nom: "Météo-France et préfecture de Mayotte" },
      lien: { texte: "Revoir le module B2 : les risques majeurs", href: "#/cap/B2" }
    },
    {
      id: "bouger-1h", rub: "sante", titre: "Une heure par jour pour être en forme", date: "Novembre 2026", picto: "personnes",
      essentiel: "À ton âge, ton corps a besoin de bouger au moins une heure par jour.",
      texte: [
        "C'est le conseil de l'Organisation mondiale de la santé, pour les jeunes de 5 à 17 ans.",
        "Bouger, ce n'est pas seulement faire du sport. Marcher vite, danser, jouer au foot, porter les courses : tout compte.",
        "Bouger rend le cœur et les os plus solides. On dort mieux et on est de meilleure humeur.",
        "Tu peux faire ton heure en plusieurs fois dans la journée."
      ],
      chiffre: { nombre: "60 minutes", texte: "C'est le temps à bouger chaque jour, au minimum." },
      mot: { mot: "Sédentaire", def: "Une personne sédentaire reste assise ou couchée une grande partie de la journée." },
      question: { type: "choix", question: "Qu'est-ce qui compte comme activité physique ?", choix: ["Marcher vite, danser, jouer au foot", "Seulement le sport en club", "Regarder un match à la télé"], bon: 0, retour: "Tout ce qui fait bouger ton corps compte, pas seulement le sport en club." },
      source: { nom: "Organisation mondiale de la santé (OMS)", lien: "https://www.who.int/europe/fr/publications/i/item/9789240014886" },
      lien: { texte: "Revoir le module A3 : l'activité physique", href: "#/cap/A3" }
    },
    {
      id: "arnaque-sms", rub: "eco", titre: "Attention aux faux SMS", date: "Novembre 2026", picto: "telephone",
      essentiel: "Des voleurs envoient de faux SMS pour prendre ton argent ou tes codes.",
      texte: [
        "Le message parle d'un colis, d'une amende ou d'un cadeau. Il te demande de cliquer sur un lien.",
        "Le lien ouvre un faux site. Si tu écris ton code ou ton numéro de carte, le voleur les récupère.",
        "Les bons réflexes : je ne clique pas, je ne réponds pas, je ne donne jamais mes codes.",
        "Tu peux signaler le message. Transfère-le au 33700 : c'est gratuit."
      ],
      chiffre: { nombre: "33700", texte: "C'est le numéro pour signaler un SMS suspect. Il suffit de lui transférer le message." },
      mot: { mot: "Hameçonnage", def: "Un piège sur Internet ou par SMS. Le voleur se fait passer pour quelqu'un de sérieux pour voler tes informations." },
      question: { type: "choix", question: "Tu reçois : « Votre colis est bloqué, cliquez ici pour payer 2 euros. » Que fais-tu ?", choix: ["Je ne clique pas et je transfère le SMS au 33700", "Je clique pour voir", "Je paie, ce n'est que 2 euros"], bon: 0, retour: "On ne clique jamais sur un lien reçu d'un inconnu. On peut le signaler au 33700." },
      source: { nom: "Ministère de l'Économie (DGCCRF)", lien: "https://www.economie.gouv.fr/dgccrf/sms-et-appels-indesirables-le-33-700-facilite-le-signalement-des-numeros-frauduleux" }
    },
    {
      id: "lagon-parc", rub: "env", titre: "Notre lagon est un trésor protégé", date: "Novembre 2026", picto: "vague",
      essentiel: "Le lagon de Mayotte est protégé par un parc naturel marin depuis 2010.",
      texte: [
        "Le lagon de Mayotte est l'un des plus grands du monde. Une barrière de corail l'entoure.",
        "Beaucoup d'animaux y vivent : des tortues, des dauphins, des poissons de toutes les couleurs. Les baleines viennent y mettre au monde leurs petits.",
        "Le lagon est fragile. Les déchets, la terre qui descend des collines et la pêche trop forte l'abîment.",
        "Chacun peut aider : ne rien jeter dans la nature et ne pas marcher sur les coraux."
      ],
      chiffre: { nombre: "2010", texte: "C'est l'année de création du Parc naturel marin de Mayotte." },
      mot: { mot: "Biodiversité", def: "Tous les êtres vivants d'un endroit : les animaux, les plantes, les coraux." },
      question: { type: "choix", question: "Qu'est-ce qui abîme le lagon ?", choix: ["Les déchets jetés dans la nature", "Les tortues", "La pluie"], bon: 0, retour: "Les déchets finissent dans les rivières, puis dans le lagon." },
      source: { nom: "Office français de la biodiversité", lien: "https://ofb.gouv.fr/le-parc-naturel-marin-de-mayotte" }
    },
    {
      id: "nutri-score", rub: "sante", titre: "Cinq lettres pour mieux choisir", date: "Novembre 2026", picto: "nourriture",
      essentiel: "Le Nutri-Score est un logo sur les emballages. Il aide à choisir ce que l'on mange.",
      texte: [
        "Le logo montre cinq lettres, de A à E, avec cinq couleurs.",
        "A en vert foncé : le produit est bon pour la santé. E en orange foncé : il contient beaucoup de sucre, de gras ou de sel.",
        "Le Nutri-Score sert à comparer deux produits du même rayon, par exemple deux paquets de biscuits.",
        "Un produit classé D ou E n'est pas interdit. On en mange moins souvent, et en petite quantité."
      ],
      chiffre: { nombre: "5 lettres", texte: "A, B, C, D et E : du meilleur choix au moins bon." },
      mot: { mot: "Emballage", def: "Le paquet, la boîte ou la bouteille qui entoure un produit." },
      question: { type: "choix", question: "Deux paquets de biscuits : l'un est classé B, l'autre E. Lequel est le meilleur choix pour la santé ?", choix: ["Le paquet classé B", "Le paquet classé E", "C'est pareil"], bon: 0, retour: "Plus la lettre est proche de A, meilleur est le choix." },
      source: { nom: "Santé publique France", lien: "https://www.mangerbouger.fr" },
      lien: { texte: "Revoir le module A7 : l'alimentation", href: "#/cap/A7" }
    },
    {
      id: "garantie-2-ans", rub: "eco", titre: "Mon téléphone tombe en panne : j'ai des droits", date: "Novembre 2026", picto: "papiers",
      essentiel: "Un produit neuf est garanti deux ans par la loi.",
      texte: [
        "Tu achètes un téléphone neuf. Six mois plus tard, il ne s'allume plus, et tu ne l'as pas cassé.",
        "Le vendeur doit le réparer ou le remplacer. Tu n'as rien à payer.",
        "Cette garantie est écrite dans la loi. Le vendeur ne peut pas la refuser.",
        "Pour la faire marcher, il faut une preuve d'achat. Garde toujours ton ticket de caisse ou ta facture."
      ],
      chiffre: { nombre: "2 ans", texte: "C'est la durée de la garantie prévue par la loi pour un produit neuf." },
      mot: { mot: "Garantie", def: "La promesse que le produit fonctionne. S'il tombe en panne, le vendeur doit agir." },
      question: { type: "choix", question: "Que dois-tu garder pour faire marcher la garantie ?", choix: ["Le ticket de caisse ou la facture", "Le sac du magasin", "Rien du tout"], bon: 0, retour: "Le ticket de caisse ou la facture prouve la date de ton achat." },
      source: { nom: "Service-Public.fr", lien: "https://www.service-public.fr" },
      lien: { texte: "Revoir le module D3 : les achats", href: "#/cap/D3" }
    },
    {
      id: "fil-sante-jeunes", rub: "sante", titre: "Un numéro pour parler, sans donner son nom", date: "Novembre 2026", picto: "telephone",
      essentiel: "Fil Santé Jeunes répond aux questions des jeunes sur le corps, l'amour et le moral.",
      texte: [
        "Tu as une question sur ton corps, sur la sexualité, sur une relation ? Tu te sens triste ou stressé ?",
        "Tu peux appeler Fil Santé Jeunes au 0 800 235 236. C'est gratuit.",
        "L'appel est anonyme : tu ne donnes pas ton nom. Des médecins et des psychologues t'écoutent, sans te juger.",
        "Le service est ouvert tous les jours, de 9 heures à 23 heures. Il existe aussi un tchat sur le site."
      ],
      chiffre: { nombre: "0 800 235 236", texte: "Le numéro de Fil Santé Jeunes, gratuit, pour les 12 à 25 ans." },
      mot: { mot: "Anonyme", def: "Sans donner son nom. Personne ne sait qui tu es." },
      question: { type: "choix", question: "Quand tu appelles Fil Santé Jeunes, dois-tu donner ton nom ?", choix: ["Non, l'appel est anonyme", "Oui, toujours", "Oui, et aussi ton adresse"], bon: 0, retour: "L'appel est anonyme et gratuit." },
      source: { nom: "Fil Santé Jeunes", lien: "https://www.filsantejeunes.com" }
    },
    {
      id: "bouteille-plastique", rub: "env", titre: "La très longue vie d'une bouteille en plastique", date: "Novembre 2026", picto: "eau",
      essentiel: "Jetée dans la nature, une bouteille en plastique met plusieurs centaines d'années à disparaître.",
      texte: [
        "Le plastique ne pourrit pas comme une peau de banane. Il se casse en tout petits morceaux.",
        "Avec la pluie, les déchets descendent dans les ravines, puis dans le lagon.",
        "Les tortues et les poissons avalent ces morceaux. Ils peuvent en mourir.",
        "La solution : jeter sa bouteille dans une poubelle ou une borne de tri. On peut aussi utiliser une gourde."
      ],
      chiffre: { nombre: "Des centaines d'années", texte: "C'est le temps qu'il faut à une bouteille en plastique pour disparaître dans la nature." },
      mot: { mot: "Recycler", def: "Transformer un déchet pour fabriquer un nouvel objet." },
      question: { type: "choix", question: "Où va une bouteille jetée dans une ravine ?", choix: ["Dans le lagon, avec la pluie", "Elle disparaît en quelques jours", "Elle reste toujours au même endroit"], bon: 0, retour: "La pluie emporte les déchets des ravines jusqu'au lagon." },
      source: { nom: "ADEME, l'Agence de la transition écologique", lien: "https://www.ademe.fr" }
    }
  ]
};
