/**
 * JS mirror of docs/asset-pack/design-tokens.json — the CSS custom properties in
 * globals.css are the source of truth. Use this only where a literal hex is
 * required (e.g. an alpha-appended inline style) and `var()` can't be used.
 */
export const tokens = {
  colors: {
    ink: "#050607",
    charcoal: "#111418",
    offWhite: "#F4F0E8",
    magenta: "#FF135D",
    blue: "#2E8CFF",
    burgundy: "#6E1F32",
    copper: "#C97854",
    amber: "#D99A54",
  },
  imageOverlay:
    "linear-gradient(90deg, rgba(5,6,7,.92) 0%, rgba(5,6,7,.38) 45%, rgba(5,6,7,.05) 100%)",
} as const;
