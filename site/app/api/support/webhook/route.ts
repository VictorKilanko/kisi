import { getPayments } from "@/lib/payments";

/**
 * POST /api/support/webhook
 * Provider webhook receiver. Signature-verified against the RAW body
 * (timing-safe) before anything is trusted. In this phase we acknowledge
 * verified events and log them — the sponsor thank-you/wall pipeline that
 * would consume them is Phase 5 work. Unsigned or badly-signed requests
 * are rejected.
 */
export async function POST(req: Request) {
  const payments = getPayments();
  if (!payments.configured) {
    // No provider configured — nothing can be verified; reject.
    return new Response("payments not configured", { status: 503 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-paystack-signature");

  try {
    const event = await payments.provider.verifyWebhook(rawBody, signature);
    // Verified. No PII is persisted in this phase; we log the event type
    // and reference only (never card data — we never see card data).
    if (event.type === "payment.succeeded") {
      console.log(
        `[support-webhook] verified ${event.type} ref=${event.reference} (testMode=${payments.testMode})`,
      );
    } else if (event.type === "payment.failed") {
      console.log(`[support-webhook] verified ${event.type} ref=${event.reference}`);
    }
    return new Response("ok", { status: 200 });
  } catch {
    return new Response("invalid signature", { status: 401 });
  }
}
