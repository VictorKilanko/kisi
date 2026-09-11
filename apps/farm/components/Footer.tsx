import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { AFRICA_URL } from "@/lib/site";

/** kisifarm footer, with the links out to the rest of the Kisi universe. */
export function Footer() {
  return (
    <footer className="mt-16 border-t border-kisi-green-700/15 bg-kisi-cream-200">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 text-sm md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-bold text-kisi-green-900">
            Kisi Farm
          </p>
          <p className="mt-2 text-kisi-charcoal-600">
            Farm-fresh eggs and day-old chicks from a working poultry farm in
            southwestern Nigeria. Every egg was laid by a hen with a name.
          </p>
        </div>
        <div>
          <p className="kicker text-kisi-charcoal-600">Support &amp; explore</p>
          <ul className="mt-2 space-y-1">
            <li>
              <Link href="/support" className="hover:text-kisi-green-700">
                Support the chickens
              </Link>
            </li>
            <li>
              <Link
                href="/build-the-farm"
                className="hover:text-kisi-green-700"
              >
                Build the Farm (put your name on it)
              </Link>
            </li>
            <li>
              <a href={AFRICA_URL} className="hover:text-kisi-green-700">
                Kisi, the Republic run by chickens
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="kicker text-kisi-charcoal-600">Farm news</p>
          <p className="mt-2 text-kisi-charcoal-600">
            Egg availability and farm updates, now and then. No spam.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="border-t border-kisi-green-700/10 px-4 py-4 text-center text-xs text-kisi-charcoal-600">
        &copy; {new Date().getFullYear()} Kisi Farm. A working poultry farm.
      </div>
    </footer>
  );
}
