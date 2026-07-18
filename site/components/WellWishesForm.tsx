"use client";

import { useState } from "react";

type State =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "done"; note: string }
  | { status: "error"; message: string };

/** Leave a message for Bantu. Validated, rate-limited, honeypot-protected. */
export function WellWishesForm() {
  const [state, setState] = useState<State>({ status: "idle" });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setState({ status: "sending" });
    try {
      const res = await fetch("/api/wellwishes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(data.get("name") ?? ""),
          message: String(data.get("message") ?? ""),
          company: String(data.get("company") ?? ""),
        }),
      });
      const json = (await res.json()) as { ok?: boolean; note?: string; error?: string };
      if (res.ok && json.ok) {
        form.reset();
        setState({
          status: "done",
          note: json.note ?? "Thank you. The flock is glad you stopped.",
        });
      } else {
        setState({
          status: "error",
          message:
            json.error === "rate-limited"
              ? "That's a lot of messages at once — please wait a minute."
              : "Something in the form didn't look right. Try again?",
        });
      }
    } catch {
      setState({ status: "error", message: "Network hiccup — please try again." });
    }
  }

  if (state.status === "done") {
    return (
      <div
        aria-live="polite"
        className="rounded-2xl border-2 border-kisi-gold-500 bg-white p-6 text-center"
      >
        <p className="font-display text-xl font-bold text-kisi-green-900">
          Message received
        </p>
        <p className="mt-2 text-sm text-kisi-charcoal-600">{state.note}</p>
        <button
          type="button"
          onClick={() => setState({ status: "idle" })}
          className="mt-4 text-sm font-semibold text-kisi-green-700 underline"
        >
          Leave another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
      aria-label="Leave a message for Bantu"
    >
      <div className="grid gap-4">
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">Your name</span>
          <input
            type="text"
            name="name"
            required
            maxLength={80}
            placeholder="Who is writing?"
            className="mt-1 w-full rounded-lg border border-kisi-green-900/20 px-4 py-3 text-sm"
          />
        </label>
        <label className="block">
          <span className="kicker text-kisi-charcoal-600">Your message</span>
          <textarea
            name="message"
            required
            maxLength={1000}
            rows={5}
            placeholder="A word for Bantu, or for the chicks of Coop Two."
            className="mt-1 w-full rounded-lg border border-kisi-green-900/20 px-4 py-3 text-sm"
          />
        </label>
        {/* Honeypot: visually hidden, tab-skipped; humans never fill it */}
        <div className="absolute left-[-9999px]" aria-hidden="true">
          <label>
            Company
            <input type="text" name="company" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
        <div>
          <button
            type="submit"
            disabled={state.status === "sending"}
            className="rounded-full bg-kisi-green-700 px-6 py-3 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900 disabled:opacity-60"
          >
            {state.status === "sending" ? "Sending…" : "Leave your message"}
          </button>
        </div>
      </div>
      <p aria-live="polite" className="mt-3 min-h-5 text-xs">
        {state.status === "error" && (
          <span className="text-kisi-earth-700">{state.message}</span>
        )}
        {state.status === "idle" && (
          <span className="opacity-70">
            Messages are read by the farm before anything is added to the
            memorial. Nothing appears on the site automatically.
          </span>
        )}
      </p>
    </form>
  );
}
