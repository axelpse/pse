/* =====================================================================
   FICHIER À MODIFIER : les leçons de la thématique A (santé).
   Même écriture que js/lecons.js (le mode d'emploi est en haut de ce fichier-là).
   A1 reprend la leçon de l'enseignant. A2 à A7 sont écrites à partir du
   programme de PSE en CAP : À RELIRE par l'enseignant avant de les donner.
   ===================================================================== */
window.LECONS = window.LECONS || {};

/* ---------------------------------------------------------------- A1 */
window.LECONS["cap/A1"] = {
  objectif: ["dire ce qu'est la santé", "citer ce qui agit sur ma santé", "expliquer comment je me fais soigner et rembourser"],
  situation: {
    titre: "Naïma a mal aux dents",
    texte: [
      "Naïma a 17 ans. Elle est en CAP à Chirongui. Depuis trois jours, elle a très mal à une dent. Elle dort mal et elle n'arrive plus à suivre en atelier.",
      "Sa copine lui dit : « Va chez le dentiste ! » Naïma répond : « Je ne peux pas, ça coûte trop cher. Et puis ça va passer. »"
    ],
    question: "Et toi, tu ferais quoi à la place de Naïma ?",
    choix: [
      ["J'attends que ça passe.", "Beaucoup de jeunes font ça. On va voir ensemble si c'est une bonne idée pour ta santé."],
      ["Je vais chez le dentiste avec ma carte Vitale.", "Tu penses à te faire soigner. On va voir comment ça marche, et qui paie."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "À la fin, tu sauras pourquoi Naïma peut se faire soigner."
  },
  idees: [
    {
      titre: "La santé, c'est le bien-être physique, mental et social",
      texte: ["Être en bonne santé, ce n'est pas seulement ne pas être malade. C'est aller bien de trois façons."],
      schema: { type: "liste", lignes: [
        { nom: "Bien-être physique", texte: "Mon corps va bien." },
        { nom: "Bien-être mental", texte: "Je me sens bien dans ma tête." },
        { nom: "Bien-être social", texte: "J'ai de bonnes relations avec les autres." }
      ] },
      exercice: { type: "trier", question: "Physique ou mental ?", cases: ["Physique", "Mental"],
        cartes: [["Naïma a mal à une dent", 0], ["Naïma est stressée, elle n'arrive plus à suivre", 1], ["Elle a de la fièvre", 0], ["Elle est triste et découragée", 1]] }
    },
    {
      titre: "Des facteurs internes et externes agissent sur ma santé",
      texte: ["Un facteur, c'est ce qui peut agir sur ma santé, en bien ou en mal."],
      schema: { type: "liste", lignes: [
        { picto: "personnes", nom: "Facteurs internes", texte: "Ils sont liés à moi : mes gènes, mes comportements (tabac, alcool, alimentation, sommeil)." },
        { picto: "maison", nom: "Facteurs externes", texte: "Ils sont liés à mon environnement : la pollution, le bruit, le logement, le système de santé." }
      ] },
      exercice: { type: "trier", question: "Facteur interne ou externe ?", cases: ["Interne (moi)", "Externe (autour de moi)"],
        cartes: [["Je fume", 0], ["Le bruit dans mon quartier", 1], ["Ce que je mange", 0], ["La pollution de l'air", 1], ["Mon logement est humide", 1], ["Je dors peu", 0]] }
    },
    {
      titre: "Le système de santé sert à prévenir et à soigner",
      texte: ["Prévenir, c'est agir avant la maladie : un vaccin, un dépistage, un conseil. Soigner, c'est agir quand on est malade ou blessé."],
      schema: { type: "liste", lignes: [
        { picto: "personnes", nom: "Des professionnels", texte: "Le médecin, l'infirmier, le pharmacien, le dentiste, la sage-femme." },
        { picto: "trousse", nom: "Des établissements", texte: "L'hôpital, la clinique, le dispensaire, la pharmacie." },
        { picto: "papiers", nom: "La Sécurité sociale", texte: "Elle rembourse une grande partie des soins. À Mayotte, c'est la CSSM." }
      ] },
      exercice: { type: "trier", question: "Prévenir ou soigner ?", cases: ["Prévenir", "Soigner"],
        cartes: [["Se faire vacciner", 0], ["Recoudre une plaie", 1], ["Un contrôle chez le dentiste une fois par an", 0], ["Prendre un antibiotique donné par le médecin", 1], ["Un dépistage", 0]] }
    },
    {
      titre: "La Sécurité sociale fonctionne grâce à la solidarité",
      texte: [
        "Chaque personne qui travaille paie des cotisations : une partie de son salaire. On cotise selon ses revenus.",
        "Avec cet argent, la Sécurité sociale paie les soins de ceux qui en ont besoin. On est soigné selon ses besoins."
      ],
      schema: { type: "formule", termes: ["Cotisations", "Solidarité", "Soins"],
        notes: ["Chacun paie selon ses revenus.", "L'argent est mis en commun.", "Chacun est soigné selon ses besoins."] },
      exercice: { type: "choix", question: "Qui paie les cotisations de la Sécurité sociale ?",
        choix: ["Seulement les personnes malades", "Les personnes qui travaillent et les employeurs", "Seulement les médecins"], bon: 1,
        retour: "Tout le monde cotise quand il travaille, même en bonne santé. C'est ça, la solidarité." }
    },
    {
      titre: "Avec ma carte Vitale, je peux me faire soigner",
      texte: [
        "La carte Vitale prouve que j'ai des droits à la Sécurité sociale. Je la présente chez le médecin, le dentiste ou à la pharmacie.",
        "Je choisis un médecin traitant et je le consulte en premier : c'est le parcours de soins coordonné. Je suis alors mieux remboursé.",
        "Naïma peut donc aller chez le dentiste : une grande partie des soins est remboursée. Attendre, c'est risquer une infection plus grave."
      ],
      exercice: { type: "ordre", question: "Naïma se fait soigner. Remets les étapes dans l'ordre.",
        cartes: ["Elle prend rendez-vous chez le dentiste", "Elle présente sa carte Vitale", "Le dentiste soigne sa dent", "La Sécurité sociale rembourse une partie des soins"],
        retour: "Naïma n'a pas à choisir entre sa santé et son argent : le système de santé est fait pour ça." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Naïma me dit : « Le dentiste, c'est trop cher, j'attends que ça passe. » Tu lui réponds quoi ?",
        aides: ["Tu dois aller chez le dentiste parce que", "Avec ta carte Vitale,", "Si tu attends,"],
        idees: [
          { nom: "se faire soigner", indice: "que doit faire Naïma pour sa dent ?", mots: ["dentiste", "soigner", "medecin", "consulter", "rendez vous"] },
          { nom: "les soins sont remboursés", indice: "qui paie une grande partie des soins ?", mots: ["carte vitale", "vitale", "secu", "securite sociale", "rembourse", "cssm", "gratuit"] },
          { nom: "attendre est risqué", indice: "que peut-il arriver si elle attend ?", mots: ["infection", "grave", "pire", "empirer", "aggraver", "attendre", "douleur"] }
        ],
        modele: "Va chez le dentiste ! Avec ta carte Vitale, la Sécurité sociale rembourse une grande partie des soins. Si tu attends, ça peut s'infecter et devenir plus grave." },
      { question: "Dernière question : pour toi, c'est quoi être en bonne santé ?",
        aides: ["Être en bonne santé, c'est", "Dans mon corps,", "Dans ma tête,", "Avec les autres,"],
        idees: [
          { nom: "le corps", indice: "comment va ton corps quand tu es en bonne santé ?", mots: ["corps", "physique", "pas malade", "forme"] },
          { nom: "la tête", indice: "et dans ta tête ?", mots: ["tete", "mental", "moral", "bien", "stress", "heureux"] },
          { nom: "les autres", indice: "et avec les gens autour de toi ?", mots: ["social", "amis", "famille", "autres", "relations"] }
        ],
        modele: "Être en bonne santé, c'est avoir un corps qui va bien, se sentir bien dans sa tête et avoir de bonnes relations avec les autres." }
    ]
  },
  retenir: [
    "Santé = bien-être physique, mental et social.",
    "Des facteurs internes (moi) et externes (mon environnement) agissent sur ma santé.",
    "Le système de santé sert à prévenir et à soigner.",
    "La Sécurité sociale fonctionne grâce à la solidarité : on cotise selon ses revenus, on est soigné selon ses besoins."
  ]
};

/* ---------------------------------------------------------------- A2 */
window.LECONS["cap/A2"] = {
  objectif: ["expliquer à quoi sert le sommeil", "dire de combien d'heures j'ai besoin", "préparer une bonne nuit"],
  situation: {
    titre: "Kevin s'endort en atelier",
    texte: [
      "Kevin a 16 ans. Hier soir, il a regardé des vidéos sur son téléphone jusqu'à 2 h du matin. Son réveil a sonné à 5 h pour prendre le bus.",
      "Ce matin, en atelier, il bâille, il n'écoute pas les consignes et il manque de se couper avec un outil."
    ],
    question: "À ton avis, c'est grave de dormir 3 heures ?",
    choix: [
      ["Non, on récupère le week-end.", "Beaucoup de jeunes pensent ça. On va voir ce que le manque de sommeil fait au corps."],
      ["Oui, c'est dangereux pour lui.", "Tu sens que le sommeil compte. On va voir pourquoi."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre à quoi sert le sommeil et comment mieux dormir."
  },
  idees: [
    {
      titre: "Le sommeil sert à récupérer",
      texte: ["Pendant que je dors, mon corps et mon cerveau travaillent pour moi."],
      schema: { type: "liste", lignes: [
        { nom: "Mon corps récupère", texte: "Les muscles se reposent. Le corps grandit et se répare." },
        { nom: "Mon cerveau range", texte: "Il trie et enregistre ce que j'ai appris dans la journée." },
        { nom: "Mes défenses se renforcent", texte: "Je résiste mieux aux maladies." }
      ] },
      exercice: { type: "cocher", question: "Coche ce que fait le sommeil.",
        cartes: [["Il repose les muscles", true], ["Il aide à retenir les leçons", true], ["Il fait perdre du temps", false], ["Il aide le corps à se défendre contre les maladies", true], ["Il ne sert à rien après 15 ans", false]],
        retour: "Dormir, ce n'est pas perdre du temps : c'est recharger le corps et le cerveau." }
    },
    {
      titre: "Une nuit est faite de plusieurs cycles",
      texte: ["Une nuit, c'est 4 à 6 cycles qui se suivent, comme les wagons d'un train. Un cycle dure environ 1 h 30."],
      schema: { type: "paliers", paliers: [
        { couleur: "#8ecae6", nom: "Sommeil lent léger", texte: "Je m'endors. Un bruit peut me réveiller." },
        { couleur: "#3a5a98", nom: "Sommeil lent profond", texte: "Mon corps récupère. C'est difficile de me réveiller." },
        { couleur: "#7b2cbf", nom: "Sommeil paradoxal", texte: "Je rêve. Mon cerveau enregistre ce que j'ai appris." }
      ] },
      exercice: { type: "ordre", question: "Remets un cycle de sommeil dans l'ordre.",
        cartes: ["Sommeil lent léger", "Sommeil lent profond", "Sommeil paradoxal"],
        retour: "Quand je bâille et que mes yeux piquent, le train du sommeil passe : c'est le moment de me coucher." }
    },
    {
      titre: "À mon âge, j'ai besoin de 8 à 10 heures de sommeil",
      texte: [
        "Un adolescent a besoin de 8 à 10 heures de sommeil par nuit. Kevin en a dormi 3.",
        "Dormir beaucoup le week-end ne suffit pas à rattraper : le corps aime les horaires réguliers."
      ],
      exercice: { type: "choix", question: "Kevin doit se lever à 5 h. Pour dormir au moins 8 heures, il doit s'endormir au plus tard à…",
        choix: ["21 h", "23 h", "1 h du matin"], bon: 0,
        retour: "De 21 h à 5 h, cela fait 8 heures. Se coucher tôt, c'est le prix d'un réveil à 5 h." }
    },
    {
      titre: "Le manque de sommeil est dangereux",
      texte: ["Quand je ne dors pas assez, les effets arrivent tout de suite, et d'autres plus tard."],
      schema: { type: "liste", lignes: [
        { picto: "eclair", nom: "Tout de suite", texte: "Fatigue, mauvaise humeur, difficulté à me concentrer, gestes moins précis." },
        { picto: "danger", nom: "Au travail et sur la route", texte: "Plus de risques d'accident : je réagis moins vite." },
        { picto: "pansement", nom: "À la longue", texte: "Je tombe plus souvent malade, j'apprends moins bien, je peux prendre du poids." }
      ] },
      exercice: { type: "cocher", question: "Coche les effets du manque de sommeil.",
        cartes: [["J'ai du mal à me concentrer", true], ["Je réagis moins vite", true], ["Je retiens mieux mes leçons", false], ["Je suis de mauvaise humeur", true], ["J'ai plus de risques d'accident en atelier", true]],
        retour: "Kevin a failli se couper : la fatigue rend les gestes moins sûrs. Le sommeil, c'est aussi de la sécurité." }
    },
    {
      titre: "Je prépare mon sommeil",
      texte: ["La lumière des écrans dit à mon cerveau qu'il fait encore jour : elle retarde l'endormissement."],
      schema: { type: "liste", lignes: [
        { picto: "telephone", nom: "J'arrête les écrans avant de dormir", texte: "Le téléphone reste loin du lit, au moins 1 heure avant." },
        { picto: "maison", nom: "Je me couche à heure régulière", texte: "Dans une pièce calme et sombre." },
        { picto: "nourriture", nom: "Je mange léger le soir", texte: "Pas de boisson énergisante, pas de café ni de soda le soir." }
      ] },
      exercice: { type: "trier", question: "Ça aide à dormir, ou ça empêche de dormir ?", cases: ["Ça aide", "Ça empêche"],
        cartes: [["Lire quelques pages", 0], ["Regarder des vidéos dans le lit", 1], ["Une boisson énergisante à 20 h", 1], ["Se coucher à la même heure", 0], ["Une chambre sombre et calme", 0], ["Jouer en ligne jusqu'à minuit", 1]] }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Kevin me dit : « Je dors 3 heures et ça va très bien. » Tu lui réponds quoi ?",
        aides: ["À ton âge, il faut dormir", "Quand tu ne dors pas assez,", "En atelier, c'est dangereux parce que"],
        idees: [
          { nom: "le besoin de sommeil", indice: "combien d'heures faut-il dormir à ton âge ?", mots: ["8", "9", "10", "huit", "dix", "heures", "assez", "plus"] },
          { nom: "les effets de la fatigue", indice: "que se passe-t-il quand on est fatigué ?", mots: ["fatigue", "fatigué", "concentrer", "concentration", "humeur", "malade", "retenir", "apprendre"] },
          { nom: "le risque d'accident", indice: "que peut-il arriver en atelier ou sur la route ?", mots: ["accident", "couper", "blesser", "danger", "dangereux", "risque"] }
        ],
        modele: "À ton âge, il faut dormir 8 à 10 heures. Quand tu ne dors pas assez, tu es fatigué, tu te concentres mal et tu risques un accident en atelier." },
      { question: "Dernière question : donne-moi tes conseils pour bien dormir.",
        aides: ["Avant de dormir, j'arrête", "Je me couche", "Le soir, j'évite"],
        idees: [
          { nom: "les écrans", indice: "que fais-tu de ton téléphone le soir ?", mots: ["ecran", "telephone", "portable", "video", "jeux", "tele"] },
          { nom: "des horaires réguliers", indice: "à quelle heure te couches-tu ?", mots: ["heure", "tot", "regulier", "coucher", "couche"] },
          { nom: "ce qui excite", indice: "que faut-il éviter de boire le soir ?", mots: ["energisante", "cafe", "soda", "coca", "calme", "sombre", "leger"] }
        ],
        modele: "J'arrête les écrans une heure avant de dormir, je me couche tôt à la même heure, dans une chambre calme, et j'évite les boissons énergisantes le soir." }
    ]
  },
  retenir: [
    "Le sommeil répare le corps et aide le cerveau à retenir.",
    "Une nuit est faite de cycles d'environ 1 h 30 : sommeil léger, profond, paradoxal.",
    "À mon âge, j'ai besoin de 8 à 10 heures de sommeil.",
    "Le manque de sommeil fatigue, gêne la concentration et augmente le risque d'accident.",
    "J'arrête les écrans avant de dormir et je me couche à heure régulière."
  ]
};

/* ---------------------------------------------------------------- A3 */
window.LECONS["cap/A3"] = {
  objectif: ["expliquer ce que l'effort change dans mon corps", "citer les bienfaits de l'activité physique", "bouger sans me blesser"],
  situation: {
    titre: "Samir ne bouge plus",
    texte: [
      "Samir a 17 ans. Avant, il jouait au foot tous les soirs sur le plateau de son village. Depuis qu'il a un scooter et un téléphone, il ne marche plus et il reste assis des heures.",
      "En montant l'escalier du lycée, il est essoufflé. En atelier, il a mal au dos."
    ],
    question: "À ton avis, pourquoi Samir est-il essoufflé ?",
    choix: [
      ["C'est normal, tout le monde est fatigué.", "On va voir si c'est vraiment normal à 17 ans."],
      ["Parce qu'il ne bouge plus assez.", "Tu fais le lien avec son mode de vie. On va voir ce que le sport fait au corps."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas voir ce que l'activité physique change dans ton corps."
  },
  idees: [
    {
      titre: "L'activité physique, ce n'est pas seulement le sport",
      texte: ["Une activité physique, c'est tout ce qui fait bouger mon corps et dépenser de l'énergie."],
      schema: { type: "liste", lignes: [
        { nom: "Dans la vie de tous les jours", texte: "Marcher, monter les escaliers, porter les courses, travailler au champ." },
        { nom: "Dans les loisirs", texte: "Le foot, la danse, la natation, le vélo." },
        { nom: "Au travail", texte: "Les gestes du métier : porter, monter, se déplacer." }
      ] },
      exercice: { type: "trier", question: "Activité physique ou sédentarité ?", cases: ["Je bouge", "Je reste assis"],
        cartes: [["Aller au lycée à pied", 0], ["Regarder des vidéos 3 heures", 1], ["Jouer au foot", 0], ["Jouer à la console tout l'après-midi", 1], ["Monter les escaliers", 0]] }
    },
    {
      titre: "Pendant l'effort, mon corps s'adapte",
      texte: ["Quand je bouge, mes muscles ont besoin de plus d'oxygène et d'énergie. Mon corps réagit tout de suite."],
      schema: { type: "liste", lignes: [
        { nom: "Mon cœur bat plus vite", texte: "Il envoie plus de sang vers les muscles." },
        { nom: "Je respire plus vite", texte: "J'apporte plus d'oxygène." },
        { nom: "J'ai chaud et je transpire", texte: "Mon corps se refroidit. Je dois boire de l'eau." }
      ] },
      exercice: { type: "cocher", question: "Coche ce qui se passe dans le corps pendant un match de foot.",
        cartes: [["Le cœur bat plus vite", true], ["La respiration ralentit", false], ["On transpire", true], ["On respire plus vite", true], ["Les muscles n'ont besoin de rien", false]],
        retour: "Le cœur et les poumons travaillent plus pour nourrir les muscles." }
    },
    {
      titre: "Bouger fait du bien au corps et à la tête",
      texte: ["Une activité physique régulière me protège."],
      schema: { type: "liste", lignes: [
        { nom: "Le cœur et les poumons", texte: "Ils deviennent plus forts : je suis moins essoufflé." },
        { nom: "Les muscles et les os", texte: "Ils se renforcent. J'ai moins mal au dos." },
        { nom: "Le moral et le sommeil", texte: "Je suis moins stressé et je dors mieux." },
        { nom: "Le poids et les maladies", texte: "Moins de risques de diabète et de maladies du cœur." }
      ] },
      exercice: { type: "choix", question: "Samir reprend le foot trois fois par semaine. Après quelques semaines, que se passe-t-il ?",
        choix: ["Il est encore plus essoufflé dans l'escalier", "Il est moins essoufflé et il dort mieux", "Rien ne change"], bon: 1,
        retour: "Le corps s'entraîne : le cœur et les muscles deviennent plus efficaces." }
    },
    {
      titre: "Rester assis trop longtemps abîme la santé",
      texte: [
        "La sédentarité, c'est rester assis ou allongé trop longtemps dans la journée : écrans, scooter, canapé.",
        "À mon âge, il est conseillé de bouger au moins 1 heure par jour et de limiter le temps passé assis devant les écrans."
      ],
      exercice: { type: "trier", question: "Bonne idée ou mauvaise idée ?", cases: ["Bonne idée", "Mauvaise idée"],
        cartes: [["Descendre du bus un arrêt plus tôt", 0], ["Rester 4 heures de suite devant un écran", 1], ["Se lever et marcher toutes les heures", 0], ["Prendre le scooter pour 300 mètres", 1], ["Faire du sport avec des amis", 0]] }
    },
    {
      titre: "Je bouge sans me blesser",
      texte: ["Pour que le sport reste bon pour moi, je respecte quelques règles."],
      schema: { type: "liste", lignes: [
        { nom: "Je m'échauffe", texte: "Quelques minutes avant l'effort, pour préparer les muscles." },
        { picto: "eau", nom: "Je bois de l'eau", texte: "Avant, pendant et après, surtout quand il fait chaud." },
        { nom: "Je m'arrête si j'ai mal", texte: "Une douleur est un signal d'alerte." }
      ] },
      exercice: { type: "ordre", question: "Remets la séance de sport dans l'ordre.",
        cartes: ["Je m'échauffe", "Je fais mon activité", "Je bois et je récupère"],
        retour: "À Mayotte, avec la chaleur, boire de l'eau est indispensable pendant l'effort." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Samir me dit : « Le sport, ça sert à rien, je suis jeune. » Tu lui réponds quoi ?",
        aides: ["Bouger, ça fait du bien à", "Si tu restes assis tout le temps,", "Tu pourrais"],
        idees: [
          { nom: "les bienfaits pour le corps", indice: "qu'est-ce que le sport fait au cœur, aux muscles ?", mots: ["coeur", "muscles", "souffle", "essouffle", "dos", "forme", "sante", "poumons"] },
          { nom: "les bienfaits pour la tête", indice: "et pour le moral, le sommeil ?", mots: ["moral", "stress", "dormir", "sommeil", "tete", "bien"] },
          { nom: "une idée pour bouger", indice: "que peut-il faire, concrètement ?", mots: ["foot", "marcher", "marche", "pied", "sport", "escaliers", "bouger", "heure"] }
        ],
        modele: "Bouger rend ton cœur et tes muscles plus forts, tu seras moins essoufflé et tu dormiras mieux. Reprends le foot ou marche une heure par jour." },
      { question: "Dernière question : explique-moi ce qui se passe dans ton corps quand tu cours.",
        aides: ["Mon cœur", "Ma respiration", "Je transpire, donc"],
        idees: [
          { nom: "le cœur", indice: "que fait ton cœur ?", mots: ["coeur", "bat", "vite", "sang"] },
          { nom: "la respiration", indice: "comment respires-tu ?", mots: ["respire", "respiration", "souffle", "oxygene", "poumons"] },
          { nom: "la chaleur et l'eau", indice: "pourquoi faut-il boire ?", mots: ["transpire", "chaud", "eau", "boire", "sueur"] }
        ],
        modele: "Mon cœur bat plus vite, je respire plus vite pour apporter de l'oxygène aux muscles, et je transpire : je dois boire de l'eau." }
    ]
  },
  retenir: [
    "L'activité physique, c'est tout ce qui fait bouger mon corps, pas seulement le sport.",
    "Pendant l'effort, le cœur et la respiration s'accélèrent.",
    "Bouger renforce le cœur, les muscles, le moral et le sommeil.",
    "La sédentarité, c'est rester assis trop longtemps : elle abîme la santé.",
    "Je bouge au moins 1 heure par jour, je m'échauffe et je bois de l'eau."
  ]
};

/* ---------------------------------------------------------------- A4 */
window.LECONS["cap/A4"] = {
  objectif: ["expliquer ce qu'est une addiction", "citer ses effets sur le corps, la tête et la vie", "dire non et trouver de l'aide"],
  situation: {
    titre: "Juste une fois, pour essayer",
    texte: [
      "Ibrahim a 16 ans. Samedi soir, des copains lui proposent de fumer de la « chimique ». « Allez, juste une fois, tout le monde le fait ! »",
      "Ibrahim hésite. Il ne veut pas passer pour un faible, mais il a vu son cousin changer depuis qu'il en prend."
    ],
    question: "Et toi, à la place d'Ibrahim, tu ferais quoi ?",
    choix: [
      ["J'essaie une fois, ça ne peut pas faire de mal.", "Beaucoup de jeunes pensent ça. On va voir ce qui se passe vraiment dans le cerveau."],
      ["Je refuse et je m'éloigne.", "Tu choisis de te protéger. On va voir pourquoi c'est un bon choix."],
      ["Je ne sais pas.", "C'est difficile de dire non devant des amis. Cette leçon va t'aider."]
    ],
    suite: "Tu vas comprendre comment on devient dépendant, et où trouver de l'aide."
  },
  idees: [
    {
      titre: "Une addiction, c'est ne plus pouvoir s'arrêter",
      texte: [
        "On parle d'addiction quand une personne ne peut plus se passer d'un produit ou d'une activité, même si cela lui fait du mal.",
        "On peut être dépendant d'un produit, mais aussi d'un comportement."
      ],
      schema: { type: "liste", lignes: [
        { nom: "Des produits", texte: "Le tabac, l'alcool, le cannabis, la chimique, d'autres drogues." },
        { picto: "telephone", nom: "Des comportements", texte: "Les jeux vidéo, les écrans, les jeux d'argent." }
      ] },
      exercice: { type: "trier", question: "Produit ou comportement ?", cases: ["Un produit", "Un comportement"],
        cartes: [["Le tabac", 0], ["Les jeux d'argent", 1], ["L'alcool", 0], ["Les jeux vidéo", 1], ["La chimique", 0]] }
    },
    {
      titre: "La dépendance s'installe petit à petit",
      texte: ["Personne ne décide de devenir dépendant. Cela arrive par étapes."],
      schema: { type: "paliers", paliers: [
        { couleur: "#f6c800", nom: "J'essaie", texte: "Par curiosité, ou pour faire comme les autres." },
        { couleur: "#f08a00", nom: "Je recommence", texte: "De temps en temps, puis de plus en plus souvent." },
        { couleur: "#d62828", nom: "J'en ai besoin", texte: "Il m'en faut plus pour le même effet. Je suis mal quand je n'en ai pas." },
        { couleur: "#7b2cbf", nom: "Je ne contrôle plus", texte: "Le produit passe avant tout : c'est la dépendance." }
      ] },
      exercice: { type: "ordre", question: "Remets les étapes dans l'ordre.",
        cartes: ["J'essaie", "Je recommence de plus en plus souvent", "J'en ai besoin", "Je ne contrôle plus"],
        retour: "« Juste une fois » est la première marche. Le plus facile, c'est de ne pas la monter." }
    },
    {
      titre: "Les effets touchent le corps, la tête et la vie",
      texte: ["Un produit agit sur le cerveau. Les conséquences ne s'arrêtent pas à la santé."],
      schema: { type: "liste", lignes: [
        { picto: "pansement", nom: "Sur la santé", texte: "Mémoire et concentration en baisse, crises d'angoisse, maladies des poumons, du foie, du cœur." },
        { picto: "personnes", nom: "Sur la vie sociale", texte: "Disputes avec la famille, perte des amis, décrochage au lycée." },
        { picto: "papiers", nom: "Devant la loi", texte: "L'usage de drogue est interdit. La vente d'alcool et de tabac aux mineurs aussi." },
        { picto: "danger", nom: "Au travail et sur la route", texte: "Plus de risques d'accident : les réflexes sont ralentis." }
      ] },
      exercice: { type: "trier", question: "Conséquence sur la santé ou sur la vie sociale ?", cases: ["Santé", "Vie sociale"],
        cartes: [["Perte de mémoire", 0], ["Disputes avec la famille", 1], ["Crise d'angoisse", 0], ["Absences au lycée", 1], ["Maladie des poumons", 0]] }
    },
    {
      titre: "Je sais dire non",
      texte: ["Refuser devant des amis, c'est difficile. Mais c'est un droit, et il y a des façons simples de le faire."],
      schema: { type: "liste", lignes: [
        { nom: "Je dis non clairement", texte: "« Non merci, ça ne m'intéresse pas. » Pas besoin de se justifier." },
        { nom: "Je propose autre chose", texte: "« On va plutôt faire un foot ? »" },
        { nom: "Je m'éloigne", texte: "Un vrai ami respecte mon choix." }
      ] },
      exercice: { type: "choix", question: "Un copain insiste : « Allez, tu as peur ? » Quelle est la meilleure réponse ?",
        choix: ["« Bon d'accord, mais juste une fois. »", "« Non, je n'en veux pas. Je rentre, à demain. »", "« Je vais y réfléchir, donne-m'en pour plus tard. »"], bon: 1,
        retour: "Dire non et partir, ce n'est pas être faible : c'est décider pour soi." }
    },
    {
      titre: "Je peux me faire aider, gratuitement et sans être jugé",
      texte: ["Quand on consomme, ou quand on s'inquiète pour un proche, on peut en parler."],
      schema: { type: "liste", lignes: [
        { nom: "Au lycée", texte: "L'infirmière scolaire, un professeur, le CPE. Ils écoutent sans juger." },
        { picto: "trousse", nom: "Des professionnels de santé", texte: "Le médecin, ou une consultation jeunes consommateurs : gratuite et confidentielle." },
        { picto: "telephone", nom: "Par téléphone", texte: "Drogues info service : 0 800 23 13 13. Appel anonyme et gratuit." }
      ] },
      exercice: { type: "cocher", question: "Le cousin d'Ibrahim veut arrêter. Coche les bonnes pistes.",
        cartes: [["En parler à l'infirmière scolaire", true], ["Rester seul et attendre", false], ["Appeler Drogues info service", true], ["Voir un médecin", true], ["Remplacer par un autre produit", false]],
        retour: "Arrêter seul est très difficile. Demander de l'aide est un signe de courage." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Ibrahim me demande : « Une fois, ça risque quoi ? » Tu lui réponds quoi ?",
        aides: ["Le risque, c'est de", "Ça peut abîmer", "Tu as le droit de"],
        idees: [
          { nom: "le risque de dépendance", indice: "que peut-il se passer après la première fois ?", mots: ["dependance", "dependant", "accro", "arreter", "recommencer", "besoin", "addiction"] },
          { nom: "les effets", indice: "qu'est-ce que le produit abîme ?", mots: ["cerveau", "sante", "memoire", "famille", "lycee", "accident", "malade", "angoisse"] },
          { nom: "dire non", indice: "que peut-il répondre à ses copains ?", mots: ["non", "refuser", "refuse", "partir", "eloigner", "droit"] }
        ],
        modele: "Le risque, c'est de recommencer et de devenir dépendant. Ça abîme le cerveau et ça crée des problèmes avec la famille et le lycée. Tu as le droit de dire non." },
      { question: "Dernière question : un ami consomme et va mal. Tu lui conseilles quoi ?",
        aides: ["Tu peux en parler à", "Tu peux appeler", "Je peux t'accompagner"],
        idees: [
          { nom: "en parler à un adulte", indice: "à qui peut-il parler au lycée ?", mots: ["infirmiere", "parler", "prof", "adulte", "cpe", "famille", "parents"] },
          { nom: "voir un professionnel", indice: "qui peut l'aider à arrêter ?", mots: ["medecin", "consultation", "drogues info", "appeler", "numero", "aide", "aider"] }
        ],
        modele: "Parles-en à l'infirmière du lycée ou à un médecin. Tu peux aussi appeler Drogues info service, c'est gratuit et anonyme. Je peux venir avec toi." }
    ]
  },
  retenir: [
    "Une addiction, c'est ne plus pouvoir se passer d'un produit ou d'un comportement.",
    "La dépendance s'installe par étapes : tout commence par « juste une fois ».",
    "Les effets touchent la santé, la vie sociale, la loi et la sécurité.",
    "J'ai le droit de dire non.",
    "Je peux me faire aider : infirmière, médecin, Drogues info service (0 800 23 13 13)."
  ]
};

/* ---------------------------------------------------------------- A5 */
window.LECONS["cap/A5"] = {
  objectif: ["expliquer le respect et le consentement", "citer des moyens de contraception", "dire à qui en parler en toute confidentialité"],
  situation: {
    titre: "Les questions de Zalia et Yanis",
    texte: [
      "Zalia et Yanis ont 17 ans. Ils sortent ensemble depuis six mois. Ils pensent avoir bientôt leur première relation sexuelle.",
      "Zalia ne veut pas tomber enceinte : elle veut finir son CAP. Yanis dit : « T'inquiète, il ne se passera rien. »"
    ],
    question: "À ton avis, que doivent-ils faire ?",
    choix: [
      ["Rien, la première fois on ne risque rien.", "C'est une idée fausse très répandue. On va voir pourquoi."],
      ["En parler ensemble et choisir une contraception.", "Tu penses à anticiper. On va voir les solutions et où les trouver."],
      ["Je ne sais pas.", "C'est normal. Cette leçon répond à ces questions, sans gêne."]
    ],
    suite: "Tu vas savoir comment te protéger et à qui t'adresser."
  },
  idees: [
    {
      titre: "Une relation, c'est d'abord du respect et du consentement",
      texte: [
        "Consentir, c'est dire oui, librement, sans pression. On peut changer d'avis à tout moment.",
        "Se taire, ce n'est pas dire oui. Insister, menacer ou forcer est interdit par la loi."
      ],
      exercice: { type: "trier", question: "Il y a consentement, ou non ?", cases: ["Consentement", "Pas de consentement"],
        cartes: [["Les deux disent oui, sans pression", 0], ["L'un insiste jusqu'à ce que l'autre cède", 1], ["L'un dit « j'ai changé d'avis » et l'autre s'arrête", 0], ["L'autre ne dit rien et a l'air mal à l'aise", 1], ["L'un menace de rompre si l'autre refuse", 1]] }
    },
    {
      titre: "Sans contraception, une grossesse est possible dès la première fois",
      texte: [
        "Une grossesse commence quand un spermatozoïde rencontre un ovule : c'est la fécondation. L'œuf s'installe ensuite dans l'utérus : c'est la nidation.",
        "Cela peut arriver dès le premier rapport sexuel. La contraception sert à l'éviter."
      ],
      exercice: { type: "choix", question: "Yanis dit : « La première fois, on ne peut pas tomber enceinte. » C'est…",
        choix: ["Vrai", "Faux : une grossesse est possible dès le premier rapport", "Vrai si on fait attention"], bon: 1,
        retour: "C'est une idée fausse. Sans contraception, le risque existe à chaque rapport." }
    },
    {
      titre: "Il existe plusieurs moyens de contraception",
      texte: ["Chaque personne choisit le moyen qui lui convient, avec un professionnel de santé."],
      schema: { type: "liste", lignes: [
        { nom: "Le préservatif", texte: "À chaque rapport. C'est le seul qui protège aussi des infections (IST)." },
        { picto: "medicaments", nom: "La pilule", texte: "Un comprimé à prendre tous les jours, à heure régulière." },
        { nom: "L'implant", texte: "Un petit bâtonnet placé sous la peau du bras, efficace plusieurs années." },
        { nom: "Le stérilet (DIU)", texte: "Placé dans l'utérus par un professionnel, efficace plusieurs années." }
      ] },
      exercice: { type: "choix", question: "Quel moyen protège à la fois d'une grossesse et des IST ?",
        choix: ["La pilule", "Le préservatif", "L'implant"], bon: 1,
        retour: "Seul le préservatif protège des IST. On peut l'utiliser en plus d'un autre moyen." }
    },
    {
      titre: "En cas d'oubli ou d'accident, il y a la contraception d'urgence",
      texte: [
        "Préservatif qui craque, pilule oubliée, rapport non protégé : la contraception d'urgence peut éviter une grossesse.",
        "Il faut la prendre le plus vite possible. On la trouve en pharmacie, sans ordonnance, ou auprès de l'infirmière scolaire.",
        "Ce n'est pas une IVG. L'IVG (interruption volontaire de grossesse) arrête une grossesse déjà commencée : elle est possible jusqu'à 14 semaines de grossesse."
      ],
      exercice: { type: "ordre", question: "Le préservatif a craqué. Remets les bons réflexes dans l'ordre.",
        cartes: ["Ne pas paniquer et ne pas attendre", "Aller à la pharmacie ou voir l'infirmière", "Prendre la contraception d'urgence le plus vite possible", "Faire ensuite le point avec un professionnel de santé"],
        retour: "Plus on la prend tôt, plus elle est efficace. Ce n'est pas une contraception de tous les jours." }
    },
    {
      titre: "Je peux en parler à des professionnels, en toute confidentialité",
      texte: ["Ces professionnels répondent sans juger et gardent le secret."],
      schema: { type: "liste", lignes: [
        { nom: "L'infirmière scolaire", texte: "Au lycée, sans rendez-vous compliqué." },
        { picto: "trousse", nom: "Le médecin, la sage-femme", texte: "Ils prescrivent la contraception." },
        { picto: "maison", nom: "La PMI ou un centre de santé sexuelle", texte: "Consultation et contraception gratuites pour les jeunes." },
        { picto: "telephone", nom: "Fil santé jeunes", texte: "0 800 235 236 : appel anonyme et gratuit." }
      ] },
      exercice: { type: "cocher", question: "Zalia veut une contraception. À qui peut-elle s'adresser ?",
        cartes: [["L'infirmière scolaire", true], ["Une sage-femme", true], ["Un forum anonyme sur internet", false], ["La PMI", true], ["Un médecin", true]],
        retour: "Sur internet, on trouve beaucoup d'idées fausses. Un professionnel donne une information sûre." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Yanis me dit : « La contraception, c'est son problème à elle. » Tu lui réponds quoi ?",
        aides: ["La contraception, ça concerne", "Le préservatif sert à", "Vous pouvez aller voir"],
        idees: [
          { nom: "c'est l'affaire des deux", indice: "qui est concerné par une grossesse ?", mots: ["deux", "ensemble", "couple", "aussi", "responsable", "parler"] },
          { nom: "le préservatif", indice: "quel moyen Yanis peut-il utiliser ?", mots: ["preservatif", "capote", "proteger", "protege", "ist"] },
          { nom: "un professionnel", indice: "à qui peuvent-ils demander conseil ?", mots: ["infirmiere", "medecin", "sage femme", "pmi", "pharmacie", "centre"] }
        ],
        modele: "La contraception concerne les deux. Mets un préservatif, il protège aussi des IST. Allez voir ensemble l'infirmière ou la PMI pour choisir." },
      { question: "Dernière question : explique-moi avec tes mots ce que veut dire « consentir ».",
        aides: ["Consentir, c'est", "On a le droit de", "Si l'autre ne veut pas,"],
        idees: [
          { nom: "dire oui librement", indice: "comment doit-on dire oui ?", mots: ["oui", "accord", "veut", "libre", "librement", "envie"] },
          { nom: "sans pression, et on peut changer d'avis", indice: "et si l'un insiste, ou si on change d'avis ?", mots: ["pression", "forcer", "force", "non", "changer d avis", "arreter", "respect", "respecter"] }
        ],
        modele: "Consentir, c'est dire oui parce qu'on en a envie, sans être forcé. On peut dire non ou changer d'avis à tout moment, et l'autre doit respecter." }
    ]
  },
  retenir: [
    "Une relation repose sur le respect et le consentement : un oui libre, sans pression.",
    "Sans contraception, une grossesse est possible dès le premier rapport.",
    "Préservatif, pilule, implant, stérilet : je choisis avec un professionnel.",
    "Seul le préservatif protège aussi des IST.",
    "Contraception d'urgence : le plus vite possible, en pharmacie ou à l'infirmerie."
  ]
};

/* ---------------------------------------------------------------- A6 */
window.LECONS["cap/A6"] = {
  objectif: ["expliquer comment une IST se transmet", "me protéger", "savoir où faire un dépistage"],
  situation: {
    titre: "Le doute d'Amir",
    texte: [
      "Amir a 18 ans. Il y a un mois, il a eu un rapport sans préservatif avec une fille rencontrée en soirée.",
      "Il se sent bien, il n'a mal nulle part. Mais un ami lui a parlé des infections sexuellement transmissibles. Depuis, il y pense tout le temps."
    ],
    question: "À ton avis, Amir doit-il s'inquiéter ?",
    choix: [
      ["Non, s'il n'a aucun signe, il n'a rien.", "C'est ce que beaucoup de gens croient. On va voir pourquoi c'est faux."],
      ["Oui, il devrait faire un dépistage.", "Tu penses au test. On va voir où et comment le faire."],
      ["Je ne sais pas.", "C'est normal. Cette leçon répond à cette question."]
    ],
    suite: "Tu vas savoir comment te protéger et quoi faire en cas de doute."
  },
  idees: [
    {
      titre: "Une IST se transmet pendant les rapports sexuels",
      texte: [
        "IST veut dire : infection sexuellement transmissible. Elle est causée par un microbe : un virus ou une bactérie.",
        "Elle se transmet pendant un rapport sexuel non protégé. Certaines se transmettent aussi par le sang, ou de la mère à l'enfant."
      ],
      schema: { type: "liste", lignes: [
        { nom: "Le VIH", texte: "Le virus du sida. Il attaque les défenses du corps." },
        { nom: "L'hépatite B", texte: "Un virus qui attaque le foie." },
        { nom: "Les chlamydiae", texte: "Une bactérie très fréquente chez les jeunes." },
        { nom: "Les papillomavirus (HPV)", texte: "Des virus qui peuvent provoquer des cancers." }
      ] },
      exercice: { type: "trier", question: "On peut attraper une IST comme ça, ou non ?", cases: ["Oui, c'est possible", "Non"],
        cartes: [["Un rapport sexuel sans préservatif", 0], ["Serrer la main", 1], ["Boire dans le même verre", 1], ["Partager une seringue", 0], ["S'asseoir sur les mêmes toilettes", 1]] }
    },
    {
      titre: "On peut avoir une IST sans aucun signe",
      texte: [
        "Parfois, il y a des signes : brûlures en urinant, écoulement, boutons, démangeaisons.",
        "Mais très souvent, il n'y a aucun signe. La personne se sent bien et peut transmettre l'infection sans le savoir."
      ],
      exercice: { type: "choix", question: "Amir se sent bien. Peut-il avoir une IST ?",
        choix: ["Non, il aurait forcément mal", "Oui, beaucoup d'IST ne donnent aucun signe", "Non, à 18 ans on ne risque rien"], bon: 1,
        retour: "Se sentir bien ne prouve rien. Le seul moyen de savoir, c'est le dépistage." }
    },
    {
      titre: "Non soignée, une IST peut avoir des conséquences graves",
      texte: ["Une IST qui n'est pas soignée continue d'agir dans le corps."],
      schema: { type: "liste", lignes: [
        { picto: "pansement", nom: "Pour moi", texte: "Douleurs, stérilité (ne plus pouvoir avoir d'enfant), cancers, maladie grave comme le sida." },
        { picto: "personnes", nom: "Pour les autres", texte: "Je peux contaminer mes partenaires sans le savoir." }
      ] },
      exercice: { type: "cocher", question: "Coche les conséquences possibles d'une IST non soignée.",
        cartes: [["La stérilité", true], ["Contaminer son ou sa partenaire", true], ["Une simple fatigue qui passe toujours", false], ["Certains cancers", true], ["Rien, le corps guérit toujours seul", false]],
        retour: "Soignées tôt, beaucoup d'IST guérissent ou se contrôlent très bien. D'où l'importance du dépistage." }
    },
    {
      titre: "Je me protège avec le préservatif et les vaccins",
      texte: ["Deux protections existent, et elles se complètent."],
      schema: { type: "liste", lignes: [
        { nom: "Le préservatif", texte: "À chaque rapport, du début à la fin. Il existe pour les hommes et pour les femmes." },
        { picto: "medicaments", nom: "Les vaccins", texte: "Contre l'hépatite B et contre les papillomavirus (HPV)." }
      ] },
      exercice: { type: "choix", question: "La pilule protège-t-elle des IST ?",
        choix: ["Oui", "Non : elle évite une grossesse, pas les infections", "Oui, si on la prend bien"], bon: 1,
        retour: "Contre les IST, il n'y a que le préservatif, et les vaccins pour certaines infections." }
    },
    {
      titre: "En cas de doute, je fais un dépistage",
      texte: [
        "Le dépistage, c'est un test : une prise de sang, un prélèvement ou une analyse d'urine.",
        "Il est gratuit et confidentiel dans un centre de dépistage. On peut aussi demander à un médecin ou à l'infirmière scolaire où aller."
      ],
      exercice: { type: "ordre", question: "Que doit faire Amir ? Remets dans l'ordre.",
        cartes: ["Il en parle à un professionnel de santé", "Il fait un dépistage", "Il attend le résultat en utilisant un préservatif", "S'il est positif, il se soigne et prévient sa partenaire"],
        retour: "Faire le test, c'est prendre soin de soi et des autres. Prévenir son ou sa partenaire lui permet de se soigner aussi." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Amir me dit : « Je n'ai mal nulle part, donc je n'ai rien. » Tu lui réponds quoi ?",
        aides: ["On peut avoir une IST sans", "Tu devrais faire", "En attendant,"],
        idees: [
          { nom: "pas toujours de signes", indice: "une IST se voit-elle toujours ?", mots: ["sans signe", "signe", "symptome", "savoir", "rien sentir", "se voit pas", "invisible"] },
          { nom: "le dépistage", indice: "quel est le seul moyen de savoir ?", mots: ["depistage", "test", "prise de sang", "analyse", "centre"] },
          { nom: "se protéger", indice: "que doit-il utiliser maintenant ?", mots: ["preservatif", "capote", "proteger", "protege"] }
        ],
        modele: "On peut avoir une IST sans aucun signe. Va faire un dépistage, c'est gratuit et confidentiel. En attendant, mets un préservatif." },
      { question: "Dernière question : comment se protéger des IST ?",
        aides: ["À chaque rapport, je", "Il existe des vaccins contre", "En cas de doute,"],
        idees: [
          { nom: "le préservatif", indice: "quelle protection à chaque rapport ?", mots: ["preservatif", "capote"] },
          { nom: "les vaccins", indice: "quelle protection contre l'hépatite B et les papillomavirus ?", mots: ["vaccin", "vacciner", "vaccination"] },
          { nom: "le dépistage", indice: "que faire en cas de doute ?", mots: ["depistage", "test", "medecin", "infirmiere"] }
        ],
        modele: "Je mets un préservatif à chaque rapport, je me fais vacciner contre l'hépatite B et les papillomavirus, et je fais un dépistage en cas de doute." }
    ]
  },
  retenir: [
    "Une IST se transmet lors d'un rapport sexuel non protégé.",
    "On peut avoir une IST sans aucun signe et la transmettre.",
    "Non soignée, une IST peut rendre stérile ou provoquer une maladie grave.",
    "Le préservatif est la seule contraception qui protège des IST. Des vaccins existent (hépatite B, HPV).",
    "En cas de doute : dépistage gratuit et confidentiel."
  ]
};

/* ---------------------------------------------------------------- A7 */
window.LECONS["cap/A7"] = {
  objectif: ["expliquer pourquoi mon corps a besoin d'énergie", "composer des repas adaptés à mon activité", "bien m'hydrater au travail"],
  situation: {
    titre: "Le coup de barre de Nasser",
    texte: [
      "Nasser est en CAP couvreur. Ce matin, il est parti sans manger. À 10 h, il a bu une boisson énergisante et mangé un paquet de chips.",
      "À 11 h, sur le toit, il a la tête qui tourne et les jambes molles. Son tuteur le fait descendre."
    ],
    question: "À ton avis, pourquoi Nasser a-t-il un malaise ?",
    choix: [
      ["À cause de la chaleur seulement.", "La chaleur compte. On va voir que ce n'est pas la seule raison."],
      ["Parce qu'il n'a pas assez mangé ni bu.", "Tu fais le lien avec son alimentation. On va voir ce dont son corps a besoin."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas apprendre à manger selon ce que ton corps dépense."
  },
  idees: [
    {
      titre: "Mon corps a besoin d'énergie, comme un moteur",
      texte: [
        "Les aliments apportent l'énergie qui me permet de bouger, de travailler, de réfléchir et de garder mon corps à 37 °C.",
        "Plus je dépense, plus j'ai besoin d'énergie. Un métier physique demande plus qu'une journée assis."
      ],
      exercice: { type: "trier", question: "Qui dépense le plus d'énergie ?", cases: ["Grosse dépense", "Petite dépense"],
        cartes: [["Porter des tôles sur un toit", 0], ["Regarder un film", 1], ["Jouer au foot", 0], ["Rester assis en classe", 1], ["Couler une dalle de béton", 0]] }
    },
    {
      titre: "Chaque famille d'aliments a un rôle",
      texte: ["Pour que le corps fonctionne bien, il lui faut un peu de chaque famille."],
      schema: { type: "liste", lignes: [
        { nom: "Féculents : riz, manioc, banane, pain", texte: "Ils donnent de l'énergie qui dure." },
        { nom: "Viande, poisson, œufs, haricots", texte: "Ils construisent les muscles." },
        { nom: "Fruits et légumes", texte: "Ils protègent : vitamines et fibres." },
        { nom: "Produits laitiers", texte: "Ils rendent les os solides." },
        { picto: "eau", nom: "L'eau", texte: "La seule boisson indispensable." }
      ] },
      exercice: { type: "choix", question: "Quel aliment donne de l'énergie qui dure toute la matinée ?",
        choix: ["Un soda", "Du riz ou du pain", "Des bonbons"], bon: 1,
        retour: "Les féculents libèrent leur énergie lentement. Le sucre du soda donne un coup de fouet, puis un coup de barre." }
    },
    {
      titre: "Je répartis mes repas dans la journée",
      texte: ["Le corps a besoin d'énergie tout au long de la journée, pas en une seule fois."],
      schema: { type: "liste", lignes: [
        { nom: "Le matin", texte: "Un petit-déjeuner : il recharge le corps après la nuit." },
        { nom: "Le midi", texte: "Un repas complet : féculent, viande ou poisson, légume, fruit." },
        { nom: "Le soir", texte: "Un repas plus léger." }
      ] },
      exercice: { type: "cocher", question: "Compose un bon repas de midi pour Nasser avant de remonter sur le toit.",
        cartes: [["Du riz", true], ["Du poisson", true], ["Des brèdes", true], ["Une boisson énergisante", false], ["Une mangue", true], ["De l'eau", true], ["Un paquet de chips à la place du repas", false]],
        retour: "Riz, poisson, brèdes, fruit et eau : un repas complet avec ce qu'on trouve à Mayotte." }
    },
    {
      titre: "Trop de sucre, de gras et de sel abîme la santé",
      texte: [
        "Sodas, boissons énergisantes, chips, fritures, biscuits : ils sont très sucrés, très gras ou très salés.",
        "En manger souvent favorise l'obésité, le diabète et les maladies du cœur. Ce sont des aliments pour de temps en temps."
      ],
      exercice: { type: "trier", question: "Tous les jours, ou de temps en temps ?", cases: ["Tous les jours", "De temps en temps"],
        cartes: [["De l'eau", 0, "eau"], ["Un soda", 1], ["Des fruits", 0], ["Des mabawas frits", 1], ["Du riz", 0], ["Des chips", 1]] }
    },
    {
      titre: "Quand je travaille au chaud, je bois de l'eau",
      texte: [
        "En transpirant, je perds de l'eau. Si je ne bois pas, je me déshydrate : mal de tête, vertiges, crampes, malaise.",
        "Sur un chantier à Mayotte, je bois de l'eau régulièrement, sans attendre d'avoir soif."
      ],
      schema: { type: "compte", lignes: [{ picto: "eau", nombre: 3, texte: "Au moins 1,5 litre d'eau par jour, et plus quand il fait chaud ou que je fais un effort" }] },
      exercice: { type: "choix", question: "Nasser travaille sur un toit en plein soleil. Que doit-il boire ?",
        choix: ["Une boisson énergisante pour tenir", "De l'eau, régulièrement", "Rien, pour ne pas perdre de temps"], bon: 1,
        retour: "Nasser avait le ventre vide et pas assez d'eau : sur un toit, un malaise peut finir en chute." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Nasser me dit : « Le matin, je n'ai pas le temps de manger. » Tu lui réponds quoi ?",
        aides: ["Le matin, ton corps a besoin de", "Sans petit-déjeuner,", "Tu peux manger"],
        idees: [
          { nom: "le besoin d'énergie", indice: "de quoi son corps a-t-il besoin pour travailler ?", mots: ["energie", "force", "besoin", "travailler", "carburant"] },
          { nom: "le risque de malaise", indice: "que risque-t-il sur le toit le ventre vide ?", mots: ["malaise", "vertige", "tomber", "chute", "fatigue", "accident", "tete qui tourne"] },
          { nom: "une idée de petit-déjeuner", indice: "que peut-il manger et boire le matin ?", mots: ["pain", "riz", "fruit", "lait", "eau", "banane", "petit dejeuner", "manger"] }
        ],
        modele: "Le matin, ton corps a besoin d'énergie pour travailler. Sans manger, tu risques un malaise sur le toit. Prends du pain, un fruit et de l'eau avant de partir." },
      { question: "Dernière question : pour toi, c'est quoi un repas équilibré ?",
        aides: ["Dans mon assiette, il y a", "Comme boisson,", "J'évite"],
        idees: [
          { nom: "un féculent", indice: "qu'est-ce qui donne de l'énergie ?", mots: ["riz", "feculent", "manioc", "banane", "pain", "pates"] },
          { nom: "viande, poisson ou œufs", indice: "qu'est-ce qui construit les muscles ?", mots: ["viande", "poisson", "oeuf", "poulet", "haricots"] },
          { nom: "fruits et légumes", indice: "qu'est-ce qui apporte les vitamines ?", mots: ["fruit", "legume", "bredes", "mangue", "salade"] },
          { nom: "de l'eau", indice: "quelle boisson ?", mots: ["eau"] }
        ],
        modele: "Un repas équilibré, c'est un féculent comme le riz, du poisson ou de la viande, des légumes, un fruit et de l'eau." }
    ]
  },
  retenir: [
    "Les aliments donnent l'énergie dont mon corps a besoin. Plus je dépense, plus j'en ai besoin.",
    "Chaque famille d'aliments a un rôle : énergie, muscles, protection, os.",
    "Je mange à chaque repas, en commençant par un petit-déjeuner.",
    "Sodas, chips et fritures : de temps en temps seulement.",
    "L'eau est la seule boisson indispensable, surtout au travail et à la chaleur."
  ]
};
