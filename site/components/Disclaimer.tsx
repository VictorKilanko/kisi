import Link from "next/link";

/**
 * The fiction disclaimer — required on every Republic page (Decision D6).
 */
export function FictionDisclaimer() {
  return (
    <aside
      aria-label="Fiction disclaimer"
      className="gazette-rule mt-12 bg-kisi-cream-200 px-5 py-4 text-sm text-kisi-charcoal-600"
    >
      <p>
        <strong className="text-kisi-charcoal-900">
          The Republic of Kisi is fictional.
        </strong>{" "}
        Its citizens are chickens living at Kisi, a real poultry farm in
        southwestern Nigeria. Political stories are satire and entertainment;
        no real person or party is referenced or imitated, and any resemblance
        is coincidental. Characters shown are demonstration content until the
        real flock takes over.{" "}
        <Link href="/disclaimer" className="underline hover:text-kisi-green-700">
          Read the full disclaimer
        </Link>
        .
      </p>
    </aside>
  );
}

export function DemoContentNotice() {
  return (
    <aside
      aria-label="Sample content notice"
      className="mt-6 rounded-lg border border-dashed border-kisi-earth-500 bg-kisi-cream-100 px-5 py-3 text-sm text-kisi-earth-700"
    >
      This section currently shows clearly-labeled <strong>sample content</strong>{" "}
      — demonstration characters and invented storylines. It will be replaced
      with the real chickens and real records of Kisi Farm.
    </aside>
  );
}

export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-kisi-charcoal-600 bg-kisi-cream-200 px-5 py-4 text-sm text-kisi-charcoal-600">
      {children}
    </div>
  );
}
