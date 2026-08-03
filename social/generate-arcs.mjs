/**
 * Generates one Instagram slide (HTML) per story-arc beat, in the Coop Times
 * style, into posts/arc-<slug>-<n>.html. Content mirrors site/content/timeline.ts.
 * Numbering ("Part N of M") is on-card because these are multi-slide carousels.
 * The final slide of every arc routes to Support (the standing funnel rule).
 *
 *   node social/generate-arcs.mjs      then      pwsh social/render.ps1
 */
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const postsDir = join(here, "posts");

const arcs = [
  {
    slug: "chichi",
    title: "Chi-Chi's First Egg",
    slides: [
      ["A very small arrival", "Chi-Chi arrives at Kisi in a hatchery crate at three weeks old, separated from her mother and smaller than the forecast allowed. She spends her first week under the heat lamp, against a wing that moved slightly left to make room."],
      ["Grace's side", "Quiet Grace, once the frail new arrival herself, becomes Chi-Chi's unofficial guardian. The spot against her wing acquires a name, and then, over the months, a queue."],
      ["'The quiet one learns fast'", "After months of careful watching, Chi-Chi performs the high perch, the dust bath, and the fast trough line each correctly on the first attempt. The Coop Times front page follows."],
      ["The first egg", "Certified within the hour. Public holiday declared retroactively. Statement in full: 'I did my best.' Quiet Grace makes no comment, magnificently."],
      ["The secret everyone knows", "Chi-Chi quietly joins the Solar Queens' junior sprint squad at Flash Adaora's invitation. She has told no one. The Republic is politely pretending not to know."],
    ],
  },
  {
    slug: "grain",
    title: "The Missing Breakfast Grain",
    slides: [
      ["Two hundred grams sign out", "Premium cracked maize leaves the national store on ministry authority. The return column of the feed ledger begins its long, eloquent silence."],
      ["'Where did 200 grams go?'", "Kola Quill's investigation opens on the front page and stays there for five issues. The ministry's response, 'insufficiently found', enters the national phrasebook immediately."],
      ["The Panel of Inquiry sits", "Eight members, three sittings, one adjournment for the afternoon feed. The opposition attends with pre-printed placards and a weighing scale of its own."],
      ["Found, weighed, returned", "The grain surfaces behind the minister's second filing perch, is weighed twice at the opposition's insistence, and returns to the store. The apology tour is announced; the editorial thanks the filing perch."],
    ],
  },
  {
    slug: "mamagold",
    title: "Mama Gold's Long Goodbye",
    slides: [
      ["Egg No. 400", "A national ceremony under the mango tree for the 400th recorded egg. Her review, in full: 'The first one was harder.'"],
      ["The delegation begins", "Mama Gold announces a well-earned laying break, 'I am not retiring. I am delegating', and increases her Sunday storytelling schedule by popular demand."],
      ["Mama Gold's Law", "Shade, trough priority, and freedom from sudden committee membership for every retired layer, passed on second reading. The gallery sings; the Speaker conducts, eventually."],
    ],
  },
  {
    slug: "rainfinal",
    title: "The Rain Final",
    slides: [
      ["The record falls", "Flash Adaora breaks Minister Quickfoot's two-season 100-metre record. A Day of National Speed is declared; solitary dusk practice by the fence is officially denied."],
      ["Rain stops play; Adaora doesn't", "The Perch Jumping Final's record height, cleared first attempt in the rain. 'The perch is already wet. So am I.' The gatepost has since been engraved."],
      ["The rivalry retires", "Champion and minister launch a joint sprint clinic for chicks. The rivalry is declared 'officially retired and unofficially eternal.'"],
    ],
  },
  {
    slug: "flu",
    title: "Flu Season, Handled",
    slides: [
      ["'Here is what we know'", "A respiratory bug reaches Coop Two. Dr. Featherwell quarantines calmly, publishes facts daily, and answers every rumour with the same five words. On the real farm, biosecurity and vet care are exactly this unglamorous, and exactly this important."],
      ["The loudest ceremony", "Coop Two returns to full health. The recovery party is the loudest event in national memory; the minister misses it, doing rounds. Her bulletin that week: 'Resume normal life. Wash your feet.'"],
    ],
  },
  {
    slug: "drain",
    title: "The Drain",
    slides: [
      ["Something in the drainage channel", "Second shift reports a track in the soft ground by the east fence: clawmarks with a drag between them. It is driven off twice more over the following fortnight. Nobody yet calls it anything."],
      ["The night of Coop Two", "The grate moves shortly after midnight. Bantu gives the alarm and holds the doorway while twelve chicks go out the far side. Every one of them gets out. Danladi reaches him in under a minute."],
      ["Under the mango tree, without debate", "The Assembly votes his resting place without a single speech against, the only such vote in the Republic's history. Sisi Ngozi organises it in an afternoon. The dusk whistle begins that evening."],
      ["A two-sentence acceptance speech", "Pete Okpara is sworn in as Minister of Security. 'I know what the job is. Ask me again in a year.' He institutes the Bantu Protocol the same night: every bird counted aloud, by name."],
      ["500,000 grains", "The Assembly posts a standing bounty for information leading to the lizard's capture. Unanimous, and seconded by the Leader of the Opposition, who declines to demand a recount."],
    ],
  },
  {
    slug: "cindy",
    title: "Goodnight, Cindy",
    theme: "green", // memorial arc runs on the green field (solemn, ceremonial)
    slides: [
      ["Everybody knew Cindy", "Cindy had the brightest feathers on the farm and a hello for every bird she passed. She did her work, kept the peace, and made friends everywhere she went."],
      ["A hard, hot week", "The dry-season heat left the coop hot and crowded. Every bird wanted the cool high perch. Tempers grew short, and one night a fight broke out."],
      ["We lost her", "Cindy was hurt in the fight, and she did not recover. The Republic woke to the news it dreads most. One of its own was gone."],
      ["Under the mango tree", "They carried her to the shady ground where Bantu rests. Mama Gold spoke. Sadé sang. No grieving bird was left to stand alone."],
      ["So it never happens again", "Heat and a crowded roost cost us Cindy. Space, shade, and enough perches keep birds safe. Help us build Better Housing."],
    ],
  },
  {
    slug: "cabinet",
    title: "A Full Cabinet",
    slides: [
      ["Six empty chairs", "The President announces that every acting arrangement ends this week: six vacant ministries, six substantive appointments, and no more chairs kept warm by the Presidency. The Opposition promises to audit all six budgets by Friday."],
      ["Grain and water", "Musa the Grainkeeper takes Feed and Agriculture; Emeka the Drain Marshal takes Water and Environment. Two hands who already ran the store and the drains, now with the titles to match. Musa's first act: an inspection of the store, by smell."],
      ["Sunrise and song", "Amina Daybreak takes Energy and Solar; Sadé the Griot takes Culture and Entertainment. The swearing-in runs late because the new Culture Minister set the oath to music, and the Assembly asked for a second verse."],
      ["The teacher and the convener", "Tadé the Foraging Master takes Youth and Chick Development; Rọ́nkẹ́ Mama Owambe takes Social Affairs. Elder Yèyé Àlàbá hands over the social advisory she held for years, and books the Reconciliation Bench for the afternoon, just in case."],
      ["A full cabinet, at last", "For the first time in the Republic's memory, no ministry is vacant. The Opposition delivers its promised audit, finds the budgets suspiciously reasonable, and demands a recount of the recount. The President calls it a good week."],
    ],
  },
];

function smart(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/(^|[\s(])'/g, "$1‘")
    .replace(/'/g, "’")
    .replace(/(^|[\s(])"/g, "$1“")
    .replace(/"/g, "”");
}

function headlineClass(title) {
  const n = title.length;
  if (n <= 20) return "sm";
  if (n <= 38) return "xs";
  return "xxs";
}

function page({ arcTitle, part, total, title, body, isFinal, theme }) {
  const foot = isFinal
    ? `<span>Keep the flock laying, lit &amp; housed</span><span class="site">kisi.africa/support</span>`
    : `<span>The story continues at</span><span class="site">kisi.africa/republic/stories</span>`;
  const ledeClass = body.length > 170 ? "lede sm" : "lede";
  // Each arc runs on the cream newspaper field by default; theme:"green" puts the
  // same Coop Times layout on the deep-green field, so stories alternate on brand.
  const themeClass = theme === "green" ? " green" : "";
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="../assets/post.css">
</head>
<body>
<div class="post t-times${themeClass}">
  <div class="masthead">
    <div class="brand">
      <img class="crest" src="../assets/taco.svg" alt="Kisi Farm">
      <div class="wordmark"><b style="font-size:42px;letter-spacing:0.5px;">The Coop Times</b><small>Dispatches from Kisi Farm</small></div>
    </div>
  </div>

  <div class="body-area">
    <p class="kicker">${smart(arcTitle)}</p>
    <p style="margin:0 0 28px;"><span class="episode">Part ${part} of ${total}</span></p>
    <h1 class="headline ${headlineClass(title)}">${smart(title)}</h1>
    <p class="${ledeClass}">${smart(body)}</p>
  </div>

  <div>
    <div class="rule"></div>
    <div class="foot">${foot}</div>
  </div>
</div>
</body>
</html>
`;
}

let count = 0;
for (const arc of arcs) {
  const total = arc.slides.length;
  arc.slides.forEach(([title, body], i) => {
    const part = i + 1;
    const html = page({
      arcTitle: arc.title,
      part,
      total,
      title,
      body,
      isFinal: part === total,
      theme: arc.theme, // "green" | undefined(=cream newspaper)
    });
    const file = join(postsDir, `arc-${arc.slug}-${part}.html`);
    writeFileSync(file, html, "utf8");
    count++;
  });
  console.log(`${arc.title}: ${total} slides`);
}
console.log(`\nWrote ${count} slide files to posts/.`);
