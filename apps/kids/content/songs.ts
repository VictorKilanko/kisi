/**
 * Kisi Kids songs: lyrics now, audio later. Original songs are marked original;
 * traditional songs must note their origin (none here yet).
 */
export interface KidSong {
  slug: string;
  title: string;
  origin: "Original for Kisi Kids" | string;
  intro: string;
  /** Verses/chorus as lines; a repeated chorus is easiest to sing. */
  lines: string[];
  teaches: string;
}

export const songs: KidSong[] = [
  {
    slug: "good-morning-kisi",
    title: "Good Morning, Kisi",
    origin: "Original for Kisi Kids",
    intro: "Sing it with us to wake up the whole farm!",
    lines: [
      "Good morning sun, good morning sky,",
      "Good morning Dede walking by!",
      "One little egg, two little hens,",
      "Three tall trees where the morning bends,",
      "Four bright feathers, five friends say:",
      "Good morning, Kisi, hip hip hooray!",
      "",
      "(Chorus)",
      "Wake up, wake up, the sun is here,",
      "Good morning, Kisi, all the year!",
    ],
    teaches: "Counting to five, and a warm good morning.",
  },
];

export const getSong = (slug: string) => songs.find((s) => s.slug === slug);
