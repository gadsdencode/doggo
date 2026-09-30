function resolveSiteUrl() {
  const fallback = "http://localhost:3000";
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configured) {
    return fallback;
  }

  try {
    return new URL(configured).href.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const site = {
  name: "Dad & Doggo",
  kicker: "Field notes",
  description:
    "Adventures of a dad and Happy, a lab and hound mix puppy. Short dispatches from the leash.",
  issue: "Issue 01 · The puppy year",
  author: "Dad",
  // Set NEXT_PUBLIC_SITE_URL to the public origin. Development falls back to localhost.
  url: resolveSiteUrl(),
  nav: [
    { href: "/journal", label: "Journal" },
    { href: "/about", label: "About" },
  ],
} as const;

export function absoluteUrl(path: string) {
  return new URL(path, site.url).toString();
}
