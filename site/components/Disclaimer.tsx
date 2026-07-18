/**
 * A quiet notice for things the farm genuinely hasn't published yet
 * (real figures, real records). Used sparingly — never on story pages.
 */
export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-dashed border-kisi-charcoal-600 bg-kisi-cream-200 px-5 py-4 text-sm text-kisi-charcoal-600">
      {children}
    </div>
  );
}
