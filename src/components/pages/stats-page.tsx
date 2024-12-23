import Link from "next/link";
import useSWR from "swr";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AscentTimeChart } from "@/components/dashboard/ascent-time-chart";
import { ProgressBar } from "@/components/dashboard/progress-bar";
import { StatCard } from "@/components/dashboard/stat-card";
import { StatList } from "@/components/dashboard/stat-list";
import { WeatherChart } from "@/components/dashboard/weather-chart";
import { PageContainer } from "@/components/global/page-container";
import { PageTitle } from "@/components/global/page-title";
import { TextWrapper } from "@/components/global/text-wrapper";

import { getAverage, getPercentage, getSum } from "@/lib/helpers";

export default async function StatsPage() {
  // // const summited = userPeaks?.filter((peak: UserPeak) => peak.summitId);
  // // const totalSummited = summited?.length;
  // // const totalUnsummited = 45 - totalSummited;
  // // const percentageSummited = getPercentage(totalSummited, 45);

  // // const percentageUnsummited = 100 - percentageSummited;
  // // const elevationArray = summited?.map((peak: UserPeak) => peak.elevation);

  // // const totalElevation = getSum(elevationArray);
  // // const timeArray = summited?.map((peak: UserPeak) => peak.summitTime);

  // // const totalTime = getSum(timeArray);
  // // const averageTime = getAverage(timeArray);
  // // const totalSnowedSummits = summited?.filter(
  // //   (peak: UserPeak) => peak.summitWeather
  // // ).length;

  // // const totalDrySummits = totalSummited - totalSnowedSummits;
  // // const countyArray = summited?.map((summit: any) => summit.county);

  // // const visitedCounties = [...new Set(countyArray?.flat())].length;

  return (
    <PageContainer>
      <PageTitle>Tus Estadísticas</PageTitle>
      <TextWrapper className="mt-5">
        Aquí podrás encontrar estadísticas, tablas y gráficos personalizados que
        visualizan tu avance en el reto de los 45 Techos de España.
      </TextWrapper>

      {isLoading ? (
        <article>
          <section className="mt-10 grid gap-5 sm:mt-20 sm:grid-cols-2">
            <Skeleton className="h-36 bg-branding-green sm:h-44" />

            <div className="grid gap-5 sm:grid-cols-2">
              <Skeleton className="h-20 bg-branding-green" />
              <Skeleton className="h-20 bg-branding-green" />
              <Skeleton className="h-20 bg-branding-green" />
              <Skeleton className="h-20 bg-branding-green" />
            </div>
          </section>

          <section className="mt-5 grid gap-5 sm:grid-cols-2">
            <Skeleton className="h-96 bg-branding-green" />
            <Skeleton className="h-96 bg-branding-green" />
          </section>

          <Skeleton className="mt-5 h-96 bg-branding-green" />
        </article>
      ) : (
        <>
          {summited.length ? (
            <article>
              <section className="mt-10 grid gap-5 sm:mt-20 sm:grid-cols-2">
                <ProgressBar
                  totalValue={45}
                  completedValue={totalSummited}
                  completedPercentage={percentageSummited!}
                  uncompletedValue={totalUnsummited!}
                  uncompletedPercentage={percentageUnsummited!}
                  totalLabel=""
                  partLabel=""
                />

                <StatList>
                  <StatCard
                    label="Elevación (total)"
                    value={totalElevation!}
                    unit="m"
                  />
                  <StatCard
                    label="Tiempo de Ascenso (total)"
                    value={totalTime!}
                    unit="h"
                  />
                  <StatCard
                    label="Tiempo de Ascenso (avg.)"
                    value={averageTime!}
                    unit="h"
                  />
                  <StatCard
                    label="Comunidades Visitadas"
                    value={visitedCounties!}
                    unit={` / 17`}
                  />
                </StatList>
              </section>

              <section className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="h-96 w-full rounded-lg border-2 border-branding-green bg-white px-5 py-2.5 shadow">
                  <h3 className="text-bold text-sm">Condiciones Climáticas</h3>
                  <WeatherChart
                    totalSummited={totalSummited}
                    totalSnowedSummits={totalSnowedSummits}
                    totalDrySummits={totalDrySummits!}
                  />
                </div>
                <div className="h-96 w-full rounded-lg border-2 border-branding-green bg-white px-5 py-2.5 shadow">
                  <h3 className="text-bold text-sm">Elevación de Ascensos</h3>
                  <AscentTimeChart peaks={summited} />
                </div>
              </section>

              {/* <div className="mt-5">
                <div className="h-64 w-full rounded-lg border-2 border-branding-green bg-branding-white shadow sm:h-72 lg:h-96">
                  <MapContainer peaks={summited} zoom={3} />
                </div>
              </div> */}
            </article>
          ) : (
            <div className="prose mx-auto mt-20 max-w-prose rounded-lg border-2 border-branding-green bg-white p-5 text-center text-lg">
              <p>
                {`Tu lista de cumbres está vacía. Para generar tus estadísticas de ascensos, primero debes marcar al menos uno de los 45 techos como coranado.`}
              </p>
              <Button className="mt-5 hover:bg-branding-green/90">
                <Link href="/perfil/cumbres">Tus Cumbres</Link>
              </Button>
            </div>
          )}
        </>
      )}
    </PageContainer>
  );
}
