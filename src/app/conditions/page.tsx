import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions d'utilisation | 5D Athlete",
};

export default function ConditionsPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl sm:text-5xl">Conditions d&apos;utilisation</h1>
      <p className="mt-3 text-sm text-off-white/60">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-CA")}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-off-white/85 sm:text-base">
        <div>
          <h2 className="text-xl">Formules 5D Squash</h2>
          <p className="mt-2">
            L&apos;inscription à une soirée 5D Squash Élite, à une sortie 5D
            Squash École ou à un événement 5D Squash Corpo implique
            l&apos;acceptation des présentes conditions. Les places sont
            confirmées selon la disponibilité et, pour la formule Élite, selon
            le noyau d&apos;athlètes invités.
          </p>
        </div>

        <div>
          <h2 className="text-xl">Paiement</h2>
          <p className="mt-2">
            Les prix affichés sont en dollars canadiens. Aucune transaction
            réelle n&apos;est traitée par cet environnement de démonstration tant
            qu&apos;un fournisseur de paiement n&apos;est pas configuré (voir
            SETUP.md). Aucune donnée de carte bancaire n&apos;est saisie ou
            stockée par ce site.
          </p>
        </div>

        <div>
          <h2 className="text-xl">Annulation</h2>
          <p className="mt-2">
            Toute demande d&apos;annulation ou de modification doit être
            adressée le plus tôt possible. Les conditions spécifiques
            d&apos;annulation sont communiquées lors de la confirmation de
            l&apos;inscription ou de la réservation.
          </p>
        </div>

        <div>
          <h2 className="text-xl">Responsabilité</h2>
          <p className="mt-2">
            La participation aux activités sportives présentées sur ce site
            comporte des risques inhérents à la pratique du squash et des
            activités connexes. En vous inscrivant, vous confirmez être apte
            à participer ou, pour les groupes scolaires, que l&apos;encadrement
            requis sera assuré.
          </p>
        </div>
      </div>
    </section>
  );
}
