import Link from "next/link";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { DemoBadge, StatusBadge, WorldBadge } from "@/components/Badges";
import type { Article, Chicken, EggMilestone, TimelineEvent } from "@/lib/schemas";
import { findChicken } from "@/lib/content";

export function ChickenCard({ chicken }: { chicken: Chicken }) {
  return (
    <article className="flex flex-col rounded-2xl border border-kisi-green-900/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <ChickenPortrait chicken={chicken} size={96} framed={chicken.branch !== "none"} />
        <div className="flex flex-col items-end gap-2">
          <StatusBadge status={chicken.status} />
          {chicken.isDemo && <DemoBadge />}
        </div>
      </div>
      <h3 className="font-display mt-4 text-xl font-bold text-kisi-green-900">
        <Link href={`/flock/${chicken.id}`} className="hover:underline">
          {chicken.name}
          {chicken.nickname ? (
            <span className="text-kisi-charcoal-600"> “{chicken.nickname}”</span>
          ) : null}
        </Link>
      </h3>
      {chicken.roleTitle && (
        <p className="kicker mt-1 text-kisi-gold-700">{chicken.roleTitle}</p>
      )}
      <p className="mt-2 line-clamp-3 text-sm text-kisi-charcoal-600">
        {chicken.shortBio}
      </p>
      <p className="mt-3 flex flex-wrap gap-1.5">
        {chicken.personality.slice(0, 3).map((t) => (
          <span
            key={t}
            className="rounded-full bg-kisi-cream-200 px-2.5 py-0.5 text-xs text-kisi-charcoal-600"
          >
            {t}
          </span>
        ))}
      </p>
      <Link
        href={`/flock/${chicken.id}`}
        className="mt-4 text-sm font-semibold text-kisi-green-700 hover:underline"
        aria-label={`Full profile of ${chicken.name}`}
      >
        Full profile →
      </Link>
    </article>
  );
}

export function ArticleCard({ article, compact = false }: { article: Article; compact?: boolean }) {
  return (
    <article className="rounded-2xl border border-kisi-indigo-800/15 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world={article.world} />
        <span className="kicker text-kisi-charcoal-600">{article.category.replace("-", " ")}</span>
        {article.isDemo && <DemoBadge />}
      </div>
      <h3 className="font-display mt-3 text-lg font-bold leading-snug text-kisi-indigo-900">
        <Link href={`/news/${article.id}`} className="hover:underline">
          {article.headline}
        </Link>
      </h3>
      {!compact && (
        <p className="mt-2 text-sm text-kisi-charcoal-600">{article.standfirst}</p>
      )}
      <p className="mt-3 text-xs text-kisi-charcoal-600">
        By {article.author.name} · {formatDate(article.publishedAt)}
      </p>
    </article>
  );
}

export function MilestoneCard({ milestone }: { milestone: EggMilestone }) {
  const chicken = findChicken(milestone.chickenId);
  const TYPE_LABEL: Record<EggMilestone["type"], string> = {
    "first-egg": "First egg",
    count: `Egg No. ${milestone.count ?? "—"}`,
    "laying-break": "Laying break",
    "return-to-lay": "Return to lay",
    retirement: "Retirement",
  };
  return (
    <article className="rounded-2xl border border-kisi-gold-500/30 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        {chicken && <ChickenPortrait chicken={chicken} size={56} />}
        <div>
          <p className="kicker text-kisi-gold-700">{TYPE_LABEL[milestone.type]}</p>
          <h3 className="font-display text-lg font-bold text-kisi-green-900">
            {chicken ? (
              <Link href={`/flock/${chicken.id}`} className="hover:underline">
                {chicken.name}
              </Link>
            ) : (
              "—"
            )}
          </h3>
          <p className="text-xs text-kisi-charcoal-600">{formatDate(milestone.date)}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-kisi-charcoal-600">{milestone.story}</p>
      {milestone.isDemo && (
        <p className="mt-3">
          <DemoBadge />
        </p>
      )}
    </article>
  );
}

export function Timeline({ events }: { events: TimelineEvent[] }) {
  if (events.length === 0) return null;
  return (
    <ol className="relative space-y-6 border-l-2 border-kisi-gold-500/40 pl-6">
      {events.map((e) => (
        <li key={e.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-kisi-gold-500 bg-kisi-cream-100"
          />
          <p className="text-xs text-kisi-charcoal-600">{formatDate(e.date)}</p>
          <h4 className="font-display font-bold text-kisi-green-900">{e.title}</h4>
          <p className="mt-1 text-sm text-kisi-charcoal-600">{e.body}</p>
          {e.articleId && (
            <Link
              href={`/news/${e.articleId}`}
              className="mt-1 inline-block text-sm font-semibold text-kisi-indigo-800 hover:underline"
            >
              Coverage in The Coop Times →
            </Link>
          )}
        </li>
      ))}
    </ol>
  );
}

export function SectionHeading({
  kicker,
  title,
  lede,
}: {
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <div className="mb-8">
      <p className="kicker text-kisi-gold-700">{kicker}</p>
      <h2 className="font-display mt-1 text-3xl font-bold text-kisi-green-900 sm:text-4xl">
        {title}
      </h2>
      {lede && <p className="mt-3 max-w-2xl text-kisi-charcoal-600">{lede}</p>}
    </div>
  );
}

export function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
