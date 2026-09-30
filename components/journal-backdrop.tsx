"use client";

import { useEffect, useState } from "react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export function JournalBackdrop() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    function sync() {
      setReduceMotion(media.matches);
    }

    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (reduceMotion) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <FlickeringGrid
        className="absolute inset-0 size-full opacity-70 mask-[radial-gradient(ellipse_at_top,black,transparent_78%)]"
        squareSize={3}
        gridGap={8}
        flickerChance={0.12}
        maxOpacity={0.45}
        color="#d24e12"
      />
      <DotPattern
        width={22}
        height={22}
        cr={1}
        className="text-quiet/40 mask-[radial-gradient(ellipse_at_center,black,transparent_70%)]"
      />
    </div>
  );
}
