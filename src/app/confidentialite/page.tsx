import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité | 5D Athlete",
};

export default function ConfidentialitePage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-4xl sm:text-5xl">Politique de confidentialité</h1>
      <p className="mt-3 text-sm text-off-white/60">
        Dernière mise à jour : {new Date().toLocaleDateString("fr-CA")}
      </p>

      <div className="mt-8 space-y-8 text-sm leading-relaxed text-off-white/85 sm:text-base">
        <div>
          <h2 className="text-xl">Renseignements recueillis</h2>
          <p className="mt-2">
            Lorsque vous remplissez un formulaire sur ce site (onboarding
            Élite, demande École ou demande Corpo), nous recueillons les
            renseignements que vous fournissez volontairement : nom,
            coordonnées, informations sur votre groupe et détails logistiques
            pertinents à votre demande. Aucune donnée de carte bancaire n&apos;est
            jamais recueillie ou stockée par ce site.
          </p>
        </div>

        <div>
          <h2 className="text-xl">Mode démonstration</h2>
          <p className="mt-2">
            Tant que l&apos;intégration Firebase n&apos;est pas configurée pour cet
            environnement, les données soumises via nos formulaires sont
            conservées uniquement dans le navigateur (localStorage) et ne
            sont transmises à aucun serveur. Voir SETUP.md pour la
            configuration de production.
          </p>
        </div>

        <div>
          <h2 className="text-xl">Utilisation des renseignements</h2>
          <p className="mt-2">
            Les renseignements recueillis servent uniquement à traiter votre
            demande (inscription, réservation scolaire ou corporative) et à
            communiquer avec vous à ce sujet. Ils ne sont pas vendus ni
            partagés à des fins publicitaires.
          </p>
        </div>

        <div>
          <h2 className="text-xl">Vos droits</h2>
          <p className="mt-2">
            Vous pouvez en tout temps demander l&apos;accès, la correction ou la
            suppression de vos renseignements en communiquant avec 5D
            Athlete par Dominique Soucy.
          </p>
        </div>
      </div>
    </section>
  );
}
