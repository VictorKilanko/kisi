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

  /* ------------------------------- ARC: After the Fence Line (the rebuild)
     Season 2 opens on hope. Coop Three is rebuilt to Cindy's Law with the
     Better Housing money at work: more space, more perches, wide vents, and
     shade. Dated after the Fence Line finale so it reveals once the season
     has run. Routes hard to Better Housing. */
  {
    id: "after-first-plank",
    chickenIds: ["emeka-drainmaster", "adedoyin-mama-decree"],
    date: "2026-08-20",
    arcId: "after-the-fence-line",
    world: "fiction",
    type: "custom",
    title: "The first plank",
    body:
      "A promise is only a promise until somebody picks up a plank, and this " +
      "week somebody did. The first grain of the Better Housing fund became " +
      "the first load of timber, and Emeka the Drain Marshal walked out to " +
      "Coop Three with a length of string and marked a footprint wider than " +
      "the old one. The new Coop Three would hold fewer birds in far more " +
      "room. It is a strange, hopeful thing to build something good out of " +
      "something this sad. The whole flock lined the fence to watch the " +
      "string go down, and for the first time in weeks the mood lifted.",
  },
  {
    id: "after-built-to-law",
    chickenIds: ["dr-amara-featherwell", "amina-daybreak"],
    date: "2026-08-23",
    arcId: "after-the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Built to the law",
    body:
      "Cindy's Law is easy to say and harder to build, so they built it " +
      "carefully. Dr. Featherwell measured the spacing herself. One cool " +
      "perch was the old trouble, so the new roost has many, high and low, " +
      "enough that no bird ever has to fight for the good one. Amina " +
      "Daybreak cut wide vents for the dry-season heat and hung a shade wing " +
      "over the run, while Emeka set the floor to drain clean when the rains " +
      "come. Every plank answered a reason the trial had spelled out. This " +
      "is what welfare looks like once it stops being a word and becomes a " +
      "building.",
  },
  {
    id: "after-home",
    chickenIds: ["sisi-ngozi", "pete-okpara", "chi-chi"],
    date: "2026-08-27",
    arcId: "after-the-fence-line",
    world: "fiction",
    type: "social",
    title: "The birds come home",
    body:
      "Then came the day everyone had waited for: the birds went home. Sisi " +
      "Ngozi organised the move the way she organises everything, quietly " +
      "and completely, so not one bird was left standing about wondering " +
      "where to go. That first night the air moved cool through the new " +
      "vents, and there was high perch enough for every single bird, with " +
      "room to spare. When Okpara called the roll in the dark, every name " +
      "answered, and the count came back whole. Somebody said it out loud: " +
      "this is the coop Cindy should have had. Nobody disagreed.",
  },
  {
    id: "after-plaque",
    chickenIds: ["adedoyin-mama-decree", "cindy"],
    date: "2026-08-30",
    arcId: "after-the-fence-line",
    world: "fiction",
    type: "custom",
    title: "Built to Cindy's Law",
    body:
      "By the new door they fixed a small wooden plaque, and it says only " +
      "this: Built to Cindy's Law. The President did not make a long speech, " +
      "which everyone agreed was the right speech. 'One coop is done,' she " +
      "said. 'We have many.' That is the honest part. Coop Three is safe " +
      "now, but the flock still has coops built the old, crowded way, and " +
      "every one of them needs the same fixing. The Better Housing campaign " +
      "paid for these planks, and it is not finished until every bird sleeps " +
      "this safe. Help us build the next one.",
  },

  /* ------------------------------------ ARC: The Sweet Beak (Ládùn)
     Villain rollout #2: the scheming insider hen. A comic arc. She revives
     the Republic's oldest fear, missing grain, as a whisper to unseat Musa,
     and Kola Quill (who broke the real grain scandal) traces it home.
     Dated after the rebuild so it reveals in sequence. Routes to the shop. */
  {
    id: "sweetbeak-arrives",
    chickenIds: ["ladun-sweet-beak"],
    date: "2026-09-02",
    arcId: "the-sweet-beak",
    world: "fiction",
    type: "custom",
    title: "A sweet new voice",
    body:
      "There is a hen in Coop Three named Ládùn, and everyone calls her Sweet " +
      "Beak, because she greets you like the best day of your life has just " +
      "arrived. What most birds are only starting to notice is that you always " +
      "walk away from a chat with Sweet Beak feeling a little worried about " +
      "something you were perfectly happy about a minute before. That is the " +
      "whole trick, and she is very, very good at it. What she wants is a " +
      "ministry, any ministry, and she has decided the fastest way to a seat " +
      "is to make sure the bird already in it starts to look unsteady.",
  },
  {
    id: "sweetbeak-whisper",
    chickenIds: ["ladun-sweet-beak", "musa-grainkeeper"],
    date: "2026-09-04",
    arcId: "the-sweet-beak",
    world: "fiction",
    type: "controversy",
    title: "The oldest fear in the Republic",
    body:
      "Sweet Beak picked her target and her weapon with care. The target was " +
      "Musa the Grainkeeper, the honest, unglamorous minister who runs the " +
      "feed store by smell. The weapon was the oldest fear the Republic owns: " +
      "that the grain is going missing again. She never once said it outright. " +
      "She only worried, sweetly, at the dust bath. 'I am sure the store is " +
      "fine,' she would sigh, in a way that made you sure it was not. By " +
      "sundown the sigh had legs.",
  },
  {
    id: "sweetbeak-spreads",
    chickenIds: ["ladun-sweet-beak", "musa-grainkeeper"],
    date: "2026-09-06",
    arcId: "the-sweet-beak",
    world: "fiction",
    type: "controversy",
    title: "By the third day",
    body:
      "By the third day half of Coop Three was counting grains under its " +
      "breath and giving poor Musa the side-eye at the trough. Nobody had " +
      "seen anything missing, because nothing was, but a whisper does not need " +
      "evidence, only a quiet afternoon and a willing ear. Musa, who is as " +
      "honest as a sunrise and about as exciting, could not understand why the " +
      "whole coop suddenly wanted to audit his shelves. He offered to open the " +
      "store to anyone. Somehow that only made the whisper louder.",
  },
  {
    id: "sweetbeak-traced",
    chickenIds: ["kola-quill", "ladun-sweet-beak"],
    date: "2026-09-08",
    arcId: "the-sweet-beak",
    world: "fiction",
    type: "custom",
    title: "Kola Quill smells it",
    body:
      "Now, Kola Quill broke the real grain scandal two seasons ago, the one " +
      "where two hundred grams truly did vanish behind a filing perch, so she " +
      "knows exactly what a missing-grain story smells like. This one smelled " +
      "wrong. There was fear everywhere and evidence nowhere, which is the " +
      "signature of a rumour, not a robbery. So she did the thing rumours " +
      "cannot survive: she followed it upstream, ear by ear, asking each bird " +
      "who told them. Every single trail dried up at the same dust bath.",
  },
  {
    id: "sweetbeak-exposed",
    chickenIds: ["kola-quill", "ladun-sweet-beak", "musa-grainkeeper"],
    date: "2026-09-10",
    arcId: "the-sweet-beak",
    world: "fiction",
    type: "reconciliation",
    title: "Sweet Beak, exposed",
    body:
      "Kola Quill laid it out on the front page and again at the afternoon " +
      "feed, plainly, the way she does. Not one grain was missing. One hen was " +
      "stirring. Musa was cleared before he had finished being confused about " +
      "why he needed clearing, and the Republic, which loves nothing more than " +
      "a caught schemer, laughed until it had to sit down. Sweet Beak accepted " +
      "the moment with a gracious smile and, everyone noticed, was already " +
      "eyeing her next target on the way out. The grain, meanwhile, was never " +
      "lost. It went where good grain goes: into the best eggs in the country. " +
      "Order a crate at kisi.africa/shop.",
  },

  /* ------------------------------------ ARC: The Dawn Duel
     A warm, funny standing-engine arc. VP Baba Ṣẹ́gun, who crows the sun up
     every morning, is challenged by young Small Fẹ́mi. Ends on two roosters
     waking the farm and a Solar & Light sell (dawn, light, the dark coops). */
  {
    id: "dawn-challenge",
    chickenIds: ["baba-segun", "small-femi"],
    date: "2026-09-13",
    arcId: "the-dawn-duel",
    world: "fiction",
    type: "custom",
    title: "Who owns the dawn?",
    body:
      "Small Fẹ́mi does not do anything loudly. He was the last of the twelve " +
      "out of Coop Two the night of the drain, he wants to be a coop guard " +
      "more than he lets on, and he had worked out something simple: a guard " +
      "is awake before everyone else anyway. So one grey morning, with no " +
      "cheek about it at all, he told Vice President Baba Ṣẹ́gun that this year " +
      "he meant to be the bird who called the dawn. Baba, The Dawn Himself, " +
      "has crowed the sun up over Kisi for years and takes full personal " +
      "credit for its arrival. The Republic, which will take a side on " +
      "absolutely anything, took sides at once.",
  },
  {
    id: "dawn-training",
    chickenIds: ["small-femi", "baba-segun"],
    date: "2026-09-16",
    arcId: "the-dawn-duel",
    world: "fiction",
    type: "sports",
    title: "The training camp",
    body:
      "Small Fẹ́mi trained the way he does everything, quietly and stubbornly. " +
      "He was already up before the light, walking the fence line on his " +
      "rounds where he thinks nobody can see him, so he simply added the crow " +
      "to the patrol. Baba Ṣẹ́gun, magnificently, trained not at all. He slept " +
      "in, took a long dust bath, held court about mornings he had crowed up " +
      "decades ago, and still, out of sheer habit, beat the youngster to the " +
      "warm-up crow twice. 'The dawn is not a race you can train for,' he told " +
      "the newspapers. 'It is a calling.'",
  },
  {
    id: "dawn-duel",
    chickenIds: ["baba-segun", "small-femi"],
    date: "2026-09-18",
    arcId: "the-dawn-duel",
    world: "fiction",
    type: "sports",
    title: "The duel at first light",
    body:
      "The whole flock gathered in the dark to watch, which is a strange thing " +
      "to do and everyone did it anyway. The grey came. Both roosters filled " +
      "their chests. And they crowed at the very same instant, so exactly " +
      "together that not one bird, not even Chief Justice Yèyé Àlàbá, who was " +
      "asked to rule, could say who was first. The sun came up on the two of " +
      "them, old and young, crowing their hearts out side by side, and it was, " +
      "everyone agreed, the best dawn in years.",
  },
  {
    id: "dawn-apprentice",
    chickenIds: ["baba-segun", "small-femi"],
    date: "2026-09-20",
    arcId: "the-dawn-duel",
    world: "fiction",
    type: "reconciliation",
    title: "The dawn belongs to everyone",
    body:
      "Instead of a rematch, Baba Ṣẹ́gun did something better. He made Small " +
      "Fẹ́mi his apprentice, which is as close as the old rooster comes to " +
      "admitting he was impressed. Two birds wake Kisi now, one from the tall " +
      "perch and one from the water tank on his way round the fence, so the " +
      "sun has never once been late since, and a coop woken and watched by the " +
      "same serious young bird sleeps a little easier. But here is the honest " +
      "part Baba will tell you himself: he can wake the farm, he cannot light " +
      "it, and when the sun goes down the coops still go dark. Help us change " +
      "that. This is the Solar & Light campaign, at kisi.africa/support.",
  },

  /* ------------------------------------ ARC: Sweet Beak Strikes Again (Ládùn)
     Villain rollout #2, escalation. The comic schemer overreaches: cleared but
     unashamed, she trades a whisper for envy and tries to turn coop against
     coop over the new Cindy's Law housing. Halima refuses to play politics with
     it, and the grievance meeting flips into a Better Housing rally. Dated
     after the Dawn Duel so it reveals in sequence. Routes to Better Housing. */
  {
    id: "sweetbeak2-target",
    chickenIds: ["ladun-sweet-beak"],
    date: "2026-09-23",
    arcId: "the-sweet-beak-returns",
    world: "fiction",
    type: "custom",
    title: "The next target",
    body:
      "Sweet Beak came out of the grain business cleared, but not one feather " +
      "sorry. If anything, getting caught only made her hungrier. One small " +
      "minister, she decided, had been thinking too small. This time she would " +
      "not go after a single bird at all. She would go after the whole flock's " +
      "good mood, and set coop against coop, because a Republic busy squabbling " +
      "with itself never notices who is quietly climbing.",
  },
  {
    id: "sweetbeak2-envy",
    chickenIds: ["ladun-sweet-beak"],
    date: "2026-09-25",
    arcId: "the-sweet-beak-returns",
    world: "fiction",
    type: "controversy",
    title: "Why should Three get the shade?",
    body:
      "Her weapon this time was envy, which is even older than the fear of " +
      "missing grain. Coop Three had come back from the rebuild brand new: many " +
      "perches, wide vents, and a shade wing for the hot afternoons. So Sweet " +
      "Beak went from roost to roost and sighed about it. 'Lovely for them,' " +
      "she would say, warmly, at every coop still waiting its turn. 'And what " +
      "about us? Are we not birds too?' Never mind that Sweet Beak roosted in " +
      "Coop Three herself, under the coolest shade wing on the farm. Envy is a " +
      "poor bookkeeper. She never once asked for a fight. She only asked, " +
      "sweetly, until the waiting coops began to feel hard done by.",
  },
  {
    id: "sweetbeak2-meeting",
    chickenIds: ["ladun-sweet-beak"],
    date: "2026-09-27",
    arcId: "the-sweet-beak-returns",
    world: "fiction",
    type: "controversy",
    title: "The grievance meeting",
    body:
      "By the end of the week she had gathered enough grumbling to try " +
      "something bold. She called the waiting coops together under the mango " +
      "tree, all fairness and concern, and billed it as a meeting about " +
      "sharing. What she really wanted was an angry crowd she could aim like a " +
      "slingshot at the whole housing programme. And for one dangerous moment, " +
      "looking out at all those ruffled feathers, she was sure she had one.",
  },
  {
    id: "sweetbeak2-halima",
    chickenIds: ["halima-iron-feathers", "ladun-sweet-beak"],
    date: "2026-09-29",
    arcId: "the-sweet-beak-returns",
    world: "fiction",
    type: "custom",
    title: "Iron Feathers stands up",
    body:
      "Then Halima Iron Feathers, Leader of the Opposition, rose to speak, and " +
      "Sweet Beak's heart lifted, because surely the President's fiercest rival " +
      "would tear the government's shiny coop to pieces. Halima did the exact " +
      "opposite. 'I fight the President on the feed budget and the breakfast " +
      "hour, and I will fight her again next week,' she said. 'But we do not " +
      "fight over Cindy's Law. Coop Three is not the problem. It is the " +
      "promise. My whole job is to make sure every coop gets the same one.' " +
      "The crowd went very quiet, and then it began to nod.",
  },
  {
    id: "sweetbeak2-rally",
    chickenIds: ["ladun-sweet-beak", "halima-iron-feathers", "adedoyin-mama-decree"],
    date: "2026-09-30",
    arcId: "the-sweet-beak-returns",
    world: "fiction",
    type: "custom",
    title: "The rally she never meant to hold",
    body:
      "After that, the meeting got completely away from her. Instead of " +
      "resenting Coop Three, the waiting coops started chanting for their own " +
      "rebuild: build ours next, build ours next. Sweet Beak's grievance " +
      "meeting had turned, right in front of her, into the biggest Better " +
      "Housing rally the Republic had ever held, and she had organised it " +
      "herself. The President came by to see about the noise, looked out at all " +
      "those singing coops, and said only what she had said at the new plaque: " +
      "'One coop is done. We have many.' Sweet Beak slipped off before the last " +
      "verse, already eyeing her next target. But the flock is right: one coop " +
      "is done, and there are many still waiting, and every one of them costs " +
      "real grain. Help us build the next one, at kisi.africa/support.",
  },
];
