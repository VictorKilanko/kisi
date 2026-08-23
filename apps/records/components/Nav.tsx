import Link from "next/link";
import { signOut } from "@/app/(app)/actions";

export function Nav({ farmName }: { farmName: string }) {
  return (
    <header className="sticky top-0 z-10 border-b border-[#ece2cc] bg-kisi-cream-100/95 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-wider text-kisi-earth-500">
            Kisi Farm Records
          </p>
          <p className="font-display text-lg leading-none text-kisi-green-900">
            {farmName}
          </p>
        </div>
        <nav className="flex items-center gap-1 text-sm font-semibold">
          <Link href="/today" className="rounded-lg px-3 py-2 text-kisi-green-700 hover:bg-kisi-cream-200">
            Today
          </Link>
          <Link href="/records" className="rounded-lg px-3 py-2 text-kisi-green-700 hover:bg-kisi-cream-200">
            History
          </Link>
          <form action={signOut}>
            <button type="submit" className="rounded-lg px-3 py-2 text-kisi-charcoal-600 hover:bg-kisi-cream-200">
              Log out
            </button>
          </form>
        </nav>
      </div>
    </header>
  );
}
