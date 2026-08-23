import type { Metadata } from "next";
import { getMyFarm, getBatches, getDayEntry } from "@/lib/data";
import { todayISO, prettyDate } from "@/lib/date";
import { DailyLogForm } from "@/components/DailyLogForm";

export const metadata: Metadata = { title: "Today" };

export default async function TodayPage({
  searchParams,
}: {
  searchParams: Promise<{ date?: string }>;
}) {
  const { date: qDate } = await searchParams;
  const date = qDate && /^\d{4}-\d{2}-\d{2}$/.test(qDate) ? qDate : todayISO();

  const farm = (await getMyFarm())!; // layout guarantees a farm
  const [batches, existing] = await Promise.all([
    getBatches(farm.id),
    getDayEntry(farm.id, date),
  ]);

  return (
    <div>
      <div className="mb-4">
        <p className="kicker text-kisi-earth-500">{prettyDate(date)}</p>
        <h1 className="font-display text-2xl text-kisi-green-900">
          {existing ? "Edit the day's record" : "Record today"}
        </h1>
        <p className="mt-1 text-sm text-kisi-charcoal-600">
          Fill what you can. Totals, production % and money owed add up
          automatically.
        </p>
      </div>

      {batches.length === 0 ? (
        <div className="card p-5 text-sm text-kisi-charcoal-600">
          No active batches found for this farm. Add batches in the database
          (or run the seed in <code>supabase/schema.sql</code>).
        </div>
      ) : (
        <DailyLogForm batches={batches} date={date} existing={existing} />
      )}
    </div>
  );
}
