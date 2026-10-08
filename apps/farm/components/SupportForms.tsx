"use client";

import { useRef, useState } from "react";
import { funds } from "@/app/support/funds";

/** Inline icon set for the fund cards, keyed by Fund.icon. */
const FUND_ICON: Record<string, React.ReactNode> = {
  house: (
    <>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </>
  ),
  hen: (
    <>
      <path d="M6 20c0-5 3-8 7-8 2.5 0 4 1.5 4 4 0 1-.5 2-1.5 2.5" />
      <path d="M13 12c2-1 4-3 4-6 0 0 2 1 2 3 0 1-.5 2-1.5 2.5" />
      <path d="M6 20h11" />
      <path d="M9 12l-1 3" />
    </>
  ),
  vet: (
    <>
      <path d="M12 21s-7-4.3-7-9.5A4 4 0 0 1 12 8a4 4 0 0 1 7 3.5C19 16.7 12 21 12 21z" />
      <path d="M12 10v5M9.5 12.5h5" />
    </>
  ),
  solar: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
    </>
  ),
  cold: (
    <>
      <path d="M12 2v20M4 7l16 10M20 7L4 17" />
      <path d="M12 2l-2.5 2.5M12 2l2.5 2.5M12 22l-2.5-2.5M12 22l2.5-2.5" />
    </>
  ),
};

const WHEREVER = "Wherever it's needed most";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  | { status: "error"; message: string };

const goalLabel = (usd: number) => `$${(usd / 1000).toLocaleString("en-US")}k`;

/**
 * The five funds and the pledge form in one client block so a "Back this
 * fund" button can pre-select the fund and scroll the visitor to the form.
 * No money or bank details are taken on the page: a pledge starts a
 * conversation, delivered to the farm by /api/support/pledge.
 */
export function FundsBoard() {
  const [selectedFund, setSelectedFund] = useState<string>(WHEREVER);
  const [state, setState] = useState<State>({ status: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  function backThisFund(name: string) {
    setSelectedFund(name);
    setState({ status: "idle" });
    // Let React paint the new select value before we scroll to it.
    requestAnimationFrame(() =>
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }),
    );
  }

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
          kind: "donation",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          fund: String(data.get("fund") ?? ""),
          amount: String(data.get("amount") ?? ""),
          message: String(data.get("message") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; note?: string };

      if (res.ok && json.ok) {
        form.reset();
        setSelectedFund(WHEREVER);
        setState({
          status: "done",
          note: json.note ?? "Thank you. Your pledge is with the farm.",
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
        message: "Network hiccup. Please try again.",
      });
    }
  }

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {funds.map((f) => (
          <div
            key={f.id}
            className="flex flex-col rounded-2xl border border-kisi-green-900/10 bg-white p-6 shadow-sm"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-kisi-green-900 text-kisi-gold-300">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {FUND_ICON[f.icon]}
              </svg>
            </span>
            <div className="mt-4 flex items-baseline justify-between gap-2">
              <h3 className="font-display text-xl font-bold text-kisi-green-900">
                {f.name}
              </h3>
              <span className="font-display text-lg font-black text-kisi-earth-700">
                {goalLabel(f.goalUSD)}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-kisi-charcoal-900">
              {f.blurb}
            </p>
            <p className="mt-2 text-sm text-kisi-charcoal-600">{f.detail}</p>
            <div className="mt-auto pt-5">
              <button
                type="button"
                onClick={() => backThisFund(f.name)}
                className="w-full rounded-full bg-kisi-green-900 px-5 py-2.5 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-700"
              >
                Back this fund &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pledge form */}
      <form
        ref={formRef}
        id="pledge"
        onSubmit={onSubmit}
        aria-label="Pledge to a farm fund"
        className="mt-10 scroll-mt-24 rounded-3xl border border-kisi-green-900/10 bg-white p-7 shadow-sm sm:p-9"
      >
        <h3 className="font-display text-2xl font-bold text-kisi-green-900">
          Make a pledge
        </h3>
        <p className="mt-2 max-w-xl text-sm text-kisi-charcoal-600">
          Tell us which fund you&apos;d like to back and how much you have in
          mind. This starts a conversation, no card details are entered here.
          We&apos;ll reply with the next step.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="sm:col-span-2">
            <span className="mb-1 block text-sm font-medium text-kisi-charcoal-900">
              Which fund?
            </span>
            <select
              name="fund"
              value={selectedFund}
              onChange={(e) => setSelectedFund(e.target.value)}
              className="w-full rounded-xl border border-kisi-green-900/20 bg-white px-4 py-3 text-sm text-kisi-charcoal-900"
            >
              {funds.map((f) => (
                <option key={f.id} value={f.name}>
                  {f.name}
                </option>
              ))}
              <option value={WHEREVER}>{WHEREVER}</option>
            </select>
          </label>
          <label>
            <span className="mb-1 block text-sm font-medium text-kisi-charcoal-900">
              Your name
            </span>
            <input
              type="text"
              name="name"
              required
              maxLength={80}
              className="w-full rounded-xl border border-kisi-green-900/20 bg-white px-4 py-3 text-sm"
            />
          </label>
          <label>
            <span className="mb-1 block text-sm font-medium text-kisi-charcoal-900">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              maxLength={254}
              className="w-full rounded-xl border border-kisi-green-900/20 bg-white px-4 py-3 text-sm"
            />
          </label>
          <label className="sm:col-span-2">
            <span className="mb-1 block text-sm font-medium text-kisi-charcoal-900">
              Amount you have in mind{" "}
              <span className="font-normal text-kisi-charcoal-600">
                (optional)
              </span>
            </span>
            <input
              type="text"
              name="amount"
              maxLength={120}
              placeholder="e.g. $100, or a monthly gift"
              className="w-full rounded-xl border border-kisi-green-900/20 bg-white px-4 py-3 text-sm"
            />
          </label>
          <label className="sm:col-span-2">
            <span className="mb-1 block text-sm font-medium text-kisi-charcoal-900">
              Anything you&apos;d like to say{" "}
              <span className="font-normal text-kisi-charcoal-600">
                (optional)
              </span>
            </span>
            <textarea
              name="message"
              rows={3}
              maxLength={2000}
              className="w-full rounded-xl border border-kisi-green-900/20 bg-white px-4 py-3 text-sm"
            />
          </label>
        </div>

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

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <button
            type="submit"
            disabled={state.status === "sending"}
            className="rounded-full bg-kisi-green-700 px-7 py-3 font-semibold text-kisi-cream-100 hover:bg-kisi-green-900 disabled:opacity-60"
          >
            {state.status === "sending" ? "Sending…" : "Send my pledge"}
          </button>
          <p aria-live="polite" className="min-h-5 flex-1 text-sm">
            {state.status === "done" && (
              <span className="font-medium text-kisi-green-700">
                {state.note}
              </span>
            )}
            {state.status === "error" && (
              <span className="text-kisi-earth-700">{state.message}</span>
            )}
            {state.status === "idle" && (
              <span className="text-kisi-charcoal-600">
                We&apos;ll reply by email with how to give securely.
              </span>
            )}
          </p>
        </div>
      </form>
    </>
  );
}

/**
 * Debt-financing / investment enquiry. Separate from giving: this is for
 * people and institutions who want to lend to or invest in the farm. Routed
 * to the farm's finance contact by /api/support/pledge (kind: "finance").
 */
export function FinanceEnquiryForm() {
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
          kind: "finance",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          organisation: String(data.get("organisation") ?? ""),
          amount: String(data.get("amount") ?? ""),
          message: String(data.get("message") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; note?: string };

      if (res.ok && json.ok) {
        form.reset();
        setState({
          status: "done",
          note: json.note ?? "Thank you. Your enquiry is with the farm.",
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
        message: "Network hiccup. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Debt-financing or investment enquiry"
      className="mt-6 grid gap-4 sm:grid-cols-2"
    >
      <label>
        <span className="mb-1 block text-sm font-medium text-kisi-cream-100">
          Your name
        </span>
        <input
          type="text"
          name="name"
          required
          maxLength={80}
          className="w-full rounded-xl border border-kisi-cream-100/25 bg-kisi-cream-100/10 px-4 py-3 text-sm text-kisi-cream-100 placeholder:text-kisi-cream-100/50"
        />
      </label>
      <label>
        <span className="mb-1 block text-sm font-medium text-kisi-cream-100">
          Email
        </span>
        <input
          type="email"
          name="email"
          required
          maxLength={254}
          className="w-full rounded-xl border border-kisi-cream-100/25 bg-kisi-cream-100/10 px-4 py-3 text-sm text-kisi-cream-100 placeholder:text-kisi-cream-100/50"
        />
      </label>
      <label>
        <span className="mb-1 block text-sm font-medium text-kisi-cream-100">
          Organisation{" "}
          <span className="font-normal text-kisi-cream-100/60">(optional)</span>
        </span>
        <input
          type="text"
          name="organisation"
          maxLength={120}
          className="w-full rounded-xl border border-kisi-cream-100/25 bg-kisi-cream-100/10 px-4 py-3 text-sm text-kisi-cream-100 placeholder:text-kisi-cream-100/50"
        />
      </label>
      <label>
        <span className="mb-1 block text-sm font-medium text-kisi-cream-100">
          Amount or instrument{" "}
          <span className="font-normal text-kisi-cream-100/60">(optional)</span>
        </span>
        <input
          type="text"
          name="amount"
          maxLength={120}
          placeholder="e.g. a loan, a note, equity"
          className="w-full rounded-xl border border-kisi-cream-100/25 bg-kisi-cream-100/10 px-4 py-3 text-sm text-kisi-cream-100 placeholder:text-kisi-cream-100/50"
        />
      </label>
      <label className="sm:col-span-2">
        <span className="mb-1 block text-sm font-medium text-kisi-cream-100">
          What you have in mind
        </span>
        <textarea
          name="message"
          rows={3}
          maxLength={2000}
          className="w-full rounded-xl border border-kisi-cream-100/25 bg-kisi-cream-100/10 px-4 py-3 text-sm text-kisi-cream-100 placeholder:text-kisi-cream-100/50"
        />
      </label>

      {/* Honeypot */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="sm:col-span-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={state.status === "sending"}
          className="rounded-full bg-kisi-gold-300 px-7 py-3 font-bold text-kisi-indigo-900 hover:bg-kisi-gold-500 disabled:opacity-60"
        >
          {state.status === "sending" ? "Sending…" : "Start the conversation"}
        </button>
        <p aria-live="polite" className="min-h-5 flex-1 text-sm">
          {state.status === "done" && (
            <span className="font-medium text-kisi-gold-300">{state.note}</span>
          )}
          {state.status === "error" && (
            <span className="font-medium text-red-300">{state.message}</span>
          )}
          {state.status === "idle" && (
            <span className="text-kisi-cream-100/70">
              Goes straight to the farm&apos;s finance contact. Private, no
              obligation.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
