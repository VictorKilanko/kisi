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
      "for five issues. The ministry's response, 'insufficiently found', " +
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
    title: "Found, weighed, returned, with immediate effect",
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
      "Mama Gold announces a well-earned laying break, 'I am not " +
      "retiring. I am delegating', and increases her Sunday storytelling " +
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

  /* ------------------------------------------------ the monitor lizard */
  {
    id: "lizard-first-sighting",
    chickenIds: ["sergeant-danladi"],
    date: "2026-06-22",
    arcId: "the-drain",
    world: "fiction",
    type: "custom",
    title: "Something in the drainage channel",
    body:
      "Second shift reports a track in the soft ground by the east fence: " +
      "clawmarks with a drag between them. It is driven off twice more " +
      "over the following fortnight. Nobody yet calls it anything.",
  },
  {
    id: "lizard-attack",
    chickenIds: ["bantu", "sergeant-danladi", "pete-okpara", "small-femi"],
    date: "2026-07-09",
    arcId: "the-drain",
    world: "fiction",
    type: "custom",
    title: "The night of Coop Two",
    body:
      "The grate moves shortly after midnight. Bantu gives the alarm and " +
      "holds the doorway while twelve chicks go out the far side. Every " +
      "one of them gets out. Danladi reaches him in under a minute.",
    articleId: "bantu-coop-two",
  },
  {
    id: "lizard-burial",
    chickenIds: ["bantu", "sisi-ngozi", "mama-gold", "yeye-alaba"],
    date: "2026-07-11",
    arcId: "the-drain",
    world: "fiction",
    type: "social",
    title: "Under the mango tree, without debate",
    body:
      "The Assembly votes his resting place without a single speech against" +
      ", the only such vote in the Republic's history. Sisi Ngozi organises " +
      "it in an afternoon. The dusk whistle begins that evening.",
  },
  {
    id: "okpara-appointed",
    chickenIds: ["pete-okpara", "adedoyin-mama-decree"],
    date: "2026-07-13",
    arcId: "the-drain",
    world: "fiction",
    type: "appointment",
    title: "A two-sentence acceptance speech",
    body:
      "Pete Okpara is sworn in as Minister of Security. 'I know what the " +
      "job is. Ask me again in a year.' He institutes the Bantu Protocol " +
      "the same night: every bird counted aloud, by name.",
  },
  {
    id: "the-bounty",
    chickenIds: ["pete-okpara", "halima-iron-feathers"],
    date: "2026-07-15",
    arcId: "the-drain",
    world: "fiction",
    type: "custom",
    title: "500,000 grains",
    body:
      "The Assembly posts a standing bounty for information leading to the " +
      "lizard's capture. Unanimous; seconded by the Leader of the " +
      "Opposition, who declines to demand a recount.",
    articleId: "bounty-on-the-drain",
  },
  // ARC: The Full Cabinet
  {
    id: "cabinet-announced",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-07-20",
    arcId: "the-full-cabinet",
    world: "fiction",
    type: "custom",
    title: "Six empty chairs",
    body:
      "The President announces that every acting arrangement ends this week: " +
      "six vacant ministries, six substantive appointments, and no more " +
      "chairs kept warm by the Presidency. The Opposition welcomes it and " +
      "promises to audit all six budgets by Friday.",
  },
  {
    id: "cabinet-feed-water",
    chickenIds: ["musa-grainkeeper", "emeka-drainmaster", "adedoyin-mama-decree"],
    date: "2026-07-21",
    arcId: "the-full-cabinet",
    world: "fiction",
    type: "appointment",
    title: "Grain and water",
    body:
      "Musa the Grainkeeper takes Feed and Agriculture; Emeka the Drain " +
      "Marshal takes Water and Environment. Two Noiler infrastructure hands " +
      "who already ran the store and the drains, now with the titles to " +
      "match. Musa's first act: an inspection of the store, by smell.",
  },
  {
    id: "cabinet-energy-culture",
    chickenIds: ["amina-daybreak", "sade-griot"],
    date: "2026-07-22",
    arcId: "the-full-cabinet",
    world: "fiction",
    type: "appointment",
    title: "Sunrise and song",
    body:
      "Amina Daybreak takes Energy and Solar; Sadé the Griot takes Culture " +
      "and Entertainment. The swearing-in runs late because the new Culture " +
      "Minister set the oath to music and the Assembly asked for a second " +
      "verse.",
  },
  {
    id: "cabinet-youth-social",
    chickenIds: ["tade-foraging", "ronke-owambe", "yeye-alaba"],
    date: "2026-07-23",
    arcId: "the-full-cabinet",
    world: "fiction",
    type: "appointment",
    title: "The teacher and the convener",
    body:
      "Tadé the Foraging Master takes Youth and Chick Development; Rọ́nkẹ́ " +
      "Mama Owambe takes Social Affairs. Elder Yèyé Àlàbá hands over the " +
      "social advisory she held for years with relief and pride, and books " +
      "the Reconciliation Bench for the afternoon, just in case.",
  },
  {
    id: "cabinet-full",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-07-24",
    arcId: "the-full-cabinet",
    world: "fiction",
    type: "custom",
    title: "A full cabinet, at last",
    body:
      "For the first time in the Republic's memory, no ministry is vacant. " +
      "The Opposition delivers its promised audit of all six budgets, finds " +
      "them suspiciously reasonable, and demands a recount of the recount. " +
      "The President calls it a good week.",
    articleId: "full-cabinet-reshuffle",
  },
  // ARC: The Nesting Box Election
  {
    id: "election-campaigns",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-06-05",
    arcId: "the-nesting-box-election",
    world: "fiction",
    type: "election",
    title: "The campaigns begin",
    body:
      "Campaign season opens for the Coop Assembly. The Progressive Peckers " +
      "Party runs on 'Forward with Feed'; the New Grain Alliance runs on " +
      "'Count Every Egg. Twice.' Posters go up on every post. Someone draws a " +
      "moustache on the President's poster. It is, inevitably, investigated.",
  },
  {
    id: "election-fff",
    chickenIds: ["halima-iron-feathers"],
    date: "2026-06-08",
    arcId: "the-nesting-box-election",
    world: "fiction",
    type: "election",
    title: "The Front holds the balance",
    body:
      "Neither big party can pass the Nesting Box Expansion Bill without the " +
      "Free Feathers Front, the small party that meets under the mango tree " +
      "and opens with one minute of contented scratching. Overnight, the " +
      "least hurried birds in the Republic become the most courted.",
  },
  {
    id: "election-day",
    chickenIds: ["yeye-alaba"],
    date: "2026-06-11",
    arcId: "the-nesting-box-election",
    world: "fiction",
    type: "election",
    title: "Voting under the mango tree",
    body:
      "Chief Justice Yèyé Àlàbá presides over polling with a single rule: no " +
      "bird votes hungry. Voting closes at the afternoon feed. Turnout is " +
      "declared total, because she counted everyone on the way in.",
  },
  {
    id: "election-recount",
    chickenIds: ["halima-iron-feathers"],
    date: "2026-06-12",
    arcId: "the-nesting-box-election",
    world: "fiction",
    type: "election",
    title: "The count, and the recount",
    body:
      "The New Grain Alliance demands a recount before the first count has " +
      "finished, on principle. The Bureau of Egg Statistics obliges. The " +
      "totals agree, which the Alliance finds deeply suspicious and says so.",
  },
  {
    id: "election-result",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-06-14",
    arcId: "the-nesting-box-election",
    world: "fiction",
    type: "election",
    title: "A result, and a handshake at the fence",
    body:
      "The Progressive Peckers keep their majority; the Free Feathers Front " +
      "trades its support for a real expansion of nesting boxes and calls it " +
      "a good day's scratching. That evening the President and the Opposition " +
      "Leader are seen at the fence line, arguing about everything except the " +
      "result, which is already settled between them.",
  },

  /* --------------------------------------- ARC: The Fence Line (Cindy)
     The Republic's first loss from inside the flock. Released scene by
     scene; this is Episode 1 (the loss and the burial). Grounded in a
     real welfare cause, dry-season heat plus a crowded roost, so the arc
     routes to the Better Housing campaign. */
  {
    id: "cindy-who",
    chickenIds: ["cindy"],
    date: "2026-07-30",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Everybody knew Cindy",
    body:
      "If you ever visited Coop Three, you met Cindy, whether you meant to " +
      "or not. She kept the brightest, best-tended feathers on the whole " +
      "farm, and she wore them like it was the easiest thing in the world. " +
      "She greeted every bird by name, showed the nervous new hens where " +
      "the good dust was, and never once made a fuss about any of it. She " +
      "did her work, she kept the peace, and she made the place feel like " +
      "somewhere you wanted to be.",
  },
  {
    id: "cindy-heat",
    chickenIds: ["cindy"],
    date: "2026-08-01",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "A hard, hot week",
    body:
      "Then the dry season turned cruel. The heat pressed down on Coop " +
      "Three until the air itself felt crowded, and there were simply too " +
      "many birds and not enough of the one thing everyone wanted: the cool " +
      "high perch by the vent. Tempers that stay folded away on an ordinary " +
      "day began to show. You could feel it coming, the way you feel a " +
      "storm before the first drop. On the worst night of that week, over " +
      "that one perch, a fight broke out.",
  },
  {
    id: "cindy-loss",
    chickenIds: ["cindy"],
    date: "2026-08-02",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "We lost her",
    body:
      "Cindy was caught in it. She was hurt, and she did not recover. There " +
      "is no gentle way to write the next part, so here it is plainly: the " +
      "Republic woke to the news it dreads most, that one of its own was " +
      "gone. And this time it was not the drain, or the dark, or anything " +
      "from outside the fence. This time it was another bird that did it, " +
      "and the whole flock had to sit with what that meant.",
  },
  {
    id: "cindy-burial",
    chickenIds: ["cindy", "mama-gold", "sade-griot", "sisi-ngozi"],
    date: "2026-08-03",
    arcId: "the-fence-line",
    world: "fiction",
    type: "social",
    title: "Under the mango tree, again",
    body:
      "They carried her to the shady ground under the mango tree, to the " +
      "same quiet corner where Bantu rests. Mama Gold spoke, in the plain " +
      "words that somehow hold the most. Sadé sang. Sisi Ngozi kept a place " +
      "at her side so nobody who loved Cindy had to grieve alone, and a " +
      "good many birds took it. Before the flock rose, it made itself a " +
      "promise: heat and a crowded roost took her, and both are things a " +
      "real farm can fix, with space, with shade, and with enough perches " +
      "for every bird. That promise has a name now, the Better Housing " +
      "campaign, and it matters more today than it did yesterday.",
  },
  // Ep 2, "Not Again": the security press conference; Eseosa named and separated
  {
    id: "fence-presser",
    chickenIds: ["pete-okpara"],
    date: "2026-08-05",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "The Republic's hardest question",
    body:
      "Grief has a way of turning, after a few days, into a question, and " +
      "the Republic's question was a hard one: how does a bird die inside " +
      "her own coop, on her own farm, among her own flock? Nobody wanted to " +
      "ask it out loud. Minister of Security Pete Okpara asked it for them, " +
      "called a press conference, and made it clear from the first word " +
      "that he would not be dressing the answer up.",
  },
  {
    id: "fence-named",
    chickenIds: ["pete-okpara", "eseosa"],
    date: "2026-08-05",
    arcId: "the-fence-line",
    world: "fiction",
    type: "controversy",
    title: "A name, said plainly",
    body:
      "'A fight broke out over the perch,' Okpara said. 'One bird went too " +
      "far. Her name is Eseosa.' He did not raise his voice and he did not " +
      "soften it, and the room went quiet the way a room does when everyone " +
      "already half-knew. Eseosa was moved to a pen of her own, apart from " +
      "the flock. Not to punish her, he was careful to say, not yet, but to " +
      "keep every other bird safe while the Republic worked out what would " +
      "truly be fair.",
  },
  // Ep 3, "The Charge": the court chooses a full, open trial
  {
    id: "fence-charge",
    chickenIds: ["yeye-alaba", "eseosa"],
    date: "2026-08-07",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "The whole flock must see",
    body:
      "There is always a temptation, after something terrible, to settle it " +
      "quietly and move on, and some in the Republic felt it now. Chief " +
      "Justice Yèyé Àlàbá did not. The flock's first trial for the death of " +
      "a citizen, she ruled, would be heard in the open, in the shade, " +
      "after the afternoon feed, where anyone who wished could watch. 'We " +
      "do not peck in the dark,' she said. She set a date, and that was that.",
  },
  // Ep 4, "The Defense Team": Barrister Silk and the media circus
  {
    id: "fence-silk",
    chickenIds: ["barrister-silk", "eseosa"],
    date: "2026-08-09",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Enter the Silk",
    body:
      "Every bird deserves a defence, even this one, and Eseosa got a " +
      "famous one. Barrister Silk swept in with a fan under one wing and a " +
      "title in front of his name, the flashiest advocate the Republic has " +
      "ever produced, a rooster who has never in his life used one word " +
      "where nine would do. He looked around the little shade court, " +
      "decided it was beneath him, and announced he would take the case " +
      "anyway. Whatever else this trial was going to be, it was not going " +
      "to be boring.",
  },
  {
    id: "fence-circus",
    chickenIds: ["barrister-silk", "kola-quill"],
    date: "2026-08-09",
    arcId: "the-fence-line",
    world: "fiction",
    type: "controversy",
    title: "The trial of the (only) century",
    body:
      "Silk called it 'the trial of the century.' There had, in fact, only " +
      "ever been the one trial, but nobody felt like correcting him while " +
      "he was enjoying himself so much. Kola Quill filled five straight " +
      "front pages before a single witness had said a single word, and the " +
      "Coop Times sold out at the trough each morning. Underneath all the " +
      "spectacle a real question was waiting, but for a whole week the " +
      "spectacle was winning.",
  },
  // Ep 5, "The Trial": witnesses, the welfare evidence, and Eseosa's three words
  {
    id: "fence-witnesses",
    chickenIds: ["yeye-alaba", "dr-amara-featherwell"],
    date: "2026-08-12",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "The witnesses, and the evidence",
    body:
      "When the trial began, Cindy's neighbours from Coop Three spoke " +
      "first, quietly and clearly. They told of a hot week, a crowded " +
      "roost, a fight that went too far, and a hen who had only ever kept " +
      "the peace. Then Dr. Featherwell stood up with the facts, and the " +
      "facts were not kind to anybody. Too many birds. One cool perch. Heat " +
      "that made short tempers shorter. 'This coop,' she said, 'was a fight " +
      "waiting to happen.' Nobody in the shade argued, because nobody could.",
  },
  {
    id: "fence-sorry",
    chickenIds: ["eseosa", "barrister-silk"],
    date: "2026-08-12",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Three words",
    body:
      "Barrister Silk gave the performance of his life, an argument so long " +
      "the court broke for feed not once but twice, and buried inside all " +
      "those words was a point sharp enough to land: the heat and the " +
      "crowding were as guilty as his client. The court was still turning " +
      "that over when Eseosa, who had not spoken in weeks, asked to speak. " +
      "She said three words. 'I am sorry.' The shade went very, very quiet. " +
      "The Chief Justice said she would rule the next day, and for once " +
      "nobody rushed her.",
  },
  // Ep 6, "The Judgement": the ruling and the exile
  {
    id: "fence-ruling",
    chickenIds: ["yeye-alaba", "eseosa"],
    date: "2026-08-14",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Two truths, one sentence",
    body:
      "The whole Republic came the next day, and Yèyé Àlàbá did not hurry a " +
      "word of it. 'A bird is gone,' she began, 'and no ruling I give will " +
      "bring her back. But we can still be just.' Her judgement held two " +
      "truths at once and refused to drop either: the coop had failed " +
      "Eseosa, and Eseosa had failed Cindy. Eseosa would leave the flock, " +
      "not harmed, never harmed, but rehomed far from Coop Three where she " +
      "could do no more damage. The Republic calls it exile. Then the Chief " +
      "Justice looked up and made the rest a promise: 'We will build coops " +
      "where this cannot happen. That is Cindy's justice too.'",
  },
  // Ep 7, "The Law": Cindy's Law and the Better Housing promise
  {
    id: "fence-law",
    chickenIds: ["adedoyin-mama-decree", "cindy"],
    date: "2026-08-16",
    arcId: "the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Cindy's Law",
    body:
      "The Assembly, which can argue for a whole season about the price of " +
      "grain, did not argue about this. It passed Cindy's Law within the " +
      "week: enough space, enough perches, and shade for every bird, so " +
      "that no coop is ever again a fight waiting to happen. They named it " +
      "for the best-dressed hen in the Republic, the one who greeted " +
      "everybody, troubled nobody, and kept the peace her whole life. A law " +
      "is a promise, and this one costs real grain to keep, real timber and " +
      "real shade cloth. So the flock keeps it in her name, and asks you to " +
      "help finish it.",
  },
];
