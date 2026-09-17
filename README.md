# 5D Athlete — by Dominique Soucy

Site officiel de 5D Athlete. Construit avec Next.js (App Router),
TypeScript et Tailwind CSS.

Cinq dimensions, un seul athlète : **Skills, Decision Making, Community,
Mind, Soul.** Le site présente la plateforme 5D Squash (formules Élite,
École et Corpo) et met en avant deux projets en développement, 5D Échecs
et 5D PürInstinct.

## Démarrage rapide

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Configuration (Firebase, paiement, mode présentation)

Voir **[SETUP.md](./SETUP.md)** pour le guide complet. En résumé : le
site fonctionne entièrement en mode démonstration sans configuration —
Firebase et le fournisseur de paiement sont des intégrations prêtes à
brancher, pas des prérequis.

## Routes

| Route | Description |
| --- | --- |
| `/` | Accueil — les cinq dimensions et les trois sports |
| `/squash` | Hub 5D Squash — Élite / École / Corpo |
| `/squash/elite` | 5D Squash Élite (soirées invitation) |
| `/squash/elite/onboarding` | Inscription Élite |
| `/squash/ecole` | 5D Squash École (sorties scolaires) |
| `/squash/corpo` | 5D Squash Corpo (événements d'entreprise) |
| `/confidentialite` | Politique de confidentialité |
| `/conditions` | Conditions d'utilisation |

## Déploiement

Compatible Vercel sans configuration additionnelle — voir SETUP.md.
