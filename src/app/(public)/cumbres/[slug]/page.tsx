import { notFound } from "next/navigation";
import Image from "next/image";
import { Medal } from "@phosphor-icons/react/dist/ssr";
import { auth } from "@clerk/nextjs/server";

import { Avatar } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { PageContainer } from "@/components/global/page-container";
import { PageTitle } from "@/components/global/page-title";
import { TextWrapper } from "@/components/global/text-wrapper";
import { WeatherWidget } from "@/components/peaks/weather-widget";
import { MapContainer } from "@/components/global/map-container";
import { CreateSummitDialog } from "@/components/dialogs/create-summit-dialog";
import { SummitTooltip } from "@/components/peaks/summit-tooltip";
import { UpdateSummitDialog } from "@/components/dialogs/update-summit-dialog";
import { DeleteSummitDialog } from "@/components/dialogs/delete-summit-dialog";

import { getCountyNames, getProvinceNames } from "@/lib/utils";
import db from "@/lib/prisma";
import { peaks } from "@/data/peaks";

interface WeatherResponse {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  weather: [
    {
      description: string;
      icon: string;
      main: string;
    }
  ];
  clouds: {
    all: number;
  };
}

interface Peak {
  latitude: number;
  longitude: number;
}

interface PeakPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return peaks.map((peak) => ({
    slug: peak.slug,
  }));
}

async function getWeather(peak: Peak): Promise<WeatherResponse> {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${peak.latitude}&lon=${peak.longitude}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric&lang=es`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function generateMetadata({ params }: PeakPageProps) {
  const { slug } = await params;

  const peak = await peaks.find((peak) => peak.slug === slug);

  if (!peak) {
    return;
  }

  const ogImage = peak.imageUrl
    ? `https://cumbr.es${peak.imageUrl}`
    : `https://cumbr.es/api/og?title=${name}`;

  return {
    title: peak.name,
    // // description,
    openGraph: {
      title: peak.name,
      // // description,
      type: "article",
      // // publishedTime: createdAt,
      url: `https://cumbr.es/cumbres/${peak.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: peak.name,
      // // description,
      images: [ogImage],
    },
  };
}

export default async function PeakPage({ params }: PeakPageProps) {
  const { userId } = await auth();
  const { slug } = await params;

  const peak = await peaks.find((peak) => peak.slug === slug);

  if (!peak) {
    return notFound();
  }

  const weather = await getWeather(peak);

  const countyNames = getCountyNames(peak.county);
  const provinceNames = getProvinceNames(peak.province);
  const highestPoint = getCountyNames(peak.highestPoint ?? []);

  const summit = userId
    ? await db.summit.findFirst({
        where: {
          userId: userId,
          peakSlug: slug,
        },
      })
    : null;

  const isSummited = Boolean(summit);

  return (
    <PageContainer>
      {highestPoint?.length > 0 && (
        <div className="mb-5 flex items-center space-x-2.5">
          <Avatar className="flex items-center justify-center bg-white text-branding-green">
            <Medal
              weight="fill"
              className="size-7 rounded-full p-1.5 fill-branding-green sm:size-9"
            />
          </Avatar>
          {
            <div className="text-xs font-medium leading-none tracking-wider text-neutral-200 sm:text-sm">{`Punto más alto de ${highestPoint}`}</div>
          }
        </div>
      )}

      <PageTitle>{peak.name}</PageTitle>

      <section className="mt-10 grid gap-y-10 sm:mt-10 sm:grid-cols-5 sm:gap-x-20">
        <div className="mt-10 sm:col-span-2 sm:mt-0">
          <TextWrapper>{peak.description}</TextWrapper>
        </div>

        <div className="row-start-1 sm:col-span-3 sm:row-auto">
          <div className="relative aspect-video rounded-t-lg mx-5">
            <Image
              src={peak.imageUrl}
              alt={peak.name}
              fill
              priority
              className="rounded-t-lg bg-gradient-to-br from-neutral-300 to-neutral-100 object-cover object-center"
            />

            <div className="absolute top-2.5 left-2.5 flex gap-x-2.5">
              {isSummited ? (
                <DeleteSummitDialog peakName={peak.name} peakSlug={peak.slug} />
              ) : (
                <CreateSummitDialog peakSlug={peak.slug} />
              )}

              {isSummited && (
                <UpdateSummitDialog
                  peakSlug={peak.slug}
                  summitDate={summit?.summitDate}
                />
              )}
            </div>

            {summit && isSummited && (
              <div className="absolute -right-5 -top-5">
                <SummitTooltip summitDate={summit.summitDate} />
              </div>
            )}
          </div>

          <WeatherWidget weather={weather} elevation={peak.elevation} />
        </div>
      </section>

      <Separator className="my-20 bg-branding-yellow" />

      <section>
        <div className="grid gap-5 md:grid-cols-3">
          <div className="flex flex-col gap-y-2.5 items-center">
            <div className="text-xs sm:text-sm text-neutral-300 opacity-80 font-light lowercase leading-none tracking-wider">
              Comunidad Autónoma
            </div>
            <div className="text-lg text-center font-serif font-medium leading-none sm:text-3xl">
              {countyNames}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 items-center">
            <div className="text-xs sm:text-sm text-neutral-300 font-light opacity-80 lowercase leading-none tracking-wider">
              Provincia
            </div>
            <div className="text-lg text-center font-serif font-medium sm:text-3xl">
              {provinceNames}
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 items-center">
            <div className="text-xs sm:text-sm font-light text-neutral-300 lowercase leading-none tracking-wider">
              Coordillera o Isla
            </div>
            <div className="text-lg text-center font-serif font-medium sm:text-3xl">
              {peak.range.join(" y ")}
            </div>
          </div>
        </div>

        <div className="mt-10 h-64 w-full rounded-lg bg-branding-white sm:mt-20 sm:h-72 lg:h-96">
          <MapContainer
            long={peak.longitude}
            lat={peak.latitude}
            peakName={peak.name}
            peakHeight={peak.elevation}
          />
        </div>
      </section>
    </PageContainer>
  );
}
