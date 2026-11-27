/* =====================================================================
   FICHIER À MODIFIER : les leçons du site (sans PDF).
   ---------------------------------------------------------------------
   Une leçon = une SITUATION racontée par la mascotte, puis des IDÉES.
   Chaque idée tient sur un écran : un titre, un peu de texte, parfois un
   schéma ou un média, puis UN EXERCICE. À la fin : « Je retiens ».

   Clé de la leçon : "niveau/MODULE", par exemple "cap/B2".

   Dans une idée :
     titre    : la phrase-idée (courte)
     texte    : liste de paragraphes courts
     dessin   : facultatif. Nom d'une illustration du site (liste dans js/images.js) : "alerte_cyclone", "sirenes".
     image    : facultatif. Une photo à vous : { src: "media/photo.jpg", alt: "ce qu'on voit", credit: "Photo : …" }
                Jamais de photo où l'on reconnaît un élève.
     schema   : facultatif. Sept formes possibles (picto = nom d'un pictogramme de js/images.js, facultatif) :
                { type: "formule", termes: ["a", "b", "résultat"], notes: ["…", "…", "…"] }
                { type: "paliers", paliers: [{ couleur: "#…", nom: "…", texte: "…", picto: "…" }] }
                { type: "liste",   lignes:  [{ nom: "…", texte: "…", picto: "…" }] }
                { type: "compte",  lignes:  [{ picto: "eau", nombre: 6, texte: "6 litres d'eau par personne" }] }  (le picto est répété « nombre » fois)
                { type: "pad",     pad: { danger: "…", operateur: "…", dangereuse: "…", evenement: "…", dommage: "…" } }  (le schéma du PAD, rempli ou non)
                { type: "reel",    titre: "…", pad: { … }, plans: [{ texte: "…", montre: ["dommage"] }] }  (le schéma se construit plan par plan)
                { type: "barres",  titre: "…", unite: "%", source: "d'où viennent les chiffres", barres: [{ nom: "…", valeur: 12 }] }  (graphique à barres)
     Pictogrammes : cyclone, inondation, terrain, seisme, vague, volcan, telephone, sirene, radio, camion, usine, eau, lampe,
                trousse, papiers, medicaments, nourriture, chargeur, console, glace, sac, maison, personnes, nature, techno,
                danger, operateur, rencontre, eclair, pansement.
                Dans un exercice : 3e élément d'une carte (["Un séisme", 0, "seisme"]) ou pictos: ["…", "…"] pour un exercice « choix ».
     media    : facultatif. { type: "video" ou "audio", titre: "…", lien: "…" }
                lien = fichier (media/alerte.mp4, media/kit.mp3) ou adresse
                d'intégration d'une vidéo Tube apps.education. Vide = « bientôt ».
     exercice : cinq formes possibles :
                { type: "choix",  question, choix: ["…"], bon: 0, retour: "…" }       (bon = numéro de la bonne réponse, on compte à partir de 0)
                { type: "trier",  question, cases: ["A", "B"], cartes: [["texte", 0]] } (0 = première case, 1 = deuxième)
                { type: "cocher", question, cartes: [["texte", true]], retour: "…" }   (true = à cocher)
                { type: "ordre",  question, cartes: ["1er", "2e", "3e"], retour: "…" } (écrire dans le bon ordre : le site mélange)
                { type: "pad",    question, texte: "la situation", donne: ["operateur"], pad: { … }, retour: "…" } (l'élève place les étiquettes sur le schéma)

   Après les idées, facultatif : sms = l'élève écrit à la mascotte, qui repère les idées attendues.
     sms: { intro: "…", questions: [ { question: "…", aides: ["Début de phrase proposé si l'élève demande de l'aide"], modele: "la réponse que la mascotte aurait écrite",
            idees: [ { nom: "l'idée, telle que la mascotte la nomme", indice: "une question pour aider",
                       mots: ["mot", "ou expression", "qui montre que l'idée est là"] } ] } ] }
     Les mots s'écrivent sans majuscule ; le site accepte les accents oubliés, les pluriels et une petite faute.
     Rien n'est envoyé ni enregistré : le message de l'élève disparaît quand il quitte l'écran.
   ===================================================================== */

window.LECONS = {

  "cap/B2": {
    objectif: ["reconnaître un risque majeur", "comprendre les messages d'alerte", "dire quoi faire à chaque couleur de l'alerte cyclonique"],
    situation: {
      titre: "Alerte cyclonique à Chirongui",
      dessin: "alerte_cyclone",
      texte: [
        "Fatima a 16 ans. Elle est en CAP au lycée de Chirongui. Elle vit avec sa mère et son petit frère Anli, 8 ans.",
        "Lundi soir, son téléphone sonne très fort : c'est un message FR-Alert. Un cyclone approche de Mayotte. Le lendemain matin, la préfecture passe en alerte rouge.",
        "Sa mère est bloquée à Mamoudzou. Anli a dormi chez sa tante, à Mramadoudou. Fatima veut prendre son scooter pour aller le chercher."
      ],
      question: "Et toi, à la place de Fatima, tu ferais quoi ?",
      choix: [
        ["Je prends le scooter tout de suite, avant que le vent se lève.", "Beaucoup de gens auraient ce réflexe : on veut protéger sa famille. On va voir ensemble si c'est une bonne idée."],
        ["Je reste à la maison et j'appelle ma tante.", "Tu penses d'abord à te mettre à l'abri. On va voir ensemble si c'est le bon choix, et pourquoi."],
        ["Je ne sais pas trop.", "C'est normal d'hésiter : dans la panique, personne ne sait quoi faire. Cette leçon est faite pour ça."]
      ],
      suite: "Garde ta réponse en tête. À la fin de la leçon, tu sauras ce que Fatima doit faire."
    },

    idees: [
      {
        titre: "Un risque majeur, c'est rare mais très grave",
        texte: [
          "Un risque majeur est un événement rare, très grave, qui touche beaucoup de personnes en même temps.",
          "Pour qu'il y ait un risque majeur, il faut deux choses au même endroit : un aléa et des enjeux."
        ],
        schema: { type: "formule", termes: ["Aléa", "Enjeux", "Risque majeur"],
          notes: ["Le phénomène qui peut arriver : cyclone, séisme, inondation…", "Ce qui peut être touché : les personnes, les maisons, les écoles, les routes.", "L'aléa menace les enjeux."] },
        exercice: { type: "choix", question: "Un cyclone passe au milieu de l'océan, loin de toute île et de tout bateau. Est-ce un risque majeur ?",
          choix: ["Oui, car un cyclone est toujours un risque majeur", "Non, car il n'y a pas d'enjeux : ni personnes, ni maisons", "Oui, car le vent est très fort"], bon: 1,
          retour: "Sans enjeux, il n'y a pas de risque majeur. Le même cyclone sur Mayotte, lui, en est un." }
      },
      {
        titre: "Un risque peut être naturel ou technologique",
        texte: ["Il existe deux familles de risques majeurs."],
        schema: { type: "liste", lignes: [
          { picto: "nature", nom: "Risque naturel", texte: "Il vient de la nature : cyclone, séisme, inondation, volcan." },
          { picto: "techno", nom: "Risque technologique", texte: "Il vient d'une activité humaine : une usine, un dépôt de carburant, un camion qui transporte un produit dangereux." }
        ] },
        exercice: { type: "trier", question: "Range chaque événement dans la bonne case.", cases: ["Naturel", "Technologique"],
          cartes: [["Un séisme", 0, "seisme"], ["L'accident d'un camion-citerne de carburant", 1, "camion"], ["Un cyclone", 0, "cyclone"], ["Une explosion dans une usine", 1, "usine"], ["Le volcan sous la mer, près de Mayotte", 0, "volcan"]] }
      },
      {
        titre: "À Mayotte, plusieurs risques majeurs nous concernent",
        texte: [
          "Mayotte est une île tropicale et volcanique. En décembre 2024, le cyclone Chido l'a frappée : beaucoup de victimes et de dégâts.",
          "Voici les risques majeurs d'une commune comme Chirongui."
        ],
        schema: { type: "liste", lignes: [
          { picto: "cyclone", nom: "Cyclone", texte: "Vents très violents, fortes pluies, toits arrachés, arbres et fils électriques au sol." },
          { picto: "inondation", nom: "Inondation", texte: "Les rivières débordent après de fortes pluies. Les routes sont coupées." },
          { picto: "terrain", nom: "Mouvement de terrain", texte: "Le terrain glisse sur les pentes après la pluie." },
          { picto: "seisme", nom: "Séisme", texte: "La terre tremble. Des murs peuvent se fissurer ou tomber." },
          { picto: "vague", nom: "Submersion marine", texte: "La mer monte et envahit la côte pendant un cyclone." }
        ] },
        exercice: { type: "choix", question: "Pendant un cyclone, la mer monte et entre sur la côte. Comment s'appelle ce risque ?",
          choix: ["Le mouvement de terrain", "La submersion marine", "Le séisme"], pictos: ["terrain", "vague", "seisme"], bon: 1,
          retour: "La submersion marine : la mer envahit le littoral. La liste des risques de ta commune se trouve dans un document de la mairie, le DICRIM." }
      },
      {
        titre: "Je suis alerté par mon téléphone, les sirènes et la radio",
        texte: ["Trois moyens me préviennent du danger."],
        schema: { type: "liste", lignes: [
          { picto: "telephone", nom: "FR-Alert", texte: "Un message s'affiche sur mon téléphone avec une sonnerie forte, même en mode silencieux." },
          { picto: "sirene", nom: "Les sirènes", texte: "Début de l'alerte : un son qui monte et qui descend, répété 3 fois. Fin de l'alerte : un son continu de 30 secondes." },
          { picto: "radio", nom: "La radio et la télévision", texte: "Mayotte La 1ère et le site de la préfecture donnent les consignes." }
        ] },
        dessin: "sirenes",
        media: { type: "video", titre: "FR-Alert : que faire quand mon téléphone sonne ?", lien: "" },
        exercice: { type: "trier", question: "Début ou fin de l'alerte ?", cases: ["Début de l'alerte", "Fin de l'alerte"],
          cartes: [["Un son qui monte et qui descend, répété 3 fois", 0, "sirene"], ["Un son continu de 30 secondes", 1, "sirene"], ["Un message FR-Alert sur le téléphone", 0, "telephone"]] }
      },
      {
        titre: "Chaque couleur de l'alerte cyclonique me dit quoi faire",
        texte: ["À Mayotte, l'alerte cyclonique avance par couleurs. Plus la couleur est foncée, plus le danger est proche."],
        schema: { type: "paliers", paliers: [
          { couleur: "#f6c800", nom: "Vigilance jaune", texte: "Je m'informe. Je vérifie mon kit d'urgence." },
          { couleur: "#f08a00", nom: "Pré-alerte orange", texte: "Je fais des réserves d'eau et de nourriture. Je range ou j'attache ce qui peut s'envoler." },
          { couleur: "#d62828", nom: "Alerte rouge", texte: "Je reste à l'abri dans un endroit solide. Je ne me déplace plus, à pied comme en véhicule." },
          { couleur: "#7b2cbf", nom: "Alerte violette", texte: "Confinement total : personne ne sort, même pas les secours." },
          { couleur: "#5b6b6f", nom: "Phase de sauvegarde", texte: "Le cyclone est passé. Je reste prudent : fils électriques au sol, routes coupées, eau non potable." }
        ] },
        exercice: { type: "ordre", question: "Remets les phases dans l'ordre, de la première à la dernière.",
          cartes: ["Vigilance jaune", "Pré-alerte orange", "Alerte rouge", "Alerte violette", "Phase de sauvegarde"],
          retour: "Et Fatima ? Elle est en alerte rouge : elle ne doit pas prendre son scooter. Anli est à l'abri chez sa tante. En sortant, elle mettrait sa vie en danger : objets qui volent, arbres et fils électriques qui tombent." }
      },
      {
        titre: "Je prépare mon kit d'urgence avant l'alerte",
        texte: ["Le kit d'urgence permet de tenir 3 jours sans aide. Je le prépare avant l'alerte et je le range dans un sac facile à prendre."],
        schema: { type: "compte", lignes: [
          { picto: "eau", nombre: 6, texte: "6 litres d'eau par personne" },
          { picto: "nourriture", nombre: 3, texte: "De la nourriture qui se conserve, pour 3 jours" },
          { picto: "lampe", nombre: 1, texte: "Une lampe à piles" },
          { picto: "radio", nombre: 1, texte: "Une radio à piles" },
          { picto: "trousse", nombre: 1, texte: "Une trousse de secours" },
          { picto: "medicaments", nombre: 1, texte: "Les médicaments habituels" },
          { picto: "papiers", nombre: 1, texte: "Les papiers importants, dans un sac étanche" },
          { picto: "chargeur", nombre: 1, texte: "Un chargeur ou une batterie de secours" }
        ] },
        media: { type: "audio", titre: "Les bons réflexes en cas de cyclone", lien: "" },
        exercice: { type: "cocher", question: "Coche ce que la famille de Fatima doit mettre dans son kit d'urgence.",
          cartes: [["Des bouteilles d'eau", true, "eau"], ["Une console de jeux", false, "console"], ["Une lampe et une radio à piles", true, "lampe"], ["Des glaces et des yaourts", false, "glace"], ["Les papiers importants dans un sac étanche", true, "papiers"], ["Une trousse de secours", true, "trousse"], ["Les médicaments habituels", true, "medicaments"]],
          retour: "Dans le kit, on met ce qui aide à tenir 3 jours : de l'eau, de la lumière, de l'information, des soins et les papiers. Pas ce qui fond ou ce qui a besoin de courant." }
      }
    ],

    sms: {
      intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
      questions: [
        { question: "Fatima m'écrit : « Je prends mon scooter pour aller chercher Anli. » On est en alerte rouge. Tu lui réponds quoi, et pourquoi ?",
          aides: ["En alerte rouge, il faut", "Dehors, c'est dangereux parce que", "Anli est"],
          idees: [
            { nom: "rester à l'abri", indice: "où Fatima doit-elle rester ?",
              mots: ["abri", "abriter", "maison", "rester", "reste", "sors pas", "sort pas", "sortir pas", "bouge pas", "bouger pas", "interieur", "dedans", "confiner"] },
            { nom: "le danger dehors", indice: "qu'est-ce qui peut la blesser dehors, pendant le cyclone ?",
              mots: ["danger", "dangereux", "vent", "arbre", "fil electrique", "cable", "objets", "tole", "blesser", "mourir", "mort", "risque", "accident", "vie"] },
            { nom: "Anli est déjà en sécurité", indice: "où est Anli en ce moment ? Est-il en danger ?",
              mots: ["tante", "securite", "appeler", "appelle", "telephoner", "telephone"] }
          ],
          modele: "Ne sors pas ! En alerte rouge, on reste à l'abri. Dehors, le vent peut faire tomber des arbres et des fils électriques. Anli est en sécurité chez sa tante : appelle-la." },
        { question: "Maintenant, explique-moi ce que tu as appris : un cyclone arrive dans 2 jours. Tu fais quoi pour te préparer ?",
          aides: ["Pour m'informer, je", "Dans mon kit d'urgence, je mets", "Je fais des réserves de", "Dehors, je range"],
          idees: [
            { nom: "s'informer", indice: "comment sais-tu où en est l'alerte ?",
              mots: ["informer", "info", "radio", "fr alert", "prefecture", "tele", "television", "messages", "consignes", "ecouter"] },
            { nom: "le kit d'urgence", indice: "que prépares-tu dans un sac pour tenir 3 jours ?",
              mots: ["kit", "sac", "lampe", "trousse", "medicaments", "papiers", "chargeur", "piles"] },
            { nom: "les réserves d'eau et de nourriture", indice: "que faut-il pour boire et manger pendant 3 jours ?",
              mots: ["eau", "bouteilles", "nourriture", "manger", "reserves", "conserves", "provisions", "boire"] },
            { nom: "ranger ce qui peut s'envoler", indice: "que fais-tu des objets qui traînent dehors ?",
              mots: ["ranger", "range", "attacher", "attache", "envoler", "rentrer", "toles", "volets", "fenetres"] }
          ],
          modele: "J'écoute la radio et je regarde les messages de la préfecture. Je prépare mon kit d'urgence, je fais des réserves d'eau et de nourriture, et je range ce qui peut s'envoler." }
      ]
    },

    retenir: [
      "Risque majeur = aléa + enjeux. Il est rare, très grave, et touche beaucoup de personnes.",
      "À Mayotte : cyclone, inondation, mouvement de terrain, séisme, submersion marine.",
      "Je suis alerté par FR-Alert, les sirènes et la radio (Mayotte La 1ère).",
      "En alerte rouge, je reste à l'abri et je ne me déplace plus.",
      "Mon kit d'urgence est prêt avant l'alerte : il permet de tenir 3 jours."
    ]
  },

  "cap/C3": {
    objectif: ["repérer le danger, l'opérateur, l'événement dangereux et le dommage", "construire le schéma du PAD", "analyser une situation de travail"],
    situation: {
      titre: "L'huile brûlante de Zaïna",
      texte: [
        "Zaïna est cuisinière dans un restaurant à Mamoudzou. Ce midi, elle fait cuire des bananes frites dans une grande casserole d'huile très chaude.",
        "Le manche de la casserole dépasse de la gazinière. En passant, Zaïna l'accroche avec son bras.",
        "L'huile chaude se renverse sur son bras. Zaïna est brûlée."
      ],
      question: "À ton avis, cet accident, c'est…",
      choix: [
        ["De la malchance : ça peut arriver à tout le monde.", "Beaucoup de gens pensent ça. On va voir ensemble si c'est vraiment de la malchance."],
        ["Un accident qu'on pouvait éviter.", "Tu penses qu'on pouvait faire quelque chose avant. On va chercher quoi, ensemble."],
        ["Je ne sais pas.", "C'est normal d'hésiter. Cette leçon est faite pour ça."]
      ],
      suite: "Tu vas apprendre à lire un accident comme un pro de la prévention."
    },

    idees: [
      {
        titre: "Le danger, c'est ce qui peut faire du mal",
        texte: [
          "Un danger, c'est ce qui peut blesser ou rendre malade : un objet, une machine, un produit, le courant électrique, la hauteur.",
          "Dans la cuisine de Zaïna, le danger, c'est l'huile très chaude."
        ],
        schema: { type: "liste", lignes: [
          { picto: "danger", nom: "Le danger", texte: "Il est là avant l'accident. Tant qu'il existe, quelqu'un peut être blessé." }
        ] },
        exercice: { type: "cocher", question: "Coche tous les dangers.",
          cartes: [["La lame d'un chombo", true], ["Une coupure à la main", false], ["L'eau de Javel", true], ["Le courant électrique", true], ["Une brûlure", false], ["La hauteur d'un toit", true]],
          retour: "La coupure et la brûlure sont des blessures. Ce ne sont pas des dangers : ce sont des dommages." }
      },
      {
        titre: "L'opérateur est la personne exposée au danger",
        texte: [
          "L'opérateur, c'est la personne qui travaille près du danger. C'est elle qui peut être blessée.",
          "Quand l'opérateur et le danger sont au même endroit, c'est une situation dangereuse. L'accident n'est pas encore arrivé, mais il peut arriver."
        ],
        schema: { type: "formule", termes: ["Danger", "Opérateur", "Situation dangereuse"],
          notes: ["L'huile très chaude", "Zaïna", "Zaïna cuisine près de l'huile chaude, le manche dépasse"] },
        exercice: { type: "choix", question: "Madi coupe des bananes avec un chombo, sans gants. La lame glisse et touche sa main : il a une coupure profonde. Quelle est la situation dangereuse ?",
          choix: ["Madi coupe des bananes avec un chombo, sans gants", "La lame glisse et touche sa main", "Madi a une coupure profonde"], bon: 0,
          retour: "La situation dangereuse, c'est avant l'accident : Madi (l'opérateur) travaille avec la lame (le danger)." }
      },
      {
        titre: "L'événement dangereux déclenche l'accident",
        texte: [
          "L'événement dangereux, c'est le moment où tout bascule : ça glisse, ça tombe, ça se renverse, ça dérape.",
          "Pour Zaïna : elle accroche le manche et l'huile se renverse."
        ],
        schema: { type: "liste", lignes: [
          { picto: "rencontre", nom: "Situation dangereuse", texte: "Ça dure. Rien n'est encore arrivé." },
          { picto: "eclair", nom: "Événement dangereux", texte: "Ça arrive d'un coup. C'est le déclencheur." }
        ] },
        exercice: { type: "trier", question: "Situation dangereuse ou événement dangereux ?", cases: ["Situation dangereuse", "Événement dangereux"],
          cartes: [["Nassur peint sur une échelle posée sur un sol en pente", 0, "rencontre"], ["L'échelle glisse", 1, "eclair"], ["Fatima verse de l'eau de Javel sans lunettes", 0, "rencontre"], ["Le produit éclabousse son œil", 1, "eclair"], ["Le carton tombe de l'étagère", 1, "eclair"]] }
      },
      {
        titre: "Le dommage, c'est la blessure",
        texte: [
          "Le dommage, c'est ce que l'accident fait au corps : une brûlure, une coupure, une fracture, une entorse.",
          "Pour Zaïna, le dommage est la brûlure au bras. Attention : le danger existe avant l'accident, le dommage arrive à la fin."
        ],
        exercice: { type: "trier", question: "Danger ou dommage ?", cases: ["Danger", "Dommage"],
          cartes: [["La plaque brûlante du four", 0, "danger"], ["Une brûlure aux mains", 1, "pansement"], ["La hauteur", 0, "danger"], ["Une entorse à la cheville", 1, "pansement"], ["Le courant électrique", 0, "danger"], ["Un pied écrasé", 1, "pansement"]] }
      },
      {
        titre: "Le schéma du PAD raconte l'accident dans l'ordre",
        texte: [
          "PAD veut dire : processus d'apparition d'un dommage. C'est le chemin qui va du danger à la blessure.",
          "Regarde comment je construis le schéma de Zaïna. Touche « Lancer »."
        ],
        schema: { type: "reel", titre: "Je construis le schéma de Zaïna",
          pad: { danger: "L'huile très chaude", operateur: "Zaïna", dangereuse: "Zaïna cuisine près de l'huile chaude, le manche dépasse", evenement: "Zaïna accroche le manche, l'huile se renverse", dommage: "Brûlure au bras" },
          plans: [
            { texte: "Zaïna s'est brûlée avec de l'huile chaude. Je construis le schéma de son accident en 5 questions." },
            { texte: "1. Quelle est la blessure ? Une brûlure au bras. C'est le dommage : je l'écris dans la case 4.", montre: ["dommage"] },
            { texte: "2. Qui est blessé ? Zaïna. C'est l'opérateur.", montre: ["operateur"] },
            { texte: "3. Qu'est-ce qui l'a blessée ? L'huile très chaude. C'est le danger.", montre: ["danger"] },
            { texte: "4. Que faisait Zaïna près du danger ? Elle cuisinait, et le manche dépassait. C'est la situation dangereuse.", montre: ["dangereuse"] },
            { texte: "5. Qu'est-ce qui a tout déclenché ? Elle accroche le manche, l'huile se renverse. C'est l'événement dangereux.", montre: ["evenement"] },
            { texte: "Le schéma est fini. Je le relis dans l'ordre des numéros, de 1 à 4 : il raconte l'accident." }
          ] },
        media: { type: "video", titre: "Reel : je construis un schéma du PAD", lien: "" },
        exercice: { type: "ordre", question: "Remets le chemin de l'accident dans l'ordre.",
          cartes: ["La situation dangereuse", "L'événement dangereux", "Le dommage"],
          retour: "Situation dangereuse, puis événement dangereux, puis dommage : toujours dans cet ordre." }
      },
      {
        titre: "Ma méthode : je cherche d'abord la blessure",
        texte: ["Pour remplir un schéma, je me pose toujours les mêmes questions, dans cet ordre."],
        schema: { type: "liste", lignes: [
          { picto: "pansement", nom: "1. Quelle est la blessure ?", texte: "C'est le dommage." },
          { picto: "operateur", nom: "2. Qui est blessé ?", texte: "C'est l'opérateur." },
          { picto: "danger", nom: "3. Qu'est-ce qui l'a blessé ?", texte: "C'est le danger." },
          { picto: "eclair", nom: "4. Qu'est-ce qui a tout déclenché ?", texte: "C'est l'événement dangereux." }
        ] },
        exercice: { type: "pad", question: "À toi ! Touche une étiquette, puis touche sa case sur le schéma.",
          texte: "Madi coupe des régimes de bananes avec un chombo. Il ne porte pas de gants. La lame glisse sur le tronc et touche sa main. Madi a une coupure profonde à la main.",
          donne: ["operateur"],
          pad: { danger: "La lame du chombo", operateur: "Madi", dangereuse: "Madi coupe des bananes avec un chombo, sans gants", evenement: "La lame glisse et touche sa main", dommage: "Coupure profonde à la main" },
          retour: "Tu viens de remplir ton premier schéma du PAD. Dix autres t'attendent dans le jeu du PAD." }
      }
    ],

    sms: {
      intro: "À toi d'écrire ! Réponds-moi comme dans un SMS, avec tes mots. Les fautes ne comptent pas.",
      questions: [
        { question: "Nassur est peintre. Il monte sur une échelle posée sur un sol en pente. L'échelle glisse, il tombe et se fait une entorse à la cheville. Explique-moi : c'est quoi le danger, l'événement dangereux et le dommage ?",
          aides: ["Le danger, c'est", "L'événement dangereux, c'est quand", "Le dommage, c'est"],
          idees: [
            { nom: "le danger", indice: "qu'est-ce qui peut faire du mal à Nassur, avant même l'accident ?",
              mots: ["hauteur", "echelle", "haut", "pente"] },
            { nom: "l'événement dangereux", indice: "qu'est-ce qui se passe d'un coup et déclenche l'accident ?",
              mots: ["glisse", "glisser", "tombe", "tomber", "chute", "derape"] },
            { nom: "le dommage", indice: "quelle est la blessure de Nassur ?",
              mots: ["entorse", "cheville", "blessure", "blesse"] }
          ],
          modele: "Le danger, c'est la hauteur. L'événement dangereux, c'est quand l'échelle glisse et que Nassur tombe. Le dommage, c'est l'entorse à la cheville." },
        { question: "Dernière question : explique-moi avec tes mots la différence entre un danger et un dommage.",
          aides: ["Un danger, c'est ce qui", "Un dommage, c'est", "Par exemple,"],
          idees: [
            { nom: "le danger peut faire du mal", indice: "le danger, il est là avant ou après l'accident ? Que peut-il faire ?",
              mots: ["peut faire mal", "peut faire du mal", "peut blesser", "avant", "risque", "dangereux", "machine", "produit", "lame", "hauteur", "courant"] },
            { nom: "le dommage est la blessure", indice: "que reste-t-il sur le corps après l'accident ?",
              mots: ["blessure", "blesse", "brulure", "coupure", "fracture", "entorse", "apres", "sante", "corps", "resultat"] }
          ],
          modele: "Un danger, c'est ce qui peut faire du mal, comme une lame ou un produit. Un dommage, c'est la blessure après l'accident, comme une coupure ou une brûlure." }
      ]
    },

    retenir: [
      "Le danger, c'est ce qui peut faire du mal. L'opérateur, c'est la personne exposée.",
      "Danger + opérateur = situation dangereuse.",
      "L'événement dangereux déclenche l'accident : ça glisse, ça tombe, ça se renverse.",
      "Le dommage, c'est la blessure. Il arrive à la fin.",
      "Ma méthode : je cherche d'abord la blessure, puis la personne blessée, puis ce qui l'a blessée."
    ]
  }
};
