"use client";

import Link from "next/link";
import { useState } from "react";
import { whatsappLink } from "@/lib/site";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  | { status: "undelivered"; note: string }
  | { status: "error"; message: string };

const FIELD =
  "mt-1 w-full rounded-lg border border-kisi-green-900/20 px-4 py-3 text-sm";

/**
 * Sign-up for people who want to resell Kisi products in their area. Same
 * honest pattern as OrderForm: it's an enquiry, the farm follows up, and if
 * the inbox isn't connected it says so instead of pretending.
 */
export function RepSignupForm() {
  const [state, setState] = useState<State>({ status: "idle" });
  const waHref = whatsappLink(
    "Hi Kisi Farm, I'd like to sell your products in my area.",
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    setState({ status: "sending" });

    try {
      const res = await fetch("/api/reps", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(d.get("name") ?? ""),
          contact: String(d.get("contact") ?? ""),
          area: String(d.get("area") ?? ""),
          products: String(d.get("products") ?? ""),
          about: String(d.get("about") ?? ""),
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
      if (json.error === "mail-unconfigured" || json.error === "delivery-failed") {
        setState({ status: "undelivered", note: json.note ?? "" });
        return;
      }
      setState({
        status: "error",
        message:
          json.error === "rate-limited"
            ? "Too many attempts, please wait a minute."
            : "Please check your name, contact and area.",
      });
    } catch {
      setState({
        status: "undelivered",
        note:
          "We couldn't reach the farm's inbox just now. Please use the " +
          "contact page so your details don't get lost.",
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
          Thank you
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
              Message on WhatsApp
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
      aria-label="Sign up to sell Kisi products"
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
          <span className="kicker text-kisi-charcoal-600">Where you sell</span>
          <input
            type="text"
            name="area"
            required
            maxLength={120}
            placeholder="Town or area you cover"
            className={FIELD}
          />
        </label>
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">
            What you&apos;d like to sell
          </span>
          <input
            type="text"
            name="products"
            maxLength={200}
            placeholder="Eggs, chicks, meat, or all"
            className={FIELD}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="kicker text-kisi-charcoal-600">
            A little about you (optional)
          </span>
          <textarea
            name="about"
            maxLength={1000}
            rows={3}
            placeholder="Any selling experience, your customers, why you want to sell for us"
            className={FIELD}
          />
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
          {state.status === "sending" ? "Sending…" : "Sign me up"}
        </button>
        {waHref ? (
          <>
            <span className="text-xs text-kisi-charcoal-600">or</span>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1da851]"
            >
              WhatsApp us
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
            This is a first hello, not a contract. We follow up to talk about
            how it works, and we never ask for money to sign up.
          </span>
        )}
      </p>
    </form>
  );
}
