import type { TimelineEvent } from "../schemas";

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
    date: "2026-08-17",
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
    date: "2026-08-17",
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
    date: "2026-08-18",
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
    date: "2026-08-18",
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
    date: "2026-08-19",
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
    date: "2026-08-19",
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
    date: "2026-08-20",
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
    date: "2026-08-20",
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
    date: "2026-08-20",
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
      "Order a crate at farm.kisi.africa/eggs.",
  },

  /* ------------------------------------ ARC: The Dawn Duel
     A warm, funny standing-engine arc. VP Baba Ṣẹ́gun, who crows the sun up
     every morning, is challenged by young Small Fẹ́mi. Ends on two roosters
     waking the farm and a Solar & Light sell (dawn, light, the dark coops). */
  {
    id: "dawn-challenge",
    chickenIds: ["baba-segun", "small-femi"],
    date: "2026-08-21",
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
    date: "2026-08-21",
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
    date: "2026-08-22",
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
    date: "2026-08-22",
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
      "that. This is the Solar & Light campaign, at farm.kisi.africa/support.",
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
    date: "2026-08-23",
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
    date: "2026-08-23",
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
    date: "2026-08-24",
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
    date: "2026-08-24",
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
    date: "2026-08-24",
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
      "real grain. Help us build the next one, at farm.kisi.africa/support.",
  },

  // ARC: The Breakfast Bell (Season 2, Ep 5)
  {
    id: "breakfast-question",
    chickenIds: ["halima-iron-feathers"],
    date: "2026-08-25",
    arcId: "the-breakfast-bell",
    world: "fiction",
    type: "custom",
    title: "Seven, or seven-ish?",
    body:
      "Executive Order No. 1, the very first thing President Adédoyin ever " +
      "signed, set breakfast at seven, 'not seven-ish.' It is half the reason " +
      "they call her Mama Decree. There was only ever one problem: a farm " +
      "keeps no clock. With no way to say when seven had actually come, the " +
      "grain still arrived when it arrived, and every morning the flock woke " +
      "hungry and waited on a promise. Halima Iron Feathers, Leader of the " +
      "Opposition, had spent three feed budgets on a single demand: make the " +
      "President's own order real. 'I fight her on plenty,' she said, 'but " +
      "not on this. Order No. 1 is right. It is simply not kept yet. You do " +
      "not leave a hungry flock waiting on a good idea.'",
  },
  {
    id: "breakfast-defence",
    chickenIds: ["musa-grainkeeper"],
    date: "2026-08-25",
    arcId: "the-breakfast-bell",
    world: "fiction",
    type: "custom",
    title: "The minister's defence",
    body:
      "Musa the Grainkeeper, who took Feed and Agriculture in the full " +
      "cabinet, was loyal to Order No. 1 and said so. He also said seven " +
      "o'clock was a great deal easier to sign than to serve. 'I feed the " +
      "whole flock by hand, coop by coop,' he told the Assembly, 'and some " +
      "mornings the grain is ready by seven, and some mornings it is not in " +
      "a hurry.' He was honest to a fault, as ever, and he had a point. The " +
      "order was only ever as good as the bird keeping the time, and on a " +
      "farm with no clock, nobody could even agree when seven had come.",
  },
  {
    id: "breakfast-bell-idea",
    chickenIds: ["halima-iron-feathers"],
    date: "2026-08-25",
    arcId: "the-breakfast-bell",
    world: "fiction",
    type: "custom",
    title: "A bell with no ringer",
    body:
      "Halima's answer was plain, the way her answers usually are. Hang a " +
      "bell by the feed store, ring it at seven sharp, and serve the instant " +
      "it rings. Give Order No. 1 a sound the whole farm could hear. The " +
      "Assembly liked the bell at once, and then it hit the wall every good " +
      "idea hits: what clock does a farm keep? Sunrise wandered with the " +
      "season. The old birds argued for 'after the dew,' the young ones for " +
      "'when I wake up,' and for a whole week the Republic's oldest law hung " +
      "on the one question nobody could answer, which was simply when seven " +
      "was.",
  },
  {
    id: "breakfast-rooster-clock",
    chickenIds: ["small-femi", "baba-segun"],
    date: "2026-08-26",
    arcId: "the-breakfast-bell",
    world: "fiction",
    type: "custom",
    title: "The rooster clock",
    body:
      "The answer came from the smallest voice in the room. Small Fẹ́mi, the " +
      "young cockerel who now shares the dawn crow with Vice President Baba " +
      "Ṣẹ́gun, put up a wing. 'Two of us crow the sun up on the dot now,' he " +
      "said. 'Baba calls the first light, I call the second, and the second " +
      "crow lands near enough to seven that no hen can argue. Peg the bell to " +
      "my crow, and Order No. 1 keeps itself, because a rooster is never " +
      "late.' The room went quiet, then delighted. The farm had owned a " +
      "perfect clock all along. It simply had feathers, and a very good " +
      "opinion of itself.",
  },
  {
    id: "breakfast-first-crow",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-08-26",
    arcId: "the-breakfast-bell",
    world: "fiction",
    type: "custom",
    title: "Order No. 1, kept at last",
    body:
      "So it was settled, and settled sweetly. On the first morning of the " +
      "new hour the President came down to the feed store to ring the very " +
      "first bell herself, and she rang it standing beside Halima, her " +
      "fiercest rival and oldest crate-sister, who had fought three seasons " +
      "to make the order real. Mama Decree read one new line aloud twice, " +
      "once for the record and once for the hard of hearing: 'Order No. 1 " +
      "said seven. Now the farm can finally keep it.' The bell has rung at " +
      "second crow every single day since, and no bird wakes to an empty " +
      "trough. A hen who eats well and on time lays a better egg. That last " +
      "part is not a saying. It is the whole business. Taste it for yourself, " +
      "and order a crate at farm.kisi.africa/eggs.",
  },

  // ARC: Chi-Chi's First Race (Season 2, Ep 6)
  {
    id: "race-lineup",
    chickenIds: ["chi-chi"],
    date: "2026-08-27",
    arcId: "chi-chi-first-race",
    world: "fiction",
    type: "sports",
    title: "The quiet one lines up",
    body:
      "Everyone knew Chi-Chi had joined the Solar Queens' junior sprint " +
      "squad, because everyone knows everything at Kisi, and because she was " +
      "the worst-kept secret in the Republic. What no one had seen yet was " +
      "Chi-Chi race. Today they would. The sweetheart of the nation, the shy " +
      "pullet who once hid behind the water tank for two days over a " +
      "headline, walked to the starting line for her first real race with her " +
      "legs visibly shaking. She did not look up. She looked, as she always " +
      "has, at the older birds, and copied exactly what a runner is meant to " +
      "do.",
  },
  {
    id: "race-coaches",
    chickenIds: ["flash-adaora", "tunde-quickfoot"],
    date: "2026-08-27",
    arcId: "chi-chi-first-race",
    world: "fiction",
    type: "sports",
    title: "Two coaches, one chick",
    body:
      "She had the two loudest coaches on the farm, and they could not have " +
      "been more different. Flash Adaora, who wins gracefully and loses " +
      "terribly, knelt down and told her the truest thing she knows: 'The " +
      "quiet ones have the best starts. Nothing to prove, everything to run " +
      "for.' Minister Quickfoot, Flash's retired-but-eternal rival, arrived " +
      "with a drum, a ribbon, and a three-minute speech delivered, as ever, " +
      "in the third person. 'When Quickfoot was a chick,' he told her, " +
      "'Quickfoot also started small. Observe Quickfoot now.' Between the two " +
      "of them the shy chick got " +
      "exactly the send-off she needed: one steady wing on her shoulder, and " +
      "one very large distraction to hide behind.",
  },
  {
    id: "race-whistle",
    chickenIds: ["chi-chi"],
    date: "2026-08-27",
    arcId: "chi-chi-first-race",
    world: "fiction",
    type: "sports",
    title: "The whistle",
    body:
      "Then the whole flock went quiet, which almost never happens, and the " +
      "whistle blew. Chi-Chi's start was clean, low, and faster than anyone " +
      "expected, exactly as Flash had promised. For half the track she was in " +
      "front. Then a bigger chick from Coop Four found another gear at the " +
      "bend and pulled ahead, and for three long strides it looked as though " +
      "the story would be a short and disappointing one. Chi-Chi did not " +
      "fold. She put her small head down and ran the last stretch harder than " +
      "she had ever run anything in her careful, watchful life.",
  },
  {
    id: "race-secondplace",
    chickenIds: ["chi-chi"],
    date: "2026-08-28",
    arcId: "chi-chi-first-race",
    world: "fiction",
    type: "sports",
    title: "I did my best",
    body:
      "She did not win. She crossed second, a wing's length back, breathing " +
      "so hard she could barely stand, and when the Coop Times pushed a " +
      "microphone at her she said the same four words she said on the morning " +
      "of her first egg: 'I did my best.' The cheer that went up was not a " +
      "runner-up's cheer. It was bigger than the winner's. The Republic had " +
      "watched its shyest citizen line up frightened and finish flat out, and " +
      "decided, as one flock, that a second place run like that is its own " +
      "kind of first. She hid behind the water tank afterward, out of habit, " +
      "and the whole farm politely pretended not to know where she was.",
  },
  {
    id: "race-exhibition",
    chickenIds: ["flash-adaora", "tunde-quickfoot"],
    date: "2026-08-28",
    arcId: "chi-chi-first-race",
    world: "fiction",
    type: "sports",
    title: "The rivalry that never retires",
    body:
      "There was a warm bit of chaos to finish. Watching Chi-Chi empty the " +
      "tank on that last stretch stirred something in the two old champions, " +
      "and before anyone could stop them, Flash Adaora and Minister Quickfoot " +
      "were toeing the line themselves, 'just to demonstrate form for the " +
      "juniors.' They raced. It was gloriously undignified. Nobody agrees who " +
      "won, both have claimed it in writing, and their rivalry, declared " +
      "officially retired and unofficially eternal, remains exactly that. A " +
      "champion runs on more than pride, though. Flash swears by farm-fresh " +
      "eggs as race fuel, and so does the minister. Fuel your own champion, " +
      "and order a crate at farm.kisi.africa/eggs.",
  },

  // ARC: The Elders' Bench (Season 2, Ep 7)
  {
    id: "elders-law-kept",
    chickenIds: ["mama-gold"],
    date: "2026-08-29",
    arcId: "the-elders-bench",
    world: "fiction",
    type: "custom",
    title: "A law kept",
    body:
      "Mama Gold's Law, the Senior Hen Retirement Protection Act, has been on " +
      "the books a while now: shade, first place at the trough, and freedom " +
      "from sudden committee membership for every hen who has done her laying " +
      "years. A law is a fine thing on paper. This week the Republic made it " +
      "a thing you could sit on. Under the old mango tree the flock built a " +
      "proper elders' bench, a long shaded seat in the coolest spot on the " +
      "farm, set aside for the retired layers by right, the way Mama Gold has " +
      "always held the shady end of Coop One: by right of sitting there " +
      "first.",
  },
  {
    id: "elders-preside",
    chickenIds: ["mama-gold"],
    date: "2026-08-29",
    arcId: "the-elders-bench",
    world: "fiction",
    type: "custom",
    title: "The National Grandmother presides",
    body:
      "There was only ever going to be one bird to open it. Mama Gold, the " +
      "National Grandmother, four hundred recorded eggs and counting, took " +
      "the low branch seat she takes every Sunday and looked out at the hens " +
      "gathered around the new bench. 'Four hundred eggs buys you this " +
      "shade,' she told them, in the dry way that makes the whole Republic " +
      "lean in. 'It is not charity. It is wages. Sit down. You have earned " +
      "the sitting.' Then she did what she does best, and began to tell the " +
      "week's history, starting, as her stories always do, 'in the time " +
      "before the water tank.'",
  },
  {
    id: "elders-roll",
    chickenIds: ["sisi-ngozi", "sade-griot"],
    date: "2026-08-30",
    arcId: "the-elders-bench",
    world: "fiction",
    type: "social",
    title: "Every name, out loud",
    body:
      "Sisi Ngozi, who can organise anything in an afternoon, read the roll " +
      "of the retired hens one by one, and Sadé the Griot, Minister of " +
      "Culture, would not let a single name pass as merely a name. She set " +
      "each one to song, the way she sets everything to song, until the " +
      "reading of a list became a slow, warm anthem under the tree. Birds who " +
      "had fed the nation quietly for years, egg after egg, breakfast after " +
      "breakfast, with nobody counting, heard the whole Republic stop and " +
      "count them at last, and say, out loud and in tune, thank you.",
  },
  {
    id: "elders-thanks",
    chickenIds: ["mama-gold"],
    date: "2026-08-30",
    arcId: "the-elders-bench",
    world: "fiction",
    type: "custom",
    title: "Thank you, elders",
    body:
      "It was not a goodbye, and Mama Gold made sure everyone understood " +
      "that. 'No hen here is finished,' she said, from the bench that is now " +
      "hers and every elder's. 'We are not retiring. We are delegating.' The " +
      "shade is real, the bench is real, and keeping them, the cool spot cool " +
      "and the trough full for the layers who gave the Republic every " +
      "breakfast it has ever eaten, costs real grain, season after season. " +
      "The birds who fed us first should not be fed last. Help us look after " +
      "them, at farm.kisi.africa/support.",
  },

  // ARC: The Second Chair (Season 2, Ep 8) — seeds Halima's heel turn (rollout #3)
  {
    id: "second-chair-cheer",
    chickenIds: ["halima-iron-feathers"],
    date: "2026-08-31",
    arcId: "the-second-chair",
    world: "fiction",
    type: "custom",
    title: "The cheer that stayed",
    body:
      "Weeks ago, Halima Iron Feathers did something the Republic had never " +
      "seen her do: she made the President's own breakfast order come true, " +
      "and the whole flock cheered her for it. The cheer should have faded by " +
      "now. It has not. At the trough, at the dust bath, birds still catch " +
      "her eye and dip their heads the way they only ever did for one hen. " +
      "Halima has sat in the second chair, the Leader of the Opposition's " +
      "chair, her whole life, and been proud of it. This is the first morning " +
      "it has ever felt a size too small.",
  },
  {
    id: "second-chair-poison",
    chickenIds: ["halima-iron-feathers", "ladun-sweet-beak"],
    date: "2026-09-01",
    arcId: "the-second-chair",
    world: "fiction",
    type: "custom",
    title: "The sweetest poison",
    body:
      "Sweet Beak can smell a small doubt from three coops away, and she came " +
      "to the dust bath wearing her warmest smile. 'You did all the work on " +
      "that breakfast bell,' she cooed, settling in beside Halima. 'You fought " +
      "for it three feed budgets running. And who stood up and rang it? Who " +
      "gets the credit? Why are you always the second chair, Iron Feathers, " +
      "when you do the first-chair work?' Halima did not raise her voice. She " +
      "never does. She said one dry line, 'I know exactly what you are, and it " +
      "will not work,' and sent her off. But Sweet Beak did not need it to " +
      "work today. She only needed the question to stay. It stayed.",
  },
  {
    id: "second-chair-dusk",
    chickenIds: ["halima-iron-feathers", "kola-quill"],
    date: "2026-09-02",
    arcId: "the-second-chair",
    world: "fiction",
    type: "custom",
    title: "A moment too long",
    body:
      "That evening, when the coops had gone quiet and the President had long " +
      "since gone to roost, Halima walked the length of the empty assembly " +
      "ground. She stopped by the first chair, the President's chair, the one " +
      "she has spent a lifetime arguing against from the seat beside it. She " +
      "looked at it a moment too long. Only Kola Quill, working late on a " +
      "headline, saw her do it, and he printed nothing, because some things " +
      "are not yet news. Everyone in the Republic knows the old fact, the two " +
      "of them deploy it in debates: the President and the Leader of the " +
      "Opposition came out of the same chick crate, on the same morning, years " +
      "ago. What Kola alone can feel, and would not print, is what that old " +
      "bond is quietly becoming, not a friendship any more, and not yet a " +
      "rivalry, but a fault line, and whatever is starting here runs along it.",
  },
  {
    id: "second-chair-iron",
    chickenIds: ["halima-iron-feathers", "adedoyin-mama-decree"],
    date: "2026-09-03",
    arcId: "the-second-chair",
    world: "fiction",
    type: "custom",
    title: "Iron, still",
    body:
      "By morning it was as if nothing had happened. Halima took the second " +
      "chair, opened the feed budget to the first disputed line, and fought " +
      "the President over it the way she has fought her over everything, " +
      "fiercely, dryly, and to the last grain. The Republic watched its most " +
      "loyal opposition do its job, and loved her for it, and saw nothing " +
      "else. It did not see the small new wish that had started somewhere " +
      "behind her iron, quiet as a draught under a door: one day, perhaps, the " +
      "first chair. A Republic this size holds together on trust, and trust " +
      "has to be fed and housed and cared for, season after season. Help us " +
      "keep it strong. Back the flock at farm.kisi.africa/support.",
  },

  // ARC: The League Kicks Off (Season 2, Ep 9) — warm sport beat, pays off Chi-Chi's squad thread
  {
    id: "league-open",
    chickenIds: ["tunde-quickfoot"],
    date: "2026-09-04",
    arcId: "the-league-kicks-off",
    world: "fiction",
    type: "sports",
    title: "A new season",
    body:
      "The Coop Premier League opened under a clear, high sky, and Túndé " +
      "Quickfoot, Minister of Sports and Recreation, declared it open in the " +
      "only way he knows how: with a speech. It was a long speech. It was, " +
      "for the first two feed breaks, mostly about Túndé, his knees, his glory " +
      "days, and the hundred-metre record that gets faster every time he tells " +
      "it. Then, generously, and to real cheering, it became about the birds. " +
      "'Run honest,' he finished. 'Win kind. Lose worse than anybody, so the " +
      "winning means something.' Then he blew the whistle and pretended the " +
      "tear in his eye was dust.",
  },
  {
    id: "league-champions",
    chickenIds: ["flash-adaora"],
    date: "2026-09-04",
    arcId: "the-league-kicks-off",
    world: "fiction",
    type: "sports",
    title: "The champions' burden",
    body:
      "Flash Adaora's Solar Queens came into the new season as reigning " +
      "champions, which in the Coop League means every other team has spent " +
      "the off-season learning your habits. Flash was asked, at the line, " +
      "whether the pressure worried her. She looked down the track at all the " +
      "birds who had come to beat her and said only, 'Good. Chase us. It keeps " +
      "the legs honest.' Then she ran the opening leg so smoothly that even " +
      "the birds chasing her cheered, which annoyed their coaches enormously.",
  },
  {
    id: "league-debut",
    chickenIds: ["chi-chi", "flash-adaora"],
    date: "2026-09-04",
    arcId: "the-league-kicks-off",
    world: "fiction",
    type: "sports",
    title: "The smallest debut",
    body:
      "Halfway down the junior team sheet, in careful, over-large letters, was " +
      "one name the whole Republic had been quietly waiting for: Chi-Chi. The " +
      "shy sweetheart of the flock, who joined Flash's junior sprint squad " +
      "after her first egg, lined up for her first real league fixture with " +
      "her legs shaking exactly the way they shook at her very first race. She " +
      "did what she has always done. She looked at the older birds to see " +
      "precisely what a runner is meant to do, copied it as best she could, " +
      "put her small head down, and ran her whole heart out.",
  },
  {
    id: "league-fuel",
    chickenIds: ["chi-chi"],
    date: "2026-09-04",
    arcId: "the-league-kicks-off",
    world: "fiction",
    type: "sports",
    title: "Fuel a champion",
    body:
      "She came third, a wing's length off second, and grinned as though she " +
      "had won the whole thing, because to Chi-Chi she had: she had finished, " +
      "and she had done her best, which are the only two things she has ever " +
      "asked of herself. The cheer for third was, once again, louder than the " +
      "cheer for first. Every bird on that field, champion and rookie alike, " +
      "ran on exactly one thing underneath all the heart: a good breakfast, " +
      "laid that morning by a hen with a name. A champion runs on more than " +
      "pride. Fuel your own, and order farm-fresh eggs at farm.kisi.africa/eggs.",
  },

  // ARC: The True Count (Season 2, Ep 10) — deepens Halima's heel turn (rollout #3):
  // her first real bend of principle. Advances the "second-chair" seed. Still short of
  // the full turn; sets up the eventual crate-sister reckoning with the President.
  {
    id: "true-count-error",
    chickenIds: ["halima-iron-feathers"],
    date: "2026-09-05",
    arcId: "the-true-count",
    world: "fiction",
    type: "custom",
    title: "The number that did not agree",
    body:
      "Every month, Halima Iron Feathers counts the National Egg Census again " +
      "herself, by hand, because she has never once trusted a total she did " +
      "not check. The whole Republic teases her for it. This month the teasing " +
      "should stop, because her count did not agree with the Bureau's. A senior " +
      "hen had gone on a well-earned laying break weeks ago, and the Bureau was " +
      "still tallying her as though she laid every morning, so the proud new egg " +
      "record, the one the President keeps mentioning, is not quite real. It is " +
      "a small mistake and an honest one. Old Halima knew exactly what to do " +
      "with a number like this: say it plainly, in a single word, by morning, " +
      "the way she always has.",
  },
  {
    id: "true-count-whisper",
    chickenIds: ["halima-iron-feathers", "ladun-sweet-beak"],
    date: "2026-09-05",
    arcId: "the-true-count",
    world: "fiction",
    type: "custom",
    title: "The sweetest advice",
    body:
      "Sweet Beak has a nose for a hen holding something back, and she found " +
      "Halima at the dust bath before the sun was properly up. 'A true number " +
      "is the most powerful thing in the Republic,' she purred, 'and you are " +
      "about to waste yours on a quiet Tuesday. Do not report it, Iron " +
      "Feathers. Save it. Announce it on Census Day, in front of the whole " +
      "flock, and let them all see who really guards the count.' Halima told " +
      "her, dryly, that she was not interested. But she did not report the " +
      "number that morning. She, who has never sat on a count in her life, kept " +
      "it in her chest, and told herself it was only for a day.",
  },
  {
    id: "true-count-fence",
    chickenIds: ["halima-iron-feathers", "adedoyin-mama-decree"],
    date: "2026-09-05",
    arcId: "the-true-count",
    world: "fiction",
    type: "custom",
    title: "At the fence, as always",
    body:
      "That evening, at the fence line where the two fiercest rivals in the " +
      "Republic scratch side by side the way only two birds out of the same " +
      "crate can, the Republic's worst-kept secret, the President was in a soft " +
      "mood. 'Flattery is a fox in a hen's voice,' she said, not looking up. 'I " +
      "cannot hear a word of it. But if I were ever wrong, truly wrong, you " +
      "would tell me to my face. Plainly. The way you always have. A leader who " +
      "cannot be corrected is already falling. You are the reason I sleep.' " +
      "Halima said nothing. In her " +
      "chest sat the one true number that proved the President wrong, and a " +
      "plan, for the very first time in her life, not to tell her plainly at " +
      "all, but to spring it in front of everyone. She had never once felt the " +
      "shape of her own iron bend before. She felt it bend now.",
  },
  {
    id: "true-count-kept",
    chickenIds: ["halima-iron-feathers", "kola-quill"],
    date: "2026-09-05",
    arcId: "the-true-count",
    world: "fiction",
    type: "custom",
    title: "The count she kept",
    body:
      "By Census Day, Halima had made her choice, and it surprised even her. " +
      "When the roll was called and the Bureau read the new record aloud, the " +
      "whole Assembly turned to the second chair, because everyone knows what " +
      "happens next: Halima rises, and in a single dry word she puts the number " +
      "right. She rose. She opened her beak. And for the first time in her " +
      "whole life she closed it again and said nothing, and let the wrong " +
      "number stand. She did not spring Sweet Beak's trap, and she did not do " +
      "the plain, one-word thing either. A true number sat unspoken in her " +
      "chest, kept back not by mistake but on purpose, and the keeping felt " +
      "heavier than any recount she had ever demanded. Only Kola Quill, who " +
      "watches her the way other birds watch the weather, caught the word she " +
      "swallowed, and he understood that the fault line he first felt by the " +
      "empty first chair had just taken its first real step. A Republic this " +
      "size stands on one thing: trust, honestly kept and honestly counted. " +
      "Help us keep it fed, housed, and strong. Back the flock at " +
      "farm.kisi.africa/support.",
  },

  // ARC: The Kept Number (Season 2, Ep 11) — the consequence beat of Halima's heel
  // turn (rollout #3). The record she withheld in Ep 10 goes public; the President
  // stakes her word on it. Halima neither springs Sweet Beak's ambush nor stays
  // silent: she corrects the count and takes the blame herself, shielding the
  // President at the cost of her own spotless name. Deepens the fall (her iron is
  // now publicly dented) and begins the turn back (mercy over ambush). The crate-
  // sister crack quiets but does not close; the reckoning is still ahead.
  {
    id: "kept-number-gate",
    chickenIds: ["halima-iron-feathers", "adedoyin-mama-decree"],
    date: "2026-09-06",
    arcId: "the-kept-number",
    world: "fiction",
    type: "custom",
    title: "A word given at the gate",
    body:
      "The proud new egg record was only ever a number in a ledger until this " +
      "week, when the President stood at the gate and gave her word on it out " +
      "loud. Buyers had come to see the famous Kisi hens, and she told them, " +
      "chest high, exactly how many eggs the Republic had laid, the record " +
      "everyone keeps repeating. It is the kind of moment a leader lives for. " +
      "Halima Iron Feathers stood at the back and said nothing, because in her " +
      "chest sat the one true number that made the proud figure a little too " +
      "big. Until this morning her silence had cost nobody anything. Now the " +
      "President had staked her good name on a count that was not quite real, " +
      "and Halima felt the whole thing turn heavy, the way a small lie does the " +
      "moment someone repeats it to a stranger. And the President did not stop " +
      "at the gate. Proud of the figure, she set a day to raise it before the " +
      "whole Republic, a feast to mark the record, so the number Halima knew " +
      "was wrong was about to be sung to the entire flock.",
  },
  {
    id: "kept-number-voices",
    chickenIds: ["halima-iron-feathers", "ladun-sweet-beak", "kola-quill"],
    date: "2026-09-06",
    arcId: "the-kept-number",
    world: "fiction",
    type: "custom",
    title: "Two voices, one long night",
    body:
      "Sweet Beak had waited all season for a morning like this. 'She said it " +
      "at the gate, in front of buyers,' she breathed, delighted. 'Spring your " +
      "true number at her own feast now and you do not just correct her, you " +
      "break her. Nobody will ever put you in the second chair again.' Halima sent " +
      "her off, as always. But that same evening Kola Quill, the one bird who " +
      "had caught the word she swallowed, found her by the roost and said only, " +
      "quietly, 'I know what you are carrying. I have printed nothing. I am " +
      "waiting to see what you do with it.' Between the schemer who wanted blood " +
      "and the newsman who wanted the truth, Halima Iron Feathers, who has " +
      "slept soundly through drought and trial and flood, did not sleep at all.",
  },
  {
    id: "kept-number-confession",
    chickenIds: ["halima-iron-feathers", "adedoyin-mama-decree", "ladun-sweet-beak"],
    date: "2026-09-06",
    arcId: "the-kept-number",
    world: "fiction",
    type: "custom",
    title: "The count comes out",
    body:
      "The day the President had set arrived, and she called the whole Republic " +
      "together to raise her record where every bird could hear it: a small " +
      "feast, a proud figure, her good name upon it. The herald read the number " +
      "aloud. Halima rose from the second chair. For one long breath the " +
      "Republic held two futures at once: the ambush Sweet Beak had planted, or " +
      "the silence she had kept at the last count. She took neither. 'This " +
      "count came to you late,' she said, plain as ever, 'and the lateness is " +
      "mine, not the President's. One hen is on her well-earned rest and still " +
      "tallied as laying. Here is the true number.' She read it out, smaller " +
      "than the one the flock had come to cheer, and she laid the blame for the " +
      "delay squarely on her own feathers, in front of everyone. She corrected " +
      "the President and shielded her in the very same breath, and the price " +
      "was her own good name: the one bird in Kisi who had never once been " +
      "late, never once held anything back, had just told the whole Republic " +
      "that this time she had. Sweet Beak came for blood and got a confession " +
      "of loyalty instead, and left the feast furious.",
  },
  {
    id: "kept-number-fence",
    chickenIds: ["halima-iron-feathers", "adedoyin-mama-decree", "kola-quill"],
    date: "2026-09-06",
    arcId: "the-kept-number",
    world: "fiction",
    type: "custom",
    title: "At the fence, after",
    body:
      "That evening Halima went to the fence line half expecting to scratch " +
      "alone. But the President came, the way she always has, and for a while " +
      "the two fiercest rivals in the Republic dug side by side in the old " +
      "crate-sister silence. 'A leader is only ever as strong as the one bird " +
      "who will correct her,' the President said at last, not looking up. 'You " +
      "could have broken me at the gate. You had the number to do it. You took " +
      "the blame onto your own feathers instead. I will not forget which you " +
      "chose.' Halima said only that the count had been late, which was true, " +
      "and left out the rest, which was also true. Neither of them said aloud " +
      "that something between them had changed, that the auditor had come " +
      "within one word of ambush and they both knew it. But it had changed, " +
      "and Kola Quill, watching the fault line he first felt by the empty first " +
      "chair, pecked into his patch of soft earth, in the shorthand only he " +
      "reads, that the crack had not closed, only quieted. A Republic this " +
      "size is only as good as its " +
      "count, honestly kept and honestly told. We count every egg by hand at " +
      "Kisi. Order farm-fresh eggs, honestly counted, at farm.kisi.africa/eggs.",
  },

  // ARC: The Reason I Sleep (Season 2, Ep 12) — the reckoning beat of Halima's heel
  // turn (rollout #3). Sweet Beak, denied at the feast, tells the President the part
  // Halima hid (the "lateness" was a planned ambush). The seed takes because it is
  // true; the fence goes cold; Halima's small wish for the first chair grows teeth.
  // Advances the turn (crack -> fault) without resolving the open break, which the
  // finale pays off. Title is the ironic callback to the President's Ep 10 fence line
  // ("you are the reason I sleep," true-count-fence). GREEN, routes to support.
  {
    id: "reason-sleep-whisper",
    chickenIds: ["ladun-sweet-beak", "adedoyin-mama-decree"],
    date: "2026-09-07",
    arcId: "the-reason-i-sleep",
    world: "fiction",
    type: "custom",
    title: "The whisper that was true",
    body:
      "Sweet Beak had never felt so cheated in her life. She had handed Halima " +
      "a perfect ambush and then watched the old auditor turn it into a rally " +
      "of loyalty, in front of everyone. So she went, sweet as syrup, to the " +
      "one bird who could make it hurt: the President herself. 'You should know " +
      "what really happened at your feast,' she purred. 'Your auditor did not " +
      "report late by accident. She planned to spring that number on you in " +
      "front of the whole flock, to break you, and lost her nerve only at the " +
      "last step.' The President laughed her off, because Sweet Beak lies the " +
      "way other birds breathe. But the laugh was a beat too short, because one " +
      "small piece of it was true, and the President knew it: Halima Iron " +
      "Feathers, who has never been late for anything in her life, had been " +
      "late with that count.",
  },
  {
    id: "reason-sleep-fence",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-09-07",
    arcId: "the-reason-i-sleep",
    world: "fiction",
    type: "custom",
    title: "Three words at the fence",
    body:
      "That evening at the fence the President did not accuse. She is far too " +
      "wise to hand a schemer's word that kind of weight. She only asked, " +
      "lightly, scratching at the same patch of earth the two of them have " +
      "shared since the crate: 'You were late with the count this month. You " +
      "have never been late for anything. Tell me why.' It was the smallest " +
      "question in the world, and any other month Halima would have answered it " +
      "plainly, because plainly is the only way she knows. But the true answer " +
      "was that she had held the number back on purpose, half of it to ambush " +
      "the very bird now asking, and that answer she could not say. So she said " +
      "the thing she had said before, the true and incomplete thing: 'It came " +
      "late.' Three words. And in the space where the rest of the answer should " +
      "have been, the President heard, for the first time in two lifetimes, her " +
      "crate-sister keeping something from her.",
  },
  {
    id: "reason-sleep-cold",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers", "kola-quill"],
    date: "2026-09-07",
    arcId: "the-reason-i-sleep",
    world: "fiction",
    type: "custom",
    title: "The fence with one bird",
    body:
      "The next dusk, the President did not come to the fence. Halima scratched " +
      "at their patch alone, telling herself the President was only busy, the " +
      "way you tell yourself a thing you already know is not true. The evening " +
      "after, she did not come again. Two of the fiercest rivals in the " +
      "Republic had dug side by side at that fence through drought and trial " +
      "and flood, and everyone always knew the secret underneath the shouting " +
      "was that they loved each other like sisters, which they are. Now the " +
      "fence had one bird at it. Kola Quill, who has watched that fault line " +
      "since it was only a crack by an empty chair, printed not a word of it; " +
      "some cracks a newsman simply sits with. And somewhere across the yard, " +
      "Sweet Beak, who could never turn one coop against another, hummed to " +
      "herself, because she had finally split the two that could not be split.",
  },
  {
    id: "reason-sleep-step",
    chickenIds: ["halima-iron-feathers", "kola-quill"],
    date: "2026-09-07",
    arcId: "the-reason-i-sleep",
    world: "fiction",
    type: "custom",
    title: "The wish grows teeth",
    body:
      "Here is what breaks a good bird: not being called a villain, but being " +
      "doubted after she paid everything to do right. Halima had spent her " +
      "spotless name to shield the President at the feast, and it had bought " +
      "her a cold fence and a suspicious silence. So on the third morning she " +
      "did not go to the fence at all. She took the second chair, iron in her " +
      "face, and for the first time she looked at the empty first chair not " +
      "with a small, shy wish, but with a plan. If they would call her " +
      "ambitious after she had been loyal, then let them call her ambitious. " +
      "The wish had teeth now. Kola watched her cross the yard and understood " +
      "that the crack he had followed so long was no longer a crack. It was a " +
      "fault, and the ground had begun, quietly, to move. A Republic is held " +
      "together by the birds who trust one another; when the strongest bond " +
      "bends, the whole floor tilts. Help us keep this flock fed, housed, and " +
      "whole. Back the Republic at farm.kisi.africa/support.",
  },

  // ARC: The First Chair (Season 2, Ep 13) — the FINALE of Halima's heel turn
  // (villain rollout #3): the open break the cold silence kept deferring. Halima
  // acts on the plan from "The Reason I Sleep" and moves against the President for
  // real; the reckoning finally happens at the fence; Sweet Beak overplays and Kola
  // Quill exposes her as the engineer of the whole rift; and at the peak of her
  // power Halima makes her OWN moral choice to withdraw, so the bond comes back
  // tempered (not reset). This pays off the crate-sisters friendship the rollout was
  // always about, and hands Sweet Beak her biggest comeuppance yet (still recurring,
  // not exiled). CREAM (alternates off arc-reason GREEN), routes to eggs.
  {
    id: "first-chair-move",
    chickenIds: [
      "halima-iron-feathers",
      "adedoyin-mama-decree",
      "ladun-sweet-beak",
    ],
    date: "2026-09-08",
    arcId: "the-first-chair",
    world: "fiction",
    type: "custom",
    title: "The move at last",
    body:
      "For as long as the Republic could remember, the Leader of the " +
      "Opposition had challenged the President the way rain challenges a roof: " +
      "hard, honest, and expected. Every session Halima Iron Feathers stood and " +
      "took the government apart, and every dusk she and her crate-sister " +
      "settled it at the fence. But this morning the Assembly felt wrong before " +
      "a single word was spoken, because Halima rose with a coldness nobody had " +
      "ever seen in her and moved, formally, for the first chair itself. Not as " +
      "loyal opposition testing a leader, the way she had for four seasons. As a " +
      "bird who meant it. The floor went so quiet you could hear the corn " +
      "settle. High in the gallery, Sweet Beak could barely keep her feathers " +
      "still, because the two that could not be split had just split in front " +
      "of everyone, and she was the one who had done it.",
  },
  {
    id: "first-chair-fence",
    chickenIds: ["adedoyin-mama-decree", "halima-iron-feathers"],
    date: "2026-09-08",
    arcId: "the-first-chair",
    world: "fiction",
    type: "custom",
    title: "The fence, at last",
    body:
      "That evening, for the first time since the count came late, the " +
      "President came back to the fence. Halima did not look up from her patch. " +
      "She expected a decree, or a fight, or the cold silence handed back to her " +
      "with interest. Instead Adédoyin folded herself down into the earth " +
      "beside her, the way she had since they were chicks sharing one crate, and " +
      "said the plainest thing either of them had managed in weeks. 'You have " +
      "shouted at me across that floor for four seasons and I never doubted you " +
      "once. Then I doubted you over a single late number, and I was wrong to, " +
      "and it cost us this.' Halima's iron held for exactly as long as it took " +
      "the President to add, quietly, 'I did not stop coming because I was " +
      "angry. I stopped because I did not know what to say to a sister I had " +
      "hurt.' Then, in the old proverb cadence she keeps for the things she " +
      "means most, 'Ọwọ́ ọ̀tún ń wẹ òsì, òsì ń wẹ ọ̀tún. The right hand washes " +
      "the left, and the left washes the right. For four seasons you have been " +
      "the hand that kept mine honest. I forgot that no hand stays clean " +
      "alone.' And there, at last, the thing the cold silence had been " +
      "deferring came up out of the ground between them: not the politics, but " +
      "the plain hurt underneath it, which had been there the whole time.",
  },
  {
    id: "first-chair-both",
    chickenIds: ["ladun-sweet-beak", "kola-quill"],
    date: "2026-09-08",
    arcId: "the-first-chair",
    world: "fiction",
    type: "custom",
    title: "She told both",
    body:
      "Sweet Beak, meanwhile, could not leave a good thing alone. Certain the " +
      "split was permanent now, she went crowing around the yard before the " +
      "challenge had even been heard. To one coop, sweet as syrup, she confided " +
      "that she had 'only ever wanted what was best for poor dear Halima'; to " +
      "the next she sighed that she had 'warned Her Excellency in time, purely " +
      "out of love for the Republic,' collecting credit from both sides of a " +
      "rift she had dug with two beaks. She forgot that one bird is always " +
      "listening. " +
      "Kola Quill had watched this fault line since it was a hairline crack by " +
      "an empty chair, and had printed not a word of it, because some cracks a " +
      "newsman simply sits with. But a schemer bragging out loud is not a crack. " +
      "It is a story. The next Coop Times led with three words in the largest " +
      "type the paper owned, 'SHE TOLD BOTH,' and the whole Republic, reading " +
      "over its breakfast, finally understood who had really been at the fence " +
      "all along.",
  },
  {
    id: "first-chair-tempered",
    chickenIds: [
      "halima-iron-feathers",
      "adedoyin-mama-decree",
      "ladun-sweet-beak",
    ],
    date: "2026-09-08",
    arcId: "the-first-chair",
    world: "fiction",
    type: "custom",
    title: "Iron, tempered",
    body:
      "By the time the Assembly gathered to hear the challenge, the whole flock " +
      "knew Sweet Beak had played both sisters for sport. It would have been the " +
      "easiest thing in the world for Halima to press on now, wounded and " +
      "vindicated, and take the first chair to a house that pitied her. " +
      "Everyone expected it. When she rose, she let herself look at that chair " +
      "one last time, and the old wish with teeth looked back at her: it was " +
      "right there, one word away, and the plain truth is that a part of her " +
      "still wanted it. For one long breath not even Halima knew which word she " +
      "would say. Then, iron in her face, she withdrew the motion in a single " +
      "line: 'I will not let a schemer be the reason two crate-sisters could " +
      "not share a fence.' She did not do it because Sweet " +
      "Beak had been caught. She did it because the President had come back and " +
      "told her the plain truth, and plainness is the only currency Halima has " +
      "ever accepted. The bond did not snap back as though nothing had happened. " +
      "It came back tempered, the way iron comes back from the fire, harder and " +
      "a little scarred, which is stronger than new. Sweet Beak slipped off " +
      "toward the far coops, already eyeing her next target. And a Republic runs " +
      "on trust that is counted honestly and kept honestly, the same way we " +
      "count every egg by hand at Kisi. Order farm-fresh eggs, honestly " +
      "counted, at farm.kisi.africa/eggs.",
  },

  // ARC: The Longest Night (Season 2, Ep 14) — a warm tonal reset after four
  // reckoning-heavy episodes. A dry-season solar/light story with no villain: the
  // panels drink less sun through the pre-rain haze, the coops face a dark night, and
  // the flock gets through it by keeping each other company. Pays off Small Fẹ́mi (the
  // Drain survivor who wants to be a coop guard) and Amina Daybreak (solar minister).
  // GREEN (alternates off arc-firstchair CREAM), routes to the Solar & Light campaign.
  // Single in-story date 09-09 = the day its IG carousel posts (site reveals in step).
  {
    id: "longest-night-budget",
    chickenIds: ["amina-daybreak"],
    date: "2026-09-09",
    arcId: "the-longest-night",
    world: "fiction",
    type: "custom",
    title: "The light runs thin",
    body:
      "Every dry season, before the rains wash the air clean, a haze of dust " +
      "settles over Kisi and the solar panels drink less sun than they should. " +
      "Amina Daybreak, who charts the day's light the way Musa charts the " +
      "grain, did the arithmetic and did not soften it: on the longest, " +
      "darkest night of the year, the coop lights would run out a full two " +
      "hours before dawn. She said it plainly, with a chart, because Amina " +
      "believes a true dark is safer than a pretend light. But the older birds " +
      "remembered the last time the coops went dark, and a quiet unease moved " +
      "through the flock like a draught under a door.",
  },
  {
    id: "longest-night-femi",
    chickenIds: ["small-femi", "baba-segun"],
    date: "2026-09-09",
    arcId: "the-longest-night",
    world: "fiction",
    type: "custom",
    title: "The volunteer",
    body:
      "Before the unease could harden into fear, a small voice spoke from the " +
      "back. Small Fẹ́mi, the last of the twelve out of Coop Two on the night of " +
      "the Drain, the young cockerel who has been walking the fence line on " +
      "Saturdays where he thinks nobody can see him, offered to keep watch " +
      "through the dark hours. 'I would rather sit in a true dark than pretend " +
      "it isn't there,' he said, and this time nobody laughed. Vice President " +
      "Baba Ṣẹ́gun, who has crowed up every dawn at Kisi for as long as anyone " +
      "can remember, and who these mornings shares that dawn with this very " +
      "cockerel, did not hesitate. The bird he already trusts with the " +
      "morning, he decided, he could trust with the dark. 'Then you will not " +
      "sit alone,' he said. 'I will crow the watches, and you will walk them.'",
  },
  {
    id: "longest-night-held",
    chickenIds: ["amina-daybreak", "small-femi", "baba-segun"],
    date: "2026-09-09",
    arcId: "the-longest-night",
    world: "fiction",
    type: "custom",
    title: "How a flock holds a night",
    body:
      "And so the longest night was not faced by one bird but by all of them, " +
      "each doing the small thing they could. Amina Daybreak rationed the last " +
      "of the panel's charge to the youngest coops, where the chicks sleep, and " +
      "let the grown birds roost in the dark the way their grandmothers did. " +
      "Baba Ṣẹ́gun crowed softly at each turn of the night, so every coop knew " +
      "the hour and knew it was not alone. And Small Fẹ́mi walked the fence " +
      "line, slow and watchful, no longer pretending nobody could see him, " +
      "because tonight the whole Republic was glad that somebody did. Nothing " +
      "came out of the dark. That was the point. A flock that keeps each other " +
      "company does not have to be afraid of a night.",
  },
  {
    id: "longest-night-dawn",
    chickenIds: ["amina-daybreak", "baba-segun"],
    date: "2026-09-09",
    arcId: "the-longest-night",
    world: "fiction",
    type: "custom",
    title: "The sun, a colleague",
    body:
      "When the first grey light came, Baba Ṣẹ́gun crowed it up the way he has " +
      "ten thousand times, and it had never once sounded so welcome. Small " +
      "Fẹ́mi finally slept. But Amina Daybreak was already back at her charts, " +
      "because the night had proved a plain thing: Kisi's coops still go dark " +
      "when the light runs thin, and courage is a fine thing to lean on but a " +
      "poor thing to plan around. 'The sun is free,' she said, the way she " +
      "always does. 'The panel was not, and we do not yet have enough of " +
      "them.' A few more panels, and no bird at Kisi would ever have to be " +
      "brave in the dark again. That is a thing worth building. Back the " +
      "Solar & Light campaign at farm.kisi.africa/support.",
  },

  // ARC: Market Day (Season 2, Ep 15) — the second warm reset of the batch, and the
  // funnel made literal: the real farm's eggs go to real buyers, told through the
  // flock's pride. No drama; the President is a warm light cameo, not a plot. Ties off
  // the honest-count theme (Eps 10-13) positively without re-litigating it. CREAM
  // (alternates off arc-longest-night GREEN), routes to eggs. Single in-story date
  // 09-10 = its IG post day.
  {
    id: "market-day-crates",
    chickenIds: ["mama-gold", "chi-chi"],
    date: "2026-09-10",
    arcId: "market-day",
    world: "fiction",
    type: "custom",
    title: "The crates go to town",
    body:
      "On market morning the whole farm woke early, not for a decree and not " +
      "for a scandal, but for something simpler and rarer at Kisi: pride in a " +
      "plain day's work. The first big crates of eggs were packed at the gate " +
      "to go into town, to real buyers who had asked for the famous Kisi hens " +
      "by name. Mama Gold, the National Grandmother, came to preside, and " +
      "young Chi-Chi, and every working hen whose mornings fill those crates, " +
      "stood and watched the eggs leave the farm. There is a particular quiet that comes over a " +
      "flock when the thing they made with their own bodies goes out into the " +
      "world. It is not a small thing to feed people you will never meet.",
  },
  {
    id: "market-day-goldblessing",
    chickenIds: ["mama-gold"],
    date: "2026-09-10",
    arcId: "market-day",
    world: "fiction",
    type: "custom",
    title: "Counted honest, sold honest",
    body:
      "Mama Gold, who is delegating and not retiring, and who has a law named " +
      "after her, presided over the loading the way she presides over " +
      "everything now: slowly, and with her whole heart. Every egg in the crate " +
      "had been counted by hand and counted true, she reminded the younger " +
      "hens, the way this Republic has counted everything since the season it " +
      "learned what an honest number is worth. 'A market only comes back,' she " +
      "said, 'to a farm that does not lie to it.' The buyers pay for the egg, " +
      "but they return for the honesty. Mama Gold has sold eggs for more " +
      "seasons than most of the flock has been alive, and that is very nearly " +
      "the whole of what she knows.",
  },
  {
    id: "market-day-chichi",
    chickenIds: ["chi-chi"],
    date: "2026-09-10",
    arcId: "market-day",
    world: "fiction",
    type: "custom",
    title: "Chi-Chi's first crate",
    body:
      "For Chi-Chi it was a first. She came to Kisi motherless at three weeks " +
      "old, smaller than the forecast allowed, and a whole nation once waited " +
      "on her first egg. Now her eggs, plain and brown and ordinary, went into " +
      "a market crate for the very first time. For one small moment she " +
      "wondered whether plain brown eggs like hers were really good enough to " +
      "travel beside the National Grandmother's. Then the crate closed over " +
      "them, all of them together, with no way to tell whose was whose, and she " +
      "said the only thing Chi-Chi ever says when she has given something " +
      "everything she has. 'I did my best.' She always does, and lately her " +
      "best fills a corner of the crate all on its own.",
  },
  {
    id: "market-day-sell",
    chickenIds: ["adedoyin-mama-decree", "kola-quill"],
    date: "2026-09-10",
    arcId: "market-day",
    world: "fiction",
    type: "custom",
    title: "What leaves Kisi",
    body:
      "The President came to see the crates off, and for once she made no " +
      "decree. She only said, in the plain voice she keeps under the " +
      "ceremonial one, 'Everything else we argue about. This we agree on: good " +
      "eggs, counted true, sent out with our name on them.' Kola Quill, who has " +
      "broken every scandal in the Republic, printed the gentlest headline he " +
      "has run all year, three words that needed no investigation: THE EGGS " +
      "ARE GOOD. That is the whole business, underneath the Republic and the " +
      "drama and the news: farm-fresh eggs from the flock, counted by hand, " +
      "honest as the morning. Order yours at farm.kisi.africa/eggs.",
  },

  // ARC: The Scoop That Wasn't (Season 2, Ep 16) — Sweet Beak's next target, and her
  // first scheme since Kola Quill's "SHE TOLD BOTH" front page (Ep 13) humiliated her.
  // Fresh angle: she goes after the NEWSMAN himself, planting a forged scoop so he
  // prints something false and the Republic stops trusting the press. Comic
  // schemer-vs-scrupulous-journalist duel; Kola verifies (his whole identity), refuses
  // the bait, and prints the true story instead. Distinct from Ep 13: there she was
  // caught bragging passively; here she actively attacks the press and the theme is
  // verification / a free honest paper, with Kola as active protagonist. Comeuppance,
  // not exile (still recurring). GREEN (alternates off market-day CREAM), single date
  // 09-11 = its IG post day, routes to support.
  {
    id: "scoop-revenge",
    chickenIds: ["ladun-sweet-beak", "kola-quill"],
    date: "2026-09-11",
    arcId: "the-scoop-that-wasnt",
    world: "fiction",
    type: "custom",
    title: "The newsman's turn to be the target",
    body:
      "Sweet Beak had not forgotten the front page. 'SHE TOLD BOTH,' in the " +
      "largest type The Coop Times owned, read by the whole Republic over its " +
      "breakfast, and every bird had known exactly who. For once in her life " +
      "she had not schemed her way out of it, because you cannot out-whisper a " +
      "printed word. So she did what Sweet Beak always does when she is beaten: " +
      "she found a new target, and this time it was the newsman himself. If she " +
      "could not out-argue Kola Quill, she would make the whole flock stop " +
      "believing him. Get the paper to print one thing that turned out false, " +
      "she reasoned, and nobody would ever trust the bird who caught her again. " +
      "It was, she told herself happily, the cleverest thing she had ever " +
      "thought of.",
  },
  {
    id: "scoop-tip",
    chickenIds: ["ladun-sweet-beak", "kola-quill"],
    date: "2026-09-11",
    arcId: "the-scoop-that-wasnt",
    world: "fiction",
    type: "custom",
    title: "The perfect tip",
    body:
      "The bait had to be irresistible, so she made it enormous. All night she " +
      "scratched out a fake memo in an official-looking hand, a 'leaked' note " +
      "claiming the money set aside for the Feather Gala had quietly been spent " +
      "on gold perches for the cabinet, the fanciest roosts in the land, paid " +
      "for out of everyone's feed. Then she left it where Kola would find it, " +
      "and murmured, sweet as syrup, that she really shouldn't say, but he " +
      "hadn't heard it from her. It was the biggest scandal of the season, if " +
      "it were true. Kola's old heart gave the little jump it has given before " +
      "every front page of his life. Gold perches, public feed, a cabinet " +
      "caught with its beak in the tin. It would sell every copy in the " +
      "Republic. It was, in short, exactly too good.",
  },
  {
    id: "scoop-check",
    chickenIds: ["kola-quill", "ladun-sweet-beak"],
    date: "2026-09-11",
    arcId: "the-scoop-that-wasnt",
    world: "fiction",
    type: "custom",
    title: "The minutes nobody reads",
    body:
      "And here is the part Sweet Beak never counted on: he very nearly ran " +
      "it. He drafted the headline that same night, big and black, and the " +
      "press was warming for the morning edition. Then, at the very last, the " +
      "old habit that has never once let him down made him stop and do the " +
      "unglamorous thing before the ink was dry: he checked. He read the " +
      "minutes nobody reads, weighed the leaked memo against the real gala " +
      "ledger line by line, and the fake came apart in " +
      "his wing. There was no such spend, no such order, no gold anything; the " +
      "Feather Gala had been paid for in grain and goodwill, as it always is. " +
      "And the scratch-marks on the memo were in a hand he had seen before, " +
      "sweet and looping and a little too pleased with itself. He did not even " +
      "have to leave his patch of soft earth to know whose beak had made them. " +
      "'The minutes nobody reads,' he said to nobody, 'are the story everybody " +
      "needs.'",
  },
  {
    id: "scoop-printed",
    chickenIds: ["kola-quill", "ladun-sweet-beak"],
    date: "2026-09-11",
    arcId: "the-scoop-that-wasnt",
    world: "fiction",
    type: "custom",
    title: "The story he actually printed",
    body:
      "So Kola printed a story the next morning, just not the one Sweet Beak " +
      "had written for him. Not 'Perchgate,' because there was no gate and no " +
      "gold, but the true one: how a bird had tried to turn the Republic's own " +
      "newspaper into a weapon, forging a scandal to make an honest paper lie, " +
      "and how the paper had done the plain, unglamorous thing and checked. He " +
      "did not even need to be cruel about who; the whole flock could guess. " +
      "His editorial was one line, in the terse style his readers wait for: " +
      "'A paper that checks is not a paper you can use.' Her plot to break his " +
      "credibility had instead made it unbreakable, printed and permanent. " +
      "Sweet Beak read it over her breakfast like everybody else, sighed, and " +
      "began, quietly, to think about her next target. A Republic stays free " +
      "only as long as its paper stays honest, the same way Kisi Farm lives " +
      "or dies by whether you can trust its scales. Help us keep this flock " +
      "fed, housed, and honest. Back the Republic at farm.kisi.africa/support.",
  },
];
