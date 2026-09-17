"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { submitLead, isFirebaseConfigured } from "@/lib/firebase";
import { createPayment, isPaymentConfigured } from "@/lib/payment";

type Status = "idle" | "loading" | "success" | "error";

export function OnboardingForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [reference, setReference] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;

    if (!data.invitationCode?.trim()) {
      setError("Le code d'invitation est requis.");
      return;
    }
    if (!data.authorization || !data.termsAccepted) {
      setError("L'autorisation et l'acceptation des conditions sont requises.");
      return;
    }

    setStatus("loading");

    const payment = await createPayment({
      amountCents: 2500,
      currency: "CAD",
      description: "5D Squash Élite — inscription",
      metadata: { invitationCode: data.invitationCode },
    });

    if (payment.status === "error") {
      setStatus("error");
      setError(payment.message);
      return;
    }

    await submitLead("elite-onboarding", {
      ...data,
      paymentReference: payment.reference,
      paymentMode: payment.status,
    });

    setReference(payment.reference);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-magenta/50 bg-magenta/10 p-6 text-sm text-off-white sm:p-8"
      >
        <p className="text-lg font-semibold uppercase tracking-wide text-magenta">
          Inscription confirmée
        </p>
        <p className="mt-2 text-off-white/85">
          Bienvenue dans le prochain noyau 5D Squash Élite. Un courriel de
          confirmation vous sera envoyé.
        </p>
        <p className="mt-4 font-mono text-xs text-off-white/60">
          Référence : {reference}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <DemoBanner
        text={
          isFirebaseConfigured() && isPaymentConfigured()
            ? "Les intégrations Firebase et paiement sont configurées."
            : "Firebase et le paiement ne sont pas configurés — vos données sont enregistrées localement (localStorage) et le paiement est simulé. Aucune donnée de carte n'est demandée ou stockée."
        }
      />

      {error && (
        <p role="alert" className="border border-magenta bg-magenta/10 p-3 text-sm text-magenta">
          {error}
        </p>
      )}

      <fieldset className="space-y-4">
        <legend className="text-xs font-semibold uppercase tracking-widest text-magenta">
          Invitation
        </legend>
        <Field label="Code d'invitation" name="invitationCode" required>
          <Input id="invitationCode" name="invitationCode" required placeholder="EX: NOYAU-042" />
        </Field>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xs font-semibold uppercase tracking-widest text-magenta">
          Informations personnelles
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Prénom" name="firstName" required>
            <Input id="firstName" name="firstName" required />
          </Field>
          <Field label="Nom" name="lastName" required>
            <Input id="lastName" name="lastName" required />
          </Field>
          <Field label="Courriel" name="email" required>
            <Input id="email" name="email" type="email" required />
          </Field>
          <Field label="Téléphone" name="phone" required>
            <Input id="phone" name="phone" type="tel" required />
          </Field>
          <Field label="Âge" name="age" required>
            <Input id="age" name="age" type="number" min={13} max={99} required />
          </Field>
          <Field label="Taille de chandail" name="shirtSize" required>
            <Select id="shirtSize" name="shirtSize" required defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </fieldset>

      <fieldset className="space-y-4">
        <legend className="text-xs font-semibold uppercase tracking-widest text-magenta">
          Profil sportif
        </legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Sport principal" name="mainSport" required>
            <Input id="mainSport" name="mainSport" required />
          </Field>
          <Field label="Équipe ou programme" name="team" required>
            <Input id="team" name="team" required placeholder="Ex: Ballers XII" />
          </Field>
          <Field label="Expérience en squash" name="squashExperience" required>
            <Select id="squashExperience" name="squashExperience" required defaultValue="">
              <option value="" disabled>
                Sélectionner
              </option>
              <option value="debutant">Débutant</option>
              <option value="intermediaire">Intermédiaire</option>
              <option value="avance">Avancé</option>
            </Select>
          </Field>
        </div>
        <Field label="Besoins alimentaires" name="dietary">
          <Textarea id="dietary" name="dietary" placeholder="Allergies, restrictions, etc." />
        </Field>
      </fieldset>

      <fieldset className="space-y-3">
        <legend className="text-xs font-semibold uppercase tracking-widest text-magenta">
          Autorisations
        </legend>
        <label className="flex items-start gap-3 text-sm text-off-white/85">
          <input
            type="checkbox"
            name="authorization"
            required
            className="mt-0.5 size-4 accent-magenta"
          />
          J&apos;autorise ma participation à l&apos;événement 5D Squash Élite.
        </label>
        <label className="flex items-start gap-3 text-sm text-off-white/85">
          <input
            type="checkbox"
            name="termsAccepted"
            required
            className="mt-0.5 size-4 accent-magenta"
          />
          J&apos;accepte les{" "}
          <Link href="/conditions" className="text-magenta underline">
            conditions
          </Link>{" "}
          et la{" "}
          <Link href="/confidentialite" className="text-magenta underline">
            politique de confidentialité
          </Link>
          .
        </label>
      </fieldset>

      <fieldset className="space-y-3 border-t border-off-white/15 pt-6">
        <legend className="text-xs font-semibold uppercase tracking-widest text-magenta">
          Paiement — 25 $ CAD
        </legend>
        <p className="text-sm text-off-white/70">
          Aucune donnée de carte n&apos;est saisie ici. En mode démonstration, le
          paiement est simulé et aucune transaction réelle n&apos;est créée.
        </p>
        <Button type="submit" loading={status === "loading"} className="w-full sm:w-auto">
          Confirmer et payer 25 $
        </Button>
      </fieldset>
    </form>
  );
}
