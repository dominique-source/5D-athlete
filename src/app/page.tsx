import { DimensionOrbit } from "@/components/home/DimensionOrbit";
import { SportCard } from "@/components/home/SportCard";
import { assets } from "@/config/assets";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-off-white/10 px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          <div className="animate-fade-up order-2 max-w-xl text-center lg:order-1 lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-off-white/60">
              5D Athlete
            </p>
            <h1 className="mt-3 text-5xl sm:text-6xl lg:text-7xl">
              5D <span className="text-magenta">Athlete</span>
            </h1>
            <p className="font-display mt-2 text-lg text-off-white/70 italic uppercase tracking-widest">
              By Dominique Soucy
            </p>
            <p className="mt-6 text-lg font-semibold tracking-wide text-off-white/90 uppercase">
              Build the complete athlete.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-off-white/70 sm:text-base">
              Cinq dimensions, un seul athlète : Skills, Decision Making,
              Community, Mind et Soul. 5D Athlete construit des expériences
              sportives qui développent la personne complète — pas juste la
              performance.
            </p>
          </div>
          <div className="order-1 w-full max-w-md lg:order-2">
            <DimensionOrbit />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
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
