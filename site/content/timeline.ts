import type { TimelineEvent } from "@/lib/schemas";

/**
 * Timeline events across the Republic.
 * Events sharing an `arcId` form a story arc that can be read as a serial.
 * Launch arcs: chi-chi-first-egg · grain-affair · mama-gold-retirement ·
 * perch-championship · flu-season.
 */
export const timelineEvents: TimelineEvent[] = [
  // ARC: Chi-Chi's first egg
  {
    id: "chi-chi-arrival",
    chickenIds: ["chi-chi"],
    date: "2025-11-03",
    arcId: "chi-chi-first-egg",
    world: "fiction",
    type: "arrival",
    title: "A very small arrival",
    body:
      "Chi-Chi arrives at Kisi in a hatchery crate at three weeks old, " +
      "separated from her mother and smaller than the forecast allowed. " +
      "She spends her first week under the heat lamp, against a wing that " +
      "moved slightly left to make room.",
  },
  {
    id: "chi-chi-grace",
    chickenIds: ["chi-chi", "quiet-grace"],
    date: "2025-11-10",
    arcId: "chi-chi-first-egg",
    world: "fiction",
    type: "friendship",
    title: "Grace's side",
    body:
      "Quiet Grace, herself once the frail new arrival, becomes Chi-Chi's " +
      "unofficial guardian. The spot against her wing acquires a name, and " +
      "then, over the months, a queue.",
  },
  {
    id: "chi-chi-front-page",
    chickenIds: ["chi-chi"],
    date: "2026-03-08",
    arcId: "chi-chi-first-egg",
    world: "fiction",
    type: "custom",
    title: "'THE QUIET ONE LEARNS FAST'",
    body:
      "After months of careful watching, Chi-Chi performs the high perch, " +
      "the dust bath, and the fast trough line each correctly on the first " +
      "attempt. The Coop Times front page follows; so do two days behind " +
      "the water tank.",
  },
  {
    id: "chi-chi-egg",
    chickenIds: ["chi-chi", "adedoyin-mama-decree", "quiet-grace"],
    date: "2026-06-02",
    arcId: "chi-chi-first-egg",
    world: "fiction",
    type: "first-egg",
    title: "The first egg",
    body:
      "Certified within the hour; public holiday declared retroactively; " +
      "statement in full: 'I did my best.' Quiet Grace makes no comment, " +
      "magnificently.",
    articleId: "chi-chi-first-egg",
  },
  {
    id: "chi-chi-squad",
    chickenIds: ["chi-chi", "flash-adaora"],
    date: "2026-06-25",
    arcId: "chi-chi-first-egg",
    world: "fiction",
    type: "sports",
    title: "The secret everyone knows",
    body:
      "Chi-Chi quietly joins the Solar Queens' junior sprint squad at " +
      "Flash Adaora's invitation. She has told no one. The Republic is " +
      "politely pretending not to know.",
  },

  // ARC: The Missing Breakfast Grain
  {
    id: "grain-signout",
    chickenIds: ["bright-feather"],
    date: "2026-04-30",
    arcId: "grain-affair",
    world: "fiction",
    type: "controversy",
    title: "Two hundred grams sign out",
    body:
      "Premium cracked maize leaves the national store on ministry " +
      "authority. The return column of the feed ledger begins its long, " +
      "eloquent silence.",
  },
  {
    id: "grain-expose",
    chickenIds: ["kola-quill", "bright-feather"],
    date: "2026-05-11",
    arcId: "grain-affair",
    world: "fiction",
    type: "controversy",
    title: "'WHERE DID 200 GRAMS GO?'",
    body:
      "Kola Quill's investigation opens on the front page and stays there " +
      "for five issues. The ministry's response — 'insufficiently found' — " +
      "enters the national phrasebook immediately.",
    articleId: "missing-breakfast-grain",
  },
  {
    id: "grain-panel",
    chickenIds: ["bright-feather", "halima-iron-feathers"],
    date: "2026-05-19",
    arcId: "grain-affair",
    world: "fiction",
    type: "controversy",
    title: "The Panel of Inquiry sits",
    body:
      "Eight members, three sittings, one adjournment for the afternoon " +
      "feed. The opposition attends with pre-printed placards and a " +
      "weighing scale of its own.",
  },
  {
    id: "grain-found",
    chickenIds: ["bright-feather", "kola-quill"],
    date: "2026-05-28",
    arcId: "grain-affair",
    world: "fiction",
    type: "reconciliation",
    title: "Found, weighed, returned — with immediate effect",
    body:
      "The grain surfaces behind the minister's second filing perch, is " +
      "weighed twice at NGA insistence, and returns to the store. The " +
      "apology tour is announced; the editorial thanks the filing perch.",
    articleId: "grain-white-paper",
  },

  // ARC: Mama Gold's retirement
  {
    id: "gold-400",
    chickenIds: ["mama-gold"],
    date: "2026-03-15",
    arcId: "mama-gold-retirement",
    world: "fiction",
    type: "egg-milestone",
    title: "Egg No. 400",
    body:
      "A national ceremony under the mango tree for the 400th recorded " +
      "egg. Review, in full: 'The first one was harder.'",
  },
  {
    id: "gold-break",
    chickenIds: ["mama-gold"],
    date: "2026-04-30",
    arcId: "mama-gold-retirement",
    world: "fiction",
    type: "custom",
    title: "The delegation begins",
    body:
      "Mama Gold announces a well-earned laying break — 'I am not " +
      "retiring. I am delegating' — and increases her Sunday storytelling " +
      "schedule by popular demand.",
  },
  {
    id: "gold-law",
    chickenIds: ["mama-gold", "yeye-alaba", "baba-segun"],
    date: "2026-06-20",
    arcId: "mama-gold-retirement",
    world: "fiction",
    type: "custom",
    title: "Mama Gold's Law passes second reading",
    body:
      "Shade, trough priority, and freedom from sudden committee " +
      "membership for every retired layer. The gallery sings; the Speaker " +
      "conducts, eventually.",
    articleId: "senior-hen-act-second-reading",
  },

  // ARC: Perch Jumping Championship
  {
    id: "adaora-100m",
    chickenIds: ["flash-adaora", "tunde-quickfoot"],
    date: "2025-10-12",
    arcId: "perch-championship",
    world: "fiction",
    type: "sports",
    title: "The record falls",
    body:
      "Flash Adaora breaks Minister Quickfoot's two-season 100-metre " +
      "record. A Day of National Speed is declared; solitary dusk start " +
      "practice by the fence is officially denied.",
  },
  {
    id: "adaora-rain-final",
    chickenIds: ["flash-adaora"],
    date: "2026-06-14",
    arcId: "perch-championship",
    world: "fiction",
    type: "sports",
    title: "Rain stops play; Adaora doesn't",
    body:
      "The Perch Jumping Final's record height, cleared first attempt in " +
      "the rain. 'The perch is already wet. So am I.' The gatepost has " +
      "been engraved.",
    articleId: "perch-final-rain",
  },
  {
    id: "sprint-clinic",
    chickenIds: ["flash-adaora", "tunde-quickfoot"],
    date: "2026-06-21",
    arcId: "perch-championship",
    world: "fiction",
    type: "reconciliation",
    title: "The rivalry retires; the clinic begins",
    body:
      "Champion and minister launch a joint sprint clinic for chicks. The " +
      "rivalry is declared 'officially retired and unofficially eternal.'",
  },

  // ARC: Flu season (welfare-forward; dignified)
  {
    id: "flu-quarantine",
    chickenIds: ["dr-amara-featherwell"],
    date: "2026-01-08",
    arcId: "flu-season",
    world: "fiction",
    type: "health",
    title: "'Here is what we know'",
    body:
      "A respiratory bug reaches Coop Two. Dr. Featherwell quarantines " +
      "calmly, publishes facts daily, and answers every rumour with the " +
      "same five words. (On the real farm, biosecurity and vet care are " +
      "exactly this unglamorous and exactly this important.)",
  },
  {
    id: "flu-recovery",
    chickenIds: ["dr-amara-featherwell"],
    date: "2026-02-01",
    arcId: "flu-season",
    world: "fiction",
    type: "recovery",
    title: "The loudest ceremony; the absent guest of honour",
    body:
      "Coop Two returns to full health. The recovery ceremony is the " +
      "loudest event in national memory; the minister misses it, doing " +
      "rounds. Her bulletin that week: 'Resume normal life. Wash your feet.'",
  },
];
