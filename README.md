# RENDU
Le lien de ton dépôt GitHub, contenant le projet et ton notes.md.

# Projet React de zéro
**Pourquoi ce kata**
Ton dernier contact avec React remonte au lundi de la semaine 10. Entre-temps : SQL, conception, Express, PostgreSQL. Quatre semaines, dont deux de vacances.

Or mardi matin, le TP 2 te demande de reconstruire un écran en React.

Ce kata remet les réflexes en place. Il reste volontairement simple : uniquement du front, aucune API, aucune donnée à aller chercher. Le but n'est pas de te mettre en difficulté, c'est de refaire les gestes de base pour qu'ils soient là mardi.

Garde ton guide Adataviz React ouvert à côté. Ce kata est fait pour être fait avec, pas de mémoire.

# Le sujet : AdaRando
Une page qui affiche une liste de randonnées. C'est tout.

Le fichier *randonnees.json* t'est fourni : 12 randonnées, avec *nom*, *difficulte*, *duree_h*, *denivele_m*, *region* et *balisee*.

## Les étapes
**1 — Créer le projet**
Depuis un dossier vide, avec **Vite**. Modèle React, en JavaScript.

Lance le serveur de développement, vérifie que la page par défaut s'affiche, puis vide-la : supprime le contenu de *App.jsx* et le *CSS* de démonstration.

C'est la partie que le starter fera à ta place en semaine 15. La faire une fois te fera gagner du temps.

**2 — Un premier composant**
Crée un composant *Entete* qui affiche un titre et une phrase de présentation. Rien de dynamique, juste du JSX.

Affiche-le depuis *App*.

Les trois pièges de la semaine 10, à vérifier dès maintenant :

*className* et non *class*
Un composant commence par une majuscule
Le JSX ne renvoie qu'un seul élément racine

**3 — Une carte, avec des props**
Crée *CarteRando*, qui reçoit une randonnée et affiche son nom, sa difficulté, sa durée et son dénivelé.

Place *randonnees.json* dans **src/** et importe-le :

*import randonnees from './randonnees.json'*;
Affiche d'abord une seule carte, en passant randonnees[0]. Vérifie que ça marche avant d'aller plus loin.

La question à te poser : qu'est-ce que ce composant a besoin de savoir pour faire son travail ? Rien de plus que la randonnée qu'on lui donne.

**4 — La liste**
Crée *ListeRandos*, qui reçoit le tableau complet en *props* et affiche une CarteRando par randonnée.

C'est ici qu'intervient **.map()** — et la **key**.

Ta hiérarchie ressemble maintenant à ça :

App
├── Entete
└── ListeRandos          ← reçoit le tableau
    └── CarteRando       ← reçoit une randonnée
5 — Un affichage conditionnel
Dans CarteRando, affiche une mention « Balisée » uniquement si balisee vaut true.

Trois randonnées sur douze ne le sont pas : vérifie que la mention n'apparaît que sur les bonnes.

**6 — Un quatrième composant**
Sors la difficulté dans son propre composant, EtiquetteDifficulte, qui reçoit la difficulté en props et l'affiche.

C'est un composant minuscule, et c'est volontaire : un composant n'a pas besoin d'être gros pour être utile.

**Bonus**
Si tu as fini et que tu veux aller plus loin :

Un compteur « 12 randonnées » dans l'en-tête
Un style différent selon la difficulté
Un useState avec des boutons pour filtrer par difficulté
Le troisième bonus est celui qui se rapproche le plus de mardi. Mais ne le commence pas si les six étapes ne sont pas solides.

Les questions de révision
Dans un fichier notes.md, réponds avec tes mots :

Qu'est-ce qu'une prop ? D'où vient-elle, et qui décide de sa valeur ?
Pourquoi React a besoin d'une key sur les éléments d'une liste ?
EtiquetteDifficulte est tout petit. Qu'est-ce qu'on gagne à en faire un composant ?
Pourquoi className et pas class ?
En une phrase : qu'est-ce qui te revient facilement, et qu'est-ce que tu avais oublié ?
Rendu
Le lien de ton dépôt GitHub, contenant le projet et ton notes.md.

⚠️ Vérifie que node_modules n'est pas versionné.


