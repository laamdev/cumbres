import Image from "next/image"
import Link from "next/link"

import { Peak } from "@/types/payloads"

import { MedalHoverCard } from "./medal-hover-card"

export const PublicPeakCard = ({ peak }: { peak: Peak }) => {
  return (
    <Link
      href={`/cumbres/${peak.slug}`}
      key={peak.slug}
      className="relative aspect-video shadow"
    >
      <Image
        src={peak.imageUrl}
        alt={peak.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="tw-transition rounded bg-branding-yellow object-cover object-center hover:opacity-90"
      />
      <h2 className="absolute bottom-2.5 left-2.5 z-10 rounded-xl bg-white px-3 py-2 font-serif text-sm font-semibold uppercase leading-none tracking-tighter text-branding-green sm:mt-2.5 sm:text-xl">
        {peak.name}
      </h2>
      {peak.highestPoint?.length && (
        <div className="absolute -right-2.5 -top-2.5">
          <MedalHoverCard name={peak.name} highestPoint={peak.highestPoint} />
        </div>
      )}
    </Link>
  )
}
