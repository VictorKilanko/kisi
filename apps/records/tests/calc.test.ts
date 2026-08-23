import { describe, it, expect } from "vitest";
import {
  totalBirds,
  totalEggs,
  totalFeedKg,
  productionRate,
  eggsUnsold,
  receivable,
  naira,
  percent,
} from "@/lib/calc";
import type { BatchDaily, DailyRecord } from "@/lib/types";

const batches: BatchDaily[] = [
  { farm_id: "f", batch_id: "1", batch_code: "B-001", birds: 133, age_weeks: 80, eggs: 110, feed_kg: 15 },
  { farm_id: "f", batch_id: "2", batch_code: "B-002", birds: 60, age_weeks: 22, eggs: 34, feed_kg: 7 },
  { farm_id: "f", batch_id: "3", batch_code: "B-003", birds: 58, age_weeks: 20, eggs: 36, feed_kg: 5.44 },
  { farm_id: "f", batch_id: "4", batch_code: "B-004", birds: 100, age_weeks: 14, eggs: 0, feed_kg: 6 },
];

function record(over: Partial<DailyRecord> = {}): DailyRecord {
  return {
    farm_id: "f",
    record_date: "2026-09-01",
    laying_birds: 251,
    water_ok: true,
    mortality: 0,
    mortality_cause: null,
    sick: 0,
    treatment: null,
    vet_visit: false,
    eggs_cracked: 2,
    eggs_sold: 150,
    price_note: null,
    egg_revenue: 22500,
    cash_received: 18000,
    cash_at_hand: 0,
    expenses: 0,
    expense_detail: null,
    notes: null,
    ...over,
  };
}

describe("flock + egg + feed totals", () => {
  it("sums bird counts across batches", () => {
    expect(totalBirds(batches)).toBe(351);
  });
  it("sums good eggs across batches", () => {
    expect(totalEggs(batches)).toBe(180);
  });
  it("sums feed kg across batches", () => {
    expect(totalFeedKg(batches)).toBeCloseTo(33.44, 2);
  });
  it("ignores null/undefined values", () => {
    expect(totalEggs([{ farm_id: "f", batch_id: "x", batch_code: "B", birds: null, age_weeks: null, eggs: null, feed_kg: null }])).toBe(0);
  });
});

describe("production rate", () => {
  it("computes eggs / laying birds", () => {
    expect(productionRate(180, 251)).toBeCloseTo(0.717, 3);
  });
  it("returns null when there are no laying birds (no divide-by-zero)", () => {
    expect(productionRate(180, 0)).toBeNull();
    expect(productionRate(180, null)).toBeNull();
  });
});

describe("eggs unsold + receivable", () => {
  it("unsold = good eggs − cracked − sold, floored at 0", () => {
    expect(eggsUnsold(record(), 180)).toBe(28); // 180 - 2 - 150
    expect(eggsUnsold(record({ eggs_sold: 500 }), 180)).toBe(0);
  });
  it("receivable = revenue − cash received", () => {
    expect(receivable(record())).toBe(4500);
  });
});

describe("formatting", () => {
  it("formats naira", () => {
    expect(naira(495000)).toBe("₦495,000");
  });
  it("formats percent and handles null", () => {
    expect(percent(0.727)).toBe("73%");
    expect(percent(null)).toBe("—");
  });
});
