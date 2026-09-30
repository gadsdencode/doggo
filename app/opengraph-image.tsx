import { ImageResponse } from "next/og";
import { OgCard, ogSize } from "@/components/og-card";
import { site } from "@/lib/site";

export const alt = `${site.name} field notes`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <OgCard
        kicker={site.kicker}
        title="Out walking with Happy."
        detail="A dad and a puppy"
      />
    ),
    { ...size },
  );
}
