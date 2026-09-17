"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { submitLead } from "@/lib/firebase";

export function CorpoForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await submitLead("corpo-requests", data);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-amber/50 bg-amber/10 p-6 text-sm text-off-white sm:p-8"
      >
        <p className="text-lg font-semibold uppercase tracking-wide text-amber">
          Demande envoyée
        </p>
        <p className="mt-2 text-off-white/85">
          Merci — notre équipe communiquera avec vous pour confirmer la date
          de votre événement 5D Squash Corpo.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <DemoBanner text="Cette demande est enregistrée localement (localStorage) tant que Firebase n'est pas configuré." />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom de l'entreprise" name="companyName" required>
          <Input id="companyName" name="companyName" required />
        </Field>
        <Field label="Responsable" name="contactName" required>
          <Input id="contactName" name="contactName" required />
        </Field>
        <Field label="Courriel" name="email" required>
          <Input id="email" name="email" type="email" required />
        </Field>
        <Field label="Téléphone" name="phone" required>
          <Input id="phone" name="phone" type="tel" required />
        </Field>
        <Field label="Nombre de participants" name="participantCount" required>
          <Input id="participantCount" name="participantCount" type="number" min={1} max={25} required />
        </Field>
        <Field label="Date souhaitée" name="preferredDate" required>
          <Input id="preferredDate" name="preferredDate" type="date" required />
        </Field>
      </div>
      <Field label="Objectif de l'activité" name="objective">
        <Textarea id="objective" name="objective" placeholder="Team building, célébration, 5 à 7, etc." />
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Préférences alimentaires" name="dietaryPreferences">
          <Textarea id="dietaryPreferences" name="dietaryPreferences" />
        </Field>
        <Field label="Besoins particuliers" name="specialNeeds">
          <Textarea id="specialNeeds" name="specialNeeds" />
        </Field>
      </div>
      <Field label="Informations de facturation" name="billingInfo">
        <Textarea
          id="billingInfo"
          name="billingInfo"
          placeholder="Adresse, numéro de PO, personne-contact pour la facturation…"
        />
      </Field>
      <Button type="submit" loading={status === "loading"} variant="corpo">
        Envoyer la demande
      </Button>
    </form>
  );
}
