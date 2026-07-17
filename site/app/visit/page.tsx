import type { Metadata } from "next";
import { WorldBadge } from "@/components/Badges";
import { PlaceholderNotice } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Visit & Contact",
  description:
    "Contact Kisi Farm — general, partnership, media, and school inquiries, " +
    "and future farm-visit requests.",
};

const INQUIRY_TYPES = [
  { value: "general", label: "General inquiry" },
  { value: "partnership", label: "Partnership / investment" },
  { value: "media", label: "Media" },
  { value: "school", label: "School / education" },
  { value: "visit", label: "Future farm visit" },
];

export default function VisitPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="flex flex-wrap items-center gap-2">
        <WorldBadge world="fact" />
      </div>
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        Visit &amp; Contact
      </h1>
      <p className="mt-3 text-kisi-charcoal-600">
        Kisi Farm is in southwestern Nigeria. For the flock&apos;s safety
        (biosecurity is real, even if the Ministry of Coop Security is not),
        we don&apos;t publish the precise location, and farm visits will be
        arranged individually once the visits programme opens.
      </p>

      <div className="mt-8">
        <PlaceholderNotice>
          <strong>Form not yet live:</strong> secure form handling (with spam
          protection and a real inbox) arrives in a later phase. Until then
          this form is a preview and does not send. A public contact email
          will be added once the owner confirms the address to publish.
        </PlaceholderNotice>
      </div>

      <form
        className="mt-8 space-y-5 rounded-2xl border border-kisi-green-900/10 bg-white p-6"
        aria-label="Contact form (preview — not yet active)"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="text-sm font-semibold">Your name</span>
            <input
              type="text"
              name="name"
              disabled
              placeholder="Coming soon"
              className="mt-1 w-full rounded-lg border border-kisi-green-900/20 bg-kisi-cream-100 px-3 py-2 text-sm"
            />
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Email address</span>
            <input
              type="email"
              name="email"
              disabled
              placeholder="Coming soon"
              className="mt-1 w-full rounded-lg border border-kisi-green-900/20 bg-kisi-cream-100 px-3 py-2 text-sm"
            />
          </label>
        </div>
        <label className="block">
          <span className="text-sm font-semibold">Inquiry type</span>
          <select
            name="type"
            disabled
            className="mt-1 w-full rounded-lg border border-kisi-green-900/20 bg-kisi-cream-100 px-3 py-2 text-sm"
          >
            {INQUIRY_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Message</span>
          <textarea
            name="message"
            rows={5}
            disabled
            placeholder="The form goes live in a later phase."
            className="mt-1 w-full rounded-lg border border-kisi-green-900/20 bg-kisi-cream-100 px-3 py-2 text-sm"
          />
        </label>
        <button
          type="button"
          disabled
          className="cursor-not-allowed rounded-full bg-kisi-charcoal-600/30 px-6 py-3 font-semibold text-white"
        >
          Sending arrives in a later phase
        </button>
      </form>

      <section className="mt-10 rounded-2xl bg-kisi-cream-200 p-6 text-sm text-kisi-charcoal-600">
        <h2 className="kicker text-kisi-charcoal-900">Social media</h2>
        <p className="mt-2">
          Links to the farm&apos;s social channels will appear here once the
          owner confirms the handles. The Republic&apos;s Press Secretary has
          requested a verified account; the request has been filed
          appropriately.
        </p>
      </section>
    </div>
  );
}
