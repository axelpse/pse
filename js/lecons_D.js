/* =====================================================================
   FICHIER À MODIFIER : les leçons de la thématique D (consommation).
   D1 et D2 suivent la progression de l'enseignant. D3 est écrite à partir
   du programme de PSE en CAP : À RELIRE par l'enseignant.
   ===================================================================== */
window.LECONS = window.LECONS || {};

/* ---------------------------------------------------------------- D1 */
window.LECONS["cap/D1"] = {
  objectif: ["expliquer à quoi sert une assurance", "citer les assurances obligatoires", "déclarer un sinistre"],
  situation: {
    titre: "Le scooter de Mourad",
    texte: [
      "Mourad vient d'acheter un scooter d'occasion pour aller au lycée. Son cousin lui dit : « L'assurance, c'est de l'argent jeté. Moi, je roule sans. »",
      "Une semaine plus tard, à Chirongui, Mourad freine trop tard et percute une voiture garée. La portière est enfoncée."
    ],
    question: "À ton avis, qui va payer la réparation de la voiture ?",
    choix: [
      ["Personne, c'est un accident.", "Un accident a toujours un responsable. On va voir ce que dit la loi."],
      ["L'assurance de Mourad, s'il en a une.", "C'est exactement le rôle de l'assurance. On va voir comment elle marche."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre à quoi sert une assurance et quoi faire après un accident."
  },
  idees: [
    {
      titre: "L'assurance repose sur la solidarité",
      texte: [
        "Chaque assuré paie une cotisation à l'assureur. Tout cet argent est mis en commun.",
        "Quand un assuré a un sinistre (un accident, un vol, un dégât), l'assureur l'indemnise avec l'argent de tous."
      ],
      schema: { type: "formule", termes: ["Les cotisations de tous", "Un sinistre", "Une indemnisation"],
        notes: ["Chacun paie un peu, régulièrement.", "Un accident, un vol, un dégât des eaux.", "L'assureur paie les dégâts."] },
      exercice: { type: "choix", question: "Qu'est-ce qu'un sinistre ?",
        choix: ["L'argent payé à l'assureur", "L'événement qui cause un dommage : accident, vol, incendie", "Le nom du contrat"], bon: 1,
        retour: "La cotisation, c'est ce que je paie. Le sinistre, c'est l'événement. L'indemnisation, c'est ce que l'assureur verse." }
    },
    {
      titre: "Je suis responsable des dommages que je cause",
      texte: [
        "La responsabilité civile, c'est l'obligation de réparer les dommages que je cause aux autres.",
        "L'assurance de responsabilité civile paie à ma place. Sans elle, je dois tout payer moi-même, parfois pendant des années."
      ],
      exercice: { type: "choix", question: "Mourad n'a pas d'assurance. Qui paie la portière ?",
        choix: ["Le propriétaire de la voiture", "Mourad, avec son propre argent", "Le lycée"], bon: 1,
        retour: "Et s'il avait blessé quelqu'un, la somme aurait pu être énorme. Rouler sans assurance est aussi puni par la loi." }
    },
    {
      titre: "Certaines assurances sont obligatoires",
      texte: ["La loi oblige à s'assurer dans certains cas. D'autres assurances sont facultatives : je choisis."],
      schema: { type: "liste", lignes: [
        { picto: "camion", nom: "Obligatoire : un véhicule à moteur", texte: "Scooter, moto, voiture : au minimum la responsabilité civile." },
        { picto: "maison", nom: "Obligatoire : un logement loué", texte: "Le locataire doit avoir une assurance habitation." },
        { picto: "telephone", nom: "Facultatif", texte: "L'assurance du téléphone, le vol du scooter, l'assurance tous risques." }
      ] },
      exercice: { type: "trier", question: "Obligatoire ou facultative ?", cases: ["Obligatoire", "Facultative"],
        cartes: [["La responsabilité civile d'un scooter", 0], ["L'assurance contre la casse du téléphone", 1], ["L'assurance habitation d'un locataire", 0], ["L'assurance contre le vol du scooter", 1]] }
    },
    {
      titre: "Le contrat dit ce qui est couvert, et ce qui ne l'est pas",
      texte: ["Avant de signer, je lis trois choses."],
      schema: { type: "liste", lignes: [
        { nom: "Les garanties", texte: "Ce qui est couvert : par exemple les dégâts causés aux autres, le vol, l'incendie." },
        { nom: "Les clauses d'exclusion", texte: "Ce qui n'est pas couvert : par exemple conduire sans permis ou après avoir bu." },
        { nom: "La franchise", texte: "La somme qui reste à ma charge après un sinistre." }
      ] },
      exercice: { type: "trier", question: "Garantie ou exclusion ?", cases: ["Garantie (couvert)", "Exclusion (pas couvert)"],
        cartes: [["Les dégâts causés à une autre voiture", 0], ["Un accident en conduisant sans permis", 1], ["Le vol du scooter, si c'est écrit au contrat", 0], ["Un accident après avoir bu de l'alcool", 1]] }
    },
    {
      titre: "Après un sinistre, je déclare vite",
      texte: ["Les délais sont courts : si je les dépasse, l'assureur peut refuser de payer."],
      schema: { type: "paliers", paliers: [
        { couleur: "#d62828", nom: "1. Je protège", texte: "Je mets les personnes en sécurité et j'évite que les dégâts s'aggravent." },
        { couleur: "#f08a00", nom: "2. Je constate", texte: "Photos, constat amiable rempli avec l'autre conducteur, témoins." },
        { couleur: "#3a5a98", nom: "3. Je déclare à mon assureur", texte: "En général dans les 5 jours ouvrés. 2 jours pour un vol. 30 jours après l'arrêté de catastrophe naturelle." },
        { couleur: "#2a9d58", nom: "4. Je garde les justificatifs", texte: "Factures, photos, dépôt de plainte en cas de vol." }
      ] },
      exercice: { type: "ordre", question: "Remets les démarches dans l'ordre.",
        cartes: ["Je protège", "Je constate avec des photos et un constat amiable", "Je déclare le sinistre à mon assureur", "Je garde tous les justificatifs"],
        retour: "Après un cyclone, l'assurance habitation indemnise si l'état de catastrophe naturelle est reconnu : encore faut-il être assuré." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Le cousin de Mourad me dit : « L'assurance du scooter, c'est de l'argent jeté. » Tu lui réponds quoi ?",
        aides: ["Pour un scooter, l'assurance est", "Si tu causes un accident,", "Sans assurance,"],
        idees: [
          { nom: "elle est obligatoire", indice: "que dit la loi pour un scooter ?", mots: ["obligatoire", "loi", "interdit", "amende", "oblige"] },
          { nom: "elle paie les dégâts causés aux autres", indice: "qui paie si tu abîmes une voiture ou blesses quelqu'un ?", mots: ["paye", "paie", "payer", "degats", "rembourse", "indemnise", "responsable", "responsabilite", "blesse", "reparer", "reparation"] }
        ],
        modele: "Pour un scooter, l'assurance est obligatoire. Si tu causes un accident, c'est elle qui paie les dégâts. Sans assurance, tu paies tout toi-même." },
      { question: "Dernière question : tu as un accident de scooter. Explique-moi ce que tu fais, étape par étape.",
        aides: ["D'abord, je", "Ensuite, je prends", "Je déclare à mon assureur dans"],
        idees: [
          { nom: "protéger", indice: "que fais-tu en premier, pour les personnes ?", mots: ["proteger", "protege", "securite", "blesse", "secours"] },
          { nom: "constater", indice: "comment prouver ce qui s'est passé ?", mots: ["photo", "constat", "temoin", "constate"] },
          { nom: "déclarer", indice: "qui dois-tu prévenir, et en combien de temps ?", mots: ["declare", "declarer", "assureur", "assurance", "5 jours", "delai", "prevenir"] }
        ],
        modele: "D'abord je protège et je vérifie que personne n'est blessé. Ensuite je prends des photos et je remplis un constat. Je déclare à mon assureur dans les 5 jours." }
    ]
  },
  retenir: [
    "Assurance = solidarité : les cotisations de tous indemnisent ceux qui ont un sinistre.",
    "Responsabilité civile : je dois réparer les dommages que je cause aux autres.",
    "Obligatoires : véhicule à moteur, logement loué.",
    "Le contrat précise les garanties, les exclusions et la franchise.",
    "Après un sinistre : je protège, je constate, je déclare (5 jours, 2 jours pour un vol)."
  ]
};

/* ---------------------------------------------------------------- D2 */
window.LECONS["cap/D2"] = {
  objectif: ["construire un budget", "classer mes dépenses par importance", "réagir quand le budget est dans le rouge"],
  situation: {
    titre: "Le 15 du mois",
    texte: [
      "Fayad est apprenti. Le 5 du mois, il reçoit sa paie. Il s'achète tout de suite des baskets et un nouveau forfait, puis il sort tous les week-ends.",
      "Le 15, il ne lui reste plus rien. Il doit encore payer le taxi pour aller travailler et sa part du loyer."
    ],
    question: "À ton avis, quel est le problème de Fayad ?",
    choix: [
      ["Il ne gagne pas assez.", "Son salaire est petit, c'est vrai. On va voir que ce n'est pas le seul problème."],
      ["Il dépense sans prévoir.", "Tu as trouvé. On va apprendre à prévoir avec un budget."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas apprendre à faire un budget pour ne pas finir le mois dans le rouge."
  },
  idees: [
    {
      titre: "Un budget, c'est prévoir ses recettes et ses dépenses",
      texte: [
        "Les recettes, c'est l'argent qui entre. Les dépenses, c'est l'argent qui sort.",
        "Faire un budget, c'est écrire les deux à l'avance, pour un mois."
      ],
      schema: { type: "liste", lignes: [
        { nom: "Revenus du travail", texte: "Le salaire, la rémunération de l'apprenti." },
        { nom: "Revenus sociaux", texte: "Les allocations, les bourses." }
      ] },
      exercice: { type: "trier", question: "Recette ou dépense ?", cases: ["Recette", "Dépense"],
        cartes: [["Le salaire d'apprenti", 0], ["Le loyer", 1], ["Une bourse", 0], ["Le taxi pour aller travailler", 1], ["Le forfait de téléphone", 1]] }
    },
    {
      titre: "Toutes les dépenses n'ont pas la même importance",
      texte: ["Je classe mes dépenses en trois groupes. Je paie d'abord celles que je ne peux pas éviter."],
      schema: { type: "paliers", paliers: [
        { couleur: "#d62828", nom: "1. Dépenses incompressibles", texte: "Obligatoires chaque mois : loyer, transport, assurance, forfait, électricité." },
        { couleur: "#f08a00", nom: "2. Dépenses courantes", texte: "Nécessaires mais ajustables : alimentation, vêtements, hygiène." },
        { couleur: "#2a9d58", nom: "3. Dépenses occasionnelles", texte: "De temps en temps : sorties, cadeaux, loisirs." }
      ] },
      exercice: { type: "trier", question: "Incompressible ou occasionnelle ?", cases: ["Incompressible", "Occasionnelle"],
        cartes: [["Le loyer", 0], ["Une sortie au restaurant", 1], ["L'assurance du scooter", 0], ["Des baskets de marque", 1], ["Le transport pour aller travailler", 0]] }
    },
    {
      titre: "La règle : ne pas dépenser plus que ce que je gagne",
      texte: ["Je compare le total des recettes et le total des dépenses."],
      schema: { type: "liste", lignes: [
        { nom: "Budget équilibré", texte: "Recettes = dépenses." },
        { nom: "Budget excédentaire", texte: "Recettes plus grandes que les dépenses : il reste de l'argent." },
        { nom: "Budget déficitaire", texte: "Dépenses plus grandes que les recettes : il manque de l'argent." }
      ] },
      exercice: { type: "choix", question: "Ce mois-ci, Fayad a 600 € de recettes et 680 € de dépenses. Son budget est…",
        choix: ["Équilibré", "Excédentaire", "Déficitaire : il lui manque 80 €"], bon: 2,
        retour: "680 € de dépenses pour 600 € de recettes : il manque 80 €. Il doit réduire ses dépenses occasionnelles." }
    },
    {
      titre: "Épargner, c'est mettre de l'argent de côté",
      texte: [
        "Quand le budget est excédentaire, je peux épargner : garder une partie de mon argent pour plus tard.",
        "L'épargne sert à faire face à un imprévu (une panne de scooter) ou à préparer un projet (le permis)."
      ],
      exercice: { type: "cocher", question: "À quoi peut servir l'épargne de Fayad ?",
        cartes: [["Payer une réparation imprévue du scooter", true], ["Financer son permis de conduire", true], ["Dépenser plus chaque week-end", false], ["Faire face à un mois difficile", true]],
        retour: "Même une petite somme mise de côté chaque mois finit par compter." }
    },
    {
      titre: "Quand le budget est dans le rouge, j'agis vite",
      texte: [
        "Un budget déficitaire tous les mois mène aux dettes, puis au surendettement : on ne peut plus rembourser ce que l'on doit.",
        "Pour redresser un budget, je réduis d'abord les dépenses occasionnelles, puis les dépenses courantes. Et je demande de l'aide tôt."
      ],
      exercice: { type: "ordre", question: "Fayad veut redresser son budget. Remets dans l'ordre.",
        cartes: ["Il note toutes ses recettes et ses dépenses", "Il paie d'abord les dépenses incompressibles", "Il réduit ses sorties et ses achats plaisir", "Il met de côté ce qui reste"],
        retour: "Payer le loyer et le transport d'abord, se faire plaisir ensuite : c'est l'ordre qui protège." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Fayad me dit : « Le 15, je n'ai plus rien. Je fais comment ? » Donne-lui tes conseils.",
        aides: ["Dès que tu reçois ta paie, paie d'abord", "Ensuite, réduis", "Note"],
        idees: [
          { nom: "payer d'abord l'obligatoire", indice: "quelles dépenses passent en premier ?", mots: ["loyer", "transport", "taxi", "incompressible", "obligatoire", "d abord", "assurance", "factures"] },
          { nom: "réduire le plaisir", indice: "sur quoi peut-il faire des économies ?", mots: ["sorties", "baskets", "reduire", "moins", "plaisir", "economiser", "eviter", "occasionnelle"] },
          { nom: "prévoir", indice: "quel outil l'aide à prévoir ?", mots: ["budget", "noter", "note", "prevoir", "compter", "calculer", "cote", "epargne"] }
        ],
        modele: "Dès que tu reçois ta paie, paie d'abord le loyer et le transport. Ensuite, réduis les sorties et les achats plaisir. Note tes dépenses dans un budget." },
      { question: "Dernière question : explique-moi ce qu'est un budget équilibré.",
        aides: ["Un budget équilibré, c'est quand", "Si je dépense plus que", "S'il me reste de l'argent,"],
        idees: [
          { nom: "recettes et dépenses", indice: "que compare-t-on dans un budget ?", mots: ["recettes", "depenses", "gagne", "depense", "argent", "salaire", "revenus"] },
          { nom: "ne pas dépasser", indice: "quelle est la règle ?", mots: ["egal", "egales", "pas plus", "depasse", "depasser", "equilibre", "meme"] }
        ],
        modele: "Un budget équilibré, c'est quand mes dépenses ne dépassent pas mes recettes. Si je dépense plus que ce que je gagne, mon budget est déficitaire." }
    ]
  },
  retenir: [
    "Budget = recettes (argent qui entre) et dépenses (argent qui sort), prévues à l'avance.",
    "Dépenses incompressibles d'abord, puis courantes, puis occasionnelles.",
    "Règle : les dépenses ne doivent pas dépasser les recettes.",
    "Équilibré, excédentaire ou déficitaire.",
    "L'épargne sert aux imprévus et aux projets."
  ]
};

/* ---------------------------------------------------------------- D3 */
window.LECONS["cap/D3"] = {
  objectif: ["réfléchir avant d'acheter", "comparer et lire une étiquette", "expliquer pourquoi le crédit coûte plus cher"],
  situation: {
    titre: "Le téléphone à 20 euros par mois",
    texte: [
      "Dans une boutique de Mamoudzou, Inaya voit un téléphone à 900 €. Le vendeur lui dit : « Pas besoin de payer aujourd'hui : seulement 20 € par mois ! »",
      "Inaya gagne peu, mais 20 €, ça semble facile. Le vendeur lui tend déjà le contrat de crédit."
    ],
    question: "Et toi, à la place d'Inaya, tu ferais quoi ?",
    choix: [
      ["Je signe, 20 € par mois ce n'est rien.", "Ça a l'air facile. On va calculer combien cela coûte vraiment."],
      ["Je prends le temps de comparer avant d'acheter.", "Tu gardes la tête froide. On va voir comment bien choisir."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas apprendre à acheter sans te faire avoir."
  },
  idees: [
    {
      titre: "Avant d'acheter, je me demande si j'en ai besoin",
      texte: [
        "Un besoin, c'est ce qui est nécessaire : se nourrir, se loger, se déplacer, se soigner.",
        "Une envie, c'est ce qui fait plaisir mais dont on peut se passer. La publicité transforme les envies en « besoins »."
      ],
      exercice: { type: "trier", question: "Besoin ou envie ?", cases: ["Besoin", "Envie"],
        cartes: [["Des chaussures de sécurité pour l'atelier", 0], ["Le dernier téléphone à la mode", 1], ["De la nourriture", 0], ["Une troisième paire de baskets", 1], ["Un abonnement de transport", 0]] }
    },
    {
      titre: "Je compare avant de choisir",
      texte: ["Le prix n'est pas le seul critère. Un produit pas cher qui casse vite coûte plus cher à la fin."],
      schema: { type: "liste", lignes: [
        { nom: "Le prix", texte: "Je compare dans plusieurs magasins et sur internet." },
        { nom: "La qualité et la durée de vie", texte: "Est-ce solide ? Est-ce réparable ?" },
        { nom: "L'usage", texte: "Est-ce que ça correspond vraiment à ce que j'en ferai ?" },
        { picto: "nature", nom: "L'effet sur l'environnement", texte: "Consommation d'énergie, emballages, occasion ou neuf." }
      ] },
      exercice: { type: "cocher", question: "Coche les bons critères pour choisir un téléphone.",
        cartes: [["Le prix, comparé dans plusieurs magasins", true], ["La solidité et la garantie", true], ["La couleur préférée du vendeur", false], ["Ce que je vais vraiment en faire", true], ["C'est celui de la publicité", false]],
        retour: "Un téléphone d'occasion ou reconditionné rend souvent le même service pour beaucoup moins cher." }
    },
    {
      titre: "L'étiquette m'informe",
      texte: ["Les informations sur l'étiquette sont obligatoires. Elles m'aident à comparer."],
      schema: { type: "liste", lignes: [
        { picto: "papiers", nom: "Le prix", texte: "Il doit toujours être affiché, toutes taxes comprises." },
        { picto: "nourriture", nom: "Sur un aliment", texte: "La liste des ingrédients, la date limite, l'origine." },
        { picto: "chargeur", nom: "Sur un appareil", texte: "L'étiquette énergie, de A à G." },
        { picto: "nature", nom: "Les labels", texte: "Des logos officiels qui garantissent une qualité ou le respect de l'environnement." }
      ] },
      exercice: { type: "choix", question: "Sur un yaourt, la date limite de consommation est dépassée depuis 5 jours. Que fais-tu ?",
        choix: ["Je le mange, ça ne risque rien", "Je ne le consomme pas", "Je le donne à mon petit frère"], bon: 1,
        retour: "« À consommer jusqu'au » : après la date, il y a un risque pour la santé. « De préférence avant » : le produit perd seulement en qualité." }
    },
    {
      titre: "Acheter à crédit coûte plus cher",
      texte: [
        "Payer comptant, c'est payer tout de suite, en une fois. Payer à crédit, c'est emprunter : je rembourse petit à petit, avec des intérêts en plus.",
        "Pour connaître le vrai prix, je multiplie la mensualité par le nombre de mois."
      ],
      schema: { type: "liste", lignes: [
        { nom: "La mensualité", texte: "20 € par mois." },
        { nom: "La durée", texte: "60 mois, c'est-à-dire 5 ans." },
        { nom: "Le total", texte: "20 × 60 = 1 200 €, pour un téléphone affiché 900 €." }
      ] },
      exercice: { type: "choix", question: "Inaya paie 20 € par mois pendant 60 mois. Combien aura-t-elle payé en tout ?",
        choix: ["900 €", "1 200 €", "20 €"], bon: 1,
        retour: "20 × 60 = 1 200 €. Le crédit lui coûte 300 € de plus, et elle remboursera encore quand le téléphone sera usé." }
    },
    {
      titre: "La loi protège le consommateur",
      texte: ["Je garde toujours le ticket de caisse ou la facture : c'est ma preuve d'achat."],
      schema: { type: "liste", lignes: [
        { picto: "papiers", nom: "La garantie légale de conformité", texte: "Pendant 2 ans, un produit neuf qui a un défaut doit être réparé ou remplacé." },
        { picto: "telephone", nom: "Le délai de rétractation", texte: "Pour un achat sur internet : 14 jours pour changer d'avis et être remboursé." },
        { picto: "sablier", nom: "Pour un crédit", texte: "14 jours pour changer d'avis après avoir signé." }
      ] },
      exercice: { type: "choix", question: "Le téléphone neuf d'Inaya tombe en panne tout seul au bout de 6 mois. Que peut-elle faire ?",
        choix: ["Rien, c'est trop tard", "Demander la réparation ou le remplacement grâce à la garantie légale", "Racheter le même"], bon: 1,
        retour: "La garantie légale dure 2 ans. Avec sa facture, Inaya retourne voir le vendeur." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Inaya m'écrit : « 20 € par mois pour le téléphone, je signe ? » Tu lui réponds quoi ?",
        aides: ["Au total, tu vas payer", "Demande-toi si tu en as vraiment", "Avant de signer, compare"],
        idees: [
          { nom: "le vrai prix du crédit", indice: "combien paiera-t-elle en tout ?", mots: ["1200", "1 200", "plus cher", "total", "interets", "credit", "5 ans", "60 mois", "300"] },
          { nom: "besoin ou envie", indice: "en a-t-elle vraiment besoin ?", mots: ["besoin", "envie", "necessaire", "utile"] },
          { nom: "comparer", indice: "que faire avant de signer ?", mots: ["comparer", "compare", "ailleurs", "occasion", "reconditionne", "moins cher", "attendre", "reflechir", "economiser"] }
        ],
        modele: "Ne signe pas tout de suite : au total tu paieras 1 200 € pour un téléphone à 900 €. Demande-toi si tu en as vraiment besoin et compare avec un modèle d'occasion." },
      { question: "Dernière question : que fais-tu si un appareil neuf tombe en panne un mois après l'achat ?",
        aides: ["Je retrouve", "Je retourne voir", "J'ai droit à"],
        idees: [
          { nom: "la preuve d'achat", indice: "quel papier faut-il garder ?", mots: ["ticket", "facture", "preuve", "recu"] },
          { nom: "la garantie", indice: "quel droit a le consommateur pendant 2 ans ?", mots: ["garantie", "reparer", "reparation", "remplacer", "echange", "rembourse", "vendeur", "magasin", "2 ans"] }
        ],
        modele: "Je retrouve ma facture et je retourne voir le vendeur. Grâce à la garantie légale de 2 ans, l'appareil doit être réparé ou remplacé." }
    ]
  },
  retenir: [
    "Avant d'acheter : est-ce un besoin ou une envie ?",
    "Je compare le prix, la qualité, l'usage et l'effet sur l'environnement.",
    "L'étiquette m'informe : prix, ingrédients, dates, étiquette énergie, labels.",
    "Le crédit coûte plus cher : mensualité × nombre de mois.",
    "La loi me protège : garantie de 2 ans, 14 jours pour me rétracter sur internet. Je garde ma facture."
  ]
};
