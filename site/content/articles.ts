import type { Article } from "@/lib/schemas";

/**
 * SAMPLE CONTENT — demonstration issues of The Coop Times.
 * All stories are fictional satire about the chickens of the Republic of
 * Kisi, except items in the "farm-announcement" category, which speak for
 * the real farm and say so.
 */
export const articles: Article[] = [
  {
    id: "chi-chi-first-egg",
    headline: "CHI-CHI LAYS FIRST EGG; REPUBLIC DECLARES PUBLIC HOLIDAY",
    standfirst:
      "The nation's most-followed pullet delivers at last — and delivers a " +
      "four-word address that instantly enters the national vocabulary.",
    category: "society",
    world: "fiction",
    publishedAt: "2026-06-02",
    author: { name: "Kọ́lápọ̀ Ọ̀nàbánjọ", title: "Chief Correspondent" },
    body: [
      "The Republic of Kisi woke on Tuesday to the news it had been " +
        "refreshing the nesting boxes for: Chidinma 'Chi-Chi' Obiageli, the " +
        "quiet pullet who arrived at three weeks old with no mother and no " +
        "expectations, has laid her first egg.",
      "The egg — described by the Ministry of Egg Affairs as 'well-formed, " +
        "correctly deposited, and frankly moving' — was certified within the " +
        "hour. President Adédoyin, attending in person, ordered flags to " +
        "the top of the perch and declared a public holiday 'effective " +
        "immediately, and retroactively, so that no one is marked absent.'",
      "Chi-Chi herself, located behind the water tank by this newspaper, " +
        "gave a complete statement of four words: 'I did my best.' The " +
        "Assembly adjourned early. Several senior hens were observed " +
        "pretending they had dust in their eyes.",
      "Quiet Grace, the rescue hen who sheltered Chi-Chi through her first " +
        "week at Kisi, made no comment, in the way that only she can make " +
        "no comment.",
      "DISCLAIMER: The Republic of Kisi is a fictional storytelling world. " +
        "Chi-Chi is a demonstration character; this milestone is sample " +
        "content awaiting the real flock's real stories.",
    ],
    relatedChickenIds: ["chi-chi", "adedoyin-mama-decree", "quiet-grace"],
    relatedMinistryIds: ["egg-affairs"],
    isDemo: true,
  },
  {
    id: "missing-breakfast-grain",
    headline: "EXCLUSIVE: WHERE DID 200 GRAMS GO?",
    standfirst:
      "Premium cracked maize signed out of the national store to the office " +
      "of the Minister of Egg Affairs has not been signed back in. The " +
      "Coop Times begins asking the only question that matters.",
    category: "investigation",
    world: "fiction",
    publishedAt: "2026-05-11",
    author: { name: "Kọ́lápọ̀ Ọ̀nàbánjọ", title: "Chief Correspondent" },
    body: [
      "Documents pecked into the margin of the national feed ledger, and " +
        "reviewed exclusively by The Coop Times, show that 200 grams of " +
        "premium cracked maize — breakfast grade, dry-season reserve — left " +
        "the national store on the authority of the Ministry of Egg Affairs " +
        "eleven days ago. The return column is blank. It has stayed blank " +
        "through two audits, one denial, and a ministry statement that the " +
        "grain was 'not missing, merely insufficiently found.'",
      "Minister Ọlánrewájú 'Bright Feather' Adéwálé, immaculate as ever, " +
        "told reporters the matter was 'receiving the fullest attention at " +
        "the highest levels,' before departing for a previously unannounced " +
        "inspection of somewhere else.",
      "Opposition leader Halima 'Iron Feathers' Danbaki, reached at her " +
        "counting post, said the New Grain Alliance had 'anticipated this " +
        "day, prepared for this day, and pre-printed the placards.' The " +
        "presidency, for its part, notes that breakfast itself was served " +
        "on time, 'which is the main thing.'",
      "This newspaper does not allege wrongdoing. This newspaper alleges " +
        "arithmetic. The ledger has two columns, and one of them is empty.",
      "DISCLAIMER: Fictional satire. The Republic of Kisi, its ministers, " +
        "and its missing grain are invented characters and events at a real " +
        "poultry farm's storytelling world.",
    ],
    relatedChickenIds: ["bright-feather", "kola-quill", "halima-iron-feathers"],
    relatedMinistryIds: ["egg-affairs", "feed-agriculture"],
    isDemo: true,
  },
  {
    id: "grain-white-paper",
    headline:
      "PANEL SUBMITS WHITE PAPER; GRAIN RETURNED 'WITH IMMEDIATE EFFECT'",
    standfirst:
      "Found: behind the minister's second filing perch, 'where it had been " +
      "placed for safekeeping.' The apology tour begins Monday.",
    category: "politics",
    world: "fiction",
    publishedAt: "2026-05-28",
    author: { name: "Kọ́lápọ̀ Ọ̀nàbánjọ", title: "Chief Correspondent" },
    body: [
      "The Panel of Inquiry into the Missing Breakfast Grain — eight " +
        "members, three sittings, one adjournment for the afternoon feed — " +
        "has submitted its white paper, and the Republic's longest-running " +
        "mystery has ended where these mysteries so often end: behind the " +
        "furniture.",
      "The 200 grams of premium cracked maize were located intact behind " +
        "the Minister of Egg Affairs' second filing perch, 'where they had " +
        "been placed for safekeeping,' per the white paper, 'by a party or " +
        "parties acting from an abundance of caution.' The grain has been " +
        "returned to the national store with immediate effect, weighed " +
        "twice at the insistence of the New Grain Alliance, and found not " +
        "merely complete but — owing to settling — arguably improved.",
      "Minister Adéwálé will undertake a national apology tour beginning " +
        "Monday, with stops at all four coops and, 'schedule permitting,' " +
        "the mango tree. Asked whether he would resign, the minister said " +
        "he preferred 'to remain and rebuild trust, which is also less " +
        "work for everyone than a reshuffle.'",
      "Our editorial position appears on the back page in its entirety: " +
        "'We thank the filing perch for its cooperation.'",
      "DISCLAIMER: Fictional satire; sample content of the Republic of " +
        "Kisi storytelling world.",
    ],
    relatedChickenIds: ["bright-feather", "kola-quill", "halima-iron-feathers"],
    relatedMinistryIds: ["egg-affairs"],
    isDemo: true,
  },
  {
    id: "senior-hen-act-second-reading",
    headline: "MAMA GOLD'S LAW PASSES SECOND READING AMID SINGING",
    standfirst:
      "The Senior Hen Retirement Protection Act clears its second reading " +
      "as the public gallery abandons procedure for song.",
    category: "politics",
    world: "fiction",
    publishedAt: "2026-06-20",
    author: { name: "Assembly Desk", title: "The Coop Times" },
    body: [
      "The Coop Assembly on Thursday passed the second reading of the " +
        "Senior Hen Retirement Protection Act — known to every citizen as " +
        "Mama Gold's Law — guaranteeing retired layers shade, priority at " +
        "the trough, and freedom from sudden committee membership.",
      "Debate was brief, which is unusual, and unanimous, which is " +
        "unprecedented. The Leader of the Opposition rose to oppose 'on " +
        "principle, the principle being that we oppose,' reviewed the " +
        "bill's arithmetic, found it correct, and sat down again, visibly " +
        "annoyed at having nothing to add.",
      "Proceedings were then suspended when the public gallery — led, " +
        "witnesses insist, by the Vice President, who denies it while " +
        "beaming — began the old shade-tree song. The Speaker ruled the " +
        "singing out of order, was ignored, and was later observed " +
        "conducting.",
      "Mama Gold, the law's namesake, followed events from the low branch " +
        "of the mango tree. Her statement: 'The first reading was harder.'",
      "DISCLAIMER: Fictional satire; sample content of the Republic of " +
        "Kisi storytelling world.",
    ],
    relatedChickenIds: ["mama-gold", "halima-iron-feathers", "baba-segun"],
    relatedMinistryIds: ["social-affairs"],
    isDemo: true,
  },
  {
    id: "perch-final-rain",
    headline: "RAIN STOPS PLAY; ADAORA DOESN'T",
    standfirst:
      "The Perch Jumping Final produces the Republic's new signature " +
      "sporting moment — and a soaked, roaring, entirely satisfied nation.",
    category: "sports",
    world: "fiction",
    publishedAt: "2026-06-14",
    author: { name: "Sports Desk", title: "The Coop Times" },
    body: [
      "With the bar at a record height and the wet season announcing " +
        "itself all at once, officials suspended Saturday's Perch Jumping " +
        "Final and the Republic crowded under the eaves to wait. Everyone " +
        "except the defending champion.",
      "Offered a postponement to Tuesday, Flash Adaora of the Solar Queens " +
        "looked at the sky, then at the bar, and produced the sentence now " +
        "pecked into the sports field gatepost: 'The perch is already wet. " +
        "So am I.'",
      "She cleared the record height on her first attempt. The roar, " +
        "measured by the Bureau of Egg Statistics on equipment normally " +
        "reserved for the Vice President, was heard at the farmhouse.",
      "Minister of Sports Túndé 'Quickfoot' Balógun, whose own 100-metre " +
        "record fell to Adaora last season, declared a Day of National " +
        "Speed and congratulated the champion 'on behalf of the government, " +
        "the league, and, reluctantly, myself.' The pair's joint sprint " +
        "clinic for chicks resumes this Saturday, weather ignored.",
      "DISCLAIMER: Fictional satire; sample content of the Republic of " +
        "Kisi storytelling world.",
    ],
    relatedChickenIds: ["flash-adaora", "tunde-quickfoot"],
    relatedMinistryIds: ["sports"],
    isDemo: true,
  },
  {
    id: "punctual-breakfast-address",
    headline: "'A NATION THAT EATS LATE, LAYS LATE' — THE PRESIDENT'S ADDRESS",
    standfirst:
      "On the anniversary of Executive Order No. 1, President Adédoyin " +
      "restates the doctrine that built her career, her government, and " +
      "her nickname.",
    category: "politics",
    world: "fiction",
    publishedAt: "2026-05-02",
    author: { name: "Presidency Desk", title: "The Coop Times" },
    body: [
      "Standing at the trough-side podium at precisely 6:58 a.m. — 'two " +
        "minutes early, because leadership' — President Adédoyin 'Mama " +
        "Decree' Ọlásunkànmí marked the anniversary of Executive Order " +
        "No. 1 with an address the presidency had billed as 'brief' and " +
        "the Vice President had asked to extend.",
      "'I did not come from a big nest,' the President told the assembled " +
        "Republic. 'I came from a straight queue. And I say to every chick " +
        "listening from under the heat lamp: the queue does not care whose " +
        "egg you hatched from. It cares where you are standing at seven.'",
      "The address touched on the National Feed Budget ('generous, because " +
        "morale is infrastructure'), the solar-light consultations ('the " +
        "sun and the Speaker will be reconciled'), and the opposition's " +
        "monthly recount demand, which the President said she had come to " +
        "regard 'as a form of national exercise.'",
      "Breakfast was served at 7:00 exactly. The opposition confirmed the " +
        "time independently.",
      "DISCLAIMER: Fictional satire; sample content of the Republic of " +
        "Kisi storytelling world.",
    ],
    relatedChickenIds: ["adedoyin-mama-decree", "halima-iron-feathers", "baba-segun"],
    relatedMinistryIds: ["feed-agriculture", "energy-solar"],
    isDemo: true,
  },
  {
    id: "three-minutes-quiet-grace",
    headline: "THREE MINUTES WITH QUIET GRACE",
    standfirst:
      "After two seasons of polite requests, the Republic's most private " +
      "citizen grants The Coop Times an exclusive interview. She says " +
      "nothing. It is more than enough.",
    category: "interview",
    world: "fiction",
    publishedAt: "2026-04-18",
    author: { name: "Kọ́lápọ̀ Ọ̀nàbánjọ", title: "Chief Correspondent" },
    body: [
      "The interview took place in the shade on the east side of Coop One, " +
        "at the spot the chicks call Grace's side. Conditions: warm, with a " +
        "light breeze. Present: this correspondent, one shared handful of " +
        "grain, and Oyíndàmọ́là, known to the nation as Quiet Grace.",
      "Minute one. She examined the grain, took a little, and moved the " +
        "rest toward me with one foot. Somewhere behind the coop the " +
        "junior sprint squad argued about lane assignments. She listened " +
        "the way other birds speak.",
      "Minute two. A very small chick — new this week, still uncertain on " +
        "its legs — emerged from behind the water tank, considered the " +
        "wide dangerous world, and settled against her wing without " +
        "asking. She adjusted the wing. This is, I understand now, the " +
        "entire interview.",
      "Minute three. The breeze moved the mango leaves. She watched me " +
        "pack up my questions, all of them unasked, and inclined her head " +
        "once — a courtesy, or a verdict. I have covered four governments. " +
        "I have never left an interview better informed.",
      "DISCLAIMER: Fictional satire; sample content of the Republic of " +
        "Kisi storytelling world.",
    ],
    relatedChickenIds: ["quiet-grace", "kola-quill", "chi-chi"],
    relatedMinistryIds: [],
    isDemo: true,
  },
  {
    id: "farm-note-what-is-real",
    headline: "A note from Kisi: what's real here, and what's story",
    standfirst:
      "From the real farm behind the Republic — how to read this website.",
    category: "farm-announcement",
    world: "fact",
    publishedAt: "2026-07-01",
    author: { name: "Kisi Farm", title: "The team" },
    body: [
      "Kisi is a real poultry farm in southwestern Nigeria. Our chickens, " +
        "their care, their feed, their housing, and the eggs they lay are " +
        "real, and the farming information on our fact-labeled pages is " +
        "meant to be accurate and honest. Where we don't yet have a " +
        "verified number or photo on this new website, you'll see a clear " +
        "placeholder instead of a made-up figure.",
      "The Republic of Kisi — the president, the ministries, the " +
        "newspaper, the sports league, and the political drama — is " +
        "fiction: an affectionate, satirical storytelling world we built " +
        "so you can get to know our birds as the individuals they are. " +
        "Fiction pages are marked with a gold Republic badge and a " +
        "disclaimer like this one.",
      "The characters currently on the site are demonstration characters, " +
        "clearly labeled as sample content. As we photograph and record " +
        "our real flock, the real birds will take over the Republic — " +
        "their real milestones, their real personalities, their real " +
        "stories. That's the whole point: every chicken has one.",
      "Nothing in our satire refers to any real person, living or " +
        "feathered elsewhere. Any resemblance is coincidental.",
    ],
    relatedChickenIds: [],
    relatedMinistryIds: [],
    isDemo: true,
  },
];
