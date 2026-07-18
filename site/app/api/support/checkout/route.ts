import { z } from "zod";
import { findChicken, getSupportTier } from "@/lib/content";
import { getPayments } from "@/lib/payments";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/support/checkout
 * Creates a hosted-checkout session (TEST MODE ONLY — live keys are blocked
 * in lib/payments/index.ts until legal status is confirmed) and returns the
 * provider's redirect URL. Amounts are resolved server-side from the tier —
 * the client can never set a price.
 */

const BodySchema = z.object({
  tierId: z.string().min(1).max(64),
  email: z.email().max(254),
  chickenId: z.string().max(64).optional(),
});

export async function POST(req: Request) {
  const limited = await rateLimit(clientKey(req, "checkout"), {
    limit: 5,
    windowMs: 60_000,
  });
  if (!limited.allowed) {
    return Response.json(
      { error: "rate-limited", retryAfterSeconds: limited.retryAfterSeconds },
      { status: 429, headers: { "Retry-After": String(limited.retryAfterSeconds) } },
    );
  }

  let body: z.infer<typeof BodySchema>;
  try {
    body = BodySchema.parse(await req.json());
  } catch {
    return Response.json({ error: "invalid-request" }, { status: 400 });
  }

  const tier = getSupportTier(body.tierId);
  if (!tier) return Response.json({ error: "unknown-tier" }, { status: 400 });

  if (body.chickenId) {
    const chicken = findChicken(body.chickenId);
    if (!chicken || tier.kind !== "sponsorship" || !chicken.sponsorable) {
      return Response.json({ error: "invalid-sponsorship" }, { status: 400 });
    }
  }

  const payments = getPayments();
  if (!payments.configured) {
    // Honest 503: the programme is not live (no keys, or live keys blocked).
    return Response.json(
      { error: "payments-not-configured", reason: payments.reason },
      { status: 503 },
    );
  }

  // Tier pricing is unset until the owner decides amounts. In the sandbox,
  // PAYMENTS_TEST_AMOUNT_NGN lets the full flow be exercised end-to-end.
  const amountNGN =
    tier.amountNGN ?? Number(process.env.PAYMENTS_TEST_AMOUNT_NGN ?? 0);
  if (!Number.isFinite(amountNGN) || amountNGN <= 0) {
    return Response.json(
      { error: "amount-not-set", reason: "Tier pricing awaits the owner." },
      { status: 503 },
    );
  }

  const origin = new URL(req.url).origin;
  try {
    const session = await payments.provider.createCheckout({
      tierId: tier.id,
      amountKobo: Math.round(amountNGN * 100),
      currency: "NGN",
      email: body.email,
      chickenId: body.chickenId,
      callbackUrl: `${origin}/support?status=returned`,
    });
    return Response.json({
      url: session.url,
      reference: session.reference,
      testMode: payments.testMode,
    });
  } catch (err) {
    console.error("checkout failed:", err);
    return Response.json({ error: "provider-error" }, { status: 502 });
  }
}
