/* ============================================================
   LES COMPÉTENCES DE PSE (C1 à C6) — section commune à toutes les classes
   ------------------------------------------------------------
   Une fiche par compétence. Pour modifier un texte, changez
   seulement ce qui est entre guillemets.

   court     : la compétence dite avec les mots de l'élève
   officiel  : l'intitulé du programme (cap, bacpro)
   cestquoi  : l'explication, en phrases courtes
   verbes    : les mots de la consigne qui annoncent cette compétence
   methode   : les étapes à suivre, dans l'ordre
   exemple   : une consigne, une réponse fragile, une bonne réponse
   progresser: les conseils pour s'améliorer
   exercices : mêmes formats que dans les leçons (choix, trier, cocher, ordre)
   lien      : (facultatif) un endroit du site pour s'entraîner
   ============================================================ */
window.COMPETENCES = {
  titre: "Mes compétences",
  intro: "En PSE, tu es évalué sur six compétences, de C1 à C6. Une compétence, c'est quelque chose que tu sais faire. Quand tu connais les six, tu comprends ce que la consigne te demande.",
  attention: "Ne confonds pas : ici, C1 à C6 sont des compétences. Ce ne sont pas les modules C1 à C6 de la partie « Mon travail ».",
  // La grille utilisée pour te situer dans chaque compétence
  niveaux: [
    ["NT", "Non traité", "Je n'ai pas répondu à la question."],
    ["I", "Insuffisant", "J'ai essayé, mais ma réponse ne convient pas encore."],
    ["A", "Acceptable", "Ma réponse est juste, mais elle n'est pas complète."],
    ["M", "Maîtrisé", "Ma réponse est juste et complète."]
  ],
  liste: [
    {
      id: 1, picto: "papiers", court: "Je trouve la bonne information",
      officiel: { cap: "Traiter l'information.", bacpro: "Traiter une information." },
      cestquoi: [
        "On te donne un document : un texte, une image, un tableau, un graphique.",
        "Tu dois trouver l'information demandée dans ce document, et seulement celle-là.",
        "La réponse est dans le document. On ne te demande pas ton avis."
      ],
      verbes: ["Relever", "Repérer", "Identifier", "Citer", "Indiquer", "Nommer"],
      methode: [
        "Je lis la consigne et je souligne le verbe.",
        "Je regarde le document : son titre, sa source, sa date.",
        "Je cherche les mots de la consigne dans le document.",
        "Je recopie seulement ce qui est demandé."
      ],
      exemple: {
        doc: "« Kevin dort 5 heures par nuit. Un adolescent a besoin de 8 à 10 heures de sommeil. »",
        consigne: "Relève le besoin de sommeil d'un adolescent.",
        fragile: "Kevin ne dort pas assez.",
        bonne: "Un adolescent a besoin de 8 à 10 heures de sommeil.",
        pourquoi: "La première réponse donne un avis. La deuxième recopie l'information demandée."
      },
      progresser: [
        "Je surligne l'information dans le document avant d'écrire.",
        "Si la consigne dit « deux éléments », j'en donne deux, pas un seul.",
        "Je ne donne pas mon avis quand on me demande de relever."
      ],
      exercices: [
        { type: "cocher", question: "Quels verbes te demandent de chercher une information dans un document ?",
          cartes: [["Relever", true], ["Citer", true], ["Repérer", true], ["Argumenter", false], ["Proposer", false]],
          retour: "Relever, citer, repérer : la réponse est dans le document." },
        { type: "choix", question: "Document : « Le sol de l'atelier est mouillé. Samir glisse et se tord la cheville. » Consigne : relève la blessure de Samir.",
          choix: ["Il se tord la cheville.", "Le sol est mouillé.", "Il faut essuyer le sol."], bon: 0,
          retour: "La blessure est écrite dans le document. « Le sol est mouillé » est la cause, et « il faut essuyer » est un conseil." }
      ]
    },
    {
      id: 2, picto: "danger", court: "J'analyse une situation avec une méthode",
      officiel: { cap: "Appliquer une méthode d'analyse dans une situation donnée.", bacpro: "Appliquer une démarche d'analyse dans une situation donnée." },
      cestquoi: [
        "On te raconte une situation : un accident, un problème de santé, un achat.",
        "Tu dois la découper en morceaux avec un outil : les questions Qui ? Quoi ? Où ? Quand ? Comment ? Pourquoi ?, le schéma du PAD, ou les causes et les conséquences.",
        "L'outil t'aide à ne rien oublier."
      ],
      verbes: ["Analyser", "Identifier le problème", "Compléter le schéma", "Repérer les causes", "Repérer les conséquences"],
      methode: [
        "Je lis la situation en entier.",
        "Je prends l'outil demandé dans la consigne.",
        "Je remplis chaque case avec les mots de la situation.",
        "Je vérifie qu'aucune case n'est vide."
      ],
      exemple: {
        doc: "« Ce midi, Zaïna, cuisinière, fait frire des bananes dans la cuisine du restaurant. Elle accroche la casserole et se brûle le bras. »",
        consigne: "Analyse la situation : Qui ? Où ? Quand ? Quoi ?",
        fragile: "Zaïna s'est fait mal.",
        bonne: "Qui ? Zaïna, cuisinière. Où ? Dans la cuisine du restaurant. Quand ? Ce midi. Quoi ? Elle se brûle le bras avec de l'huile chaude.",
        pourquoi: "La bonne réponse répond à chaque question, une par une."
      },
      progresser: [
        "J'apprends par cœur les outils : les six questions et le schéma du PAD.",
        "Je réponds à une question à la fois.",
        "J'utilise les mots de la situation, je n'invente rien."
      ],
      lien: { texte: "M'entraîner avec le jeu du PAD", href: "#/jeu/pad" },
      exercices: [
        { type: "trier", question: "Cause ou conséquence ?", cases: ["Cause", "Conséquence"],
          cartes: [["Il dort 3 heures par nuit", 0], ["Il s'endort en atelier", 1], ["Le sol est mouillé", 0], ["Elle glisse et tombe", 1], ["Il ne porte pas ses gants", 0], ["Il se coupe la main", 1]],
          retour: "La cause vient avant. La conséquence, c'est ce qui arrive ensuite." },
        { type: "choix", question: "« Ce midi, Zaïna, cuisinière, se brûle le bras dans la cuisine du restaurant. » Que réponds-tu à la question « Où ? »",
          choix: ["Dans la cuisine du restaurant", "Ce midi", "Zaïna, cuisinière"], bon: 0,
          retour: "« Où ? » demande le lieu. « Ce midi » répond à « Quand ? », et « Zaïna » répond à « Qui ? »." }
      ]
    },
    {
      id: 3, picto: "lampe", court: "J'explique pourquoi",
      officiel: { cap: "Mettre en relation un phénomène physiologique, un enjeu environnemental, une disposition réglementaire, avec une mesure de prévention.", bacpro: "Expliquer un phénomène physiologique, un enjeu environnemental, une disposition réglementaire, en lien avec une mesure de prévention." },
      cestquoi: [
        "Tu dois montrer le lien entre ce qui se passe et la façon de se protéger.",
        "Ce qui se passe peut être dans le corps (le sommeil, le bruit dans l'oreille), dans l'environnement (le manque d'eau) ou dans la loi (une règle au travail).",
        "Tu utilises des mots qui relient : car, parce que, donc, c'est pourquoi."
      ],
      verbes: ["Expliquer", "Mettre en relation", "Montrer le lien", "Dire pourquoi"],
      methode: [
        "Je dis ce qui se passe.",
        "Je dis ce que cela provoque.",
        "Je relie à la mesure de prévention avec « donc »."
      ],
      exemple: {
        consigne: "Explique pourquoi on porte un casque antibruit à l'atelier.",
        fragile: "Parce que c'est mieux pour les oreilles.",
        bonne: "Un bruit très fort abîme les cellules de l'oreille, et ces cellules ne repoussent pas. Donc je porte un casque antibruit pour garder mon audition.",
        pourquoi: "La bonne réponse dit ce qui se passe dans l'oreille, puis elle relie à la protection avec « donc »."
      },
      progresser: [
        "J'écris toujours « parce que » ou « donc » dans ma réponse.",
        "J'utilise les mots du cours, pas « c'est mieux » ou « c'est important ».",
        "Je relis ma trace écrite : l'explication y est déjà."
      ],
      exercices: [
        { type: "ordre", question: "Remets l'explication dans l'ordre.",
          cartes: ["Le bruit est très fort dans l'atelier.", "Il abîme les cellules de l'oreille.", "Ces cellules ne repoussent pas.", "Donc je porte des protections."],
          retour: "D'abord ce qui se passe, puis ce que cela provoque, et enfin la prévention." },
        { type: "choix", question: "Quelle phrase explique vraiment pourquoi il faut dormir ?",
          choix: ["Pendant le sommeil, le corps récupère. Donc je suis plus attentif à l'atelier.", "Il faut dormir parce que c'est important.", "Il faut dormir 8 heures."], bon: 0,
          retour: "Une explication dit ce qui se passe dans le corps et ce que cela change. « C'est important » n'explique rien." }
      ]
    },
    {
      id: 4, picto: "trousse", court: "Je propose une solution",
      officiel: { cap: "Proposer une solution pour résoudre un problème lié à la santé, l'environnement ou la consommation.", bacpro: "Proposer une solution pour résoudre un problème." },
      cestquoi: [
        "On te montre un problème. Tu dois dire ce qu'il faut faire pour le régler.",
        "Une bonne solution est précise : elle dit qui fait quoi.",
        "Elle agit sur la cause du problème, et elle est possible dans la vraie vie."
      ],
      verbes: ["Proposer", "Indiquer une mesure", "Citer une solution", "Conseiller"],
      methode: [
        "Je repère le problème.",
        "Je cherche sa cause.",
        "Je propose une action précise qui agit sur cette cause.",
        "Je vérifie que ma solution est possible."
      ],
      exemple: {
        doc: "« Faïdine porte des sacs de ciment toute la journée. Il se bloque le dos. »",
        consigne: "Propose une solution pour protéger le dos de Faïdine.",
        fragile: "Il doit faire attention.",
        bonne: "Faïdine utilise un diable pour déplacer les sacs de ciment.",
        pourquoi: "« Faire attention » ne dit pas quoi faire. La bonne réponse donne une action précise qui réduit l'effort."
      },
      progresser: [
        "Je bannis « faire attention » et « être prudent » : c'est trop vague.",
        "Je commence ma solution par un verbe d'action : porter, nettoyer, ranger, éteindre.",
        "Je pense aux solutions du cours : protections collectives, protections individuelles, formation."
      ],
      exercices: [
        { type: "trier", question: "Solution précise ou trop vague ?", cases: ["Précise", "Trop vague"],
          cartes: [["Faire attention", 1], ["Porter des gants anti-coupure", 0], ["Être prudent", 1], ["Éteindre la lumière en sortant", 0], ["Faire des efforts", 1], ["Se coucher avant 22 h la veille du lycée", 0]],
          retour: "Une solution précise dit exactement quoi faire." },
        { type: "choix", question: "Le sol de la cuisine est gras. Zaïna glisse. Quelle est la meilleure solution ?",
          choix: ["Nettoyer le sol tout de suite et porter des chaussures antidérapantes", "Dire à Zaïna de regarder où elle marche", "Courir moins vite dans la cuisine"], bon: 0,
          retour: "Cette solution supprime la cause, le sol gras, et elle protège Zaïna." }
      ]
    },
    {
      id: 5, picto: "personnes", court: "Je défends mon choix",
      officiel: { cap: "Argumenter un choix.", bacpro: "Argumenter un choix." },
      cestquoi: [
        "On te demande de choisir, puis de dire pourquoi.",
        "Un argument, c'est une raison vraie. Elle vient du cours ou du document.",
        "« Parce que j'aime bien » ou « parce que c'est comme ça » ne sont pas des arguments."
      ],
      verbes: ["Argumenter", "Justifier", "Donner son avis et l'expliquer", "Choisir et justifier"],
      methode: [
        "Je donne mon choix.",
        "Je donne une raison avec « parce que ».",
        "J'ajoute un exemple ou un chiffre du document.",
        "Je termine par « donc »."
      ],
      exemple: {
        doc: "« Un téléphone coûte 300 euros. À crédit, Inaya paie 20 euros par mois pendant 18 mois, soit 360 euros. »",
        consigne: "Inaya doit-elle payer comptant ou à crédit ? Argumente ton choix.",
        fragile: "Comptant, c'est mieux.",
        bonne: "Je choisis de payer comptant, parce que le crédit coûte plus cher. Par exemple, à crédit, le téléphone revient à 360 euros au lieu de 300. Donc Inaya économise 60 euros.",
        pourquoi: "La bonne réponse donne le choix, une raison, un chiffre du document et une conclusion."
      },
      progresser: [
        "J'apprends la phrase modèle : « Je choisis… parce que… Par exemple… Donc… ».",
        "Je cherche mes arguments dans le document et dans le cours.",
        "Je donne au moins deux arguments quand la question compte beaucoup de points."
      ],
      exercices: [
        { type: "cocher", question: "Quels sont de vrais arguments pour porter un casque sur le chantier ?",
          cartes: [["Il protège la tête des chutes d'objets", true], ["Il est obligatoire sur le chantier", true], ["Parce que c'est comme ça", false], ["Mon ami en porte un", false]],
          retour: "Un vrai argument est une raison que tout le monde peut vérifier." },
        { type: "ordre", question: "Remets l'argumentation dans l'ordre.",
          cartes: ["Je choisis de payer comptant.", "Parce que le crédit coûte plus cher.", "Par exemple, je rembourse le prix et les intérêts.", "Donc je garde mon argent."],
          retour: "Mon choix, ma raison, mon exemple, puis ma conclusion." }
      ]
    },
    {
      id: 6, picto: "telephone", court: "Je m'exprime clairement",
      officiel: { cap: "Communiquer à l'écrit et à l'oral avec une syntaxe claire et un vocabulaire adapté.", bacpro: "Communiquer à l'écrit et à l'oral avec une syntaxe claire et un vocabulaire technique adapté." },
      cestquoi: [
        "Cette compétence compte dans toutes tes réponses, à l'écrit comme à l'oral.",
        "Tu fais des phrases complètes, que l'on comprend sans relire la question.",
        "Tu utilises les mots du cours : danger, dommage, prévention, et pas « truc » ou « machin »."
      ],
      verbes: ["Rédiger", "Présenter", "Expliquer à l'oral", "Décrire"],
      methode: [
        "Je reprends les mots de la question pour commencer ma phrase.",
        "J'utilise les mots du cours.",
        "Je mets une majuscule au début et un point à la fin.",
        "Je me relis. À l'oral, je parle fort et lentement."
      ],
      exemple: {
        consigne: "Qu'est-ce qu'un danger ?",
        fragile: "un truc qui fait mal",
        bonne: "Un danger est ce qui peut causer un dommage à une personne.",
        pourquoi: "La bonne réponse est une phrase complète. Elle reprend les mots de la question et un mot du cours : dommage."
      },
      progresser: [
        "J'apprends le vocabulaire de chaque module.",
        "Je relis ma réponse à voix basse : si elle sonne bizarre, je la corrige.",
        "Je m'entraîne à écrire avec le défi SMS de chaque module."
      ],
      exercices: [
        { type: "trier", question: "Mot du cours ou mot familier ?", cases: ["Mot du cours", "Mot familier"],
          cartes: [["le dommage", 0], ["un truc", 1], ["l'opérateur", 0], ["le machin", 1], ["la prévention", 0], ["ça fait bobo", 1]],
          retour: "Dans une copie, on attend les mots du cours." },
        { type: "choix", question: "« Pourquoi faut-il préparer un kit d'urgence ? » Quelle réponse est la mieux rédigée ?",
          choix: ["Il faut préparer un kit d'urgence pour tenir trois jours sans aide.", "pour tenir 3 jours", "Bah pour pas galérer quand y a le cyclone"], bon: 0,
          retour: "C'est une phrase complète : elle reprend les mots de la question, avec une majuscule et un point." }
      ]
    }
  ]
};
