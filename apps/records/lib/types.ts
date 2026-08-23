/**
 * Domain types for Kisi Farm Records. These mirror the database tables in
 * supabase/schema.sql. Kept framework-free so they can be imported anywhere.
 */

export type BatchStatus =
  | "active"
  | "incoming"
  | "parent_stock"
  | "retired"
  | "future";

export interface Farm {
  id: string;
  name: string;
  location: string | null;
  created_at: string;
}

export interface Batch {
  id: string;
  farm_id: string;
  code: string; // e.g. "B-001"
  breed: string | null;
  source: string | null;
  arrival_date: string | null; // ISO date
  arrival_count: number | null;
  current_count: number | null;
  status: BatchStatus;
  notes: string | null;
}

/** One batch's line inside a single day's record. */
export interface BatchDaily {
  id?: string;
  daily_record_id?: string;
  farm_id: string;
  batch_id: string;
  batch_code: string; // denormalised for easy display
  birds: number | null;
  age_weeks: number | null;
  eggs: number | null;
  feed_kg: number | null;
}

/** The farm-wide part of one day's record. */
export interface DailyRecord {
  id?: string;
  farm_id: string;
  record_date: string; // ISO date, unique per farm
  laying_birds: number | null;
  water_ok: boolean | null;
  mortality: number | null;
  mortality_cause: string | null;
  sick: number | null;
  treatment: string | null;
  vet_visit: boolean | null;
  eggs_cracked: number | null;
  eggs_sold: number | null;
  price_note: string | null; // free text price breakdown, e.g. "10=4500, 1=5000"
  egg_revenue: number | null;
  cash_received: number | null;
  cash_at_hand: number | null;
  expenses: number | null;
  expense_detail: string | null;
  notes: string | null;
}

/** A day's record together with its per-batch lines. */
export interface DayEntry {
  record: DailyRecord;
  batches: BatchDaily[];
}

export interface FeedPurchase {
  id?: string;
  farm_id: string;
  purchase_date: string;
  supplier: string | null;
  feed_type: string | null;
  bags: number | null;
  kg_per_bag: number | null;
  total_kg: number | null;
  unit_cost: number | null;
  total_cost: number | null;
  batch_code: string | null; // which batch, or "ALL"
  notes: string | null;
}
