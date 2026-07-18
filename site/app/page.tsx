import Link from "next/link";
import {
  ArticleCard,
  ChickenCard,
  MilestoneCard,
  SectionHeading,
} from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { NewsletterForm } from "@/components/NewsletterForm";
import {
  articles,
  chickens,
  eggCensus,
  eggMilestones,
  getChicken,
  leagueTable,
  ministries,
} from "@/lib/content";

export default function Home() {
  const president = getChicken("adedoyin-mama-decree");
  const featured = getChicken("chi-chi");
  const latestNews = articles.slice(0, 3);
  const latestMilestones = eggMilestones.slice(0, 3);
  const census = eggCensus[eggCensus.length - 1];
  const table = leagueTable().slice(0, 4);
  const cabinet = ministries.filter((m) => m.ministerId).slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="bg-kisi-green-900 text-kisi-cream-100">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2">
          <div>
            <p className="kicker text-kisi-gold-300">
              A real farm · A fictional republic
            </p>
            <h1 className="font-display mt-3 text-4xl font-black leading-tight sm:text-6xl">
              Where Every Chicken
              <br />
              Has a <em className="text-kisi-gold-300">Story</em>
            </h1>
            <p className="mt-5 max-w-xl text-kisi-cream-100/85">
              Kisi is a working poultry farm in southwestern Nigeria. It is
              also — according to its chickens — a sovereign nation with a
              President, a Coop Assembly, a free press, a sports league, and
              very strong opinions about breakfast. Welcome to the Republic of
              Kisi.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/republic"
                className="rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
              >
                Enter the Republic
              </Link>
              <Link
                href="/flock"
                className="rounded-full border border-kisi-cream-100/40 px-6 py-3 font-semibold hover:bg-kisi-cream-100/10"
              >
                Meet the Flock
              </Link>
              <Link
                href="/support"
                className="rounded-full border border-kisi-gold-300/60 px-6 py-3 font-semibold text-kisi-gold-300 hover:bg-kisi-gold-300/10"
              >
                Support the Chickens
              </Link>
            </div>
          </div>
          <div className="hidden justify-center lg:flex" aria-hidden="true">
            <div className="grid grid-cols-3 gap-4">
              {chickens.slice(0, 6).map((c) => (
                <ChickenPortrait key={c.id} chicken={c} size={110} />
              ))}
            </div>
          </div>
        </div>
        {/* News ticker */}
        <div className="border-t border-kisi-cream-100/15 bg-kisi-indigo-900">
          <div className="mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-4 py-2 text-sm">
            <span className="kicker shrink-0 text-kisi-gold-300">
              The Coop Times
            </span>
            {latestNews.map((a) => (
              <Link
                key={a.id}
                href={`/news/${a.id}`}
                className="shrink-0 whitespace-nowrap text-kisi-cream-100/85 hover:text-kisi-gold-300"
              >
                {a.headline} ·
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRESIDENT'S WELCOME */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-8 rounded-3xl border border-kisi-gold-500/30 bg-white p-8 lg:grid-cols-[auto_1fr]">
          <ChickenPortrait chicken={president} size={180} framed />
          <div>
            <h2 className="font-display mt-3 text-2xl font-bold text-kisi-green-900">
              A Word from Her Excellency
            </h2>
            <blockquote className="mt-3 border-l-4 border-kisi-gold-500 pl-4 text-kisi-charcoal-600">
              <p>
                “Visitor, you are welcome. You will find here a nation of
                industry and dignity, where the eggs are counted honestly, the
                queue is straight, and breakfast is at seven —{" "}
                <em>not seven-ish</em>. Walk among us. Learn our stories. And
                if the opposition offers you her figures, take them; they are,
                irritatingly, correct.”
              </p>
              <footer className="mt-2 text-sm font-semibold text-kisi-green-700">
                — President Adédoyin “Mama Decree” Ọlásunkànmí
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FEATURED CITIZEN + MILESTONES */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <SectionHeading
          kicker="Citizen of the Week"
          title="The Republic is watching Chi-Chi"
          lede="Followed by the whole nation from heat lamp to first egg — and now, very quietly, to the junior sprint squad."
        />
        <div className="grid gap-6 lg:grid-cols-3">
          <ChickenCard chicken={featured} />
          {latestMilestones.slice(0, 2).map((m) => (
            <MilestoneCard key={m.id} milestone={m} />
          ))}
        </div>
        <p className="mt-6">
          <Link href="/eggs" className="font-semibold text-kisi-green-700 hover:underline">
            All egg milestones →
          </Link>
        </p>
      </section>

      {/* NATIONAL DASHBOARD */}
      <section className="bg-kisi-cream-200 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading
            kicker="The National Dashboard"
            title="The state of the Republic"
            lede="Census figures, cabinet, and the league — all clearly-labeled sample data until the real flock takes office."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Egg census */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="kicker text-kisi-gold-700">National Egg Census</p>
              <p className="font-display mt-2 text-5xl font-black text-kisi-green-900">
                {census.total}
              </p>
              <p className="text-sm text-kisi-charcoal-600">
                eggs recorded · {census.label}
              </p>
              <p className="mt-3 text-sm text-kisi-charcoal-600">{census.note}</p>
              <p className="mt-3">
              </p>
            </div>
            {/* Cabinet strip */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="kicker text-kisi-gold-700">The Cabinet</p>
              <ul className="mt-3 space-y-3">
                {cabinet.map((m) => {
                  const minister = m.ministerId ? getChicken(m.ministerId) : undefined;
                  return (
                    <li key={m.id} className="flex items-center gap-3">
                      {minister && <ChickenPortrait chicken={minister} size={40} />}
                      <div>
                        <Link
                          href={`/republic/government/${m.id}`}
                          className="text-sm font-semibold text-kisi-green-700 hover:underline"
                        >
                          {m.shortName}
                        </Link>
                        <p className="text-xs text-kisi-charcoal-600">
                          {minister ? minister.name : m.actingNote ?? "Vacant"}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Link
                href="/republic/government"
                className="mt-4 inline-block text-sm font-semibold text-kisi-green-700 hover:underline"
              >
                Full government →
              </Link>
            </div>
            {/* League table */}
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <p className="kicker text-kisi-gold-700">Coop Premier League</p>
              <table className="mt-3 w-full text-sm">
                <caption className="sr-only">
                  Coop Premier League top four
                </caption>
                <thead>
                  <tr className="text-left text-xs text-kisi-charcoal-600">
                    <th scope="col" className="py-1">Team</th>
                    <th scope="col" className="py-1 text-right">P</th>
                    <th scope="col" className="py-1 text-right">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {table.map((row) => (
                    <tr key={row.team.id} className="border-t border-kisi-cream-200">
                      <td className="py-1.5 font-medium">{row.team.name}</td>
                      <td className="py-1.5 text-right">{row.played}</td>
                      <td className="py-1.5 text-right font-bold">{row.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Link
                href="/republic/sports"
                className="mt-4 inline-block text-sm font-semibold text-kisi-green-700 hover:underline"
              >
                Fixtures & results →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FARM MAP TEASER */}
      <section className="mx-auto max-w-6xl px-4 pb-8">
        <div className="grid items-center gap-8 rounded-3xl bg-kisi-indigo-800 p-8 text-kisi-cream-100 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="kicker text-kisi-gold-300">New: The Farm Map</p>
            <h2 className="font-display mt-2 text-3xl font-bold">
              Walk the Republic
            </h2>
            <p className="mt-3 max-w-xl text-kisi-cream-100/85">
              Explore the farm in interactive 3D — from the foot-bath at the
              gate to the Presidential Coop, the Assembly, the sports field,
              and the hazy Agric City horizon. Every building opens its own
              story. A fast 2D map is built in for slower connections.
            </p>
            <Link
              href="/republic/map"
              className="mt-5 inline-block rounded-full bg-kisi-gold-500 px-6 py-3 font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
            >
              Open the Farm Map
            </Link>
          </div>
          {/* tiny illustrated plan preview */}
          <svg
            viewBox="0 0 100 80"
            width="220"
            height="176"
            aria-hidden="true"
            className="hidden rounded-2xl lg:block"
          >
            <rect width="100" height="80" rx="8" fill="#5c8a4e" />
            <rect x="47" y="40" width="6" height="36" fill="#b98a5a" rx="2" />
            <rect x="14" y="48" width="70" height="5" fill="#b98a5a" rx="2" />
            <rect x="24" y="46" width="16" height="10" fill="#c05621" rx="2" />
            <rect x="40" y="46" width="14" height="10" fill="#c05621" rx="2" />
            <rect x="56" y="43" width="13" height="10" fill="#d9a02b" rx="2" />
            <rect x="21" y="24" width="15" height="11" fill="#23305e" rx="2" />
            <rect x="64" y="10" width="18" height="12" fill="#7fae6b" rx="2" />
            <circle cx="46" cy="20" r="7" fill="#3f6b35" />
            <rect x="80" y="3" width="16" height="8" fill="#d9a02b" opacity="0.4" rx="2" />
          </svg>
        </div>
      </section>

      {/* LATEST FROM THE COOP TIMES */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading
          kicker="The Free Press"
          title="Latest from The Coop Times"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {latestNews.map((a) => (
            <ArticleCard key={a.id} article={a} />
          ))}
        </div>
        <p className="mt-6">
          <Link href="/news" className="font-semibold text-kisi-green-700 hover:underline">
            Read the paper →
          </Link>
        </p>
      </section>

      {/* THE REAL FARM */}
      <section className="bg-kisi-green-900 py-16 text-kisi-cream-100">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            Behind the Republic: a real farm
          </h2>
          <p className="mt-4 max-w-2xl text-kisi-cream-100/85">
            The satire is fiction; the birds, their care, and their eggs are
            real. Kisi is a working poultry farm in southwestern Nigeria,
            welfare-first and honestly documented — where a fact isn&apos;t
            verified yet, you&apos;ll see a placeholder, never an invention.
            And the long-term dream is bigger still: the Kisi Agric City.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/about"
              className="rounded-full bg-kisi-cream-100 px-6 py-3 font-semibold text-kisi-green-900 hover:bg-kisi-cream-200"
            >
              About Kisi Farm
            </Link>
            <Link
              href="/agric-city"
              className="rounded-full border border-kisi-cream-100/40 px-6 py-3 font-semibold hover:bg-kisi-cream-100/10"
            >
              The Agric City vision
            </Link>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-3xl border border-kisi-gold-500/30 bg-white p-8">
          <p className="kicker text-kisi-gold-700">This Week in the Republic</p>
          <h2 className="font-display mt-2 text-2xl font-bold text-kisi-green-900">
            Get the news before the Assembly does
          </h2>
          <p className="mt-2 max-w-xl text-sm text-kisi-charcoal-600">
            A weekly digest of milestones, matches, and ministerial
            misadventures — launching soon.
          </p>
          <NewsletterForm />
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
      </div>
    </>
  );
}
