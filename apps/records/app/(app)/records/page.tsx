import type { Metadata } from "next";
import Link from "next/link";
import { getMyFarm, getRecentRecords, getMonthStats } from "@/lib/data";
import { todayISO, prettyDate } from "@/lib/date";
import { naira, num } from "@/lib/calc";

export const metadata: Metadata = { title: "History" };

export default async function RecordsPage() {
  const farm = (await getMyFarm())!;
  const today = todayISO();
  const monthStart = today.slice(0, 8) + "01";
  // First day of next month, for an exclusive upper bound.
  const [y, m] = monthStart.split("-").map(Number);
  const nextMonth =
    m === 12
      ? `${y + 1}-01-01`
      : `${y}-${String(m + 1).padStart(2, "0")}-01`;

  const [records, stats] = await Promise.all([
    getRecentRecords(farm.id, 31),
    getMonthStats(farm.id, monthStart, nextMonth),
  ]);

  return (
    <div className="space-y-6">
      <section>
        <h1 className="font-display text-2xl text-kisi-green-900">This month so far</h1>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Stat label="Days recorded" value={String(stats.days)} />
          <Stat label="Eggs sold" value={stats.eggsSold.toLocaleString("en-NG")} />
          <Stat label="Revenue" value={naira(stats.revenue)} />
          <Stat label="Cash received" value={naira(stats.cashReceived)} />
          <Stat label="Owed to you" value={naira(stats.receivable)} tone={stats.receivable > 0 ? "warn" : "ok"} />
          <Stat label="Mortality" value={String(stats.mortality)} />
        </div>
      </section>

      <section>
        <h2 className="font-display text-xl text-kisi-green-900">Recent days</h2>
        {records.length === 0 ? (
          <p className="mt-2 text-sm text-kisi-charcoal-600">
            No records yet. <Link href="/today" className="font-semibold text-kisi-green-700 underline">Record today</Link>.
          </p>
        ) : (
          <div className="mt-3 overflow-x-auto">
            <table className="w-full min-w-[32rem] border-collapse text-sm">
              <thead>
                <tr className="text-left text-[0.7rem] uppercase tracking-wide text-kisi-charcoal-600">
                  <th className="py-2 pr-2">Date</th>
                  <th className="px-2">Sold</th>
                  <th className="px-2">Revenue</th>
                  <th className="px-2">Owed</th>
                  <th className="px-2">Mort.</th>
                  <th className="px-2"></th>
                </tr>
              </thead>
              <tbody>
                {records.map((r) => {
                  const owed = num(r.egg_revenue) - num(r.cash_received);
                  return (
                    <tr key={r.record_date} className="border-t border-[#f0e8d6]">
                      <td className="py-2 pr-2 font-semibold text-kisi-green-900">{prettyDate(r.record_date)}</td>
                      <td className="px-2">{num(r.eggs_sold)}</td>
                      <td className="px-2">{naira(r.egg_revenue)}</td>
                      <td className="px-2">{owed > 0 ? naira(owed) : "—"}</td>
                      <td className="px-2">{num(r.mortality)}</td>
                      <td className="px-2 text-right">
                        <Link href={`/today?date=${r.record_date}`} className="font-semibold text-kisi-green-700 underline">
                          Edit
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function Stat({ label, value, tone }: { label: string; value: string; tone?: "ok" | "warn" }) {
  const color = tone === "warn" ? "text-kisi-earth-700" : "text-kisi-green-900";
  return (
    <div className="card p-3">
      <p className="text-[0.62rem] font-semibold uppercase tracking-wide text-kisi-charcoal-600">{label}</p>
      <p className={`font-display text-xl ${color}`}>{value}</p>
    </div>
  );
}
