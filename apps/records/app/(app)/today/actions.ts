"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getMyFarm } from "@/lib/data";

export type SaveState = { ok: true; date: string } | { error: string } | null;

/** Parse a form value into a number, or null when blank. */
function n(v: FormDataEntryValue | null): number | null {
  const s = String(v ?? "").trim();
  if (s === "") return null;
  const x = Number(s.replace(/,/g, ""));
  return Number.isFinite(x) ? x : null;
}

function s(v: FormDataEntryValue | null): string | null {
  const t = String(v ?? "").trim();
  return t === "" ? null : t;
}

interface BatchMeta {
  id: string;
  code: string;
}

/**
 * Save (create or update) one day's record for the signed-in user's farm,
 * together with its per-batch lines. Idempotent on (farm, date).
 */
export async function saveDay(
  _prev: SaveState,
  formData: FormData,
): Promise<SaveState> {
  const farm = await getMyFarm();
  if (!farm) return { error: "You are not signed in to a farm." };

  const date = s(formData.get("record_date"));
  if (!date) return { error: "A date is required." };

  const supabase = await createClient();

  const record = {
    farm_id: farm.id,
    record_date: date,
    laying_birds: n(formData.get("laying_birds")),
    water_ok: formData.get("water_ok") === "on" ? true : false,
    mortality: n(formData.get("mortality")),
    mortality_cause: s(formData.get("mortality_cause")),
    sick: n(formData.get("sick")),
    treatment: s(formData.get("treatment")),
    vet_visit: formData.get("vet_visit") === "on" ? true : false,
    eggs_cracked: n(formData.get("eggs_cracked")),
    eggs_sold: n(formData.get("eggs_sold")),
    price_note: s(formData.get("price_note")),
    egg_revenue: n(formData.get("egg_revenue")),
    cash_received: n(formData.get("cash_received")),
    cash_at_hand: n(formData.get("cash_at_hand")),
    expenses: n(formData.get("expenses")),
    expense_detail: s(formData.get("expense_detail")),
    notes: s(formData.get("notes")),
    updated_at: new Date().toISOString(),
  };

  const { data: saved, error } = await supabase
    .from("daily_records")
    .upsert(record, { onConflict: "farm_id,record_date" })
    .select("id")
    .single();

  if (error || !saved) {
    return { error: error?.message ?? "Could not save the record." };
  }

  let meta: BatchMeta[] = [];
  try {
    meta = JSON.parse(String(formData.get("batch_meta") ?? "[]"));
  } catch {
    meta = [];
  }

  if (meta.length > 0) {
    const lines = meta.map((b) => ({
      daily_record_id: saved.id as string,
      farm_id: farm.id,
      batch_id: b.id,
      batch_code: b.code,
      birds: n(formData.get(`birds_${b.id}`)),
      age_weeks: n(formData.get(`age_${b.id}`)),
      eggs: n(formData.get(`eggs_${b.id}`)),
      feed_kg: n(formData.get(`feed_${b.id}`)),
    }));
    const { error: bErr } = await supabase
      .from("batch_daily")
      .upsert(lines, { onConflict: "daily_record_id,batch_id" });
    if (bErr) return { error: bErr.message };
  }

  revalidatePath("/today");
  revalidatePath("/records");
  return { ok: true, date };
}
