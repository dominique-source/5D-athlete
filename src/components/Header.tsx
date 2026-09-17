import Link from "next/link";

const NAV_LINKS = [
  { href: "/squash", label: "5D Squash" },
  { href: "/squash/elite", label: "Élite" },
  { href: "/squash/ecole", label: "École" },
  { href: "/squash/corpo", label: "Corpo" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-off-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="font-display text-2xl italic uppercase tracking-tight text-off-white"
        >
          5D <span className="text-magenta">Athlete</span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide text-off-white/80 transition-colors hover:text-magenta"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/squash"
          className="hidden rounded-none border border-magenta px-4 py-2 text-xs font-semibold uppercase tracking-widest text-magenta transition-colors hover:bg-magenta hover:text-ink sm:inline-block"
        >
          Découvrir 5D Squash
        </Link>
      </div>
      <nav
        aria-label="Navigation mobile"
        className="flex gap-4 overflow-x-auto border-t border-off-white/10 px-4 py-2 md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="shrink-0 text-xs font-semibold uppercase tracking-wide text-off-white/80 hover:text-magenta"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
