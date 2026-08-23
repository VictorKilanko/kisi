/**
 * Server-side data access for Kisi Farm Records. Every function creates a
 * request-scoped Supabase client, so Row Level Security in the database is what
 * enforces "a farm only sees its own data" — not code in this file.
 */
import "server-only";
import { createClient } from "./supabase/server";
import type { Batch, BatchDaily, DailyRecord, DayEntry, Farm } from "./types";

/** The farm the signed-in user belongs to, or null if not signed in / no farm. */
export async function getMyFarm(): Promise<Farm | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("farm_id")
    .eq("id", user.id)
    .maybeSingle();
  if (!profile?.farm_id) return null;

  const { data: farm } = await supabase
    .from("farms")
    .select("*")
    .eq("id", profile.farm_id)
    .maybeSingle();
  return farm ?? null;
}

/** Active batches for a farm, ordered by code (B-001, B-002, ...). */
export async function getBatches(farmId: string): Promise<Batch[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("batches")
    .select("*")
    .eq("farm_id", farmId)
    .eq("status", "active")
    .order("code", { ascending: true });
  return data ?? [];
}

/** Load a single day's record (with per-batch lines) for a farm, or null. */
export async function getDayEntry(
  farmId: string,
  date: string,
): Promise<DayEntry | null> {
  const supabase = await createClient();
  const { data: record } = await supabase
    .from("daily_records")
    .select("*")
    .eq("farm_id", farmId)
    .eq("record_date", date)
    .maybeSingle();
  if (!record) return null;

  const { data: batches } = await supabase
    .from("batch_daily")
    .select("*")
    .eq("daily_record_id", record.id);

  return { record: record as DailyRecord, batches: (batches ?? []) as BatchDaily[] };
}

/** Recent days for the history list, newest first. */
export async function getRecentRecords(
  farmId: string,
  limit = 30,
): Promise<DailyRecord[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("daily_records")
    .select("*")
    .eq("farm_id", farmId)
    .order("record_date", { ascending: false })
    .limit(limit);
  return (data ?? []) as DailyRecord[];
}

export interface MonthStats {
  days: number;
  eggsSold: number;
  revenue: number;
  cashReceived: number;
  receivable: number;
  mortality: number;
}

/** Month-to-date rollup from the daily records within [start, end). */
export async function getMonthStats(
  farmId: string,
  start: string,
  end: string,
): Promise<MonthStats> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("daily_records")
    .select("eggs_sold, egg_revenue, cash_received, mortality")
    .eq("farm_id", farmId)
    .gte("record_date", start)
    .lt("record_date", end);

  const rows = data ?? [];
  const sum = (k: string) =>
    rows.reduce((s, r) => s + (Number((r as Record<string, unknown>)[k]) || 0), 0);
  const revenue = sum("egg_revenue");
  const cashReceived = sum("cash_received");
  return {
    days: rows.length,
    eggsSold: sum("eggs_sold"),
    revenue,
    cashReceived,
    receivable: revenue - cashReceived,
    mortality: sum("mortality"),
  };
}
