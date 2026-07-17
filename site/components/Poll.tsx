"use client";

import { useCallback, useSyncExternalStore } from "react";

/**
 * Entertainment poll — fictional and non-binding, and it says so on its
 * face. Votes live in the visitor's own browser (localStorage) only: we
 * publish no tallies because we have none, and we fabricate none.
 *
 * localStorage is an external store, so it's read via useSyncExternalStore
 * (server snapshot: null → renders the unvoted state, then hydrates).
 */

const listeners = new Set<() => void>();
function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}
function emit() {
  for (const cb of listeners) cb();
}
function readVote(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}
function writeVote(key: string, value: string | null) {
  try {
    if (value === null) localStorage.removeItem(key);
    else localStorage.setItem(key, value);
  } catch {
    /* private mode etc. — the poll simply won't remember */
  }
  emit();
}

export function Poll({
  id,
  question,
  options,
  resultJoke,
}: {
  id: string;
  question: string;
  options: string[];
  resultJoke: string;
}) {
  const storageKey = `kisi-poll-${id}`;
  const getSnapshot = useCallback(() => readVote(storageKey), [storageKey]);
  const choice = useSyncExternalStore(subscribe, getSnapshot, () => null);

  return (
    <section
      aria-label={`Entertainment poll: ${question}`}
      className="rounded-2xl border border-kisi-gold-500/40 bg-white p-6"
    >
      <p className="kicker text-kisi-gold-500">
        Entertainment poll · fictional · non-binding
      </p>
      <h3 className="font-display mt-2 text-xl font-bold text-kisi-green-900">
        {question}
      </h3>
      {choice ? (
        <div className="mt-4">
          <p className="text-sm">
            Your vote: <strong>{choice}</strong>{" "}
            <span className="text-kisi-charcoal-600">(stored on this device only)</span>
          </p>
          <p className="mt-2 text-sm text-kisi-charcoal-600">{resultJoke}</p>
          <button
            type="button"
            onClick={() => writeVote(storageKey, null)}
            className="mt-3 text-xs font-semibold text-kisi-green-700 underline"
          >
            Change my vote
          </button>
        </div>
      ) : (
        <ul className="mt-4 space-y-2">
          {options.map((o) => (
            <li key={o}>
              <button
                type="button"
                onClick={() => writeVote(storageKey, o)}
                className="w-full rounded-lg border border-kisi-green-900/15 bg-kisi-cream-100 px-4 py-2.5 text-left text-sm font-medium hover:bg-kisi-cream-200"
              >
                {o}
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-xs text-kisi-charcoal-600">
        No tallies are collected or published — this poll is part of the
        Republic&apos;s fiction, and no chicken is bound by its result.
      </p>
    </section>
  );
}
