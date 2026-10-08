"use client";

import { useState } from "react";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  | { status: "error"; message: string };

/**
 * "Register interest" capture for the Build the Farm naming campaign.
 *
 * Posts to /api/support/pledge with kind "naming", so interest reaches the
 * farm's support inbox (the address lives server-side in the route, never
 * here) exactly like a donation pledge or finance enquiry. Honest by design:
 * if mail isn't configured yet the endpoint returns 503 and we say so and
 * point to WhatsApp, rather than pretending it was received.
 */
export function CampaignInterestForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState({ status: "sending" });

    try {
      const res = await fetch("/api/support/pledge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "naming",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          fund: String(data.get("build") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; note?: string };

      if (res.ok && json.ok) {
        form.reset();
        setState({
          status: "done",
          note: json.note ?? "Noted. We'll be in touch when naming opens.",
        });
        return;
      }
      setState({
        status: "error",
        message:
          json.note ??
          "That didn't go through. Please try again, or message us on WhatsApp.",
      });
    } catch {
      setState({
        status: "error",
        message: "Network hiccup, please try again.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} aria-label="Register interest in Build the Farm">
      <div className="mx-auto grid max-w-md gap-3 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="sr-only">Your name</span>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            placeholder="Your name"
            className="w-full rounded-full border border-kisi-green-900/20 bg-white px-5 py-3 text-sm text-kisi-charcoal-900"
          />
        </label>
        <label className="sm:col-span-2">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            name="email"
            required
            maxLength={254}
            placeholder="your@email.com"
            className="w-full rounded-full border border-kisi-green-900/20 bg-white px-5 py-3 text-sm text-kisi-charcoal-900"
          />
        </label>
        <label className="sm:col-span-2">
          <span className="sr-only">Which build interests you (optional)</span>
          <input
            type="text"
            name="build"
            maxLength={120}
            placeholder="Which build interests you? (optional)"
            className="w-full rounded-full border border-kisi-green-900/20 bg-white px-5 py-3 text-sm text-kisi-charcoal-900"
          />
        </label>
        {/* Honeypot: visually hidden, tab-skipped; humans never fill it */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label>
            Company
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
            />
          </label>
        </div>
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="rounded-full bg-kisi-green-900 px-6 py-3 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-700 disabled:opacity-60 sm:col-span-2"
        >
          {state.status === "sending" ? "Sending…" : "Register my interest"}
        </button>
      </div>
      <p
        aria-live="polite"
        className="mt-3 min-h-5 text-sm text-kisi-charcoal-600"
      >
        {state.status === "done" && (
          <span className="font-medium text-kisi-green-700">{state.note}</span>
        )}
        {state.status === "error" && (
          <span className="text-kisi-earth-700">{state.message}</span>
        )}
        {state.status === "idle" && (
          <span className="opacity-70">
            Naming isn&apos;t open for payment yet. Register and you&apos;ll be
            first to hear.
          </span>
        )}
      </p>
    </form>
  );
}
