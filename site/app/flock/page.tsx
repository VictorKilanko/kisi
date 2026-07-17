import type { Metadata } from "next";
import { SectionHeading } from "@/components/Cards";
import { DemoContentNotice, FictionDisclaimer } from "@/components/Disclaimer";
import { FlockDirectory } from "@/components/FlockDirectory";
import { chickens } from "@/lib/content";

export const metadata: Metadata = {
  title: "Meet the Flock",
  description:
    "The citizens of the Republic of Kisi — search and filter every chicken " +
    "by name, role, laying status, and personality.",
};

export default function FlockPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <SectionHeading
        kicker="The Citizen Registry"
        title="Meet the Flock"
        lede="Every bird at Kisi is an individual — with a name, a history, allies, rivals, and (in several documented cases) a political agenda. Search the registry."
      />
      <DemoContentNotice />
      <div className="mt-8">
        <FlockDirectory chickens={chickens} />
      </div>
      <FictionDisclaimer />
    </div>
  );
}
