# 5D Athlete asset pack

Production-ready, text-free visual assets for the 5D Athlete website.

## Install

Copy the `public/assets/5d` folder into the repository's `public/assets` folder. The files then resolve from `/assets/5d/...`.

## Structure

- `home`: main 5D hero
- `sports`: chess, PürInstinct and squash cards
- `squash`: 5D Squash platform hero
- `elite`: hero and supporting scenes
- `school`: hero and supporting scenes
- `corpo`: hero and supporting scenes
- `icons`: text-free 5D mark and icon sprite

Use `asset-manifest.json` as the source of truth for paths. Use `design-tokens.json` for the approved palette and image overlay.

## Important implementation rule

All titles, prices, buttons, labels and financial popups must remain HTML. Do not bake text into image files. This keeps the site editable, responsive and accessible.

## Icon sprite

Inline `5d-icons.svg`, then reference symbols with `<use href="#racket" />`. Available ids: `racket`, `ball`, `glasses`, `clock`, `people`, `location`, `meal`, `music`, `skills`, `decision`, `community`, `mind`, `soul`, `school`, `briefcase`.

## Visual separation

- Élite and École: black, magenta and restrained blue
- Corpo: charcoal, muted burgundy, copper and warm amber
- Squash balls: black in every image
