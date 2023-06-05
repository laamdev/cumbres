import Image from "next/image"
import {
  ClockIcon,
  MapPinIcon,
  MountainIcon,
  ThermometerSnowflakeIcon,
  ThermometerSunIcon,
} from "lucide-react"

import { Peak } from "@/types/prisma"
import { Separator } from "@/components/ui/separator"
import { PageContainer } from "@/components/global/page-container"
import { PageTagline } from "@/components/global/page-tagline"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"
import { PeakDetail } from "@/components/peak/peak-detail"
import { DetailsWidget } from "@/components/peaks/details-widget"

export const PeakPage = ({ peak, weather }: { peak: any; weather: any }) => {
  console.log(weather)
  return (
    <PageContainer>
      <PageTagline>{peak.county}</PageTagline>
      <PageTitle>{peak.name}</PageTitle>

      <section className="mt-10 grid gap-y-10 sm:mt-20 sm:grid-cols-5 sm:gap-x-20">
        <div className="sm:col-span-2">
          <TextWrapper>{peak.description}</TextWrapper>
        </div>

        <div className="row-start-1 sm:col-span-3 sm:row-auto">
          <div className="relative aspect-video">
            <Image
              src={peak.imageUrl}
              alt={peak.name}
              fill
              className="rounded object-cover object-center"
            />
          </div>
          {/* <Separator className="my-5 bg-branding-green" /> */}

          {/* <section className="flex justify-between gap-x-5">
            <div>
              <PeakDetail
                icon={<MapPinIcon className="h-4 w-4" />}
                value={`${peak.range}`}
              />
            </div>

            <div className="flex flex-col gap-y-2.5">
              <PeakDetail
                icon={<MountainIcon className="h-4 w-4" />}
                value={peak.elevation}
                unit="m"
              />
              <PeakDetail
                icon={<ClockIcon className="h-4 w-4" />}
                value={peak.elevation}
              />
              <PeakDetail
                icon={<MountainIcon className="h-4 w-4" />}
                value={peak.elevation}
              />
              <PeakDetail
                icon={<ThermometerSnowflakeIcon className="h-4 w-4" />}
                value={weather.main.temp_min}
              />
            </div>
          </section> */}
          <DetailsWidget peak={peak} weather={weather} />
        </div>
      </section>
    </PageContainer>
  )
}
