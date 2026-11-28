/* ============================================================
   MES OUTILS : les méthodes de la PSE et les verbes de consigne
   ============================================================
   Ce fichier se modifie comme les autres : on change le texte entre guillemets.

   VERBES : chaque verbe de consigne, avec
     c      : le numéro de la compétence (1 à 6)
     faire  : ce que l'élève doit faire quand il lit ce verbe
     debut  : une façon de commencer sa réponse
     ex     : un exemple de consigne
   Le nom du verbe doit être écrit exactement comme dans js/competences.js.

   OUTILS : chaque méthode, avec
     lettres  : les cases de l'outil [lettre, mot, question à se poser]
     exemple  : une situation, puis l'outil rempli [case, réponse]
     question : un petit exercice pour vérifier que l'on a compris
   ============================================================ */
window.OUTILS = {
  titre: "Mes outils",
  intro: "Voici les outils de la PSE. Ils t'aident à analyser une situation, étape par étape. Choisis un outil pour voir comment il marche.",
  sousTitre: "Les méthodes pour analyser une situation, et les verbes de consigne",

  /* L'objectif de chaque compétence, rappelé dans la fenêtre d'un verbe */
  buts: {
    1: "Trouver la bonne information dans un document, sans rien inventer.",
    2: "Comprendre une situation en la découpant avec une méthode.",
    3: "Relier deux idées et montrer le lien entre elles.",
    4: "Trouver une solution qui répond vraiment au problème.",
    5: "Défendre un choix avec de bonnes raisons.",
    6: "Me faire comprendre, à l'écrit ou à l'oral, avec les mots du cours."
  },

  verbes: {
    /* ----- C1 ----- */
    "Relever": { c: 1, faire: "Je recopie une information du document, comme elle est écrite. Je n'invente rien.", debut: "Dans le document, je lis : « … »", ex: "Relève deux risques dans le document." },
    "Repérer": { c: 1, faire: "Je cherche l'information dans le document. Je la souligne, je l'entoure ou je la note.", debut: "Je repère dans le document : …", ex: "Repère l'âge de la victime dans le texte." },
    "Identifier": { c: 1, faire: "Je trouve de quoi on parle et je donne son nom exact.", debut: "Il s'agit de …", ex: "Identifie le danger sur la photo." },
    "Citer": { c: 1, faire: "Je donne des exemples, sans expliquer. Je regarde bien le nombre demandé.", debut: "Premier exemple : … Deuxième exemple : …", ex: "Cite deux équipements de protection." },
    "Indiquer": { c: 1, faire: "Je donne l'information demandée en quelques mots, sans détailler.", debut: "La réponse est : …", ex: "Indique le numéro à appeler en cas d'urgence." },
    "Nommer": { c: 1, faire: "Je donne le nom exact, avec le mot appris en cours.", debut: "Cela s'appelle …", ex: "Nomme l'organe qui pompe le sang." },
    "Lister": { c: 1, faire: "J'écris tous les éléments demandés, les uns sous les autres.", debut: "Un tiret par élément.", ex: "Liste les dépenses de Naïma ce mois-ci." },

    /* ----- C2 ----- */
    "Analyser": { c: 2, faire: "Je découpe la situation en morceaux pour la comprendre. J'utilise un outil : QQOQCP, PAD ou ITAMaMi.", debut: "Je choisis mon outil, puis je remplis chaque case.", ex: "Analyse la situation de travail de Kassim." },
    "Identifier le problème": { c: 2, faire: "Je dis ce qui ne va pas dans la situation, en une seule phrase.", debut: "Le problème est que …", ex: "Identifie le problème posé dans la situation." },
    "Compléter le schéma": { c: 2, faire: "Je place chaque information de la situation dans la bonne case du schéma.", debut: "Je lis le titre de chaque case avant d'écrire.", ex: "Complète le schéma du processus d'apparition d'un dommage." },
    "Repérer les causes": { c: 2, faire: "Je cherche ce qui a provoqué le problème. Les causes viennent avant le problème.", debut: "Le problème arrive à cause de …", ex: "Repère les causes de l'accident." },
    "Repérer les conséquences": { c: 2, faire: "Je cherche ce que le problème entraîne. Les conséquences viennent après le problème.", debut: "À cause de ce problème, …", ex: "Repère les conséquences du manque de sommeil." },

    /* ----- C3 ----- */
    "Expliquer": { c: 3, faire: "Je dis pourquoi ou comment. J'utilise « car », « parce que » ou « donc ».", debut: "… car …", ex: "Explique pourquoi le casque est obligatoire." },
    "Mettre en relation": { c: 3, faire: "Je relie deux informations et je dis ce qui les lie.", debut: "D'un côté … De l'autre … Donc …", ex: "Mets en relation le bruit de l'atelier et la fatigue de Samir." },
    "Montrer le lien": { c: 3, faire: "Je montre qu'une chose entraîne l'autre.", debut: "… entraîne …", ex: "Montre le lien entre le tabac et l'essoufflement." },
    "Dire pourquoi": { c: 3, faire: "Je donne la raison. Ma réponse contient « parce que » ou « car ».", debut: "Parce que …", ex: "Dis pourquoi il faut trier ses déchets." },
    "Comparer": { c: 3, faire: "Je dis ce qui est pareil et ce qui est différent entre deux choses.", debut: "Les deux … Mais …", ex: "Compare les deux contrats de téléphone." },
    "Déduire": { c: 3, faire: "Je pars de ce que je sais pour trouver une conclusion.", debut: "Donc …", ex: "Déduis le risque pour la santé d'Inaya." },

    /* ----- C4 ----- */
    "Proposer": { c: 4, faire: "Je donne une solution qui répond au problème de la situation.", debut: "Pour régler ce problème, il faut …", ex: "Propose une solution pour protéger Kassim." },
    "Indiquer une mesure": { c: 4, faire: "Je donne une action précise pour éviter le risque ou pour protéger la personne.", debut: "Une mesure possible : …", ex: "Indique une mesure de prévention contre le bruit." },
    "Citer une solution": { c: 4, faire: "Je donne une solution, sans l'expliquer. Elle doit aller avec le problème.", debut: "Une solution : …", ex: "Cite une solution pour mieux dormir." },
    "Conseiller": { c: 4, faire: "Je dis à la personne ce qu'elle devrait faire. Mon conseil est adapté à sa situation.", debut: "Je lui conseille de …", ex: "Conseille Soula pour son petit déjeuner." },

    /* ----- C5 ----- */
    "Argumenter": { c: 5, faire: "Je donne plusieurs raisons pour défendre une idée.", debut: "D'abord … Ensuite … Enfin …", ex: "Argumente en faveur du port du casque." },
    "Justifier": { c: 5, faire: "Je prouve ma réponse avec une raison ou une information du document.", debut: "… parce que le document dit que …", ex: "Justifie ta réponse à l'aide du document." },
    "Donner son avis et l'expliquer": { c: 5, faire: "Je dis ce que je pense, puis je donne au moins une raison.", debut: "Je pense que … parce que …", ex: "Donne ton avis sur ce crédit et explique-le." },
    "Choisir et justifier": { c: 5, faire: "Je choisis une seule réponse, puis je dis pourquoi c'est la meilleure.", debut: "Je choisis … car …", ex: "Choisis la meilleure solution et justifie ton choix." },

    /* ----- C6 ----- */
    "Rédiger": { c: 6, faire: "J'écris des phrases complètes : une majuscule, un verbe, un point.", debut: "Je fais des phrases courtes, avec les mots du cours.", ex: "Rédige un message pour prévenir ton employeur." },
    "Présenter": { c: 6, faire: "Je montre mon travail de façon claire et rangée, pour que l'on me comprenne vite.", debut: "Je commence par le titre, puis je vais dans l'ordre.", ex: "Présente ta réponse dans un tableau." },
    "Expliquer à l'oral": { c: 6, faire: "Je parle fort et lentement. Je regarde la personne et j'utilise les mots du cours.", debut: "Je vais vous expliquer …", ex: "Explique à l'oral la conduite à tenir." },
    "Décrire": { c: 6, faire: "Je dis ce que je vois, dans l'ordre, sans donner mon avis.", debut: "Sur l'image, je vois …", ex: "Décris la situation de travail de Yanis." }
  },

  /* La situation qui sert d'exemple pour tous les outils */
  situation: "Lundi matin, dans l'atelier du lycée, Kassim découpe une planche à la scie circulaire. L'atelier est bruyant. Kassim ne porte pas ses lunettes de protection. Un éclat de bois saute et le blesse à l'œil.",

  liste: [
    {
      id: "qqoqcp", nom: "Le QQOQCP", sigle: "Q", court: "Six questions pour décrire une situation",
      sert: "Le QQOQCP sert à décrire une situation sans rien oublier. Je me pose six questions, toujours les mêmes.",
      quand: "Je l'utilise au début, quand on me demande d'analyser une situation ou d'identifier un problème.",
      lettres: [
        ["Q", "Qui ?", "Qui est concerné ?"],
        ["Q", "Quoi ?", "Que se passe-t-il ? Quel est le problème ?"],
        ["O", "Où ?", "Dans quel lieu ?"],
        ["Q", "Quand ?", "À quel moment ?"],
        ["C", "Comment ?", "De quelle façon cela se passe-t-il ?"],
        ["P", "Pourquoi ?", "Pour quelle raison ? Quelle est la cause ?"]
      ],
      exemple: [
        ["Qui ?", "Kassim, un élève."],
        ["Quoi ?", "Il est blessé à l'œil par un éclat de bois."],
        ["Où ?", "Dans l'atelier du lycée."],
        ["Quand ?", "Lundi matin."],
        ["Comment ?", "En découpant une planche à la scie circulaire."],
        ["Pourquoi ?", "Il ne porte pas ses lunettes de protection."]
      ],
      astuce: "Je réponds à chaque question avec les mots de la situation. Si une réponse n'est pas dans le texte, je ne l'invente pas.",
      question: { type: "choix", question: "Dans le QQOQCP, quelle question me fait chercher le lieu ?", choix: ["Où ?", "Quand ?", "Qui ?"], bon: 0, retour: "« Où ? » me fait chercher le lieu. « Quand ? » me fait chercher le moment." }
    },
    {
      id: "pad", nom: "Le schéma du PAD", sigle: "PAD", court: "Comprendre comment un accident arrive",
      sert: "PAD veut dire « processus d'apparition d'un dommage ». Ce schéma montre, étape par étape, comment une personne se blesse.",
      quand: "Je l'utilise pour analyser un accident ou un risque, au travail ou à la maison.",
      lettres: [
        ["1", "Le danger", "Qu'est-ce qui peut faire du mal ?"],
        ["2", "L'opérateur", "Quelle personne est exposée au danger ?"],
        ["3", "La situation dangereuse", "Que fait la personne près du danger ?"],
        ["4", "L'événement dangereux", "Que se passe-t-il qui déclenche l'accident ?"],
        ["5", "Le dommage", "Quelle est la blessure ?"]
      ],
      exemple: [
        ["Le danger", "Les éclats de bois projetés par la scie."],
        ["L'opérateur", "Kassim."],
        ["La situation dangereuse", "Kassim découpe une planche sans lunettes de protection."],
        ["L'événement dangereux", "Un éclat de bois saute vers son visage."],
        ["Le dommage", "Une blessure à l'œil."]
      ],
      astuce: "Le danger est une chose. Le dommage est une blessure. Je ne les confonds pas.",
      lien: { texte: "M'entraîner avec le jeu du PAD", href: "#/jeu/pad" },
      question: { type: "choix", question: "Dans le schéma du PAD, qu'est-ce que le dommage ?", choix: ["La blessure", "La machine", "La personne"], bon: 0, retour: "Le dommage, c'est la blessure. La personne, c'est l'opérateur." }
    },
    {
      id: "itamami", nom: "L'ITAMaMi", sigle: "I", court: "Quatre cases pour décrire un travail",
      sert: "L'ITAMaMi sert à décrire une situation de travail. Je regarde quatre choses : la personne, ce qu'elle fait, avec quoi, et dans quel lieu.",
      quand: "Je l'utilise pour analyser une situation de travail et chercher d'où vient le problème.",
      lettres: [
        ["I", "Individu", "Qui travaille ? Son âge, sa formation, son expérience."],
        ["Ta", "Tâche", "Que doit faire la personne ?"],
        ["Ma", "Matériel", "Avec quels outils, quelles machines, quels produits ?"],
        ["Mi", "Milieu", "Dans quel lieu ? Avec quel bruit, quelle chaleur, quels horaires ?"]
      ],
      exemple: [
        ["Individu", "Kassim, un élève qui apprend son métier."],
        ["Tâche", "Découper une planche."],
        ["Matériel", "Une scie circulaire, une planche. Il n'a pas ses lunettes de protection."],
        ["Milieu", "L'atelier du lycée, le lundi matin, dans le bruit."]
      ],
      astuce: "Pour retenir : I, Ta, Ma, Mi. L'Individu fait sa Tâche avec du Matériel, dans un Milieu.",
      question: { type: "choix", question: "Dans l'ITAMaMi, où est-ce que je range « la scie circulaire » ?", choix: ["Matériel", "Milieu", "Tâche"], bon: 0, retour: "La scie est un outil : elle va dans « Matériel ». L'atelier, lui, va dans « Milieu »." }
    },
    {
      id: "ishikawa", nom: "Le diagramme d'Ishikawa", sigle: "5M", court: "Chercher toutes les causes d'un problème", schema: "poisson",
      sert: "Ce diagramme ressemble à une arête de poisson. La tête, c'est le problème. Chaque arête est une famille de causes. Il y a cinq familles, qui commencent toutes par M.",
      quand: "Je l'utilise quand un problème a plusieurs causes et que je veux toutes les trouver. On s'en sert surtout en Bac Pro.",
      lettres: [
        ["M", "Main-d'œuvre", "Les personnes : formation, fatigue, expérience."],
        ["M", "Matériel", "Les machines et les outils."],
        ["M", "Matière", "Ce que l'on transforme ou que l'on utilise."],
        ["M", "Méthode", "La façon de faire, les consignes."],
        ["M", "Milieu", "Le lieu : bruit, lumière, chaleur, place."]
      ],
      exempleTitre: "Le problème : Kassim est blessé à l'œil. Voici des causes possibles.",
      exemple: [
        ["Main-d'œuvre", "Kassim apprend encore son métier. Il n'a pas mis ses lunettes."],
        ["Matériel", "La scie circulaire projette des éclats."],
        ["Matière", "Le bois fait des éclats quand on le coupe."],
        ["Méthode", "Personne n'a vérifié les protections avant de commencer."],
        ["Milieu", "L'atelier est bruyant. C'est difficile de se concentrer."]
      ],
      astuce: "J'écris le problème dans la tête du poisson. Ensuite, je cherche au moins une cause par arête.",
      question: { type: "choix", question: "Dans le diagramme d'Ishikawa, que met-on dans la tête du poisson ?", choix: ["Le problème", "Les solutions", "Le nom de l'élève"], bon: 0, retour: "La tête du poisson, c'est le problème. Les arêtes sont les causes." }
    }
  ]
};
