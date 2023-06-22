import Image from "next/image"
import { MedalIcon, MountainIcon } from "lucide-react"

import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { MapContainer } from "@/components/global/map-container"
import { PageContainer } from "@/components/global/page-container"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"
import { DetailContainer } from "@/components/peak/detail-container"
import { DetailLabel } from "@/components/peak/detail-label"
import { DetailValue } from "@/components/peak/detail-value"
import { WeatherWidget } from "@/components/peaks/weather-widget"

import { DetailUnit } from "../peak/detail-unit"

export const PeakPage = ({ peak, weather }: { peak: any; weather: any }) => {
  const highestPoint = peak.highestPoint.join(" y ")
  return (
    <PageContainer>
      {peak.highestPoint.length > 0 && (
        <div className="mb-5 flex items-center space-x-2.5">
          <Avatar className="flex h-8 w-8 items-center justify-center bg-branding-yellow text-branding-green md:h-10 md:w-10">
            <MedalIcon className="h-5 w-5 md:h-7 md:w-7" />
          </Avatar>
          {
            <div className="text-sm font-medium uppercase leading-none tracking-tighter text-white sm:text-lg">{`Punto más alto de ${highestPoint}`}</div>
          }
        </div>
      )}
      <PageTitle>{peak.name}</PageTitle>

      <section className="mt-10 grid gap-y-10 sm:mt-10 sm:grid-cols-5 sm:gap-x-20">
        <div className="mt-10 sm:col-span-2 sm:mt-0">
          <TextWrapper>{peak.description}</TextWrapper>
        </div>

        <div className="row-start-1 sm:col-span-3 sm:row-auto">
          <div className="relative aspect-video shadow">
            <Image
              src={peak.imageUrl}
              alt={peak.name}
              fill
              className="rounded object-cover object-center"
              priority
            />

            <div className="rounded-bt absolute right-0 top-0 z-10 flex items-center gap-x-1 rounded-bl rounded-tr bg-branding-yellow p-1 font-bold uppercase tracking-tighter text-branding-green sm:text-lg">
              <DetailLabel>
                <MountainIcon className="h-5 w-5 rounded-full bg-branding-green px-1 sm:h-7 sm:w-7" />
              </DetailLabel>
              <DetailValue>
                {peak.elevation} <DetailUnit>m</DetailUnit>
              </DetailValue>
            </div>
          </div>

          <WeatherWidget peak={peak} weather={weather} />
        </div>
      </section>

      <Separator className="my-20 bg-branding-yellow" />

      <section>
        <div className="grid gap-5 font-serif md:grid-cols-3">
          <div className="flex flex-col gap-y-2.5">
            <div className="text-sm lowercase leading-none tracking-tighter md:text-lg">
              Comunidad Autónoma
            </div>
            <div className="text-2xl font-semibold uppercase leading-none tracking-tighter md:text-4xl">
              {peak.county.join(" y ")}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <div className="text-sm lowercase leading-none tracking-tighter md:text-lg">
              Provincia
            </div>
            <div className="text-2xl font-semibold uppercase leading-none tracking-tighter md:text-4xl">
              {peak.province.join(" y ")}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5">
            <div className="text-sm lowercase leading-none tracking-tighter md:text-lg">
              Coordillera o Isla
            </div>
            <div className="text-2xl font-semibold uppercase leading-none tracking-tighter md:text-4xl">
              {peak.range.join(" y ")}
            </div>
          </div>
        </div>

        <div className="mt-10 h-64 w-full rounded-xl bg-branding-white sm:mt-20 sm:h-72 lg:h-96">
          <MapContainer peaks={[peak]} zoom={10} />
        </div>
      </section>
    </PageContainer>
  )
}
