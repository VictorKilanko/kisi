# @kisi/brand

Shared design tokens for the Kisi universe. One palette and type scale, so
kisi.africa, kisifarm, and kisikids look like one family.

## Usage

In an app's `app/globals.css`:

```css
@import "tailwindcss";
@import "@kisi/brand/tokens.css";
@import "@kisi/brand/base.css";
/* app-specific layers below */
```

## Font contract

`tokens.css` maps `--font-display` and `--font-sans` onto the CSS variables
`--font-fraunces` and `--font-inter`. Each app must load those two fonts with
`next/font/google` in its `layout.tsx` and apply the variables to `<html>`:

```ts
import { Fraunces, Inter } from "next/font/google";
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
// <html className={`${fraunces.variable} ${inter.variable}`}>
```

The font loaders stay in each app (not this package) because Next's font loader
only processes `next/font` imports inside the app's own module graph.

## Colour roles

- **green** = the working farm (fact)
- **gold / indigo** = Republic life (the story)
- **earth / terracotta** = placeholder / demo content
- **cream** = default surface · **charcoal** = body text

`kids` may layer brighter accent tokens on top for its own audience, but keeps
these as the shared base.
