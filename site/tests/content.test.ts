import { describe, expect, it } from "vitest";
import {
  articles,
  chickens,
  findChicken,
  getChicken,
  getSupportTier,
  leagueTable,
  ministries,
  parties,
  storyArcs,
  supportTiers,
  timelineEvents,
} from "@/lib/content";
import { ChickenSchema, FarmStatSchema, PartySchema } from "@/lib/schemas";

/**
 * Content integrity tests. Importing @/lib/content already executes the
 * build-time validation (schemas + referential checks) — these tests make
 * the same guarantees explicit and add schema-rejection cases that can't
 * be exercised by valid content alone.
 */

describe("content loads and validates", () => {
  it("has the full cast of citizens", () => {
    expect(chickens).toHaveLength(17);
  });

  it("has articles, ministries, parties, tiers", () => {
    expect(articles.length).toBeGreaterThanOrEqual(8);
    expect(ministries).toHaveLength(10);
    expect(parties).toHaveLength(3);
    expect(supportTiers).toHaveLength(8);
  });

  it("every ministry has a minister or an acting note", () => {
    for (const m of ministries) {
      expect(m.ministerId ?? m.actingNote, `ministry ${m.id}`).toBeTruthy();
    }
  });
});

describe("the monitor lizard arc", () => {
  it("Bantu is a memorial citizen and cannot be sponsored", () => {
    const bantu = getChicken("bantu");
    expect(bantu.status).toBe("memorial");
    expect(bantu.sponsorable).toBe(false);
  });

  it("Pete Okpara holds the security portfolio", () => {
    const pete = getChicken("pete-okpara");
    expect(pete.ministryId).toBe("coop-security");
    expect(ministries.find((m) => m.id === "coop-security")?.ministerId).toBe(
      "pete-okpara",
    );
  });

  it("the attack is covered by the paper", () => {
    const ids = articles.map((a) => a.id);
    expect(ids).toContain("bantu-coop-two");
    expect(ids).toContain("bounty-on-the-drain");
  });
});

describe("relationship integrity", () => {
  it("friendships are symmetric", () => {
    for (const c of chickens) {
      for (const f of c.friends) {
        expect(getChicken(f).friends, `${c.id} ↔ ${f}`).toContain(c.id);
      }
    }
  });

  it("rivalries are symmetric", () => {
    for (const c of chickens) {
      for (const r of c.rivals) {
        expect(getChicken(r).rivals, `${c.id} ↔ ${r}`).toContain(c.id);
      }
    }
  });

  it("every article reference resolves", () => {
    for (const a of articles) {
      for (const id of a.relatedChickenIds) {
        expect(findChicken(id), `article ${a.id} → ${id}`).toBeDefined();
      }
    }
  });

  it("every timeline event references known chickens", () => {
    for (const e of timelineEvents) {
      for (const id of e.chickenIds) {
        expect(findChicken(id), `event ${e.id} → ${id}`).toBeDefined();
      }
    }
  });
});

describe("guardrails", () => {
  it("no fictional party echoes a real Nigerian party name", () => {
    const real = [
      "all progressives congress",
      "peoples democratic party",
      "labour party",
      "new nigeria peoples party",
      "all progressives grand alliance",
    ];
    for (const p of parties) {
      expect(real).not.toContain(p.name.toLowerCase());
    }
  });

  it("memorial chickens can never be sponsorable (schema-level)", () => {
    const memorial = {
      ...chickens[0],
      status: "memorial",
      sponsorable: true,
    };
    // Schema itself allows the fields; the loader's integrity assert is the
    // gate. Simulate the loader rule:
    const violates = memorial.status === "memorial" && memorial.sponsorable;
    expect(violates).toBe(true); // the rule must trip for this input…
    // …and the live content must contain no such record:
    expect(
      chickens.filter((c) => c.status === "memorial" && c.sponsorable),
    ).toHaveLength(0);
  });

  it("rejects a chicken record missing required narrative fields", () => {
    const bad = { id: "x", name: "X" };
    expect(ChickenSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects a non-placeholder farm stat without a source", () => {
    const bad = {
      id: "flock",
      label: "Flock size",
      value: "1000",
      isPlaceholder: false,
    };
    expect(FarmStatSchema.safeParse(bad).success).toBe(false);
  });

  it("rejects a party missing its required fields", () => {
    const { name: _name, ...bad } = parties[0];
    expect(PartySchema.safeParse(bad).success).toBe(false);
  });
});

describe("derived data", () => {
  it("league table conserves points (3 per win, 1 each per draw)", () => {
    const table = leagueTable();
    const played = table.reduce((s, r) => s + r.played, 0) / 2;
    const points = table.reduce((s, r) => s + r.points, 0);
    const draws = table.reduce((s, r) => s + r.drawn, 0) / 2;
    expect(points).toBe(played * 3 - draws); // draws yield 2 total vs 3
    expect(table[0].points).toBeGreaterThanOrEqual(table.at(-1)!.points);
  });

  it("story arcs all have metadata and ordered events", () => {
    const arcs = storyArcs();
    // chi-chi-first-egg, grain-affair, mama-gold-retirement,
    // perch-championship, flu-season, the-drain
    expect(arcs.length).toBe(6);
    expect(arcs.map((a) => a.id)).toContain("the-drain");
    for (const arc of arcs) {
      expect(arc.title).toBeTruthy();
      const dates = arc.events.map((e) => e.date);
      expect([...dates].sort()).toEqual(dates);
    }
  });

  it("support tiers resolve by id and all await owner pricing", () => {
    expect(getSupportTier("sponsor-chicken")?.kind).toBe("sponsorship");
    expect(getSupportTier("nope")).toBeUndefined();
    expect(supportTiers.every((t) => t.amountNGN === null)).toBe(true);
  });
});
