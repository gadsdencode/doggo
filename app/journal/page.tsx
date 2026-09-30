import type { Metadata } from "next";
import { PostRow } from "@/components/post-row";
import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { TextAnimate } from "@/components/ui/text-animate";
import { getPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Journal",
  description: "Every outing with Happy that earned a note, newest first.",
  alternates: {
    canonical: "/journal",
  },
};

export default function JournalPage() {
  const posts = getPosts();

  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-20">
      <BlurFade>
        <header className="grid gap-6 pb-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-7">
          <p className="font-mono text-[0.72rem] tracking-[0.18em] text-quiet uppercase">
            {posts.length} {posts.length === 1 ? "note" : "notes"}
          </p>
          <TextAnimate
            as="h1"
            by="character"
            animation="blurInUp"
            once
            className="mt-3 font-display text-5xl tracking-[-0.045em] sm:text-7xl"
          >
            Journal
          </TextAnimate>
        </div>
        <p className="max-w-sm text-lg leading-relaxed text-quiet md:col-span-5">
          Walks, weather, and the objects Happy decides are the point. Newest first.
        </p>
        </header>
      </BlurFade>
      <Separator />
      {posts.length === 0 ? (
        <p className="py-16 text-quiet">No notes yet.</p>
      ) : (
        <ol>
          {posts.map((post, index) => (
            <PostRow key={post.slug} post={post} index={index + 1} />
          ))}
        </ol>
      )}
    </div>
  );
}
