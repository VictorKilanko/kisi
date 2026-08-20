# Kisi Farm social media kit

Instagram content for **Kisi Farm** (kisi.africa). The farm is about the chickens, so
the chickens are the brand: a **soap opera** with a returning cast. We introduce the
cast, then run **story arcs** full of drama, tension, chaos and gossip. Entertainment is
the hook; the farm sells the eggs.

Every image is a **1080 x 1080 PNG** in `images/`, built from the same look as the site.

## House rules (read before adding posts)

- **One name: Kisi Farm.** The official name is **kisi.africa**; "Kisi Farm" tells people
  it is a farm. Use those. The chickens running the place "like a little republic" is the
  *premise we narrate*, not a second brand name. Do not put "The Republic of Kisi" on a
  post as if it were the farm's name.
- **Logo: Taco's headshot.** The old crest is **retired**. Every post uses `assets/taco.svg`
  as the logo mark.
- **Numbering is for multi-slide posts only.** A single standalone post has no number. A
  story arc told across several slides numbers them so followers can order them, e.g.
  "Part 1 of 5". (The file names like `04-...` are just for our own ordering, not shown on
  the image.)
- **House style:** humorous, warm, dignified. No em-dashes. Real animals, so no cruelty,
  distress or death played for shock.
- **STANDING RULE, the funnel: every arc ends on a sell.** The entertainment exists to
  drive two money paths, and the posts must route to them. The last slide of every story
  arc closes with **kisi.africa/support** (keep the flock laying, lit and housed) or
  **kisi.africa/shop** (order eggs). Cast intros send people to meet the flock; arcs and
  finales send them to support and order. The two biggest support campaigns are **Solar &
  Light** and **Better Housing**, $25,000 each, so name them when an arc touches light,
  power, coops or housing.

## What is built (batch 1, 12 posts)

| # | Post | Type | Numbered? |
|---|---|---|---|
| 01 | Welcome to Kisi Farm | Standalone | no |
| 02 | Where every chicken has a story | Standalone | no |
| 03 | Meet Taco, the official mascot | Standalone | no |
| 04 | President Adédoyin "Mama Decree" | Cast intro | no |
| 05 | Halima "Iron Feathers" | Cast intro | no |
| 06 | Chief Justice Yèyé Àlàbá | Cast intro | no |
| 07 | Every chair filled (Coop Times) | Standalone news | no |
| 08 to 12 | The Nesting Box Election | **Story arc (5 slides)** | **Part N of 5** |

Captions for all 12 are in `captions.md`. Post them in order; 04 to 06 work as one
carousel, and 08 to 12 are a 5-slide carousel (or post one every day or two).

## Story arc carousels (batch 2, 7 arcs, 27 slides)

Each arc is one **carousel** (multi-slide post). Files are `images/arc-<name>-N.png`;
post them in order (`-1` first). One caption per carousel, all in `captions.md`.

| Arc | Slides | Files | Tone |
|---|---|---|---|
| Chi-Chi's First Egg | 5 | `arc-chichi-1..5` | warm, the ingénue |
| The Missing Breakfast Grain | 4 | `arc-grain-1..4` | scandal, gossip |
| Mama Gold's Long Goodbye | 3 | `arc-mamagold-1..3` | emotional |
| The Rain Final | 3 | `arc-rainfinal-1..3` | sports drama |
| Flu Season, Handled | 2 | `arc-flu-1..2` | welfare |
| The Drain | 5 | `arc-drain-1..5` | the villain (monitor lizard) |
| A Full Cabinet | 5 | `arc-cabinet-1..5` | politics |

**Companion single post:** `wanted-monitor-lizard.png` is a standalone WANTED poster for
the villain of The Drain (the monitor lizard, "The Drain", 500,000-grain bounty), using the
site's own illustration. Post it alongside that carousel. No slide number (it stands alone).

These are generated from the site's own timeline content by `generate-arcs.mjs`
(`node social/generate-arcs.mjs`), then rendered with `render.ps1`. Every arc's last
slide routes to Support (the funnel rule below). To add or edit an arc, change the data
at the top of `generate-arcs.mjs` and re-run both scripts.

## How to post

1. Pick the numbered PNG in `images/`.
2. Copy its caption from `captions.md` and add the hashtag block.
3. Post. For the election, post 08 to 12 as a single carousel in order.

## Regenerating the images

The PNGs are screenshots of the HTML in `posts/`, taken with headless Chrome or Edge (no
Node or design software needed):

```powershell
pwsh social/render.ps1
```

Edit a post's wording in its `.html` file, or copy the closest post to make a new one,
then re-render. All styling lives in `assets/post.css`, with three looks set by the outer
`<div>` class: `t-state` (green welcome), `t-portrait` (eggshell cast card with a color
medallion), `t-times` (Coop Times newspaper for news and arcs).

---

# The cast (the ensemble)

The characters below already exist in the site content (`packages/canon/src/data/chickens.ts`). This
is the roster to draw on for cast-intro posts and story arcs. We do **not** need to post
all of them at once; we introduce them as the stories call for them.

**The leads**
- **Taco** · the mascot and our host/narrator. No office, greets everyone first. The
  audience's way into the world. *(introduced: post 03)*
- **President Adédoyin "Mama Decree"** · the hero. Rose from an ordinary nest to the top
  on "Forward with Feed"; crusades on punctual breakfast. *(introduced: post 04)*
- **Halima "Iron Feathers"** · Leader of the Opposition and the President's rival. The
  emotional core: sworn political enemies by day, secret crate-sisters and best friends at
  the fence by dusk. *(introduced: post 05)*

**The supporting cast**
- **Baba Ṣẹ́gun "The Dawn Himself"** · Vice President, elder rooster who challenges the sun.
- **Chief Justice Yèyé Àlàbá** · rules in proverbs, never appealed. *(introduced: post 06)*
- **Kola Quill** · journalist at The Coop Times; our in-world gossip/news voice.
- **Mama Gold "The National Grandmother"** · beloved senior hen, retiring from laying.
- **Chi-Chi** · the young first-time layer (the ingénue).
- **Dr. Amara Featherwell "The Calm One"** · Health and Veterinary Minister.
- **Túndé Quickfoot** and **Flash Adaora** · the athletes.
- **Bright Feather** · Halima's rival; ambitious, quotable.
- **Pete Okpara "The Fence Walker"** · the swing voter/independent.
- **Sergeant Danladi**, **Sisi Ngozi**, **Small Fẹ́mi**, **Quiet Grace**, and the new
  ministers (Musa the Grainkeeper, Emeka the Drain Marshal, Amina Daybreak, Sadé the Griot,
  Tadé Foraging, Rọ́nkẹ́ Mama Owambe).
- **Bantu "The Night Whistle"** · remembered; the monitor-lizard storyline.

**The villain · rolled out one at a time (owner-approved plan).** The world has no single
heavy yet, so we develop three, in sequence, so the drama escalates:
1. **The monitor lizard** · the predator that came up the drain. An external menace that
   unites the flock and keeps every chicken sympathetic. Great for cliffhangers ("it's
   back"). Start here.
2. **A scheming insider hen** · an ambitious, gossip-spreading plotter within the flock; a
   comic villain you love to hate. Introduce after the lizard arc.
3. **Halima as the heel** · a later arc that flirts with recasting the Opposition Leader
   as the antagonist, then pays off the secret-friendship twist. Last, because it needs
   the audience to already love her.

---

# The plan (batches ahead)

Each arc is a numbered multi-slide carousel. Cast intros are single posts released between
arcs to keep new faces coming.

- **Batch 2 · more cast intros:** Kola Quill (our gossip columnist), Mama Gold, Chi-Chi,
  Baba Ṣẹ́gun. Single posts, no numbers.
- **Batch 3 · Arc: The Drain (villain 1, the monitor lizard).** The threat, the fear, the
  Drain Marshal's plan, the night it came back, the flock holds the line. Numbered slides.
- **Batch 4 · Arc: Mama Gold Retires.** Warmth and tears; a national grandmother steps
  back. Numbered slides.
- **Batch 5 · Arc: The Grain Affair (villain 2, the insider schemer).** Gossip, a missing
  ration, an ambitious plotter exposed. Numbered slides.
- **Recurring · The Coop Times single posts:** gossip, quotes, "spotted at the fence"
  cliffhangers between arcs.

Existing written arcs to adapt (in `packages/canon/src/data/timeline.ts`): Chi-Chi's first egg, the
grain affair, Mama Gold's retirement, the perch championship, flu season, **the drain**,
the full cabinet, and **the nesting box election** (already built as posts 08 to 12).

## One owner input still open

Confirm the Instagram **@handle** (suggested `@kisi.africa`) and set it at the top of
`captions.md`. Logged in `docs/CONTENT_CHECKLIST.md`.
