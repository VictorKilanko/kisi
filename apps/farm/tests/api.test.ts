import { beforeEach, describe, expect, it } from "vitest";
import { POST as checkout } from "@/app/api/support/checkout/route";
import { POST as newsletter } from "@/app/api/newsletter/route";
import { POST as orders } from "@/app/api/orders/route";
import { POST as pledge } from "@/app/api/support/pledge/route";
import { POST as reps } from "@/app/api/reps/route";
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
    const res = await checkout(
      req("/api/support/checkout", { email: "not-an-email" }, "203.0.113.10"),
    );
    expect(res.status).toBe(400);
  });

  it("rejects unknown tiers with 400", async () => {
    const res = await checkout(
      req(
        "/api/support/checkout",
        { tierId: "yacht-fund", email: "a@b.com" },
        "203.0.113.11",
      ),
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
      req(
        "/api/support/checkout",
        { tierId: "feed", email: "a@b.com" },
        "203.0.113.13",
      ),
    );
    expect(res.status).toBe(503);
    const json = (await res.json()) as { error: string };
    expect(json.error).toBe("payments-not-configured");
  });
});

describe("POST /api/newsletter", () => {
  it("accepts a valid email but honestly stores nothing", async () => {
    const res = await newsletter(
      req("/api/newsletter", { email: "a@b.com" }, "203.0.113.20"),
    );
    expect(res.status).toBe(200);
    const json = (await res.json()) as { ok: boolean; stored: boolean };
    expect(json.ok).toBe(true);
    expect(json.stored).toBe(false);
  });

  it("rejects invalid emails", async () => {
    const res = await newsletter(
      req("/api/newsletter", { email: "nope" }, "203.0.113.21"),
    );
    expect(res.status).toBe(400);
  });

  it("pretends success on honeypot hits without storing", async () => {
    const res = await newsletter(
      req(
        "/api/newsletter",
        { email: "bot@spam.com", company: "Spam Inc" },
        "203.0.113.22",
      ),
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

  it("accepts a meat order with a chosen day (503 only because mail is off)", async () => {
    const res = await orders(
      req(
        "/api/orders",
        {
          product: "meat",
          name: "A Customer",
          contact: "customer@example.com",
          area: "Ibadan",
          quantity: "5 birds",
          date: "2026-10-10",
        },
        "203.0.113.32",
      ),
    );
    // Valid shape, so the only failure is the honest unconfigured-mail 503.
    expect(res.status).toBe(503);
    const json = (await res.json()) as { error: string };
    expect(json.error).toBe("mail-unconfigured");
  });
});

describe("POST /api/reps", () => {
  it("refuses honestly (503) when no mail provider is configured", async () => {
    const res = await reps(
      req(
        "/api/reps",
        {
          name: "A Rep",
          contact: "rep@example.com",
          area: "Lagos",
          products: "eggs and meat",
        },
        "203.0.113.40",
      ),
    );
    expect(res.status).toBe(503);
    const json = (await res.json()) as { ok: boolean; error: string };
    expect(json.ok).toBe(false);
    expect(json.error).toBe("mail-unconfigured");
  });

  it("rejects incomplete applications with 400", async () => {
    const res = await reps(
      req("/api/reps", { name: "No contact" }, "203.0.113.41"),
    );
    expect(res.status).toBe(400);
  });

  it("pretends success on honeypot hits without delivering", async () => {
    const res = await reps(
      req(
        "/api/reps",
        {
          name: "Bot",
          contact: "bot@spam.com",
          area: "Nowhere",
          company: "Spam Inc",
        },
        "203.0.113.42",
      ),
    );
    expect(res.status).toBe(200);
    const json = (await res.json()) as { ok: boolean };
    expect(json.ok).toBe(true);
  });
});

describe("POST /api/support/pledge", () => {
  it("refuses honestly (503) when no mail provider is configured", async () => {
    const res = await pledge(
      req(
        "/api/support/pledge",
        {
          kind: "donation",
          name: "A Supporter",
          email: "supporter@example.com",
          fund: "Cold Storage",
        },
        "203.0.113.50",
      ),
    );
    // An undelivered pledge must never look like a delivered one.
    expect(res.status).toBe(503);
    const json = (await res.json()) as { ok: boolean; error: string };
    expect(json.ok).toBe(false);
    expect(json.error).toBe("mail-unconfigured");
  });

  it("rejects an unknown kind with 400", async () => {
    const res = await pledge(
      req(
        "/api/support/pledge",
        { kind: "bribe", name: "X", email: "x@y.com" },
        "203.0.113.51",
      ),
    );
    expect(res.status).toBe(400);
  });

  it("rejects a pledge with no email with 400", async () => {
    const res = await pledge(
      req(
        "/api/support/pledge",
        { kind: "donation", name: "No Email" },
        "203.0.113.52",
      ),
    );
    expect(res.status).toBe(400);
  });

  it("pretends success on honeypot hits without delivering", async () => {
    const res = await pledge(
      req(
        "/api/support/pledge",
        {
          kind: "finance",
          name: "Bot",
          email: "bot@spam.com",
          company: "Spam Inc",
        },
        "203.0.113.53",
      ),
    );
    expect(res.status).toBe(200);
    const json = (await res.json()) as { ok: boolean; delivered: boolean };
    expect(json.ok).toBe(true);
    expect(json.delivered).toBe(false);
  });
});

describe("rate limiter", () => {
  it("blocks after the limit within a window", async () => {
    const key = "test:203.0.113.99";
    for (let i = 0; i < 5; i++) {
      expect(
        (await rateLimit(key, { limit: 5, windowMs: 60_000 })).allowed,
      ).toBe(true);
    }
    const blocked = await rateLimit(key, { limit: 5, windowMs: 60_000 });
    expect(blocked.allowed).toBe(false);
    expect(blocked.retryAfterSeconds).toBeGreaterThan(0);
  });
});
