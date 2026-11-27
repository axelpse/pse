/* =====================================================================
   FICHIER À MODIFIER : la personnalisation par métier et par commune.
   ---------------------------------------------------------------------
   L'élève choisit son diplôme et sa commune dans « Mon profil ».
   Le site affiche alors, dans les modules C2 à C5, un encadré
   « Dans ton métier », et dans le module B2 un encadré « Chez toi ».

   IMPORTANT : n'effacez pas un métier et ne changez pas l'ORDRE de la
   liste (le code de reprise des élèves en dépend). Pour en ajouter un,
   mettez-le à la fin. Vous pouvez corriger tous les textes librement.
   ===================================================================== */

window.PERSO = {

  metiers: [
    {
      diplome: "CAP Menuisier", metier: "menuisier",
      risque: "le risque mécanique lié aux machines (coupure, écrasement)",
      c2: "En menuiserie, les accidents les plus fréquents sont les coupures aux mains avec les machines et les outils, les projections dans les yeux et les douleurs de dos en portant les panneaux. Les poussières de bois peuvent aussi provoquer une maladie professionnelle.",
      situation: {
        texte: "Saïd, apprenti menuisier, coupe une planche sur la scie circulaire de l'atelier. Le protecteur de la lame a été enlevé. La planche se coince et sa main glisse vers la lame.",
        danger: "La lame de la scie qui tourne",
        dangereuse: "Saïd travaille près de la lame sans protecteur",
        evenement: "La planche se coince et la main glisse",
        dommage: "Une coupure grave à la main"
      },
      collectives: "protecteur (carter) sur les lames, aspiration des poussières, poussoir pour guider le bois, arrêt d'urgence",
      epi: "lunettes de protection, protections auditives, masque anti-poussières, chaussures de sécurité",
      c5: "Tu portes des panneaux et des pièces lourdes, et tu travailles souvent penché sur l'établi. Règle la hauteur de l'établi, porte à deux les grands panneaux et utilise un chariot."
    },
    {
      diplome: "CAP Charpentier bois / Constructeur bois", metier: "charpentier",
      risque: "la chute de hauteur",
      c2: "En charpente, les accidents les plus graves sont les chutes de hauteur depuis la charpente ou l'échafaudage. Il y a aussi les coupures avec les machines portatives et les douleurs de dos en portant les pièces de bois.",
      situation: {
        texte: "Nadjima, apprentie charpentière, pose une panne sur une charpente à 4 mètres du sol. Il n'y a pas de garde-corps. Elle recule pour ajuster la pièce et pose le pied dans le vide.",
        danger: "La hauteur (le vide à 4 mètres)",
        dangereuse: "Nadjima travaille en hauteur sans garde-corps",
        evenement: "Elle recule et pose le pied dans le vide",
        dommage: "Une fracture ou un traumatisme grave"
      },
      collectives: "échafaudage avec garde-corps, filet de sécurité, plateforme de travail",
      epi: "harnais antichute, casque avec jugulaire, chaussures de sécurité, gants",
      c5: "Tu portes des pièces de bois longues et lourdes, souvent bras levés. Utilise une grue ou un palan, porte à deux et garde le dos droit."
    },
    {
      diplome: "CAP Couvreur", metier: "couvreur",
      risque: "la chute de hauteur",
      c2: "Sur un toit, l'accident le plus grave est la chute de hauteur : depuis le bord du toit, l'échelle, ou en passant à travers une tôle fragile. Il y a aussi les coupures avec les tôles et les malaises à cause de la chaleur.",
      situation: {
        texte: "Ibrahim, apprenti couvreur, remplace des tôles sur le toit d'une maison. Le bord du toit n'est pas protégé. Il marche sur une tôle mouillée et son pied glisse.",
        danger: "La hauteur (le bord du toit)",
        dangereuse: "Ibrahim travaille sur le toit sans protection de bord",
        evenement: "Son pied glisse sur la tôle mouillée",
        dommage: "Une fracture ou un traumatisme grave"
      },
      collectives: "échafaudage de pied, garde-corps en bord de toit, filet, échelle de toit fixée",
      epi: "harnais antichute, chaussures antidérapantes, gants anti-coupure, casquette et eau contre la chaleur",
      c5: "Tu montes des charges sur le toit et tu travailles accroupi ou à genoux, en plein soleil. Utilise un monte-matériaux, change souvent de position et bois de l'eau régulièrement."
    },
    {
      diplome: "CAP Métiers du plâtre et de l'isolation", metier: "plâtrier-plaquiste",
      risque: "la chute de hauteur",
      c2: "Dans les métiers du plâtre, on se blesse surtout en tombant d'un escabeau ou d'un échafaudage roulant, en se coupant avec le cutter, et en portant les plaques. Les poussières irritent aussi les yeux et les poumons.",
      situation: {
        texte: "Anli, apprenti plaquiste, visse une plaque au plafond. Il est monté sur un échafaudage roulant dont les roues ne sont pas bloquées. Il se penche pour atteindre le bord de la plaque et l'échafaudage bouge.",
        danger: "La hauteur (le plancher de l'échafaudage)",
        dangereuse: "Anli travaille en hauteur sur un échafaudage aux roues non bloquées",
        evenement: "Il se penche et l'échafaudage bouge",
        dommage: "Une fracture du poignet ou de la jambe"
      },
      collectives: "échafaudage roulant avec garde-corps et roues bloquées, plateforme individuelle roulante (PIRL), lève-plaques",
      epi: "casque, chaussures de sécurité, gants, lunettes et masque anti-poussières",
      c5: "Tu portes des plaques lourdes et tu travailles souvent les bras levés. Utilise un lève-plaques et un chariot, porte les plaques à deux et alterne les tâches."
    },
    {
      diplome: "CAP Peintre applicateur de revêtements", metier: "peintre",
      risque: "le risque chimique (peintures, solvants)",
      c2: "En peinture, on risque surtout les chutes depuis un escabeau ou un échafaudage, les intoxications et irritations avec les produits (peintures, solvants, décapants) et les douleurs d'épaule à force de travailler bras levés.",
      situation: {
        texte: "Faïza, apprentie peintre, nettoie ses pinceaux avec un solvant dans une petite pièce fermée. Elle ne porte ni gants ni masque. Le bidon se renverse sur ses mains et elle respire les vapeurs.",
        danger: "Le solvant (produit chimique)",
        dangereuse: "Faïza utilise le solvant sans protection dans une pièce fermée",
        evenement: "Le bidon se renverse",
        dommage: "Une brûlure de la peau et des maux de tête"
      },
      collectives: "aération et ventilation de la pièce, produits moins dangereux (peintures à l'eau), bidons fermés et étiquetés",
      epi: "gants adaptés au produit, masque à cartouche, lunettes, combinaison",
      c5: "Tu travailles bras levés et tu répètes les mêmes gestes. Utilise une perche, règle la hauteur de la plateforme et fais des pauses pour changer de position."
    },
    {
      diplome: "CAP Signalétique et décors graphiques", metier: "graphiste décorateur",
      risque: "le risque mécanique (coupure) et le risque de chute",
      c2: "En signalétique, on se blesse surtout en se coupant avec le cutter ou les machines de découpe, en tombant lors de la pose d'une enseigne en hauteur, et en respirant les encres, colles et solvants.",
      situation: {
        texte: "Moussa, apprenti en signalétique, découpe un adhésif au cutter sur la table. Il coupe vers sa main qui tient la règle. La lame dérape sur la règle.",
        danger: "La lame du cutter",
        dangereuse: "Moussa coupe en direction de sa main",
        evenement: "La lame dérape",
        dommage: "Une coupure profonde à la main"
      },
      collectives: "règle de sécurité avec protège-doigts, machines de découpe avec protecteur, nacelle ou échafaudage pour la pose, ventilation de l'atelier",
      epi: "gants anti-coupure, lunettes, masque pour les solvants, harnais pour la pose en hauteur",
      c5: "Tu restes longtemps devant l'écran, puis tu poses des panneaux bras levés. Règle ton siège et ton écran, fais des pauses et porte à deux les grands panneaux."
    },
    {
      diplome: "CAP Art et techniques de la bijouterie-joaillerie", metier: "bijoutier",
      risque: "le risque chimique (acides, produits de nettoyage)",
      c2: "En bijouterie, on risque surtout les brûlures avec le chalumeau, les projections dans les yeux pendant le polissage, les coupures, et les brûlures ou intoxications avec les acides.",
      situation: {
        texte: "Echati, apprentie bijoutière, plonge une bague dans un bain d'acide pour la nettoyer. Elle ne porte ni lunettes ni gants. La bague lui échappe et tombe dans le bain : l'acide éclabousse.",
        danger: "L'acide (produit chimique corrosif)",
        dangereuse: "Echati manipule l'acide sans lunettes ni gants",
        evenement: "La bague tombe et l'acide éclabousse",
        dommage: "Une brûlure de la peau ou des yeux"
      },
      collectives: "hotte aspirante, bacs avec couvercle, pinces pour tenir les pièces, produits étiquetés et rangés",
      epi: "lunettes de protection, gants résistants aux produits chimiques, blouse",
      c5: "Tu travailles longtemps assis, penché sur de très petites pièces. Règle ton siège et ton éclairage, utilise une loupe et fais des pauses pour reposer tes yeux et ta nuque."
    },
    {
      diplome: "CAP Interventions en maintenance technique des bâtiments", metier: "agent de maintenance",
      risque: "le risque électrique",
      c2: "En maintenance des bâtiments, tu fais un peu de tout : les risques sont l'électrisation, les chutes depuis un escabeau, les coupures avec les outils et les produits chimiques.",
      situation: {
        texte: "Kamal, apprenti en maintenance, remplace une prise électrique dans une salle de classe. Il n'a pas coupé le courant au tableau. Son tournevis touche un fil sous tension.",
        danger: "Le courant électrique",
        dangereuse: "Kamal travaille sur la prise sans avoir coupé le courant",
        evenement: "Le tournevis touche un fil sous tension",
        dommage: "Une électrisation (brûlure, malaise)"
      },
      collectives: "couper le courant et le vérifier (consignation), disjoncteur différentiel, balisage de la zone",
      epi: "gants isolants, outils isolés, chaussures de sécurité isolantes, écran facial",
      c5: "Tu changes souvent de tâche : porter, te baisser, travailler bras levés. Utilise un chariot et un escabeau adapté, et plie les genoux pour soulever."
    }
  ],

  // Les 17 communes de Mayotte (même règle : ne pas changer l'ordre)
  communes: ["Acoua", "Bandraboua", "Bandrélé", "Bouéni", "Chiconi", "Chirongui", "Dembéni", "Dzaoudzi", "Kani-Kéli", "Koungou", "Mamoudzou", "Mtsamboro", "M'Tsangamouji", "Ouangani", "Pamandzi", "Sada", "Tsingoni"],

  // Facultatif : une information propre à une commune, affichée dans le module B2.
  // Exemple :  "Chirongui": "Le point de rassemblement du lycée est le plateau sportif."
  infosCommune: {}
};
