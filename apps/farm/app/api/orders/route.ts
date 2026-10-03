import { z } from "zod";
import { formatSubmission, getMailer } from "@/lib/mail";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/orders
 * Order enquiries for every farm product line, the farm's actual sales
 * channel: eggs, chicken meat, and day-old chicks.
 *
 * This takes an enquiry, not a payment. The farm confirms availability,
 * price, and delivery (and, for meat, the production day the customer picked)
 * before any money changes hands. No card details are collected here or
 * anywhere on this site.
 *
 * Delivery goes to FARM_INBOX via lib/mail. If mail is unconfigured the
 * response says so plainly rather than implying the order was received:
 * a silently dropped order is a lost customer.
 */

const PRODUCT_LABELS = {
  eggs: "Egg",
  meat: "Chicken meat",
  chicks: "Day-old chick",
} as const;

const BodySchema = z.object({
  /** Which line this enquiry is for; defaults to eggs for older clients. */
  product: z.enum(["eggs", "meat", "chicks"]).optional().default("eggs"),
  name: z.string().min(1).max(80),
  contact: z.string().min(1).max(120),
  area: z.string().min(1).max(120),
  /** How many (birds / chicks); free text so "not sure yet" is allowed. */
  quantity: z.string().max(60).optional(),
  /** Legacy egg field, still sent by the eggs form. */
  crates: z.string().max(40).optional(),
  /** Requested production / delivery day (meat), from the date picker. */
  date: z.string().max(40).optional(),
  notes: z.string().max(1000).optional(),
  /** Honeypot, humans never see or fill this field; bots often do. */
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

  const label = PRODUCT_LABELS[body.product];

  const mailer = getMailer();
  if (!mailer.configured) {
    return Response.json(
      {
        ok: false,
        delivered: false,
        error: "mail-unconfigured",
        note:
          "Our order inbox isn't connected yet, so this enquiry wasn't " +
          "delivered. Please message us on WhatsApp or use the contact " +
          "page and we'll sort your order out directly.",
      },
      { status: 503 },
    );
  }

  try {
    await mailer.send({
      subject: `${label} order enquiry, ${body.name} (${body.area})`,
      replyTo: body.contact.includes("@") ? body.contact : undefined,
      body: formatSubmission({
        Product: label,
        Name: body.name,
        Contact: body.contact,
        Area: body.area,
        Quantity: body.quantity,
        Crates: body.crates,
        "Requested day": body.date,
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
          "Something went wrong sending your enquiry. Please message us on " +
          "WhatsApp or use the contact page so your order doesn't get lost.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    delivered: true,
    note:
      "Thank you, your enquiry is with the farm. We'll come back to you " +
      "with what we have, the price, and delivery for your area.",
  });
}
