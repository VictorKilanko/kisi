import { z } from "zod";
import { clientKey, rateLimit } from "@/lib/rateLimit";

/**
 * POST /api/newsletter
 * Validated, spam-checked signup endpoint — honestly NOT yet connected to
 * a mailing-list provider (none chosen; see docs/CONTENT_CHECKLIST.md).
 * Nothing is stored; the response says so and the UI repeats it. The
 * provider integration slots in behind this same endpoint in Phase 5.
 */

const BodySchema = z.object({
  email: z.email().max(254),
  /** Honeypot — humans never see or fill this field; bots often do. */
  company: z.string().max(200).optional(),
});

export async function POST(req: Request) {
  const limited = await rateLimit(clientKey(req, "newsletter"), {
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
    return Response.json({ error: "invalid-email" }, { status: 400 });
  }

  if (body.company) {
    // Honeypot tripped: pretend success, store nothing (we store nothing
    // anyway, but bots don't need to know that).
    return Response.json({ ok: true, stored: false });
  }

  // Deliberately not persisted: no provider is configured and we won't
  // hold personal data we can't yet serve. The email is discarded.
  return Response.json({
    ok: true,
    stored: false,
    note:
      "The Coop Times newsletter isn't live yet — your address was NOT " +
      "stored. Check back after launch.",
  });
}
