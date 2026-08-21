import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { stories, getStory } from "@/content/stories";
import { StoryReader } from "@/components/StoryReader";

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return { title: "Story" };
  return { title: story.title, description: `${story.intro} ${story.origin}` };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link href="/stories" className="text-sm font-bold text-kisi-green-700 hover:underline">
        &larr; All stories
      </Link>
      <h1 className="mt-2 font-display text-3xl font-black text-kisi-green-900 sm:text-4xl">
        {story.title}
      </h1>
      <p className="mt-1 text-sm text-kisi-charcoal-600">{story.origin}</p>

      <div className="mt-5">
        <StoryReader story={story} />
      </div>
    </div>
  );
}
