"use client";

import { useActionState, useMemo, useState } from "react";
import { saveDay, type SaveState } from "@/app/(app)/today/actions";
import type { Batch, DayEntry } from "@/lib/types";
import { naira, num, percent } from "@/lib/calc";

interface Props {
  batches: Batch[];
  date: string;
  existing: DayEntry | null;
}

export function DailyLogForm({ batches, date, existing }: Props) {
  // Prefill from an existing record when editing a past day.
  const byBatch = useMemo(() => {
    const map: Record<string, { birds?: number | null; age?: number | null; eggs?: number | null; feed?: number | null }> = {};
    for (const line of existing?.batches ?? []) {
      map[line.batch_id] = {
        birds: line.birds,
        age: line.age_weeks,
        eggs: line.eggs,
        feed: line.feed_kg,
      };
    }
    return map;
  }, [existing]);

  const rec = existing?.record;

  // Live-calc state: only the fields the running totals depend on.
  const [vals, setVals] = useState<Record<string, string>>(() => {
    const v: Record<string, string> = {};
    for (const b of batches) {
      const d = byBatch[b.id] ?? {};
      v[`birds_${b.id}`] = d.birds != null ? String(d.birds) : String(b.current_count ?? "");
      v[`eggs_${b.id}`] = d.eggs != null ? String(d.eggs) : "";
      v[`feed_${b.id}`] = d.feed != null ? String(d.feed) : "";
    }
    v.laying_birds = rec?.laying_birds != null ? String(rec.laying_birds) : "";
    v.eggs_cracked = rec?.eggs_cracked != null ? String(rec.eggs_cracked) : "";
    v.eggs_sold = rec?.eggs_sold != null ? String(rec.eggs_sold) : "";
    v.egg_revenue = rec?.egg_revenue != null ? String(rec.egg_revenue) : "";
    v.cash_received = rec?.cash_received != null ? String(rec.cash_received) : "";
    return v;
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setVals((p) => ({ ...p, [k]: e.target.value }));

  const g = (k: string) => num(Number(vals[k]));

  const totalBirds = batches.reduce((s, b) => s + g(`birds_${b.id}`), 0);
  const totalEggs = batches.reduce((s, b) => s + g(`eggs_${b.id}`), 0);
  const totalFeed = batches.reduce((s, b) => s + g(`feed_${b.id}`), 0);
  const prod = g("laying_birds") > 0 ? totalEggs / g("laying_birds") : null;
  const unsold = Math.max(0, totalEggs - g("eggs_cracked") - g("eggs_sold"));
  const receivable = g("egg_revenue") - g("cash_received");

  const [state, formAction, pending] = useActionState<SaveState, FormData>(saveDay, null);

  const meta = JSON.stringify(batches.map((b) => ({ id: b.id, code: b.code })));

  return (
    <form action={formAction} className="space-y-6">
      <input type="hidden" name="batch_meta" value={meta} />

      <div className="field max-w-xs">
        <label htmlFor="record_date">Date</label>
        <input id="record_date" name="record_date" type="date" defaultValue={date} className="input" required />
      </div>

      {/* Per-batch grid */}
      <section className="card p-4">
        <h2 className="font-display text-xl text-kisi-green-900">Each batch today</h2>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="text-left text-[0.7rem] uppercase tracking-wide text-kisi-charcoal-600">
                <th className="py-1 pr-2">Batch</th>
                <th className="px-1">Birds</th>
                <th className="px-1">Age (wk)</th>
                <th className="px-1">Eggs</th>
                <th className="px-1">Feed (kg)</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((b) => {
                const d = byBatch[b.id] ?? {};
                return (
                  <tr key={b.id} className="border-t border-[#f0e8d6]">
                    <td className="py-2 pr-2 font-semibold text-kisi-green-900">{b.code}</td>
                    <td className="px-1"><input name={`birds_${b.id}`} inputMode="numeric" className="input !py-1.5" value={vals[`birds_${b.id}`]} onChange={set(`birds_${b.id}`)} /></td>
                    <td className="px-1"><input name={`age_${b.id}`} inputMode="numeric" className="input !py-1.5" defaultValue={d.age != null ? String(d.age) : ""} /></td>
                    <td className="px-1"><input name={`eggs_${b.id}`} inputMode="numeric" className="input !py-1.5" value={vals[`eggs_${b.id}`]} onChange={set(`eggs_${b.id}`)} /></td>
                    <td className="px-1"><input name={`feed_${b.id}`} inputMode="decimal" className="input !py-1.5" value={vals[`feed_${b.id}`]} onChange={set(`feed_${b.id}`)} /></td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-[#e4d9bf] font-semibold text-kisi-green-900">
                <td className="py-2 pr-2">Total</td>
                <td className="px-1">{totalBirds}</td>
                <td className="px-1">—</td>
                <td className="px-1">{totalEggs}</td>
                <td className="px-1">{totalFeed.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* Production */}
      <section className="card p-4">
        <h2 className="font-display text-xl text-kisi-green-900">Egg production</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Field label="Laying birds"><input name="laying_birds" inputMode="numeric" className="input" value={vals.laying_birds} onChange={set("laying_birds")} /></Field>
          <Field label="Cracked / dirty"><input name="eggs_cracked" inputMode="numeric" className="input" value={vals.eggs_cracked} onChange={set("eggs_cracked")} /></Field>
          <Field label="Eggs sold"><input name="eggs_sold" inputMode="numeric" className="input" value={vals.eggs_sold} onChange={set("eggs_sold")} /></Field>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <Chip label="Total eggs" value={String(totalEggs)} />
          <Chip label="Production" value={percent(prod)} />
          <Chip label="Unsold" value={String(unsold)} />
        </div>
      </section>

      {/* Health */}
      <section className="card p-4">
        <h2 className="font-display text-xl text-kisi-green-900">Health</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Field label="Mortality (#)"><input name="mortality" inputMode="numeric" defaultValue={rec?.mortality != null ? String(rec.mortality) : "0"} className="input" /></Field>
          <Field label="Sick (#)"><input name="sick" inputMode="numeric" defaultValue={rec?.sick != null ? String(rec.sick) : "0"} className="input" /></Field>
          <label className="field justify-end">
            <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-kisi-charcoal-600">Checks</span>
            <span className="flex gap-4 py-2 text-sm">
              <span className="inline-flex items-center gap-1"><input type="checkbox" name="water_ok" defaultChecked={rec?.water_ok ?? true} /> Water OK</span>
              <span className="inline-flex items-center gap-1"><input type="checkbox" name="vet_visit" defaultChecked={rec?.vet_visit ?? false} /> Vet</span>
            </span>
          </label>
          <Field label="Mortality cause"><input name="mortality_cause" defaultValue={rec?.mortality_cause ?? ""} className="input" /></Field>
          <Field label="Treatment given"><input name="treatment" defaultValue={rec?.treatment ?? ""} className="input" /></Field>
        </div>
      </section>

      {/* Sales & cash */}
      <section className="card p-4">
        <h2 className="font-display text-xl text-kisi-green-900">Sales &amp; cash</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Field label="Egg revenue (₦)"><input name="egg_revenue" inputMode="numeric" className="input" value={vals.egg_revenue} onChange={set("egg_revenue")} /></Field>
          <Field label="Cash received (₦)"><input name="cash_received" inputMode="numeric" className="input" value={vals.cash_received} onChange={set("cash_received")} /></Field>
          <Field label="Cash at hand (₦)"><input name="cash_at_hand" inputMode="numeric" defaultValue={rec?.cash_at_hand != null ? String(rec.cash_at_hand) : ""} className="input" /></Field>
          <Field label="Expenses (₦)"><input name="expenses" inputMode="numeric" defaultValue={rec?.expenses != null ? String(rec.expenses) : ""} className="input" /></Field>
          <Field label="Price breakdown"><input name="price_note" defaultValue={rec?.price_note ?? ""} placeholder="e.g. 10=4500, 1=5000" className="input" /></Field>
          <Field label="Expense detail"><input name="expense_detail" defaultValue={rec?.expense_detail ?? ""} className="input" /></Field>
        </div>
        <div className="mt-3">
          <Chip label="Receivable (owed to you)" value={naira(receivable)} tone={receivable > 0 ? "warn" : "ok"} />
        </div>
      </section>

      {/* Notes */}
      <div className="field">
        <label htmlFor="notes">Notes / observations</label>
        <textarea id="notes" name="notes" defaultValue={rec?.notes ?? ""} rows={2} className="input" />
      </div>

      {state && "error" in state && (
        <p role="alert" className="text-sm text-kisi-earth-700">{state.error}</p>
      )}
      {state && "ok" in state && (
        <p role="status" className="text-sm font-semibold text-kisi-green-700">Saved. ✓</p>
      )}

      <div className="sticky bottom-0 -mx-4 border-t border-[#ece2cc] bg-kisi-cream-100/95 px-4 py-3 backdrop-blur">
        <button type="submit" className="btn w-full" disabled={pending}>
          {pending ? "Saving…" : existing ? "Update today's record" : "Save today's record"}
        </button>
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="field">
      <span className="text-[0.72rem] font-semibold uppercase tracking-wide text-kisi-charcoal-600">{label}</span>
      {children}
    </label>
  );
}

function Chip({ label, value, tone }: { label: string; value: string; tone?: "ok" | "warn" }) {
  const color =
    tone === "warn"
      ? "bg-kisi-earth-500/10 text-kisi-earth-700"
      : "bg-kisi-green-500/10 text-kisi-green-900";
  return (
    <span className={`inline-flex flex-col rounded-lg px-3 py-1.5 ${color}`}>
      <span className="text-[0.62rem] font-semibold uppercase tracking-wide opacity-80">{label}</span>
      <span className="font-display text-lg leading-none">{value}</span>
    </span>
  );
}
