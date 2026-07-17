"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Map2D } from "@/components/map/Map2D";
import { WORLD_LABEL, type EnrichedHotspot, type MapWorld } from "@/lib/mapData";

/**
 * Orchestrates the farm map experience.
 * - Starts on the lightweight 2D map (kind to slow connections).
 * - "Enter the 3D farm" lazy-loads the React Three Fiber chunk on demand —
 *   the 3D libraries are never downloaded unless the visitor asks for them.
 * - Detects WebGL; when unavailable, the 3D option is disabled and the 2D
 *   map carries the full experience.
 * - The DOM hotspot list is the accessible, keyboard-first interface shared
 *   by both renderers; the canvas itself is aria-hidden.
 */

const FarmMap3D = dynamic(() => import("@/components/map/FarmMap3D"), {
  ssr: false,
  loading: () => (
    <div
      className="flex w-full items-center justify-center rounded-2xl border border-kisi-green-900/15 bg-kisi-cream-200"
      style={{ aspectRatio: "5 / 4" }}
      role="status"
    >
      <p className="text-sm text-kisi-charcoal-600">
        Loading the 3D farm… (first visit only)
      </p>
    </div>
  ),
});

/* WebGL capability is an external, immutable fact about the device — read it
 * via useSyncExternalStore (server snapshot: null → "unknown"). */
let webglCache: boolean | null = null;
function detectWebgl(): boolean {
  if (webglCache === null) {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") ??
        canvas.getContext("webgl") ??
        canvas.getContext("experimental-webgl");
      webglCache = Boolean(gl);
    } catch {
      webglCache = false;
    }
  }
  return webglCache;
}
const subscribeNever = () => () => {};

const WORLD_BADGE_CLS: Record<MapWorld, string> = {
  fact: "bg-kisi-green-700 text-kisi-cream-100",
  fiction: "bg-kisi-gold-500 text-kisi-charcoal-900",
  mixed: "bg-kisi-indigo-800 text-kisi-cream-100",
  vision: "border border-kisi-gold-500 text-kisi-earth-700",
};

export function MapExperience({ hotspots }: { hotspots: EnrichedHotspot[] }) {
  const [mode, setMode] = useState<"2d" | "3d">("2d");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoveredName, setHoveredName] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();
  const webgl = useSyncExternalStore<boolean | null>(
    subscribeNever,
    detectWebgl,
    () => null,
  );

  const selected = useMemo(
    () => hotspots.find((h) => h.id === selectedId) ?? null,
    [hotspots, selectedId],
  );

  return (
    <div>
      {/* Mode controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div role="group" aria-label="Map mode" className="inline-flex rounded-full border border-kisi-green-900/20 bg-white p-1">
          <button
            type="button"
            onClick={() => setMode("2d")}
            aria-pressed={mode === "2d"}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold ${
              mode === "2d" ? "bg-kisi-green-700 text-kisi-cream-100" : "text-kisi-charcoal-900"
            }`}
          >
            2D map
          </button>
          <button
            type="button"
            onClick={() => setMode("3d")}
            disabled={webgl === false}
            aria-pressed={mode === "3d"}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40 ${
              mode === "3d" ? "bg-kisi-green-700 text-kisi-cream-100" : "text-kisi-charcoal-900"
            }`}
          >
            Enter the 3D farm
          </button>
        </div>
        {webgl === false && (
          <p className="text-sm text-kisi-charcoal-600">
            3D isn&apos;t available on this device/browser — the 2D map has
            everything.
          </p>
        )}
        {mode === "3d" && (
          <p className="text-sm text-kisi-charcoal-600" aria-hidden="true">
            Drag to look around · scroll or pinch to zoom · click a building
          </p>
        )}
      </div>

      {/* Map area + panel */}
      <div className="mt-4 grid gap-6 lg:grid-cols-[3fr_2fr]">
        <div className="relative">
          {mode === "3d" && webgl !== false ? (
            <div style={{ aspectRatio: "5 / 4" }} className="overflow-hidden rounded-2xl border border-kisi-green-900/15" aria-hidden="true">
              <FarmMap3D
                hotspots={hotspots}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onHover={setHoveredName}
              />
            </div>
          ) : (
            <Map2D hotspots={hotspots} selectedId={selectedId} onSelect={setSelectedId} />
          )}
          {/* hover tooltip (3D) */}
          {mode === "3d" && hoveredName && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-3 top-3 rounded-full bg-kisi-charcoal-900/90 px-3 py-1.5 text-sm font-semibold text-kisi-cream-100"
            >
              {hoveredName}
            </div>
          )}
        </div>

        {/* Detail panel */}
        <div aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.aside
                key={selected.id}
                initial={reducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, x: 24 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-kisi-gold-500/40 bg-white p-6 shadow-sm"
              >
                <span className={`kicker inline-flex rounded-full px-3 py-1 ${WORLD_BADGE_CLS[selected.world]}`}>
                  {WORLD_LABEL[selected.world]}
                </span>
                <h3 className="font-display mt-3 text-2xl font-bold text-kisi-green-900">
                  {selected.name}
                </h3>
                <p className="mt-2 text-sm text-kisi-charcoal-600">{selected.description}</p>
                {selected.realism && (
                  <p className="mt-3 rounded-lg bg-kisi-cream-200 px-4 py-3 text-xs text-kisi-charcoal-600">
                    <strong className="text-kisi-green-700">Real-farm note: </strong>
                    {selected.realism}
                  </p>
                )}
                {selected.residents.length > 0 && (
                  <div className="mt-4">
                    <p className="kicker text-kisi-charcoal-600">Often spotted here</p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {selected.residents.map((r) => (
                        <li key={r.id}>
                          <Link
                            href={`/flock/${r.id}`}
                            className="inline-flex items-center gap-1.5 rounded-full bg-kisi-cream-200 px-3 py-1 text-xs font-semibold hover:bg-kisi-gold-300/40"
                          >
                            <span
                              aria-hidden="true"
                              className="inline-block h-2.5 w-2.5 rounded-full"
                              style={{ backgroundColor: r.body }}
                            />
                            {r.name}
                            {r.nickname ? ` “${r.nickname}”` : ""}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-5 flex flex-wrap gap-2">
                  {selected.links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="rounded-full bg-kisi-green-700 px-4 py-2 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
                    >
                      {l.label} →
                    </Link>
                  ))}
                </div>
              </motion.aside>
            ) : (
              <motion.div
                key="empty"
                initial={false}
                animate={{ opacity: 1 }}
                className="flex h-full min-h-40 items-center justify-center rounded-2xl border border-dashed border-kisi-charcoal-600/30 p-6 text-center text-sm text-kisi-charcoal-600"
              >
                <p>
                  Select any location — on the map or from the list below — to
                  read its story and jump to the people involved.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Accessible hotspot index (keyboard-first, shared by both modes) */}
      <nav aria-label="All farm locations" className="mt-8">
        <h2 className="kicker text-kisi-charcoal-600">All locations</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {hotspots.map((h) => (
            <li key={h.id}>
              <button
                type="button"
                onClick={() => setSelectedId(h.id)}
                aria-pressed={selectedId === h.id}
                className={`w-full rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                  selectedId === h.id
                    ? "border-kisi-gold-500 bg-kisi-gold-300/20 font-semibold"
                    : "border-kisi-green-900/10 bg-white hover:bg-kisi-cream-200"
                }`}
              >
                {h.name}
                <span className="block text-xs font-normal text-kisi-charcoal-600">
                  {WORLD_LABEL[h.world]}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
