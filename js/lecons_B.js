/* =====================================================================
   FICHIER À MODIFIER : les leçons de la thématique B (environnement).
   B2 est dans js/lecons.js. B1 suit la progression de l'enseignant.
   B3 et B4 sont écrites à partir du programme de PSE en CAP :
   À RELIRE par l'enseignant avant de les donner.
   ===================================================================== */
window.LECONS = window.LECONS || {};

/* ---------------------------------------------------------------- B1 */
window.LECONS["cap/B1"] = {
  objectif: ["dire d'où vient l'eau à Mayotte", "expliquer pourquoi elle manque", "citer des gestes pour la préserver"],
  situation: {
    titre: "Pas d'eau au robinet",
    texte: [
      "Il est 18 h à Kani-Kéli. Anfane rentre du lycée, couvert de poussière de plâtre. Il ouvre le robinet : rien. C'est le jour de coupure dans son village.",
      "Dans la cour, sa petite sœur a laissé couler le tuyau tout l'après-midi, hier, pour jouer. Les bidons de réserve sont presque vides."
    ],
    question: "À ton avis, pourquoi l'eau manque-t-elle à Mayotte ?",
    choix: [
      ["Parce qu'il ne pleut jamais.", "Il pleut pourtant beaucoup pendant la saison des pluies. On va voir où est le problème."],
      ["Parce qu'il y a peu d'eau douce et beaucoup d'habitants.", "Tu tiens une bonne piste. On va regarder d'où vient l'eau du robinet."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre d'où vient l'eau et comment la préserver."
  },
  idees: [
    {
      titre: "L'eau douce est rare",
      texte: [
        "La Terre est couverte d'eau, mais presque toute cette eau est salée : c'est la mer. On ne peut pas la boire.",
        "L'eau douce, celle des rivières, des lacs et du sous-sol, est rare. C'est la seule que l'on peut rendre potable facilement."
      ],
      exercice: { type: "trier", question: "Eau douce ou eau salée ?", cases: ["Eau douce", "Eau salée"],
        cartes: [["L'eau du lagon", 1, "vague"], ["L'eau d'une rivière", 0, "eau"], ["L'eau de pluie", 0, "eau"], ["L'eau de l'océan Indien", 1, "vague"], ["L'eau d'un forage dans le sol", 0, "eau"]] }
    },
    {
      titre: "À Mayotte, l'eau vient de quatre ressources",
      texte: ["L'eau du robinet ne vient pas d'un seul endroit."],
      schema: { type: "liste", lignes: [
        { picto: "eau", nom: "Les rivières", texte: "L'eau est captée dans les cours d'eau." },
        { picto: "inondation", nom: "Les retenues collinaires", texte: "De grands lacs artificiels, comme à Combani et à Dzoumogné, qui stockent l'eau de pluie." },
        { picto: "terrain", nom: "Les forages", texte: "On pompe l'eau qui se trouve dans le sous-sol." },
        { picto: "vague", nom: "Le dessalement", texte: "Une usine retire le sel de l'eau de mer, en Petite-Terre." }
      ] },
      exercice: { type: "choix", question: "À quoi sert une retenue collinaire ?",
        choix: ["À produire de l'électricité", "À stocker l'eau de pluie pour la saison sèche", "À nettoyer les eaux usées"], bon: 1,
        retour: "Si la saison des pluies est faible, les retenues ne se remplissent pas : c'est la pénurie." }
    },
    {
      titre: "L'eau manque quand il pleut peu et que la population augmente",
      texte: [
        "Une pénurie, c'est quand il n'y a pas assez d'eau pour tout le monde.",
        "À Mayotte, les ressources sont limitées et le nombre d'habitants augmente vite. Quand la saison des pluies est mauvaise, il faut organiser des coupures : les tours d'eau."
      ],
      schema: { type: "formule", termes: ["Peu de pluie", "Beaucoup d'habitants", "Pénurie"],
        notes: ["Les rivières et les retenues sont basses.", "Les besoins en eau augmentent.", "Il faut couper l'eau à tour de rôle."] },
      exercice: { type: "cocher", question: "Coche ce qui aggrave la pénurie d'eau.",
        cartes: [["Une saison des pluies très faible", true], ["Des tuyaux qui fuient", true], ["Une douche courte", false], ["Une population qui augmente", true], ["Laisser couler le tuyau pour jouer", true]],
        retour: "Les fuites et le gaspillage comptent autant que le manque de pluie." }
    },
    {
      titre: "L'eau suit un circuit, de la nature à la nature",
      texte: ["Avant d'arriver au robinet, l'eau est rendue potable. Après usage, elle doit être nettoyée avant de retourner dans la nature."],
      schema: { type: "paliers", paliers: [
        { couleur: "#2bb3b1", nom: "1. Le captage", texte: "On prend l'eau dans la rivière, la retenue, le forage ou la mer." },
        { couleur: "#3a5a98", nom: "2. La potabilisation", texte: "L'usine rend l'eau potable : on peut la boire sans danger." },
        { couleur: "#2a9d58", nom: "3. La distribution", texte: "L'eau arrive au robinet par les tuyaux et les réservoirs." },
        { couleur: "#a9713f", nom: "4. Les eaux usées", texte: "L'eau salie par la douche, la vaisselle, les toilettes." },
        { couleur: "#7d8b99", nom: "5. L'épuration", texte: "La station nettoie l'eau usée avant de la rejeter dans la nature." }
      ] },
      exercice: { type: "ordre", question: "Remets le circuit de l'eau dans l'ordre.",
        cartes: ["Le captage", "La potabilisation", "La distribution", "Les eaux usées", "L'épuration"],
        retour: "Une eau usée rejetée sans épuration pollue les rivières et le lagon." }
    },
    {
      titre: "Chacun peut préserver l'eau",
      texte: ["Il existe des gestes individuels, que je fais moi-même, et des mesures collectives, décidées pour tout le monde."],
      schema: { type: "liste", lignes: [
        { picto: "personnes", nom: "Mesures individuelles", texte: "Douche courte, robinet fermé pendant le savonnage, fuites réparées, réserve dans des récipients propres et fermés." },
        { picto: "usine", nom: "Mesures collectives", texte: "Réparer le réseau, construire des usines et des retenues, organiser les tours d'eau, informer la population." }
      ] },
      exercice: { type: "trier", question: "Mesure individuelle ou collective ?", cases: ["Individuelle", "Collective"],
        cartes: [["Je prends une douche courte", 0], ["La commune répare les tuyaux", 1], ["Je ferme le robinet en me savonnant", 0], ["On construit une usine de dessalement", 1], ["Je garde ma réserve dans un bidon fermé", 0]] }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "La petite sœur d'Anfane me demande : « Pourquoi je n'ai pas le droit de jouer avec le tuyau ? » Tu lui réponds quoi ?",
        aides: ["À Mayotte, l'eau est", "Si on gaspille,", "À la place, tu peux"],
        idees: [
          { nom: "l'eau est rare", indice: "y a-t-il beaucoup d'eau douce à Mayotte ?", mots: ["rare", "manque", "penurie", "peu", "pas assez", "precieuse", "coupure"] },
          { nom: "le gaspillage", indice: "que se passe-t-il si on laisse couler l'eau ?", mots: ["gaspille", "gaspiller", "gaspillage", "perdre", "vide", "reserve", "bidon"] },
          { nom: "un geste pour économiser", indice: "que peut-elle faire à la place ?", mots: ["fermer", "robinet", "seau", "economiser", "attention", "douche"] }
        ],
        modele: "À Mayotte, l'eau douce est rare et il y a des coupures. Si on la gaspille, les réserves sont vides. Ferme le robinet et joue avec un seau." },
      { question: "Dernière question : raconte-moi le chemin de l'eau, de la rivière jusqu'à ton robinet.",
        aides: ["D'abord, l'eau est captée dans", "Ensuite, l'usine", "Puis l'eau arrive"],
        idees: [
          { nom: "le captage", indice: "où prend-on l'eau ?", mots: ["riviere", "retenue", "forage", "captage", "capte", "mer", "pluie"] },
          { nom: "la potabilisation", indice: "que fait l'usine ?", mots: ["potable", "potabilisation", "usine", "traite", "nettoie", "propre"] },
          { nom: "la distribution", indice: "comment l'eau arrive-t-elle chez toi ?", mots: ["tuyau", "robinet", "distribution", "reservoir", "maison"] }
        ],
        modele: "L'eau est captée dans une rivière ou une retenue. L'usine la rend potable. Elle arrive ensuite au robinet par les tuyaux." }
    ]
  },
  retenir: [
    "L'eau douce est rare : presque toute l'eau de la Terre est salée.",
    "À Mayotte : rivières, retenues collinaires, forages, dessalement.",
    "Pénurie = peu de pluie + beaucoup d'habitants.",
    "Circuit : captage, potabilisation, distribution, eaux usées, épuration.",
    "Je préserve l'eau : douche courte, fuites réparées, réserve dans un récipient fermé."
  ]
};

/* ---------------------------------------------------------------- B3 */
window.LECONS["cap/B3"] = {
  objectif: ["distinguer une énergie renouvelable d'une énergie non renouvelable", "dire d'où vient l'électricité à Mayotte", "citer des gestes pour économiser l'énergie"],
  situation: {
    titre: "La facture d'électricité",
    texte: [
      "Chez Rama, à Bandrélé, la facture d'électricité a doublé. Sa mère est en colère.",
      "Rama regarde autour d'elle : le climatiseur tourne fenêtres ouvertes, la télévision reste allumée toute la nuit, trois chargeurs sont branchés sans téléphone."
    ],
    question: "À ton avis, que peut faire la famille de Rama ?",
    choix: [
      ["Rien, l'électricité coûte cher, c'est comme ça.", "On va voir qu'on peut agir sur sa consommation."],
      ["Éteindre et débrancher ce qui ne sert pas.", "Tu penses aux bons gestes. On va voir pourquoi ils comptent."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre d'où vient l'énergie et comment en consommer moins."
  },
  idees: [
    {
      titre: "L'énergie sert à tout, tous les jours",
      texte: ["L'énergie fait fonctionner les appareils, les véhicules et les machines."],
      schema: { type: "liste", lignes: [
        { picto: "maison", nom: "À la maison", texte: "S'éclairer, cuisiner, conserver les aliments, rafraîchir, recharger." },
        { picto: "camion", nom: "Pour se déplacer", texte: "Scooter, voiture, bus, barge." },
        { picto: "usine", nom: "Au travail", texte: "Faire tourner les machines et les outils électriques." }
      ] },
      exercice: { type: "cocher", question: "Coche ce qui consomme de l'énergie.",
        cartes: [["Le climatiseur", true], ["Le scooter", true], ["Une fenêtre ouverte", false], ["Le réfrigérateur", true], ["Le chargeur resté branché", true]],
        retour: "Même un chargeur branché sans téléphone consomme un peu d'électricité." }
    },
    {
      titre: "Une source d'énergie est renouvelable ou non renouvelable",
      texte: [
        "Une énergie renouvelable ne s'épuise pas : la nature la renouvelle sans cesse.",
        "Une énergie non renouvelable existe en quantité limitée. Quand on l'a brûlée, il n'y en a plus."
      ],
      schema: { type: "liste", lignes: [
        { picto: "nature", nom: "Renouvelables", texte: "Le soleil, le vent, l'eau, le bois, la chaleur du sol." },
        { picto: "techno", nom: "Non renouvelables", texte: "Le pétrole, le gaz, le charbon, l'uranium." }
      ] },
      exercice: { type: "trier", question: "Renouvelable ou non renouvelable ?", cases: ["Renouvelable", "Non renouvelable"],
        cartes: [["Le soleil", 0, "nature"], ["Le pétrole", 1, "techno"], ["Le vent", 0, "nature"], ["Le gaz", 1, "techno"], ["Le gazole", 1, "techno"]] }
    },
    {
      titre: "À Mayotte, l'électricité vient surtout du gazole",
      texte: [
        "À Mayotte, la plus grande partie de l'électricité est fabriquée dans des centrales qui brûlent du gazole, un produit tiré du pétrole. Il arrive par bateau.",
        "Une petite partie vient des panneaux solaires."
      ],
      exercice: { type: "choix", question: "Pourquoi est-ce un problème de produire l'électricité avec du gazole ?",
        choix: ["Parce que le gazole ne donne pas de lumière", "Parce qu'il pollue, coûte cher et s'épuisera un jour", "Parce qu'il n'y a pas de soleil à Mayotte"], bon: 1,
        retour: "Brûler du gazole rejette des gaz qui polluent l'air et réchauffent la planète." }
    },
    {
      titre: "Consommer de l'énergie a des effets sur la planète",
      texte: ["Brûler du pétrole, du gaz ou du charbon rejette du dioxyde de carbone (CO₂) dans l'air."],
      schema: { type: "paliers", paliers: [
        { couleur: "#7d8b99", nom: "On brûle du pétrole, du gaz, du charbon", texte: "Centrales, moteurs, usines." },
        { couleur: "#f08a00", nom: "Du CO₂ part dans l'air", texte: "Ce gaz retient la chaleur autour de la Terre." },
        { couleur: "#d62828", nom: "Le climat se réchauffe", texte: "Cyclones plus violents, montée de la mer, sécheresses." }
      ] },
      exercice: { type: "ordre", question: "Remets dans l'ordre.",
        cartes: ["On brûle du pétrole", "Du CO₂ part dans l'air", "Le climat se réchauffe"],
        retour: "Une île comme Mayotte est en première ligne : montée de la mer et cyclones." }
    },
    {
      titre: "J'économise l'énergie avec des gestes simples",
      texte: ["Moins consommer, c'est moins polluer et moins payer."],
      schema: { type: "liste", lignes: [
        { picto: "lampe", nom: "J'éteins", texte: "La lumière et les appareils en quittant la pièce. Pas de veille." },
        { picto: "chargeur", nom: "Je débranche", texte: "Les chargeurs qui ne servent pas." },
        { picto: "maison", nom: "Je règle le climatiseur", texte: "Fenêtres fermées, pas trop froid : 26 °C suffisent." },
        { picto: "papiers", nom: "Je regarde l'étiquette énergie", texte: "De A (très économe) à G (très gourmand), avant d'acheter un appareil." }
      ] },
      exercice: { type: "trier", question: "Économie ou gaspillage ?", cases: ["Économie", "Gaspillage"],
        cartes: [["Éteindre la lumière en sortant", 0], ["Climatiseur allumé, fenêtres ouvertes", 1], ["Choisir un réfrigérateur classé A", 0], ["Laisser la télé allumée la nuit", 1], ["Débrancher les chargeurs", 0]] }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Rama me demande : « Comment faire baisser la facture d'électricité ? » Donne-lui tes conseils.",
        aides: ["Tu peux éteindre", "Pour le climatiseur,", "Débranche"],
        idees: [
          { nom: "éteindre", indice: "que faire de la lumière et de la télé ?", mots: ["eteindre", "eteins", "lumiere", "tele", "veille"] },
          { nom: "le climatiseur", indice: "comment mieux utiliser le climatiseur ?", mots: ["clim", "climatiseur", "fenetres", "fermer", "26"] },
          { nom: "débrancher", indice: "que faire des chargeurs ?", mots: ["debrancher", "debranche", "chargeur", "prise"] }
        ],
        modele: "Éteins la lumière et la télé quand tu quittes la pièce, ferme les fenêtres quand le climatiseur marche et débranche les chargeurs." },
      { question: "Dernière question : explique-moi la différence entre une énergie renouvelable et une énergie non renouvelable.",
        aides: ["Une énergie renouvelable, c'est", "Par exemple,", "Une énergie non renouvelable"],
        idees: [
          { nom: "le renouvelable ne s'épuise pas", indice: "le soleil va-t-il manquer un jour ?", mots: ["epuise pas", "toujours", "infini", "soleil", "vent", "nature", "renouvelle"] },
          { nom: "le non renouvelable est limité", indice: "et le pétrole ?", mots: ["petrole", "gaz", "charbon", "gazole", "limite", "fini", "epuise", "plus"] }
        ],
        modele: "Une énergie renouvelable ne s'épuise pas, comme le soleil ou le vent. Une énergie non renouvelable, comme le pétrole, existe en quantité limitée." }
    ]
  },
  retenir: [
    "L'énergie sert à s'éclairer, se déplacer, travailler.",
    "Renouvelable : soleil, vent, eau. Non renouvelable : pétrole, gaz, charbon.",
    "À Mayotte, l'électricité est surtout produite avec du gazole.",
    "Brûler du pétrole rejette du CO₂ qui réchauffe le climat.",
    "J'éteins, je débranche, je règle le climatiseur, je lis l'étiquette énergie."
  ]
};

/* ---------------------------------------------------------------- B4 */
window.LECONS["cap/B4"] = {
  objectif: ["expliquer quand le bruit devient dangereux", "citer ses effets sur l'oreille et sur le corps", "protéger mes oreilles"],
  situation: {
    titre: "Les oreilles qui sifflent",
    texte: [
      "Samedi, Djamal est allé à une soirée. Il est resté trois heures juste devant les enceintes.",
      "En rentrant, il entend un sifflement dans ses oreilles. Lundi, en atelier, il travaille à la scie sans ses protections : « De toute façon, j'ai l'habitude du bruit. »"
    ],
    question: "À ton avis, le sifflement de Djamal, c'est…",
    choix: [
      ["Rien du tout, ça passe toujours.", "Souvent ça passe, mais pas toujours. On va voir ce qui se passe dans l'oreille."],
      ["Un signal d'alerte de ses oreilles.", "Tu as raison de le prendre au sérieux. On va voir pourquoi."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre comment le bruit abîme l'oreille et comment te protéger."
  },
  idees: [
    {
      titre: "Le bruit se mesure en décibels",
      texte: ["Le niveau d'un son se mesure en décibels (dB). Plus le chiffre est grand, plus le son est fort."],
      schema: { type: "paliers", paliers: [
        { couleur: "#2a9d58", nom: "Moins de 80 dB : sans danger", texte: "Une conversation, une salle de classe calme." },
        { couleur: "#f08a00", nom: "À partir de 80 dB : risque", texte: "Une rue très bruyante, une tondeuse, un atelier. Dangereux si cela dure." },
        { couleur: "#d62828", nom: "Plus de 100 dB : danger", texte: "Une discothèque, une scie circulaire, une disqueuse." },
        { couleur: "#7b2cbf", nom: "120 dB : douleur", texte: "Un pétard, un avion au décollage. Lésion immédiate possible." }
      ] },
      exercice: { type: "trier", question: "Sans danger, ou dangereux pour l'oreille ?", cases: ["Sans danger", "Dangereux"],
        cartes: [["Une conversation", 0], ["Une disqueuse", 1], ["Une salle de classe calme", 0], ["Les enceintes d'une soirée", 1], ["Une scie circulaire", 1]] }
    },
    {
      titre: "Le danger dépend du niveau et de la durée",
      texte: [
        "Plus le son est fort, moins l'oreille peut le supporter longtemps.",
        "Un bruit moyen pendant toute une journée de travail peut abîmer autant qu'un bruit très fort pendant quelques minutes."
      ],
      schema: { type: "formule", termes: ["Niveau du son", "Durée", "Danger pour l'oreille"],
        notes: ["Combien de décibels ?", "Combien de temps ?", "Fort et longtemps : le pire."] },
      exercice: { type: "choix", question: "Qui prend le plus de risques pour ses oreilles ?",
        choix: ["Celui qui écoute de la musique doucement pendant 1 heure", "Celui qui reste 3 heures devant les enceintes", "Celui qui discute avec ses amis"], bon: 1,
        retour: "Fort et longtemps : c'est exactement ce qu'a fait Djamal samedi." }
    },
    {
      titre: "Dans l'oreille, les cellules abîmées ne repoussent pas",
      texte: [
        "Au fond de l'oreille, de minuscules cellules transforment le son en message pour le cerveau.",
        "Un bruit trop fort les abîme ou les détruit. Elles ne repoussent jamais : la perte d'audition est définitive."
      ],
      exercice: { type: "choix", question: "Une cellule de l'oreille détruite par le bruit…",
        choix: ["Repousse en quelques jours", "Ne repousse jamais", "Se répare avec des médicaments"], bon: 1,
        retour: "C'est pour cela que la surdité due au bruit ne se guérit pas. On ne peut que la prévenir." }
    },
    {
      titre: "Le bruit fatigue l'oreille et tout le corps",
      texte: ["Les effets du bruit ne touchent pas seulement l'audition."],
      schema: { type: "liste", lignes: [
        { picto: "sirene", nom: "Sur l'audition", texte: "Sifflements (acouphènes), oreilles bouchées, puis surdité." },
        { picto: "pansement", nom: "Sur le corps", texte: "Fatigue, maux de tête, stress, mauvais sommeil." },
        { picto: "danger", nom: "Au travail", texte: "On n'entend pas une alarme ou un collègue : plus de risques d'accident." }
      ] },
      exercice: { type: "cocher", question: "Coche les effets possibles du bruit.",
        cartes: [["Des sifflements dans les oreilles", true], ["De la fatigue et du stress", true], ["Une meilleure concentration", false], ["Une surdité définitive", true], ["Ne pas entendre une alarme", true]],
        retour: "Le sifflement de Djamal est un signal d'alerte : ses oreilles ont souffert." }
    },
    {
      titre: "Je protège mes oreilles",
      texte: ["On agit d'abord sur le bruit lui-même, puis on protège les personnes."],
      schema: { type: "liste", lignes: [
        { picto: "usine", nom: "Réduire le bruit à la source", texte: "Machines moins bruyantes, capots, entretien." },
        { picto: "personnes", nom: "S'éloigner et limiter la durée", texte: "Se tenir loin des enceintes, faire des pauses au calme." },
        { picto: "operateur", nom: "Porter ses protections", texte: "Bouchons d'oreilles ou casque antibruit, en atelier comme en soirée." },
        { picto: "telephone", nom: "Baisser le volume", texte: "Avec des écouteurs : pas plus de la moitié du volume." }
      ] },
      exercice: { type: "trier", question: "Ça protège, ou ça met en danger ?", cases: ["Ça protège", "Ça met en danger"],
        cartes: [["Porter un casque antibruit à la scie", 0], ["Se coller aux enceintes", 1], ["Faire une pause au calme", 0], ["Écouteurs au volume maximum", 1], ["S'éloigner de la machine bruyante", 0]] }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Djamal me dit : « J'ai l'habitude du bruit, je n'ai pas besoin de protections. » Tu lui réponds quoi ?",
        aides: ["On ne s'habitue pas au bruit,", "Les cellules de l'oreille", "À la scie, tu dois"],
        idees: [
          { nom: "le bruit abîme l'oreille", indice: "que fait le bruit aux cellules de l'oreille ?", mots: ["abime", "detruit", "cellules", "oreille", "audition", "casse"] },
          { nom: "c'est définitif", indice: "est-ce que cela se répare ?", mots: ["repousse pas", "jamais", "definitif", "sourd", "surdite", "toujours", "guerit pas"] },
          { nom: "les protections", indice: "que doit-il porter à la scie ?", mots: ["casque", "bouchons", "protection", "antibruit", "proteger"] }
        ],
        modele: "On ne s'habitue pas au bruit : il détruit les cellules de l'oreille et elles ne repoussent jamais. Mets ton casque antibruit à la scie." },
      { question: "Dernière question : donne-moi tes conseils pour protéger tes oreilles en soirée.",
        aides: ["Je me tiens loin", "Je fais des pauses", "Je peux porter"],
        idees: [
          { nom: "s'éloigner", indice: "où te places-tu par rapport aux enceintes ?", mots: ["loin", "eloigner", "enceintes", "distance"] },
          { nom: "faire des pauses", indice: "que faire de temps en temps ?", mots: ["pause", "calme", "sortir", "repos"] },
          { nom: "se protéger ou baisser", indice: "que peux-tu mettre dans tes oreilles ?", mots: ["bouchons", "protection", "baisser", "volume", "moins fort"] }
        ],
        modele: "Je me tiens loin des enceintes, je fais des pauses au calme et je mets des bouchons d'oreilles." }
    ]
  },
  retenir: [
    "Le bruit se mesure en décibels (dB). À partir de 80 dB, il y a un risque.",
    "Le danger dépend du niveau du son et de la durée.",
    "Les cellules de l'oreille détruites ne repoussent pas : la surdité est définitive.",
    "Le bruit provoque aussi fatigue, stress et accidents.",
    "Je m'éloigne, je fais des pauses, je baisse le volume, je porte mes protections."
  ]
};
