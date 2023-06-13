import Image from "next/image"
import { MedalIcon } from "lucide-react"

import { Avatar } from "@/components/ui/avatar"
import { MapContainer } from "@/components/global/map-container"
import { PageContainer } from "@/components/global/page-container"
import { PageTagline } from "@/components/global/page-tagline"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"
import { DetailsWidget } from "@/components/peaks/details-widget"

export const PeakPage = ({ peak, weather }: { peak: any; weather: any }) => {
  const highestPoint = peak.highestPoint.join(" y ")
  return (
    <PageContainer>
      <PageTagline>
        <div className="flex flex-wrap gap-x-1">
          <span>{peak.county.join(" y ")}</span>
          <span> ● </span>
          <span>{peak.province.join(" y ")}</span>
          <span> ● </span>
          <span>{peak.range.join(" y ")}</span>
        </div>
      </PageTagline>
      <PageTitle>{peak.name}</PageTitle>

      <section className="mt-10 grid gap-y-10 sm:mt-20 sm:grid-cols-5 sm:gap-x-20">
        <div className="sm:col-span-2">
          {peak.highestPoint.length > 0 && (
            <div className="mb-5 flex items-center space-x-2.5 text-lg font-semibold sm:text-xl">
              <Avatar className="flex items-center justify-center bg-branding-green text-branding-white">
                <MedalIcon />
              </Avatar>
              {<div>{`Punto más alto de ${highestPoint}`}</div>}
            </div>
          )}
          <TextWrapper>{peak.description}</TextWrapper>
        </div>

        <div className="row-start-1 sm:col-span-3 sm:row-auto">
          <div className="relative aspect-video">
            <Image
              src={peak.imageUrl}
              alt={peak.name}
              fill
              className="rounded bg-branding-sand object-cover object-center"
              priority
            />
          </div>

          <DetailsWidget peak={peak} weather={weather} />
        </div>
      </section>

      <div className="mt-10 h-64 w-full sm:mt-20 sm:h-72 lg:h-[96]">
        <div className="h-full w-full rounded-xl border-2 border-branding-green bg-white p-2.5">
          <MapContainer peaks={[peak]} zoom={10} />
        </div>
      </div>
    </PageContainer>
  )
}
