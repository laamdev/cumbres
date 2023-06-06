import Image from "next/image"
import { MedalIcon } from "lucide-react"

import { PageContainer } from "@/components/global/page-container"
import { PageTagline } from "@/components/global/page-tagline"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"
import { DetailsWidget } from "@/components/peaks/details-widget"

import { Avatar } from "../ui/avatar"

export const PeakPage = ({ peak, weather }: { peak: any; weather: any }) => {
  return (
    <PageContainer>
      <PageTagline>
        <div className="flex gap-x-1">
          <span>{peak.county}</span>
          <span> ● </span>
          <span>{peak.range}</span>
        </div>
      </PageTagline>
      <PageTitle>{peak.name}</PageTitle>

      <section className="mt-10 grid gap-y-10 sm:mt-20 sm:grid-cols-5 sm:gap-x-20">
        <div className="sm:col-span-2">
          {peak.highestPoint && (
            <div className="flex items-center space-x-2.5 text-lg font-semibold sm:text-xl">
              <Avatar className="flex items-center justify-center bg-branding-green text-branding-white">
                <MedalIcon />
              </Avatar>
              {<div>{`Punto más alto de ${peak.highestPoint}`}</div>}
            </div>
          )}
          <TextWrapper className="mt-5">{peak.description}</TextWrapper>
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

          <DetailsWidget peak={peak} weather={weather} />
        </div>
      </section>
    </PageContainer>
  )
}
