import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";

import { PageContainer } from "@/components/global/page-container";
import { PageTitle } from "@/components/global/page-title";
import { TextWrapper } from "@/components/global/text-wrapper";
import { PublicPeakCard } from "@/components/peaks/public-peak-card";
import { PublicPeakList } from "@/components/peaks/public-peak-list";
import { PeaksFilters } from "@/components/global/peaks-filters";

import { peaks } from "@/data/peaks";
import { getUserSummits } from "@/prisma/queries";

interface PeaksRouteProps {
  searchParams: Promise<{
    comunidad: string;
    status: "todas" | "completadas" | "por-completar";
  }>;
}

export const metadata: Metadata = {
  title: "Las 45 Cumbres",
  description:
    "Conoce los datos más interesantes de las 45 cumbres más alta de España.",
  openGraph: {
    title: "Las 45 Cumbres",
    description:
      "Conoce los datos más interesantes de las 45 cumbres más alta de España.",
  },
};

export default async function PeaksPage({ searchParams }: PeaksRouteProps) {
  const { comunidad, status = "todas" } = await searchParams;
  const selectedTerritories = comunidad?.split(",") || [];

  const userSummits = await getUserSummits();
  const summitedSlugs = userSummits.map((summit) => summit?.slug);

  const filteredPeaks = peaks.filter((peak) => {
    const matchesTerritory =
      selectedTerritories.length === 0 ||
      peak.county.some((code) => selectedTerritories.includes(code));

    const matchesStatus =
      status === "todas" ||
      (status === "completadas" && summitedSlugs.includes(peak.slug)) ||
      (status === "por-completar" && !summitedSlugs.includes(peak.slug));

    return matchesTerritory && matchesStatus;
  });

  return (
    <PageContainer>
      <PageTitle>Los 45 Techos</PageTitle>
      <TextWrapper className="mt-5">
        Estas son las 45 montañas que tienen el honor de ser el techo de una de
        las 50 provincias que componen España. 4 de estas montañas son
        compartidas entre provincias colindantes y 2 forman parte de distintas
        cordilleras.
      </TextWrapper>

      <div className="sm:mt-20 mt-10">
        <PeaksFilters />

        <PublicPeakList>
          {filteredPeaks.map((peak) => (
            <PublicPeakCard
              key={peak.slug}
              peak={peak}
              summited={summitedSlugs.includes(peak.slug)}
            />
          ))}
        </PublicPeakList>
      </div>
    </PageContainer>
  );
}
