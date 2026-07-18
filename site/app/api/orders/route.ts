import { z } from "zod";
import { formatSubmission, getMailer } from "@/lib/mail";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/orders
 * Egg order enquiries from the Shop — the farm's actual sales channel.
 *
 * This takes an enquiry, not a payment. The farm confirms availability,
 * price, and delivery for the customer's area before any money changes
 * hands — no card details are collected here or anywhere on this site.
 *
 * Delivery goes to FARM_INBOX via lib/mail. If mail is unconfigured the
 * response says so plainly rather than implying the order was received:
 * a silently dropped order is a lost customer.
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
  const limited = await rateLimit(clientKey(req, "orders"), {
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

  const mailer = getMailer();
  if (!mailer.configured) {
    return Response.json(
      {
        ok: false,
        delivered: false,
        error: "mail-unconfigured",
        note:
          "Our order inbox isn't connected yet, so this enquiry wasn't " +
          "delivered. Please reach us through the contact page and we'll " +
          "sort your eggs out directly.",
      },
      { status: 503 },
    );
  }

  try {
    await mailer.send({
      subject: `Egg order enquiry — ${body.name} (${body.area})`,
      replyTo: body.contact.includes("@") ? body.contact : undefined,
      body: formatSubmission({
        Name: body.name,
        Contact: body.contact,
        Area: body.area,
        Crates: body.crates,
        Notes: body.notes,
      }),
    });
  } catch (err) {
    console.error("Order enquiry delivery failed:", err);
    return Response.json(
      {
        ok: false,
        delivered: false,
        error: "delivery-failed",
        note:
          "Something went wrong sending your enquiry. Please try the " +
          "contact page so your order doesn't get lost.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    delivered: true,
    note:
      "Thank you — your enquiry is with the farm. We'll come back to you " +
      "with what we have, the price, and delivery for your area.",
  });
}
