"use client";

import { useState, type FormEvent } from "react";
import { Field, Input, Select, Textarea } from "@/components/ui/Field";
import { Button } from "@/components/ui/Button";
import { DemoBanner } from "@/components/ui/DemoBanner";
import { submitLead } from "@/lib/firebase";

export function EcoleForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const data = Object.fromEntries(new FormData(event.currentTarget));
    await submitLead("ecole-requests", data);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="border border-magenta/50 bg-magenta/10 p-6 text-sm text-off-white sm:p-8"
      >
        <p className="text-lg font-semibold uppercase tracking-wide text-magenta">
          Demande envoyée
        </p>
        <p className="mt-2 text-off-white/85">
          Merci ! Notre équipe communiquera avec le responsable pour confirmer
          les dates de la sortie 5D Squash École.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <DemoBanner text="Cette demande est enregistrée localement (localStorage) tant que Firebase n'est pas configuré." />
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Nom de l'école" name="schoolName" required>
          <Input id="schoolName" name="schoolName" required />
        </Field>
        <Field label="Nom du responsable" name="contactName" required>
          <Input id="contactName" name="contactName" required />
        </Field>
        <Field label="Courriel" name="email" required>
          <Input id="email" name="email" type="email" required />
        </Field>
        <Field label="Téléphone" name="phone" required>
          <Input id="phone" name="phone" type="tel" required />
        </Field>
        <Field label="Niveau scolaire" name="schoolLevel" required>
          <Select id="schoolLevel" name="schoolLevel" required defaultValue="">
            <option value="" disabled>
              Sélectionner
            </option>
            <option value="primaire">Primaire</option>
            <option value="secondaire">Secondaire</option>
            <option value="cegep">Cégep</option>
          </Select>
        </Field>
        <Field label="Nombre de jeunes" name="studentCount" required>
          <Input id="studentCount" name="studentCount" type="number" min={1} max={30} required />
        </Field>
        <Field label="Forfait" name="package" required>
          <Select id="package" name="package" required defaultValue="">
            <option value="" disabled>
              Sélectionner
            </option>
            <option value="decouverte">Sortie découverte — 20 $/jeune</option>
            <option value="parcours">Parcours 3 séances — 45 $/jeune</option>
          </Select>
        </Field>
        <Field label="Dates souhaitées" name="preferredDates" required>
          <Input id="preferredDates" name="preferredDates" placeholder="Ex: semaine du 12 mai" required />
        </Field>
      </div>
      <Field label="Besoins particuliers" name="specialNeeds">
        <Textarea id="specialNeeds" name="specialNeeds" placeholder="Accessibilité, allergies, encadrement, etc." />
      </Field>
      <Button type="submit" loading={status === "loading"}>
        Envoyer la demande
      </Button>
    </form>
  );
}
