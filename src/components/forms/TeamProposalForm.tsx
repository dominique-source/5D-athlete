"use client";

import { useId, useState, type FormEvent } from "react";
import { Field, Input, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { submitLead } from "@/lib/firebase";

export function TeamProposalForm() {
  const formId = useId();
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await submitLead("elite-team-proposals", data);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-magenta/50 bg-magenta/10 p-6 text-sm text-off-white"
      >
        <p className="font-semibold uppercase tracking-wide text-magenta">
          Proposition envoyée
        </p>
        <p className="mt-2 text-off-white/80">
          Merci — votre équipe est maintenant considérée pour un prochain
          noyau 5D Squash Élite. Nous vous répondrons par courriel.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-describedby={`${formId}-demo`}>
      <div id={`${formId}-demo`}>
        <DemoBanner text="Aucune donnée n'est transmise à un service externe — cette proposition est enregistrée localement." />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom de l'équipe ou du programme" name="teamName" required>
          <Input id="teamName" name="teamName" required />
        </Field>
        <Field label="Personne-ressource" name="contactName" required>
          <Input id="contactName" name="contactName" required />
        </Field>
        <Field label="Courriel" name="email" required>
          <Input id="email" name="email" type="email" required />
        </Field>
        <Field label="Téléphone" name="phone">
          <Input id="phone" name="phone" type="tel" />
        </Field>
      </div>
      <Field label="Message" name="message">
        <Textarea id="message" name="message" placeholder="Nombre d'athlètes, disponibilités, sport principal…" />
      </Field>
      <Button type="submit" loading={status === "loading"}>
        Proposer mon équipe
      </Button>
    </form>
  );
}
