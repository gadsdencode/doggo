import Link from "next/link";
import { CoverPlate } from "@/components/cover-plate";
import { PostRow } from "@/components/post-row";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TextAnimate } from "@/components/ui/text-animate";
import { formatDate, getPosts, readingMinutes } from "@/lib/posts";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getPosts();
  const [lead, ...earlier] = posts;

  if (!lead) {
    return (
      <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
        <h1 className="font-display text-5xl tracking-[-0.04em]">The journal is quiet.</h1>
        <p className="mt-4 max-w-md text-quiet">
          The first adventure has not been written yet.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
      <BlurFade>
        <section className="grid items-end gap-8 pt-14 pb-12 md:grid-cols-12 md:pt-20 md:pb-16">
          <div className="md:col-span-8">
            <p className="font-mono text-[0.72rem] tracking-[0.18em] text-quiet uppercase">
              {site.issue}
            </p>
            <h1 className="mt-4 font-display text-[clamp(3.4rem,8vw,6.4rem)] leading-[0.88] tracking-[-0.05em]">
              <TextAnimate
                as="span"
                by="word"
                animation="blurInUp"
                once
                className="block"
                segmentClassName="inline-block"
              >
                Out walking
              </TextAnimate>
              <span className="block">
                with{" "}
                <AuroraText
                  colors={["#d24e12", "#ff7d45", "#9a3412", "#3f6212"]}
                  className="font-display"
                >
                  Happy
                </AuroraText>
                .
              </span>
            </h1>
          </div>
          <p className="max-w-sm text-lg leading-relaxed text-quiet md:col-span-4">
            A dad, a leash, and a lab/hound puppy who treats every block like a dispatch worth filing.
          </p>
        </section>
      </BlurFade>
      <Separator />

      <BlurFade delay={0.08} inView>
        <section className="py-12 md:py-16" aria-labelledby="latest-heading">
        <div className="mb-5 flex items-baseline justify-between gap-4">
          <h2 id="latest-heading" className="font-mono text-[0.72rem] tracking-[0.18em] text-quiet uppercase">
            Latest
          </h2>
          <p className="font-mono text-[0.72rem] tracking-[0.12em] text-quiet uppercase">
            {readingMinutes(lead)} min
          </p>
        </div>
        <Link href={`/journal/${lead.slug}`} className="group block">
          <CoverPlate id={lead.plate} />
          <div className="mt-6 grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="font-mono text-xs tracking-[0.14em] text-signal uppercase">
                <time dateTime={lead.date}>{formatDate(lead.date)}</time>
                {" · "}
                {lead.location}
              </p>
              <h3 className="mt-3 font-display text-4xl tracking-[-0.04em] transition-colors group-hover:text-signal sm:text-5xl">
                {lead.title}
              </h3>
            </div>
            <p className="text-base leading-7 text-quiet md:col-span-4">{lead.excerpt}</p>
          </div>
        </Link>
        </section>
      </BlurFade>

      {earlier.length > 0 ? (
        <>
        <Separator />
        <BlurFade delay={0.12} inView>
        <section className="py-12 md:py-16" aria-labelledby="earlier-heading">
          <h2 id="earlier-heading" className="font-mono text-[0.72rem] tracking-[0.18em] text-quiet uppercase">
            Earlier notes
          </h2>
          <ol className="mt-2">
            {earlier.map((post, index) => (
              <PostRow key={post.slug} post={post} index={index + 2} />
            ))}
          </ol>
          <Button
            nativeButton={false}
            render={<Link href="/journal" />}
            className="mt-8 font-mono tracking-[0.16em] uppercase"
          >
            Full journal
          </Button>
        </section>
        </BlurFade>
        </>
      ) : null}
    </div>
  );
}
