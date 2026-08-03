import type { Chicken } from "@/lib/schemas";

/**
 * The citizens of the Republic of Kisi.
 *
 * Cultural grounding notes:
 * - Names and praise-lines draw on genuine Nigerian naming traditions:
 *   Yoruba (the farm's southwestern home), Igbo, and Hausa, because the
 *   Republic, like Nigeria, is proudly plural.
 * - Orikì (Yoruba praise lines) are written respectfully and translated.
 * - The satire imitates the *shape* of Nigerian public life (press
 *   statements, panels of inquiry, things done "with immediate effect"),
 *   never any identifiable real person. Any resemblance is coincidental.
 */
export const chickens: Chicken[] = [
  {
    id: "adedoyin-mama-decree",
    tribe: "isa-brown",
    name: "Adédoyin",
    fullName: "Adédoyin Fọlásadé Ọlásunkànmí",
    nickname: "Mama Decree",
    honorific: "Her Excellency, President of the Republic",
    oriki: {
      line: "Adédoyin, adé tí ó dùn bí oyin",
      meaning: "Adédoyin, the crown that is sweet as honey",
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
      "Three to the highest perch in the land, and never lets anyone forget " +
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
        "No. 1, breakfast at seven, 'not seven-ish', and her nickname, " +
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
        "Egg Census 'like everyone else's, the Republic has no royal eggs.'",
    ],
    friends: ["halima-iron-feathers", "yeye-alaba"],
    rivals: [],
    family: [
      {
        relation: "Crate-sister",
        note: "Arrived at Kisi in the same chick crate as Halima 'Iron Feathers', a bond older than politics.",
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
        text: "Àgbà kì í wà lọ́jà kí orí ọmọ tuntun wọ́, the elder does not stand by in the market and let the baby's head hang. That is my entire policy.",
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
    tribe: "noiler",
    name: "Baba Ṣẹ́gun",
    fullName: "Olúṣẹ́gun Adébáyọ̀",
    nickname: "The Dawn Himself",
    honorific: "His Excellency, Vice President of the Republic",
    oriki: {
      line: "Akọ tí ń pe oòrùn ní ìjà, tí oòrùn sì ń dìde",
      meaning: "The rooster who challenges the sun to a duel, and the sun rises to answer",
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
        "welcomes, and toasts of legendary length, his 'brief remarks' at " +
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
      "The 4:45 a.m. First Alarm, unbroken service record",
      "Artistic director, National Dawn Chorus",
      "Chair, Kisi Songbook Committee",
    ],
    colors: { body: "#23231f", comb: "#b3261e", accent: "#2e7d46", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "halima-iron-feathers",
    tribe: "noiler",
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
        "President, a fact both of them deploy in debates, with opposite " +
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
      "The Wet Season Recount, vindicated",
      "Holder of the national record for shortest press statement",
    ],
    colors: { body: "#55534b", comb: "#8a3e1f", accent: "#23305e", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "chi-chi",
    tribe: "isa-brown",
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
      "old, she arrived at Kisi small and silent, and grew, egg by egg, " +
      "into the most-followed young citizen in the nation.",
    bio: [
      "Chidinma, Chi-Chi to the entire Republic, came to Kisi in a " +
        "hatchery crate at three weeks old, too young to remember her " +
        "mother's face and too small, the handlers thought, to make the " +
        "journey well. She spent her first week under the heat lamp beside " +
        "an older rescue hen called Quiet Grace, who said nothing, asked " +
        "nothing, and moved her own wing slightly to the left every night so " +
        "the chick could sleep against something warm.",
      "She grew up careful. She watched the older hens for months before " +
        "trying anything, the dust bath, the high perch, the fast line at " +
        "the trough, and then did each one correctly on the first attempt, " +
        "to national astonishment. The Coop Times put her on its front page " +
        "('THE QUIET ONE LEARNS FAST') and she hid behind the water tank " +
        "for two days.",
      "When she laid her first egg, the Republic declared a public holiday. " +
        "The President attended personally. Chi-Chi's entire statement to " +
        "the press was four words, 'I did my best', and it has since been " +
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
        note: "Quiet Grace, the hen whose wing she slept against her first week.",
      },
    ],
    quotes: [
      { text: "I did my best.", context: "Complete first-egg press statement" },
    ],
    achievements: [
      "First egg, occasioned a national public holiday",
      "Unofficial motto-giver of Chick Sprint Saturdays",
    ],
    colors: { body: "#d9a02b", comb: "#c05621", accent: "#2e7d46", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "mama-gold",
    tribe: "isa-brown",
    name: "Mama Gold",
    fullName: "Àbíkẹ́ Wúràọlá",
    nickname: "The National Grandmother",
    oriki: {
      line: "Wúràọlá, wúrà ilé wa, tí kò ṣe é fi owó rà",
      meaning: "Wúràọlá, the gold of our household, that money cannot buy",
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
      "Àbíkẹ́ Wúràọlá, Mama Gold since before anyone can remember why, is " +
        "the Republic's living archive. She has outlasted four Speakers, two " +
        "reshuffles, one hawk scare, and every attempt to move her from the " +
        "shady end of Coop One, which she holds 'by right of sitting here " +
        "first.'",
      "Her four hundredth recorded egg was marked with a national ceremony " +
        "at which she observed that 'the first one was harder.' She has " +
        "since entered a well-earned laying break, and the Senior Hen " +
        "Retirement Protection Act, guaranteeing shade, priority at the " +
        "trough, and 'freedom from sudden committee membership' to every " +
        "retired layer, is universally known as Mama Gold's Law.",
      "On Sunday mornings she takes the low branch seat under the mango " +
        "tree and tells the week's history to whoever gathers, which is " +
        "everyone. Her stories begin 'in the time before the water tank' and " +
        "are considered more reliable than the official record, including by " +
        "the officials.",
    ],
    friends: ["yeye-alaba", "dr-amara-featherwell", "sisi-ngozi"],
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
      "Namesake of 'Mama Gold's Law', the Senior Hen Retirement Protection Act",
      "Custodian, Sunday storytelling seat",
    ],
    colors: { body: "#f0c75e", comb: "#c05621", accent: "#8a3e1f", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "dr-amara-featherwell",
    tribe: "noiler",
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
    favoriteFood: "Crushed eggshell supplement, 'lead by example'",
    shortBio:
      "The minister who ended the flu-season panic with a weekly bulletin, " +
      "a foot-bath, and a complete refusal to be alarmed. The Republic's " +
      "most trusted voice, by audited margin.",
    bio: [
      "Dr. Amara served her National Yolk Service Corps year in the far " +
        "coop, the posting nobody requests, and turned it into a model " +
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
      "Her long friendship with Quiet Grace began as a case file, a frail " +
        "rescue hen nobody expected to thrive, and became the ministry's " +
        "quiet proof of principle: 'welfare first, and the rest follows.'",
    ],
    friends: ["quiet-grace", "mama-gold", "pete-okpara"],
    rivals: [],
    quotes: [
      { text: "Here is what we know.", context: "Every flu-season briefing, without exception" },
      {
        text: "Panic is not a treatment plan.",
        context: "Featherwell Bulletin, Vol. 2",
      },
    ],
    achievements: [
      "The Featherwell Bulletin, 100 consecutive issues",
      "Flu-season response, zero rumours survived contact",
      "Clean Beak Initiative, delivered without a press conference",
    ],
    colors: { body: "#faf5e9", comb: "#b3261e", accent: "#23305e", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "tunde-quickfoot",
    tribe: "noiler",
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
    favoriteFood: "Corn, 'the champion's carbohydrate'",
    shortBio:
      "Former Coop 100-metre champion turned Minister of Sports, who " +
      "announces Tuesday fixtures with the ceremony of a cup final and has " +
      "been building a second sports field for three manifestos running.",
    bio: [
      "Before politics, Túndé 'Quickfoot' Balógun held the Coop 100-metre " +
        "record for two unbroken seasons, and his victory lap, both wings " +
        "out, full commentary on himself, in the third person, remains the " +
        "most requested item at national celebrations.",
      "As minister he has brought the same energy to administration. " +
        "Fixture announcements involve a drum. League tables are unveiled " +
        "from behind a cloth. The annual sports budget speech is ticketed. " +
        "His flagship promise, The Stadium Project, a second sports field, " +
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
        text: "This Tuesday. The sports field. History. Bring your own expectations, mine are already there.",
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
    tribe: "isa-brown",
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
        "'perching, low bar,' and finally 'moved her wing for the new " +
        "chick.' That last line is now framed in the ministry.",
      "The new chick was Chi-Chi, three weeks old and motherless. Grace " +
        "kept her warm through her first week, and has kept a corner of her " +
        "wing available ever since, for Chi-Chi, and then for every " +
        "frightened new arrival after her. The chicks call the spot " +
        "'Grace's side.' There is sometimes a queue.",
      "When The Coop Times finally secured its long-requested exclusive " +
        "interview, Grace sat with the correspondent in the shade for three " +
        "minutes, said nothing, and shared his grain. The piece ran in full" +
        ", 'Three Minutes with Quiet Grace,' text: a description of the " +
        "shade, and is the most reprinted article in the paper's history.",
    ],
    friends: ["chi-chi", "dr-amara-featherwell", "small-femi"],
    rivals: [],
    quotes: [],
    achievements: [
      "Survived the forecast",
      "Guardian of 'Grace's side', every new arrival's first safe place",
      "Subject of the most reprinted article in Coop Times history",
    ],
    colors: { body: "#f1e8d4", comb: "#c05621", accent: "#55534b", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "bright-feather",
    tribe: "isa-brown",
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
      "Missing Breakfast Grain Affair, two hundred grams, one panel of " +
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
        "The grain, at last, was located, 'behind the minister's second " +
        "filing perch, where it had been placed for safekeeping', and " +
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
      "Operation Gentle Hands, respectful egg collection standards",
    ],
    colors: { body: "#23305e", comb: "#b3261e", accent: "#d9a02b", bg: "#f0c75e" },
    sponsorable: true,
  },
  {
    id: "flash-adaora",
    tribe: "noiler",
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
    favoriteFood: "Sprouted grain, 'race fuel'",
    shortBio:
      "Captain of the Solar Queens, holder of the Coop 100-metre and Perch " +
      "Jump records, breaker of Quickfoot's legend, and, she will tell you " +
      "herself, future Minister of Sports.",
    bio: [
      "Adaora Eze announced herself the way she does everything: at full " +
        "speed. In her first junior sprint she false-started twice, won " +
        "anyway, and apologised to nobody. The crowd named her Flash before " +
        "she crossed the line; the Bureau of Egg Statistics, which also " +
        "times the races, simply wrote 'see nickname' in the margin.",
      "Her defining afternoon came at the Perch Jumping Final, when rain " +
        "stopped play with the bar at a record height and the whole " +
        "Republic sheltering under the eaves. When the rain eased she " +
        "declined the offered postponement, 'the perch is already wet; so " +
        "am I', cleared it on the first attempt, and broke her own record " +
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
      "Perch Jump champion, record set in the rain",
      "Co-founder, joint sprint clinic for chicks",
    ],
    colors: { body: "#c05621", comb: "#b3261e", accent: "#f0c75e", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "kola-quill",
    tribe: "isa-brown",
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
    favoriteFood: "Cold rice from the kitchen scraps, 'a journalist's dinner'",
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
      "His investigation into the Missing Breakfast Grain, 'WHERE DID 200 " +
        "GRAMS GO?', ran for five consecutive front pages, survived two " +
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
      "The Missing Breakfast Grain investigation, five front pages",
      "Author, 'Three Minutes with Quiet Grace'",
      "Columnist, The Pecking Order",
    ],
    colors: { body: "#55534b", comb: "#b3261e", accent: "#23305e", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "yeye-alaba",
    tribe: "isa-brown",
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
      "Her most demanding docket is the annual Best Perch dispute, the " +
        "high rail with the evening sun, contested every dry season since " +
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
        text: "Bí ọmọdé bá ṣubú, á wo iwájú; bí àgbà bá ṣubú, á wo ẹ̀yìn, when the child falls she looks forward; when the elder falls she looks back. Both of you, look both ways. Case dismissed.",
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
  {
    id: "pete-okpara",
    tribe: "noiler",
    name: "Pete Okpara",
    fullName: "Peter Chukwuemeka Okpara",
    nickname: "The Fence Walker",
    honorific: "Honourable Minister",
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Minister of Security",
    branch: "cabinet",
    ministryId: "coop-security",
    partyId: "ppp",
    personality: ["blunt", "watchful", "protective", "allergic to excuses"],
    favoriteFood: "Whatever is left after everyone else has eaten",
    shortBio:
      "The Republic's Minister of Security, appointed the week after Bantu " +
      "died. He walks the fence line twice a night, counts every bird by " +
      "name, and has promised the flock he will not lose another one.",
    bio: [
      "Pete Okpara spent years as an ordinary citizen with an unusual " +
        "habit: he could not sleep until he had walked the whole perimeter " +
        "and looked at it himself. Neighbours found this funny. The night " +
        "the monitor lizard came through the drainage channel, Okpara was " +
        "the one already awake, already outside, already shouting.",
      "He was too late for Bantu. He has never once said otherwise, and he " +
        "refuses the word 'blameless' when it is offered to him. When the " +
        "President appointed him Minister of Security four days later, his " +
        "acceptance speech was two sentences long: 'I know what the job " +
        "is. Ask me again in a year.'",
      "Since then the ministry has changed shape around him. The nightly " +
        "headcount is now read aloud, by name, at the door of every coop, " +
        "his idea, and unpopular for about three days until the flock " +
        "realised what it felt like to hear your own name confirmed safe. " +
        "The drainage channel is barred. The fence line is patrolled in " +
        "two shifts. Sergeant Danladi runs the second one.",
      "He keeps Bantu's whistle-feather in his office. He does not discuss " +
        "it. Everyone knows it is there.",
    ],
    friends: ["sergeant-danladi", "dr-amara-featherwell"],
    rivals: [],
    quotes: [
      {
        text: "I know what the job is. Ask me again in a year.",
        context: "Complete acceptance speech on appointment as Minister of Security",
      },
      {
        text: "Count them by name. A number can be wrong quietly. A name cannot.",
        context: "Instituting the nightly roll call",
      },
      {
        text: "It is still out there. That is the whole briefing.",
        context: "Weekly security update to the Assembly",
      },
    ],
    achievements: [
      "Instituted the nightly roll call by name",
      "Barred the drainage channel and the east fence gap",
      "Two-shift perimeter patrol, running since the week of the attack",
    ],
    colors: { body: "#23305e", comb: "#b3261e", accent: "#55534b", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "bantu",
    tribe: "noiler",
    name: "Bantu",
    fullName: "Bantu",
    nickname: "The Night Whistle",
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "memorial",
    layingStatus: "n-a",
    roleTitle: "Night Watchman of Coop Two",
    branch: "none",
    personality: ["steady", "gentle", "funny", "brave when it counted"],
    favoriteFood: "Palm kernel pieces, cracked slowly, always shared",
    shortBio:
      "Night watchman of Coop Two, who woke the whole flock the night the " +
      "monitor lizard came through the drainage channel, and stood between " +
      "it and the chicks until they were clear. The Republic has not been " +
      "the same since.",
    bio: [
      "Bantu was not a minister, an athlete, or a member of any party. He " +
        "was the bird who checked the door. Every night for as long as " +
        "anyone can remember, he made the last round of Coop Two, looked " +
        "at the latch, and settled on the low rail nearest the entrance, " +
        "the coldest spot in the building, and the closest one to the " +
        "outside.",
      "He had a whistle in his call, a soft two-note thing he used to " +
        "settle nervous chicks. Parents used it as a lullaby. Half the " +
        "young birds in the Republic learned to sleep to that sound.",
      "On the night of the attack he heard the drainage grate move before " +
        "anyone else did. He gave the alarm, not the soft whistle, the " +
        "other call, the one nobody had ever heard him use, and he did " +
        "not leave the doorway of Coop Two while the chicks went out the " +
        "far side. Every one of them got out. Sergeant Danladi and Pete " +
        "Okpara reached him within a minute. A minute was not enough.",
      "He is buried under the mango tree, at the shady end, by unanimous " +
        "resolution of the Coop Assembly, the only vote in the Republic's " +
        "history taken without debate. Mama Gold spoke. The Chief Justice " +
        "closed with the words she uses for every session, and for once " +
        "nobody moved when she said them: 'Go and share something.'",
      "The Republic marks his rest with a whistle at dusk. If you are " +
        "visiting this page, the flock would be glad of a word from you.",
    ],
    friends: ["sergeant-danladi"],
    rivals: [],
    family: [
      {
        relation: "The chicks of Coop Two",
        note: "All twelve of them, who got out the far side. They are why.",
      },
    ],
    quotes: [
      {
        text: "Door's good. Go to sleep.",
        context: "Every night, to anyone still awake in Coop Two",
      },
    ],
    achievements: [
      "Night Watchman of Coop Two, every night, without being asked",
      "Twelve chicks out the far side",
      "The whistle at dusk, now a national custom",
    ],
    colors: { body: "#55534b", comb: "#8a3e1f", accent: "#f0c75e", bg: "#f1e8d4" },
    sponsorable: false,
  },
  {
    id: "sergeant-danladi",
    tribe: "noiler",
    name: "Sergeant Danladi",
    fullName: "Danladi Sulaiman",
    nickname: "Second Shift",
    sex: "rooster",
    ageNote: "Young adult rooster",
    status: "recovering",
    layingStatus: "n-a",
    roleTitle: "Coop Guard, Second Shift",
    branch: "agency",
    personality: ["dutiful", "quiet", "stubborn", "carrying something"],
    favoriteFood: "Dry maize, eaten standing up, on duty",
    shortBio:
      "The guard who reached Coop Two first and has walked the same fence " +
      "line every night since, including the nights the Ministry of Health " +
      "formally ordered him to rest.",
    bio: [
      "Danladi was Bantu's shift partner. The younger bird took the far " +
        "end of the perimeter, the older one took the coops, and they met " +
        "at the water tank halfway through the night to complain about the " +
        "cold. This arrangement lasted a long time and suited them both.",
      "He was at the water tank when the alarm went up. He got a wing " +
        "injury going through the gap in the fence rather than around it, " +
        "which Dr. Amara has described in her bulletin as 'the sort of " +
        "decision I would like never to have to treat again, and would " +
        "expect him to make again.'",
      "He is on light duties and ignores this roughly twice a week. The " +
        "Minister of Security has stopped pretending to be surprised and " +
        "has instead simply shortened his patrol route, which Danladi has " +
        "noticed and has chosen, for now, not to mention.",
      "He does the whistle at dusk. He has not missed one.",
    ],
    friends: ["bantu", "pete-okpara"],
    rivals: [],
    quotes: [
      {
        text: "We met at the water tank. Every night. That was the arrangement.",
        context: "To The Coop Times, on his shift partner",
      },
      { text: "I am fine. The fence is not.", context: "Declining light duties, repeatedly" },
    ],
    achievements: [
      "First responder on the night of the attack",
      "Keeper of the whistle at dusk",
      "Second Shift, unbroken",
    ],
    colors: { body: "#8a3e1f", comb: "#b3261e", accent: "#2e7d46", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "sisi-ngozi",
    tribe: "isa-brown",
    name: "Sisi Ngozi",
    fullName: "Ngozi Adaeze Okonkwo",
    nickname: "The Mango Tree Keeper",
    sex: "hen",
    ageNote: "Adult hen",
    status: "active",
    layingStatus: "laying",
    branch: "none",
    personality: ["warm", "practical", "unsentimental in public", "the first to arrive"],
    favoriteFood: "Groundnut pieces",
    shortBio:
      "Keeper of the mango tree ground where Bantu rests, organiser of the " +
      "dusk whistle, and the bird who quietly makes sure no grieving chick " +
      "in the Republic sits by themselves.",
    bio: [
      "Sisi Ngozi organised the burial in under an afternoon, which anyone " +
        "who has tried to organise anything in the Republic will recognise " +
        "as a miracle of administration. She did it by not asking " +
        "permission from a single committee.",
      "She keeps the ground under the mango tree, clears it, marks it, " +
        "and sits there most evenings, which means that anyone who wants " +
        "to sit there and say nothing has company available and no " +
        "obligation to use it. Several of the Coop Two chicks have taken " +
        "this up as a habit.",
      "She is brisk about all of it in public and will change the subject " +
        "if thanked. Her one concession to ceremony is the dusk whistle, " +
        "which she and Sergeant Danladi hold together, and which she has " +
        "described, once, as 'the flock saying goodnight to him back.'",
    ],
    friends: ["mama-gold", "cindy"],
    rivals: [],
    quotes: [
      {
        text: "Nobody sits under that tree alone unless they want to. That is the only rule.",
        context: "On the mango tree ground",
      },
      {
        text: "The flock says goodnight to him back. That is all it is.",
        context: "On the dusk whistle",
      },
    ],
    achievements: [
      "Organised the burial under the mango tree in a single afternoon",
      "Keeper of the mango tree ground",
      "Co-founder of the dusk whistle",
    ],
    colors: { body: "#c05621", comb: "#b3261e", accent: "#2e7d46", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "small-femi",
    tribe: "noiler",
    name: "Small Fẹ́mi",
    fullName: "Olúfẹ́mi",
    nickname: "The Far Side",
    sex: "rooster",
    ageNote: "Chick",
    status: "active",
    layingStatus: "not-yet",
    branch: "none",
    personality: ["small", "watchful", "braver than he thinks", "asks hard questions"],
    favoriteFood: "Crumbled maize, softened",
    shortBio:
      "One of the twelve chicks who went out the far side of Coop Two. He " +
      "was the last one through, and he is the one who asks the questions " +
      "the adults are avoiding.",
    bio: [
      "Small Fẹ́mi was the last of the twelve out of Coop Two, because he " +
        "went back for a smaller chick who had frozen. He does not think " +
        "this is worth mentioning and becomes irritable when it is " +
        "mentioned, which is often.",
      "He sleeps badly and has been given a spot at Grace's side, which he " +
        "accepted on the condition that everyone stop making a fuss. He has " +
        "asked Minister Okpara three separate times, in public, whether the " +
        "lizard is still out there. He has received the same answer each " +
        "time, and he has said each time that he prefers a true answer to a " +
        "kind one.",
      "He has announced that he intends to be a coop guard. Sergeant " +
        "Danladi has told him to finish growing first. He has agreed to " +
        "this in principle and is already walking the fence line on " +
        "Saturdays, at a distance, where he thinks nobody can see him.",
    ],
    friends: ["quiet-grace"],
    rivals: [],
    quotes: [
      {
        text: "I would rather have a true answer than a kind one.",
        context: "To the Minister of Security, in the Assembly gallery",
      },
      { text: "I'm not small. I'm the far side.", context: "On his nickname" },
    ],
    achievements: [
      "Went back for the chick who froze",
      "Last of the twelve out the far side",
      "Saturday fence walker (unofficial, and everybody can see him)",
    ],
    colors: { body: "#d9a02b", comb: "#c05621", accent: "#23305e", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "musa-grainkeeper",
    tribe: "noiler",
    name: "Musa",
    fullName: "Musa Aliyu",
    nickname: "The Grainkeeper",
    honorific: "Honourable Minister",
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Minister of Feed and Agriculture",
    branch: "cabinet",
    ministryId: "feed-agriculture",
    partyId: "ppp",
    personality: ["thrifty", "watchful", "unbudgeable on damp", "quietly generous"],
    favoriteFood: "Whatever is closest to spoiling, eaten first so nothing is wasted",
    shortBio:
      "The rooster who guarded the feed store so well the Presidency handed " +
      "him the whole portfolio. Defender of the National Feed Budget, sworn " +
      "enemy of damp, and the only minister who audits the grain by smell.",
    bio: [
      "Musa spent years as keeper of the raised feed store, a post nobody " +
        "wanted and he never left. He learned the grain the way a doctor " +
        "learns a patient: by weight, by smell, by the exact sound dry maize " +
        "makes against the wall. When damp got into the store one rainy " +
        "season, he caught it in a single morning and lost not one sack. The " +
        "story reached the Presidency, and the acting arrangement over Feed " +
        "and Agriculture quietly ended.",
      "As Minister he treats the National Feed Budget as a sacred trust and a " +
        "personal insult in equal measure. He defends every line of it in the " +
        "Assembly, then goes home and rewraps the store against the rain " +
        "himself. His seasonal forage plan, posted at the trough, is followed " +
        "by birds who could not name their own Assembly member. The Noiler, " +
        "who range far and eat well, claimed him before the Isa-Brown had " +
        "finished reading his budget.",
    ],
    friends: ["emeka-drainmaster"],
    rivals: [],
    quotes: [
      { text: "A full store is a calm nation.", context: "Budget defence, Coop Assembly" },
      { text: "Damp is the only opposition I fear.", context: "To The Coop Times" },
    ],
    achievements: [
      "Saved the wet-season store without losing a sack",
      "Author of the seasonal forage plan",
      "Defender of the National Feed Budget, line by line",
    ],
    colors: { body: "#8a3e1f", comb: "#b3261e", accent: "#d9a02b", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "emeka-drainmaster",
    tribe: "noiler",
    name: "Emeka",
    fullName: "Emeka Nwosu",
    nickname: "The Drain Marshal",
    honorific: "Honourable Minister",
    sex: "rooster",
    ageNote: "Adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Minister of Water and Environmental Affairs",
    branch: "cabinet",
    ministryId: "water-environment",
    partyId: "ppp",
    personality: ["methodical", "tireless", "haunted by standing water", "dryly funny"],
    favoriteFood: "Clean water, first and often",
    shortBio:
      "The minister who reads the sky like a ledger. He hardened the drainage " +
      "the monitor lizard came up, keeps every trough honest, and has never " +
      "once been caught upstream of a problem.",
    bio: [
      "Emeka came up through the rainy seasons, when the yard floods and a " +
        "farm learns who actually watches the water. He mapped every low spot " +
        "at Kisi in his head and most of them in the mud, and when the monitor " +
        "lizard came up the drainage channel, it was his channel survey that " +
        "told Security exactly where to bar it. He does not mention this. " +
        "Sergeant Danladi mentions it for him.",
      "As Minister he runs the troughs like a national accounts office: " +
        "refilled on schedule, scrubbed on schedule, tested by a bird who does " +
        "not trust schedules. His rainy-season drainage watch is the least " +
        "glamorous office in the Republic and, on the nights it storms, the " +
        "busiest. The Clean Water and Healthy Feathers Act is his to deliver, " +
        "trough by trough, and he intends to.",
    ],
    friends: ["musa-grainkeeper"],
    rivals: [],
    quotes: [
      { text: "Water is patient. So am I.", context: "On the rainy-season drainage watch" },
      {
        text: "I would rather be bored in the dry season than busy in a flood.",
        context: "Ministry briefing",
      },
    ],
    achievements: [
      "Channel survey that guided the drainage hardening",
      "Trough testing and refill discipline",
      "Clean Water and Healthy Feathers Act rollout",
    ],
    colors: { body: "#23305e", comb: "#b3261e", accent: "#2e7d46", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "amina-daybreak",
    tribe: "noiler",
    name: "Amina",
    fullName: "Amina Sadiq",
    nickname: "Daybreak",
    honorific: "Honourable Minister",
    sex: "hen",
    ageNote: "Adult hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "Minister of Energy and Solar Affairs",
    branch: "cabinet",
    ministryId: "energy-solar",
    partyId: "ppp",
    personality: ["early", "sunny", "precise about time", "gently relentless"],
    favoriteFood: "The first grain of the morning, in the first light",
    shortBio:
      "Up before the Vice President and proud of it. Amina runs the " +
      "solar-light schedule, settles the eternal lights-out argument by " +
      "arithmetic, and treats the sunrise as a colleague.",
    bio: [
      "Amina wakes before the dawn chorus and considers this the only honest " +
        "way to run an energy ministry. She learned the panels by watching " +
        "them, charting which caught the sun first and which sulked behind the " +
        "mango tree, and she can tell you the day's light budget the way Musa " +
        "can tell you the grain. When the lights flickered one dry season, she " +
        "found the loose connection before the Assembly finished forming a " +
        "committee about it.",
      "Her great national project is Solar Schedule Harmonisation, the long " +
        "war over whether lights-out should follow the sun or the Speaker's " +
        "bedtime. Amina, who follows the sun, is winning it slowly and with " +
        "charts. The Noiler claim her for her early hours; she claims the " +
        "sunrise for everybody.",
    ],
    friends: ["sade-griot"],
    rivals: [],
    quotes: [
      { text: "The sun is free. The panel was not.", context: "Energy education campaign" },
      {
        text: "I do not wake early. I simply never agreed to wake late.",
        context: "To the Vice President, who took it well",
      },
    ],
    achievements: [
      "Found the loose connection before the committee formed",
      "Charts the daily light budget",
      "Leading Solar Schedule Harmonisation, slowly, with charts",
    ],
    colors: { body: "#d9a02b", comb: "#b3261e", accent: "#f0c75e", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "sade-griot",
    tribe: "isa-brown",
    name: "Sadé",
    fullName: "Sadé Ogúnlèsì",
    nickname: "The Griot",
    honorific: "Honourable Minister",
    oriki: {
      line: "Ohùn tí ń jí ìlú, tí kò jẹ́ kí ìtàn kú",
      meaning: "The voice that wakes the town, and will not let the story die",
    },
    sex: "hen",
    ageNote: "Adult hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "Minister of Culture and Entertainment",
    branch: "cabinet",
    ministryId: "culture",
    partyId: "ppp",
    personality: ["theatrical", "warm", "keeper of songs", "never forgets a verse"],
    favoriteFood: "Honeyed grain, saved for after a performance",
    shortBio:
      "The Republic's memory, set to music. Sadé runs the Songbook, the " +
      "Feather Gala, and the mango-tree histories, and can silence the " +
      "Assembly with a single opening note.",
    bio: [
      "Sadé began as the bird who remembered the words when everyone else " +
        "hummed. She carries the Republic's praise-poetry, the hatch-day " +
        "songs, the verse for the first rain and the longer verse for the last " +
        "goodbye, and she has never let a story die for want of a singer. When " +
        "Mama Gold tells the week's history under the mango tree, it is Sadé " +
        "who sets it to a tune by Sunday evening.",
      "As Minister she guards the Kisi Songbook, the national anthology whose " +
        "first page is, by unbreakable tradition, the Vice President's 4:45 " +
        "a.m. arrangement. She and the Vice President argue about tempo the " +
        "way old friends argue about everything, which is to say fondly and " +
        "forever. A nation that sings together, she insists, has already " +
        "agreed on something.",
    ],
    friends: ["amina-daybreak", "cindy"],
    rivals: [],
    quotes: [
      {
        text: "A nation that sings together has already agreed on something.",
        context: "Opening the Feather Gala",
      },
      {
        text: "Forget the argument. Remember the song.",
        context: "On why the histories are sung, not filed",
      },
    ],
    achievements: [
      "Keeper of the Kisi Songbook",
      "Set the mango-tree histories to music",
      "Ran the Feather Gala to a standing ovation",
    ],
    colors: { body: "#c05621", comb: "#b3261e", accent: "#f0c75e", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "tade-foraging",
    tribe: "noiler",
    name: "Tadé",
    fullName: "Tadé Ojó",
    nickname: "The Foraging Master",
    honorific: "Honourable Minister",
    sex: "rooster",
    ageNote: "Young adult rooster",
    status: "active",
    layingStatus: "n-a",
    roleTitle: "Minister of Youth and Chick Development",
    branch: "cabinet",
    ministryId: "youth-chick",
    partyId: "ppp",
    personality: ["patient", "encouraging", "endlessly re-explaining", "secretly competitive"],
    favoriteFood: "Whatever the chicks left, so none of it is wasted",
    shortBio:
      "The teacher every chick remembers. Tadé runs Foraging 101, pairs the " +
      "young with the wise, and has walked more nervous chicks to their first " +
      "meal than anyone but Taco.",
    bio: [
      "Tadé found his calling by accident, when a lost chick followed him for " +
        "a whole afternoon and he could not bring himself to shake it off. He " +
        "taught it to find the good spot behind the water tank instead, and by " +
        "evening there were four chicks, and by the next week there was a " +
        "curriculum. Foraging 101 is now the Republic's best-attended class, " +
        "its final exam gloriously simple: find the good spot before your " +
        "instructor does.",
      "As Minister he pairs every chick with a senior hen and every senior hen " +
        "with a reason to get up in the morning. He argues, gently and " +
        "constantly, that the Young Chick Representation Bill is right and that " +
        "the ministry should one day be led by an actual young chicken, once " +
        "one of them stops eating the exam. The Noiler start their young early " +
        "on the range; Tadé made that a national programme.",
    ],
    friends: ["ronke-owambe"],
    rivals: [],
    quotes: [
      {
        text: "Find the good spot before your instructor does. That is the whole exam.",
        context: "Foraging 101, final assessment",
      },
      { text: "Every chick counts. I counted them myself.", context: "Youth registry launch" },
    ],
    achievements: [
      "Founder of Foraging 101",
      "Architect of the mentorship pairings",
      "Champion of the Young Chick Representation Bill",
    ],
    colors: { body: "#2e7d46", comb: "#b3261e", accent: "#d9a02b", bg: "#f1e8d4" },
    sponsorable: true,
  },
  {
    id: "ronke-owambe",
    tribe: "isa-brown",
    name: "Rọ́nkẹ́",
    fullName: "Rọ́nkẹ́ Adéyẹmí",
    nickname: "Mama Owambe",
    honorific: "Honourable Minister",
    sex: "hen",
    ageNote: "Adult hen",
    status: "active",
    layingStatus: "laying",
    roleTitle: "Minister of Social Affairs and Flock Relations",
    branch: "cabinet",
    ministryId: "social-affairs",
    partyId: "ppp",
    personality: ["gregarious", "organised", "remembers every hatch-day", "impossible to refuse"],
    favoriteFood: "Small chops from the festival leftovers",
    shortBio:
      "The Republic at its most sociable. Rọ́nkẹ́ runs the social calendar, " +
      "the Feather Gala, and the Reconciliation Bench, and has never met a " +
      "quarrel a shared handful of grain could not soften.",
    bio: [
      "Rọ́nkẹ́ organised her first hatch-day celebration uninvited, unfunded, " +
        "and so successfully that the Presidency simply gave her the calendar " +
        "rather than compete with it. She remembers every citizen's hatch-day, " +
        "every anniversary of an arrival, and every feud in need of a bench, " +
        "and she deploys grain and good timing the way Security deploys the " +
        "roll call. Elder Yèyé Àlàbá, who kept the social advisory going for " +
        "years, handed over with visible relief and no small pride.",
      "As Minister she made the Reconciliation Bench national policy: " +
        "quarrelling parties sit in the shade until they have shared at least " +
        "one handful of grain, and the success rate embarrasses the courts. " +
        "The First Grain Festival and the Feather Gala are hers, run to the " +
        "minute and remembered for a season. One flock, many feathers, she " +
        "says, and she has a seat for every one of them.",
    ],
    friends: ["tade-foraging", "cindy"],
    rivals: [],
    quotes: [
      {
        text: "One flock, many feathers, and I have a seat for every one of them.",
        context: "On the social calendar",
      },
      {
        text: "Sit. Share the grain. You can go back to disagreeing afterwards, if you still want to.",
        context: "Instituting the Reconciliation Bench",
      },
    ],
    achievements: [
      "Made the Reconciliation Bench national policy",
      "Runs the First Grain Festival and the Feather Gala",
      "Keeper of the national hatch-day registry",
    ],
    colors: { body: "#f0c75e", comb: "#b3261e", accent: "#c05621", bg: "#faf5e9" },
    sponsorable: true,
  },
  {
    id: "cindy",
    tribe: "isa-brown",
    name: "Cindy",
    nickname: "The Best-Dressed Hen in the Republic",
    sex: "hen",
    ageNote: "Adult hen",
    status: "memorial",
    layingStatus: "n-a",
    branch: "none",
    personality: ["personable", "fashionable", "easy-going", "dutiful"],
    favoriteFood: "A dust bath first, groundnut second, in that order",
    shortBio:
      "The most sociable, best-turned-out hen in Coop Three, who greeted " +
      "every bird by name and kept the brightest feathers on the farm. She " +
      "was lost in a fight at the roost during the dry-season heat. The " +
      "Republic grieves her, and has resolved that it will mean something.",
    bio: [
      "Cindy was the bird everybody knew. She kept her feathers immaculate, " +
        "took her dust bath like an appointment, and stepped out each " +
        "morning looking, as Sadé the Griot once put it, 'ready for a " +
        "photograph she was not expecting.' She wore it lightly. The " +
        "grooming was for the joy of it, and the greeting that followed was " +
        "for you.",
      "She was easy-going where the Republic is loud, and dutiful where it " +
        "is distracted. She laid her eggs without fuss, welcomed nervous new " +
        "hens to Coop Three, and showed them, without being asked, where the " +
        "good dust was and how to keep the heat off their feathers. Half of " +
        "Coop Three learned to look after themselves because Cindy made it " +
        "look easy.",
      "She was lost during a hard, hot week, when the coop grew crowded and " +
        "a fight broke out over the one cool high perch. She was hurt and " +
        "did not recover. She rests under the mango tree, at the shady end, " +
        "near Bantu. Mama Gold spoke for her; Sadé sang; and Sisi Ngozi kept " +
        "a place so that no bird who loved her had to grieve alone.",
      "The Republic has resolved that her loss will not be wasted. Heat and " +
        "crowding are things a real farm can fix, with space, shade, and " +
        "enough perches for every bird, and the flock has taken up her " +
        "memory as the reason to build them. If you are visiting this page, " +
        "the flock would be glad of a word from you.",
    ],
    friends: ["ronke-owambe", "sisi-ngozi", "sade-griot"],
    rivals: [],
    quotes: [
      {
        text: "Look your best, greet everybody, do your work. The day takes care of itself.",
        context: "Cindy's morning, as her Coop Three neighbours remember it",
      },
    ],
    achievements: [
      "Kept the brightest plumage in the Republic",
      "Welcomed and mentored the new hens of Coop Three",
      "Never missed a morning's greeting or a neighbour's hatch-day",
    ],
    colors: { body: "#d98a2b", comb: "#b3261e", accent: "#8a3e1f", bg: "#f1e8d4" },
    sponsorable: false,
  },
];
