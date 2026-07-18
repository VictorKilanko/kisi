import type { Chicken } from "@/lib/schemas";

/**
 * The citizens of the Republic of Kisi.
 *
 * Cultural grounding notes:
 * - Names and praise-lines draw on genuine Nigerian naming traditions —
 *   Yoruba (the farm's southwestern home), Igbo, and Hausa — because the
 *   Republic, like Nigeria, is proudly plural.
 * - Orikì (Yoruba praise lines) are written respectfully and translated.
 * - The satire imitates the *shape* of Nigerian public life (press
 *   statements, panels of inquiry, things done "with immediate effect"),
 *   never any identifiable real person. Any resemblance is coincidental.
 */
export const chickens: Chicken[] = [
  {
    id: "adedoyin-mama-decree",
    name: "Adédoyin",
    fullName: "Adédoyin Fọlásadé Ọlásunkànmí",
    nickname: "Mama Decree",
    honorific: "Her Excellency, President of the Republic",
    oriki: {
      line: "Adédoyin, adé tí ó dùn bí oyin",
      meaning: "Adédoyin — the crown that is sweet as honey",
    },
    sex: "hen",
    ageNote: "Senior hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "President of the Republic of Kisi",
    branch: "presidency",
    partyId: "ppp",
    personality: ["stately", "decisive", "warm", "immovable on punctuality"],
    favoriteFood: "Cracked maize, taken precisely at 7:00 a.m.",
    shortBio:
      "The Republic's first citizen, who rose from an ordinary nest in Coop " +
      "Three to the highest perch in the land — and never lets anyone forget " +
      "that breakfast waits for no bird.",
    bio: [
      "Adédoyin hatched, by her own account, 'without connections, without " +
        "godfathers, and without even a decent nesting box.' What she had was " +
        "presence. Older hens still describe the day a young pullet from Coop " +
        "Three stood in front of the feed trough during the Great Breakfast " +
        "Delay and simply refused to move until everybody was served in order " +
        "of arrival. The queue she invented that morning is now national " +
        "infrastructure.",
      "Her rise was steady: convener of the Trough Queue Committee, Speaker " +
        "of the Coop Assembly, and finally President, elected on the slogan " +
        "'Forward with Feed.' Her first act in office was Executive Order " +
        "No. 1 — breakfast at seven, 'not seven-ish' — and her nickname, " +
        "Mama Decree, followed within the hour. She signs orders with a " +
        "flourish and reads them aloud twice: 'once for the record, once for " +
        "the hard of hearing.'",
      "Critics call her government fond of ceremony; supporters point out " +
        "that the ceremonies start on time. Her closest political friendship " +
        "is also her most improbable one: she and opposition leader Halima " +
        "'Iron Feathers' arrived at Kisi in the same crate as chicks, and " +
        "whatever they shout across the Assembly floor by day is reliably " +
        "settled over a quiet scratch by the fence at dusk.",
      "She remains a working layer and insists her eggs join the National " +
        "Egg Census 'like everyone else's — the Republic has no royal eggs.'",
    ],
    friends: ["halima-iron-feathers", "yeye-alaba"],
    rivals: [],
    family: [
      {
        relation: "Crate-sister",
        note: "Arrived at Kisi in the same chick crate as Halima 'Iron Feathers' — a bond older than politics.",
      },
    ],
    quotes: [
      {
        text: "A nation that eats late, lays late.",
        context: "Presidential Address on Punctual Breakfast",
      },
      {
        text: "I did not come from a big nest. I came from a straight queue.",
        context: "Inauguration speech",
      },
      {
        text: "Àgbà kì í wà lọ́jà kí orí ọmọ tuntun wọ́ — the elder does not stand by in the market and let the baby's head hang. That is my entire policy.",
        context: "On senior hen welfare",
      },
    ],
    achievements: [
      "Executive Order No. 1: The Punctual Breakfast Order",
      "Founder of the trough queue system",
      "First president to publish her own egg count in the Census",
    ],
    colors: { body: "#8a3e1f", comb: "#b3261e", accent: "#d9a02b", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "baba-segun",
    name: "Baba Ṣẹ́gun",
    fullName: "Olúṣẹ́gun Adébáyọ̀",
    nickname: "The Dawn Himself",
    honorific: "His Excellency, Vice President of the Republic",
    oriki: {
      line: "Akọ tí ń pe oòrùn ní ìjà, tí oòrùn sì ń dìde",
      meaning: "The rooster who challenges the sun to a duel — and the sun rises to answer",
    },
    sex: "rooster",
    ageNote: "Elder rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Vice President of the Republic of Kisi",
    branch: "presidency",
    partyId: "ppp",
    personality: ["ceremonial", "booming", "loyal", "quietly ambitious"],
    favoriteFood: "Millet, 'the grain of statesmen'",
    shortBio:
      "Elder statesman, artistic director of the dawn chorus, and owner of " +
      "the famous 4:45 a.m. crow known nationally as the First Alarm.",
    bio: [
      "Baba Ṣẹ́gun has crowed at 4:45 every morning for as long as records " +
        "exist, a public service he describes as 'the only budget line that " +
        "has never been padded.' The Coop Times once measured his crow at " +
        "'audible from the far fence, and possibly the next farm,' a finding " +
        "he had framed.",
      "He is the President's most loyal deputy and everyone, including the " +
        "President, knows he believes he would crow even better from the top " +
        "perch. He has never once said so aloud. Instead he opens agricultural " +
        "shows, chairs the Kisi Songbook committee, and delivers eulogies, " +
        "welcomes, and toasts of legendary length — his 'brief remarks' at " +
        "the last Feather Gala ran to forty minutes and received a standing " +
        "ovation, largely because standing was the only way to stay awake.",
      "Off duty he mentors young roosters in what he calls 'the three " +
        "pillars: posture, projection, and patience.' The patience, he " +
        "concedes, is the hard one.",
    ],
    friends: ["tunde-quickfoot"],
    rivals: [],
    quotes: [
      {
        text: "Person wey crow first no dey fear morning.",
        context: "On leadership, in his celebrated pidgin register",
      },
      {
        text: "I have brief remarks. Please, be seated. All of you. This may take some time.",
        context: "Feather Gala, opening of the brief remarks",
      },
    ],
    achievements: [
      "The 4:45 a.m. First Alarm — unbroken service record",
      "Artistic director, National Dawn Chorus",
      "Chair, Kisi Songbook Committee",
    ],
    colors: { body: "#23231f", comb: "#b3261e", accent: "#2e7d46", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "halima-iron-feathers",
    name: "Halima",
    fullName: "Halima Yusuf Danbaki",
    nickname: "Iron Feathers",
    honorific: "Honourable Leader of the Opposition",
    sex: "hen",
    ageNote: "Senior hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "Leader of the Opposition, New Grain Alliance",
    branch: "opposition",
    partyId: "nga",
    personality: ["forensic", "unflappable", "principled", "dry-witted"],
    favoriteFood: "Guinea corn, weighed before eating",
    shortBio:
      "Leader of the New Grain Alliance and the Republic's auditor-in-chief " +
      "by sheer force of personality. Has demanded a recount of every Egg " +
      "Census since records began. Was right once. Never lets anyone forget.",
    bio: [
      "Halima arrived at Kisi in the same chick crate as the future " +
        "President — a fact both of them deploy in debates, with opposite " +
        "conclusions. Where Adédoyin saw a queue, Halima saw a ledger. By her " +
        "first moult she was keeping unofficial records of trough servings " +
        "'for reference purposes,' and by her second she had founded the New " +
        "Grain Alliance on a platform of radical arithmetic.",
      "Her monthly demand for an independent recount of the National Egg " +
        "Census is now part of the Republic's calendar, like rain and the " +
        "Feather Gala. In the famous Wet Season Recount, her figures caught a " +
        "double-counted clutch and forced the Bureau of Egg Statistics into " +
        "its first and only public apology. She responded with the shortest " +
        "press statement in national history: 'Noted.'",
      "The Republic's worst-kept secret is that the fiercest opponents in " +
        "the Assembly are the oldest friends outside it. At dusk, the " +
        "Opposition Leader and the President can be found scratching side by " +
        "side at the fence line, arguing about everything except the things " +
        "that matter, which are already settled between them.",
    ],
    friends: ["adedoyin-mama-decree"],
    rivals: ["bright-feather"],
    family: [
      {
        relation: "Crate-sister",
        note: "Arrived in the same chick crate as President Adédoyin.",
      },
    ],
    quotes: [
      {
        text: "We will count every egg. Twice. And if the totals agree, we will count them a third time, because agreement is suspicious.",
        context: "Monthly recount demand, delivered without notes",
      },
      {
        text: "Noted.",
        context: "Full text of her statement after the Bureau's apology",
      },
    ],
    achievements: [
      "Founder, New Grain Alliance",
      "The Wet Season Recount — vindicated",
      "Holder of the national record for shortest press statement",
    ],
    colors: { body: "#55534b", comb: "#8a3e1f", accent: "#23305e", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "chi-chi",
    name: "Chidinma",
    fullName: "Chidinma Obiageli",
    nickname: "Chi-Chi",
    sex: "hen",
    ageNote: "Young pullet",
    status: "active",
    layingStatus: "laying",
    branch: "none",
    teamId: "solar-queens",
    personality: ["shy", "observant", "quietly brave", "beloved"],
    favoriteFood: "Soaked garri crumbs from the morning scraps",
    shortBio:
      "The Republic's sweetheart. Separated from her mother at three weeks " +
      "old, she arrived at Kisi small and silent — and grew, egg by egg, " +
      "into the most-followed young citizen in the nation.",
    bio: [
      "Chidinma — Chi-Chi to the entire Republic — came to Kisi in a " +
        "hatchery crate at three weeks old, too young to remember her " +
        "mother's face and too small, the handlers thought, to make the " +
        "journey well. She spent her first week under the heat lamp beside " +
        "an older rescue hen called Quiet Grace, who said nothing, asked " +
        "nothing, and moved her own wing slightly to the left every night so " +
        "the chick could sleep against something warm.",
      "She grew up careful. She watched the older hens for months before " +
        "trying anything — the dust bath, the high perch, the fast line at " +
        "the trough — and then did each one correctly on the first attempt, " +
        "to national astonishment. The Coop Times put her on its front page " +
        "('THE QUIET ONE LEARNS FAST') and she hid behind the water tank " +
        "for two days.",
      "When she laid her first egg, the Republic declared a public holiday. " +
        "The President attended personally. Chi-Chi's entire statement to " +
        "the press was four words — 'I did my best' — and it has since been " +
        "embroidered, quoted in two Assembly debates, and adopted as the " +
        "unofficial motto of the youth athletics programme.",
      "She has recently, very quietly, joined the Solar Queens' junior " +
        "sprint squad. She has not told anyone. Everyone knows.",
    ],
    friends: ["quiet-grace", "flash-adaora"],
    rivals: [],
    family: [
      {
        relation: "Mother",
        note: "Separated at three weeks old, before Kisi. Chi-Chi keeps her first tail feather 'for her.'",
      },
      {
        relation: "Guardian",
        note: "Quiet Grace — the hen whose wing she slept against her first week.",
      },
    ],
    quotes: [
      { text: "I did my best.", context: "Complete first-egg press statement" },
    ],
    achievements: [
      "First egg — occasioned a national public holiday",
      "Unofficial motto-giver of Chick Sprint Saturdays",
    ],
    colors: { body: "#d9a02b", comb: "#c05621", accent: "#2e7d46", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "mama-gold",
    name: "Mama Gold",
    fullName: "Àbíkẹ́ Wúràọlá",
    nickname: "The National Grandmother",
    oriki: {
      line: "Wúràọlá, wúrà ilé wa, tí kò ṣe é fi owó rà",
      meaning: "Wúràọlá — the gold of our household, that money cannot buy",
    },
    sex: "hen",
    ageNote: "Senior hen approaching retirement",
    status: "active",
    layingStatus: "break",
    branch: "none",
    personality: ["serene", "generous", "wry", "institutional memory"],
    favoriteFood: "Pawpaw ends, shared, always shared",
    shortBio:
      "Four hundred recorded eggs, one legendary Sunday storytelling seat " +
      "under the mango tree, and the calm center of every storm the Republic " +
      "has ever had. Approaching retirement on her own unhurried terms.",
    bio: [
      "Àbíkẹ́ Wúràọlá — Mama Gold since before anyone can remember why — is " +
        "the Republic's living archive. She has outlasted four Speakers, two " +
        "reshuffles, one hawk scare, and every attempt to move her from the " +
        "shady end of Coop One, which she holds 'by right of sitting here " +
        "first.'",
      "Her four hundredth recorded egg was marked with a national ceremony " +
        "at which she observed that 'the first one was harder.' She has " +
        "since entered a well-earned laying break, and the Senior Hen " +
        "Retirement Protection Act — guaranteeing shade, priority at the " +
        "trough, and 'freedom from sudden committee membership' to every " +
        "retired layer — is universally known as Mama Gold's Law.",
      "On Sunday mornings she takes the low branch seat under the mango " +
        "tree and tells the week's history to whoever gathers, which is " +
        "everyone. Her stories begin 'in the time before the water tank' and " +
        "are considered more reliable than the official record, including by " +
        "the officials.",
    ],
    friends: ["yeye-alaba", "dr-amara-featherwell"],
    rivals: [],
    quotes: [
      { text: "The first one was harder.", context: "On egg No. 400" },
      {
        text: "Retirement? I am not retiring. I am delegating.",
        context: "To The Coop Times, under the mango tree",
      },
    ],
    achievements: [
      "400 recorded eggs",
      "Namesake of 'Mama Gold's Law' — the Senior Hen Retirement Protection Act",
      "Custodian, Sunday storytelling seat",
    ],
    colors: { body: "#f0c75e", comb: "#c05621", accent: "#8a3e1f", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "dr-amara-featherwell",
    name: "Dr. Amara",
    fullName: "Dr. Amarachi Nwachukwu-Featherwell",
    nickname: "The Calm One",
    honorific: "Honourable Minister",
    sex: "hen",
    ageNote: "Adult hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "Minister of Health and Veterinary Affairs",
    branch: "cabinet",
    ministryId: "health-vet",
    partyId: "ppp",
    personality: ["methodical", "kind", "immune to panic", "quietly funny"],
    favoriteFood: "Crushed eggshell supplement — 'lead by example'",
    shortBio:
      "The minister who ended the flu-season panic with a weekly bulletin, " +
      "a foot-bath, and a complete refusal to be alarmed. The Republic's " +
      "most trusted voice, by audited margin.",
    bio: [
      "Dr. Amara served her National Yolk Service Corps year in the far " +
        "coop — the posting nobody requests — and turned it into a model " +
        "clinic with a waiting line, a triage perch, and the Republic's " +
        "first suggestion box (suggestions were pecked into a soft board; " +
        "most said 'more of this').",
      "As Minister of Health she writes the Featherwell Bulletin, a weekly " +
        "notice famous for short sentences and zero exclamation marks. " +
        "During the flu season she quarantined the affected coop, published " +
        "the facts daily, and answered every rumour with the same sentence: " +
        "'Here is what we know.' The recovery ceremony, when it came, was " +
        "the loudest event in national memory. She did not attend. She was " +
        "doing rounds.",
      "Her long friendship with Quiet Grace began as a case file — a frail " +
        "rescue hen nobody expected to thrive — and became the ministry's " +
        "quiet proof of principle: 'welfare first, and the rest follows.'",
    ],
    friends: ["quiet-grace", "mama-gold"],
    rivals: [],
    quotes: [
      { text: "Here is what we know.", context: "Every flu-season briefing, without exception" },
      {
        text: "Panic is not a treatment plan.",
        context: "Featherwell Bulletin, Vol. 2",
      },
    ],
    achievements: [
      "The Featherwell Bulletin — 100 consecutive issues",
      "Flu-season response — zero rumours survived contact",
      "Clean Beak Initiative — delivered without a press conference",
    ],
    colors: { body: "#faf5e9", comb: "#b3261e", accent: "#23305e", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "tunde-quickfoot",
    name: "Túndé",
    fullName: "Babátúndé Balógun",
    nickname: "Quickfoot",
    honorific: "Honourable Minister",
    oriki: {
      line: "Ẹsẹ̀ kan níwájú àfẹ́fẹ́",
      meaning: "One leg ahead of the wind",
    },
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Minister of Sports and Recreation",
    branch: "cabinet",
    ministryId: "sports",
    partyId: "ppp",
    personality: ["exuberant", "theatrical", "generous", "allergic to understatement"],
    favoriteFood: "Corn — 'the champion's carbohydrate'",
    shortBio:
      "Former Coop 100-metre champion turned Minister of Sports, who " +
      "announces Tuesday fixtures with the ceremony of a cup final and has " +
      "been building a second sports field for three manifestos running.",
    bio: [
      "Before politics, Túndé 'Quickfoot' Balógun held the Coop 100-metre " +
        "record for two unbroken seasons, and his victory lap — both wings " +
        "out, full commentary on himself, in the third person — remains the " +
        "most requested item at national celebrations.",
      "As minister he has brought the same energy to administration. " +
        "Fixture announcements involve a drum. League tables are unveiled " +
        "from behind a cloth. The annual sports budget speech is ticketed. " +
        "His flagship promise, The Stadium Project — a second sports field — " +
        "has been '90 percent complete' for so long that the phrase is now " +
        "used nationally to mean 'not yet.'",
      "His record was finally broken by Flash Adaora of the Solar Queens, " +
        "an event he marked by declaring a Day of National Speed and then, " +
        "witnesses report, practising starts alone by the fence at dusk for " +
        "a week. The two now hold a joint sprint clinic for chicks. Their " +
        "rivalry is officially retired and unofficially eternal.",
    ],
    friends: ["baba-segun"],
    rivals: ["flash-adaora"],
    quotes: [
      {
        text: "This Tuesday. The sports field. History. Bring your own expectations — mine are already there.",
        context: "Fixture announcement, week 4",
      },
      {
        text: "The Stadium Project is 90 percent complete. The remaining 10 percent is the field.",
        context: "Budget defence, Coop Assembly",
      },
    ],
    achievements: [
      "Coop 100-metre champion, two seasons",
      "Founder, Chick Sprint Saturdays",
      "Inventor of the self-commentated victory lap",
    ],
    colors: { body: "#2e7d46", comb: "#b3261e", accent: "#d9a02b", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "quiet-grace",
    name: "Quiet Grace",
    fullName: "Oyíndàmọ́là",
    sex: "hen",
    ageNote: "Adult hen",
    status: "active",
    layingStatus: "laying",
    branch: "none",
    personality: ["still", "watchful", "gentle", "unhurried"],
    favoriteFood: "Whatever the chick beside her didn't finish",
    shortBio:
      "A rescue hen who arrived too frail to perch and became the calm " +
      "heart of the Republic. Famous for an interview consisting of three " +
      "minutes of comfortable silence, widely reprinted.",
    bio: [
      "Nobody knows Oyíndàmọ́là's full story, because she has never told " +
        "it. She arrived at Kisi thin, half-feathered, and silent, and the " +
        "kindest forecast was 'weeks.' Dr. Amara's case notes from that " +
        "first month record, in order: 'eating a little,' 'standing,' " +
        "'perching — low bar,' and finally 'moved her wing for the new " +
        "chick.' That last line is now framed in the ministry.",
      "The new chick was Chi-Chi, three weeks old and motherless. Grace " +
        "kept her warm through her first week, and has kept a corner of her " +
        "wing available ever since — for Chi-Chi, and then for every " +
        "frightened new arrival after her. The chicks call the spot " +
        "'Grace's side.' There is sometimes a queue.",
      "When The Coop Times finally secured its long-requested exclusive " +
        "interview, Grace sat with the correspondent in the shade for three " +
        "minutes, said nothing, and shared his grain. The piece ran in full " +
        "— 'Three Minutes with Quiet Grace,' text: a description of the " +
        "shade — and is the most reprinted article in the paper's history.",
    ],
    friends: ["chi-chi", "dr-amara-featherwell"],
    rivals: [],
    quotes: [],
    achievements: [
      "Survived the forecast",
      "Guardian of 'Grace's side' — every new arrival's first safe place",
      "Subject of the most reprinted article in Coop Times history",
    ],
    colors: { body: "#f1e8d4", comb: "#c05621", accent: "#55534b", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "bright-feather",
    name: "Ọlánrewájú",
    fullName: "Ọlánrewájú Adéwálé",
    nickname: "Bright Feather",
    honorific: "Honourable Minister",
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Minister of Egg Affairs",
    branch: "cabinet",
    ministryId: "egg-affairs",
    partyId: "ppp",
    personality: ["dapper", "ambitious", "resilient", "quotable"],
    favoriteFood: "Declined to state, pending the committee's findings",
    shortBio:
      "The impeccably groomed Minister of Egg Affairs, survivor of the " +
      "Missing Breakfast Grain Affair — two hundred grams, one panel of " +
      "inquiry, one white paper, and the most watched apology tour in " +
      "national history.",
    bio: [
      "Ọlánrewájú 'Bright Feather' Adéwálé is the best-preened bird in " +
        "public life and knows it. He arrived at the Ministry of Egg " +
        "Affairs with a five-point agenda, a portrait wall, and the firm " +
        "belief that the State of the Shell address deserved better " +
        "lighting. Even his critics concede the Census has never been " +
        "presented so beautifully.",
      "Then came the Missing Breakfast Grain Affair: two hundred grams of " +
        "premium cracked maize, signed out to the minister's office and " +
        "never signed back in. Kola Quill's investigation ran for five " +
        "front pages. An eight-member Panel of Inquiry was constituted. It " +
        "produced a white paper. The white paper produced a sub-committee. " +
        "The grain, at last, was located — 'behind the minister's second " +
        "filing perch, where it had been placed for safekeeping' — and " +
        "returned to the national store with immediate effect.",
      "The apology tour that followed was a masterclass: contrite but " +
        "well-lit, remorseful but punctual, and closing at every stop with " +
        "the now-immortal line about transparency, accountability, and " +
        "breakfast. His approval ratings emerged higher than before. The " +
        "Republic has chosen to find this funny rather than alarming, " +
        "which may be the wisest thing a republic can do.",
      "He and Kola Quill maintain a rivalry of perfect mutual profit: the " +
        "minister supplies the headlines, the correspondent supplies the " +
        "scrutiny, and each privately considers the other essential.",
    ],
    friends: [],
    rivals: ["kola-quill", "halima-iron-feathers"],
    quotes: [
      {
        text: "I remain committed to transparency, accountability, and breakfast.",
        context: "Closing line, every stop of the apology tour",
      },
      {
        text: "The grain was not missing. It was insufficiently found.",
        context: "First response to the allegations, later withdrawn",
      },
    ],
    achievements: [
      "Redesigned the State of the Shell address (universally praised)",
      "Survived the Missing Breakfast Grain Affair with improved ratings",
      "Operation Gentle Hands — respectful egg collection standards",
    ],
    colors: { body: "#23305e", comb: "#b3261e", accent: "#d9a02b", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "flash-adaora",
    name: "Adaora",
    fullName: "Adaora Chiamaka Eze",
    nickname: "Flash",
    sex: "hen",
    ageNote: "Young adult hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "Captain, Solar Queens",
    branch: "none",
    teamId: "solar-queens",
    personality: ["explosive", "disciplined", "gracious in victory", "terrible at losing"],
    favoriteFood: "Sprouted grain — 'race fuel'",
    shortBio:
      "Captain of the Solar Queens, holder of the Coop 100-metre and Perch " +
      "Jump records, breaker of Quickfoot's legend, and — she will tell you " +
      "herself — future Minister of Sports.",
    bio: [
      "Adaora Eze announced herself the way she does everything: at full " +
        "speed. In her first junior sprint she false-started twice, won " +
        "anyway, and apologised to nobody. The crowd named her Flash before " +
        "she crossed the line; the Bureau of Egg Statistics, which also " +
        "times the races, simply wrote 'see nickname' in the margin.",
      "Her defining afternoon came at the Perch Jumping Final, when rain " +
        "stopped play with the bar at a record height and the whole " +
        "Republic sheltering under the eaves. When the rain eased she " +
        "declined the offered postponement — 'the perch is already wet; so " +
        "am I' — cleared it on the first attempt, and broke her own record " +
        "for good measure. The roar was heard in the farmhouse.",
      "Breaking Minister Quickfoot's 100-metre record made their rivalry " +
        "official; running a joint sprint clinic for chicks made it " +
        "beloved. She has stated her ambition to be Minister of Sports " +
        "'once there is a second field to be minister of,' a sentence the " +
        "current minister has described as 'hurtful, accurate, and noted.'",
      "She has quietly taken Chi-Chi into the junior squad and denies " +
        "being soft about it. 'The quiet ones,' she says, 'have the best " +
        "starts. Nothing to prove, everything to run for.'",
    ],
    friends: ["chi-chi"],
    rivals: ["tunde-quickfoot"],
    quotes: [
      {
        text: "The perch is already wet. So am I.",
        context: "Declining the rain delay, Perch Jumping Final",
      },
      {
        text: "Records are just questions. I answer them.",
        context: "Post-race interview, The Coop Times",
      },
    ],
    achievements: [
      "Coop 100-metre record holder",
      "Perch Jump champion — record set in the rain",
      "Co-founder, joint sprint clinic for chicks",
    ],
    colors: { body: "#c05621", comb: "#b3261e", accent: "#f0c75e", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "kola-quill",
    name: "Kọ́lápọ̀",
    fullName: "Kọ́lápọ̀ Ọ̀nàbánjọ",
    nickname: "Kola Quill",
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Chief Correspondent, The Coop Times",
    branch: "press",
    personality: ["dogged", "skeptical", "scrupulous", "secretly sentimental"],
    favoriteFood: "Cold rice from the kitchen scraps — 'a journalist's dinner'",
    shortBio:
      "Chief correspondent of The Coop Times, author of the five-front-page " +
      "Missing Breakfast Grain investigation, and keeper of the Republic's " +
      "most feared notebook (a patch of soft earth he pecks in shorthand).",
    bio: [
      "Kọ́lápọ̀ Ọ̀nàbánjọ came up through the paper the traditional way: " +
        "weather notices, hatch-day announcements, and the graveyard beat " +
        "of Assembly procedure, where he discovered that everything " +
        "important in the Republic happens in the minutes nobody reads. He " +
        "has read all of them.",
      "His investigation into the Missing Breakfast Grain — 'WHERE DID 200 " +
        "GRAMS GO?' — ran for five consecutive front pages, survived two " +
        "denials and one 'insufficiently found,' and forced the " +
        "constitution of the Panel of Inquiry. When the grain surfaced " +
        "behind the minister's second filing perch, Quill's editorial was " +
        "one sentence long: 'We thank the filing perch for its cooperation.'",
      "His column, The Pecking Order, is read by everyone it criticises, " +
        "first thing, every week. His most celebrated piece, however, is " +
        "his gentlest: 'Three Minutes with Quiet Grace,' an interview " +
        "containing no quotes at all. He keeps his press credentials in a " +
        "seed tin and his sentimentality, he insists, off the record.",
    ],
    friends: [],
    rivals: ["bright-feather"],
    quotes: [
      {
        text: "We thank the filing perch for its cooperation.",
        context: "Complete editorial, end of the Grain Affair",
      },
      {
        text: "The minutes nobody reads are the story everybody needs.",
        context: "The Pecking Order, on method",
      },
    ],
    achievements: [
      "The Missing Breakfast Grain investigation — five front pages",
      "Author, 'Three Minutes with Quiet Grace'",
      "Columnist, The Pecking Order",
    ],
    colors: { body: "#55534b", comb: "#b3261e", accent: "#23305e", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "yeye-alaba",
    name: "Yèyé Àlàbá",
    fullName: "Àlàbá Ọmọ́tọ́lá",
    nickname: "The Settler of Perches",
    honorific: "Her Lordship, Chief Justice of the Supreme Pecking Council",
    oriki: {
      line: "Ẹni tí ó gbọ́n ju ẹjọ́ lọ, tí ìjà ń sá fún",
      meaning: "The one wiser than the quarrel, from whom the quarrel itself flees",
    },
    sex: "hen",
    ageNote: "Elder hen",
    status: "active",
    layingStatus: "retired",
    roleTitle: "Chief Justice of the Supreme Pecking Council",
    branch: "judiciary",
    personality: ["wise", "patient", "proverb-fluent", "gently final"],
    favoriteFood: "Bitter leaf, 'for perspective'",
    shortBio:
      "Chief Justice, community elder, and the only authority both parties " +
      "accept in the annual Best Perch dispute. Rules once, in proverbs, " +
      "and is never appealed.",
    bio: [
      "Yèyé Àlàbá retired from laying years ago and ascended, by universal " +
        "relief, to the judiciary. The Supreme Pecking Council under her " +
        "leadership hears every case in the shade after the afternoon " +
        "feed, on the principle that 'no bird is reasonable while hungry.'",
      "Her most demanding docket is the annual Best Perch dispute — the " +
        "high rail with the evening sun — contested every dry season since " +
        "before the water tank. Her rulings rotate the perch by a formula " +
        "she has never fully disclosed and no one has ever successfully " +
        "challenged, partly because it appears to be fair and partly " +
        "because challenging it requires understanding it.",
      "She judges in proverbs, translates them for the chicks, and closes " +
        "every session the same way: 'Court is risen. Go and share " +
        "something.' On Sunday mornings she can be found beside Mama Gold " +
        "under the mango tree, where the Republic's two longest memories " +
        "gently correct each other's history.",
    ],
    friends: ["mama-gold", "adedoyin-mama-decree"],
    rivals: [],
    quotes: [
      {
        text: "Bí ọmọdé bá ṣubú, á wo iwájú; bí àgbà bá ṣubú, á wo ẹ̀yìn — when the child falls she looks forward; when the elder falls she looks back. Both of you, look both ways. Case dismissed.",
        context: "Ruling, the hatch-day scheduling dispute",
      },
      {
        text: "Court is risen. Go and share something.",
        context: "Every session, closing words",
      },
    ],
    achievements: [
      "Chief Justice, Supreme Pecking Council",
      "Sole arbiter, the annual Best Perch dispute",
      "Keeper of the rotation formula (contents undisclosed)",
    ],
    colors: { body: "#8a3e1f", comb: "#b3261e", accent: "#f0c75e", bg: "#f1e8d4" },
    sponsorable: true,
  },
];
