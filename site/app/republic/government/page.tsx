import type { Metadata } from "next";
import Link from "next/link";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { SectionHeading } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { FictionDisclaimer } from "@/components/Disclaimer";
import { getChicken, ministries, ministerOf } from "@/lib/content";

export const metadata: Metadata = {
  title: "Government & Cabinet",
  description:
    "The cabinet ministries of the Republic of Kisi, the organisational " +
    "chart, and the National Feed Budget.",
};

export default function GovernmentPage() {
  const president = getChicken("adedoyin-mama-decree");
  const vp = getChicken("baba-segun");
  const chiefJustice = getChicken("yeye-alaba");
  const opposition = getChicken("halima-iron-feathers");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fiction" />
        <DemoBadge />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Government &amp; Cabinet
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Ten ministries serve the Republic. Several are even staffed. The rest
        are administered in an acting capacity, which the government describes
        as &ldquo;agile&rdquo; and the opposition describes as
        &ldquo;vacant.&rdquo;
      </p>

      {/* Org chart */}
      <section aria-labelledby="org-heading" className="mt-12">
        <h2 id="org-heading" className="kicker text-kisi-gold-700">
          The Organisational Chart
        </h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-kisi-indigo-800/15 bg-white p-6">
          <div className="min-w-[560px]">
            {/* Level 1 */}
            <div className="flex justify-center">
              <OrgNode
                title="The President"
                name={president.name}
                href={`/flock/${president.id}`}
                accent
              />
            </div>
            <div aria-hidden="true" className="mx-auto h-6 w-px bg-kisi-indigo-800/30" />
            {/* Level 2 */}
            <div className="flex flex-wrap justify-center gap-4">
              <OrgNode title="Vice President" name={vp.name} href={`/flock/${vp.id}`} />
              <OrgNode title="The Cabinet" name="10 ministries" href="#ministries" />
              <OrgNode
                title="Coop Assembly"
                name="Legislature"
                href="/republic/assembly"
              />
              <OrgNode
                title="Supreme Pecking Council"
                name={chiefJustice.name}
                href={`/flock/${chiefJustice.id}`}
              />
              <OrgNode
                title="Opposition"
                name={opposition.name}
                href={`/flock/${opposition.id}`}
              />
            </div>
            <div aria-hidden="true" className="mx-auto h-6 w-px bg-kisi-indigo-800/30" />
            {/* Level 3 */}
            <div className="flex flex-wrap justify-center gap-4">
              <OrgNode title="Free Press" name="The Coop Times" href="/news" />
              <OrgNode
                title="Independent Agency"
                name="Bureau of Egg Statistics"
                href="/eggs"
              />
              <OrgNode
                title="Independent Agency"
                name="Kisi Electoral Commission"
                href="/republic/assembly"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section id="ministries" className="mt-16">
        <SectionHeading
          kicker="The Cabinet"
          title="The Ministries"
          lede="Each ministry publishes its motto, mandate, and projects. Project statuses are honest, which is why so many read 'stalled.'"
        />
        <ul className="grid gap-6 md:grid-cols-2">
          {ministries.map((m) => {
            const minister = ministerOf(m);
            return (
              <li key={m.id}>
                <Link
                  href={`/republic/government/${m.id}`}
                  className="block h-full rounded-2xl border border-kisi-indigo-800/15 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-lg font-bold text-kisi-indigo-900">
                        {m.name}
                      </h3>
                      <p className="kicker mt-1 text-kisi-gold-700">“{m.motto}”</p>
                    </div>
                    {minister && <ChickenPortrait chicken={minister} size={56} framed />}
                  </div>
                  <p className="mt-3 text-sm text-kisi-charcoal-600">
                    {minister
                      ? `Minister: ${minister.name}${minister.nickname ? ` “${minister.nickname}”` : ""}`
                      : m.actingNote ?? "Vacant"}
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* Feed budget */}
      <section className="mt-16 rounded-3xl bg-kisi-green-900 p-8 text-kisi-cream-100">
        <h2 className="kicker text-kisi-gold-300">The National Feed Budget</h2>
        <p className="font-display mt-2 text-2xl font-bold">
          “Generous, because morale is infrastructure.”
        </p>
        <p className="mt-3 max-w-2xl text-sm text-kisi-cream-100/85">
          The Republic&apos;s single largest expenditure, defended annually by
          the government, audited monthly by the opposition, and consumed
          daily by everyone regardless of party. Figures are sample content;
          the real farm&apos;s feeding practices will be documented on the{" "}
          <Link href="/about" className="underline hover:text-kisi-gold-300">
            farm pages
          </Link>
          .
        </p>
      </section>

      <FictionDisclaimer />
    </div>
  );
}

function OrgNode({
  title,
  name,
  href,
  accent = false,
}: {
  title: string;
  name: string;
  href: string;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`block rounded-xl border px-4 py-2.5 text-center text-sm shadow-sm transition-shadow hover:shadow ${
        accent
          ? "border-kisi-gold-500 bg-kisi-gold-500/10"
          : "border-kisi-indigo-800/20 bg-kisi-cream-100"
      }`}
    >
      <span className="kicker block text-kisi-charcoal-600">{title}</span>
      <span className="mt-0.5 block font-semibold text-kisi-indigo-900">{name}</span>
    </Link>
  );
}
