"use client";

import { useActionState, useState } from "react";
import { signIn, signUp, type AuthState } from "@/app/login/actions";

export function AuthForm() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const action = mode === "in" ? signIn : signUp;
  const [state, formAction, pending] = useActionState<AuthState, FormData>(
    action,
    null,
  );

  return (
    <form action={formAction} className="mt-6 space-y-4">
      {mode === "up" && (
        <div className="field">
          <label htmlFor="full_name">Your name</label>
          <input id="full_name" name="full_name" className="input" autoComplete="name" />
        </div>
      )}
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="input"
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete={mode === "in" ? "current-password" : "new-password"}
          className="input"
        />
      </div>

      {state?.error && (
        <p role="alert" className="text-sm text-kisi-earth-700">
          {state.error}
        </p>
      )}

      <button type="submit" className="btn w-full" disabled={pending}>
        {pending ? "Please wait…" : mode === "in" ? "Log in" : "Create account"}
      </button>

      <p className="text-center text-sm text-kisi-charcoal-600">
        {mode === "in" ? "New here? " : "Already have an account? "}
        <button
          type="button"
          className="font-semibold text-kisi-green-700 underline"
          onClick={() => setMode(mode === "in" ? "up" : "in")}
        >
          {mode === "in" ? "Create an account" : "Log in"}
        </button>
      </p>
    </form>
  );
}
