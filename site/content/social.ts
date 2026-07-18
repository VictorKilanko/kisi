import type { SocialEvent } from "@/lib/schemas";

/**
 * the Republic's social calendar. The tone borrows the
 * warmth of southwestern Nigerian social life — the owambe spirit, the
 * storytelling circle, the festival calendar — with original, fictional
 * events. All ceremonies are clearly fictional storytelling.
 */
export const socialEvents: SocialEvent[] = [
  {
    id: "feather-gala",
    date: "2026-07-26",
    title: "The Feather Gala",
    type: "festival",
    description:
      "The Republic's grandest evening — feather displays judged by Elder " +
      "Yeye Alaba, music directed by the Vice President, and 'brief " +
      "remarks' that are neither. Aso-ebi rules apply in spirit: this " +
      "year's colour is sunlight gold, and everyone somehow already knew.",
    attendeeIds: [
      "baba-segun",
      "yeye-alaba",
      "adedoyin-mama-decree",
      "bright-feather",
    ],
  },
  {
    id: "first-grain-festival",
    date: "2026-08-15",
    title: "The First Grain Festival",
    type: "festival",
    description:
      "The harvest-season thanksgiving, when the first sack of the new " +
      "grain is opened by the eldest citizen and tasted, by law and by " +
      "love, chicks first. Followed by the year's most relaxed queue.",
    attendeeIds: ["mama-gold", "yeye-alaba", "chi-chi"],
  },
  {
    id: "gold-hatchday",
    date: "2026-06-08",
    title: "Mama Gold's Hatch-Day",
    type: "hatch-day",
    description:
      "Officially 'a small gathering.' Actually the full Republic under " +
      "the mango tree, three rounds of the shade-tree song, and a " +
      "presidential proclamation read aloud twice, as is now traditional.",
    attendeeIds: ["mama-gold", "adedoyin-mama-decree", "yeye-alaba", "dr-amara-featherwell"],
  },
  {
    id: "sunday-storytelling",
    date: "2026-07-12",
    title: "Sunday Storytelling (weekly)",
    type: "storytelling",
    description:
      "Every Sunday, low branch, mango tree: Mama Gold tells the week's " +
      "history 'from the time before the water tank,' with corrections " +
      "from Yèyé Àlàbá and heckling from nobody, twice.",
    attendeeIds: ["mama-gold", "yeye-alaba", "chi-chi", "quiet-grace"],
  },
  {
    id: "reconciliation-bench-day",
    date: "2026-07-05",
    title: "Open Day at the Reconciliation Bench",
    type: "community",
    description:
      "The Ministry of Social Affairs' proudest institution: quarrelling " +
      "parties share one handful of grain in the designated shade until " +
      "the quarrel gets bored and leaves. Walk-ins welcome.",
    attendeeIds: ["yeye-alaba"],
  },
  {
    id: "sprint-clinic-open",
    date: "2026-06-21",
    title: "Joint Sprint Clinic — Open Session",
    type: "club",
    description:
      "Champion and minister, side by side, teaching starts to chicks. " +
      "Free. Loud. Muddy. The unofficial motto is borrowed from a certain " +
      "first-time layer: 'I did my best.'",
    attendeeIds: ["flash-adaora", "tunde-quickfoot", "chi-chi"],
  },
];
