import type { Metadata } from "next";
import { MapExperience } from "@/components/map/MapExperience";
import { getChicken } from "@/lib/content";
import { MAP_HOTSPOTS, type EnrichedHotspot } from "@/lib/mapData";

export const metadata: Metadata = {
  title: "The Farm Map — Explore the Republic",
  description:
    "Walk the Republic of Kisi: an interactive 3D farm map (with a " +
    "lightweight 2D version) linking every coop, ministry, and story to " +
    "the citizens who live there.",
};

export default function MapPage() {
  // Enrich hotspots server-side from the content system. getChicken throws
  // on unknown ids, so a bad resident reference fails the build, not the
  // visitor. The client receives plain serializable data only.
  const hotspots: EnrichedHotspot[] = MAP_HOTSPOTS.map((h) => ({
    ...h,
    residents: h.residentIds.map((id) => {
      const c = getChicken(id);
      return {
        id: c.id,
        name: c.name,
        nickname: c.nickname,
        body: c.colors.body,
        comb: c.colors.comb,
      };
    }),
  }));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        The Farm Map
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        One map, two worlds: the real farm&apos;s working parts (labeled{" "}
        <strong>farm fact</strong>) and the Republic&apos;s institutions
        (labeled <strong>Republic fiction</strong>) share the same ground —
        because they do. Explore in 3D, or use the fast 2D plan; both know
        all the same stories.
      </p>
      <p className="mt-2 max-w-2xl text-sm text-kisi-charcoal-600">
        The layout is a stylized impression drawn from good hot-climate
        poultry practice (shade, ventilation, drainage, quarantine
        separation) — not a security plan of the real farm.
      </p>

      <div className="mt-8">
        <MapExperience hotspots={hotspots} />
      </div>

    </div>
  );
}
