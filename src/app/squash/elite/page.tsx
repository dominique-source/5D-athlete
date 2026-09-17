import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { InfoStat } from "@/components/ui/InfoStat";
import { LinkButton } from "@/components/ui/Button";
import { TagGrid } from "@/components/squash/TagGrid";
import { TeamProposalForm } from "@/components/forms/TeamProposalForm";
import { EspaceYDeal } from "@/components/EspaceYDeal";
import { assets } from "@/config/assets";

export const metadata: Metadata = {
  title: "5D Squash Élite | 5D Athlete",
  description:
    "Un nouveau noyau. Une nouvelle soirée. Squash, défis, DJ et repas pour 25 athlètes invités à Espace Y.",
};

const EXPERIENCE_ITEMS = [
  { label: "Gestion des invitations", icon: "people" as const },
  { label: "Onboarding", icon: "briefcase" as const },
  { label: "Boîte à collation", icon: "meal" as const },
  { label: "Raquette", icon: "racket" as const },
  { label: "Lunettes", icon: "glasses" as const },
  { label: "Balle", icon: "ball" as const },
  { label: "Squash", icon: "racket" as const },
  { label: "Défis", icon: "decision" as const },
  { label: "DJ set", icon: "music" as const },
  { label: "Repas après le jeu", icon: "meal" as const },
];

export default function ElitePage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-end overflow-hidden border-b border-off-white/10">
        <Image
          src={assets.elite.hero}
          alt="Athlète en action lors d'une soirée 5D Squash Élite"
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
          <h1 className="mt-3 text-5xl sm:text-6xl">5D Squash Élite</h1>
          <p className="font-display mt-3 max-w-2xl text-xl text-off-white italic uppercase sm:text-2xl">
            Un nouveau noyau. Une nouvelle soirée.
          </p>
          <p className="mt-4 max-w-xl text-base text-off-white/80 sm:text-lg">
            Des athlètes invités. Du squash. Des défis. Un DJ. Un repas.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/squash/elite/onboarding">
              J&apos;ai reçu une invitation
            </LinkButton>
            <LinkButton href="#proposer-equipe" variant="outline">
              Proposer mon équipe
            </LinkButton>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          <InfoStat icon="clock" label="Vendredi" />
          <InfoStat icon="clock" label="19 h à 22 h" />
          <InfoStat icon="clock" label="3 heures" />
          <InfoStat icon="people" label="25 participants" />
          <InfoStat icon="location" label="Espace Y" />
          <div className="flex items-center gap-3 border border-magenta bg-magenta/10 px-4 py-3">
            <span className="font-display text-lg text-magenta italic">25 $</span>
            <span className="text-xs text-off-white/70">par participant</span>
          </div>
        </div>
        <p className="mt-4 text-sm text-off-white/60">
          Une édition environ toutes les trois semaines.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <h2 className="text-3xl">L&apos;expérience</h2>
        <div className="mt-6">
          <TagGrid items={EXPERIENCE_ITEMS} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl">Un noyau, pas une liste d&apos;invités au hasard</h2>
            <p className="mt-4 text-sm leading-relaxed text-off-white/80 sm:text-base">
              Chaque soirée commence avec un nouveau noyau d&apos;athlètes déjà
              invités — jamais d&apos;invitations aléatoires. Les noyaux
              proviennent d&apos;équipes sportives et de programmes comme{" "}
              <strong className="text-off-white">Ballers XII</strong> et{" "}
              <strong className="text-off-white">Ballers Only</strong>, pour
              une soirée où tout le monde se connaît déjà un peu.
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden border border-off-white/10">
            <Image
              src={assets.elite.arrival}
              alt="Arrivée de la communauté à une soirée 5D Squash Élite"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-4/3 overflow-hidden border border-off-white/10 lg:order-2">
            <Image
              src={assets.elite.afterplay}
              alt="Repas et DJ après le jeu lors d'une soirée 5D Squash Élite"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-1">
            <h2 className="text-3xl">Après le jeu</h2>
            <p className="mt-4 text-sm leading-relaxed text-off-white/80 sm:text-base">
              Le squash n&apos;est que le début. Chaque soirée se termine avec
              un DJ set et un repas partagé — l&apos;occasion de prolonger la
              compétition en connexion.
            </p>
          </div>
        </div>
      </section>

      <section
        id="proposer-equipe"
        className="mx-auto max-w-3xl scroll-mt-20 px-4 py-16 sm:px-6"
      >
        <h2 className="text-3xl">Proposer mon équipe</h2>
        <p className="mt-3 text-sm text-off-white/70">
          Votre équipe ou programme n&apos;a pas encore été invité ? Faites-vous
          connaître pour un prochain noyau.
        </p>
        <div className="mt-6">
          <TeamProposalForm />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <EspaceYDeal zone="Élite">
          <p>
            Calcul : 25 participants × 25 $ → <strong>Revenus : 625 $</strong>
          </p>
          <div>
            <p className="font-semibold text-off-white">Répartition</p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Espace Y : 250 $ (10 $ par participant)</li>
              <li>Quartier Sportif : 125 $ (5 $ par participant)</li>
              <li>DJ : 75 $ (3 $ par participant)</li>
              <li>Production : 175 $ (7 $ par participant)</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-off-white">Commandite exclusive : 5 000 $</p>
            <ul className="mt-2 space-y-1 text-off-white/80">
              <li>Studio : 2 500 $</li>
              <li>Quartier Sportif : 2 500 $</li>
            </ul>
          </div>
          <p className="border-t border-off-white/15 pt-4 text-amber">
            Point à valider : le 10 $ inclut-il les terrains et
            l&apos;équipement ?
          </p>
        </EspaceYDeal>
      </section>

      <p className="mx-auto max-w-6xl px-4 pb-10 text-xs text-off-white/50 sm:px-6">
        Vous avez un code d&apos;invitation ?{" "}
        <Link href="/squash/elite/onboarding" className="text-magenta underline">
          Commencer l&apos;onboarding
        </Link>
        .
      </p>
    </>
  );
}
