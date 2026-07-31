# Kisi social media kit

Instagram-ready posts for the Republic of Kisi. Every image is a **1080 x 1080 PNG**
(Instagram's square feed size), designed from the same brand as the website: the crest,
the eggshell-and-green palette, Taco the mascot, and The Coop Times.

This first batch is **12 numbered posts** in three short series.

| Series | Posts | Theme | What it does |
|---|---|---|---|
| Welcome | 01, 02, 03 | Green field | Introduces the Republic and Taco, the mascot mouthpiece |
| Meet the Leaders | 04, 05, 06 | Eggshell portrait | The President, the Opposition Leader, the Chief Justice |
| The Nesting Box Election | 07 to 12 | The Coop Times | A cabinet news post, then a 5-part story serial |

## How to post

1. Open `images/` and pick the numbered PNG you want (start with `01`).
2. Open `captions.md`, copy the matching caption, and paste the hashtag block under it.
3. Post the image with that caption on Instagram.
4. Go in order, 01 to 12. See `captions.md` for carousel and scheduling tips.

The images are ready to use as they are. Nothing else is required to post.

## Folder layout

```
social/
  README.md        <- this file
  captions.md      <- one caption per image, numbered, plus hashtags
  render.ps1       <- regenerate all PNGs from the HTML (see below)
  assets/
    post.css       <- the shared design system for every post
    crest.svg      <- the Republic crest
    taco.svg       <- Taco the mascot
  posts/           <- the editable HTML source, one file per post
  images/          <- the finished PNGs you post (the deliverable)
```

## Editing a post or making a new one

Each post is a small HTML file in `posts/`. To change wording, edit the text in the
`.html` file. To make a new post, copy the closest existing one, change the text and the
`No.` number, and save it as the next number. Then re-render (below). All the styling
lives in one place, `assets/post.css`, so posts stay consistent.

Three ready-made looks (set by the `class` on the outer `<div>`):

- `post t-state` · deep green welcome/announcement card
- `post t-portrait` · eggshell card for a single character (with a color medallion)
- `post t-times` · The Coop Times newspaper card for news and story arcs

## Regenerating the images

The PNGs are produced by taking a screenshot of each HTML file with headless Chrome or
Edge (already on this machine). No Node or design software needed.

```powershell
pwsh social/render.ps1
```

That rewrites every PNG in `images/` from the HTML in `posts/`. Run it after editing any
post or the shared CSS.

## One thing to set: your @handle

The images show the website address **kisi.africa** (real and live). They do **not**
hard-code an Instagram @handle, so you are free to use any handle. Set it once at the top
of `captions.md`. Suggested handle: **@kisi.africa** (confirm it is available first).

## Notes

- Fonts are Windows system fonts (Georgia and Segoe UI) on purpose, so rendering never
  needs the internet and the look is stable.
- All copy is written in the Republic's own voice and follows the house style (no
  em-dashes). The chicken world is the hook; the farm at kisi.africa is the business.
- Portraits use simple original medallions, not photographs. When you have real photos of
  the birds, they can be dropped into the portrait posts later.
