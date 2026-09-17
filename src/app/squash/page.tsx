import Image from "next/image";
import type { Metadata } from "next";
import { FormulaCard } from "@/components/squash/FormulaCard";
import { assets } from "@/config/assets";

export const metadata: Metadata = {
  title: "5D Squash | 5D Athlete",
  description:
    "5D Squash — trois formules : Élite, École et Corpo. Une plateforme sportive complète à Espace Y.",
};

export default function SquashPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end overflow-hidden border-b border-off-white/10">
        <Image
          src={assets.squashPlatformHero}
          alt="Terrain de squash 5D — balle noire"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(5,6,7,0.95) 10%, rgba(5,6,7,0.35) 60%, rgba(5,6,7,0.6) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
            5D Athlete
          </p>
          <h1 className="mt-3 text-5xl sm:text-6xl">5D Squash</h1>
          <p className="mt-4 max-w-xl text-base text-off-white/80 sm:text-lg">
            Une plateforme, trois formules — pour les athlètes invités, les
            classes et les entreprises. Même méthode 5D, expérience adaptée à
            chaque groupe.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <FormulaCard
            title="Élite"
            tagline="Soirées invitation"
            image={assets.elite.hero}
            href="/squash/elite"
            accentClassName="text-magenta"
          />
          <FormulaCard
            title="École"
            tagline="Sorties scolaires"
            image={assets.school.hero}
            href="/squash/ecole"
            accentClassName="text-magenta"
          />
          <FormulaCard
            title="Corpo"
            tagline="Événements d'entreprise"
            image={assets.corpo.hero}
            href="/squash/corpo"
            accentClassName="text-amber"
          />
        </div>
      </section>
    </>
  );
}
