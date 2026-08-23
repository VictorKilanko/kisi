import type { Metadata } from "next";
import { hasSupabaseEnv } from "@/lib/supabase/env";
import { SetupNotice } from "@/components/SetupNotice";
import { AuthForm } from "@/components/AuthForm";

export const metadata: Metadata = { title: "Log in" };

export default function LoginPage() {
  if (!hasSupabaseEnv()) return <SetupNotice />;

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-5 py-12">
      <p className="kicker text-kisi-earth-500">Kisi Farm Records</p>
      <h1 className="font-display text-3xl text-kisi-green-900">
        The farm ledger, on your phone
      </h1>
      <p className="mt-2 text-kisi-charcoal-600">
        Log the day&apos;s eggs, feed, birds and cash in a minute. No more
        spreadsheets.
      </p>
      <AuthForm />
    </div>
  );
}
