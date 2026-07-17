"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      <p className="kicker text-kisi-earth-700">Unexpected error</p>
      <h1 className="font-display mt-3 text-3xl font-black text-kisi-green-900">
        Something ruffled the feathers
      </h1>
      <p className="mt-4 text-kisi-charcoal-600">
        An unexpected error occurred while loading this page. A Panel of
        Inquiry has been constituted (eight members, refreshments pending).
        Please try again.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 rounded-full bg-kisi-green-700 px-6 py-3 font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
      >
        Try again
      </button>
    </div>
  );
}
