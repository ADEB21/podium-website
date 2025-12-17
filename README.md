# Podium — Monorepo (Front + Sanity)

Ce dépôt contient un **projet d’école** réalisé dans le cadre d’un travail mêlant :

- **Stratégie marketing**
- **UI/UX** (conception et prototypage)
- **Développement** (site front + CMS)

L’objectif du projet est de proposer un site vitrine connecté à un back-office de contenu, afin de pouvoir éditer facilement les pages et médias.

## Aperçu

- **Front** : site construit avec **Astro** + **React** (animations, navigation, pages statiques/hybrides)
- **CMS** : **Sanity Studio** pour gérer le contenu (documents, images, etc.)
- **Monorepo** : géré avec **pnpm workspaces**

## Structure du dépôt

- `packages/front` : application front (Astro/React)
- `packages/sanity` : Sanity Studio (back-office)

Les scripts à la racine orchestrent les commandes des deux packages.

## Prérequis

- **Node.js** (version récente recommandée)
- **pnpm**

## Installation

Depuis la racine du projet :

```bash
pnpm install
```

## Lancer le projet en développement

### Tout lancer (front + sanity)

```bash
pnpm dev
```

### Lancer uniquement le front

```bash
pnpm --dir packages/front dev
```

Le front démarre sur le port `3000` (script Astro : `astro dev --port 3000`).

### Lancer uniquement Sanity Studio

```bash
pnpm --dir packages/sanity dev
```

## Build / Preview

### Build tout le monorepo

```bash
pnpm build
```

### Build uniquement le front

```bash
pnpm build:front
```

### Build uniquement Sanity

```bash
pnpm build:sanity
```

## Variables d’environnement (Front)

Le front utilise des variables publiques pour configurer l’accès à Sanity.

Fichier d’exemple : `packages/front/.env.example`

Variables attendues :

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_STUDIO_DATASET`
- `PUBLIC_SANITY_READ_TOKEN`
- `PUBLIC_SANITY_API_VERSION`

En local, crée un fichier `packages/front/.env` (ou configure tes variables d’environnement) en te basant sur `.env.example`.

## Comment ça fonctionne (vue d’ensemble)

- **Sanity Studio** (dans `packages/sanity`) sert à créer/éditer le contenu.
- Le **front** (dans `packages/front`) consomme ce contenu via le client Sanity (requêtes API) et affiche les pages.
- Le monorepo te permet de développer les deux parties dans le même dépôt, avec des commandes unifiées.

## Notes

- Les fichiers `README.md` présents dans `packages/front` et `packages/sanity` sont les fichiers générés par les templates de démarrage (Astro/Sanity). Ce `README` (racine) est la documentation principale du projet.
