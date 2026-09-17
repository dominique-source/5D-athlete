/**
 * Payment provider integration point. No real payment provider is wired up
 * and no real transaction is ever created by this module — it only defines
 * the interface a provider (Stripe, Square, etc.) would implement, plus a
 * demo mode that simulates success so checkout flows can be built and tested
 * end-to-end before a provider is chosen.
 *
 * Setup: see SETUP.md.
 */
export type PaymentIntentRequest = {
  amountCents: number;
  currency: "CAD";
  description: string;
  metadata?: Record<string, string>;
};

export type PaymentResult =
  | { status: "demo"; reference: string }
  | { status: "success"; reference: string }
  | { status: "error"; message: string };

export function isPaymentConfigured(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_PAYMENT_PROVIDER);
}

/**
 * Simulates a checkout in demo mode. A real provider would exchange
 * `request` for a hosted checkout session or client secret here — never
 * collect or store raw card data in this codebase either way.
 */
export async function createPayment(
  request: PaymentIntentRequest,
): Promise<PaymentResult> {
  void request;

  if (!isPaymentConfigured()) {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return {
      status: "demo",
      reference: `DEMO-${Date.now().toString(36).toUpperCase()}`,
    };
  }

  return {
    status: "error",
    message:
      "Fournisseur de paiement défini mais non implémenté. Complétez src/lib/payment.ts.",
  };
}
