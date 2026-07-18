/**
 * Original illustrated portrait of the monitor lizard, drawn procedurally
 * so the poster needs no photograph. Deliberately unsettling but not gory:
 * a low, watchful shape in the dark, the way the flock describes it.
 */
export function MonitorLizard({ size = 260 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 200 140"
      width={size}
      height={(size * 140) / 200}
      role="img"
      aria-label="Illustrated portrait of the monitor lizard wanted by the Ministry of Security: a long dark reptile with pale banding, a notched tail, and a forked tongue."
      className="max-w-full"
    >
      {/* night ground */}
      <rect width="200" height="140" fill="#1a1a17" />
      <ellipse cx="100" cy="126" rx="92" ry="12" fill="#0f0f0d" />

      {/* tail — long, tapering, with the identifying notch */}
      <path
        d="M156 96 C176 92 188 84 192 74 C186 80 176 84 168 85 C178 78 184 70 184 62 C178 72 166 80 154 84 Z"
        fill="#3d4a33"
      />
      <path d="M150 88 C164 86 174 80 180 72" stroke="#2a3324" strokeWidth="3" fill="none" />

      {/* body */}
      <path
        d="M44 92 C40 78 52 68 70 66 C92 63 122 66 142 76 C154 82 158 90 152 96 C140 104 110 106 84 104 C64 102 48 100 44 92 Z"
        fill="#4a5a3c"
      />
      {/* banding */}
      {[
        [72, 68, 8],
        [90, 66, 9],
        [108, 68, 9],
        [126, 72, 8],
      ].map(([x, y, r], i) => (
        <ellipse key={i} cx={x} cy={y + 12} rx={r} ry="5" fill="#333f2a" opacity="0.85" />
      ))}
      {/* flank spotting */}
      {[
        [66, 92],
        [80, 96],
        [96, 97],
        [112, 96],
        [128, 92],
      ].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.6" fill="#c9b558" opacity="0.7" />
      ))}

      {/* legs — splayed, low */}
      <path d="M70 100 L62 116 L52 120" stroke="#3d4a33" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M126 98 L134 114 L146 118" stroke="#3d4a33" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M52 120 L44 124 M52 120 L50 126 M52 120 L58 126" stroke="#2a3324" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M146 118 L154 122 M146 118 L148 126 M146 118 L140 126" stroke="#2a3324" strokeWidth="2.5" strokeLinecap="round" />

      {/* head */}
      <path
        d="M44 92 C30 90 16 84 10 76 C16 68 30 62 44 62 C54 62 60 70 60 77 C60 85 54 92 44 92 Z"
        fill="#546544"
      />
      {/* jaw line */}
      <path d="M12 80 C22 84 34 87 46 88" stroke="#2a3324" strokeWidth="2" fill="none" />
      {/* eye — the part everyone remembers */}
      <ellipse cx="38" cy="73" rx="6" ry="5.5" fill="#e8c84a" />
      <ellipse cx="38" cy="73" rx="2" ry="5" fill="#12120f" />
      <circle cx="36" cy="71" r="1.4" fill="#fff" opacity="0.75" />
      {/* nostril */}
      <circle cx="15" cy="74" r="1.4" fill="#2a3324" />
      {/* forked tongue, tasting the air */}
      <path
        d="M10 79 C2 80 -2 77 -6 74 M-6 74 L-2 76 M-6 74 L-2 72"
        stroke="#d4708a"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
