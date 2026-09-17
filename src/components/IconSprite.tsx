import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Inlines the 5D icon sprite once (hidden) so <Icon /> instances can reference
 * symbols with <use href="#id" /> without a network round-trip per icon.
 */
export function IconSprite() {
  const svg = readFileSync(
    join(process.cwd(), "public/assets/5d/icons/5d-icons.svg"),
    "utf-8",
  );

  return (
    <div
      aria-hidden="true"
      className="hidden"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
