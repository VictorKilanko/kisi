import { z } from "zod";
import { formatSubmission, getMailer } from "@/lib/mail";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/reps
 * Sales-rep applications: people who want to resell Kisi eggs, day-old chicks
 * and chicken meat in their own area.
 *
 * Like /api/orders this delivers an enquiry to FARM_INBOX via lib/mail and
 * takes no payment or commitment. If mail is unconfigured it says so plainly
 * rather than pretending the application was received.
 */

const BodySchema = z.object({
  name: z.string().min(1).max(80),
  contact: z.string().min(1).max(120),
  area: z.string().min(1).max(120),
  /** Which lines they want to sell, free text (e.g. "eggs and meat"). */
  products: z.string().max(200).optional(),
  /** A little about them, optional. */
  about: z.string().max(1000).optional(),
  /** Honeypot, humans never see or fill this field; bots often do. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const limited = await rateLimit(clientKey(req, "reps"), {
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
          "Our inbox isn't connected yet, so this wasn't delivered. Please " +
          "message us on WhatsApp or use the contact page and we'll talk.",
      },
      { status: 503 },
    );
  }

  try {
    await mailer.send({
      subject: `Sales rep application, ${body.name} (${body.area})`,
      replyTo: body.contact.includes("@") ? body.contact : undefined,
      body: formatSubmission({
        Name: body.name,
        Contact: body.contact,
        Area: body.area,
        "Wants to sell": body.products,
        About: body.about,
      }),
    });
  } catch (err) {
    console.error("Sales rep application delivery failed:", err);
    return Response.json(
      {
        ok: false,
        delivered: false,
        error: "delivery-failed",
        note:
          "Something went wrong sending that. Please message us on WhatsApp " +
          "or use the contact page so it doesn't get lost.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    delivered: true,
    note:
      "Thank you, your details are with the farm. We'll reach out to talk " +
      "about selling Kisi products in your area.",
  });
}
