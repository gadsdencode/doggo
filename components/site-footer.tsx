import Link from "next/link";
import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-3xl tracking-[-0.04em]">
            Dad <span className="text-signal">&</span> Doggo
          </p>
          <p className="mt-2 max-w-sm text-sm leading-6 text-quiet">
            Notes from the leash end. Happy is a lab and hound mix, still a puppy, already in charge of the route.
          </p>
        </div>
        <div className="flex flex-col gap-3 font-mono text-[0.72rem] tracking-[0.16em] uppercase">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} className="text-quiet hover:text-ink">
              {item.label}
            </Link>
          ))}
          <a href="/feed.xml" className="text-quiet hover:text-ink">
            Feed
          </a>
        </div>
      </div>
    </footer>
  );
}
