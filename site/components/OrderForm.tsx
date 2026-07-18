"use client";

import Link from "next/link";
import { useState } from "react";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  /** Validated fine, but delivery failed — send them to the contact page. */
  | { status: "undelivered"; note: string }
  | { status: "error"; message: string };

const FIELD =
  "mt-1 w-full rounded-lg border border-kisi-green-900/20 px-4 py-3 text-sm";

/** Egg order enquiry form. Takes no payment — the farm confirms first. */
export function OrderForm() {
  const [state, setState] = useState<State>({ status: "idle" });

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
          name: String(d.get("name") ?? ""),
          contact: String(d.get("contact") ?? ""),
          area: String(d.get("area") ?? ""),
          crates: String(d.get("crates") ?? ""),
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
        setState({ status: "done", note: json.note ?? "Thank you — we'll be in touch." });
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
            ? "That's a lot of orders at once — please wait a minute."
            : "Please check your name, contact, area, and crate count.",
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
        <Link
          href="/visit"
          className="mt-4 inline-block rounded-full bg-kisi-green-700 px-5 py-2.5 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
        >
          Contact the farm →
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
      aria-label="Order eggs from Kisi Farm"
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
          <span className="kicker text-kisi-charcoal-600">How many crates?</span>
          <input
            type="text"
            name="crates"
            required
            maxLength={40}
            placeholder="e.g. 2 crates, or 'not sure yet'"
            className={FIELD}
          />
        </label>
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
      <button
        type="submit"
        disabled={state.status === "sending"}
        className="mt-5 rounded-full bg-kisi-green-700 px-6 py-3 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900 disabled:opacity-60"
      >
        {state.status === "sending" ? "Sending…" : "Ask about ordering"}
      </button>
      <p aria-live="polite" className="mt-3 min-h-5 text-xs">
        {state.status === "error" && (
          <span className="text-kisi-earth-700">{state.message}</span>
        )}
        {state.status === "idle" && (
          <span className="opacity-70">
            This is an enquiry, not an order — we confirm price and delivery
            before you pay anything, and we never ask for card details here.
          </span>
        )}
      </p>
    </form>
  );
}
