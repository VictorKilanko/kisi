/**
 * Taco, the Republic's mascot. An original procedural portrait, license-free.
 * A small gold star marks her national-figure status.
 */
export function MascotPortrait({ size = 220 }: { size?: number }) {
  const body = "#c9752e";
  const comb = "#b3261e";
  const gold = "#e0a13a";
  const green = "#2e7d46";
  const bg = "#f6ead0";
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      role="img"
      aria-label="Illustrated portrait of Taco, the mascot of the Republic of Kisi"
      className="rounded-2xl"
    >
      <rect width="120" height="120" rx="16" fill={bg} />
      <rect x="3" y="3" width="114" height="114" rx="14" fill="none" stroke={green} strokeWidth="3" />
      {/* tail flourish */}
      <g fill={green}>
        <ellipse cx="28" cy="50" rx="9" ry="24" transform="rotate(22 28 50)" />
        <ellipse cx="37" cy="46" rx="7.5" ry="20" transform="rotate(38 37 46)" opacity="0.85" />
        <ellipse cx="45" cy="44" rx="6" ry="16" transform="rotate(52 45 44)" opacity="0.7" />
      </g>
      {/* body */}
      <ellipse cx="62" cy="72" rx="31" ry="27" fill={body} />
      {/* wing */}
      <ellipse cx="58" cy="74" rx="16" ry="12" fill="#a85d22" opacity="0.65" />
      {/* gold mascot star */}
      <g transform="translate(58 74)" fill="#f0c75e">
        <polygon points="0,-7 2,-2 7,-2 3,1.5 4.5,6.5 0,3.5 -4.5,6.5 -3,1.5 -7,-2 -2,-2" />
      </g>
      {/* neck + head */}
      <rect x="72" y="36" width="17" height="32" rx="8.5" fill={body} />
      <circle cx="82" cy="35" r="14" fill={body} />
      {/* comb */}
      <g fill={comb}>
        <circle cx="74" cy="20" r="6" />
        <circle cx="82" cy="15" r="7" />
        <circle cx="90" cy="20" r="6.5" />
        <circle cx="86" cy="23" r="5" />
      </g>
      {/* beak */}
      <polygon points="95,33 106,37 95,41" fill={gold} />
      {/* wattle */}
      <ellipse cx="92" cy="45" rx="4" ry="6" fill={comb} />
      {/* eye */}
      <circle cx="86" cy="32" r="2.8" fill="#23231f" />
      <circle cx="87.1" cy="31.1" r="1" fill="#ffffff" />
      {/* legs */}
      <g stroke={gold} strokeWidth="3.2" strokeLinecap="round">
        <line x1="56" y1="97" x2="56" y2="109" />
        <line x1="70" y1="97" x2="70" y2="109" />
        <line x1="56" y1="109" x2="49" y2="113" />
        <line x1="56" y1="109" x2="63" y2="113" />
        <line x1="70" y1="109" x2="63" y2="113" />
        <line x1="70" y1="109" x2="77" y2="113" />
      </g>
      {/* ground */}
      <ellipse cx="63" cy="113" rx="35" ry="4" fill={green} opacity="0.22" />
    </svg>
  );
}
