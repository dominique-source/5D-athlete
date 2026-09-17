/**
 * Mirror of docs/asset-pack/asset-manifest.json — keep in sync with that file,
 * which is the source of truth for asset paths.
 */
const basePath = "/assets/5d";

// Natural dimensions of homeHero — the title "5D ATHLETE" is baked into the
// image, so this ratio must stay intact wherever the image is displayed.
export const HOME_HERO_WIDTH = 1672;
export const HOME_HERO_HEIGHT = 941;

export const assets = {
  homeHero: `${basePath}/home/5d-athlete-homepage.png`,
  sportCards: {
    chess: `${basePath}/sports/chess-card.webp`,
    purinstinct: `${basePath}/sports/purinstinct-card.webp`,
    squash: `${basePath}/sports/squash-card.webp`,
  },
  squashPlatformHero: `${basePath}/squash/platform-hero.webp`,
  elite: {
    hero: `${basePath}/elite/hero.webp`,
    arrival: `${basePath}/elite/community-arrival.webp`,
    afterplay: `${basePath}/elite/afterplay-meal-dj.webp`,
  },
  school: {
    hero: `${basePath}/school/hero.webp`,
    stations: `${basePath}/school/skill-stations.webp`,
    team: `${basePath}/school/team-challenge.webp`,
  },
  corpo: {
    hero: `${basePath}/corpo/hero.webp`,
    challenge: `${basePath}/corpo/team-challenge.webp`,
    reception: `${basePath}/corpo/reception.webp`,
  },
  icons: `${basePath}/icons/5d-icons.svg`,
  mark: `${basePath}/icons/5d-mark.svg`,
} as const;

export type IconName =
  | "racket"
  | "ball"
  | "glasses"
  | "clock"
  | "people"
  | "location"
  | "meal"
  | "music"
  | "skills"
  | "decision"
  | "community"
  | "mind"
  | "soul"
  | "school"
  | "briefcase";
