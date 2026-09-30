"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import { site } from "@/lib/site";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="group min-w-0">
          <span className="font-display block text-[1.35rem] leading-none tracking-[-0.04em]">
            Dad <span className="text-signal">&</span> Doggo
          </span>
          <span className="mt-1 block font-mono text-[0.65rem] tracking-[0.18em] text-quiet uppercase">
            {site.kicker}
          </span>
        </Link>
        <div className="flex items-center gap-6 sm:gap-8">
          <p className="hidden font-mono text-[0.68rem] tracking-[0.14em] text-quiet uppercase lg:block">
            Happy · lab / hound · puppy
          </p>
          <nav aria-label="Primary" className="flex items-center gap-5">
            {site.nav.map((item) => {
              const current = isCurrent(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className={`font-mono text-[0.72rem] tracking-[0.16em] uppercase transition-colors ${
                    current ? "text-ink" : "text-quiet hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
