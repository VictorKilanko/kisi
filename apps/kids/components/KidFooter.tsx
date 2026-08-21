import { AFRICA_URL, FARM_URL } from "@/lib/site";

/** Calm footer with a grown-ups note (child-safe, no data collection) and universe links. */
export function KidFooter() {
  return (
    <footer className="mt-16 bg-kisi-green-900 text-kisi-cream-100">
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-10 sm:grid-cols-2">
        <div>
          <p className="font-display text-xl font-black">Kisi Kids</p>
          <p className="mt-2 text-sm text-kisi-cream-100/85">
            Stories, songs, words and heroes from Africa, with Dede and Zizi.
            Videos are coming soon to YouTube.
          </p>
        </div>
        <div className="text-sm">
          <p className="kicker text-kids-sun">For grown-ups</p>
          <p className="mt-2 text-kisi-cream-100/85">
            Kisi Kids is made to be safe for children: no ads, and we do not
            collect any information about your child. A parents&rsquo; area is on
            the way.
          </p>
          <p className="mt-3 space-x-3 text-kisi-cream-100/85">
            <a href={AFRICA_URL} className="underline hover:text-kids-sun">
              The Republic
            </a>
            <a href={FARM_URL} className="underline hover:text-kids-sun">
              Kisi Farm
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
