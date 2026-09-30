import type { Metadata } from "next";
import { CoverPlate } from "@/components/cover-plate";
import { AuroraText } from "@/components/ui/aurora-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description: "Dad holds the leash and writes the notes. Happy is a lab and hound mix puppy.",
  alternates: {
    canonical: "/about",
  },
};

const pair = [
  {
    plate: "dad" as const,
    name: "Dad",
    role: "Leash end",
    copy: "I hold the handle and write down what the outing actually was. The notes stay ordinary on purpose: a corner, a weather change, the thing Happy promotes to essential equipment. This is the record of learning his pace.",
  },
  {
    plate: "happy" as const,
    name: "Happy",
    role: "Nose end",
    copy: "Lab and hound, still a puppy. The lab half wants to be near the person at the other end of the leash. The hound half wants to be near whatever happened on this patch of ground an hour ago. Both halves answer to Happy.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 md:py-20">
      <BlurFade>
      <header className="max-w-3xl pb-10">
        <p className="font-mono text-[0.72rem] tracking-[0.18em] text-quiet uppercase">
          The pair
        </p>
        <h1 className="mt-3 font-display text-5xl tracking-[-0.045em] sm:text-7xl">
          Two speeds.
          <br />
          One{" "}
          <AuroraText colors={["#d24e12", "#ff7d45", "#9a3412", "#3f6212"]} className="font-display">
            leash
          </AuroraText>
          .
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-quiet">
          Dad & Doggo is a field journal. The adventures belong to me and to Happy, a lab/hound mix who is new to sidewalks and already opinionated about them.
        </p>
      </header>
      </BlurFade>
      <Separator />
      <div className="grid gap-12 py-12 md:grid-cols-2 md:gap-10 md:py-16">
        {pair.map((member, index) => (
          <BlurFade key={member.name} delay={0.08 * index} inView>
          <section aria-labelledby={`${member.plate}-name`}>
            <CoverPlate id={member.plate} />
            <p className="mt-5 font-mono text-[0.72rem] tracking-[0.16em] text-signal uppercase">
              {member.role}
            </p>
            <h2 id={`${member.plate}-name`} className="mt-2 font-display text-4xl tracking-[-0.04em]">
              {member.name}
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-quiet">{member.copy}</p>
          </section>
          </BlurFade>
        ))}
      </div>
    </div>
  );
}
