import Link from "next/link";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";

export default function NotFound() {
  return (
    <BlurFade>
    <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
      <p className="font-mono text-[0.72rem] tracking-[0.18em] text-signal uppercase">
        Off the path
      </p>
      <TextAnimate
        as="h1"
        by="word"
        animation="blurInUp"
        once
        className="mt-4 max-w-xl font-display text-5xl tracking-[-0.045em] sm:text-6xl"
      >
        This note is not on the route.
      </TextAnimate>
      <p className="mt-5 max-w-md text-lg leading-relaxed text-quiet">
        The page may have moved. The journal is still where we left it.
      </p>
      <Button
        nativeButton={false}
        render={<Link href="/journal" />}
        className="mt-8 font-mono tracking-[0.16em] uppercase"
      >
        Back to the journal
      </Button>
    </div>
    </BlurFade>
  );
}
