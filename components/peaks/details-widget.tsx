import {
  CloudDrizzleIcon,
  CloudFogIcon,
  CloudIcon,
  CloudLightningIcon,
  CloudSunIcon,
  DropletIcon,
  MountainIcon,
  RatIcon,
  SnowflakeIcon,
  SunIcon,
  WindIcon,
} from "lucide-react"

export const DetailsWidget = ({
  peak,
  weather,
}: {
  peak: any
  weather: any
}) => {
  return (
    <section className="mt-5 grid grid-cols-5 divide-x-2 divide-branding-green rounded-xl border-2 border-branding-green bg-white px-2.5 py-1.5 sm:px-5 sm:py-3">
      <div className="col-span-2 flex flex-col items-center text-center text-branding-green">
        {weather.weather[0].main === "Clouds" ? (
          <CloudSunIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : weather.weather[0].main === "Thunderstorm" ? (
          <CloudLightningIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : weather.weather[0].main === "Drizzle" ? (
          <CloudDrizzleIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : weather.weather[0].main === "Snow" ? (
          <SnowflakeIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : weather.weather[0].main === "Rain" ? (
          <RatIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : weather.weather[0].main === "Clear" ? (
          <SnowflakeIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : weather.weather[0].main === "Atmosphere" ? (
          <CloudFogIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        ) : (
          <SunIcon className="h-10 w-10 sm:h-14 sm:w-14" />
        )}
        <div className="mt-1 text-base capitalize sm:text-lg">
          {weather.weather[0].description}
        </div>
        <div className="mt-2.5 flex items-baseline gap-x-1">
          <span className="text-2xl font-bold sm:text-3xl">
            {weather.main.temp}
          </span>
          <span className="text-sm sm:text-base">{`°C`}</span>
        </div>
      </div>

      <div className="col-span-3 grid grid-cols-2 place-items-center gap-2.5">
        <div className="flex flex-col items-center gap-y-1">
          <MountainIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <div className="flex items-baseline gap-x-1">
            <span className="text-base font-semibold sm:text-lg">
              {peak.elevation}
            </span>
            <span className="text-xs sm:text-sm">{`m`}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <CloudIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <div className="flex items-baseline gap-x-1">
            <span className="text-base font-semibold sm:text-lg">
              {weather.clouds.all}
            </span>
            <span className="text-xs sm:text-sm">{`%`}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <DropletIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <div className="flex items-baseline gap-x-1">
            <span className="text-base font-semibold sm:text-lg">
              {weather.main.humidity}
            </span>
            <span className="text-xs sm:text-sm">{`%`}</span>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-1">
          <WindIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <div className="flex items-baseline gap-x-1">
            <span className="text-base font-semibold sm:text-lg">
              {weather.wind.speed}
            </span>
            <span className="text-xs sm:text-sm">{`km/h`}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
