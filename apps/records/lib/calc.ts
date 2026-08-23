/**
 * Pure calculation helpers — the same auto-columns the spreadsheet computes,
 * but in one tested place. No framework or database imports, so they are easy
 * to unit-test and reuse on both server and client.
 */
import type { BatchDaily, DailyRecord } from "./types";

const EGGS_PER_CRATE = 30;

export function num(v: number | null | undefined): number {
  return typeof v === "number" && Number.isFinite(v) ? v : 0;
}

/** Total birds = sum of each batch's live count. */
export function totalBirds(batches: BatchDaily[]): number {
  return batches.reduce((s, b) => s + num(b.birds), 0);
}

/** Total good eggs collected across all batches. */
export function totalEggs(batches: BatchDaily[]): number {
  return batches.reduce((s, b) => s + num(b.eggs), 0);
}

/** Total feed given (kg) across all batches. */
export function totalFeedKg(batches: BatchDaily[]): number {
  return batches.reduce((s, b) => s + num(b.feed_kg), 0);
}

/**
 * Production rate = total eggs / laying birds, as a 0..1 fraction.
 * Returns null when there are no laying birds (avoids a divide-by-zero).
 */
export function productionRate(
  eggs: number,
  layingBirds: number | null | undefined,
): number | null {
  const layers = num(layingBirds);
  if (layers <= 0) return null;
  return eggs / layers;
}

/** Eggs still in store that day = good eggs − cracked − sold (never below 0). */
export function eggsUnsold(record: DailyRecord, eggs: number): number {
  return Math.max(0, eggs - num(record.eggs_cracked) - num(record.eggs_sold));
}

/** Money customers still owe = revenue − cash actually received. */
export function receivable(record: DailyRecord): number {
  return num(record.egg_revenue) - num(record.cash_received);
}

/** Crates from a count of eggs (30 eggs to a crate). */
export function crates(eggs: number): number {
  return eggs / EGGS_PER_CRATE;
}

/** Format a number as Naira, e.g. 495000 -> "₦495,000". */
export function naira(v: number | null | undefined): string {
  return "₦" + Math.round(num(v)).toLocaleString("en-NG");
}

/** Format a 0..1 rate as a percentage, e.g. 0.727 -> "73%". */
export function percent(rate: number | null): string {
  if (rate === null) return "—";
  return Math.round(rate * 100) + "%";
}
