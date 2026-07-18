"use client";

import { useState } from "react";
import type { SupportTier } from "@/lib/schemas";

type State =
  | { status: "idle" }
  | { status: "working" }
  | { status: "unavailable"; reason: string }
  | { status: "error"; message: string };

/**
 * Support checkout, wired end-to-end and honest about its real state.
 *
 * The server resolves the tier and price — the client can never set an
 * amount. `/api/support/checkout` returns 503 with a plain reason while the
 * live-payments lock in lib/payments/index.ts is engaged, so the "not open
 * yet" message comes from the server rather than being faked here.
 *
 * With sandbox keys it redirects to the provider's hosted checkout. Card
 * data never touches this site.
 */
export function SupportCheckout({ tier }: { tier: SupportTier }) {
  const [state, setState] = useState<State>({ status: "idle" });
  const [email, setEmail] = useState("");

  async function begin() {
    if (!email.includes("@")) {
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
      const json = (await res.json()) as { url?: string; reason?: string };

      if (res.ok && json.url) {
        window.location.assign(json.url); // hosted checkout — off-site by design
        return;
      }
      if (res.status === 503) {
        setState({
          status: "unavailable",
          reason:
            json.reason ??
            `“${tier.name}” isn't open yet. Nothing was charged or stored.`,
        });
      } else if (res.status === 429) {
        setState({ status: "error", message: "Too many attempts — please wait a minute." });
      } else {
        setState({
          status: "error",
          message: "That didn't work — please check the email and try again.",
        });
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
