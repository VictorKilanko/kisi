import { createHmac, timingSafeEqual } from "node:crypto";
import type {
  CheckoutInput,
  CheckoutSession,
  PaymentEvent,
  PaymentProvider,
} from "@/lib/payments/types";

/**
 * Paystack adapter — hosted checkout only.
 * The visitor is redirected to Paystack's own payment page; card details
 * never touch this application. Server-side secret key only; webhook
 * signatures verified with a timing-safe HMAC comparison.
 */

const PAYSTACK_API = "https://api.paystack.co";

interface PaystackInitResponse {
  status: boolean;
  message: string;
  data?: { authorization_url: string; reference: string };
}

export class PaystackProvider implements PaymentProvider {
  readonly name = "paystack";
  readonly testMode: boolean;

  constructor(private readonly secretKey: string) {
    this.testMode = secretKey.startsWith("sk_test_");
  }

  async createCheckout(input: CheckoutInput): Promise<CheckoutSession> {
    const res = await fetch(`${PAYSTACK_API}/transaction/initialize`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: input.email,
        amount: input.amountKobo,
        currency: input.currency,
        callback_url: input.callbackUrl,
        metadata: {
          tierId: input.tierId,
          chickenId: input.chickenId ?? null,
          // Recorded so a mistaken live transaction could be traced and
          // refunded; in enforced test mode this should never matter.
          mode: this.testMode ? "test" : "live",
        },
      }),
    });
    const json = (await res.json()) as PaystackInitResponse;
    if (!res.ok || !json.status || !json.data) {
      throw new Error(`Paystack initialize failed: ${json.message ?? res.status}`);
    }
    return { url: json.data.authorization_url, reference: json.data.reference };
  }

  async verifyWebhook(rawBody: string, signature: string | null): Promise<PaymentEvent> {
    if (!signature) throw new Error("Missing x-paystack-signature header");
    const expected = createHmac("sha512", this.secretKey).update(rawBody).digest("hex");
    const a = Buffer.from(expected, "utf8");
    const b = Buffer.from(signature, "utf8");
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      throw new Error("Invalid webhook signature");
    }
    const payload = JSON.parse(rawBody) as {
      event?: string;
      data?: { reference?: string; amount?: number; customer?: { email?: string } };
    };
    if (payload.event === "charge.success" && payload.data?.reference) {
      return {
        type: "payment.succeeded",
        reference: payload.data.reference,
        amountKobo: payload.data.amount ?? 0,
        email: payload.data.customer?.email,
      };
    }
    if (payload.event === "charge.failed" && payload.data?.reference) {
      return { type: "payment.failed", reference: payload.data.reference };
    }
    return { type: "unrecognized", raw: payload };
  }
}
