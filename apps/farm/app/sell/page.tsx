import type { Metadata } from "next";
import { RepSignupForm } from "@/components/RepSignupForm";
import { SectionHeading } from "@/components/Cards";

export const metadata: Metadata = {
  title: "Sell With Us",
  description:
    "Become a Kisi Farm sales rep. Sell farm-fresh eggs, day-old chicks and " +
    "chicken meat in your own area. Sign up and we'll be in touch.",
};

const points = [
  {
    title: "Products people already want",
    body: "Fresh eggs, day-old chicks and farm chicken. Everyday food that sells itself once people taste the difference.",
  },
  {
    title: "Sell in your own area",
    body: "You know your neighbourhood and your customers. Take orders near you and we supply from the farm.",
  },
  {
    title: "No fee to start",
    body: "Signing up costs nothing. We talk through how supply and pricing work before you sell a single crate.",
  },
];

export default function SellPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="kicker text-kisi-green-700">Kisi Farm · Sell With Us</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-black text-kisi-green-900">
        Sell Kisi eggs, chicks and chicken in your area.
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        We&apos;re building a team of sales reps to get Kisi products to more
        people. If you can sell near you, we&apos;d like to hear from you. Sign
        up below and we&apos;ll reach out to talk about how it works.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
          >
            <h2 className="font-display text-xl font-bold text-kisi-green-900">
              {p.title}
            </h2>
            <p className="mt-2 text-sm text-kisi-charcoal-900">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-2xl">
        <SectionHeading
          kicker="Sign up"
          title="Tell us a bit about you"
        />
        <RepSignupForm />
      </div>
    </div>
  );
}
