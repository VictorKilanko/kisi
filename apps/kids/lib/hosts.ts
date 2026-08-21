import { getChicken, mascot, type Chicken } from "@kisi/canon";

/**
 * The two Kisi Kids hosts. Zizi is a real canon citizen (id "zizi"), so her
 * portrait is her own everywhere. Dede is the canon mascot; we render him with a
 * ChickenPortrait-shaped object using his mark colours so the two hosts look
 * like a pair. Name/pronunciation come from the canon mascot record.
 */
export const zizi = getChicken("zizi");

export const dedeName = mascot.name;
export const dedePronunciation = mascot.pronunciation;

/** A minimal Chicken-shaped object so ChickenPortrait can draw Dede as a rooster. */
export const dede = {
  id: "dede",
  name: mascot.name,
  sex: "rooster",
  roleTitle: "Your host",
  colors: { body: "#c9752e", comb: "#b3261e", accent: "#d9a02b", bg: "#faf5e9" },
} as unknown as Chicken;
