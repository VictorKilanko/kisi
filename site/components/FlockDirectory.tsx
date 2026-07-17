"use client";

import { useMemo, useState } from "react";
import { ChickenCard } from "@/components/Cards";
import type { Chicken } from "@/lib/schemas";

const BRANCH_LABELS: Record<string, string> = {
  all: "All roles",
  presidency: "The Presidency",
  cabinet: "Cabinet",
  assembly: "Coop Assembly",
  judiciary: "Judiciary",
  opposition: "Opposition",
  press: "Press",
  none: "Private citizens",
};

const LAYING_LABELS: Record<string, string> = {
  all: "Any laying status",
  "not-yet": "Not yet laying",
  laying: "Laying",
  break: "On a laying break",
  retired: "Retired from laying",
  "n-a": "Not applicable (roosters)",
};

const STATUS_LABELS: Record<string, string> = {
  all: "Any status",
  active: "Active",
  recovering: "Recovering",
  retired: "Retired",
  memorial: "Memorial",
};

export function FlockDirectory({ chickens }: { chickens: Chicken[] }) {
  const [query, setQuery] = useState("");
  const [sex, setSex] = useState("all");
  const [branch, setBranch] = useState("all");
  const [laying, setLaying] = useState("all");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return chickens.filter((c) => {
      if (sex !== "all" && c.sex !== sex) return false;
      if (branch !== "all" && c.branch !== branch) return false;
      if (laying !== "all" && c.layingStatus !== laying) return false;
      if (status !== "all" && c.status !== status) return false;
      if (q) {
        const hay = [
          c.name,
          c.fullName ?? "",
          c.nickname ?? "",
          c.roleTitle ?? "",
          ...c.personality,
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [chickens, query, sex, branch, laying, status]);

  const selectCls =
    "rounded-lg border border-kisi-green-900/20 bg-white px-3 py-2 text-sm";

  return (
    <div>
      <form
        role="search"
        aria-label="Search and filter the flock"
        className="mb-8 grid gap-3 rounded-2xl border border-kisi-green-900/10 bg-kisi-cream-200 p-4 sm:grid-cols-2 lg:grid-cols-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="sm:col-span-2 lg:col-span-1">
          <span className="sr-only">Search by name, role, or personality</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the Republic…"
            className="w-full rounded-lg border border-kisi-green-900/20 bg-white px-3 py-2 text-sm"
          />
        </label>
        <label>
          <span className="sr-only">Filter by sex</span>
          <select value={sex} onChange={(e) => setSex(e.target.value)} className={selectCls}>
            <option value="all">Hens & roosters</option>
            <option value="hen">Hens</option>
            <option value="rooster">Roosters</option>
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by government role</span>
          <select value={branch} onChange={(e) => setBranch(e.target.value)} className={selectCls}>
            {Object.entries(BRANCH_LABELS).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by laying status</span>
          <select value={laying} onChange={(e) => setLaying(e.target.value)} className={selectCls}>
            {Object.entries(LAYING_LABELS).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span className="sr-only">Filter by life status</span>
          <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectCls}>
            {Object.entries(STATUS_LABELS).map(([v, l]) => (
              <option key={v} value={v}>
                {l}
              </option>
            ))}
          </select>
        </label>
      </form>

      <p aria-live="polite" className="mb-4 text-sm text-kisi-charcoal-600">
        {filtered.length === chickens.length
          ? `All ${chickens.length} citizens`
          : `${filtered.length} of ${chickens.length} citizens`}
      </p>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-kisi-charcoal-600/40 p-10 text-center text-kisi-charcoal-600">
          <p className="font-display text-lg font-bold">
            No citizen matches that search.
          </p>
          <p className="mt-1 text-sm">
            The Bureau of Egg Statistics suggests fewer filters. The Bureau is
            rarely wrong.
          </p>
        </div>
      ) : (
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c) => (
            <li key={c.id}>
              <ChickenCard chicken={c} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
