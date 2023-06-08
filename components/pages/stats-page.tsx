"use client"

import Link from "next/link"
import useSWR from "swr"

import { UserPeak } from "@/types/payloads"
import { userPeaksEndpoint as cacheKey, getUserPeaks } from "@/lib/api"
import { getAverage, getPercentage, getSum } from "@/lib/helpers"
import { Button } from "@/components/ui/button"
// // import { Skeleton } from "@/components/ui/skeleton"
import { ProgressBar } from "@/components/dashboard/progress-bar"
import { StatCard } from "@/components/dashboard/stat-card"
import { StatList } from "@/components/dashboard/stat-list"
import { WeatherChart } from "@/components/dashboard/weather-chart"
import { PageContainer } from "@/components/global/page-container"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"

export const StatsPage = () => {
  const { isLoading, data: userPeaks } = useSWR(cacheKey, getUserPeaks, {})

  if (isLoading) return <div></div>

  const summited = userPeaks.filter((peak: UserPeak) => peak.summitId)
  const totalSummited = summited.length
  const totalUnsummited = 45 - totalSummited
  const percentageSummited = getPercentage(totalSummited, 45)

  const percentageUnsummited = 100 - percentageSummited
  const elevationArray = summited.map((peak: UserPeak) => peak.elevation)

  const totalElevation = getSum(elevationArray)
  const timeArray = summited.map((peak: UserPeak) => peak.summitTime)

  const totalTime = getSum(timeArray)
  const averageTime = getAverage(timeArray)
  const totalSnowedSummits = summited.filter(
    (peak: UserPeak) => peak.summitWeather
  ).length

  const totalDrySummits = totalSummited - totalSnowedSummits

  // //   const countiesArray = peaks.map((peak: any) => peak.county.split(", "))
  // //   const contiesFlatArray = countiesArray.flat()
  // //   const counties = [...new Set(contiesFlatArray)]
  // //   const totalCounties = counties.length

  // //   const countyArray = summits.map((summit: any) => summit.peak.county)
  // //   const visitedCounties = [...new Set(countyArray)].length

  return (
    <PageContainer>
      <PageTitle>Tus Estadísticas</PageTitle>
      <TextWrapper className="mt-5">
        Aquí podrás encontrar estadísticas, tablas y gráficos personalizados que
        visualizan tu avance en el reto de los 45 Techos de España.
      </TextWrapper>

      {summited ? (
        <>
          <section className="mt-10 grid gap-5 sm:mt-20 sm:grid-cols-2">
            <ProgressBar
              totalValue={45}
              completedValue={totalSummited}
              completedPercentage={percentageSummited}
              uncompletedValue={totalUnsummited}
              uncompletedPercentage={percentageUnsummited}
              totalLabel=""
              partLabel=""
            />

            <StatList>
              <StatCard
                label="Elevación (total)"
                value={totalElevation}
                unit="m"
              />
              <StatCard
                label="Tiempo de Ascenso (total)"
                value={totalTime}
                unit="h"
              />
              <StatCard
                label="Tiempo de Ascenso (avg.)"
                value={averageTime}
                unit="h"
              />
              {/* <StatCard
          label="Comunidades Visitadas"
          value={visitedCounties}
          unit={` / ${totalCounties}`}
        /> */}
            </StatList>
          </section>

          <section className="relative mt-5">
            <div className="h-96 rounded-xl border-2 border-branding-green bg-white px-5 py-2.5">
              <h3 className="text-bold text-sm">Condiciones Climáticas</h3>
              <WeatherChart
                totalSummited={totalSummited}
                totalSnowedSummits={totalSnowedSummits}
                totalDrySummits={totalDrySummits}
              />
            </div>
          </section>
        </>
      ) : (
        <div className="prose mx-auto mt-20 max-w-prose rounded-xl border-2 border-branding-green bg-white p-5 text-center text-lg">
          <p>
            {`Tu lista de cumbres está vacía. Para generar tus estadísticas de
            ascensos, primero debes marcar al menos uno de los 45 techos como
            coranado.`}
          </p>
          <Button className="mt-5 hover:bg-branding-green/90">
            <Link href="/perfil/cumbres">Tus Cumbres</Link>
          </Button>
        </div>
      )}
    </PageContainer>
  )
}

// // import Link from "next/link"

// // import { getAverage, getPercentage, getSum } from "@/lib/helpers"
// // import { Button } from "@/components/ui/button"
// // import { ProgressBar } from "@/components/dashboard/progress-bar"
// // import { StatCard } from "@/components/dashboard/stat-card"
// // import { StatList } from "@/components/dashboard/stat-list"
// // import { WeatherChart } from "@/components/dashboard/weather-chart"
// // import { PageContainer } from "@/components/global/page-container"
// // import { PageTitle } from "@/components/global/page-title"
// // import { TextWrapper } from "@/components/global/text-wrapper"

// // export const StatsPage = ({ summits }: { summits: any }) => {
// //   const totalSummited = summits.length ? summits.length : 0
// //   const totalUnsummited = summits.length ? 45 - summits.length : 0
// //   const percentageSummited = summits.length
// //     ? getPercentage(summits.length, 45)
// //     : 0
// //   const percentageUnsummited = summits.length ? 100 - percentageSummited : 0
// //   const elevationArray = summits
// //     ? summits.map((summit: any) => +summit.peak.elevation)
// //     : 0
// //   const totalElevation = summits.length ? getSum(elevationArray) : 0
// //   const timeArray = summits
// //     ? summits.map((summit: any) => +summit.summitTime)
// //     : 0
// //   const totalTime = summits.length ? getSum(timeArray) : 0
// //   const averageTime = summits.length ? getAverage(timeArray) : 0
// //   const totalSnowedSummits = summits
// //     ? summits.filter((summit: any) => summit.summitWeather).length
// //     : 0

// //   const totalDrySummits = summits.length
// //     ? totalSummited - totalSnowedSummits
// //     : 0
// //   // //   const countiesArray = peaks.map((peak: any) => peak.county.split(", "))
// //   // //   const contiesFlatArray = countiesArray.flat()
// //   // //   const counties = [...new Set(contiesFlatArray)]
// //   // //   const totalCounties = counties.length

// //   // //   const countyArray = summits.map((summit: any) => summit.peak.county)
// //   // //   const visitedCounties = [...new Set(countyArray)].length

// //   return (
// //     <PageContainer>
// //       <PageTitle>Tus Estadísticas</PageTitle>
// //       <TextWrapper className="mt-5">
// //         Aquí podrás encontrar estadísticas, tablas y gráficos personalizados que
// //         visualizan tu avance en el reto de los 45 Techos de España.
// //       </TextWrapper>

// //       {summits.length ? (
// //         <>
// //           <section className="mt-10 grid gap-5 sm:mt-20 sm:grid-cols-2">
// //             <ProgressBar
// //               totalValue={45}
// //               completedValue={totalSummited}
// //               completedPercentage={percentageSummited}
// //               uncompletedValue={totalUnsummited}
// //               uncompletedPercentage={percentageUnsummited}
// //               totalLabel=""
// //               partLabel=""
// //             />

// //             <StatList>
// //               <StatCard
// //                 label="Elevación (total)"
// //                 value={totalElevation}
// //                 unit="m"
// //               />
// //               <StatCard
// //                 label="Tiempo de Ascenso (total)"
// //                 value={totalTime}
// //                 unit="h"
// //               />
// //               <StatCard
// //                 label="Tiempo de Ascenso (avg.)"
// //                 value={averageTime}
// //                 unit="h"
// //               />
// //               {/* <StatCard
// //           label="Comunidades Visitadas"
// //           value={visitedCounties}
// //           unit={` / ${totalCounties}`}
// //         /> */}
// //             </StatList>
// //           </section>

// //           <section className="mt-5 grid grid-cols-2 gap-5">
// //             <div className="col-span-1 h-96 rounded-xl border-2 border-branding-green bg-white px-2.5 py-3">
// //               <h3 className="text-bold text-sm">Condiciones Climáticas</h3>
// //               <WeatherChart
// //                 totalSummited={totalSummited}
// //                 totalSnowedSummits={totalSnowedSummits}
// //                 totalDrySummits={totalDrySummits}
// //               />
// //             </div>
// //           </section>
// //         </>
// //       ) : (
// //         <div className="prose mx-auto mt-20 max-w-prose rounded-xl border-2 border-branding-green bg-white p-5 text-center text-lg">
// //           <p>
// //             {`Tu lista de cumbres está vacía. Para generar tus estadísticas de
// //             ascensos, primero debes marcar al menos uno de los 45 techos como
// //             coranado.`}
// //           </p>
// //           <Button className="mt-5 hover:bg-branding-green/90">
// //             <Link href="/perfil/cumbres">Tus Cumbres</Link>
// //           </Button>
// //         </div>
// //       )}
// //     </PageContainer>
// //   )
// // }
