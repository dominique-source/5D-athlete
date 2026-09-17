"use client";

import { useId, useRef, useState } from "react";
import { useEspaceYDeals } from "@/hooks/useEspaceYDeals";
import { Modal } from "@/components/Modal";

type EspaceYDealProps = {
  zone: string;
  children: React.ReactNode;
};

/**
 * "Entente à discuter" trigger + popup. Renders nothing unless presentation
 * mode is active (?presentation=espace-y or NEXT_PUBLIC_SHOW_ESPACE_Y_DEALS),
 * so these financial details never reach the public site.
 */
export function EspaceYDeal({ zone, children }: EspaceYDealProps) {
  const enabled = useEspaceYDeals();
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  if (!enabled) return null;

  return (
    <div className="mt-10 border border-dashed border-amber/50 bg-ink/40 p-4 sm:p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-amber">
        Mode présentation — Espace Y
      </p>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className="border border-amber px-4 py-2 text-sm font-semibold uppercase tracking-wide text-amber transition-colors hover:bg-amber hover:text-ink"
      >
        Entente à discuter
      </button>
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        titleId={titleId}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">
              {zone}
            </p>
            <h2 id={titleId} className="mt-1 text-2xl">
              Entente à discuter
            </h2>
          </div>
          <button
            type="button"
            onClick={() => {
              setOpen(false);
              triggerRef.current?.focus();
            }}
            aria-label="Fermer"
            className="shrink-0 border border-off-white/30 px-3 py-1 text-lg leading-none text-off-white/80 hover:border-magenta hover:text-magenta"
          >
            ×
          </button>
        </div>
        <div className="mt-5 space-y-5 text-sm leading-relaxed text-off-white/90">
          {children}
        </div>
      </Modal>
    </div>
  );
}
