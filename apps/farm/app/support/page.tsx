import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/Cards";
import { FinanceEnquiryForm, FundsBoard } from "@/components/SupportForms";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FUNDS_TOTAL_USD } from "./funds";

export const metadata: Metadata = {
  title: "Support the Farm",
  description:
    "Help Kisi Farm fix Nigeria's shortage of strong parent stock and " +
    "chicken meat. Back one of five farm funds, or enquire about financing.",
};

export default function SupportPage() {
  return (
    <div>
      {/* HERO: the mission, front and centre */}
      <section className="bg-kisi-green-900 text-kisi-cream-100">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <p className="kicker text-kisi-gold-300">
            Support Kisi Farm · The cause
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl">
            Nigeria doesn&apos;t have enough chicken. Kisi is changing that.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-kisi-cream-100/85">
            The country runs short of strong parent stock and affordable chicken
            meat, so too much is imported and too little is raised at home.
            Kisi&apos;s answer is simple: raise birds so well that they become
            the healthy parent stock and good meat the country needs, and tell
            their story so well, through the Republic of Kisi, that the whole
            world wants to follow a Nigerian farm.
          </p>
          <p className="mt-4 max-w-2xl text-kisi-cream-100/85">
            That takes real building. We&apos;re raising{" "}
            <strong className="text-kisi-gold-300">
              ${FUNDS_TOTAL_USD.toLocaleString("en-US")}
            </strong>{" "}
            across five funds that change daily life for every bird on the farm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#funds"
              className="rounded-full bg-kisi-gold-300 px-7 py-3.5 font-bold text-kisi-indigo-900 hover:bg-kisi-gold-500"
            >
              Back a fund
            </Link>
            <Link
              href="#finance"
              className="rounded-full border border-kisi-cream-100/30 px-6 py-3.5 font-semibold text-kisi-cream-100 hover:border-kisi-cream-100/60"
            >
              Finance the farm
            </Link>
          </div>
        </div>
      </section>

      {/* THE FIVE FUNDS */}
      <section id="funds" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14">
        <SectionHeading
          kicker="Five funds · $20,000 each"
          title="Pick what you want to build"
          lede="Each fund has a $20,000 goal and goes to a working farm. Back the one you care about most, or leave it to us."
        />
        <FundsBoard />
      </section>

      {/* WHERE THIS STANDS: honest, no invented figures */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <div className="rounded-3xl border border-kisi-green-900/10 bg-kisi-cream-200 p-7">
          <div className="grid gap-5 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="kicker text-kisi-gold-700">Where this stands</p>
              <h2 className="font-display mt-1 text-2xl font-bold text-kisi-green-900">
                Just getting started, and honest about it
              </h2>
              <p className="mt-2 text-sm text-kisi-charcoal-600">
                Secure card giving opens once the farm&apos;s legal and payment
                setup is complete. Until then a pledge starts a conversation and
                we reply with how to give. There is no fake progress bar here on
                purpose, we publish no invented figures, and when money comes in
                we&apos;ll report what it funded from the farm&apos;s real
                records.
              </p>
            </div>
            <div className="md:col-span-4">
              <WhatsAppButton message="Hi Kisi Farm, I'd like to support the farm. Please tell me how.">
                Talk to us on WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </section>

      {/* PLAIN WORDS (legal, honest) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl border-l-4 border-kisi-gold-500 bg-white p-6 shadow-sm">
          <h2 className="font-display text-xl font-bold text-kisi-charcoal-900">
            Plain words about the money
          </h2>
          <div className="mt-4 grid gap-x-10 gap-y-2 text-sm text-kisi-charcoal-600 sm:grid-cols-2">
            <p>
              These are{" "}
              <strong className="text-kisi-charcoal-900">
                donations to a working, for-profit farm
              </strong>
              . They are gifts, not charitable donations, and they are{" "}
              <strong className="text-kisi-charcoal-900">
                not tax-deductible
              </strong>
              . A donation buys no ownership, shares, or return.
            </p>
            <p>
              Want a return instead?{" "}
              <Link href="#finance" className="font-semibold underline">
                Financing the farm
              </Link>{" "}
              is for lending or investing, and it&apos;s a separate
              conversation.
            </p>
            <p>
              When card giving opens it will happen on a{" "}
              <strong className="text-kisi-charcoal-900">
                secure hosted checkout
              </strong>
              . Card details never touch this site and are never stored by us.
            </p>
            <p>
              Full terms, refunds and privacy are on the{" "}
              <Link href="/support/terms" className="underline">
                support terms
              </Link>{" "}
              page.
            </p>
          </div>
        </div>
      </section>

      {/* DEBT FINANCING / INVESTMENT */}
      <section id="finance" className="scroll-mt-20 bg-kisi-indigo-800">
        <div className="mx-auto max-w-6xl px-4 py-16 text-kisi-cream-100">
          <p className="kicker text-kisi-gold-300">For lenders & investors</p>
          <h2 className="font-display mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">
            Finance the farm, not with a gift, but with capital
          </h2>
          <p className="mt-3 max-w-2xl text-kisi-cream-100/85">
            If you&apos;d rather lend to or invest in Kisi than donate, we want
            to talk. Debt financing and investment are handled privately with
            the farm&apos;s finance contact. Tell us what you have in mind and
            we&apos;ll take it from there.
          </p>
          <div className="mt-8 max-w-3xl rounded-3xl border border-kisi-gold-300/30 bg-kisi-indigo-900/40 p-7 sm:p-9">
            <FinanceEnquiryForm />
          </div>
        </div>
      </section>

      {/* TRANSPARENCY */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
          <h2 className="kicker text-kisi-gold-300">Transparency</h2>
          <p className="font-display mt-2 text-2xl font-bold">
            Where support goes, reported honestly, or not at all
          </p>
          <div className="mt-4 grid gap-6 text-sm text-kisi-cream-100/85 md:grid-cols-2">
            <div>
              <p>
                When giving opens, this section will report what came in and
                what it funded, housing repaired, vet visits covered, the cold
                room built, using the farm&apos;s real records.
              </p>
              <p className="mt-3">
                Until those records exist, it stays empty on purpose.{" "}
                <strong>We publish no invented figures.</strong> An empty honest
                box beats a full fake one.
              </p>
            </div>
            <dl className="grid grid-cols-2 gap-4">
              {[
                "Donations received",
                "Housing funded",
                "Vet care funded",
                "Cold storage funded",
              ].map((label) => (
                <div
                  key={label}
                  className="rounded-xl bg-kisi-cream-100/10 p-4"
                >
                  <dt className="kicker text-kisi-gold-300">{label}</dt>
                  <dd className="mt-1 text-sm italic text-kisi-cream-100/70">
                    awaiting real records
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-kisi-charcoal-600">
          Want to name something bigger? The hatchery and the farm house can
          carry your name.{" "}
          <Link
            href="/build-the-farm"
            className="font-semibold text-kisi-green-700 underline"
          >
            See the Build the Farm campaign
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
