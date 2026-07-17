import type { Metadata } from "next";
import Link from "next/link";
import { ProjectStatusBadge, WorldBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/Cards";
import { agricCityProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Kisi Agric City — The Vision",
  description:
    "The long-term vision for Kisi: a diversified agricultural city in " +
    "southwestern Nigeria. Every element honestly labeled — operating, in " +
    "development, or proposed.",
};

export default function AgricCityPage() {
  const operating = agricCityProjects.filter((p) => p.status === "operating");
  const inDev = agricCityProjects.filter((p) => p.status === "in-development");
  const proposed = agricCityProjects.filter((p) => p.status === "proposed");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fact" />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900 sm:text-5xl">
        Kisi Agric City
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-kisi-charcoal-600">
        Today, Kisi is a poultry farm. The long-term vision is much larger: a
        diversified agricultural city — production, processing, research,
        training, renewable energy, and agritourism — growing in honest,
        planned stages in southwestern Nigeria.
      </p>

      {/* Honesty rule */}
      <div className="mt-8 rounded-2xl border-l-4 border-kisi-gold-500 bg-kisi-cream-200 p-5 text-sm text-kisi-charcoal-600">
        <strong className="text-kisi-charcoal-900">How to read this page:</strong>{" "}
        every element carries one of three labels.{" "}
        <em>Operating today</em> means it exists now.{" "}
        <em>In development</em> means work is actively underway.{" "}
        <em>Proposed</em> means it is part of the long-term vision and does
        not exist yet. We never present future plans as current reality.
      </div>

      {/* Operating */}
      <section className="mt-12">
        <SectionHeading kicker="Today" title="Operating now" />
        <ul className="grid gap-6 md:grid-cols-2">
          {operating.map((p) => (
            <li key={p.id} className="rounded-2xl border-2 border-kisi-green-700 bg-white p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-xl font-bold text-kisi-green-900">{p.name}</h3>
                <ProjectStatusBadge status={p.status} />
              </div>
              <p className="mt-3 text-sm text-kisi-charcoal-600">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* In development */}
      {inDev.length > 0 && (
        <section className="mt-12">
          <SectionHeading kicker="Underway" title="In development" />
          <ul className="grid gap-6 md:grid-cols-2">
            {inDev.map((p) => (
              <li key={p.id} className="rounded-2xl border border-kisi-gold-500 bg-white p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-kisi-green-900">{p.name}</h3>
                  <ProjectStatusBadge status={p.status} />
                </div>
                <p className="mt-3 text-sm text-kisi-charcoal-600">{p.description}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Proposed */}
      <section className="mt-12">
        <SectionHeading
          kicker="The Horizon"
          title="Proposed — the long-term vision"
          lede="Ambitions, not announcements. Each will move up this page only when it becomes real."
        />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {proposed.map((p) => (
            <li key={p.id} className="rounded-2xl border border-dashed border-kisi-charcoal-600/40 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="font-semibold text-kisi-green-900">{p.name}</h3>
              </div>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{p.description}</p>
              <p className="mt-3">
                <ProjectStatusBadge status={p.status} />
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* Growth stages strip */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="kicker text-kisi-gold-300">The path, in stages</h2>
        <ol className="mt-4 grid gap-6 text-sm md:grid-cols-4">
          <li>
            <p className="font-display text-lg font-bold">1 · Poultry first</p>
            <p className="mt-1 text-kisi-cream-100/80">
              Run the laying operation excellently. Build the brand and the
              storytelling world. (We are here.)
            </p>
          </li>
          <li>
            <p className="font-display text-lg font-bold">2 · Feed & crops</p>
            <p className="mt-1 text-kisi-cream-100/80">
              Grow and mill what the birds eat; sell the surplus.
            </p>
          </li>
          <li>
            <p className="font-display text-lg font-bold">3 · Add value</p>
            <p className="mt-1 text-kisi-cream-100/80">
              Processing, cold storage, veterinary services, research
              partnerships.
            </p>
          </li>
          <li>
            <p className="font-display text-lg font-bold">4 · Open the gates</p>
            <p className="mt-1 text-kisi-cream-100/80">
              Training, agritourism, marketplace, investment — a working
              agricultural city.
            </p>
          </li>
        </ol>
      </section>

      <p className="mt-10 text-sm text-kisi-charcoal-600">
        Interested in partnering, researching, or investing as the vision
        develops?{" "}
        <Link href="/visit" className="font-semibold text-kisi-green-700 hover:underline">
          Get in touch
        </Link>
        .
      </p>
    </div>
  );
}
