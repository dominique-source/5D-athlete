import type { Metadata } from "next";
import { OnboardingForm } from "@/components/forms/OnboardingForm";

export const metadata: Metadata = {
  title: "Onboarding Élite | 5D Squash | 5D Athlete",
  description: "Complétez votre inscription à une soirée 5D Squash Élite.",
};

export default function EliteOnboardingPage() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-14 sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-magenta">
        5D Squash Élite
      </p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Onboarding</h1>
      <p className="mt-4 text-sm text-off-white/70 sm:text-base">
        Vous avez reçu une invitation ? Complétez les informations ci-dessous
        pour confirmer votre place dans le prochain noyau.
      </p>
      <div className="mt-8">
        <OnboardingForm />
      </div>
    </section>
  );
}
