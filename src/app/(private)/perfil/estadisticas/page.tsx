import type { Metadata } from "next";
// // import Link from "next/link";
// // import { auth } from "@clerk/nextjs";

// // import { Button } from "@/components/ui/button";
// // import { Skeleton } from "@/components/ui/skeleton";
// // import { AscentTimeChart } from "@/components/dashboard/ascent-time-chart";
// // import { ProgressBar } from "@/components/dashboard/progress-bar";
// // import { StatCard } from "@/components/dashboard/stat-card";
// // import { StatList } from "@/components/dashboard/stat-list";
// // import { WeatherChart } from "@/components/dashboard/weather-chart";
import { PageContainer } from "@/components/global/page-container";
import { PageTitle } from "@/components/global/page-title";
import { TextWrapper } from "@/components/global/text-wrapper";

// // import { getAverage, getPercentage, getSum } from "@/lib/helpers";

export const metadata: Metadata = {
  title: "Tus Cumbres",
  description:
    "Registro de las cumbres que has coronado y las que te faltan por coronar.",
};

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
    </PageContainer>
  );
}
