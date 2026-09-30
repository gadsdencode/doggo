import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/components/og-card";
import { formatDate, getPost, getPosts } from "@/lib/posts";
import { site } from "@/lib/site";

export const alt = `A field note from ${site.name}`;
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return getPosts().map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  return new ImageResponse(
    (
      <OgCard
        kicker={post ? formatDate(post.date) : site.kicker}
        title={post?.title ?? "This note is not on the route."}
        detail={post?.location ?? site.name}
      />
    ),
    { ...size },
  );
}
