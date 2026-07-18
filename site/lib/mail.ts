/**
 * Outbound mail — how anything a visitor submits actually reaches the farm.
 *
 * Deliberately smaller than lib/payments (which is split across three files
 * for provider swapping): there is one transport, and swapping it means
 * replacing one `send` function. The status union is the same shape as
 * PaymentsStatus so routes handle "not configured" identically.
 *
 * Not configured is a normal, honest state — the route still validates the
 * submission and tells the visitor the truth rather than pretending it was
 * delivered. Set RESEND_API_KEY and FARM_INBOX to switch delivery on.
 */

export interface MailMessage {
  subject: string;
  /** Plain text only — these are internal notifications, not marketing. */
  body: string;
  /** Visitor's address, so the farm can just hit reply. */
  replyTo?: string;
}

export type MailStatus =
  | { configured: true; send: (m: MailMessage) => Promise<void> }
  | { configured: false; reason: string };

const RESEND_ENDPOINT = "https://api.resend.com/emails";

export function getMailer(): MailStatus {
  const apiKey = process.env.RESEND_API_KEY;
  const inbox = process.env.FARM_INBOX;
  const from = process.env.MAIL_FROM ?? "Kisi Farm <onboarding@resend.dev>";

  if (!apiKey) {
    return {
      configured: false,
      reason:
        "RESEND_API_KEY is not set, so submissions cannot be delivered. " +
        "Add it (and FARM_INBOX) in the Vercel project settings.",
    };
  }
  if (!inbox) {
    return {
      configured: false,
      reason: "FARM_INBOX is not set — there is no address to deliver to.",
    };
  }

  return {
    configured: true,
    async send(message: MailMessage) {
      const res = await fetch(RESEND_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from,
          to: [inbox],
          subject: message.subject,
          text: message.body,
          ...(message.replyTo ? { reply_to: message.replyTo } : {}),
        }),
      });

      if (!res.ok) {
        // Surfaced to the route, which decides what to tell the visitor.
        // Never swallow this: a silently dropped order is a lost sale.
        throw new Error(`Resend responded ${res.status}: ${await res.text()}`);
      }
    },
  };
}

/** Render a submission as a readable plain-text email body. */
export function formatSubmission(
  fields: Record<string, string | undefined>,
): string {
  return Object.entries(fields)
    .filter(([, v]) => v && v.trim())
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}
