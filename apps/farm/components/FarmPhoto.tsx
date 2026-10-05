import Image from "next/image";
import Link from "next/link";

/**
 * A real farm photograph wrapped in the brand's own frame so it sits in the
 * same visual system as the illustrated cards: rounded corners, a green/earth
 * hairline border, and a light green grade over the image so it reads as "Kisi
 * green" next to the cream/gold palette. The grade is deliberately subtle, the
 * photos are here to prove the farm is real, so they must still look real.
 *
 * Convention on this site: photography = the real farm (credibility, the shop);
 * illustration (ChickenPortrait) = the story world (the named hens, the
 * Republic). Keeping the two treatments distinct is intentional, not a clash.
 */
export function FarmPhoto({
  src,
  alt,
  caption,
  href,
  linkLabel,
  className,
  aspect = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  caption?: string;
  /** When set, the framed photo becomes a link (e.g. to /support). */
  href?: string;
  /**
   * Accessible name for the link when `href` is set. Give it a purpose the alt
   * text alone doesn't carry (e.g. "Support the chickens"), so a screen-reader
   * user knows where the photo leads. Falls back to the alt text.
   */
  linkLabel?: string;
  className?: string;
  /** Tailwind aspect-ratio utility; default 4:3. */
  aspect?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const inner = (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-cover${
          href
            ? " transition-transform duration-500 group-hover:scale-105 group-focus-visible:scale-105"
            : ""
        }`}
      />
      {/* Subtle brand grade: a little green depth from the bottom, no heavy
          filtering that would make the farm look staged. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kisi-green-900/30 via-transparent to-transparent"
      />
    </>
  );

  const frameClass = `relative ${aspect} overflow-hidden rounded-2xl border border-kisi-green-700/20`;

  return (
    <figure className={className}>
      {href ? (
        <Link
          href={href}
          aria-label={linkLabel ? `${linkLabel}: ${alt}` : alt}
          className={`group block ${frameClass} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-kisi-gold-500`}
        >
          {inner}
        </Link>
      ) : (
        <div className={frameClass}>{inner}</div>
      )}
      {caption ? (
        <figcaption className="kicker mt-2 text-kisi-charcoal-600">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
