import Link from "next/link";
import type { Post } from "@/content/posts";
import { formatDate, readingMinutes } from "@/lib/posts";

export function PostRow({ post, index }: { post: Post; index: number }) {
  return (
    <li className="border-b border-line">
      <Link
        href={`/journal/${post.slug}`}
        className="group grid gap-2 py-6 md:grid-cols-[3.5rem_8.5rem_minmax(0,1fr)_auto] md:items-baseline md:gap-6"
      >
        <span className="font-mono text-xs tracking-[0.14em] text-signal">
          {String(index).padStart(2, "0")}
        </span>
        <time
          dateTime={post.date}
          className="font-mono text-xs tracking-[0.08em] text-quiet uppercase"
        >
          {formatDate(post.date)}
        </time>
        <span className="min-w-0">
          <span className="font-display block text-2xl tracking-[-0.03em] transition-colors group-hover:text-signal sm:text-[1.75rem]">
            {post.title}
          </span>
          <span className="mt-1 block text-sm leading-6 text-quiet md:hidden">
            {post.location}
          </span>
          <span className="sr-only">{readingMinutes(post)} minute read</span>
        </span>
        <span className="hidden text-sm text-quiet md:block">{post.location}</span>
      </Link>
    </li>
  );
}
