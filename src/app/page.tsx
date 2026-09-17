import Image from "next/image";
import { SportCard } from "@/components/home/SportCard";
import { assets } from "@/config/assets";

export default function HomePage() {
  return (
    <>
      {/* Visually hidden — the "5D Athlete" title is already baked into the
          hero image, this exists for accessibility/SEO only. */}
      <h1 className="sr-only">5D Athlete</h1>

      <section className="relative w-full bg-ink">
        {/* Height is capped at calc(100vh - header - ~90px peek) on desktop,
            but never allowed to exceed width * (941/1672) — otherwise a
            narrower-but-tall viewport would force object-cover to crop the
            sides instead of top/bottom, cutting into the "5D ATHLETE" title
            or the right-side scenes. */}
        <div className="relative aspect-[1672/941] w-full lg:aspect-auto lg:h-[min(calc(100vh-155px),calc(100vw*941/1672))] lg:min-h-[440px]">
          <Image
            src={assets.homeHero}
            alt="5D Athlete — un athlète s'élance pour un coup de squash, entouré de scènes de 5D Échecs et de 5D PürInstinct, avec le titre 5D Athlete"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-contain lg:object-cover"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-3 flex justify-center sm:bottom-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/70 px-3 py-1.5 text-[11px] font-medium tracking-wide text-off-white/80 uppercase backdrop-blur-sm">
              Explore les 3 sports
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="size-3"
                fill="none"
              >
                <path
                  d="M4 6l4 4 4-4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pt-8 pb-16 sm:px-6 sm:pt-10 sm:pb-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
            Nos plateformes
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl">Trois sports. Une méthode.</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SportCard title="5D Échecs" image={assets.sportCards.chess} comingSoon />
          <SportCard
            title="5D PürInstinct"
            image={assets.sportCards.purinstinct}
            comingSoon
          />
          <SportCard
            title="5D Squash"
            image={assets.sportCards.squash}
            href="/squash"
          />
        </div>
      </section>
    </>
  );
}
