"use client";

import { useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "5d-presentation-mode";
const PRESENTATION_VALUE = "espace-y";
const envEnabled = process.env.NEXT_PUBLIC_SHOW_ESPACE_Y_DEALS === "true";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  if (envEnabled) return true;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === PRESENTATION_VALUE;
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return envEnabled;
}

/**
 * Gates the "Entente à discuter" sections. Enabled by the
 * NEXT_PUBLIC_SHOW_ESPACE_Y_DEALS env var, or by visiting any page with
 * ?presentation=espace-y once per browser tab (persisted in sessionStorage so
 * it survives client-side navigation for the rest of the visit).
 */
export function useEspaceYDeals() {
  useEffect(() => {
    if (envEnabled) return;

    const params = new URLSearchParams(window.location.search);
    if (params.get("presentation") !== PRESENTATION_VALUE) return;

    try {
      window.sessionStorage.setItem(STORAGE_KEY, PRESENTATION_VALUE);
      // sessionStorage writes don't fire "storage" in the same tab — notify
      // this hook's subscribers manually so useSyncExternalStore re-reads it.
      window.dispatchEvent(new Event("storage"));
    } catch {
      // sessionStorage unavailable (private mode, etc.) — the mode simply
      // won't persist across navigations for this visit.
    }
  }, []);

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
