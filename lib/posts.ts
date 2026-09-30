import { posts, type Post } from "@/content/posts";

const published = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

function assertJournal(items: Post[]) {
  const seen = new Set<string>();

  for (const post of items) {
    if (!post.slug || !post.title || post.blocks.length === 0) {
      throw new Error("Each adventure needs a slug, a title, and a body.");
    }

    if (seen.has(post.slug)) {
      throw new Error(`Duplicate adventure slug: ${post.slug}`);
    }

    seen.add(post.slug);
  }
}

assertJournal(published);

export function getPosts(): Post[] {
  return published;
}

export function getPost(slug: string): Post | undefined {
  return published.find((post) => post.slug === slug);
}

export function getNeighbors(slug: string): {
  newer?: Post;
  older?: Post;
} {
  const index = published.findIndex((post) => post.slug === slug);

  if (index === -1) {
    return {};
  }

  return {
    newer: published[index - 1],
    older: published[index + 1],
  };
}

export function readingMinutes(post: Post): number {
  const words = post.blocks
    .map((block) => block.text)
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  return Math.max(1, Math.round(words / 220));
}

export function publishedIso(isoDate: string): string {
  return `${isoDate}T00:00:00.000Z`;
}

export function formatDate(isoDate: string): string {
  const date = new Date(`${isoDate}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return isoDate;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}
