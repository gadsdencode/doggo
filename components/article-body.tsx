import type { Block } from "@/content/posts";

export function ArticleBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6 text-[1.05rem] leading-8 text-ink/90">
      {blocks.map((block, index) => {
        if (block.kind === "h2") {
          return (
            <h2
              key={`${block.kind}-${index}`}
              className="pt-4 font-display text-3xl tracking-[-0.03em] text-ink"
            >
              {block.text}
            </h2>
          );
        }

        if (block.kind === "quote") {
          return (
            <blockquote
              key={`${block.kind}-${index}`}
              className="border-l-2 border-signal pl-5 font-display text-2xl leading-snug tracking-[-0.03em] text-ink"
            >
              {block.text}
            </blockquote>
          );
        }

        return <p key={`${block.kind}-${index}`}>{block.text}</p>;
      })}
    </div>
  );
}
