/**
 * The Kisi emblem, one iconic mark that carries the whole enterprise, the way
 * John Deere's deer or Pioneer's sun carry theirs.
 *
 *   • the cog / sunburst ring  → agricultural engineering + energy + the dawn a
 *                                 rooster answers to (broad agriculture)
 *   • the crossed wheat ears   → crops
 *   • the golden egg + comb    → the poultry heart of the farm and its economy
 *   • the ring reads as a seal → the Republic of Kisi
 *
 * All original. Pure vector primitives so it stays crisp from favicon to billboard.
 */

const GREEN = "#1f5130"; // kisi-green-900
const GOLD = "#d9a02b"; // kisi-gold-500
const GOLD_LIGHT = "#f0c14b";
const CREAM = "#faf5e9"; // kisi-cream-100

const TEETH = 12;

export function LogoMark({
  size = 40,
  title,
  className,
}: {
  size?: number;
  title?: string;
  className?: string;
}) {
  const cx = 32;
  const cy = 32;
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

      {/* cog / sunburst teeth, engineering + energy + sunrise */}
      <g fill={GREEN}>
        {Array.from({ length: TEETH }).map((_, i) => (
          <rect
            key={i}
            x={cx - 2.4}
            y={1.5}
            width={4.8}
            height={9}
            rx={1.4}
            transform={`rotate(${(360 / TEETH) * i} ${cx} ${cy})`}
          />
        ))}
      </g>

      {/* seal body */}
      <circle cx={cx} cy={cy} r={26} fill={GREEN} />
      <circle cx={cx} cy={cy} r={22.5} fill={CREAM} />

      {/* crossed wheat ears behind the egg, crops */}
      <g
        stroke={GREEN}
        strokeWidth={1.6}
        strokeLinecap="round"
        fill="none"
        opacity={0.9}
      >
        {/* left ear */}
        <path d="M32 47 L20 24" />
        <path d="M22.5 29 q-4 -1 -6 -4" />
        <path d="M24 33 q-4 -1 -6 -4" />
        <path d="M25.5 37 q-4 -1 -6 -4" />
        {/* right ear */}
        <path d="M32 47 L44 24" />
        <path d="M41.5 29 q4 -1 6 -4" />
        <path d="M40 33 q4 -1 6 -4" />
        <path d="M38.5 37 q4 -1 6 -4" />
      </g>

      {/* the egg, the poultry heart + the economy */}
      <path
        d="M32 22 C25 22 23 32 23 38 C23 45 27 49 32 49 C37 49 41 45 41 38 C41 32 39 22 32 22 Z"
        fill={GOLD}
      />
      <path
        d="M32 22 C25 22 23 32 23 38 C23 42 24.5 45 27 47 C26 44 26 32 30 24 C31 23 31.5 22 32 22 Z"
        fill={GOLD_LIGHT}
      />

      {/* the comb, unmistakably poultry, a proud little crown */}
      <path
        d="M27 22 q1.5 -4 3 0 q1.5 -4 3 0 q1.5 -4 3 0 q0.5 1.5 -1 2 h-8 q-1.5 -0.5 0 -2 Z"
        fill={GREEN}
      />
    </svg>
  );
}

/**
 * Taco's face, used as the wordmark lockup for now, to push the mascot's
 * face out. A compact profile head in the seal badge; reads down to favicon
 * size. The crest LogoMark above is unchanged and still carries the flag seal.
 */
export function TacoMark({
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

export function Logo({
  size = 36,
  showWordmark = true,
  tagline = false,
  className = "",
}: {
  size?: number;
  showWordmark?: boolean;
  tagline?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <TacoMark size={size} />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-xl font-black tracking-tight text-kisi-green-900">
            KISI
          </span>
          {tagline && (
            <span className="kicker mt-0.5 text-[0.6rem] text-kisi-charcoal-600">
              The Republic of Kisi
            </span>
          )}
        </span>
      )}
    </span>
  );
}
