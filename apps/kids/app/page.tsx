import { chickens } from "@kisi/canon";
import { ChickenPortrait } from "@kisi/ui";
import { AFRICA_URL, FARM_URL } from "@/lib/site";

/**
 * kisikids home (Phase 2 scaffold, greenfield). A friendly "hatching soon"
 * placeholder that proves the app builds and draws the same cast from the
 * shared canon. The full kids channel (stories, songs, learning, merch) is a
 * later engagement.
 */
const friends = chickens.slice(0, 4);

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <p className="kicker text-kids-sky">Kisi Kids</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-kisi-green-900 md:text-6xl">
        Our farm friends are hatching a whole world for you.
      </h1>
      <p className="mx-auto mt-5 max-w-2xl text-lg text-kisi-charcoal-900">
        Stories, songs and gentle lessons about animals, food and kindness, with
        the chickens of Kisi. It is coming soon.
      </p>

      <ul className="mt-12 flex flex-wrap justify-center gap-6">
        {friends.map((friend) => (
          <li key={friend.id} className="w-32">
            <div className="mx-auto w-28">
              <ChickenPortrait chicken={friend} size={112} />
            </div>
            <p className="mt-3 font-display font-bold text-kisi-green-900">
              {friend.name}
            </p>
          </li>
        ))}
      </ul>

      <div className="mt-14 flex flex-wrap justify-center gap-4 text-sm font-semibold">
        <a
          href={AFRICA_URL}
          className="rounded-full bg-kids-sky px-6 py-3 font-bold text-kisi-charcoal-900 hover:opacity-90"
        >
          Visit the Republic
        </a>
        <a
          href={FARM_URL}
          className="rounded-full bg-kids-leaf px-6 py-3 font-bold text-kisi-charcoal-900 hover:opacity-90"
        >
          Visit the Farm
        </a>
      </div>
    </div>
  );
}
