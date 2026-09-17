import Image from "next/image";
import type { Metadata } from "next";
import { InfoStat } from "@/components/ui/InfoStat";
import { PricingCard } from "@/components/squash/PricingCard";
import { StepList } from "@/components/squash/StepList";
import { TagGrid } from "@/components/squash/TagGrid";
import { CorpoForm } from "@/components/forms/CorpoForm";
import { EspaceYDeal } from "@/components/EspaceYDeal";
import { assets } from "@/config/assets";

export const metadata: Metadata = {
  title: "5D Squash Corpo | 5D Athlete",
  description:
    "Votre équipe. Un nouveau défi. Une soirée différente. Événement corporatif sportif et social à Espace Y.",
};

const INCLUSIONS = [
  { label: "Équipement", icon: "racket" as const },
  { label: "Terrains", icon: "location" as const },
  { label: "Animation", icon: "music" as const },
  { label: "Défis", icon: "decision" as const },
  { label: "Mini-compétition", icon: "people" as const },
  { label: "Repas", icon: "meal" as const },
];

export default function CorpoPage() {
  return (
    <div className="bg-charcoal">
      <section className="relative flex min-h-[65vh] items-end overflow-hidden border-b border-off-white/10">
        <Image
          src={assets.corpo.hero}
          alt="Groupe corporatif lors d'un événement 5D Squash Corpo"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-90"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(0deg, rgba(5,6,7,0.97) 20%, rgba(17,20,24,0.55) 65%, rgba(17,20,24,0.7) 100%)",
          }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-14 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
            5D Squash
          </p>
          <h1 className="mt-3 text-5xl sm:text-6xl">5D Squash Corpo</h1>
          <p className="font-display mt-3 max-w-2xl text-xl text-off-white italic uppercase sm:text-2xl">
            Votre équipe. Un nouveau défi. Une soirée différente.
          </p>
          <p className="mt-4 max-w-xl text-base text-off-white/75 sm:text-lg">
            Une expérience sportive, sociale et complète à Espace Y.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <InfoStat icon="clock" label="3 heures" accentClassName="text-amber" />
          <InfoStat icon="people" label="Jusqu'à 25 personnes" accentClassName="text-amber" />
          <InfoStat icon="meal" label="Repas inclus" accentClassName="text-amber" />
          <InfoStat icon="location" label="Espace Y" accentClassName="text-amber" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl">Forfait</h2>
        <div className="mt-6 max-w-md">
          <PricingCard
            title="Soirée corporative"
            price="2 500 $"
            priceNote="pour un groupe allant jusqu'à 25 personnes (100 $/personne)"
            features={["Équipement, terrains et animation inclus", "Défis, mini-compétition et repas inclus"]}
            accentClassName="border-copper text-copper"
            highlighted
          />
        </div>
        <div className="mt-6">
          <TagGrid items={INCLUSIONS} accentClassName="text-copper" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl">Déroulement</h2>
        <div className="mt-6">
          <StepList
            steps={["Accueil", "Découverte", "Défis", "Compétition", "Réception"]}
            accentClassName="text-copper border-copper"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="relative aspect-4/3 overflow-hidden border border-off-white/10">
            <Image
              src={assets.corpo.challenge}
              alt="Défi d'équipe lors d'un événement 5D Squash Corpo"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-4/3 overflow-hidden border border-off-white/10">
            <Image
              src={assets.corpo.reception}
              alt="Réception après-jeu lors d'un événement 5D Squash Corpo"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl">Réserver un événement</h2>
        <p className="mt-3 text-sm text-off-white/70">
          Formulaire destiné aux responsables d&apos;entreprise.
        </p>
        <div className="mt-6">
          <CorpoForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <EspaceYDeal zone="Corpo">
          <p>
            Calcul : 25 personnes × 100 $ → <strong>Revenus : 2 500 $</strong>
          </p>
          <div>
            <p className="font-semibold text-off-white">Répartition en trois parts</p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Espace Y : 833,33 $</li>
              <li>Quartier Sportif : 833,33 $</li>
              <li>Repas et production : 833,34 $</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-off-white">Service de boissons</p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Géré par Quartier Sportif</li>
              <li>Revenus conservés par Quartier Sportif</li>
              <li>Paiement séparé par les participants</li>
            </ul>
          </div>
          <p className="border-t border-off-white/15 pt-4 text-amber">
            Point à valider : logistique, facturation et responsabilités.
          </p>
        </EspaceYDeal>
      </section>
    </div>
  );
}
