/**
 * Kisi brand mark for the farm site header. Dede's face in the seal badge,
 * the same lockup the Republic uses, so the two properties read as one brand.
 * Pure vector primitives, crisp from favicon to billboard. All original.
 */

const GREEN = "#1f5130"; // kisi-green-900
const CREAM = "#faf5e9"; // kisi-cream-100

export function DedeMark({
  size = 40,
  title,
  className,
}: {
  size?: number;
  title?: string;
  className?: string;
}) {
  const BODY = "#c9752e";
  const COMB = "#b3261e";
  const BEAK = "#e0a13a";
  return (
    <svg
      viewBox="0 0 64 64"
      width={size}
      height={size}
      className={className}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      {/* seal badge */}
      <circle cx="32" cy="32" r="31" fill={GREEN} />
      <circle cx="32" cy="32" r="27.5" fill={CREAM} />
      {/* comb */}
      <g fill={COMB}>
        <circle cx="24" cy="20" r="4.5" />
        <circle cx="31" cy="16.5" r="5" />
        <circle cx="38" cy="20" r="4.5" />
      </g>
      {/* head */}
      <circle cx="31" cy="34" r="15" fill={BODY} />
      {/* beak */}
      <polygon points="45,32 55,35.5 45,39" fill={BEAK} />
      {/* wattle */}
      <ellipse cx="43" cy="43" rx="3.2" ry="5" fill={COMB} />
      {/* eye */}
      <circle cx="35" cy="31" r="3.4" fill="#23231f" />
      <circle cx="36.2" cy="29.9" r="1.1" fill="#ffffff" />
    </svg>
  );
}

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <span className="flex items-center gap-2.5">
      <DedeMark size={size} />
      <span className="font-display text-xl font-bold text-kisi-green-900">
        Kisi Farm
      </span>
    </span>
  );
}
