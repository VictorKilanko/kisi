import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="kicker text-kisi-gold-700">Error 404</p>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        This page has wandered off to dust-bathe
      </h1>
      <p className="mt-4 text-kisi-charcoal-600">
        The Ministry of Coop Security has been notified and has, as usual,
        declined to confirm or deny anything. The page you&apos;re looking for
        doesn&apos;t exist — or has been placed somewhere for safekeeping.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-kisi-green-700 px-6 py-3 font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
        >
          Back to the Republic
        </Link>
        <Link
          href="/flock"
          className="rounded-full border border-kisi-green-700 px-6 py-3 font-semibold text-kisi-green-700 hover:bg-kisi-cream-200"
        >
          Meet the Flock
        </Link>
      </div>
    </div>
  );
}
