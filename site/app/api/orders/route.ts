import { z } from "zod";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/orders
 * Egg order enquiries from the Shop.
 *
 * This takes an enquiry, not a payment. The farm confirms availability,
 * price, and delivery for the customer's area before any money changes
 * hands — no card details are collected here or anywhere on this site.
 * Enquiries are not persisted yet: no store or mail provider is configured
 * (see docs/CONTENT_CHECKLIST.md), and the UI tells the visitor plainly.
 */

const BodySchema = z.object({
  name: z.string().min(1).max(80),
  contact: z.string().min(1).max(120),
  area: z.string().min(1).max(120),
  crates: z.string().min(1).max(40),
  notes: z.string().max(1000).optional(),
  /** Honeypot — humans never see or fill this field; bots often do. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const limited = rateLimit(clientKey(req, "orders"), {
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
    return Response.json({ error: "invalid" }, { status: 400 });
  }

  if (body.company) {
    // Honeypot tripped: pretend success, keep nothing.
    return Response.json({ ok: true, stored: false });
  }

  return Response.json({
    ok: true,
    stored: false,
    note:
      "Order enquiries aren't being delivered yet — the farm's order inbox " +
      "isn't connected, so this one wasn't sent. Please use the contact " +
      "page to reach us in the meantime.",
  });
}
