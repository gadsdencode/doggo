import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article-body";
import { CoverPlate } from "@/components/cover-plate";
import { BlurFade } from "@/components/ui/blur-fade";
import { jsonLd } from "@/lib/json-ld";
import { formatDate, getNeighbors, getPost, getPosts, publishedIso, readingMinutes } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    return { title: "Missing note" };
  }

  const path = `/journal/${post.slug}`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: path,
      publishedTime: publishedIso(post.date),
      authors: [site.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function AdventurePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  const { newer, older } = getNeighbors(post.slug);

  const path = `/journal/${post.slug}`;

  return (
    <article className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-8 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: publishedIso(post.date),
            dateModified: publishedIso(post.date),
            author: {
              "@type": "Person",
              name: site.author,
            },
            mainEntityOfPage: absoluteUrl(path),
            url: absoluteUrl(path),
            image: absoluteUrl(`${path}/opengraph-image`),
          }),
        }}
      />
      <Link
        href="/journal"
        className="font-mono text-[0.72rem] tracking-[0.16em] text-quiet uppercase hover:text-ink"
      >
        Journal
      </Link>
      <div className="mt-6">
        <CoverPlate id={post.plate} />
      </div>
      <div className="mt-10 grid gap-8 lg:grid-cols-[12rem_minmax(0,40rem)] lg:gap-12">
        <aside className="flex flex-row flex-wrap gap-x-6 gap-y-2 lg:flex-col lg:gap-3 lg:pt-3">
          <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </p>
          <p className="text-sm text-quiet">{post.location}</p>
          <p className="font-mono text-xs tracking-[0.12em] text-quiet uppercase">
            {readingMinutes(post)} min read
          </p>
        </aside>
        <BlurFade>
        <div>
          <h1 className="font-display text-4xl leading-[0.95] tracking-[-0.045em] sm:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-quiet">{post.excerpt}</p>
          <div className="mt-10">
            <ArticleBody blocks={post.blocks} />
          </div>
        </div>
        </BlurFade>
      </div>
      <nav
        aria-label="More notes"
        className="mt-16 grid gap-px border-y border-line bg-line sm:grid-cols-2"
      >
        <NeighborLink label="Older note" post={older} />
        <NeighborLink label="Newer note" post={newer} />
      </nav>
    </article>
  );
}

function NeighborLink({
  label,
  post,
}: {
  label: string;
  post: ReturnType<typeof getPost>;
}) {
  if (!post) {
    return <div className="bg-paper px-1 py-8 sm:px-6" />;
  }

  return (
    <Link href={`/journal/${post.slug}`} className="group bg-paper px-1 py-8 sm:px-6">
      <span className="font-mono text-[0.68rem] tracking-[0.16em] text-quiet uppercase">
        {label}
      </span>
      <span className="mt-2 block font-display text-2xl tracking-[-0.03em] group-hover:text-signal">
        {post.title}
      </span>
    </Link>
  );
}
