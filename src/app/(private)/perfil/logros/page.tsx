import type { Metadata } from "next";

import { BadgesCard } from "@/components/badges/badges-card";
import { BadgesHeading } from "@/components/badges/badges-heading";
import { BadgesList } from "@/components/badges/badges-list";
import { BadgesSummary } from "@/components/badges/badges-summary";
import { PageContainer } from "@/components/global/page-container";
import { PageTitle } from "@/components/global/page-title";
import { TextWrapper } from "@/components/global/text-wrapper";

import { badges } from "@/data/badges";
import { getUserSummits } from "@/prisma/queries";

export const metadata: Metadata = {
  title: "Logros",
  description: "Insignias que has logrado con tus ascensos.",
};

export default async function BadgesPage() {
  const userSummits = await getUserSummits();

  const isHighestSpain = await userSummits.find(
    (summit) => summit?.id === "01"
  );

  const isHighestPeninsula = await userSummits.find(
    (summit) => summit?.id === "02"
  );

  const isHighestForCounty = (peak: string, county: string) => {
    const summitedPeak = userSummits.find((summit) => summit?.id === peak);
    return summitedPeak?.highestPoint?.includes(county) || false;
  };

  const isAllCountyPeaksCompleted = (peaks: string[]) => {
    return peaks.every((peakId) =>
      userSummits.some((summit) => summit?.id === peakId)
    );
  };

  // // const isSiamesePeaksCompleted = (
  // //   requiredPeaks: string[],
  // //   userPeaks: string[]
  // // ) => {
  // //   return requiredPeaks.every((peak) => userPeaks.includes(peak));
  // // };

  return (
    <PageContainer>
      <PageTitle>Tus Logros</PageTitle>
      <TextWrapper className="mt-5">
        Estos son todos los grandes logros que has conseguido en tu carrera por
        coronar los 45 Techos de España. En Cumbres te proponemos una serie de
        retos que una vez completados te otorgarán una insignia especial que
        podrás compartir con todos tus amigos.
      </TextWrapper>

      <section className="mt-20 space-y-10">
        <div>
          <BadgesHeading>Logros Generales</BadgesHeading>
          <BadgesSummary>
            Los principales retos que has conquistado en tus ascensos
          </BadgesSummary>
          <BadgesList>
            {badges.general.map((badge) => (
              <BadgesCard
                key={badge.id}
                badge={badge}
                completed={userSummits.length >= badge.filter}
              />
            ))}
          </BadgesList>
        </div>

        <div>
          <BadgesHeading>Techo Nacional y de la Península</BadgesHeading>
          <BadgesSummary>
            Puntos más alto de España y de la Península ibérica.
          </BadgesSummary>
          <BadgesList>
            {badges.highestPointCountryAndPeninsula.map((badge) => (
              <BadgesCard
                key={badge.id}
                badge={badge}
                completed={
                  badge.peak === "01"
                    ? !!isHighestSpain
                    : badge.peak === "02"
                    ? !!isHighestPeninsula
                    : false
                }
              />
            ))}
          </BadgesList>
        </div>

        <div>
          <BadgesHeading>Techos Comunitarios</BadgesHeading>
          <BadgesSummary>
            Puntos más altos de cada Comunidad Autónoma española.{" "}
          </BadgesSummary>
          <BadgesList>
            {badges.highestPointCounty.map((badge) => (
              <BadgesCard
                key={badge.id}
                badge={badge}
                completed={isHighestForCounty(badge.peak, badge.county)}
              />
            ))}
          </BadgesList>
        </div>

        <div>
          <BadgesHeading>Todos los Techos de cada Comunidad</BadgesHeading>
          <BadgesSummary>
            Puntos más altos de las provincias que componen una Comunidad.
          </BadgesSummary>
          <BadgesList>
            {badges.allHighestPointsByCounty.map((badge) => (
              <BadgesCard
                key={badge.id}
                badge={badge}
                completed={isAllCountyPeaksCompleted(badge.peaks)}
              />
            ))}
          </BadgesList>
        </div>

        {/* <div>
          <BadgesHeading>Otros Logros</BadgesHeading>
          <BadgesSummary>
            Retos especiales que has conquistado durante tus ascensos
          </BadgesSummary>
          <BadgesList>
            {badges.misc.map((badge) => (
              <BadgesCard
                key={badge.id}
                badge={badge}
                completed={isSiamesePeaksCompleted(badge.peaks, userSummits)} // Add userCompletedPeaks from your data source
              />
            ))}
          </BadgesList>
        </div> */}
      </section>
    </PageContainer>
  );
}
