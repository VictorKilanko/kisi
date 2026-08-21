/**
 * Kisi Kids heroes: REAL, well-documented African figures, told simply and
 * truthfully (accuracy rule). Dates and achievements must be correct; when a
 * detail is uncertain, it is left out. Non-partisan and celebratory.
 */
export interface KidHero {
  slug: string;
  name: string;
  country: string;
  lived: string;
  /** The one big thing, child-simple. */
  knownFor: string;
  /** A few true, simple facts. */
  facts: string[];
  /** What a child can take away. */
  takeaway: string;
  /** Zizi's lead-in question. */
  question: string;
  /** Portrait colours for a simple emblem (leaf/tree tones for Wangari). */
  colors: { body: string; accent: string; bg: string };
}

export const heroes: KidHero[] = [
  {
    slug: "wangari-maathai",
    name: "Wangari Maathai",
    country: "Kenya",
    lived: "1940 to 2011",
    knownFor: "She helped people plant millions of trees to heal the land.",
    facts: [
      "Wangari Maathai grew up in Kenya and loved the land, the streams, and the trees.",
      "She started the Green Belt Movement, and women all across Kenya planted tens of millions of trees.",
      "In 2004 she became the first African woman to win the Nobel Peace Prize.",
      "She showed that caring for nature and caring for people go together.",
    ],
    takeaway: "One tree at a time, you can help the whole world.",
    question: "Uncle Dede, who planted all the trees?",
    colors: { body: "#2e7d46", accent: "#58b368", bg: "#eef6ec" },
  },
];

export const getHero = (slug: string) => heroes.find((h) => h.slug === slug);
