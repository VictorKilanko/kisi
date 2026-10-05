"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
/** Only enhance to video on tablet/desktop; phones keep the lighter photo. */
const WIDE = "(min-width: 768px)";

type NetworkInfo = {
  saveData?: boolean;
  effectiveType?: string;
  addEventListener?: (type: "change", cb: () => void) => void;
  removeEventListener?: (type: "change", cb: () => void) => void;
};

function getConnection(): NetworkInfo | undefined {
  return (navigator as Navigator & { connection?: NetworkInfo }).connection;
}

/**
 * Whether to load the background video. False on the server, and on the client
 * false when any of these hold, so we never spend a ~2MB download where it
 * isn't wanted or affordable:
 *   - the visitor asked for reduced motion
 *   - the viewport is phone-sized (most of our Nigerian traffic, on metered
 *     data; the still photo is plenty there)
 *   - the browser reports Save-Data or a 2G connection
 *
 * useSyncExternalStore (rather than useEffect + setState) keeps this correct
 * for SSR/hydration and re-evaluates if the viewport or connection changes.
 */
function computeWantsVideo(): boolean {
  if (window.matchMedia(REDUCED_MOTION).matches) return false;
  if (!window.matchMedia(WIDE).matches) return false;
  const c = getConnection();
  if (c?.saveData) return false;
  if (c?.effectiveType === "2g" || c?.effectiveType === "slow-2g") return false;
  return true;
}

function useWantsVideo(): boolean {
  return useSyncExternalStore(
    (onChange) => {
      const motion = window.matchMedia(REDUCED_MOTION);
      const wide = window.matchMedia(WIDE);
      motion.addEventListener("change", onChange);
      wide.addEventListener("change", onChange);
      const c = getConnection();
      c?.addEventListener?.("change", onChange);
      return () => {
        motion.removeEventListener("change", onChange);
        wide.removeEventListener("change", onChange);
        c?.removeEventListener?.("change", onChange);
      };
    },
    computeWantsVideo,
    () => false,
  );
}

/**
 * Home hero background: a still photo that paints immediately (and stays the
 * LCP element and the fallback), with a muted, looping farm video that fades in
 * on top once it can play, on devices where it's wanted and affordable.
 *
 * The <Image> renders server-side and is the first paint, so slow connections,
 * phones, reduced-motion users and any video failure all get a good hero with
 * no layout shift. The video is muted + playsInline (required for autoplay) and
 * aria-hidden (decorative, the photo carries the alt text). The source file
 * also has no audio track.
 */
export function HeroMedia() {
  const wantsVideo = useWantsVideo();
  const [ready, setReady] = useState(false);

  return (
    <>
      <Image
        src="/photos/poultry-house-1.jpg"
        alt="Inside a poultry house at Kisi Farm: birds on fresh wood-shaving litter with feeders and drinkers"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {wantsVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          onCanPlay={() => setReady(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/video/farm-hero.mp4" type="video/mp4" />
        </video>
      ) : null}
    </>
  );
}
