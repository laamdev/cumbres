import Image from "next/image"
import { MedalIcon, MountainIcon } from "lucide-react"

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
          <MountainIcon />
          <div className="flex items-baseline gap-x-1">
            <span>{peak.elevation}</span>
            <span className="text-sm font-normal normal-case">{`m`}</span>
          </div>
        </div>
      </PageTagline>
      <PageTitle>{peak.name}</PageTitle>

      <section className="mt-10 grid gap-y-10 sm:mt-20 sm:grid-cols-5 sm:gap-x-20">
        <div className="mt-10 sm:col-span-2 sm:mt-0">
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
              className="rounded object-cover object-center"
              priority
            />
          </div>

          <div className="mt-7 grid divide-y-2 divide-branding-sand rounded-xl bg-branding-green p-2.5 text-center text-branding-sand sm:mt-10 sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0 sm:p-5">
            <div className="grid py-2.5">
              <span className="text-xs opacity-75 sm:text-sm">
                Comunidad Autónoma
              </span>
              <span className="font-serif text-base font-bold uppercase sm:text-lg">
                {peak.county.join(" y ")}
              </span>
            </div>
            <div className="grid py-2.5">
              <span className="text-xs opacity-75 sm:text-sm">Provincia</span>
              <span className="font-serif text-base font-bold uppercase sm:text-lg">
                {peak.range.join(" y ")}
              </span>
            </div>
            <div className="grid py-2.5">
              <span className="text-xs opacity-75 sm:text-sm">
                Coordillera / Isla
              </span>
              <span className="font-serif text-base font-bold uppercase sm:text-lg">
                {peak.range.join(" y ")}
              </span>
            </div>
          </div>

          <DetailsWidget peak={peak} weather={weather} />
        </div>
      </section>

      <div className="mt-10 h-64 w-full sm:mt-20 sm:h-72 lg:h-[96]">
        <MapContainer peaks={[peak]} zoom={10} />
      </div>
    </PageContainer>
  )
}
