import { badges } from "@/data/badges"

import { BadgesCard } from "@/components/badges/badges-card"
import { BadgesFullCountyCard } from "@/components/badges/badges-full-county-card"
import { BadgesHeading } from "@/components/badges/badges-heading"
import { BadgesList } from "@/components/badges/badges-list"
import { BadgesSummary } from "@/components/badges/badges-summary"
import { PageContainer } from "@/components/global/page-container"
import { PageTitle } from "@/components/global/page-title"
import { TextWrapper } from "@/components/global/text-wrapper"

export const BadgesPage = ({ summits }: { summits: any }) => {
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
          <BadgesHeading>Techo Nacional y de la Península</BadgesHeading>
          <BadgesSummary>
            Puntos más alto de España y de la Península ibérica.
          </BadgesSummary>
          <BadgesList>
            {badges.highestPointCountryAndPeninsula.map((badge) => (
              <BadgesCard
                buttonLabel={badge.button.name}
                buttonImageUrl={badge.button.imageUrl}
                popoverLabel={badge.popover.name}
                summits={summits}
                intro="Punto más alto de"
              />
            ))}
          </BadgesList>
        </div>

        <div>
          <BadgesHeading>Techos Comunitarios</BadgesHeading>
          <BadgesSummary>
            Puntos más altos de cada Comunidad Autónoma española.
          </BadgesSummary>
          <BadgesList>
            {badges.highestPointCounty.map((badge) => (
              <BadgesCard
                buttonLabel={badge.button.name}
                buttonImageUrl={badge.button.imageUrl}
                popoverLabel={badge.popover.name}
                summits={summits}
                intro="Punto más alto de"
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
              <BadgesFullCountyCard
                peaks={badge.peaks}
                county={badge.county}
                summits={summits}
              />
            ))}
          </BadgesList>
        </div>
      </section>
    </PageContainer>
  )
}
