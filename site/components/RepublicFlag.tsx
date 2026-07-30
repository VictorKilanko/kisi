import { LogoMark } from "@/components/Logo";

/**
 * The flag of the Republic of Kisi. Three bands in the national colours —
 * green for the farm, gold for the morning sun, indigo for official paperwork
 * (of which there is a great deal) — behind the national seal (the crest).
 *
 * Responsive: fills its parent's width at a 3:2 flag ratio. The seal scales
 * with the flag, so one component works from a hero to a footer chip.
 */
export function RepublicFlag({ className = "" }: { className?: string }) {
  return (
    <div
      role="img"
      aria-label="The flag of the Republic of Kisi — green, gold, and indigo bands behind the national seal"
      className={`relative isolate overflow-hidden rounded-xl shadow-md ring-1 ring-kisi-green-900/15 ${className}`}
      style={{ aspectRatio: "3 / 2" }}
    >
      <div className="absolute inset-0 -z-10 flex flex-col">
        <div className="flex-1 bg-kisi-green-900" />
        <div className="flex-1 bg-kisi-gold-500" />
        <div className="flex-1 bg-kisi-indigo-800" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <LogoMark className="h-[62%] w-auto drop-shadow" />
      </div>
    </div>
  );
}
