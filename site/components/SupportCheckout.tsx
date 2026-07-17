"use client";

import { useState } from "react";
import type { SupportTier } from "@/lib/schemas";

type State =
  | { status: "idle" }
  | { status: "working" }
  | { status: "unavailable"; reason: string }
  | { status: "error"; message: string };

/**
 * The checkout flow, wired end-to-end but honest: the API refuses to create
 * sessions until payments are configured (and live keys are code-blocked
 * until the owner's legal status is confirmed), so this surfaces the real
 * "not yet accepting payments" state from the server rather than faking one.
 * With sandbox keys in .env.local it redirects to Paystack's hosted test
 * checkout — card data never touches this site.
 */
export function SupportCheckout({ tier }: { tier: SupportTier }) {
  const [state, setState] = useState<State>({ status: "idle" });
  const [email, setEmail] = useState("");

  async function begin() {
    if (!email) {
      setState({ status: "error", message: "Enter an email first — receipts need a home." });
      return;
    }
    setState({ status: "working" });
    try {
      const res = await fetch("/api/support/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tierId: tier.id, email }),
      });
      const json = (await res.json()) as {
        url?: string;
        error?: string;
        reason?: string;
      };
      if (res.ok && json.url) {
        window.location.assign(json.url); // hosted checkout — off-site by design
        return;
      }
      if (res.status === 503) {
        setState({
          status: "unavailable",
          reason:
            "Not accepting payments yet — the programme opens after the " +
            "legal review is complete. Nothing was charged or stored.",
        });
      } else if (res.status === 429) {
        setState({ status: "error", message: "Too many attempts — please wait a minute." });
      } else {
        setState({ status: "error", message: "That didn't work — please check the email and try again." });
      }
    } catch {
      setState({ status: "error", message: "Network hiccup — please try again." });
    }
  }

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-2 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Email for receipt</span>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            maxLength={254}
            placeholder="you@example.com"
            className="w-full rounded-full border border-kisi-green-900/20 bg-white px-4 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          onClick={begin}
          disabled={state.status === "working"}
          className="rounded-full bg-kisi-green-700 px-5 py-2 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900 disabled:opacity-60"
        >
          {state.status === "working" ? "One moment…" : "Begin support (preview)"}
        </button>
      </div>
      <p aria-live="polite" className="mt-2 min-h-4 text-xs">
        {state.status === "unavailable" && (
          <span className="font-medium text-kisi-earth-700">{state.reason}</span>
        )}
        {state.status === "error" && (
          <span className="text-kisi-earth-700">{state.message}</span>
        )}
      </p>
    </div>
  );
}
