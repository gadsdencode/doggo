import { getPosts } from "@/lib/posts";
import { absoluteUrl, site } from "@/lib/site";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function rfc822(isoDate: string) {
  const date = new Date(`${isoDate}T00:00:00Z`);

  if (Number.isNaN(date.getTime())) {
    return new Date(0).toUTCString();
  }

  return date.toUTCString();
}

export function GET() {
  try {
    const items = getPosts()
      .map((post) => {
        const link = absoluteUrl(`/journal/${post.slug}`);

        return `<item>
<title>${escapeXml(post.title)}</title>
<link>${escapeXml(link)}</link>
<guid>${escapeXml(link)}</guid>
<pubDate>${rfc822(post.date)}</pubDate>
<description>${escapeXml(post.excerpt)}</description>
</item>`;
      })
      .join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${escapeXml(site.name)}</title>
<link>${escapeXml(absoluteUrl("/"))}</link>
<description>${escapeXml(site.description)}</description>
${items}
</channel>
</rss>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    });
  } catch {
    return new Response("The feed could not be built.", { status: 500 });
  }
}
