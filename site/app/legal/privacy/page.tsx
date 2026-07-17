import type { Metadata } from "next";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the Kisi website.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        Privacy Policy
      </h1>
      <div className="mt-6">
        <PlaceholderNotice>
          <strong>Placeholder — pending review.</strong> This draft states our
          working principles; a finalized policy will be published before
          forms, newsletter, analytics, or payments go live.
        </PlaceholderNotice>
      </div>
      <section className="mt-8 space-y-4 text-sm text-kisi-charcoal-600">
        <p>
          This website currently collects no personal data: there are no
          active forms, no accounts, no newsletter, no payment processing,
          and no analytics.
        </p>
        <p>Our working principles for when those features launch:</p>
        <ul className="list-inside list-disc space-y-1.5">
          <li>Collect the minimum personal data needed, and say what for.</li>
          <li>Never sell personal data.</li>
          <li>Payments will use a secure hosted provider; we will never store card details.</li>
          <li>Any analytics will be privacy-conscious and disclosed here.</li>
          <li>Cookie notices will be used only where legally required.</li>
        </ul>
        <p>
          Questions about privacy can be raised through the contact page once
          the contact form is live.
        </p>
      </section>
    </div>
  );
}
