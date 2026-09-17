# 5D Athlete — Guide de configuration

Ce site fonctionne intégralement **en mode démonstration** sans aucune
configuration externe : la navigation, les pages et les formulaires
fonctionnent dès `npm install && npm run dev`. Ce guide explique comment
brancher les intégrations réelles quand elles sont prêtes.

## Démarrage local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:3000.

Scripts disponibles :

- `npm run dev` — serveur de développement
- `npm run build` — build de production
- `npm run start` — sert le build de production
- `npm run lint` — ESLint

## Structure du projet

```
src/app/                     routes (App Router)
  squash/                     hub 5D Squash
  squash/elite/               page Élite + onboarding
  squash/ecole/                page École
  squash/corpo/                 page Corpo
src/components/               composants partagés + ui/ (Button, Field, Modal…)
src/components/forms/         formulaires (onboarding, école, corpo, proposition d'équipe)
src/lib/firebase.ts           intégration Firebase (lazy, optionnelle)
src/lib/payment.ts            intégration paiement (interface, mode démo)
src/hooks/useEspaceYDeals.ts  mode présentation Espace Y
public/assets/5d/             images et icônes (voir docs/asset-pack/)
```

## Variables d'environnement

Copiez `.env.example` vers `.env.local` et remplissez les valeurs
nécessaires :

```bash
cp .env.example .env.local
```

Toutes les variables sont optionnelles. Sans elles, le site reste
pleinement fonctionnel en mode démo.

### Firebase (Firestore)

1. Créez un projet sur https://console.firebase.google.com.
2. Ajoutez une application Web au projet.
3. Copiez les valeurs de configuration fournies dans `NEXT_PUBLIC_FB_*`
   (`.env.local`) et dans les variables d'environnement Vercel.
4. Activez Firestore (mode production) et configurez des règles de
   sécurité appropriées pour les collections utilisées par ce site :
   `elite-onboarding`, `elite-team-proposals`, `ecole-requests`,
   `corpo-requests`.
5. Une fois `NEXT_PUBLIC_FB_API_KEY` et `NEXT_PUBLIC_FB_PROJECT_ID`
   définies, `src/lib/firebase.ts` bascule automatiquement de
   localStorage vers Firestore pour tous les formulaires — aucun autre
   changement de code n'est requis.

### Fournisseur de paiement

Aucun fournisseur de paiement réel n'est branché. `src/lib/payment.ts`
définit l'interface (`createPayment`) et retourne un paiement simulé tant
que `NEXT_PUBLIC_PAYMENT_PROVIDER` n'est pas défini.

Pour brancher un fournisseur réel (ex. Stripe) :

1. Créez un compte chez le fournisseur choisi et récupérez ses clés API.
2. Ajoutez les clés secrètes côté serveur (jamais avec le préfixe
   `NEXT_PUBLIC_`) dans les variables d'environnement Vercel.
3. Définissez `NEXT_PUBLIC_PAYMENT_PROVIDER` (ex. `stripe`).
4. Implémentez l'appel réel dans `createPayment()` (`src/lib/payment.ts`),
   typiquement via une route API Next.js qui crée une session de paiement
   hébergée côté fournisseur. Ne collectez jamais de numéro de carte
   directement dans ce codebase — utilisez toujours une page/élément
   hébergé par le fournisseur (Stripe Checkout / Elements ou équivalent).

**Aucun paiement réel n'est jamais initié par cette base de code tant que
cette implémentation n'est pas complétée.**

### Mode présentation Espace Y

Les sections « Entente à discuter » (Élite, École, Corpo) sont masquées
en tout temps sur le site public. Pour les afficher temporairement lors
d'une présentation :

- Ouvrez n'importe quelle page avec `?presentation=espace-y` dans l'URL
  (ex. `https://votre-domaine.com/squash/elite?presentation=espace-y`).
  Le mode reste actif pour le reste de la session de navigation
  (`sessionStorage`), même en changeant de page.
- Ou définissez `NEXT_PUBLIC_SHOW_ESPACE_Y_DEALS=true` pour un
  environnement de déploiement dédié à la présentation (à ne jamais
  activer sur le domaine public).

## Déploiement (Vercel)

1. Poussez ce dépôt sur GitHub (déjà fait).
2. Importez le projet dans Vercel.
3. Ajoutez les variables d'environnement ci-dessus dans les paramètres du
   projet Vercel (Production / Preview selon le besoin).
4. Déployez — aucune configuration supplémentaire n'est requise, le
   projet est un site Next.js standard (App Router).

## Assets

Le pack d'images `5D-athlete-site-assets-v1.zip` (à la racine du dépôt)
a été décompressé dans `public/assets/5d/`. Référez-vous à
`docs/asset-pack/asset-manifest.json` pour les chemins et à
`docs/asset-pack/design-tokens.json` pour la palette de couleurs. Aucune
image ne contient de texte — tous les titres, prix et boutons sont en
HTML pour rester éditables et accessibles.
