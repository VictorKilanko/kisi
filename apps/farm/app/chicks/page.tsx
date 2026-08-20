import type { Metadata } from "next";
import Link from "next/link";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Day-old Chicks",
  description:
    "Day-old chicks and point-of-lay pullets from Kisi Farm. Hatchery ordering " +
    "opens as the flock grows. Ask us about availability.",
};

const stages = [
  {
    title: "Day-old chicks",
    body: "Healthy day-old chicks from our own flock, the next arm of the farm as the hatchery grows.",
  },
  {
    title: "Point-of-lay pullets",
    body: "Young hens raised to the edge of laying, ready to start producing for your own flock.",
  },
  {
    title: "Raised with care",
    body: "Clean water, quality feed and steady handling from the first day, the same standard as the layers.",
  },
];

export default function ChicksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="kicker text-kisi-green-700">Kisi Farm · The Hatchery</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-black text-kisi-green-900">
        Day-old chicks and point-of-lay pullets.
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        The hatchery is the next arm of the farm. As the flock grows we will
        offer day-old chicks and point-of-lay pullets raised to the same
        standard as our layers.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {stages.map((s) => (
          <div
            key={s.title}
            className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
          >
            <h2 className="font-display text-xl font-bold text-kisi-green-900">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-kisi-charcoal-900">{s.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 max-w-3xl">
        <PlaceholderNotice>
          <strong>Awaiting farm records:</strong> chick and pullet numbers,
          breeds available, and prices are not posted yet, and we will not
          invent them. Hatchery ordering opens as the flock grows. Ask us and we
          will tell you honestly what is available now.
        </PlaceholderNotice>
      </div>

      <div className="mt-8">
        <Link
          href="/visit"
          className="inline-block rounded-full bg-kisi-green-700 px-6 py-3 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
        >
          Ask about chicks &rarr;
        </Link>
      </div>
    </div>
  );
}
