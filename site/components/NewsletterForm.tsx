"use client";

import { useState } from "react";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  | { status: "error"; message: string };

/**
 * Newsletter signup — validated and honeypot-protected. Honest by design:
 * no mailing-list provider is connected yet, the endpoint stores nothing,
 * and the success message says so.
 */
export function NewsletterForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState({ status: "sending" });

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        note?: string;
        error?: string;
      };

      if (res.ok && json.ok) {
        form.reset();
        setState({
          status: "done",
          note: json.note ?? "Signed up — we'll be in touch.",
        });
        return;
      }
      setState({
        status: "error",
        message:
          json.error === "rate-limited"
            ? "Too many attempts — please wait a minute."
            : "That email didn't look right. Try again?",
      });
    } catch {
      setState({ status: "error", message: "Network hiccup — please try again." });
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-4" aria-label="Newsletter signup (preview)">
      <div className="flex max-w-md flex-col gap-3 sm:flex-row">
        <label className="flex-1">
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
        {/* Honeypot: visually hidden, tab-skipped; humans never fill it */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="rounded-full bg-kisi-gold-500 px-6 py-3 text-sm font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300 disabled:opacity-60"
        >
          {state.status === "sending" ? "Sending…" : "Keep me posted"}
        </button>
      </div>
      <p aria-live="polite" className="mt-2 min-h-5 text-xs">
        {state.status === "done" && <span>{state.note}</span>}
        {state.status === "error" && <span className="text-kisi-earth-700">{state.message}</span>}
        {state.status === "idle" && (
          <span className="opacity-70">
            Preview: the list launches later — addresses aren&apos;t stored yet.
          </span>
        )}
      </p>
    </form>
  );
}
