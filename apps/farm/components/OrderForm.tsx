"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  /** Validated fine, but delivery failed, send them to the contact page. */
  | { status: "undelivered"; note: string }
  | { status: "error"; message: string };

type Product = "eggs" | "meat" | "chicks";

const FIELD =
  "mt-1 w-full rounded-lg border border-kisi-green-900/20 px-4 py-3 text-sm";

/** Per-product wording, so one form serves eggs, meat and day-old chicks. */
const CONFIG: Record<
  Product,
  {
    quantityLabel: string;
    quantityPlaceholder: string;
    withDate: boolean;
    submit: string;
    whatsapp: string;
  }
> = {
  eggs: {
    quantityLabel: "How many crates?",
    quantityPlaceholder: "e.g. 2 crates, or 'not sure yet'",
    withDate: false,
    submit: "Ask about ordering",
    whatsapp: "Hi Kisi Farm, I'd like to order eggs.",
  },
  meat: {
    quantityLabel: "How many birds?",
    quantityPlaceholder: "e.g. 5 birds, or 'not sure yet'",
    withDate: true,
    submit: "Request these birds",
    whatsapp: "Hi Kisi Farm, I'd like to order chicken meat.",
  },
  chicks: {
    quantityLabel: "How many chicks?",
    quantityPlaceholder: "e.g. 50 chicks, or 'not sure yet'",
    withDate: false,
    submit: "Ask about chicks",
    whatsapp: "Hi Kisi Farm, I'd like to order day-old chicks.",
  },
};

/**
 * Tomorrow in local time, YYYY-MM-DD, so the date picker can't request a past
 * day. Built from local date parts (not toISOString, which is UTC) so it stays
 * correct in the evening in Nigeria (UTC+1).
 */
function tomorrowISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/**
 * Order enquiry form for any product line. Takes no payment, the farm
 * confirms first. For meat it also books the production day the customer picks.
 */
export function OrderForm({ product = "eggs" }: { product?: Product }) {
  const [state, setState] = useState<State>({ status: "idle" });
  const cfg = CONFIG[product];
  const waHref = whatsappLink(cfg.whatsapp);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setState({ status: "sending" });

    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product,
          name: String(d.get("name") ?? ""),
          contact: String(d.get("contact") ?? ""),
          area: String(d.get("area") ?? ""),
          quantity: String(d.get("quantity") ?? ""),
          date: cfg.withDate ? String(d.get("date") ?? "") : "",
          notes: String(d.get("notes") ?? ""),
          company: String(d.get("company") ?? ""),
        }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        note?: string;
        error?: string;
      };

      if (res.ok && json.ok) {
        form.reset();
        setState({ status: "done", note: json.note ?? "Thank you, we'll be in touch." });
        return;
      }

      // An undelivered order is a lost sale, so route the customer somewhere
      // that actually reaches the farm rather than just showing an error.
      if (json.error === "mail-unconfigured" || json.error === "delivery-failed") {
        setState({ status: "undelivered", note: json.note ?? "" });
        return;
      }
      setState({
        status: "error",
        message:
          json.error === "rate-limited"
            ? "That's a lot of orders at once, please wait a minute."
            : "Please check your name, contact and area.",
      });
    } catch {
      setState({
        status: "undelivered",
        note:
          "We couldn't reach the farm's order inbox just now. Please use the " +
          "contact page so your order doesn't get lost.",
      });
    }
  }

  if (state.status === "done") {
    return (
      <div
        aria-live="polite"
        className="rounded-2xl border-2 border-kisi-green-700 bg-white p-6"
      >
        <p className="font-display text-xl font-bold text-kisi-green-900">
          Enquiry sent
        </p>
        <p className="mt-2 text-sm text-kisi-charcoal-600">{state.note}</p>
        <button
          type="button"
          onClick={() => setState({ status: "idle" })}
          className="mt-4 text-sm font-semibold text-kisi-green-700 underline"
        >
          Send another
        </button>
      </div>
    );
  }

  if (state.status === "undelivered") {
    return (
      <div
        aria-live="polite"
        className="rounded-2xl border-2 border-kisi-earth-500 bg-white p-6"
      >
        <p className="font-display text-xl font-bold text-kisi-earth-700">
          We couldn&apos;t send that
        </p>
        <p className="mt-2 text-sm text-kisi-charcoal-600">{state.note}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {waHref ? (
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#1da851]"
            >
              Order on WhatsApp
            </a>
          ) : null}
          <Link
            href="/visit"
            className="inline-block rounded-full bg-kisi-green-700 px-5 py-2.5 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
          >
            Contact the farm →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
      aria-label="Order from Kisi Farm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">Your name</span>
          <input type="text" name="name" required maxLength={80} className={FIELD} />
        </label>
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">Phone or email</span>
          <input
            type="text"
            name="contact"
            required
            maxLength={120}
            placeholder="How should we reach you?"
            className={FIELD}
          />
        </label>
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">Your area</span>
          <input
            type="text"
            name="area"
            required
            maxLength={120}
            placeholder="Town or neighbourhood"
            className={FIELD}
          />
        </label>
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">{cfg.quantityLabel}</span>
          <input
            type="text"
            name="quantity"
            required
            maxLength={60}
            placeholder={cfg.quantityPlaceholder}
            className={FIELD}
          />
        </label>
        {cfg.withDate ? (
          <label className="block sm:col-span-2">
            <span className="kicker text-kisi-charcoal-600">
              Pick your day (we process to order)
            </span>
            <input
              type="date"
              name="date"
              required
              min={tomorrowISO()}
              className={FIELD}
            />
          </label>
        ) : null}
        <label className="block sm:col-span-2">
          <span className="kicker text-kisi-charcoal-600">
            Anything else? (optional)
          </span>
          <textarea name="notes" maxLength={1000} rows={3} className={FIELD} />
        </label>
        {/* Honeypot: visually hidden, tab-skipped; humans never fill it */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="rounded-full bg-kisi-green-700 px-6 py-3 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900 disabled:opacity-60"
        >
          {state.status === "sending" ? "Sending…" : cfg.submit}
        </button>
        {waHref ? (
          <>
            <span className="text-xs text-kisi-charcoal-600">or</span>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1da851]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.23 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43l-.48-.01c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
              </svg>
              WhatsApp
            </a>
          </>
        ) : null}
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-xs">
        {state.status === "error" && (
          <span className="text-kisi-earth-700">{state.message}</span>
        )}
        {state.status === "idle" && (
          <span className="opacity-70">
            This is an enquiry, not an order, we confirm price and delivery
            before you pay anything, and we never ask for card details here.
          </span>
        )}
      </p>
    </form>
  );
}
