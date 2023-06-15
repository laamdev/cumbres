import Image from "next/image"
import {
  CloudIcon,
  DropletIcon,
  MountainIcon,
  ThermometerIcon,
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
    <section className="mt-10 grid grid-cols-5 divide-x-2 divide-branding-sand rounded-xl bg-branding-green p-2.5 text-branding-sand sm:mt-7 sm:p-5">
      <div className="col-span-2 flex flex-col items-center justify-center text-center">
        <div className="relative aspect-square h-10 w-10 rounded-full bg-branding-sand sm:h-14 sm:w-14">
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
        <div className="flex flex-col items-center gap-y-1">
          <ThermometerIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          <div className="flex items-baseline gap-x-1">
            <span className="text-base font-semibold sm:text-lg">
              {weather.main.temp}
            </span>
            <span className="text-xs sm:text-sm">{`°C`}</span>
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
