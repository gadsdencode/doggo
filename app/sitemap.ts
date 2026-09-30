import type { MetadataRoute } from "next";
import { getPosts, publishedIso } from "@/lib/posts";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getPosts();
  const latest = posts[0] ? new Date(publishedIso(posts[0].date)) : undefined;

  return [
    {
      url: absoluteUrl("/"),
      lastModified: latest,
    },
    {
      url: absoluteUrl("/journal"),
      lastModified: latest,
    },
    {
      url: absoluteUrl("/about"),
    },
    ...posts.map((post) => ({
      url: absoluteUrl(`/journal/${post.slug}`),
      lastModified: new Date(publishedIso(post.date)),
    })),
  ];
}
