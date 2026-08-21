/**
 * Generates one Instagram slide (HTML) per story-arc beat, in the Coop Times
 * style, into posts/arc-<slug>-<n>.html. Content mirrors packages/canon/src/data/timeline.ts.
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
    slug: "notagain",
    title: "Not Again",
    slides: [
      ["A hard question", "After we lost Cindy, the Republic asked one thing. How could a bird die inside her own coop? Minister Okpara called everyone together to answer it."],
      ["He said it plainly", "Okpara did not soften it. 'A fight broke out over the perch. One bird went too far. Her name is Eseosa.' The whole room went silent."],
      ["Kept apart, safely", "Eseosa was moved to her own pen, away from the flock. Not to punish her yet, but to keep every other bird safe while the Republic decides what is fair."],
      ["The real cause", "Okpara was honest about why. Too many birds, one cool perch, too much heat. 'We fix the coop, or this happens again.' Help us build Better Housing."],
    ],
  },
  {
    slug: "charge",
    title: "The Charge",
    theme: "green",
    slides: [
      ["How do you judge this?", "The Republic had never put a bird on trial for the death of another. Some wanted it settled quietly. Chief Justice Yèyé Àlàbá said no."],
      ["The whole flock will see", "She called a full trial, out in the open, in the shade after the feed. Eseosa would answer for it. 'We do not peck in the dark,' she said."],
      ["Fair, and in the light", "A date was set. Justice is one half of Cindy's answer. Safe housing is the other half. Help us build it."],
    ],
  },
  {
    slug: "defense",
    title: "The Defence Team",
    slides: [
      ["Every bird deserves a defence", "Even Eseosa. And she got a famous one: Barrister Silk, the flashiest lawyer in the Republic, with a fan, a title, and a long word for everything."],
      ["The circus begins", "Silk called it 'the trial of the century.' There had only ever been one trial, but nobody corrected him. The newspapers sold out for a week."],
      ["His clever argument", "Silk's point, dressed up long, was sharp. The heat did it. The crowding did it. The coop did it. 'My client,' he cried, 'is a victim of the perch.'"],
      ["One flock, watching", "Was it Eseosa's fault, the coop's, or both? The court would decide. But the coop is ours to fix right now. Help us build Better Housing."],
    ],
  },
  {
    slug: "trial",
    title: "The Trial",
    theme: "green",
    slides: [
      ["Court is in session", "The whole flock gathered in the shade. The Chief Justice sat. Eseosa sat. Barrister Silk fanned himself. The Republic's first trial began."],
      ["The witnesses speak", "Cindy's neighbours told of a hot week, a crowded roost, and a fight that went too far. And of Cindy, who only ever kept the peace."],
      ["The evidence", "Dr. Featherwell brought the facts. Too many birds, one cool perch, heat that made tempers snap. 'This coop was a fight waiting to happen.'"],
      ["Silk's last stand", "Barrister Silk spoke so long the court broke for feed twice. His point, in the end, was short. 'Blame the coop, not only my client.'"],
      ["Three words", "Then Eseosa spoke, for the first time in weeks. Three words: 'I am sorry.' The shade went very quiet. The Chief Justice would rule the next day."],
    ],
  },
  {
    slug: "judgement",
    title: "The Judgement",
    slides: [
      ["The ruling", "The next day the whole Republic came. Chief Justice Yèyé Àlàbá did not rush. 'A bird is gone, and no ruling brings her back. But we can still be just.'"],
      ["Two truths", "'The coop failed Eseosa. And Eseosa failed Cindy. Both are true. We will fix the first. We must answer the second.'"],
      ["The sentence", "Eseosa would leave the flock. Not harmed, but rehomed far away, where she can do no more damage. The Republic calls it exile."],
      ["And a promise", "'We will build coops where this cannot happen. That is Cindy's justice too.' Court rose. Help us keep the promise at kisi.africa/support."],
    ],
  },
  {
    slug: "law",
    title: "Cindy's Law",
    theme: "green",
    slides: [
      ["Cindy's Law", "The Assembly did not wait. It passed Cindy's Law: enough space, enough perches, and shade for every bird, so no coop is ever a fight waiting to happen."],
      ["Named for her", "They named it for the best-dressed hen in the Republic, who kept the peace her whole life. Now the whole flock keeps it in her name."],
      ["Build it with us", "A law is a promise, and perches, space, and shade cost real grain. This is the Better Housing campaign, and it is Cindy's now. Help us finish it."],
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
  {
    slug: "rebuild",
    title: "After the Fence Line",
    slides: [
      ["The first plank", "A promise is only a promise until someone lifts a plank. The first Better Housing grain bought timber. Emeka marked a wider Coop Three: fewer birds, far more room."],
      ["What the law looks like", "Cindy's Law, in timber. Many perches, so no bird fights for the cool one. Wide vents for the heat. A shade wing. Dr. Featherwell measured every space herself."],
      ["The birds come home", "Moving day. Cool air through new vents, high perch for everyone, room to spare. Okpara called the roll, and every name answered. Somebody said it: this is the coop Cindy should have had."],
      ["Built to Cindy's Law", "A small plaque by the new door. 'One coop is done. We have many,' the President said. Every coop needs the same fixing. Help us build the next one."],
    ],
  },
  {
    slug: "sweetbeak",
    title: "The Sweet Beak",
    theme: "green", // a schemer's arc: dramatic intrigue on the green field
    slides: [
      ["A sweet new voice", "Meet Ládùn, 'Sweet Beak.' She greets you like your best day just arrived, then leaves you worried about something you were happy about a minute ago. What she wants is a ministry."],
      ["The oldest fear", "Her target: honest Musa the Grainkeeper. Her weapon: the Republic's oldest fear, that the grain is going missing. She never says it. She only worries, sweetly, at the dust bath."],
      ["By the third day", "Half the coop was counting grains and side-eyeing Musa. Nothing was missing. But a whisper needs no evidence, only a quiet afternoon and a willing ear. Musa was baffled."],
      ["Kola Quill smells it", "Kola broke the real grain scandal, so she knows the smell. Fear everywhere, evidence nowhere: that is a rumour, not a robbery. She followed it upstream. Every trail ended at one dust bath."],
      ["Sweet Beak, exposed", "Not one grain missing. One hen stirring. Musa cleared, the Republic laughing, Sweet Beak already eyeing her next target. The grain? It became the best eggs in the country. Order a crate."],
    ],
  },
  {
    slug: "dawn",
    title: "The Dawn Duel",
    slides: [
      ["Who owns the dawn?", "Small Fẹ́mi, the boy who went out the far side the night of the drain, wants to be a coop guard. A guard is up before dawn anyway. So, quietly, he told VP Baba Ṣẹ́gun he would call the morning this year."],
      ["The training camp", "Fẹ́mi was already walking the fence at first light, so he added the crow to his rounds. Baba trained not at all: slept in, took a dust bath, still beat him to the warm-up twice. 'The dawn is a calling,' he said."],
      ["The duel at first light", "The whole flock gathered in the dark to watch. The grey came. Both roosters crowed at the very same instant, so exactly together that not even the Chief Justice could call it. Best dawn in years."],
      ["The dawn belongs to everyone", "No rematch. Baba made Fẹ́mi his apprentice, so two birds wake Kisi now and the sun is never late. But he can wake the farm, not light it. When the sun sets, the coops go dark. Help us: Solar & Light, kisi.africa/support."],
    ],
  },
  {
    slug: "sweetbeak2",
    title: "Sweet Beak Strikes Again",
    theme: "green", // the schemer's comeback: dramatic intrigue on the green field
    slides: [
      ["The next target", "Cleared, but not one feather sorry. Sweet Beak wanted a bigger prize. Not one minister this time. She would turn the whole flock sour, coop against coop."],
      ["'Why should Three get shade?'", "Her weapon was envy. Coop Three came back new: many perches, a shade wing. 'Lovely for them,' she sighed at every waiting coop. 'And what about us?'"],
      ["The grievance meeting", "She called the waiting coops together, all fairness and concern, and waited for an angry crowd she could aim like a slingshot at the housing programme."],
      ["Iron Feathers stands up", "Then Halima rose. The Opposition could have pounced. Instead: 'We do not fight over Cindy's Law. Coop Three is the promise. Every coop gets one.'"],
      ["The rally she never meant to hold", "The crowd took it up: build ours next! Her grievance meeting became a Better Housing rally, and she had called it herself. Help us build the next coop."],
    ],
  },
  {
    slug: "breakfast",
    title: "The Breakfast Bell",
    sell: "shop",
    slides: [
      ["Seven, or seven-ish?", "Order No. 1 set breakfast at 'seven, not seven-ish.' But a farm keeps no clock, so seven never quite came. The flock woke hungry and waited. Halima meant to fix that."],
      ["The minister's defence", "Musa the Grainkeeper backed the order, not the ease of it. 'Some mornings the grain is ready by seven,' he said, honest as ever. 'And some mornings it is not in a hurry.'"],
      ["A bell with no ringer", "Ring a bell at seven sharp, said Halima, and give Order No. 1 a sound. Fine, but what clock does a farm keep? For a week nobody could agree when seven had come."],
      ["The rooster clock", "Then Small Fẹ́mi spoke up. Two roosters crow the dawn on the dot now, the second near enough to seven. Peg the bell to it, he said. The farm had a clock all along."],
      ["Order No. 1, kept", "The President rang the first bell beside her old rival Halima. 'Order No. 1 said seven. Now the farm keeps it.' A well-fed hen lays a better egg. Order a crate."],
    ],
  },
  {
    slug: "sprint",
    title: "Chi-Chi's First Race",
    theme: "green", // a big race: high-stakes drama on the green field
    sell: "shop",
    slides: [
      ["The quiet one lines up", "Chi-Chi trained with the junior squad in secret, and everyone knew. Today the shy sweetheart of the Republic lined up for her first real race, legs shaking."],
      ["Two coaches, one chick", "Flash Adaora, who hates losing, told her, 'The quiet ones have the best starts.' Minister Quickfoot, her retired rival, brought a drum and a speech about himself."],
      ["The whistle", "The whole flock went quiet. Chi-Chi's start was clean and fast, but a bigger chick pulled ahead at the bend. For three long strides, it looked over."],
      ["'I did my best'", "She came second, a wing's length back, and said the four words the Republic loves: 'I did my best.' The cheer was louder than any winner's."],
      ["The rivalry never retires", "Watching her run, Flash and Quickfoot forgot they were retired and raced on the spot. Nobody agrees who won. Fuel a champion: order farm-fresh eggs."],
    ],
  },
  {
    slug: "elders",
    title: "The Elders' Bench",
    slides: [
      ["A law kept", "Mama Gold's Law promised every retired hen shade, first place at the trough, and no surprise committees. This week the Republic built the bench to prove it."],
      ["The National Grandmother", "Under the mango tree, Mama Gold took her seat. 'Four hundred eggs buys you this shade,' she said. 'It is not charity. It is wages. Sit. You have earned it.'"],
      ["Every name, out loud", "Sisi Ngozi read the roll of retired hens, and Sadé the Griot set each name to song. Birds who fed the nation for years heard it stop and say thank you."],
      ["Thank you, elders", "'No hen here is finished,' says Mama Gold. 'We are delegating.' Help us keep the shade cool and the trough full for the layers who fed us first: kisi.africa/support."],
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

// Each arc lands its final slide on a sell. Default is Support (laying/light/housing
// appeals); arcs that sell eggs set sell:"shop" so the footer URL matches the CTA in
// the copy instead of always reading /support.
const SELL_FOOT = {
  shop: `<span>Farm-fresh eggs from the Republic</span><span class="site">kisi.africa/shop</span>`,
  support: `<span>Keep the flock laying, lit &amp; housed</span><span class="site">kisi.africa/support</span>`,
};

function page({ arcTitle, part, total, title, body, isFinal, theme, sell }) {
  const foot = isFinal
    ? SELL_FOOT[sell] ?? SELL_FOOT.support
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
      <img class="crest" src="../assets/dede.svg" alt="Kisi Farm">
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
      sell: arc.sell, // "shop" | undefined(=support)
    });
    const file = join(postsDir, `arc-${arc.slug}-${part}.html`);
    writeFileSync(file, html, "utf8");
    count++;
  });
  console.log(`${arc.title}: ${total} slides`);
}
console.log(`\nWrote ${count} slide files to posts/.`);
