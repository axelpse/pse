/* =====================================================================
   FICHIER À MODIFIER : les leçons de la thématique C (travail).
   C3 est dans js/lecons.js. C1, C2, C4, C5 et C6 suivent les documents et
   la progression de l'enseignant. C7 et C8 sont écrites à partir du
   programme de PSE en CAP : À RELIRE par l'enseignant.
   ===================================================================== */
window.LECONS = window.LECONS || {};

/* ---------------------------------------------------------------- C1 */
window.LECONS["cap/C1"] = {
  objectif: ["reconnaître les différents contrats de travail", "lire un contrat avant de le signer", "citer les droits et les obligations du salarié et de l'employeur"],
  situation: {
    titre: "Le premier contrat de Soula",
    texte: [
      "Soula vient d'avoir son CAP. Une entreprise de Kawéni lui propose un travail pour remplacer un salarié malade pendant trois mois.",
      "Le patron lui tend un papier : « Signe là, c'est ton contrat. » Soula n'ose pas poser de questions. Il signe sans lire."
    ],
    question: "À ton avis, Soula a-t-il bien fait ?",
    choix: [
      ["Oui, l'important c'est d'avoir le travail.", "Avoir un travail compte beaucoup. On va voir pourquoi il faut quand même lire."],
      ["Non, il aurait dû lire avant de signer.", "Tu as le bon réflexe. On va voir ce qu'il faut regarder dans un contrat."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas savoir reconnaître les contrats et ce à quoi ils t'engagent."
  },
  idees: [
    {
      titre: "Un contrat de travail engage deux personnes",
      texte: [
        "Le contrat de travail est un accord entre un salarié et un employeur.",
        "Le salarié fournit un travail. En échange, l'employeur lui verse un salaire. Le salarié travaille sous l'autorité de l'employeur."
      ],
      schema: { type: "formule", termes: ["Un travail", "Un salaire", "Contrat de travail"],
        notes: ["Fourni par le salarié.", "Versé par l'employeur.", "Sous l'autorité de l'employeur."] },
      exercice: { type: "trier", question: "Qui fait quoi ?", cases: ["Le salarié", "L'employeur"],
        cartes: [["Il fournit un travail", 0], ["Il verse le salaire", 1], ["Il respecte les horaires", 0], ["Il donne les consignes", 1]] }
    },
    {
      titre: "Il existe plusieurs contrats de travail",
      texte: ["Le contrat dépend surtout d'une question : y a-t-il une date de fin ?"],
      schema: { type: "liste", lignes: [
        { nom: "CDI : contrat à durée indéterminée", texte: "Pas de date de fin. C'est le contrat normal, le plus stable." },
        { nom: "CDD : contrat à durée déterminée", texte: "Une date de fin. Pour un besoin temporaire : remplacement, surcroît de travail." },
        { nom: "Intérim : contrat de travail temporaire", texte: "Une agence d'intérim m'emploie et m'envoie en mission dans une entreprise." },
        { nom: "Contrat d'apprentissage", texte: "Je travaille dans l'entreprise et je me forme au lycée ou au CFA, avec un salaire." }
      ] },
      exercice: { type: "choix", question: "Soula remplace un salarié malade pendant trois mois. Quel est son contrat ?",
        choix: ["Un CDI", "Un CDD", "Un contrat d'apprentissage"], bon: 1,
        retour: "Il y a une date de fin et un besoin temporaire : c'est un CDD." }
    },
    {
      titre: "Avant de signer, je lis mon contrat",
      texte: ["Le contrat contient les informations qui m'engagent. Je les vérifie avant de signer."],
      schema: { type: "liste", lignes: [
        { picto: "papiers", nom: "Le type de contrat et ses dates", texte: "CDI, CDD… date de début, date de fin s'il y en a une." },
        { picto: "operateur", nom: "Le poste et le lieu de travail", texte: "Ce que je dois faire, et où." },
        { picto: "chargeur", nom: "La durée du travail et le salaire", texte: "Combien d'heures, pour combien d'argent." },
        { picto: "sablier", nom: "La période d'essai", texte: "Au début, l'employeur et le salarié peuvent arrêter le contrat facilement." }
      ] },
      exercice: { type: "cocher", question: "Coche ce que Soula aurait dû vérifier avant de signer.",
        cartes: [["La date de fin du contrat", true], ["Le salaire", true], ["La couleur du papier", false], ["Le nombre d'heures par semaine", true], ["Le poste et le lieu de travail", true]],
        retour: "Signer, c'est s'engager. Si je ne comprends pas, je pose des questions avant." }
    },
    {
      titre: "Le salarié a des droits et des obligations",
      texte: ["Un droit, c'est ce que je peux exiger. Une obligation, c'est ce que je dois faire."],
      schema: { type: "liste", lignes: [
        { nom: "Mes droits", texte: "Recevoir mon salaire, avoir des congés payés, travailler en sécurité, être formé." },
        { nom: "Mes obligations", texte: "Faire mon travail, respecter les horaires, les consignes de sécurité et le règlement intérieur." }
      ] },
      exercice: { type: "trier", question: "Droit ou obligation du salarié ?", cases: ["Droit", "Obligation"],
        cartes: [["Recevoir un salaire", 0], ["Arriver à l'heure", 1], ["Avoir des congés payés", 0], ["Respecter les consignes de sécurité", 1], ["Travailler en sécurité", 0]] }
    },
    {
      titre: "L'employeur aussi a des droits et des obligations",
      texte: ["Le Code du travail fixe les règles pour les deux."],
      schema: { type: "liste", lignes: [
        { nom: "Ses obligations", texte: "Fournir le travail prévu, verser le salaire, protéger la santé et la sécurité des salariés." },
        { nom: "Ses droits", texte: "Diriger le travail, fixer les règles, sanctionner un salarié qui ne les respecte pas." }
      ] },
      exercice: { type: "choix", question: "Le patron de Soula ne lui verse pas son salaire à la fin du mois. Que se passe-t-il ?",
        choix: ["C'est son droit, il est le patron", "Il ne respecte pas une obligation de l'employeur", "Soula doit travailler gratuitement le premier mois"], bon: 1,
        retour: "Verser le salaire est une obligation. Le contrat signé en est la preuve : garde-le toujours." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Soula me dit : « J'ai signé sans lire, c'est pas grave ? » Tu lui réponds quoi ?",
        aides: ["Un contrat, ça t'engage à", "Avant de signer, il faut vérifier", "Garde bien"],
        idees: [
          { nom: "le contrat engage", indice: "que se passe-t-il quand on signe ?", mots: ["engage", "engagement", "oblige", "obligation", "accord", "respecter"] },
          { nom: "ce qu'il faut vérifier", indice: "que doit-il regarder dans son contrat ?", mots: ["salaire", "date", "heures", "horaires", "poste", "duree", "essai", "lire", "relire"] }
        ],
        modele: "Un contrat t'engage : tu dois le respecter. Relis-le pour vérifier le salaire, les horaires et la date de fin, et garde-le bien." },
      { question: "Dernière question : explique-moi la différence entre un CDI et un CDD.",
        aides: ["Un CDI, c'est un contrat", "Un CDD, c'est un contrat", "Par exemple,"],
        idees: [
          { nom: "le CDI n'a pas de date de fin", indice: "le CDI s'arrête-t-il à une date prévue ?", mots: ["cdi", "indeterminee", "pas de fin", "sans fin", "sans date", "stable", "toujours"] },
          { nom: "le CDD a une date de fin", indice: "et le CDD ?", mots: ["cdd", "determinee", "date de fin", "temporaire", "remplacement", "mois", "fin"] }
        ],
        modele: "Un CDI n'a pas de date de fin, c'est le contrat le plus stable. Un CDD a une date de fin : il sert pour un besoin temporaire, comme un remplacement." }
    ]
  },
  retenir: [
    "Contrat de travail : un travail contre un salaire, sous l'autorité de l'employeur.",
    "CDI : sans date de fin. CDD : avec date de fin. Intérim : par une agence. Apprentissage : travail et formation.",
    "Avant de signer, je lis : type de contrat, dates, poste, horaires, salaire, période d'essai.",
    "Salarié : droit au salaire, aux congés, à la sécurité. Obligation de travailler et de respecter les règles.",
    "Employeur : il verse le salaire, protège les salariés et dirige le travail."
  ]
};

/* ---------------------------------------------------------------- C2 */
window.LECONS["cap/C2"] = {
  objectif: ["distinguer accident du travail, accident de trajet et maladie professionnelle", "dire quoi faire après un accident du travail", "citer les règles qui protègent les jeunes travailleurs"],
  situation: {
    titre: "Le premier jour de Kassim",
    texte: [
      "Kassim a 16 ans. Il est apprenti en CAP maçon dans une entreprise du bâtiment à Koungou.",
      "Le premier jour, son tuteur lui dit : « Ici, la sécurité passe avant tout. » Kassim se demande pourquoi c'est si important."
    ],
    question: "À ton avis, pourquoi la sécurité passe-t-elle avant tout ?",
    choix: [
      ["Pour faire plaisir au chef.", "Le chef y tient, c'est vrai. On va voir que cela te concerne d'abord toi."],
      ["Pour éviter les accidents et les maladies.", "C'est le cœur du sujet. On va voir tout ce qu'un accident fait perdre."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre pourquoi on protège la santé au travail, et quoi faire en cas d'accident."
  },
  idees: [
    {
      titre: "La prévention, c'est agir avant",
      texte: [
        "La prévention, c'est agir avant pour éviter un problème. Au travail, elle sert à éviter les accidents du travail et les maladies professionnelles.",
        "Un enjeu, c'est ce que je peux gagner ou perdre."
      ],
      schema: { type: "liste", lignes: [
        { picto: "pansement", nom: "Enjeux humains", texte: "Pour le salarié : éviter les blessures, les maladies, la peur, le stress." },
        { picto: "usine", nom: "Enjeux socio-économiques", texte: "Éviter de perdre du salaire. Pour l'entreprise : éviter les coûts, les retards, les remplacements." }
      ] },
      exercice: { type: "trier", question: "Anli, maçon, tombe d'un échafaudage mal fixé. Enjeu humain ou socio-économique ?", cases: ["Humain", "Socio-économique"],
        cartes: [["Anli a très mal au bras", 0], ["Le chantier prend du retard", 1], ["Anli a peur de remonter sur un échafaudage", 0], ["L'entreprise doit payer un autre maçon", 1], ["Anli ne peut plus jouer au foot avec ses amis", 0], ["L'entreprise doit réparer l'échafaudage", 1]] }
    },
    {
      titre: "Accident du travail, accident de trajet ou maladie professionnelle ?",
      texte: ["Trois situations à ne pas confondre."],
      schema: { type: "liste", lignes: [
        { picto: "eclair", nom: "Accident du travail", texte: "Un événement soudain, pendant le travail ou à cause du travail." },
        { picto: "camion", nom: "Accident de trajet", texte: "Un événement soudain sur le trajet habituel entre la maison et le travail." },
        { picto: "sablier", nom: "Maladie professionnelle", texte: "Une maladie causée par le travail. Elle apparaît petit à petit, après une longue exposition à un risque." }
      ] },
      exercice: { type: "choix", question: "Saïd est boulanger depuis 15 ans. Il respire de la farine tous les jours. Aujourd'hui, il a de l'asthme. C'est…",
        choix: ["Un accident du travail", "Un accident de trajet", "Une maladie professionnelle"], bon: 2,
        retour: "Son asthme est apparu petit à petit, après 15 ans à respirer de la farine au travail." }
    },
    {
      titre: "Soudain ou petit à petit : je sais classer",
      texte: ["Mon aide : soudain au travail, c'est un accident du travail. Soudain sur la route, c'est un accident de trajet. Petit à petit, c'est une maladie professionnelle."],
      exercice: { type: "trier", question: "Accident (soudain) ou maladie professionnelle (petit à petit) ?", cases: ["Accident", "Maladie professionnelle"],
        cartes: [["Fatima glisse sur un sol mouillé à l'hôpital", 0, "eclair"], ["Moinécha, caissière depuis 8 ans, a mal au poignet à force de répéter les mêmes gestes", 1, "sablier"], ["Rachidi se coupe la main avec une tôle", 0, "eclair"], ["Nasser tombe en descendant de la barge pour aller travailler", 0, "eclair"], ["Un maçon devient sourd après 20 ans de bruit", 1, "sablier"]] }
    },
    {
      titre: "Après un accident du travail, chacun a des démarches à faire",
      texte: ["Les délais sont courts. À Mayotte, l'Assurance maladie, c'est la CSSM."],
      schema: { type: "liste", lignes: [
        { picto: "operateur", nom: "Le salarié", texte: "Il prévient son employeur dans les 24 h. Il va voir un médecin le plus vite possible. Il envoie son arrêt de travail dans les 48 h." },
        { picto: "papiers", nom: "L'employeur", texte: "Il déclare l'accident à la CSSM dans les 48 h. Il donne au salarié une feuille d'accident du travail." },
        { picto: "trousse", nom: "Ce que reçoit la victime", texte: "Les soins payés à 100 %, et des indemnités journalières pour remplacer le salaire pendant l'arrêt." }
      ] },
      exercice: { type: "trier", question: "Qui doit le faire ?", cases: ["Le salarié", "L'employeur"],
        cartes: [["Prévenir l'employeur dans les 24 h", 0], ["Déclarer l'accident à la CSSM dans les 48 h", 1], ["Aller voir un médecin", 0], ["Donner la feuille d'accident du travail", 1], ["Envoyer l'arrêt de travail dans les 48 h", 0]] }
    },
    {
      titre: "L'employeur protège, le salarié respecte les consignes",
      texte: ["Le Code du travail donne des obligations et des droits à chacun."],
      schema: { type: "liste", lignes: [
        { nom: "L'employeur doit", texte: "Protéger la santé des salariés, prévenir les risques, informer et former." },
        { nom: "Le salarié doit", texte: "Prendre soin de sa sécurité et de celle des autres, respecter les consignes." },
        { picto: "danger", nom: "Le salarié a le droit", texte: "De prévenir d'un danger grave et imminent (droit d'alerte) et de quitter cette situation (droit de retrait)." }
      ] },
      exercice: { type: "choix", question: "Kassim voit un câble électrique abîmé sur le chantier. Il prévient son chef tout de suite. C'est…",
        choix: ["Le droit de retrait", "Le droit d'alerte", "Une faute"], bon: 1,
        retour: "Prévenir d'un danger grave et imminent, c'est le droit d'alerte. Imminent veut dire : qui va arriver très bientôt." }
    },
    {
      titre: "Avant 18 ans, des règles me protègent encore plus",
      texte: ["Kassim a 16 ans : le Code du travail prévoit des règles spéciales pour les jeunes travailleurs."],
      schema: { type: "liste", lignes: [
        { picto: "sablier", nom: "Durée du travail", texte: "8 h maximum par jour et 35 h maximum par semaine." },
        { picto: "lampe", nom: "Travail de nuit", texte: "Interdit entre 22 h et 6 h." },
        { picto: "danger", nom: "Travaux dangereux", texte: "Interdits, sauf exceptions pour la formation." },
        { picto: "personnes", nom: "Accompagnement", texte: "Un tuteur obligatoire, une formation aux risques du poste, une visite médicale avant de commencer." }
      ] },
      exercice: { type: "trier", question: "Kassim a 16 ans. Vrai ou faux ?", cases: ["Vrai", "Faux"],
        cartes: [["Il peut travailler 10 heures par jour", 1], ["Son employeur doit le former aux risques de son poste", 0], ["Il peut travailler sur le chantier de 23 h à 2 h du matin", 1], ["Il doit avoir un tuteur", 0], ["Il doit respecter les consignes de sécurité", 0]] }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Kassim se coupe la main sur le chantier. Il me dit : « Ce n'est rien, je ne dis rien au chef. » Tu lui réponds quoi ?",
        aides: ["Tu dois prévenir", "Va voir", "Comme ça, tes soins"],
        idees: [
          { nom: "prévenir l'employeur", indice: "qui doit-il prévenir, et en combien de temps ?", mots: ["prevenir", "previens", "chef", "employeur", "patron", "tuteur", "24"] },
          { nom: "voir un médecin", indice: "qui doit regarder sa main ?", mots: ["medecin", "soigner", "docteur", "hopital", "dispensaire"] },
          { nom: "la prise en charge", indice: "qui paie les soins d'un accident du travail ?", mots: ["declare", "declarer", "cssm", "rembourse", "paye", "100", "soins", "indemnite", "accident du travail"] }
        ],
        modele: "Préviens ton chef dans les 24 heures et va voir un médecin. C'est un accident du travail : il sera déclaré à la CSSM et tes soins seront payés à 100 %." },
      { question: "Dernière question : explique-moi la différence entre un accident du travail et une maladie professionnelle.",
        aides: ["Un accident du travail, c'est", "Une maladie professionnelle, elle", "Par exemple,"],
        idees: [
          { nom: "l'accident est soudain", indice: "l'accident arrive-t-il d'un coup ou lentement ?", mots: ["soudain", "d un coup", "tout de suite", "brusque", "accident", "tombe", "coupe"] },
          { nom: "la maladie vient petit à petit", indice: "et la maladie professionnelle ?", mots: ["petit a petit", "longtemps", "annees", "ans", "lentement", "maladie", "exposition", "repete"] }
        ],
        modele: "Un accident du travail arrive d'un coup, pendant le travail. Une maladie professionnelle apparaît petit à petit, après des années d'exposition à un risque." }
    ]
  },
  retenir: [
    "La prévention, c'est agir avant. Enjeux humains et socio-économiques.",
    "Soudain au travail : accident du travail. Sur le trajet : accident de trajet. Petit à petit : maladie professionnelle.",
    "Après un accident : je préviens l'employeur dans les 24 h, il déclare à la CSSM dans les 48 h.",
    "L'employeur protège et forme. Le salarié respecte les consignes. Droit d'alerte et droit de retrait.",
    "Avant 18 ans : 8 h par jour, pas de travail de nuit, pas de travaux dangereux, un tuteur."
  ]
};

/* ---------------------------------------------------------------- C4 */
window.LECONS["cap/C4"] = {
  objectif: ["analyser le risque principal de mon métier", "distinguer protection collective et protection individuelle", "choisir les bonnes protections"],
  situation: {
    titre: "Le plafond de l'école",
    texte: [
      "Anli est plaquiste. Aujourd'hui, il visse des plaques au plafond d'une salle de classe à Sada, à 3 mètres du sol.",
      "Son collègue lui tend un vieil escabeau : « Prends ça, on gagne du temps. » L'échafaudage roulant, avec ses garde-corps, est resté dans le camion."
    ],
    question: "À ton avis, que doit faire Anli ?",
    choix: [
      ["Prendre l'escabeau, c'est plus rapide.", "On gagne dix minutes, c'est vrai. On va voir ce qu'on risque de perdre."],
      ["Aller chercher l'échafaudage.", "Tu choisis la sécurité. On va voir pourquoi c'est la bonne protection."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas apprendre à repérer le risque le plus important de ton métier et à choisir les bonnes protections."
  },
  idees: [
    {
      titre: "Chaque métier a un risque plus important que les autres",
      texte: [
        "Le risque prépondérant est le risque le plus fréquent ou le plus grave dans un métier.",
        "On le repère avec les statistiques d'accidents du travail et de maladies professionnelles, et en observant les postes de travail."
      ],
      schema: { type: "liste", lignes: [
        { nom: "Plâtre, charpente, couverture", texte: "Le risque de chute de hauteur." },
        { nom: "Menuiserie", texte: "Le risque mécanique : les machines qui coupent." },
        { nom: "Peinture, bijouterie", texte: "Le risque chimique : les produits." },
        { nom: "Maintenance des bâtiments", texte: "Le risque électrique." }
      ] },
      exercice: { type: "choix", question: "Anli travaille à 3 mètres du sol. Quel est le risque prépondérant ?",
        choix: ["Le risque chimique", "Le risque de chute de hauteur", "Le risque lié au bruit"], bon: 1,
        retour: "Dans les métiers du plâtre, la chute de hauteur est le risque le plus grave." }
    },
    {
      titre: "J'analyse le risque avec le schéma du PAD",
      texte: ["Je reprends le schéma du module C3 pour comprendre comment le dommage peut arriver."],
      schema: { type: "pad", pad: { danger: "La hauteur", operateur: "Anli", dangereuse: "Anli travaille à 3 mètres sur un escabeau, sans garde-corps", evenement: "Anli perd l'équilibre, l'escabeau bascule", dommage: "Fracture, traumatisme crânien" } },
      exercice: { type: "pad", question: "À toi de refaire le schéma d'Anli. Touche une étiquette, puis sa case.",
        donne: ["operateur"],
        pad: { danger: "La hauteur", operateur: "Anli", dangereuse: "Anli travaille à 3 mètres sur un escabeau, sans garde-corps", evenement: "Anli perd l'équilibre, l'escabeau bascule", dommage: "Fracture, traumatisme crânien" },
        retour: "Le schéma montre où agir : sur le danger, sur la situation dangereuse, ou pour limiter le dommage." }
    },
    {
      titre: "Un risque peut blesser tout de suite ou rendre malade plus tard",
      texte: ["Les effets sur la santé peuvent être immédiats ou différés."],
      schema: { type: "liste", lignes: [
        { picto: "eclair", nom: "Effets immédiats : l'accident", texte: "Fracture après une chute, coupure, brûlure, électrisation." },
        { picto: "sablier", nom: "Effets différés : la maladie professionnelle", texte: "Allergie à un produit, surdité, maladie des poumons due aux poussières." }
      ] },
      exercice: { type: "trier", question: "Effet immédiat ou différé ?", cases: ["Immédiat", "Différé"],
        cartes: [["Une fracture après une chute", 0, "eclair"], ["Une allergie après des mois de contact avec un produit", 1, "sablier"], ["Une brûlure par un acide", 0, "eclair"], ["Une maladie des poumons après des années de poussières", 1, "sablier"], ["Une électrisation", 0, "eclair"]] }
    },
    {
      titre: "On protège d'abord tout le monde, puis chaque personne",
      texte: ["Les mesures de prévention se choisissent dans un ordre précis, de la plus efficace à la moins efficace."],
      schema: { type: "paliers", paliers: [
        { couleur: "#2a9d58", nom: "1. Supprimer ou réduire le danger", texte: "Préparer au sol ce qui peut l'être, remplacer un produit dangereux par un autre." },
        { couleur: "#3a5a98", nom: "2. Protection collective", texte: "Elle protège tout le monde : garde-corps, échafaudage, carter sur une machine, aspiration." },
        { couleur: "#f08a00", nom: "3. Protection individuelle (EPI)", texte: "Elle protège celui qui la porte : casque, harnais, gants, lunettes, masque." },
        { couleur: "#7d8b99", nom: "4. Formation et information", texte: "Consignes, affichage, formation au poste." }
      ] },
      exercice: { type: "trier", question: "Protection collective ou individuelle ?", cases: ["Collective", "Individuelle (EPI)"],
        cartes: [["Un garde-corps", 0], ["Un casque", 1], ["Un échafaudage roulant", 0], ["Des gants", 1], ["Une aspiration des poussières", 0], ["Un harnais", 1]] }
    },
    {
      titre: "Je choisis les protections de mon métier",
      texte: [
        "La protection collective passe en premier, parce qu'elle marche même si quelqu'un oublie ou se trompe.",
        "L'EPI vient en plus, quand le danger ne peut pas être supprimé."
      ],
      exercice: { type: "ordre", question: "Classe les mesures pour Anli, de la plus efficace à la moins efficace.",
        cartes: ["Préparer et découper les plaques au sol", "Utiliser l'échafaudage roulant avec garde-corps", "Porter un casque", "Lire les consignes affichées"],
        retour: "Anli doit aller chercher l'échafaudage : dix minutes perdues valent mieux qu'une chute de 3 mètres." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Le collègue d'Anli me dit : « L'escabeau, ça va plus vite. » Tu lui réponds quoi ?",
        aides: ["Le danger, c'est", "Si Anli tombe,", "Il vaut mieux utiliser"],
        idees: [
          { nom: "le risque de chute", indice: "quel est le danger à 3 mètres du sol ?", mots: ["hauteur", "chute", "tomber", "tombe", "equilibre"] },
          { nom: "le dommage possible", indice: "que peut-il arriver à Anli ?", mots: ["fracture", "blessure", "blesser", "grave", "mourir", "casser", "tete"] },
          { nom: "la protection collective", indice: "quel matériel est resté dans le camion ?", mots: ["echafaudage", "garde corps", "protection", "collective"] }
        ],
        modele: "Le danger, c'est la hauteur. Si Anli tombe de 3 mètres, il peut se faire une fracture. Il vaut mieux prendre l'échafaudage avec ses garde-corps." },
      { question: "Dernière question : quelles protections utilises-tu dans ton métier ? Dis-moi lesquelles sont collectives et lesquelles sont individuelles.",
        aides: ["Dans mon métier, la protection collective, c'est", "Comme EPI, je porte", "La protection collective passe en premier parce que"],
        idees: [
          { nom: "une protection collective", indice: "qu'est-ce qui protège tout l'atelier ou tout le chantier ?", mots: ["collective", "garde corps", "echafaudage", "aspiration", "carter", "protecteur", "ventilation", "arret d urgence", "filet"] },
          { nom: "une protection individuelle", indice: "que portes-tu sur toi ?", mots: ["epi", "individuelle", "casque", "gants", "lunettes", "masque", "chaussures", "harnais", "bouchons"] }
        ],
        modele: "Dans mon métier, la protection collective, c'est le garde-corps ou l'aspiration. Comme protection individuelle, je porte des chaussures de sécurité, des gants et des lunettes." }
    ]
  },
  retenir: [
    "Le risque prépondérant est le risque le plus fréquent ou le plus grave de mon métier.",
    "J'analyse ce risque avec le schéma du PAD.",
    "Effets immédiats : l'accident. Effets différés : la maladie professionnelle.",
    "Ordre des mesures : supprimer le danger, protection collective, protection individuelle, formation.",
    "La protection collective passe toujours avant l'EPI."
  ]
};

/* ---------------------------------------------------------------- C5 */
window.LECONS["cap/C5"] = {
  objectif: ["expliquer comment mon dos fonctionne", "citer les dommages liés aux efforts", "porter une charge en protégeant mon dos"],
  situation: {
    titre: "Le dos de Faïdine",
    texte: [
      "Faïdine est en CAP métiers du plâtre. Toute la matinée, il a porté seul des plaques de plâtre de 25 kilos jusqu'au premier étage.",
      "À midi, en se penchant pour en prendre une dernière, il sent une douleur vive dans le bas du dos. Il ne peut plus se redresser."
    ],
    question: "À ton avis, pourquoi Faïdine s'est-il bloqué le dos ?",
    choix: [
      ["Il n'a pas eu de chance.", "On va voir que ce n'est pas une question de chance."],
      ["Il a porté trop lourd, trop longtemps, et mal.", "Tu as repéré plusieurs causes. On va les regarder une par une."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas apprendre à protéger ton dos et tes articulations au travail."
  },
  idees: [
    {
      titre: "Mon métier fait travailler mon corps",
      texte: ["L'activité physique du métier peut fatiguer et abîmer le corps. Quatre facteurs de risque reviennent souvent."],
      schema: { type: "liste", lignes: [
        { nom: "Le port de charges", texte: "Soulever, porter, pousser, tirer du lourd." },
        { nom: "Les postures pénibles", texte: "Bras levés, dos penché, à genoux, accroupi." },
        { nom: "Les gestes répétés", texte: "Le même mouvement, des centaines de fois." },
        { nom: "Les vibrations et les efforts prolongés", texte: "Les machines qui secouent, rester longtemps debout." }
      ] },
      exercice: { type: "trier", question: "Quel facteur de risque ?", cases: ["Port de charges", "Posture pénible"],
        cartes: [["Porter une plaque de 25 kilos", 0], ["Visser au plafond, les bras levés", 1], ["Monter des sacs de ciment à l'étage", 0], ["Poser du carrelage à genoux", 1], ["Peindre un plafond, la tête en arrière", 1]] }
    },
    {
      titre: "Mon dos est une pile d'os et d'amortisseurs",
      texte: [
        "La colonne vertébrale est faite d'os empilés : les vertèbres. Entre deux vertèbres, il y a un disque qui sert d'amortisseur.",
        "Quand je me penche le dos rond avec une charge, le disque est écrasé d'un côté. À force, il s'abîme."
      ],
      exercice: { type: "choix", question: "À quoi sert le disque entre deux vertèbres ?",
        choix: ["À faire grandir", "À amortir, comme un coussin", "À porter les muscles"], bon: 1,
        retour: "Dos rond et charge lourde : le disque est pincé. C'est ce qui est arrivé à Faïdine." }
    },
    {
      titre: "Les dommages arrivent d'un coup ou petit à petit",
      texte: ["Comme pour tous les risques, il y a des accidents et des maladies."],
      schema: { type: "liste", lignes: [
        { picto: "eclair", nom: "D'un coup", texte: "Le lumbago (dos bloqué), la déchirure musculaire, la chute avec une charge." },
        { picto: "sablier", nom: "Petit à petit : les TMS", texte: "Troubles musculo-squelettiques : tendinite de l'épaule ou du poignet, mal de dos qui dure." }
      ] },
      exercice: { type: "trier", question: "D'un coup, ou petit à petit ?", cases: ["D'un coup", "Petit à petit (TMS)"],
        cartes: [["Un lumbago en soulevant une plaque", 0, "eclair"], ["Une tendinite de l'épaule après des mois de ponçage", 1, "sablier"], ["Une déchirure musculaire", 0, "eclair"], ["Un mal de dos qui s'installe au fil des années", 1, "sablier"]] }
    },
    {
      titre: "On réduit d'abord l'effort",
      texte: ["Comme toujours, on agit d'abord sur le danger, avant de compter sur les bons gestes."],
      schema: { type: "paliers", paliers: [
        { couleur: "#2a9d58", nom: "1. Supprimer ou réduire la manutention", texte: "Lève-plaque, monte-matériaux, chariot, diable, livraison à l'étage." },
        { couleur: "#3a5a98", nom: "2. Organiser le travail", texte: "Porter à deux, alterner les tâches, régler la hauteur du plan de travail, faire des pauses." },
        { couleur: "#f08a00", nom: "3. Se former et se protéger", texte: "Apprendre les bons gestes, s'échauffer, porter des gants et des chaussures de sécurité." }
      ] },
      exercice: { type: "ordre", question: "Classe les solutions pour Faïdine, de la plus efficace à la moins efficace.",
        cartes: ["Utiliser un monte-matériaux pour monter les plaques", "Porter les plaques à deux", "Apprendre à bien se placer pour soulever"],
        retour: "La meilleure charge, c'est celle qu'on ne porte pas." }
    },
    {
      titre: "Quand je dois porter, je protège mon dos",
      texte: ["S'il faut vraiment soulever une charge, j'applique quatre règles."],
      schema: { type: "liste", lignes: [
        { nom: "Je me rapproche de la charge", texte: "Les pieds écartés, de chaque côté." },
        { nom: "Je plie les jambes", texte: "Ce sont les cuisses qui travaillent, pas le dos." },
        { nom: "Je garde le dos droit", texte: "Sans le tordre." },
        { nom: "Je porte la charge près du corps", texte: "Bras tendus, contre moi." }
      ] },
      exercice: { type: "trier", question: "Bon geste ou mauvais geste ?", cases: ["Bon geste", "Mauvais geste"],
        cartes: [["Plier les jambes", 0], ["Se pencher le dos rond, jambes tendues", 1], ["Garder la charge près du corps", 0], ["Tourner le dos en portant", 1], ["Demander de l'aide pour une charge lourde", 0]] }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Faïdine reprend le travail. Il me demande : « Comment faire pour ne plus me bloquer le dos ? » Donne-lui tes conseils.",
        aides: ["Pour monter les plaques, utilise", "Ne porte pas seul,", "Quand tu soulèves,"],
        idees: [
          { nom: "une aide à la manutention", indice: "quel matériel peut porter à sa place ?", mots: ["monte", "chariot", "diable", "leve plaque", "machine", "aide", "materiel"] },
          { nom: "porter à deux", indice: "doit-il porter seul ?", mots: ["deux", "collegue", "aide", "ensemble", "seul"] },
          { nom: "les bons gestes", indice: "comment placer ses jambes et son dos ?", mots: ["jambes", "plier", "plie", "dos droit", "genoux", "pres du corps"] }
        ],
        modele: "Utilise le monte-matériaux pour monter les plaques, porte à deux, et quand tu soulèves, plie les jambes et garde le dos droit." },
      { question: "Dernière question : dans ton métier, qu'est-ce qui fatigue le plus ton corps ? Et que peux-tu faire ?",
        aides: ["Dans mon métier, je dois souvent", "Ça fatigue", "Pour me protéger, je"],
        idees: [
          { nom: "un facteur de risque", indice: "portes-tu du lourd ? as-tu les bras levés ? répètes-tu un geste ?", mots: ["porter", "porte", "charge", "lourd", "bras", "penche", "genoux", "repete", "debout", "geste", "posture"] },
          { nom: "une solution", indice: "que peux-tu changer ?", mots: ["pause", "deux", "chariot", "aide", "jambes", "dos droit", "echauffe", "hauteur", "alterner"] }
        ],
        modele: "Dans mon métier, je porte souvent des charges lourdes et je travaille penché. Pour me protéger, j'utilise un chariot, je porte à deux et je plie les jambes." }
    ]
  },
  retenir: [
    "Facteurs de risque : port de charges, postures pénibles, gestes répétés, vibrations.",
    "Entre les vertèbres, les disques amortissent. Dos rond et charge lourde les abîment.",
    "D'un coup : lumbago. Petit à petit : TMS (tendinite, mal de dos).",
    "D'abord réduire l'effort (aides à la manutention), puis organiser, puis les bons gestes.",
    "Pour soulever : je me rapproche, je plie les jambes, dos droit, charge près du corps."
  ]
};

/* ---------------------------------------------------------------- C6 */
window.LECONS["cap/C6"] = {
  objectif: ["citer les personnes qui s'occupent de la sécurité", "expliquer le rôle de chacune", "savoir à qui m'adresser"],
  situation: {
    titre: "La meuleuse sans carter",
    texte: [
      "Nadjima est en stage dans une petite entreprise de Combani. On lui demande d'utiliser une meuleuse dont le carter de protection a été enlevé.",
      "Elle n'est pas rassurée, mais elle ne sait pas à qui en parler. Elle a peur de passer pour une stagiaire qui se plaint."
    ],
    question: "À ton avis, à qui Nadjima doit-elle en parler d'abord ?",
    choix: [
      ["À personne, elle fait ce qu'on lui dit.", "Se taire, c'est prendre un risque pour ses mains et ses yeux. On va voir qui peut l'aider."],
      ["À son tuteur dans l'entreprise.", "C'est la bonne première porte. On va voir qu'il y en a d'autres."],
      ["Je ne sais pas.", "C'est normal de ne pas savoir. Cette leçon te présente tout le monde."]
    ],
    suite: "Tu vas savoir à qui t'adresser pour ta santé et ta sécurité au travail."
  },
  idees: [
    {
      titre: "Dans l'entreprise, plusieurs personnes s'occupent de la sécurité",
      texte: ["Ce sont les acteurs internes : ils travaillent dans l'entreprise."],
      schema: { type: "liste", lignes: [
        { nom: "L'employeur", texte: "Il est responsable de la santé et de la sécurité de tous les salariés." },
        { nom: "Le tuteur", texte: "Il m'accueille, me montre le travail et les consignes." },
        { nom: "Le salarié compétent en prévention", texte: "Il aide l'employeur à repérer les risques." },
        { nom: "Le CSE", texte: "Le comité social et économique : des représentants élus par les salariés. Ils alertent sur les risques." },
        { picto: "trousse", nom: "Le sauveteur secouriste du travail (SST)", texte: "Il donne les premiers secours en cas d'accident." }
      ] },
      exercice: { type: "choix", question: "Qui est responsable de la sécurité de tous les salariés ?",
        choix: ["Le sauveteur secouriste", "L'employeur", "Le stagiaire"], bon: 1,
        retour: "L'employeur est le premier responsable. Mais chacun doit aussi prendre soin de sa sécurité." }
    },
    {
      titre: "Le service de santé au travail suit ma santé",
      texte: ["Chaque entreprise est rattachée à un service de prévention et de santé au travail."],
      schema: { type: "liste", lignes: [
        { picto: "trousse", nom: "Le médecin du travail", texte: "Il vérifie que mon travail n'abîme pas ma santé. Il conseille l'employeur et les salariés. Il ne soigne pas." },
        { nom: "L'infirmier de santé au travail", texte: "Il fait les visites d'information et de prévention." },
        { nom: "L'IPRP", texte: "Intervenant en prévention des risques professionnels : il étudie les postes et propose des améliorations." }
      ] },
      exercice: { type: "choix", question: "Quel est le rôle du médecin du travail ?",
        choix: ["Soigner les salariés malades", "Vérifier que le travail n'abîme pas la santé des salariés", "Sanctionner l'employeur"], bon: 1,
        retour: "Le médecin du travail fait de la prévention. Pour me faire soigner, je vais voir mon médecin traitant." }
    },
    {
      titre: "À l'extérieur, des organismes contrôlent et conseillent",
      texte: ["Ce sont les acteurs externes : ils ne font pas partie de l'entreprise."],
      schema: { type: "liste", lignes: [
        { picto: "papiers", nom: "L'inspection du travail", texte: "Elle contrôle que l'entreprise respecte le Code du travail. Elle peut sanctionner." },
        { picto: "maison", nom: "La CSSM", texte: "La caisse de sécurité sociale de Mayotte : elle indemnise les accidents du travail et conseille les entreprises en prévention." },
        { nom: "L'INRS et l'OPPBTP", texte: "Ils informent et forment sur les risques. L'OPPBTP est spécialisé dans le bâtiment." }
      ] },
      exercice: { type: "trier", question: "Acteur interne ou externe à l'entreprise ?", cases: ["Interne", "Externe"],
        cartes: [["L'employeur", 0], ["L'inspection du travail", 1], ["Le CSE", 0], ["La CSSM", 1], ["Le tuteur", 0]] }
    },
    {
      titre: "Chaque acteur a son rôle",
      texte: ["Pour savoir à qui m'adresser, je retiens ce que fait chacun."],
      exercice: { type: "trier", question: "Qui contrôle, qui conseille ?", cases: ["Il contrôle et peut sanctionner", "Il conseille et suit la santé"],
        cartes: [["L'inspecteur du travail", 0], ["Le médecin du travail", 1], ["L'IPRP", 1], ["L'infirmier de santé au travail", 1]] }
    },
    {
      titre: "Je sais à qui m'adresser",
      texte: ["En stage ou en apprentissage, j'ai plusieurs personnes à qui parler d'un problème de sécurité."],
      schema: { type: "paliers", paliers: [
        { couleur: "#2a9d58", nom: "1. Mon tuteur", texte: "Je lui signale le problème tout de suite." },
        { couleur: "#3a5a98", nom: "2. L'employeur ou un représentant du CSE", texte: "Si rien ne change." },
        { couleur: "#f08a00", nom: "3. Mon professeur", texte: "En stage, je préviens aussi le lycée." },
        { couleur: "#d62828", nom: "4. Le médecin du travail, l'inspection du travail", texte: "Si le danger continue." }
      ] },
      exercice: { type: "ordre", question: "Que fait Nadjima ? Remets dans l'ordre.",
        cartes: ["Elle n'utilise pas la meuleuse sans carter", "Elle prévient son tuteur", "Elle en parle à son professeur", "Si rien ne change, l'inspection du travail peut être prévenue"],
        retour: "Nadjima n'est pas une stagiaire qui se plaint : elle utilise son droit d'alerte." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Nadjima me dit : « Je suis stagiaire, je n'ose rien dire pour la meuleuse. » Tu lui réponds quoi ?",
        aides: ["Tu dois en parler à", "Sans carter, tu risques", "Tu as le droit de"],
        idees: [
          { nom: "parler au tuteur", indice: "qui est son premier contact dans l'entreprise ?", mots: ["tuteur", "employeur", "patron", "chef", "parler", "prevenir", "dire"] },
          { nom: "prévenir le lycée", indice: "qui d'autre peut l'aider, en dehors de l'entreprise ?", mots: ["prof", "professeur", "lycee", "enseignant", "cse", "inspection", "medecin du travail"] },
          { nom: "le danger", indice: "que risque-t-elle sans carter ?", mots: ["danger", "dangereux", "coupure", "blesser", "main", "yeux", "risque", "droit", "alerte", "refuser"] }
        ],
        modele: "Parles-en tout de suite à ton tuteur et à ton professeur. Sans carter, tu risques une blessure grave. Tu as le droit de signaler un danger." },
      { question: "Dernière question : explique-moi le rôle du médecin du travail et celui de l'inspecteur du travail.",
        aides: ["Le médecin du travail", "L'inspecteur du travail", "La différence, c'est que"],
        idees: [
          { nom: "le médecin du travail", indice: "que surveille le médecin du travail ?", mots: ["sante", "medecin", "visite", "conseille", "suit", "prevention", "verifie"] },
          { nom: "l'inspecteur du travail", indice: "que fait l'inspecteur dans l'entreprise ?", mots: ["controle", "inspecteur", "inspection", "code du travail", "sanction", "loi", "regles"] }
        ],
        modele: "Le médecin du travail vérifie que le travail n'abîme pas la santé des salariés. L'inspecteur du travail contrôle que l'entreprise respecte le Code du travail." }
    ]
  },
  retenir: [
    "Dans l'entreprise : l'employeur (responsable), le tuteur, le salarié compétent, le CSE, le SST.",
    "Service de santé au travail : médecin du travail, infirmier, IPRP. Ils préviennent, ils ne soignent pas.",
    "À l'extérieur : l'inspection du travail contrôle, la CSSM indemnise et conseille.",
    "En cas de problème : mon tuteur d'abord, puis l'employeur, mon professeur, le médecin du travail."
  ]
};

/* ---------------------------------------------------------------- C7 */
window.LECONS["cap/C7"] = {
  objectif: ["expliquer à quoi sert le suivi médical au travail", "dire quand ont lieu les visites", "expliquer à quoi sert un vaccin"],
  situation: {
    titre: "La convocation de Hachim",
    texte: [
      "Hachim vient d'être embauché comme agent de maintenance. Il reçoit une convocation : « Visite d'information et de prévention, jeudi à 8 h. »",
      "Il dit à son collègue : « Je ne suis pas malade, je n'y vais pas. Et mon rappel de vaccin, on verra plus tard. »"
    ],
    question: "À ton avis, Hachim peut-il ne pas y aller ?",
    choix: [
      ["Oui, il n'est pas malade.", "Il n'est pas malade, c'est vrai. On va voir que cette visite ne sert pas à soigner."],
      ["Non, cette visite est obligatoire.", "Tu as raison. On va voir à quoi elle sert."],
      ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
    ],
    suite: "Tu vas comprendre à quoi servent le suivi médical au travail et la vaccination."
  },
  idees: [
    {
      titre: "Le suivi médical vérifie que mon travail n'abîme pas ma santé",
      texte: [
        "Chaque salarié est suivi par le service de santé au travail. Ce suivi est obligatoire et gratuit pour le salarié. Il a lieu pendant le temps de travail.",
        "Son but est la prévention : repérer un problème avant qu'il ne devienne grave."
      ],
      exercice: { type: "choix", question: "À quoi sert le suivi médical au travail ?",
        choix: ["À soigner les salariés malades", "À vérifier que le travail n'abîme pas la santé", "À choisir qui sera licencié"], bon: 1,
        retour: "C'est de la prévention. Le médecin du travail est tenu au secret médical." }
    },
    {
      titre: "La première visite a lieu au début du contrat",
      texte: ["Tout nouveau salarié passe une visite d'information et de prévention."],
      schema: { type: "liste", lignes: [
        { picto: "sablier", nom: "Quand ?", texte: "Dans les 3 mois après l'embauche. Avant de commencer le travail pour les moins de 18 ans." },
        { picto: "trousse", nom: "Avec qui ?", texte: "Un médecin du travail ou un infirmier de santé au travail." },
        { picto: "papiers", nom: "Pour quoi faire ?", texte: "Faire le point sur ma santé, m'informer des risques de mon poste et des moyens de me protéger." }
      ] },
      exercice: { type: "cocher", question: "Coche ce qui se passe pendant la visite d'information et de prévention.",
        cartes: [["On m'interroge sur ma santé", true], ["On m'informe des risques de mon poste", true], ["On me donne un traitement pour ma grippe", false], ["On me dit comment me protéger", true], ["On me remet une attestation de suivi", true]],
        retour: "Hachim doit y aller : la visite est obligatoire, même s'il se sent en pleine forme." }
    },
    {
      titre: "Les postes à risques ont un suivi renforcé",
      texte: [
        "Certains postes exposent à des risques particuliers : travail en hauteur avec montage d'échafaudages, produits dangereux, amiante, risque électrique.",
        "Le salarié a alors un suivi individuel renforcé : un examen par le médecin du travail avant l'embauche, puis des visites plus rapprochées."
      ],
      exercice: { type: "trier", question: "Suivi simple ou suivi renforcé ?", cases: ["Suivi simple", "Suivi renforcé"],
        cartes: [["Un vendeur en magasin", 0], ["Un salarié exposé à l'amiante", 1], ["Une secrétaire", 0], ["Un salarié qui monte des échafaudages", 1], ["Un salarié exposé à des produits dangereux", 1]] }
    },
    {
      titre: "Un vaccin entraîne mon corps à se défendre",
      texte: ["Le vaccin fait découvrir au corps un microbe rendu inoffensif. Le corps apprend à le reconnaître."],
      schema: { type: "paliers", paliers: [
        { couleur: "#3a5a98", nom: "1. Le vaccin", texte: "On injecte un microbe affaibli ou un morceau de microbe : il ne rend pas malade." },
        { couleur: "#2a9d58", nom: "2. Le corps fabrique des anticorps", texte: "Ce sont ses armes contre ce microbe." },
        { couleur: "#7b2cbf", nom: "3. Le corps garde la mémoire", texte: "Si le vrai microbe arrive, la défense est rapide." },
        { couleur: "#f08a00", nom: "4. Le rappel", texte: "Il réveille la mémoire quand elle s'affaiblit." }
      ] },
      exercice: { type: "ordre", question: "Remets dans l'ordre.",
        cartes: ["Je reçois le vaccin", "Mon corps fabrique des anticorps", "Mon corps garde la mémoire du microbe", "Je fais un rappel quelques années plus tard"],
        retour: "Sans rappel, la mémoire s'efface peu à peu. Hachim ne doit pas remettre le sien à plus tard." }
    },
    {
      titre: "Je me vaccine pour moi et pour les autres",
      texte: [
        "Certains vaccins sont obligatoires, d'autres recommandés selon le métier. Sur un chantier, le tétanos se transmet par une plaie souillée par de la terre ou de la rouille : le vaccin protège.",
        "En me vaccinant, je protège aussi ceux qui ne peuvent pas l'être. Mes vaccins sont notés dans mon carnet de santé."
      ],
      schema: { type: "liste", lignes: [
        { picto: "operateur", nom: "Bâtiment, maintenance, espaces verts", texte: "Le tétanos : rappels à jour." },
        { picto: "trousse", nom: "Métiers du soin", texte: "L'hépatite B, obligatoire pour les soignants." }
      ] },
      exercice: { type: "choix", question: "Hachim se blesse avec un clou rouillé. Quel vaccin doit être à jour ?",
        choix: ["Le vaccin contre la grippe", "Le vaccin contre le tétanos", "Aucun, il suffit de laver"], bon: 1,
        retour: "Il faut nettoyer la plaie et vérifier son carnet de santé : le tétanos est une maladie grave." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Hachim me dit : « Je ne suis pas malade, je n'irai pas à la visite. » Tu lui réponds quoi ?",
        aides: ["Cette visite est", "Elle sert à", "On va t'expliquer"],
        idees: [
          { nom: "elle est obligatoire", indice: "a-t-il le choix d'y aller ?", mots: ["obligatoire", "oblige", "dois", "doit", "convocation"] },
          { nom: "elle sert à prévenir", indice: "à quoi sert-elle, s'il n'est pas malade ?", mots: ["prevention", "prevenir", "sante", "risques", "proteger", "informer", "verifier", "avant"] }
        ],
        modele: "Cette visite est obligatoire. Elle ne sert pas à te soigner : elle vérifie que ton travail n'abîme pas ta santé et on t'explique les risques de ton poste." },
      { question: "Dernière question : explique-moi comment marche un vaccin.",
        aides: ["Le vaccin contient", "Mon corps fabrique", "Si le vrai microbe arrive,"],
        idees: [
          { nom: "le microbe affaibli", indice: "qu'y a-t-il dans le vaccin ?", mots: ["microbe", "virus", "affaibli", "inoffensif", "morceau", "bacterie"] },
          { nom: "les anticorps et la mémoire", indice: "que fait le corps ?", mots: ["anticorps", "defense", "defendre", "memoire", "reconnait", "reconnaitre", "apprend", "arme"] },
          { nom: "le rappel", indice: "pourquoi revenir quelques années plus tard ?", mots: ["rappel"] }
        ],
        modele: "Le vaccin contient un microbe affaibli. Mon corps fabrique des anticorps et garde la mémoire. Si le vrai microbe arrive, je me défends vite. Le rappel réveille cette mémoire." }
    ]
  },
  retenir: [
    "Le suivi médical au travail est obligatoire, gratuit, et sert à prévenir.",
    "Visite d'information et de prévention : dans les 3 mois, avant l'embauche pour les mineurs.",
    "Postes à risques : suivi individuel renforcé par le médecin du travail.",
    "Vaccin : microbe inoffensif, anticorps, mémoire, rappel.",
    "Je garde mes vaccins à jour, surtout le tétanos sur un chantier."
  ]
};

/* ---------------------------------------------------------------- C8 */
window.LECONS["cap/C8"] = {
  objectif: ["citer les quatre actions du sauveteur, dans l'ordre", "donner l'alerte avec le bon numéro", "choisir le geste qui convient"],
  situation: {
    titre: "Un cri dans l'atelier",
    texte: [
      "Il est 10 h dans l'atelier de menuiserie. La scie circulaire tourne. Soudain, un cri : Salim se tient la main, il saigne beaucoup.",
      "Autour de lui, tout le monde est figé. Personne ne sait quoi faire. Toi, tu es à trois mètres."
    ],
    question: "Et toi, tu fais quoi en premier ?",
    choix: [
      ["Je cours vers Salim.", "C'est le réflexe du cœur. On va voir ce qu'il faut faire juste avant."],
      ["J'arrête la machine d'abord.", "Tu penses au danger qui est toujours là. C'est la première étape."],
      ["Je ne sais pas.", "Personne ne sait sans avoir appris. Cette leçon te donne les bases."]
    ],
    suite: "Tu vas apprendre les quatre actions du sauveteur. La vraie formation SST se fait avec un formateur, par la pratique."
  },
  idees: [
    {
      titre: "Le sauveteur agit toujours dans le même ordre",
      texte: ["Un sauveteur secouriste du travail (SST) suit quatre actions. L'ordre compte."],
      schema: { type: "paliers", paliers: [
        { couleur: "#d62828", nom: "1. Protéger", texte: "J'écarte le danger pour qu'il n'y ait pas d'autre victime." },
        { couleur: "#f08a00", nom: "2. Examiner", texte: "Je regarde l'état de la victime." },
        { couleur: "#3a5a98", nom: "3. Faire alerter ou alerter", texte: "J'appelle les secours ou je demande à quelqu'un de le faire." },
        { couleur: "#2a9d58", nom: "4. Secourir", texte: "Je fais le geste adapté en attendant les secours." }
      ] },
      exercice: { type: "ordre", question: "Remets les quatre actions dans l'ordre.",
        cartes: ["Protéger", "Examiner", "Faire alerter ou alerter", "Secourir"],
        retour: "Protéger d'abord : un sauveteur blessé ne peut plus aider personne." }
    },
    {
      titre: "Protéger : j'écarte le danger sans me mettre en danger",
      texte: [
        "Avant d'approcher, je cherche le danger : machine en marche, courant électrique, gaz, circulation, risque de chute.",
        "Je le supprime si je peux le faire sans risque : j'arrête la machine, je coupe le courant. Sinon, j'empêche les autres d'approcher."
      ],
      exercice: { type: "choix", question: "Salim s'est blessé à la scie, qui tourne encore. Que fais-tu en premier ?",
        choix: ["Je prends la main de Salim pour regarder", "J'appuie sur l'arrêt d'urgence de la machine", "Je cours chercher le professeur"], bon: 1,
        retour: "Machine arrêtée, plus personne ne peut se blesser. Ensuite seulement, je m'occupe de Salim." }
    },
    {
      titre: "Examiner : quatre questions sur la victime",
      texte: ["Je regarde la victime pour savoir ce qui est le plus urgent."],
      schema: { type: "liste", lignes: [
        { nom: "Saigne-t-elle beaucoup ?", texte: "Le sang coule sans s'arrêter." },
        { nom: "S'étouffe-t-elle ?", texte: "Elle ne peut plus parler ni respirer." },
        { nom: "Répond-elle ?", texte: "Je lui parle, je lui demande de serrer ma main." },
        { nom: "Respire-t-elle ?", texte: "Je regarde si son ventre et sa poitrine se soulèvent." }
      ] },
      exercice: { type: "cocher", question: "Coche les questions que se pose le sauveteur en examinant la victime.",
        cartes: [["Saigne-t-elle beaucoup ?", true], ["Respire-t-elle ?", true], ["Quel âge a-t-elle ?", false], ["Répond-elle quand je lui parle ?", true], ["S'étouffe-t-elle ?", true]],
        retour: "Salim répond et respire, mais il saigne beaucoup : c'est le saignement qui est urgent." }
    },
    {
      titre: "Alerter : le bon numéro et le bon message",
      texte: ["Tous ces numéros sont gratuits. Je ne raccroche jamais le premier."],
      schema: { type: "liste", lignes: [
        { picto: "telephone", nom: "15 : le SAMU", texte: "Pour une urgence médicale." },
        { picto: "camion", nom: "18 : les pompiers", texte: "Pour un accident, un incendie." },
        { picto: "sirene", nom: "112 : le numéro d'urgence européen", texte: "Il marche partout en Europe, depuis tous les téléphones." },
        { picto: "papiers", nom: "114 : par SMS", texte: "Pour les personnes sourdes ou qui ne peuvent pas parler." }
      ] },
      exercice: { type: "ordre", question: "Remets le message d'alerte dans l'ordre.",
        cartes: ["Je dis qui je suis et d'où j'appelle", "Je dis où se trouve l'accident", "Je dis ce qui s'est passé et l'état de la victime", "J'écoute les consignes et j'attends qu'on me dise de raccrocher"],
        retour: "L'adresse précise est l'information la plus importante : sans elle, les secours ne peuvent pas venir." }
    },
    {
      titre: "Secourir : le geste dépend de ce que j'ai vu",
      texte: ["En attendant les secours, le sauveteur fait un geste simple. Ces gestes s'apprennent avec un formateur."],
      schema: { type: "liste", lignes: [
        { picto: "pansement", nom: "Elle saigne beaucoup", texte: "J'appuie fort sur la plaie, avec un tissu propre, et je l'allonge." },
        { nom: "Elle ne répond pas mais respire", texte: "Je la mets sur le côté, en position latérale de sécurité." },
        { nom: "Elle ne répond pas et ne respire pas", texte: "Massage cardiaque et défibrillateur." },
        { nom: "Elle s'est brûlée", texte: "Je fais couler de l'eau sur la brûlure." }
      ] },
      exercice: { type: "choix", question: "Salim saigne beaucoup de la main. Que fait le sauveteur ?",
        choix: ["Il appuie fort sur la plaie avec un tissu propre", "Il lui donne à boire", "Il attend sans rien faire"], bon: 0,
        retour: "Appuyer arrête le saignement en attendant les secours. Avec la formation SST, tu sauras faire tous ces gestes." }
    }
  ],
  sms: {
    intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
    questions: [
      { question: "Tu appelles les secours pour Salim. Écris-moi ce que tu dis au téléphone.",
        aides: ["Bonjour, je m'appelle", "Je suis à", "Un élève s'est"],
        idees: [
          { nom: "le lieu", indice: "où doivent venir les secours ?", mots: ["lycee", "atelier", "adresse", "chirongui", "tani malandi", "menuiserie", "suis a"] },
          { nom: "ce qui s'est passé", indice: "qu'est-il arrivé à Salim ?", mots: ["scie", "coupe", "coupure", "main", "accident", "blesse"] },
          { nom: "l'état de la victime", indice: "comment va Salim ?", mots: ["saigne", "sang", "conscient", "respire", "parle", "repond"] }
        ],
        modele: "Bonjour, je m'appelle Ali. Je suis à l'atelier de menuiserie du lycée de Chirongui. Un élève s'est coupé la main avec une scie. Il saigne beaucoup, il est conscient." },
      { question: "Dernière question : donne-moi les quatre actions du sauveteur, dans l'ordre.",
        aides: ["D'abord, je", "Ensuite, j'", "Puis", "Enfin, je"],
        idees: [
          { nom: "protéger", indice: "que fait-on du danger ?", mots: ["proteger", "protege", "danger", "arreter la machine", "securiser"] },
          { nom: "examiner", indice: "que regarde-t-on ?", mots: ["examiner", "examine", "regarde", "victime", "respire", "saigne"] },
          { nom: "alerter", indice: "qui appelle-t-on ?", mots: ["alerter", "alerte", "appeler", "appelle", "15", "18", "112", "secours", "samu", "pompiers"] },
          { nom: "secourir", indice: "que fait-on en attendant ?", mots: ["secourir", "secours", "geste", "appuyer", "aider"] }
        ],
        modele: "D'abord je protège en arrêtant le danger. Ensuite j'examine la victime. Puis j'alerte les secours. Enfin je secours avec le bon geste." }
    ]
  },
  retenir: [
    "Les quatre actions du sauveteur : protéger, examiner, faire alerter, secourir.",
    "Protéger d'abord : j'écarte le danger sans me mettre en danger.",
    "Examiner : saigne-t-elle ? s'étouffe-t-elle ? répond-elle ? respire-t-elle ?",
    "Alerter : 15 (SAMU), 18 (pompiers), 112, 114 par SMS. Je donne le lieu précis.",
    "Les gestes de secours s'apprennent en formation SST."
  ]
};
