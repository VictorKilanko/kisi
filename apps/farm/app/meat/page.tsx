import type { Metadata } from "next";
import { OrderForm } from "@/components/OrderForm";
import { FarmPhoto } from "@/components/FarmPhoto";
import { SectionHeading } from "@/components/Cards";
import { PlaceholderNotice } from "@/components/Disclaimer";
import { AFRICA_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Order Chicken Meat",
  description:
    "Fresh farm chicken from Kisi Farm, raised on the farm and processed to " +
    "order. Pick the day you want yours and we'll have it ready. Order by " +
    "WhatsApp or send an enquiry.",
};

const reasons = [
  {
    title: "Raised here, not trucked in",
    body: "Raised on our own farm, on our feed and clean water. You know exactly where your chicken came from.",
  },
  {
    title: "Processed the day you pick",
    body: "We don't keep birds sitting in a freezer for months. Choose your day and we prepare yours fresh that day.",
  },
  {
    title: "Order the amount you need",
    body: "A few birds for the family or a larger order for an event. Tell us how many and we'll confirm what we can do.",
  },
];

export default function MeatPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="kicker text-kisi-green-700">Kisi Farm · Fresh Chicken</p>
      <h1 className="mt-3 max-w-3xl font-display text-4xl font-black text-kisi-green-900">
        Farm chicken, raised right and processed to order.
      </h1>
      <p className="mt-3 max-w-2xl text-kisi-charcoal-600">
        We are opening chicken meat sales to the people around us. Pick the day
        you want yours and we prepare it fresh that day, no long freezer
        storage. Book a day below and we confirm the price and what we have
        before anything is paid.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="rounded-2xl border border-kisi-green-900/10 bg-white p-6"
          >
            <h2 className="font-display text-xl font-bold text-kisi-green-900">
              {r.title}
            </h2>
            <p className="mt-2 text-sm text-kisi-charcoal-900">{r.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            kicker="Book your day"
            title="Choose a day and tell us what you need"
          />
          <OrderForm product="meat" />
        </div>

        <aside className="rounded-3xl bg-kisi-cream-200 p-6">
          <FarmPhoto
            src="/photos/poultry-house-2.jpg"
            alt="Birds growing on fresh litter inside a poultry house at Kisi Farm"
            caption="Inside one of our poultry houses at Kisi"
            className="mb-6"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <h2 className="font-display text-xl font-bold text-kisi-green-900">
            How the day works
          </h2>
          <ol className="mt-3 space-y-2 text-sm text-kisi-charcoal-900">
            <li>1. Pick a day on the form and tell us how many birds.</li>
            <li>2. We confirm the price, the size and that your day works.</li>
            <li>3. We prepare your chicken fresh on that day for pickup or delivery.</li>
          </ol>
          <p className="mt-4 text-sm text-kisi-charcoal-900">
            Meet the flock behind the farm over in{" "}
            <a
              href={AFRICA_URL}
              className="font-semibold text-kisi-green-700 hover:underline"
            >
              the Republic
            </a>
            .
          </p>
          <div className="mt-5">
            <PlaceholderNotice>
              <strong>Prices and weights depend on the batch.</strong> Breeds,
              sizes and prices are set per order for now, so we quote you
              directly when you book. We will not post numbers we cannot stand
              behind.
            </PlaceholderNotice>
          </div>
        </aside>
      </div>
    </div>
  );
}
