import { ImageResponse } from "next/og";

/**
 * Social share card for kisi.africa: the Republic crest and Taco's face on an
 * eggshell field, with the tagline and the egg-order call to action.
 *
 * Dynamic on purpose: the font is fetched at render time, so a font or network
 * hiccup can never fail the site build. If the font is unavailable the card
 * still renders with the two marks (no text), never a broken image.
 */
export const dynamic = "force-dynamic";
export const alt = "The Republic of Kisi, where every chicken has a story";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const CREST = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<g fill="#1f5130">
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(0 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(30 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(60 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(90 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(120 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(150 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(180 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(210 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(240 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(270 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(300 32 32)"/>
<rect x="29.6" y="1.5" width="4.8" height="9" rx="1.4" transform="rotate(330 32 32)"/>
</g>
<circle cx="32" cy="32" r="26" fill="#1f5130"/>
<circle cx="32" cy="32" r="22.5" fill="#faf5e9"/>
<g stroke="#1f5130" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.9">
<path d="M32 47 L20 24"/>
<path d="M22.5 29 q-4 -1 -6 -4"/>
<path d="M24 33 q-4 -1 -6 -4"/>
<path d="M25.5 37 q-4 -1 -6 -4"/>
<path d="M32 47 L44 24"/>
<path d="M41.5 29 q4 -1 6 -4"/>
<path d="M40 33 q4 -1 6 -4"/>
<path d="M38.5 37 q4 -1 6 -4"/>
</g>
<path d="M32 22 C25 22 23 32 23 38 C23 45 27 49 32 49 C37 49 41 45 41 38 C41 32 39 22 32 22 Z" fill="#d9a02b"/>
<path d="M32 22 C25 22 23 32 23 38 C23 42 24.5 45 27 47 C26 44 26 32 30 24 C31 23 31.5 22 32 22 Z" fill="#f0c14b"/>
<path d="M27 22 q1.5 -4 3 0 q1.5 -4 3 0 q1.5 -4 3 0 q0.5 1.5 -1 2 h-8 q-1.5 -0.5 0 -2 Z" fill="#1f5130"/>
</svg>`;

const TACO = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
<circle cx="32" cy="32" r="31" fill="#1f5130"/>
<circle cx="32" cy="32" r="27.5" fill="#faf5e9"/>
<g fill="#b3261e"><circle cx="24" cy="20" r="4.5"/><circle cx="31" cy="16.5" r="5"/><circle cx="38" cy="20" r="4.5"/></g>
<circle cx="31" cy="34" r="15" fill="#c9752e"/>
<polygon points="45,32 55,35.5 45,39" fill="#e0a13a"/>
<ellipse cx="43" cy="43" rx="3.2" ry="5" fill="#b3261e"/>
<circle cx="35" cy="31" r="3.4" fill="#23231f"/>
<circle cx="36.2" cy="29.9" r="1.1" fill="#ffffff"/>
</svg>`;

const uri = (svg: string) =>
  `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;

async function loadFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      "https://cdn.jsdelivr.net/npm/@fontsource/inter@5.0.16/files/inter-latin-700-normal.woff",
      { cache: "force-cache" },
    );
    if (!res.ok) return null;
    return await res.arrayBuffer();
  } catch {
    return null;
  }
}

export default async function Image() {
  const font = await loadFont();
  const CREAM = "#faf5e9";
  const GREEN = "#1f5130";
  const EARTH = "#8a3e1f";
  const GOLD = "#d9a02b";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: CREAM,
          fontFamily: "Inter",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={uri(CREST)} width={150} height={150} alt="" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={uri(TACO)} width={172} height={172} alt="" />
        </div>

        {font ? (
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              fontSize: "64px",
              fontWeight: 700,
              color: GREEN,
              letterSpacing: "-1px",
            }}
          >
            The Republic of Kisi
          </div>
        ) : null}

        {font ? (
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "5px",
              backgroundColor: GOLD,
              marginTop: "18px",
              borderRadius: "3px",
            }}
          />
        ) : null}

        {font ? (
          <div style={{ display: "flex", marginTop: "18px", fontSize: "30px", color: EARTH }}>
            Where every chicken has a story
          </div>
        ) : null}

        {font ? (
          <div style={{ display: "flex", marginTop: "44px", fontSize: "26px", color: GREEN }}>
            kisi.africa | Order farm-fresh eggs
          </div>
        ) : null}
      </div>
    ),
    {
      ...size,
      fonts: font
        ? [{ name: "Inter", data: font, weight: 700 as const, style: "normal" as const }]
        : [],
    },
  );
}
