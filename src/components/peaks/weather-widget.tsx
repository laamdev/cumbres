import Image from "next/image";

import { DetailContainer } from "@/components/peak/detail-container";
import { DetailLabel } from "@/components/peak/detail-label";
import { DetailUnit } from "@/components/peak/detail-unit";
import { DetailValue } from "@/components/peak/detail-value";
import { ThermometerIcon } from "@/components/icons/thermometer";
import { CloudIcon } from "@/components/icons/cloud";
import { DropIcon } from "@/components/icons/drop";
import { WindIcon } from "@/components/icons/wind";
import { Separator } from "@/components/ui/separator";

interface WeatherData {
  weather: [
    {
      icon: string;
      main: string;
      description: string;
    }
  ];
  main: {
    temp: number;
    humidity: number;
  };
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
  };
}

export const WeatherWidget = ({ weather }: { weather: WeatherData }) => {
  return (
    <section className="grid sm:grid-cols-5 sm:divide-x-2 divide-branding-green rounded-xl -mt-5 z-50 relative bg-branding-yellow p-2.5 text-branding-green sm:p-5">
      <div className="sm:col-span-2 flex flex-col items-center justify-center text-center">
        <div className="relative aspect-square h-10 w-10 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-200 sm:h-14 sm:w-14">
          <Image
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].main}
            fill
          />
        </div>
        <div className="mt-2.5 text-sm font-bold capitalize sm:text-base">
          {weather.weather[0].description}
        </div>
      </div>

      <Separator className="sm:hidden mt-2.5" />

      <div className="sm:col-span-3 mt-5 grid grid-cols-4 place-items-center gap-2.5">
        <DetailContainer>
          <DetailLabel>
            <ThermometerIcon className="size-7 rounded-full fill-white bg-branding-green px-1.5 sm:size-9" />
          </DetailLabel>
          <DetailValue>
            {weather.main.temp}
            <DetailUnit>{` °C`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>
            <CloudIcon className="size-7 rounded-full fill-white bg-branding-green px-1.5 sm:size-9" />
          </DetailLabel>
          <DetailValue>
            {weather.clouds.all}
            <DetailUnit>{` %`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>
            <DropIcon className="size-7 rounded-full fill-white bg-branding-green px-1.5 sm:size-9" />
          </DetailLabel>
          <DetailValue>
            {weather.main.humidity} <DetailUnit>{` %`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
        <DetailContainer>
          <DetailLabel>
            <WindIcon className="size-7 rounded-full fill-white bg-branding-green px-1.5 sm:size-9" />
          </DetailLabel>
          <DetailValue>
            <span>{weather.wind.speed}</span>
            <DetailUnit>{` km/h`}</DetailUnit>
          </DetailValue>
        </DetailContainer>
      </div>
    </section>
  );
};
