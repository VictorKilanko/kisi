/**
 * Shown when Supabase environment variables are not set yet, so the app renders
 * something helpful instead of crashing. Purely informational.
 */
export function SetupNotice() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <p className="kicker text-kisi-earth-500">Kisi Farm Records</p>
      <h1 className="font-display text-3xl text-kisi-green-900">Almost ready</h1>
      <p className="mt-3 text-kisi-charcoal-600">
        This app needs a Supabase project to store the farm records. Once it is
        connected, farmers can log in and record their daily data here.
      </p>

      <ol className="mt-6 space-y-3 text-sm">
        <li className="card p-4">
          <strong>1. Create a Supabase project</strong> at supabase.com (free
          tier is fine).
        </li>
        <li className="card p-4">
          <strong>2. Run the schema.</strong> In the Supabase SQL editor, paste
          the contents of{" "}
          <code className="rounded bg-kisi-cream-200 px-1">
            apps/records/supabase/schema.sql
          </code>{" "}
          and run it. This creates the tables and seeds Kisi Farm.
        </li>
        <li className="card p-4">
          <strong>3. Add the keys.</strong> Copy{" "}
          <code className="rounded bg-kisi-cream-200 px-1">.env.example</code> to{" "}
          <code className="rounded bg-kisi-cream-200 px-1">.env.local</code> and
          fill in your project URL and anon key (Supabase → Project Settings →
          API), then restart the dev server.
        </li>
      </ol>

      <p className="mt-6 text-xs text-kisi-charcoal-600">
        Full instructions are in <code>apps/records/README.md</code>.
      </p>
    </div>
  );
}
