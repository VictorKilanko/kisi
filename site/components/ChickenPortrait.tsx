import type { Chicken } from "@/lib/schemas";

/**
 * Procedural SVG portrait — an original, license-free stand-in until real
 * photographs arrive. Each citizen's palette comes from their content
 * record, so every portrait is distinct. Roosters get a taller comb and
 * tail flourish; office-holders get a subtle frame.
 */
export function ChickenPortrait({
  chicken,
  size = 160,
  framed = false,
}: {
  chicken: Chicken;
  size?: number;
  framed?: boolean;
}) {
  const { body, comb, accent, bg } = chicken.colors;
  const isRooster = chicken.sex === "rooster";
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label={`Illustrated placeholder portrait of ${chicken.name}${
        chicken.roleTitle ? `, ${chicken.roleTitle}` : ""
      } (illustrated portrait — photograph coming soon)`}
      className="rounded-2xl"
    >
      <rect width="120" height="120" rx="16" fill={bg} />
      {framed && (
        <rect
          x="3"
          y="3"
          width="114"
          height="114"
          rx="14"
          fill="none"
          stroke={accent}
          strokeWidth="3"
        />
      )}
      {/* tail */}
      {isRooster ? (
        <g fill={accent}>
          <ellipse cx="30" cy="52" rx="8" ry="22" transform="rotate(24 30 52)" />
          <ellipse cx="38" cy="48" rx="7" ry="19" transform="rotate(38 38 48)" opacity="0.85" />
        </g>
      ) : (
        <ellipse cx="36" cy="62" rx="10" ry="16" fill={accent} transform="rotate(28 36 62)" />
      )}
      {/* body */}
      <ellipse cx="62" cy="72" rx="30" ry="26" fill={body} />
      {/* wing */}
      <ellipse cx="58" cy="74" rx="15" ry="11" fill={accent} opacity="0.55" />
      {/* neck + head */}
      <rect x="72" y="38" width="16" height="30" rx="8" fill={body} />
      <circle cx="82" cy="36" r="13" fill={body} />
      {/* comb */}
      {isRooster ? (
        <g fill={comb}>
          <circle cx="76" cy="22" r="5" />
          <circle cx="83" cy="19" r="5.5" />
          <circle cx="90" cy="23" r="5" />
        </g>
      ) : (
        <g fill={comb}>
          <circle cx="79" cy="24" r="4" />
          <circle cx="85" cy="23" r="4.5" />
        </g>
      )}
      {/* beak */}
      <polygon points="94,35 104,38 94,42" fill="#e0a13a" />
      {/* wattle */}
      <ellipse cx="91" cy="45" rx="3.5" ry="5" fill={comb} />
      {/* eye */}
      <circle cx="86" cy="33" r="2.6" fill="#23231f" />
      <circle cx="87" cy="32.2" r="0.9" fill="#ffffff" />
      {/* legs */}
      <g stroke="#e0a13a" strokeWidth="3" strokeLinecap="round">
        <line x1="56" y1="96" x2="56" y2="108" />
        <line x1="70" y1="96" x2="70" y2="108" />
        <line x1="56" y1="108" x2="50" y2="112" />
        <line x1="56" y1="108" x2="62" y2="112" />
        <line x1="70" y1="108" x2="64" y2="112" />
        <line x1="70" y1="108" x2="76" y2="112" />
      </g>
      {/* ground */}
      <ellipse cx="63" cy="112" rx="34" ry="4" fill={accent} opacity="0.25" />
    </svg>
  );
}
