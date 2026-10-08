import { z } from "zod";
import { formatSubmission, getMailer } from "@/lib/mail";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/support/pledge
 *
 * Two kinds of enquiry from the Support page, both routed to the farm's
 * support-and-finance inbox (SUPPORT_INBOX, default victor@panafrican.city):
 *
 *   - "donation": a pledge toward one of the five farm funds. No card is
 *     taken here; this starts a conversation, so money and bank details stay
 *     off the website entirely.
 *   - "finance": a debt-financing / investment enquiry for people who want to
 *     lend to or invest in the farm rather than give.
 *
 * The recipient address is never shown to visitors. Like /api/orders and
 * /api/reps, if mail is unconfigured the route says so plainly (503) rather
 * than pretending the message was delivered.
 */

/** Dedicated inbox for support and finance enquiries, server-side only. */
const SUPPORT_INBOX = process.env.SUPPORT_INBOX ?? "victor@panafrican.city";

const BodySchema = z.object({
  kind: z.enum(["donation", "finance"]),
  name: z.string().min(1).max(80),
  email: z.string().email().max(254),
  /** Donation: the fund they want to back. Finance: free-form interest. */
  fund: z.string().max(120).optional(),
  /** Amount or instrument they have in mind, free text, optional. */
  amount: z.string().max(120).optional(),
  /** Organisation, for finance enquiries, optional. */
  organisation: z.string().max(120).optional(),
  message: z.string().max(2000).optional(),
  /** Honeypot, humans never see or fill this field; bots often do. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const limited = await rateLimit(clientKey(req, "pledge"), {
    limit: 5,
    windowMs: 60_000,
  });
  if (!limited.allowed) {
    return Response.json(
      { error: "rate-limited", retryAfterSeconds: limited.retryAfterSeconds },
      {
        status: 429,
        headers: { "Retry-After": String(limited.retryAfterSeconds) },
      },
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
    return Response.json({ ok: true, delivered: false });
  }

  const mailer = getMailer(SUPPORT_INBOX);
  if (!mailer.configured) {
    return Response.json(
      {
        ok: false,
        delivered: false,
        error: "mail-unconfigured",
        note:
          "Our inbox isn't connected yet, so this wasn't delivered. Please " +
          "message us on WhatsApp and we'll pick it up from there.",
      },
      { status: 503 },
    );
  }

  const isFinance = body.kind === "finance";
  const subject = isFinance
    ? `Debt-financing enquiry, ${body.name}`
    : `Donation pledge, ${body.name}${body.fund ? ` (${body.fund})` : ""}`;

  try {
    await mailer.send({
      subject,
      replyTo: body.email,
      body: formatSubmission({
        Kind: isFinance ? "Debt financing / investment" : "Donation pledge",
        Name: body.name,
        Email: body.email,
        [isFinance ? "Area of interest" : "Fund"]: body.fund,
        [isFinance ? "Amount / instrument" : "Amount in mind"]: body.amount,
        Organisation: body.organisation,
        Message: body.message,
      }),
    });
  } catch (err) {
    console.error("Support pledge delivery failed:", err);
    return Response.json(
      {
        ok: false,
        delivered: false,
        error: "delivery-failed",
        note:
          "Something went wrong sending that. Please message us on WhatsApp " +
          "so it doesn't get lost.",
      },
      { status: 502 },
    );
  }

  return Response.json({
    ok: true,
    delivered: true,
    note: isFinance
      ? "Thank you. Your enquiry is with the farm's finance contact and we'll be in touch."
      : "Thank you. Your pledge is with the farm and we'll reach out about the next step.",
  });
}
