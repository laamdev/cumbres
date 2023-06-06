import Image from "next/image"
import Link from "next/link"

import { Peak } from "@/types/prisma"

import { MedalHoverCard } from "./medal-hover-card"

export const PublicPeakCard = ({ peak }: { peak: Peak }) => {
  return (
    <Link
      href={`/cumbres/${peak.slug}`}
      key={peak.slug}
      className="relative aspect-video"
    >
      <Image
        src={peak.imageUrl}
        alt={peak.name}
        fill
        className="tw-transition rounded bg-branding-sand object-cover object-center hover:opacity-90"
      />
      <h2 className="absolute bottom-2.5 left-2.5 z-10 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-branding-green sm:mt-2.5 sm:text-xl">
        {peak.name}
      </h2>
      {peak.highestPoint && (
        <div className="absolute -right-2.5 -top-2.5">
          <MedalHoverCard name={peak.name} highestPoint={peak.highestPoint} />
        </div>
      )}
    </Link>
  )
}
