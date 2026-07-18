import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DemoBadge, StatusBadge, WorldBadge } from "@/components/Badges";
import { ArticleCard, MilestoneCard, Timeline, SectionHeading } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { FictionDisclaimer } from "@/components/Disclaimer";
import {
  articlesForChicken,
  chickens,
  findChicken,
  getMinistry,
  getParty,
  getTeam,
  milestonesForChicken,
  timelineForChicken,
} from "@/lib/content";

export function generateStaticParams() {
  return chickens.map((c) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chicken = findChicken(slug);
  if (!chicken) return { title: "Citizen not found" };
  return {
    title: `${chicken.name}${chicken.nickname ? ` “${chicken.nickname}”` : ""}`,
    description: chicken.shortBio,
  };
}

const LAYING_LABEL: Record<string, string> = {
  "not-yet": "Not yet laying",
  laying: "Laying",
  break: "On a laying break",
  retired: "Retired from laying",
  "n-a": "Not applicable",
};

export default async function ChickenProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chicken = findChicken(slug);
  if (!chicken) notFound();

  const party = chicken.partyId ? getParty(chicken.partyId) : undefined;
  const ministry = chicken.ministryId ? getMinistry(chicken.ministryId) : undefined;
  const team = chicken.teamId ? getTeam(chicken.teamId) : undefined;
  const articles = articlesForChicken(chicken.id);
  const milestones = milestonesForChicken(chicken.id);
  const timeline = timelineForChicken(chicken.id);
  const friends = chicken.friends.map((id) => findChicken(id)!);
  const rivals = chicken.rivals.map((id) => findChicken(id)!);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      {/* Profile header */}
      <header className="grid gap-8 rounded-3xl border border-kisi-gold-500/30 bg-white p-8 lg:grid-cols-[auto_1fr]">
        <ChickenPortrait chicken={chicken} size={220} framed={chicken.branch !== "none"} />
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <WorldBadge world="fiction" />
            <StatusBadge status={chicken.status} />
            {chicken.isDemo && <DemoBadge />}
          </div>
          {chicken.honorific && (
            <p className="kicker mt-4 text-kisi-gold-700">{chicken.honorific}</p>
          )}
          <h1 className="font-display mt-1 text-4xl font-black text-kisi-green-900">
            {chicken.name}
            {chicken.nickname && (
              <span className="text-kisi-charcoal-600"> “{chicken.nickname}”</span>
            )}
          </h1>
          {chicken.fullName && chicken.fullName !== chicken.name && (
            <p className="mt-1 text-kisi-charcoal-600">{chicken.fullName}</p>
          )}
          {chicken.oriki && (
            <p className="mt-3 border-l-4 border-kisi-gold-500 pl-3 italic text-kisi-charcoal-600">
              {chicken.oriki.line}
              <span className="block text-sm not-italic">— {chicken.oriki.meaning}</span>
            </p>
          )}
          <p className="mt-4 max-w-2xl text-kisi-charcoal-600">{chicken.shortBio}</p>

          <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-3">
            <div>
              <dt className="kicker text-kisi-charcoal-600">Breed</dt>
              <dd className="mt-0.5">{chicken.breed}</dd>
            </div>
            <div>
              <dt className="kicker text-kisi-charcoal-600">Age</dt>
              <dd className="mt-0.5">{chicken.ageNote}</dd>
            </div>
            <div>
              <dt className="kicker text-kisi-charcoal-600">Laying status</dt>
              <dd className="mt-0.5">{LAYING_LABEL[chicken.layingStatus]}</dd>
            </div>
            {chicken.roleTitle && (
              <div>
                <dt className="kicker text-kisi-charcoal-600">Office</dt>
                <dd className="mt-0.5">
                  {ministry ? (
                    <Link
                      href={`/republic/government/${ministry.id}`}
                      className="text-kisi-green-700 hover:underline"
                    >
                      {chicken.roleTitle}
                    </Link>
                  ) : (
                    chicken.roleTitle
                  )}
                </dd>
              </div>
            )}
            {party && (
              <div>
                <dt className="kicker text-kisi-charcoal-600">Party</dt>
                <dd className="mt-0.5">
                  {party.name} ({party.abbr})
                </dd>
              </div>
            )}
            {team && (
              <div>
                <dt className="kicker text-kisi-charcoal-600">Team</dt>
                <dd className="mt-0.5">{team.name}</dd>
              </div>
            )}
            {chicken.favoriteFood && (
              <div>
                <dt className="kicker text-kisi-charcoal-600">Favourite food</dt>
                <dd className="mt-0.5">{chicken.favoriteFood}</dd>
              </div>
            )}
          </dl>
        </div>
      </header>

      <div className="mt-12 grid gap-12 lg:grid-cols-[2fr_1fr]">
        <div>
          {/* Biography */}
          <section aria-labelledby="bio-heading">
            <h2 id="bio-heading" className="font-display text-2xl font-bold text-kisi-green-900">
              The story so far
            </h2>
            <div className="prose-kisi mt-4 space-y-4 text-kisi-charcoal-900">
              {chicken.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* Timeline */}
          {timeline.length > 0 && (
            <section aria-labelledby="timeline-heading" className="mt-12">
              <h2 id="timeline-heading" className="font-display text-2xl font-bold text-kisi-green-900">
                Life events
              </h2>
              <div className="mt-6">
                <Timeline events={timeline} />
              </div>
            </section>
          )}

          {/* Articles */}
          {articles.length > 0 && (
            <section aria-labelledby="press-heading" className="mt-12">
              <h2 id="press-heading" className="font-display text-2xl font-bold text-kisi-green-900">
                In The Coop Times
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {articles.map((a) => (
                  <ArticleCard key={a.id} article={a} compact />
                ))}
              </div>
            </section>
          )}

          {/* Milestones */}
          {milestones.length > 0 && (
            <section aria-labelledby="egg-heading" className="mt-12">
              <h2 id="egg-heading" className="font-display text-2xl font-bold text-kisi-green-900">
                Egg milestones
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {milestones.map((m) => (
                  <MilestoneCard key={m.id} milestone={m} />
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {chicken.quotes.length > 0 && (
            <section className="rounded-2xl bg-kisi-indigo-800 p-6 text-kisi-cream-100">
              <h2 className="kicker text-kisi-gold-300">On the record</h2>
              <ul className="mt-4 space-y-4">
                {chicken.quotes.map((q, i) => (
                  <li key={i}>
                    <blockquote className="text-sm">
                      <p>“{q.text}”</p>
                      {q.context && (
                        <footer className="mt-1 text-xs text-kisi-cream-100/70">
                          — {q.context}
                        </footer>
                      )}
                    </blockquote>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {(friends.length > 0 || rivals.length > 0) && (
            <section className="rounded-2xl border border-kisi-green-900/10 bg-white p-6">
              <h2 className="kicker text-kisi-charcoal-600">Relationships</h2>
              {friends.length > 0 && (
                <>
                  <h3 className="mt-3 text-sm font-bold text-kisi-green-700">Friends</h3>
                  <ul className="mt-2 space-y-2">
                    {friends.map((f) => (
                      <li key={f.id} className="flex items-center gap-2">
                        <ChickenPortrait chicken={f} size={36} />
                        <Link href={`/flock/${f.id}`} className="text-sm hover:underline">
                          {f.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {rivals.length > 0 && (
                <>
                  <h3 className="mt-4 text-sm font-bold text-kisi-earth-700">
                    Rivals (cherished)
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {rivals.map((r) => (
                      <li key={r.id} className="flex items-center gap-2">
                        <ChickenPortrait chicken={r} size={36} />
                        <Link href={`/flock/${r.id}`} className="text-sm hover:underline">
                          {r.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          )}

          {chicken.family && chicken.family.length > 0 && (
            <section className="rounded-2xl border border-kisi-green-900/10 bg-white p-6">
              <h2 className="kicker text-kisi-charcoal-600">Family & bonds</h2>
              <ul className="mt-3 space-y-3 text-sm">
                {chicken.family.map((f, i) => (
                  <li key={i}>
                    <span className="font-semibold">{f.relation}: </span>
                    {f.note}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {chicken.achievements.length > 0 && (
            <section className="rounded-2xl border border-kisi-gold-500/40 bg-white p-6">
              <h2 className="kicker text-kisi-gold-700">Achievements</h2>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm">
                {chicken.achievements.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </section>
          )}

          {chicken.sponsorable && (
            <section className="rounded-2xl bg-kisi-green-700 p-6 text-kisi-cream-100">
              <h2 className="font-display text-lg font-bold">
                Support {chicken.name}
              </h2>
              <p className="mt-2 text-sm text-kisi-cream-100/85">
                Sponsorship helps fund feed, veterinary care, and clean water
                for the real birds at Kisi. Coming in a later phase — the
                Republic is drafting the paperwork properly first.
              </p>
              <Link
                href="/support"
                className="mt-4 inline-block rounded-full bg-kisi-gold-500 px-5 py-2 text-sm font-semibold text-kisi-charcoal-900 hover:bg-kisi-gold-300"
              >
                Learn about support
              </Link>
            </section>
          )}
        </aside>
      </div>

      <div className="mt-12">
        <SectionHeading kicker="Keep exploring" title="More citizens" />
        <p>
          <Link href="/flock" className="font-semibold text-kisi-green-700 hover:underline">
            ← Back to the full registry
          </Link>
        </p>
      </div>

      <FictionDisclaimer />
    </div>
  );
}
