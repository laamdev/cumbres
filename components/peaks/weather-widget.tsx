import Image from "next/image"
import {
  CloudIcon,
  DropletIcon,
  // // MountainIcon,
  ThermometerIcon,
  WindIcon,
} from "lucide-react"

import { DetailContainer } from "@/components/peak/detail-container"
import { DetailLabel } from "@/components/peak/detail-label"
import { DetailUnit } from "@/components/peak/detail-unit"
import { DetailValue } from "@/components/peak/detail-value"

export const WeatherWidget = ({
  peak,
  weather,
}: {
  peak: any
  weather: any
}) => {
  return (
    <section className="mt-10 grid grid-cols-5 divide-x-2 divide-branding-green rounded-xl bg-branding-yellow p-2.5 text-branding-green shadow sm:mt-7 sm:p-5">
      <div className="col-span-2 flex flex-col items-center justify-center text-center">
        <div className="relative aspect-square h-10 w-10 rounded-full bg-branding-green sm:h-14 sm:w-14">
          <Image
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].main}
            fill
          />
        </div>
        <div className="mt-1.5 font-serif text-base font-bold uppercase sm:text-lg">
          {weather.weather[0].description}
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-2 place-items-center gap-2.5">
        <DetailContainer>
          <DetailLabel>
            <ThermometerIcon className="h-5 w-5 rounded-full bg-branding-green px-1 sm:h-7 sm:w-7" />
          </DetailLabel>
          <DetailValue>
            {weather.main.temp}
            <DetailUnit>{` °C`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>
            <CloudIcon className="h-5 w-5 rounded-full bg-branding-green px-1 sm:h-7 sm:w-7" />
          </DetailLabel>
          <DetailValue>
            {weather.clouds.all}
            <DetailUnit>{` %`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>
            <DropletIcon className="h-5 w-5 rounded-full bg-branding-green px-1 sm:h-7 sm:w-7" />
          </DetailLabel>
          <DetailValue>
            {weather.main.humidity} <DetailUnit>{` %`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>
            <WindIcon className="h-5 w-5 rounded-full bg-branding-green px-1 sm:h-7 sm:w-7" />
          </DetailLabel>
          <DetailValue>
            <span>{weather.wind.speed}</span>
            <DetailUnit>{` km/h`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
      </div>
    </section>
  )
}
