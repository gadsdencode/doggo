import type { ReactNode } from "react";
import type { PlateId } from "@/content/posts";
import { BorderBeam } from "@/components/ui/border-beam";

const plates: Record<PlateId, ReactNode> = {
  path: (
    <>
      <path d="M40 390 H760" stroke="currentColor" strokeOpacity="0.35" />
      <path
        d="M90 360 C180 300 220 250 310 270 C420 294 470 210 590 188 C680 172 720 150 760 120"
        fill="none"
        stroke="#f4f1ea"
        strokeWidth="2.5"
      />
      <circle cx="188" cy="312" r="7" fill="#e25b1a" />
      <circle cx="560" cy="198" r="5" fill="#f4f1ea" />
    </>
  ),
  rain: (
    <>
      {Array.from({ length: 18 }, (_, index) => (
        <line
          key={index}
          x1={70 + index * 38}
          y1={40 + (index % 4) * 18}
          x2={58 + index * 38}
          y2={250 + (index % 3) * 28}
          stroke="#f4f1ea"
          strokeOpacity={0.25 + (index % 5) * 0.1}
        />
      ))}
      <ellipse cx="430" cy="400" rx="180" ry="28" fill="#e25b1a" fillOpacity="0.9" />
      <ellipse cx="430" cy="394" rx="120" ry="10" fill="#f4f1ea" fillOpacity="0.35" />
    </>
  ),
  scent: (
    <>
      {[80, 140, 200, 260].map((radius) => (
        <circle
          key={radius}
          cx="210"
          cy="360"
          r={radius}
          fill="none"
          stroke="#f4f1ea"
          strokeOpacity="0.35"
        />
      ))}
      <circle cx="210" cy="360" r="8" fill="#e25b1a" />
      <circle cx="360" cy="250" r="4" fill="#f4f1ea" />
      <circle cx="470" cy="180" r="4" fill="#f4f1ea" />
      <circle cx="560" cy="300" r="4" fill="#e25b1a" />
    </>
  ),
  porch: (
    <>
      <circle cx="640" cy="110" r="36" fill="#e25b1a" />
      <rect x="80" y="300" width="520" height="10" fill="#f4f1ea" />
      <rect x="110" y="340" width="460" height="10" fill="#f4f1ea" fillOpacity="0.7" />
      <rect x="140" y="380" width="400" height="10" fill="#f4f1ea" fillOpacity="0.4" />
      <circle cx="250" cy="274" r="6" fill="#f4f1ea" />
    </>
  ),
  log: (
    <>
      <path d="M120 360 H700" stroke="currentColor" strokeOpacity="0.3" />
      <rect
        x="160"
        y="250"
        width="420"
        height="28"
        rx="14"
        transform="rotate(-18 370 264)"
        fill="#e25b1a"
      />
      <circle cx="250" cy="300" r="6" fill="#f4f1ea" />
      <circle cx="520" cy="210" r="5" fill="#f4f1ea" />
    </>
  ),
  dad: (
    <>
      <rect x="250" y="80" width="18" height="280" fill="#f4f1ea" />
      <circle cx="259" cy="70" r="16" fill="#f4f1ea" />
      <path d="M268 180 H430" stroke="#e25b1a" strokeWidth="3" />
      <circle cx="438" cy="180" r="7" fill="#e25b1a" />
    </>
  ),
  happy: (
    <>
      <circle cx="300" cy="230" r="70" fill="none" stroke="#f4f1ea" strokeWidth="2" />
      <circle cx="430" cy="250" r="108" fill="none" stroke="#e25b1a" strokeWidth="2.5" />
      <circle cx="390" cy="250" r="6" fill="#f4f1ea" />
    </>
  ),
};

export function CoverPlate({ id }: { id: PlateId }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden bg-pine text-pine ring-1 ring-white/0 ring-inset sm:aspect-[16/8] dark:ring-white/10"
      aria-hidden="true"
    >
      <svg viewBox="0 0 800 480" className="h-full w-full">
        {plates[id]}
      </svg>
      <span className="pointer-events-none absolute left-5 top-5 font-mono text-[0.68rem] tracking-[0.18em] text-bone/70 uppercase">
        Field plate
      </span>
      <BorderBeam colorFrom="#ff7d45" colorTo="#f4f1ea" size={90} duration={10} />
    </div>
  );
}
