import { PaystackProvider } from "@/lib/payments/paystack";
import type { PaymentProvider } from "@/lib/payments/types";

/**
 * Payment provider factory + the LIVE-MODE LOCK.
 *
 * Kisi's legal registration status has not yet been confirmed, so the
 * support programme may not take real money (docs/DONATION_INTEGRATION.md,
 * docs/CONTENT_CHECKLIST.md). That rule is enforced in code, not just
 * documentation:
 *
 * 1. `LIVE_PAYMENTS_UNLOCKED` is a hard-coded `false`. No environment
 *    variable can flip it — going live requires a deliberate, reviewed
 *    code change after the owner confirms legal status and the wording
 *    review is done.
 * 2. Even then, a non-test Paystack key also requires
 *    `PAYMENTS_ALLOW_LIVE=true` in the environment (belt and braces).
 *
 * With a test key (sk_test_...), everything works end-to-end in Paystack's
 * sandbox: real redirect, real webhook signatures, no real money.
 */
const LIVE_PAYMENTS_UNLOCKED = false;

export type PaymentsStatus =
  | { configured: true; provider: PaymentProvider; testMode: boolean }
  | { configured: false; reason: string };

export function getPayments(): PaymentsStatus {
  const providerName = process.env.PAYMENT_PROVIDER ?? "paystack";
  if (providerName !== "paystack") {
    return { configured: false, reason: `Unknown PAYMENT_PROVIDER "${providerName}"` };
  }

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) {
    return {
      configured: false,
      reason:
        "PAYSTACK_SECRET_KEY is not set. Add a TEST key (sk_test_...) to " +
        ".env.local to exercise the sandbox flow.",
    };
  }

  const isTestKey = secretKey.startsWith("sk_test_");
  if (!isTestKey) {
    if (!LIVE_PAYMENTS_UNLOCKED) {
      return {
        configured: false,
        reason:
          "Live payment keys are BLOCKED: the business's legal registration " +
          "status is unconfirmed. Use a sk_test_ key. (Unlocking live mode " +
          "requires a reviewed code change — see lib/payments/index.ts.)",
      };
    }
    if (process.env.PAYMENTS_ALLOW_LIVE !== "true") {
      return {
        configured: false,
        reason: "Live key present but PAYMENTS_ALLOW_LIVE is not 'true'.",
      };
    }
  }

  return {
    configured: true,
    provider: new PaystackProvider(secretKey),
    testMode: isTestKey,
  };
}
