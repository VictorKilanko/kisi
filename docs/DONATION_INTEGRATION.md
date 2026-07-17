# DONATION_INTEGRATION.md — Support & Payments

> **STATUS (Phase 4, 2026-07-17): IMPLEMENTED in test-mode-only form.**
> `site/lib/payments/` holds the abstraction + Paystack adapter;
> `site/app/api/support/{checkout,webhook}` are the route handlers.
> **Live mode is locked in code** — `LIVE_PAYMENTS_UNLOCKED = false` in
> `site/lib/payments/index.ts` cannot be overridden by any environment
> variable; unlocking requires a reviewed code change after the owner
> confirms legal registration status. Verified behavior: without keys the
> checkout API returns an honest 503; with sk_test_ keys the full Paystack
> sandbox flow runs; non-test keys are refused. Tier amounts are unset
> (owner decision pending) — the sandbox uses PAYMENTS_TEST_AMOUNT_NGN.

(Original Phase 1 plan follows; still the governing rules.)

## Legal framing first (blocking)

Kisi Farm is presumed to be a **business, not a registered charity**. Until
the owner confirms legal status (see CONTENT_CHECKLIST):

- Nothing is called a "donation" in a charitable/tax-deductible sense. No tax
  deductibility is ever claimed.
- Copy frames payments as **farm support / sponsorship / gifts** toward named
  care categories (feed, veterinary care, clean water, housing, solar, senior
  hens, education).
- "Sponsor a Chicken" explicitly does **not** confer ownership of the animal —
  stated in the tier copy and the terms page.
- `/support/terms` covers: what the payment is, refunds, privacy, security.
  Drafted as clearly-marked placeholder legal text for owner/professional
  review before launch.

## Provider strategy

**Abstraction layer** so the provider is swappable:

```ts
interface PaymentProvider {
  createCheckout(input: { tierId; amountNGN?; currency; kind:
    "one-time" | "recurring"; sponsorChickenId?; email }): Promise<{ url }>;
  verifyWebhook(req): Promise<PaymentEvent>;   // signature-checked
}
```

- **Primary candidate: Paystack** — NGN native, strong Nigerian card/bank/
  USSD support, hosted checkout (we never touch card data), subscriptions for
  recurring support, test mode, webhooks.
- **Alternate: Flutterwave** (similar coverage); **Stripe** only if diaspora
  demand justifies it and availability fits the business's registration.
- Decision finalized in Phase 4 with the owner's business/bank details.

## Rules (hard requirements)

1. Hosted checkout only — no card fields on our site, no card data stored.
2. All keys in environment variables; publishable vs secret separation;
   webhooks signature-verified; **sandbox/test mode only** until the launch
   review.
3. Serverless route handlers: `POST /api/support/checkout`,
   `POST /api/support/webhook` — validated, rate-limited.
4. Support-impact/transparency section reports only real, owner-confirmed
   figures; until then it explains *intended* use of funds with no invented
   numbers.
5. Sponsorship confirmations by email (provider receipt + our optional
   follow-up); minimal personal data retained (email, tier, timestamp).
6. Memorial-status chickens are not sponsorable (enforced in the content
   model).

## Environment variables (reserved names)

```
PAYMENT_PROVIDER=paystack
PAYSTACK_SECRET_KEY=          # server only, test key until launch
PAYSTACK_PUBLIC_KEY=
PAYMENT_WEBHOOK_SECRET=
```

## Phase 4 build order

1. Tiers content (`content/support/tiers.ts`) + support page UI with legal
   placeholder copy.
2. Abstraction layer + Paystack adapter in test mode, end-to-end sandbox flow.
3. Webhook → (later) sponsor wall/thank-you content hook.
4. Terms/refund/privacy pages finalized with owner.
5. Launch checklist: real keys via env, live-mode smoke test with a small real
   transaction, refund-path test.
