import type { ReactNode } from "react";
import type { SceneKey } from "@/content/stories";

/**
 * Simple, cheerful, original SVG scene illustrations. Deterministic and
 * license-free, so the look stays consistent. Richer commissioned art can
 * replace these later (see kisikids/assets).
 */
export function KidScene({
  scene,
  className,
}: {
  scene: SceneKey | "farm";
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 320 200"
      className={className}
      role="img"
      aria-label={`Illustration: ${scene}`}
      preserveAspectRatio="xMidYMid slice"
    >
      {/* sky + ground shared by every scene */}
      <rect width="320" height="200" fill="#cdeafe" />
      <rect y="150" width="320" height="50" fill="#8ecf7a" />
      <circle cx="272" cy="42" r="24" fill="#ffd45e" />
      {Scenes[scene] ?? Scenes.farm}
    </svg>
  );
}

const tree = (x: number) => (
  <g key={`t${x}`}>
    <rect x={x - 4} y={110} width="8" height="44" rx="3" fill="#8a5a2b" />
    <circle cx={x} cy={104} r="22" fill="#3f8f52" />
    <circle cx={x - 14} cy={112} r="15" fill="#4ea364" />
    <circle cx={x + 14} cy={112} r="15" fill="#4ea364" />
  </g>
);

const tortoise = (cx: number, cy: number, cracked = false) => (
  <g>
    <ellipse cx={cx} cy={cy} rx="34" ry="22" fill="#3f8f52" />
    <ellipse cx={cx} cy={cy - 4} rx="30" ry="18" fill="#57b06b" />
    {cracked && (
      <g stroke="#2f6b42" strokeWidth="1.5" fill="none">
        <path d={`M${cx - 18} ${cy - 6} L${cx - 4} ${cy}`} />
        <path d={`M${cx + 2} ${cy - 8} L${cx + 12} ${cy + 2}`} />
        <path d={`M${cx - 2} ${cy + 2} L${cx + 6} ${cy + 10}`} />
      </g>
    )}
    <circle cx={cx + 32} cy={cy + 2} r="9" fill="#6ec07f" />
    <circle cx={cx + 35} cy={cy} r="1.6" fill="#23231f" />
    <rect x={cx - 26} y={cy + 16} width="6" height="10" rx="3" fill="#6ec07f" />
    <rect x={cx + 12} y={cy + 16} width="6" height="10" rx="3" fill="#6ec07f" />
  </g>
);

const bird = (x: number, y: number) => (
  <g key={`b${x}${y}`}>
    <ellipse cx={x} cy={y} rx="12" ry="9" fill="#e0568a" />
    <circle cx={x + 10} cy={y - 4} r="6" fill="#e0568a" />
    <polygon points={`${x + 15},${y - 4} ${x + 22},${y - 2} ${x + 15},${y}`} fill="#e0a13a" />
    <circle cx={x + 11} cy={y - 5} r="1.3" fill="#23231f" />
    <path d={`M${x - 4} ${y} q -10 -8 -18 -2`} stroke="#c23f70" strokeWidth="3" fill="none" />
  </g>
);

const Scenes: Record<string, ReactNode> = {
  farm: (
    <g>
      {tree(40)}
      {tree(120)}
      {bird(180, 60)}
    </g>
  ),
  sunrise: (
    <g>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1="272"
          y1="42"
          x2={272 + Math.cos((i / 6) * Math.PI * 2) * 40}
          y2={42 + Math.sin((i / 6) * Math.PI * 2) * 40}
          stroke="#ffd45e"
          strokeWidth="3"
        />
      ))}
      {tree(50)}
      {tree(270)}
      {bird(150, 55)}
    </g>
  ),
  tree: (
    <g>
      <rect x="150" y="80" width="18" height="74" rx="6" fill="#8a5a2b" />
      <circle cx="159" cy="70" r="44" fill="#3f8f52" />
      <circle cx="126" cy="86" r="26" fill="#4ea364" />
      <circle cx="192" cy="86" r="26" fill="#4ea364" />
      {tree(40)}
      {tree(285)}
    </g>
  ),
  tortoise: (
    <g>
      {tree(280)}
      {tortoise(120, 138)}
    </g>
  ),
  "birds-feast": (
    <g>
      <ellipse cx="160" cy="150" rx="34" ry="10" fill="#c9752e" />
      <ellipse cx="160" cy="145" rx="30" ry="8" fill="#e0a13a" />
      {bird(70, 100)}
      {bird(240, 96)}
      {bird(120, 70)}
    </g>
  ),
  "sky-fall": (
    <g>
      <ellipse cx="90" cy="60" rx="26" ry="12" fill="#ffffff" opacity="0.9" />
      <ellipse cx="210" cy="90" rx="30" ry="14" fill="#ffffff" opacity="0.9" />
      {tortoise(160, 118)}
      <path d="M150 96 l-6 -14 M170 96 l6 -14" stroke="#8ecf7a" strokeWidth="3" />
    </g>
  ),
  "mended-shell": (
    <g>
      {tree(280)}
      {tortoise(130, 138, true)}
    </g>
  ),
};
