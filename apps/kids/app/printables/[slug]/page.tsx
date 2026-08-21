import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { printables, getPrintable } from "@/content/printables";
import { PrintableSheet } from "@/components/PrintableSheet";

export function generateStaticParams() {
  return printables.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getPrintable(slug);
  if (!p) return { title: "Printable" };
  return { title: p.title, description: p.description };
}

export default async function PrintablePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const printable = getPrintable(slug);
  if (!printable) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/printables"
        className="no-print text-sm font-bold text-kisi-green-700 hover:underline"
      >
        &larr; All printables
      </Link>
      <h1 className="no-print mt-2 font-display text-3xl font-black text-kisi-green-900">
        {printable.title}
      </h1>
      <div className="mt-5">
        <PrintableSheet printable={printable} />
      </div>
    </div>
  );
}
