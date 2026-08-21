import { ImageResponse } from "next/og";

/**
 * Social share card for kisifarm: Dede's face (the shared mascot) on an
 * eggshell field, with the farm tagline and the egg call to action.
 *
 * Dynamic on purpose: the font is fetched at render time, so a font or network
 * hiccup can never fail the build. If the font is unavailable the card still
 * renders with the logo, never a broken image.
 */
export const dynamic = "force-dynamic";
export const alt = "Kisi Farm, fresh eggs and day-old chicks from hens with names";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={uri(TACO)} width={190} height={190} alt="" />
        </div>

        {font ? (
          <div
            style={{
              display: "flex",
              marginTop: "40px",
              fontSize: "72px",
              fontWeight: 700,
              color: GREEN,
              letterSpacing: "-1px",
            }}
          >
            Kisi Farm
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
            Fresh eggs and day-old chicks, from hens with names
          </div>
        ) : null}

        {font ? (
          <div style={{ display: "flex", marginTop: "44px", fontSize: "26px", color: GREEN }}>
            farm.kisi.africa | Order farm-fresh eggs
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
