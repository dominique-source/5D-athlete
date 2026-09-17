/**
 * Firebase integration point. Not initialized yet — no project is
 * configured. When VITE-style env vars below are present, `getFirebaseApp()`
 * lazily initializes the SDK; until then every write helper falls back to
 * localStorage so forms keep working in local/demo environments.
 *
 * Setup: see SETUP.md.
 */
import type { FirebaseApp } from "firebase/app";
import type { Firestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FB_APP_ID,
};

export function isFirebaseConfigured(): boolean {
  return Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);
}

let appPromise: Promise<FirebaseApp> | null = null;
let dbPromise: Promise<Firestore> | null = null;

/**
 * Lazily loads the Firebase SDK only when it's actually configured and
 * needed, so the "firebase" package never has to be installed just for the
 * demo path to work.
 */
async function getFirebaseApp(): Promise<FirebaseApp> {
  if (!isFirebaseConfigured()) {
    throw new Error(
      "Firebase n'est pas configuré. Ajoutez les variables NEXT_PUBLIC_FB_* (voir SETUP.md).",
    );
  }

  if (!appPromise) {
    appPromise = import("firebase/app").then(({ initializeApp, getApps, getApp }) =>
      getApps().length ? getApp() : initializeApp(firebaseConfig),
    );
  }

  return appPromise;
}

export async function getFirestoreDb(): Promise<Firestore> {
  if (!dbPromise) {
    dbPromise = getFirebaseApp().then(async (app) => {
      const { getFirestore } = await import("firebase/firestore");
      return getFirestore(app);
    });
  }

  return dbPromise;
}

/**
 * Writes a form submission to Firestore when configured, otherwise falls
 * back to localStorage so the demo experience is uninterrupted.
 */
export async function submitLead(
  collectionName: string,
  data: Record<string, unknown>,
): Promise<{ mode: "firebase" | "demo" }> {
  const record = { ...data, submittedAt: new Date().toISOString() };

  if (isFirebaseConfigured()) {
    const db = await getFirestoreDb();
    const { collection, addDoc } = await import("firebase/firestore");
    await addDoc(collection(db, collectionName), record);
    return { mode: "firebase" };
  }

  try {
    const key = `5d-demo-${collectionName}`;
    const existing = JSON.parse(window.localStorage.getItem(key) ?? "[]");
    existing.push(record);
    window.localStorage.setItem(key, JSON.stringify(existing));
  } catch {
    // localStorage unavailable — the submission still succeeds for the
    // in-memory demo flow, it just isn't persisted across reloads.
  }

  return { mode: "demo" };
}
