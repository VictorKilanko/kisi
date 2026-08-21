"use client";

import type { KidPrintable } from "@/content/printables";

/**
 * A print-friendly sheet: black line art on white so a child can print (browser
 * Print -> a clean A4 page) and colour. The `.printable-sheet` prints alone (see
 * globals.css print rules). Real high-res art can replace the SVG later.
 */
export function PrintableSheet({ printable }: { printable: KidPrintable }) {
  return (
    <div>
      <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-kisi-charcoal-600">{printable.instruction}</p>
        <button
          type="button"
          onClick={() => window.print()}
          className="rounded-full bg-kids-sky px-6 py-3 font-bold text-kisi-charcoal-900"
        >
          🖨️ Print this page
        </button>
      </div>

      <div className="printable-sheet mx-auto max-w-2xl rounded-2xl border border-kisi-green-900/15 bg-white p-6">
        <div className="flex items-center justify-between border-b border-black/10 pb-2">
          <p className="font-display text-xl font-black text-black">
            {printable.title}
          </p>
          <p className="text-sm text-black/60">Kisi Kids · kids.kisi.africa</p>
        </div>
        <p className="mt-3 text-black/80">{printable.instruction}</p>
        <div className="mt-4">
          {printable.slug === "count-the-eggs" ? <CountTheEggs /> : <ColourZizi />}
        </div>
      </div>
    </div>
  );
}

/** Line-art hen outline for colouring (Zizi). */
function ColourZizi() {
  return (
    <svg viewBox="0 0 240 220" className="mx-auto w-full max-w-md" role="img" aria-label="Outline of Zizi to colour in">
      <g fill="none" stroke="#111" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
        {/* tail */}
        <path d="M70 130 q-30 -10 -34 -44 q28 8 40 34" />
        {/* body */}
        <ellipse cx="120" cy="140" rx="58" ry="48" />
        {/* wing */}
        <path d="M104 140 q22 -18 44 0 q-22 20 -44 0 z" />
        {/* neck + head */}
        <path d="M158 118 q10 -40 34 -46 q22 6 20 40" />
        <circle cx="184" cy="76" r="26" />
        {/* comb */}
        <circle cx="176" cy="48" r="8" />
        <circle cx="190" cy="44" r="9" />
        {/* beak */}
        <polygon points="208,74 226,80 208,86" />
        {/* eye */}
        <circle cx="190" cy="72" r="3.5" />
        {/* legs */}
        <path d="M104 186 v22 m-10 0 h20 M136 186 v22 m-10 0 h20" />
      </g>
    </svg>
  );
}

/** Count-to-five egg activity, line art with number boxes. */
function CountTheEggs() {
  return (
    <svg viewBox="0 0 480 220" className="w-full" role="img" aria-label="Five eggs to count and colour">
      <g fill="none" stroke="#111" strokeWidth="3">
        {[0, 1, 2, 3, 4].map((n) => {
          const x = 48 + n * 92;
          return (
            <g key={n}>
              <ellipse cx={x} cy="70" rx="30" ry="42" />
              <rect x={x - 20} y="140" width="40" height="40" rx="6" />
            </g>
          );
        })}
      </g>
      <text x="240" y="210" textAnchor="middle" fontSize="16" fill="#555">
        Write 1, 2, 3, 4, 5 in the boxes, then colour the eggs.
      </text>
    </svg>
  );
}
