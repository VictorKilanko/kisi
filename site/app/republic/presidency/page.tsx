import type { Metadata } from "next";
import Link from "next/link";
import { ChickenCard, SectionHeading, formatDate } from "@/components/Cards";
import { ChickenPortrait } from "@/components/ChickenPortrait";
import { Poll } from "@/components/Poll";
import { executiveOrders, getChicken, presidentialDiary } from "@/lib/content";

export const metadata: Metadata = {
  title: "The Presidency",
  description:
    "Her Excellency President Adédoyin “Mama Decree” Ọlásunkànmí, the Vice " +
    "President, executive orders, and the weekly presidential diary.",
};

export default function PresidencyPage() {
  const president = getChicken("adedoyin-mama-decree");
  const vp = getChicken("baba-segun");

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="font-display mt-3 text-4xl font-black text-kisi-green-900">
        The Presidency
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        The executive branch of the Republic: one President, one Vice
        President, one immaculate queue, and a filing system that recently
        achieved national fame.
      </p>

      {/* President hero */}
      <div className="mt-10 grid items-center gap-8 rounded-3xl border-2 border-kisi-gold-500 bg-white p-8 lg:grid-cols-[auto_1fr]">
        <ChickenPortrait chicken={president} size={220} framed />
        <div>
          <p className="kicker text-kisi-gold-700">{president.honorific}</p>
          <h2 className="font-display mt-1 text-3xl font-black text-kisi-green-900">
            {president.name} “{president.nickname}”
          </h2>
          {president.oriki && (
            <p className="mt-2 italic text-kisi-charcoal-600">
              {president.oriki.line}{" "}
              <span className="not-italic">({president.oriki.meaning})</span>
            </p>
          )}
          <p className="mt-4 text-kisi-charcoal-600">{president.shortBio}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={`/flock/${president.id}`}
              className="rounded-full bg-kisi-green-700 px-5 py-2 text-sm font-semibold text-kisi-cream-100 hover:bg-kisi-green-900"
            >
              Full profile
            </Link>
            <Link
              href="/news/punctual-breakfast-address"
              className="rounded-full border border-kisi-green-700 px-5 py-2 text-sm font-semibold text-kisi-green-700 hover:bg-kisi-cream-200"
            >
              Read the Breakfast Address
            </Link>
          </div>
        </div>
      </div>

      {/* VP */}
      <div className="mt-12">
        <SectionHeading kicker="Second in Command" title="The Vice President" />
        <div className="max-w-md">
          <ChickenCard chicken={vp} />
        </div>
      </div>

      {/* Executive orders */}
      <div className="mt-16">
        <SectionHeading
          kicker="The Gazette"
          title="Executive Orders"
          lede="Signed with a flourish and read aloud twice — once for the record, once for the hard of hearing."
        />
        <ol className="space-y-4">
          {executiveOrders.map((o) => (
            <li
              key={o.number}
              className="gazette-rule rounded-b-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-kisi-indigo-900">
                  Executive Order No. {o.number} — {o.title}
                </h3>
                <span className="text-xs text-kisi-charcoal-600">
                  {formatDate(o.date)}
                </span>
              </div>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{o.summary}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Weekly diary */}
      <div className="mt-16">
        <SectionHeading
          kicker="This Week"
          title="The Presidential Diary"
          lede="Published weekly by the Office of the Press Secretary, lightly edited by Her Excellency, heavily edited back."
        />
        <ol className="grid gap-4 md:grid-cols-2">
          {presidentialDiary.map((d) => (
            <li key={d.day} className="rounded-2xl border border-kisi-green-900/10 bg-white p-5">
              <h3 className="kicker text-kisi-gold-700">{d.day}</h3>
              <p className="mt-2 text-sm text-kisi-charcoal-600">{d.entry}</p>
            </li>
          ))}
        </ol>
      </div>

      {/* Approval poll */}
      <div className="mt-16 max-w-xl">
        <SectionHeading
          kicker="The National Mood"
          title="Presidential approval"
          lede="The Republic's most scientific instrument, in the sense that it is an instrument."
        />
        <Poll
          id="presidential-approval"
          question="How is Her Excellency doing?"
          options={[
            "Approve — breakfast has never been so punctual",
            "Disapprove — on principle (NGA voter)",
            "Undecided until the next recount",
            "I am here for the sports coverage",
          ]}
          resultJoke="The Bureau of Egg Statistics declines to publish exit polls. The Presidency has announced the result anyway: 'favourable.'"
        />
      </div>

    </div>
  );
}
