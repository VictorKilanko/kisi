import type { Metadata } from "next";
import Link from "next/link";
import { DemoBadge, WorldBadge } from "@/components/Badges";
import { SectionHeading, formatDate } from "@/components/Cards";
import { FictionDisclaimer } from "@/components/Disclaimer";
import {
  fixtures,
  getChicken,
  getTeam,
  leagueTable,
  matches,
  perchChampionship,
  topScorers,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "Sports",
  description:
    "The Coop Premier League, the Perch Jumping Championship, and the " +
    "sporting life of the Republic of Kisi.",
};

export default function SportsPage() {
  const table = leagueTable();
  const captain = getChicken("flash-adaora");
  const minister = getChicken("tunde-quickfoot");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fiction" />
        <DemoBadge />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Sports &amp; Recreation
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        Sanctioned by the Ministry of Sports, timed by the Bureau of Egg
        Statistics, and played under league law that puts bird safety above
        glory — though nobody has explained that to{" "}
        <Link href={`/flock/${captain.id}`} className="font-semibold text-kisi-green-700 hover:underline">
          Flash Adaora
        </Link>
        .
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[3fr_2fr]">
        {/* League table */}
        <section aria-labelledby="table-heading">
          <h2 id="table-heading" className="font-display text-2xl font-bold text-kisi-green-900">
            Coop Premier League — table
          </h2>
          <div className="mt-4 overflow-x-auto rounded-2xl bg-white p-4 shadow-sm">
            <table className="w-full min-w-[420px] text-sm">
              <caption className="sr-only">
                Coop Premier League standings (sample data)
              </caption>
              <thead>
                <tr className="text-left text-xs text-kisi-charcoal-600">
                  <th scope="col" className="py-2">#</th>
                  <th scope="col" className="py-2">Team</th>
                  <th scope="col" className="py-2 text-right">P</th>
                  <th scope="col" className="py-2 text-right">W</th>
                  <th scope="col" className="py-2 text-right">D</th>
                  <th scope="col" className="py-2 text-right">L</th>
                  <th scope="col" className="py-2 text-right">GF</th>
                  <th scope="col" className="py-2 text-right">GA</th>
                  <th scope="col" className="py-2 text-right">Pts</th>
                </tr>
              </thead>
              <tbody>
                {table.map((row, i) => (
                  <tr key={row.team.id} className="border-t border-kisi-cream-200">
                    <td className="py-2">{i + 1}</td>
                    <td className="py-2">
                      <span
                        aria-hidden="true"
                        className="mr-2 inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: row.team.color }}
                      />
                      <span className="font-medium">{row.team.name}</span>
                      <span className="block pl-4 text-xs text-kisi-charcoal-600">
                        “{row.team.motto}”
                      </span>
                    </td>
                    <td className="py-2 text-right">{row.played}</td>
                    <td className="py-2 text-right">{row.won}</td>
                    <td className="py-2 text-right">{row.drawn}</td>
                    <td className="py-2 text-right">{row.lost}</td>
                    <td className="py-2 text-right">{row.goalsFor}</td>
                    <td className="py-2 text-right">{row.goalsAgainst}</td>
                    <td className="py-2 text-right font-bold">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Perch championship */}
        <section aria-labelledby="perch-heading">
          <h2 id="perch-heading" className="font-display text-2xl font-bold text-kisi-green-900">
            Perch Jumping Championship
          </h2>
          <ol className="mt-4 space-y-3">
            {perchChampionship.map((c) => (
              <li key={c.year} className="rounded-2xl border border-kisi-gold-500/30 bg-white p-4">
                <p className="kicker text-kisi-gold-700">{c.year}</p>
                <p className="font-semibold text-kisi-green-900">{c.champion}</p>
                <p className="mt-1 text-sm text-kisi-charcoal-600">{c.note}</p>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-sm text-kisi-charcoal-600">
            The gatepost inscription — <em>“The perch is already wet. So am I.”</em>{" "}
            — is maintained by the ministry with public funds, a line item{" "}
            <Link href={`/flock/${minister.id}`} className="font-semibold text-kisi-green-700 hover:underline">
              Minister Quickfoot
            </Link>{" "}
            defends annually with visible emotion.
          </p>
        </section>
      </div>

      {/* Results */}
      <section className="mt-16">
        <SectionHeading kicker="Results & Fixtures" title="Recent matches" />
        <ul className="grid gap-4 md:grid-cols-2">
          {matches.map((m) => {
            const home = getTeam(m.homeId)!;
            const away = getTeam(m.awayId)!;
            const played = m.homeScore !== undefined && m.awayScore !== undefined;
            return (
              <li key={m.id} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="text-xs text-kisi-charcoal-600">
                  {m.sport} · {formatDate(m.date)}
                </p>
                <p className="font-display mt-1 text-lg font-bold text-kisi-green-900">
                  {home.name}{" "}
                  {played ? (
                    <span className="text-kisi-gold-700">
                      {m.homeScore} – {m.awayScore}
                    </span>
                  ) : (
                    <span className="text-kisi-charcoal-600">vs</span>
                  )}{" "}
                  {away.name}
                </p>
                {m.note && (
                  <p className="mt-2 text-sm text-kisi-charcoal-600">{m.note}</p>
                )}
              </li>
            );
          })}
        </ul>
      </section>

      {/* Fixtures + top scorers */}
      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-bold text-kisi-green-900">
            Upcoming fixtures
          </h2>
          <ul className="mt-4 space-y-3">
            {fixtures.map((f) => {
              const home = getTeam(f.homeId)!;
              const away = getTeam(f.awayId)!;
              return (
                <li key={`${f.date}-${f.homeId}`} className="rounded-2xl border border-kisi-green-900/10 bg-white p-4">
                  <p className="text-xs text-kisi-charcoal-600">{formatDate(f.date)}</p>
                  <p className="font-display mt-1 font-bold text-kisi-green-900">
                    {home.name} <span className="text-kisi-charcoal-600">vs</span> {away.name}
                  </p>
                  <p className="mt-1 text-sm text-kisi-charcoal-600">{f.note}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-2xl font-bold text-kisi-green-900">
            Top scorers
          </h2>
          <ol className="mt-4 space-y-3">
            {topScorers.map((s, i) => {
              const team = getTeam(s.teamId)!;
              return (
                <li key={s.name} className="flex items-center justify-between rounded-2xl border border-kisi-gold-500/30 bg-white p-4">
                  <div>
                    <p className="font-semibold text-kisi-green-900">
                      {i + 1}.{" "}
                      {s.chickenId ? (
                        <Link href={`/flock/${s.chickenId}`} className="hover:underline">
                          {s.name}
                        </Link>
                      ) : (
                        s.name
                      )}
                    </p>
                    <p className="text-xs text-kisi-charcoal-600">{team.name}</p>
                  </div>
                  <p className="font-display text-2xl font-black text-kisi-gold-700">{s.goals}</p>
                </li>
              );
            })}
          </ol>
          <p className="mt-3 text-xs text-kisi-charcoal-600">
            Squad players beyond the featured citizens are named for flavour —
            sample content, like everything in the league.
          </p>
        </div>
      </section>

      <p className="mt-10 text-sm text-kisi-charcoal-600">
        League law, Article 1: no activity may endanger any bird. Article 2:
        the wind is not an excuse. Article 3: Article 2 is suspended for
        Harmattan FC home games.
      </p>

      <FictionDisclaimer />
    </div>
  );
}
