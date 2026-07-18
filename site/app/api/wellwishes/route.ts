import { z } from "zod";
import { formatSubmission, getMailer } from "@/lib/mail";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/wellwishes
 * Messages left for Bantu on the memorial page.
 *
 * These are read by the farm and added to the memorial by hand — there is
 * no public message wall yet, so nothing is published automatically and
 * nothing goes live without a person reading it first. A moderated wall is
 * the obvious next step once a store is chosen (see docs/CONTENT_CHECKLIST.md).
 */

const BodySchema = z.object({
  name: z.string().min(1).max(80),
  message: z.string().min(1).max(1000),
  /** Honeypot — humans never see or fill this field; bots often do. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const limited = await rateLimit(clientKey(req, "wellwishes"), {
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
    // Honest, and gentler than an error screen on a memorial page.
    return Response.json({
      ok: true,
      delivered: false,
      note:
        "Thank you. The memorial wall isn't collecting messages yet, so " +
        "this one wasn't saved — but the flock is glad you stopped.",
    });
  }

  try {
    await mailer.send({
      subject: `Well-wishes for Bantu — from ${body.name}`,
      body: formatSubmission({ From: body.name, Message: body.message }),
    });
  } catch (err) {
    console.error("Well-wishes delivery failed:", err);
    // Never show a grieving visitor a failure. Log it; thank them anyway.
    return Response.json({
      ok: true,
      delivered: false,
      note: "Thank you. The flock is glad you stopped.",
    });
  }

  return Response.json({
    ok: true,
    delivered: true,
    note:
      "Thank you — your message reached the farm. The flock is glad you " +
      "stopped.",
  });
}
