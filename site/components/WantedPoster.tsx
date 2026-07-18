import Link from "next/link";
import { MonitorLizard } from "@/components/MonitorLizard";
import { monitorLizard } from "@/content/wanted";

/**
 * The Most Wanted poster. `full` renders the complete notice (the dedicated
 * page); the default renders the pasted-up version that appears around the
 * site — home, news, security ministry, Bantu's memorial.
 */
export function WantedPoster({ full = false }: { full?: boolean }) {
  const w = monitorLizard;

  return (
    <aside
      aria-labelledby="wanted-heading"
      className="overflow-hidden rounded-2xl border-4 border-kisi-charcoal-900 bg-[#f3e7c8] text-kisi-charcoal-900 shadow-lg"
    >
      <div className="border-b-4 border-kisi-charcoal-900 bg-kisi-charcoal-900 px-5 py-3 text-center">
        <p className="font-display text-3xl font-black tracking-[0.2em] text-[#f3e7c8] sm:text-4xl">
          WANTED
        </p>
        <p className="kicker mt-1 text-kisi-gold-300">
          By order of the Ministry of Security
        </p>
      </div>

      <div className="grid gap-5 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
        <div className="mx-auto rounded-lg border-2 border-kisi-charcoal-900 bg-[#1a1a17] p-1">
          <MonitorLizard size={full ? 300 : 240} />
        </div>

        <div>
          <h2 id="wanted-heading" className="font-display text-2xl font-black leading-tight">
            {w.name}
          </h2>
          <p className="font-display mt-1 text-lg font-bold text-kisi-earth-700">
            known as &ldquo;{w.alias}&rdquo;
          </p>

          <dl className="mt-4 space-y-2 text-sm">
            <div>
              <dt className="kicker text-kisi-charcoal-600">Wanted for</dt>
              <dd className="font-semibold">{w.charge}</dd>
            </div>
            <div>
              <dt className="kicker text-kisi-charcoal-600">Last seen</dt>
              <dd>{w.lastSeen}</dd>
            </div>
          </dl>

          <div className="mt-5 rounded-lg border-2 border-dashed border-kisi-charcoal-900 bg-[#e8d9b0] px-4 py-3 text-center">
            <p className="kicker text-kisi-charcoal-600">Reward</p>
            <p className="font-display text-3xl font-black text-kisi-earth-700">
              {w.bounty}
            </p>
            <p className="mt-1 text-xs">for information leading to its capture</p>
          </div>

          {!full && (
            <p className="mt-4">
              <Link
                href="/most-wanted"
                className="inline-block rounded-full bg-kisi-charcoal-900 px-5 py-2.5 text-sm font-semibold text-[#f3e7c8] hover:bg-kisi-earth-700"
              >
                Read the full notice →
              </Link>
            </p>
          )}
        </div>
      </div>

      <div className="border-t-2 border-kisi-charcoal-900 bg-[#e8d9b0] px-5 py-3">
        <p className="text-sm font-bold uppercase tracking-wide text-kisi-earth-700">
          Do not approach it
        </p>
        {full && <p className="mt-1 text-sm">{w.approach}</p>}
      </div>
    </aside>
  );
}
