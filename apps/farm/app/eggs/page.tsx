import type { Metadata } from "next";
import { OrderForm } from "@/components/OrderForm";
import { MilestoneCard, SectionHeading } from "@/components/Cards";
import { eggMilestones, eggCensus } from "@kisi/canon";
import { AFRICA_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Eggs",
  description:
    "Order farm-fresh eggs from Kisi Farm. Collected by hand every morning and " +
    "packed the same day. Tell us what you need and we confirm price and delivery.",
};

const recentMilestones = [...eggMilestones]
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

const latestCensus = eggCensus.at(-1);

export default function EggsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="kicker text-kisi-green-700">Kisi Farm · Fresh Eggs</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-black text-kisi-green-900">
        Eggs laid this week, by hens with names.
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Collected by hand every morning and packed the same day. Order by the
        crate; prices are set per order for now, so we quote you directly when
        you ask.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading kicker="Ask to order" title="Tell us what you need" />
          <OrderForm />
        </div>

        <aside className="rounded-3xl bg-kisi-cream-200 p-6">
          <h2 className="font-display text-xl font-bold text-kisi-green-900">
            Where your eggs come from
          </h2>
          <p className="mt-2 text-sm text-kisi-charcoal-900">
            Every egg we sell was laid by a real hen you can meet. Follow their
            lives over in{" "}
            <a
              href={AFRICA_URL}
              className="font-semibold text-kisi-green-700 hover:underline"
            >
              the Republic
            </a>
            .
          </p>
          {latestCensus ? (
            <div className="mt-5 rounded-2xl bg-white p-5">
              <p className="kicker text-kisi-charcoal-600">
                National Egg Census · {latestCensus.label}
              </p>
              <p className="mt-1 font-display text-3xl font-black text-kisi-green-900">
                {latestCensus.total.toLocaleString()} eggs
              </p>
            </div>
          ) : null}
        </aside>
      </div>

      <section className="mt-16">
        <SectionHeading
          kicker="From the laying diary"
          title="Recent egg milestones"
          lede="Real moments from the flock, first eggs, hundredth eggs, well-earned laying breaks."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentMilestones.map((m) => (
            <MilestoneCard key={m.id} milestone={m} />
          ))}
        </div>
      </section>
    </div>
  );
}
