import type { Metadata } from "next";
import Link from "next/link";
import { OrderForm } from "@/components/OrderForm";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Shop — Order Kisi Eggs",
  description:
    "Fresh eggs from Kisi Farm, collected by hand every morning. Ask about " +
    "ordering a crate and we'll confirm price and delivery for your area.",
};

const STEPS = [
  {
    n: "1",
    title: "Tell us what you need",
    body: "Fill in the short form below. Your name, how to reach you, where you are, and roughly how many crates.",
  },
  {
    n: "2",
    title: "We reply with the details",
    body: "We confirm what we have, the price, and whether we can deliver to your area — before you pay anything.",
  },
  {
    n: "3",
    title: "Your eggs arrive",
    body: "Collected by hand the same morning, packed the same day. No warehouse, no waiting around.",
  },
];

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <p className="kicker text-kisi-gold-700">The Kisi Shop</p>
      <h1 className="font-display mt-2 text-4xl font-black text-kisi-green-900 sm:text-5xl">
        Order our eggs
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-kisi-charcoal-600">
        Every egg we sell was laid by a hen with a name. Many of them have a
        page on this site — you can read about the hens whose eggs you are
        eating, which is not something most shops can offer.
      </p>

      {/* Eggs illustration */}
      <div className="mt-8 flex justify-center" aria-hidden="true">
        <svg viewBox="0 0 240 90" width="300" height="112" className="max-w-full">
          <rect x="10" y="34" width="220" height="48" rx="8" fill="#b98a5a" />
          <rect x="10" y="34" width="220" height="10" rx="5" fill="#a2764a" />
          {[36, 74, 112, 150, 188].map((x, i) => (
            <ellipse
              key={x}
              cx={x + 8}
              cy={38}
              rx="16"
              ry="20"
              fill={["#f1e8d4", "#faf5e9", "#f0c75e", "#f1e8d4", "#faf5e9"][i]}
              stroke="#d8c9a8"
              strokeWidth="1.5"
            />
          ))}
        </svg>
      </div>

      {/* How it works */}
      <section className="mt-12">
        <h2 className="font-display text-3xl font-black text-kisi-green-900">
          How it works
        </h2>
        <ol className="mt-6 grid gap-5 sm:grid-cols-3">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="rounded-2xl border border-kisi-green-900/10 bg-white p-5"
            >
              <span className="font-display flex h-10 w-10 items-center justify-center rounded-full bg-kisi-green-700 text-lg font-black text-kisi-cream-100">
                {s.n}
              </span>
              <h3 className="font-display mt-3 text-lg font-bold text-kisi-green-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Pricing honesty */}
      <section className="mt-12">
        <div className="max-w-2xl">
          <PlaceholderNotice>
            <strong>Prices are set per order for now.</strong> Our crate sizes
            and delivery areas are still being finalised, so rather than post
            a price that turns out to be wrong for you, we quote you directly
            when you ask. Ask below and you&apos;ll get a straight answer.
          </PlaceholderNotice>
        </div>
      </section>

      {/* Order form */}
      <section className="mt-10">
        <h2 className="font-display text-3xl font-black text-kisi-green-900">
          Ask about ordering
        </h2>
        <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
          Fill this in and we&apos;ll come back to you with what we have and
          what it costs.
        </p>
        <div className="mt-6">
          <OrderForm />
        </div>
      </section>

      {/* Where the eggs come from */}
      <section className="mt-14 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="font-display text-2xl font-bold">
          Meet the hens who laid them
        </h2>
        <p className="mt-3 max-w-2xl text-kisi-cream-100/85">
          Chi-Chi&apos;s first egg was front-page news. Mama Gold has laid four
          hundred and is taking a well-earned break. The Bureau of Egg
          Statistics counts every one, and the opposition demands a recount
          every month.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/eggs"
            className="rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
          >
            Egg Life &amp; milestones
          </Link>
          <Link
            href="/flock"
            className="rounded-full border border-kisi-cream-100/40 px-6 py-3 font-semibold hover:bg-kisi-cream-100/10"
          >
            Meet the Flock
          </Link>
        </div>
      </section>

      <p className="mt-10 text-sm text-kisi-charcoal-600">
        Questions about bulk orders, schools, or partnerships?{" "}
        <Link href="/visit" className="font-semibold text-kisi-green-700 underline">
          Contact the farm
        </Link>
        .
      </p>
    </div>
  );
}
