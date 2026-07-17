import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Support Terms",
  description:
    "Terms for Kisi's farm support and sponsorship programme — payment " +
    "nature, refunds, privacy, and security.",
};

export default function SupportTermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-4xl font-black text-kisi-green-900">
        Support Terms
      </h1>
      <div className="mt-6">
        <PlaceholderNotice>
          <strong>Draft — pending legal review.</strong> These terms take
          effect only when the programme opens; the final version will be
          reviewed once the business&apos;s registration status is
          confirmed. No payments are accepted until then.
        </PlaceholderNotice>
      </div>

      <section className="mt-8 space-y-6 text-sm text-kisi-charcoal-600">
        <div>
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            1. What your payment is
          </h2>
          <p className="mt-2">
            Payments made through this site are <strong>farm support
            payments or sponsorships</strong> to Kisi, a working poultry
            farm. They are <strong>not charitable donations</strong>, are{" "}
            <strong>not tax-deductible</strong>, and do not purchase goods
            for delivery. Each tier states what it funds.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            2. Sponsorship is not ownership
          </h2>
          <p className="mt-2">
            &ldquo;Sponsor a Chicken&rdquo; funds the care of a named bird
            and story updates about her life. It does not transfer ownership
            of, or any legal interest in, any animal. All birds remain
            residents of Kisi Farm under its care and welfare policies.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            3. Payment security
          </h2>
          <p className="mt-2">
            All payments are processed on our payment provider&apos;s secure
            hosted checkout page. Your card details are entered there, never
            on this website, and are never seen or stored by Kisi. We
            receive only confirmation of payment, the tier, and the email
            you provide for receipts.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            4. Refunds
          </h2>
          <p className="mt-2">
            [Draft placeholder — refund policy to be confirmed by the owner
            before launch.] Intended policy: mistaken or duplicate payments
            refunded on request within a stated window; monthly sponsorships
            cancellable at any time, stopping future charges.
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            5. Privacy
          </h2>
          <p className="mt-2">
            We keep the minimum needed to run the programme: your email,
            tier, and payment confirmation reference. We never sell personal
            data. See the{" "}
            <Link href="/legal/privacy" className="underline">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-kisi-charcoal-900">
            6. Reporting
          </h2>
          <p className="mt-2">
            The support page&apos;s transparency section will report how
            support was used, from real farm records only. We do not publish
            estimates or invented figures.
          </p>
        </div>
      </section>
    </div>
  );
}
