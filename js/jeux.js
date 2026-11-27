/* =====================================================================
   FICHIER À MODIFIER : les jeux d'entraînement.
   ---------------------------------------------------------------------
   Le jeu du PAD : l'élève lit une situation puis place les étiquettes
   sur le schéma du processus d'apparition d'un dommage.

   Pour chaque situation :
     qui    : le titre court affiché dans la liste
     texte  : la situation (2 ou 3 phrases courtes)
     pad    : les 5 réponses attendues sur le schéma
              danger, operateur, dangereuse (situation dangereuse),
              evenement (événement dangereux), dommage
     pieges : facultatif. Étiquettes en trop, qui ne vont nulle part
              (par exemple la personne qui n'est PAS blessée).
     retour : la phrase de la mascotte quand le schéma est réussi

   Dans un niveau, « donne » liste les cases déjà remplies (aide).
   Ne changez pas l'ordre des situations déjà en ligne : la progression
   des élèves est enregistrée par numéro. Ajoutez les nouvelles à la fin.
   ===================================================================== */

window.JEUX = {
  pad: {
    titre: "Le jeu du PAD",
    consigne: "Lis la situation. Touche une étiquette, puis touche sa case sur le schéma.",
    reussite: 6, // nombre de situations réussies pour valider le jeu
    niveaux: [
      { nom: "Niveau 1 · Avec aide", aide: "Le danger et l'opérateur sont déjà placés.", donne: ["danger", "operateur"], situations: [
        { qui: "Zaïna, cuisinière à Mamoudzou",
          texte: "Zaïna fait cuire des bananes frites dans une grande casserole d'huile très chaude. Le manche de la casserole dépasse de la gazinière. En passant, Zaïna accroche le manche avec son bras. L'huile chaude se renverse sur son bras : elle est brûlée.",
          pad: { danger: "L'huile très chaude", operateur: "Zaïna", dangereuse: "Zaïna cuisine près de l'huile chaude, le manche dépasse", evenement: "Zaïna accroche le manche, l'huile se renverse", dommage: "Brûlure au bras" },
          retour: "Le manche qui dépasse, c'est ce qui rend la situation dangereuse. Tourné vers l'intérieur, il n'y aurait pas eu d'accident." },
        { qui: "Madi, agriculteur à Combani",
          texte: "Madi coupe des régimes de bananes avec un chombo (une machette). Il ne porte pas de gants. La lame du chombo glisse sur le tronc du bananier et touche sa main. Madi a une coupure profonde à la main.",
          pad: { danger: "La lame du chombo", operateur: "Madi", dangereuse: "Madi coupe des bananes avec un chombo, sans gants", evenement: "La lame glisse et touche sa main", dommage: "Coupure profonde à la main" },
          retour: "Le danger, c'est la lame coupante. La coupure, c'est le dommage : ne les confonds pas." }
      ] },
      { nom: "Niveau 2 · Je m'entraîne", aide: "À toi de placer les 5 étiquettes.", donne: [], situations: [
        { qui: "Anli, magasinier au port de Longoni",
          texte: "Anli range des cartons lourds sur une étagère très haute. Un carton est mal posé au bord de l'étagère. Il tombe sur la tête d'Anli. Anli a une plaie au front.",
          pad: { danger: "Le carton lourd, en hauteur", operateur: "Anli", dangereuse: "Anli travaille sous un carton mal posé", evenement: "Le carton tombe sur sa tête", dommage: "Plaie au front" },
          retour: "Un objet lourd placé en hauteur est un danger : il peut tomber." },
        { qui: "Fatima, agent d'entretien à Sada",
          texte: "Fatima verse de l'eau de Javel dans un seau pour nettoyer les toilettes. Elle ne porte pas de lunettes de protection. Le produit éclabousse et entre dans son œil droit. Son œil est rouge et il brûle : elle a une irritation de l'œil.",
          pad: { danger: "L'eau de Javel", operateur: "Fatima", dangereuse: "Fatima verse de l'eau de Javel sans lunettes", evenement: "Le produit éclabousse et entre dans son œil", dommage: "Irritation de l'œil" },
          retour: "Un produit chimique est un danger. Les lunettes auraient protégé son œil." },
        { qui: "Rachidi, mécanicien à Kawéni",
          texte: "Rachidi soulève une voiture avec un cric pour changer une roue. Le cric est posé sur un sol en terre. Le cric s'enfonce dans la terre. La voiture redescend d'un coup sur le pied de Rachidi. Rachidi a le pied écrasé.",
          pad: { danger: "La voiture soulevée, très lourde", operateur: "Rachidi", dangereuse: "Rachidi travaille près de la voiture, le cric est sur la terre", evenement: "Le cric s'enfonce, la voiture redescend sur son pied", dommage: "Pied écrasé" },
          retour: "Le cric qui s'enfonce déclenche l'accident : c'est l'événement dangereux." },
        { qui: "Ibrahim, apprenti électricien à Dembéni",
          texte: "Ibrahim doit changer une prise électrique dans une maison. Pour aller plus vite, il ne coupe pas le courant au disjoncteur. Avec son tournevis, il touche un fil électrique. Ibrahim reçoit une décharge électrique : il est électrisé et sa main est brûlée.",
          pad: { danger: "Le courant électrique", operateur: "Ibrahim", dangereuse: "Ibrahim change la prise sans couper le courant", evenement: "Son tournevis touche un fil électrique", dommage: "Électrisation et brûlure à la main" },
          retour: "Le courant ne se voit pas, mais c'est bien lui le danger." },
        { qui: "Nassur, peintre à Chirongui",
          texte: "Nassur peint le mur d'une maison. Il monte sur une échelle posée sur un sol en pente. Personne ne tient l'échelle. L'échelle glisse. Nassur tombe de 2 mètres. Il a une entorse à la cheville.",
          pad: { danger: "La hauteur", operateur: "Nassur", dangereuse: "Nassur peint sur une échelle posée sur un sol en pente", evenement: "L'échelle glisse, Nassur tombe", dommage: "Entorse à la cheville" },
          retour: "Quand on travaille en hauteur, le danger, c'est la hauteur elle-même." },
        { qui: "Echati, aide-soignante à Mamoudzou",
          texte: "Echati doit lever un patient lourd de son lit. Sa collègue est occupée : elle le soulève seule, le dos penché. En soulevant le patient, elle sent une très forte douleur dans le bas du dos. Le médecin dit qu'elle a un lumbago (blocage du dos).",
          pad: { danger: "Le poids du patient", operateur: "Echati", dangereuse: "Echati soulève le patient seule, le dos penché", evenement: "Elle force trop en soulevant le patient", dommage: "Lumbago (blocage du dos)" },
          retour: "Une charge lourde est un danger pour le dos, même sans machine ni produit." }
      ] },
      { nom: "Niveau 3 · Attention, deux personnes !", aide: "Une étiquette est en trop : l'opérateur, c'est la personne blessée.", donne: [], situations: [
        { qui: "Djamal et Saïd, boulangers à Dzaoudzi",
          texte: "Il est 4 h du matin. Djamal sort une plaque de pains du four. Il la pose sur le plan de travail pour la laisser refroidir. Saïd, son collègue, arrive en retard. Il ne sait pas que la plaque est encore brûlante. Il veut la déplacer à mains nues et la saisit. Saïd est brûlé aux deux mains.",
          pad: { danger: "La plaque brûlante", operateur: "Saïd", dangereuse: "Saïd est près de la plaque, il ne sait pas qu'elle est brûlante", evenement: "Saïd saisit la plaque à mains nues", dommage: "Brûlures aux deux mains" },
          pieges: ["Djamal"],
          retour: "Djamal a posé la plaque, mais c'est Saïd qui est blessé : l'opérateur, c'est Saïd." },
        { qui: "Moinécha et Kamal, agents des espaces verts à Tsingoni",
          texte: "Moinécha coupe l'herbe au bord de la route avec une débroussailleuse. Elle porte un casque, des lunettes et des gants. Kamal ramasse les déchets à côté d'elle. Il a enlevé ses lunettes car il avait trop chaud. La débroussailleuse projette un caillou. Le caillou touche Kamal à l'œil gauche : il est blessé à l'œil.",
          pad: { danger: "La débroussailleuse, qui projette des cailloux", operateur: "Kamal", dangereuse: "Kamal travaille près de la débroussailleuse, sans lunettes", evenement: "Un caillou est projeté et touche son œil", dommage: "Blessure à l'œil gauche" },
          pieges: ["Moinécha"],
          retour: "Moinécha tient la machine, mais c'est Kamal qui est blessé : l'opérateur, c'est Kamal." }
      ] }
    ]
  }
};
