/**
 * Provider-agnostic payment abstraction (docs/DONATION_INTEGRATION.md).
 * Hard rules:
 * - Hosted checkout redirect ONLY — this site never sees or stores card data.
 * - All credentials come from environment variables.
 * - TEST/SANDBOX mode only until the owner's legal registration status is
 *   confirmed (enforced in lib/payments/index.ts, not just documented).
 */

export interface CheckoutInput {
  /** Server-resolved tier — amounts are never trusted from the client. */
  tierId: string;
  amountKobo: number;
  currency: "NGN";
  email: string;
  /** Optional named-chicken sponsorship target. */
  chickenId?: string;
  /** Where the provider should send the visitor afterwards. */
  callbackUrl: string;
}

export interface CheckoutSession {
  /** Hosted checkout URL to redirect the visitor to. */
  url: string;
  reference: string;
}

export type PaymentEvent =
  | { type: "payment.succeeded"; reference: string; amountKobo: number; email?: string }
  | { type: "payment.failed"; reference: string }
  | { type: "unrecognized"; raw: unknown };

export interface PaymentProvider {
  readonly name: string;
  /** True when configured with sandbox/test credentials. */
  readonly testMode: boolean;
  createCheckout(input: CheckoutInput): Promise<CheckoutSession>;
  /**
   * Verify a webhook's signature against the raw request body.
   * Throws on invalid signatures; returns a normalized event otherwise.
   */
  verifyWebhook(rawBody: string, signature: string | null): Promise<PaymentEvent>;
}
