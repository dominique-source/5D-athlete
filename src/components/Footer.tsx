import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-off-white/10 bg-charcoal">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-lg italic uppercase text-off-white">
            5D Athlete
          </p>
          <p className="mt-1 text-sm text-off-white/60">
            By Dominique Soucy — Build the complete athlete.
          </p>
        </div>
        <nav
          aria-label="Liens légaux"
          className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-off-white/70"
        >
          <Link href="/squash" className="hover:text-magenta">
            5D Squash
          </Link>
          <Link href="/confidentialite" className="hover:text-magenta">
            Confidentialité
          </Link>
          <Link href="/conditions" className="hover:text-magenta">
            Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
