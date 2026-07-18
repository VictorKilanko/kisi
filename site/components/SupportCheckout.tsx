"use client";

import { useState } from "react";
import type { SupportTier } from "@/lib/schemas";

type State =
  | { status: "idle" }
  | { status: "working" }
  | { status: "unavailable"; reason: string }
  | { status: "error"; message: string };

/**
 * Support checkout — currently closed, and says so.
 *
 * The provider-agnostic payment layer lives in lib/payments and is ready to
 * wire up, but this build is a static export with no server to hold secret
 * keys, and the programme stays closed until the farm's legal status is
 * confirmed. Rather than fake a flow, the button states the real position.
 * Card data has never touched this site and never will — when payments open
 * they run on the provider's hosted checkout.
 */
export function SupportCheckout({ tier }: { tier: SupportTier }) {
  const [state, setState] = useState<State>({ status: "idle" });
  const [email, setEmail] = useState("");

  function begin() {
    if (!email.includes("@")) {
      setState({ status: "error", message: "Enter an email first — receipts need a home." });
      return;
    }
    setState({
      status: "unavailable",
      reason:
        `“${tier.name}” isn't open yet — the programme starts after the ` +
        "legal review is complete. Nothing was charged or stored.",
    });
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
