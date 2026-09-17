import Image from "next/image";
import type { Metadata } from "next";
import { InfoStat } from "@/components/ui/InfoStat";
import { PricingCard } from "@/components/squash/PricingCard";
import { StepList } from "@/components/squash/StepList";
import { EcoleForm } from "@/components/forms/EcoleForm";
import { EspaceYDeal } from "@/components/EspaceYDeal";
import { assets } from "@/config/assets";

export const metadata: Metadata = {
  title: "5D Squash École | 5D Athlete",
  description:
    "Une classe. Un nouveau sport. Cinq dimensions. Sortie scolaire active et accessible à Espace Y.",
};

export default function EcolePage() {
  return (
    <>
      <section className="relative flex min-h-[65vh] items-end overflow-hidden border-b border-off-white/10">
        <Image
          src={assets.school.hero}
          alt="Groupe de jeunes lors d'une sortie 5D Squash École"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(5,6,7,0.96) 15%, rgba(5,6,7,0.3) 65%, rgba(5,6,7,0.55) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
            5D Squash
          </p>
          <h1 className="mt-3 text-5xl sm:text-6xl">5D Squash École</h1>
          <p className="font-display mt-3 max-w-2xl text-xl text-off-white italic uppercase sm:text-2xl">
            Une classe. Un nouveau sport. Cinq dimensions.
          </p>
          <p className="mt-4 max-w-xl text-base text-off-white/80 sm:text-lg">
            Une sortie scolaire active, structurée et accessible.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <InfoStat icon="clock" label="2 heures" />
          <InfoStat icon="people" label="Jusqu'à 30 jeunes" />
          <InfoStat icon="briefcase" label="Équipement fourni" />
          <InfoStat icon="location" label="Espace Y" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl">Nos forfaits</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <PricingCard
            title="Sortie découverte"
            price="20 $"
            priceNote="par jeune"
            features={["Une séance", "Deux heures"]}
          />
          <PricingCard
            title="Parcours 3 séances"
            price="45 $"
            priceNote="par jeune, au total (15 $/séance)"
            features={["Même classe", "Trois séances de deux heures"]}
            highlighted
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl">Progression</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {["Découvrir", "Progresser", "Mesurer"].map((step, index) => (
            <div key={step} className="border border-off-white/10 bg-charcoal p-6">
              <span className="font-display text-3xl text-magenta italic">
                0{index + 1}
              </span>
              <p className="mt-2 text-lg">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl">Déroulement d&apos;une séance</h2>
        <div className="mt-6">
          <StepList steps={["Accueil", "Stations", "Mini-matchs", "Retour 5D"]} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden border border-off-white/10">
            <Image
              src={assets.school.stations}
              alt="Stations de compétences 5D Squash École"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden border border-off-white/10">
            <Image
              src={assets.school.team}
              alt="Défi d'équipe 5D Squash École"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Réserver une sortie</h2>
        <p className="mt-3 text-sm text-off-white/70">
          Formulaire destiné aux responsables scolaires.
        </p>
        <div className="mt-6">
          <EcoleForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <EspaceYDeal zone="École">
          <div>
            <p className="font-semibold text-off-white">
              Sortie unique : 30 × 20 $ = 600 $
            </p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Espace Y : 300 $</li>
              <li>Quartier Sportif : 300 $</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-off-white">
              Parcours trois séances : 30 × 15 $ × 3 = 1 350 $
            </p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Espace Y : 675 $</li>
              <li>Quartier Sportif : 675 $</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-off-white">Responsabilités proposées</p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Espace Y : terrains et équipement</li>
              <li>Quartier Sportif : écoles, réservation et animation</li>
            </ul>
          </div>
          <p className="border-t border-off-white/15 pt-4 text-amber">
            Point à valider : responsabilités, personnel et conditions de
            paiement.
          </p>
        </EspaceYDeal>
      </section>
    </>
  );
}
