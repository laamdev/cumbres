import Image from "next/image";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { Eye } from "@phosphor-icons/react/dist/ssr";

import { MedalHoverCard } from "@/components/peaks/medal-hover-card";
import { PeaksActionButton } from "@/components/peaks/peaks-action-button";

interface Peak {
  slug: string;
  imageUrl: string;
  name: string;
  highestPoint?: string[];
}

interface PeakCardProps {
  peak: Peak;
  summited?: boolean;
}

export const PublicPeakCard = async ({ peak, summited }: PeakCardProps) => {
  const { userId } = await auth();

  return (
    <div className="relative aspect-video">
      <div className="absolute top-2.5 left-2.5 flex gap-x-2.5 z-10">
        {userId && (
          <PeaksActionButton peakSlug={peak.slug} summited={summited} />
        )}

        <Link href={`/cumbres/${peak.slug}`}>
          <Eye
            weight="bold"
            className="z-10 bg-branding-green rounded-full size-5 p-1.5 fill-white sm:size-7"
          />
        </Link>
      </div>

      <Image
        src={peak.imageUrl}
        alt={peak.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="tw-transition rounded-lg bg-gradient-to-br from-neutral-300 to-neutral-100  object-cover object-center"
      />
      <h2 className="absolute bottom-2.5 left-2.5 z-10 rounded-lg bg-white px-3 py-2 font-serif text-sm font-semibold uppercase leading-none tracking-tighter text-branding-green sm:mt-2.5 sm:text-xl">
        {peak.name}
      </h2>
      {peak.highestPoint?.length && (
        <div className="absolute -right-2.5 -top-2.5">
          <MedalHoverCard name={peak.name} highestPoint={peak.highestPoint} />
        </div>
      )}
    </div>
  );
};
