import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the Kisi website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        Terms of Use
      </h1>
      <div className="mt-6">
        <PlaceholderNotice>
          <strong>Placeholder — pending review.</strong> A finalized version
          will be published before launch; support/sponsorship terms will be
          added before any payments are accepted.
        </PlaceholderNotice>
      </div>
      <section className="mt-8 space-y-4 text-sm text-kisi-charcoal-600">
        <ul className="list-inside list-disc space-y-1.5">
          <li>
            The Republic of Kisi is a work of original storytelling built
            around the real chickens of Kisi Farm. Its news, politics, and
            sport are entertainment, not factual reporting, and refer to no
            real person or organisation.
          </li>
          <li>
            All characters, names, artwork, and text on this site are
            original works of Kisi and may not be reused commercially
            without permission.
          </li>
          <li>
            Farm information is provided in good faith for general interest
            and education; it is not veterinary or professional advice.
          </li>
          <li>
            Entertainment polls (when introduced) are non-binding fun, not
            research or gambling.
          </li>
          <li>
            When support/sponsorship launches, its own terms (payment nature,
            refunds, privacy) will govern those transactions and be linked
            here.
          </li>
        </ul>
      </section>
    </div>
  );
}
