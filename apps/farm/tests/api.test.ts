import { beforeEach, describe, expect, it } from "vitest";
import { POST as checkout } from "@/app/api/support/checkout/route";
import { POST as newsletter } from "@/app/api/newsletter/route";
import { POST as orders } from "@/app/api/orders/route";
import { getPayments } from "@/lib/payments";
import { rateLimit } from "@/lib/rateLimit";

/**
 * Server-side behavior tests: the live-payments lock, server-resolved
 * amounts, validation, and rate limiting — run against the real route
 * handlers with no provider configured (the shipping state).
 */

function req(path: string, body: unknown, ip = "203.0.113.7"): Request {
  return new Request(`http://localhost${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

beforeEach(() => {
  delete process.env.PAYSTACK_SECRET_KEY;
  delete process.env.PAYMENTS_ALLOW_LIVE;
  // Assert the shipping state: no mail provider, no Redis. Tests must never
  // depend on a developer's local .env.
  delete process.env.RESEND_API_KEY;
  delete process.env.FARM_INBOX;
  delete process.env.UPSTASH_REDIS_REST_URL;
  delete process.env.UPSTASH_REDIS_REST_TOKEN;
});

describe("payments live-lock", () => {
  it("is unconfigured without keys", () => {
    const p = getPayments();
    expect(p.configured).toBe(false);
  });

  it("REFUSES a live secret key even with PAYMENTS_ALLOW_LIVE=true (hard-coded lock)", () => {
    process.env.PAYSTACK_SECRET_KEY = "sk_live_definitely_not_a_real_key";
    process.env.PAYMENTS_ALLOW_LIVE = "true";
    const p = getPayments();
    expect(p.configured).toBe(false);
    if (!p.configured) expect(p.reason).toMatch(/BLOCKED/);
  });

  it("accepts a test key, in test mode", () => {
    process.env.PAYSTACK_SECRET_KEY = "sk_test_definitely_not_a_real_key";
    const p = getPayments();
    expect(p.configured).toBe(true);
    if (p.configured) expect(p.testMode).toBe(true);
  });
});

describe("POST /api/support/checkout", () => {
  it("rejects malformed bodies with 400", async () => {
    const res = await checkout(req("/api/support/checkout", { email: "not-an-email" }, "203.0.113.10"));
    expect(res.status).toBe(400);
  });

  it("rejects unknown tiers with 400", async () => {
    const res = await checkout(
      req("/api/support/checkout", { tierId: "yacht-fund", email: "a@b.com" }, "203.0.113.11"),
    );
    expect(res.status).toBe(400);
  });

  it("rejects sponsoring via a non-sponsorship tier", async () => {
    const res = await checkout(
      req(
        "/api/support/checkout",
        { tierId: "feed", email: "a@b.com", chickenId: "chi-chi" },
        "203.0.113.12",
      ),
    );
    expect(res.status).toBe(400);
  });

  it("returns an honest 503 when payments are not configured", async () => {
    const res = await checkout(
      req("/api/support/checkout", { tierId: "feed", email: "a@b.com" }, "203.0.113.13"),
    );
    expect(res.status).toBe(503);
    const json = (await res.json()) as { error: string };
    expect(json.error).toBe("payments-not-configured");
  });
});

describe("POST /api/newsletter", () => {
  it("accepts a valid email but honestly stores nothing", async () => {
    const res = await newsletter(req("/api/newsletter", { email: "a@b.com" }, "203.0.113.20"));
    expect(res.status).toBe(200);
    const json = (await res.json()) as { ok: boolean; stored: boolean };
    expect(json.ok).toBe(true);
    expect(json.stored).toBe(false);
  });

  it("rejects invalid emails", async () => {
    const res = await newsletter(req("/api/newsletter", { email: "nope" }, "203.0.113.21"));
    expect(res.status).toBe(400);
  });

  it("pretends success on honeypot hits without storing", async () => {
    const res = await newsletter(
      req("/api/newsletter", { email: "bot@spam.com", company: "Spam Inc" }, "203.0.113.22"),
    );
    expect(res.status).toBe(200);
    const json = (await res.json()) as { ok: boolean; note?: string };
    expect(json.ok).toBe(true);
    expect(json.note).toBeUndefined(); // bots get no explanation
  });
});

describe("POST /api/orders", () => {
  it("refuses honestly (503) when no mail provider is configured", async () => {
    const res = await orders(
      req(
        "/api/orders",
        {
          name: "A Customer",
          contact: "customer@example.com",
          area: "Ibadan",
          crates: "2",
        },
        "203.0.113.30",
      ),
    );
    // An undelivered order must never look like a successful one.
    expect(res.status).toBe(503);
    const json = (await res.json()) as { ok: boolean; error: string };
    expect(json.ok).toBe(false);
    expect(json.error).toBe("mail-unconfigured");
  });

  it("rejects incomplete orders with 400", async () => {
    const res = await orders(
      req("/api/orders", { name: "No contact details" }, "203.0.113.31"),
    );
    expect(res.status).toBe(400);
  });
});

describe("rate limiter", () => {
  it("blocks after the limit within a window", async () => {
    const key = "test:203.0.113.99";
    for (let i = 0; i < 5; i++) {
      expect((await rateLimit(key, { limit: 5, windowMs: 60_000 })).allowed).toBe(true);
    }
    const blocked = await rateLimit(key, { limit: 5, windowMs: 60_000 });
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });
});
