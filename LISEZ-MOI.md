# La PSE avec Maki : site des élèves (prototype)

## Arborescence du site (ce que voit l'élève)

```
Accueil  ── bandeau « Cette semaine » (lien vers le module du jour)
 ├─ CAP
 │   ├─ A  L'individu responsable de son capital santé : A1 … A7
 │   ├─ B  L'individu dans son environnement : B1 … B4
 │   ├─ C  L'individu acteur des situations de travail : C1 … C8
 │   └─ D  L'individu consommateur averti : D1 … D3
 │        └─ Page module (ex. B2) : 📘 cours · ✏️ exercice · ✅ QCM · 🎧 audio · 🎬 short
 ├─ 2de Bac Pro / 1re Bac Pro / Tle Bac Pro (bientôt)
 ├─ Mon profil : avatar, pseudo, badges, code de reprise
 └─ Confidentialité + espace enseignant (boutons 🔗 pour Pronote)
```

Liens directs à coller dans Pronote :
- un module : `…/#/cap/B2`
- un QCM : `…/#/qcm/b2-1`
- un document : `…/docs/B2_seance2_alerte.pdf`

## Arborescence des fichiers

```
site_pse/
├─ index.html          page unique (ne pas modifier)
├─ css/style.css       couleurs et mise en page
├─ js/ressources.js    ← LE fichier à modifier : modules et ressources
├─ js/lecons.js        ← les leçons en écrans (situation, idées, exercices, je retiens)
├─ js/images.js        pictogrammes et illustrations des leçons (dessinés dans le site, rien à télécharger)
├─ js/lecons_A.js … lecons_D.js  ← les leçons des thématiques A, B, C et D (une leçon par module)
├─ js/competences.js  ← les six compétences C1 à C6 (section commune à toutes les classes)
├─ js/infos.js  ← les articles de « Je m'informe »
├─ js/jeux.js          ← le jeu du PAD : les situations à placer sur le schéma
├─ js/metiers.js       ← personnalisation : fiches métier des CAP et communes
├─ js/decor.js         illustrations (route, pictogrammes)
├─ js/qcm.js           QCM d'entraînement (générés depuis les exports Pronote)
├─ js/app.js           moteur du site (ne pas modifier)
└─ media/              (à créer) vidéos .mp4 et audios .mp3 intégrés aux leçons
```

## Ajouter une ressource
1. Pas de PDF sur le site : une leçon s'écrit dans `js/lecons.js` (modèle : B2).
2. Dans `js/ressources.js`, copier une ligne `{ num: …, type: …, titre: …, lien: … }`
   dans le bon module, avec le numéro suivant (ne jamais réutiliser un numéro).

## Modifier la phrase d'accueil
Dans `js/ressources.js`, ligne `objectif: "…"`.

## Accessibilité
Bouton « Écouter » (voix du téléphone, mot surligné), page Accessibilité (taille du texte,
lecture facilitée, contraste fort, sans animations, voix lente, lecture automatique des QCM).
Les PDF du dossier `docs/` ne sont pas lus par le bouton : préférer un audio pour les non-lecteurs.

## Données personnelles
Aucun compte, aucune statistique, aucun appel à un service extérieur.
Avatar et progression restent dans le navigateur de l'élève ; le code de reprise
les transporte d'un appareil à l'autre (avatar, thème, progression ; le pseudo
seulement s'il vient du bouton « Une idée », jamais un pseudo tapé à la main).

## Publication (à faire seulement avec l'accord de l'enseignant)
Forge des communs numériques éducatifs (forge.apps.education.fr) : nouveau projet,
dépôt de ce dossier, activation de GitLab Pages.

## Images dans les leçons

Dans `js/lecons.js`, chaque idée peut recevoir un pictogramme (`picto: "cyclone"`), une illustration du site (`dessin: "sirenes"`), une photo à vous (`image: { src: "media/photo.jpg", alt: "…", credit: "…" }`, jamais d'élève reconnaissable), un comptage en pictogrammes (`type: "compte"`) ou un graphique à barres (`type: "barres"`, toujours avec la source des chiffres). La liste des pictogrammes et les modèles sont en tête de `js/lecons.js`.

## L'exercice « SMS à Maki »

À la fin d'une leçon, l'élève écrit à la mascotte. Le site repère les idées attendues (liste de mots à écrire dans `js/lecons.js`, bloc `sms`), en acceptant les fautes courantes, puis montre une réponse modèle. Aucune IA, aucun envoi : le message reste dans le navigateur et disparaît quand l'élève quitte l'écran. Le site repère des idées, il ne note pas la qualité de l'écrit.

## Le schéma du PAD (module C3)

Trois usages du même schéma : le « reel » qui le construit plan par plan dans la leçon (`type: "reel"` dans `js/lecons.js`), l'exercice où l'élève place les étiquettes (`type: "pad"`), et le jeu du PAD avec ses 10 situations en 3 niveaux (`js/jeux.js`). Le jeu propose aussi la situation du métier choisi par l'élève (`js/metiers.js`). Pour remplacer la vidéo « bientôt » par votre reel filmé, renseignez `lien` dans le bloc `media` de l'idée 5 de C3.

## Les 22 modules de CAP

Chaque module a sa leçon. B2 et C3 sont dans `js/lecons.js`, les autres dans `js/lecons_A.js` à `js/lecons_D.js`.

Leçons qui reprennent les documents ou la progression de l'enseignant : A1, A2, A3, A4, A5, B1, B2, C1, C2, C3, C4, C5, C6, D1, D2.
Leçons écrites à partir du programme seul, à relire en priorité : A6, A7, B3, B4, C7, C8, D3.

Point à trancher pour A1 : la leçon PDF classe les comportements (tabac, alimentation) dans les facteurs internes, la progression les classe dans les facteurs externes. Le site suit la leçon PDF.

## La page d'un module

Elle affiche dans l'ordre : le titre, la mise en situation, l'objectif du module, puis une barre d'onglets (Cours, Exercices, QCM, Défi, Je retiens).

L'objectif se modifie dans la leçon, sur la ligne `objectif: ["…", "…", "…"]` (trois phrases courtes qui complètent « À la fin, je sais : »).

## Les compétences C1 à C6

La section « Mes compétences » est commune à toutes les classes. On y arrive depuis l'accueil et depuis la page de chaque classe.

Tout son contenu est dans `js/competences.js` : pour chaque compétence, l'explication, les mots de la consigne, la méthode, un exemple, les conseils et deux exercices. Les quatre niveaux (NT, I, A, M) se modifient en haut du même fichier.

## L'appli sur le téléphone

Une fois le site en ligne (en https), l'élève peut l'installer comme une appli : la page « Installer l'appli » lui montre les étapes sur iPhone et sur Android. L'appli fonctionne ensuite sans connexion.

- `manifest.webmanifest` : le nom et l'icône de l'appli.
- `img/` : l'icône Maki en trois tailles.
- `sw.js` : le mode hors connexion. Si vous ajoutez un fichier au site, ajoutez son nom dans la liste `FICHIERS` de ce fichier.

Ouvert directement depuis le dossier (double-clic sur `index.html`), le site marche, mais l'installation et le mode hors connexion ne s'activent qu'en ligne.

## Le compte de l'élève

À la première ouverture, l'écran d'entrée propose « Me connecter » et « Créer mon compte ». Le compte, c'est un identifiant tiré au hasard (un fruit ou un légume suivi d'un nombre, par exemple « Mangue 42 ») et un code secret de 4 à 8 chiffres qu'il choisit. Le code secret est ensuite demandé à chaque ouverture.

Ce compte est anonyme et reste dans le téléphone : rien n'est envoyé, aucune liste n'existe, et personne, même l'enseignant, ne peut relier un identifiant à un élève. Le site reste donc sans serveur et sans donnée personnelle.

Conséquences à connaître :
- un code secret oublié ne peut pas être retrouvé. L'élève crée alors un nouveau compte, puis retrouve sa progression avec son code de reprise s'il l'a noté ;
- pour changer de téléphone, l'élève touche « Me connecter » sur le nouveau, puis donne son identifiant, son code de reprise et un code secret ;
- le code secret empêche un camarade d'ouvrir le parcours sur un téléphone prêté. Ce n'est pas un coffre-fort.

La liste des fruits et légumes est dans `js/app.js`, sur la ligne `var FRUITS = [...]`.

## La première connexion

Après la création du compte, Maki présente la PSE et le site en deux écrans, puis l'élève choisit sa classe (CAP, 2de, 1re ou Tle Bac Pro), son diplôme, sa commune, son avatar et ses couleurs. Il peut tout modifier ensuite dans son profil.

L'accueil affiche ensuite les niveaux selon la classe choisie :
- un élève de CAP ne voit que le CAP ;
- un élève de Bac Pro voit sa classe et les années d'avant, ouvertes. Les années d'après restent fermées tant que toutes les années précédentes ne sont pas terminées.

Les niveaux Bac Pro n'ont pas encore de contenu : ils s'affichent avec la mention « bientôt ».

## Je m'informe

La rubrique « Je m'informe » propose de courts articles en lecture facile, classés en Santé, Environnement et Économie. Chaque article donne l'info en une phrase, quelques paragraphes très courts, un chiffre, un mot à retenir, une question et la source.

Tous les articles sont dans `js/infos.js`. Pour en ajouter un, copiez un bloc et changez les textes. Le premier de la liste est affiché « à la une » sur l'accueil.

Ces articles sont rédigés pour le site à partir de sources officielles. Ce ne sont pas des copies d'articles de presse, qui sont protégés par le droit d'auteur.

## Mes outils et les verbes de consigne

Tout se trouve dans le fichier `js/outils.js`.

- **Les verbes de consigne** : dans les fiches « Mes compétences », chaque verbe est un bouton. Quand l'élève le touche, une fenêtre lui rappelle ce qu'il doit faire, l'objectif de la compétence (C1 à C6), une façon de commencer sa réponse et un exemple de consigne. Pour changer une explication, modifiez le texte du verbe dans la partie `verbes`. Le nom du verbe doit être écrit exactement comme dans `js/competences.js`.
- **Mes outils** (carte sur la page d'accueil) : QQOQCP, schéma du PAD, ITAMaMi, diagramme d'Ishikawa, et la liste de tous les verbes. Chaque outil a ses cases (`lettres`), un exemple rempli (`exemple`) et une question (`question`). La situation d'exemple, commune aux quatre outils, est dans `situation`.
- Pour ajouter un outil, copiez un bloc de la partie `liste`, changez son `id` et ses textes.
