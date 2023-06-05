"use client"

import { PageContainer } from "@/components/global/page-container"
import { PageTitle } from "@/components/global/page-title"

import { TextWrapper } from "../global/text-wrapper"
import { PublicPeakCard } from "../peaks/public-peak-card"
import { PublicPeakList } from "../peaks/public-peak-list"

export const PeaksPage = ({ peaks }: { peaks: any[] }) => {
  return (
    <PageContainer>
      <PageTitle>Los 45 Techos</PageTitle>
      <TextWrapper className="mt-5">
        Estas son las 45 montañas que tienen el honor de ser el techo de una de
        las 50 provincias que componen España. 4 de estas montañas son
        compartidas por 2 provincias distintas.
      </TextWrapper>

      <PublicPeakList>
        {peaks.map((peak) => (
          <PublicPeakCard peak={peak} key={peak.id} />
        ))}
      </PublicPeakList>
    </PageContainer>
  )
}
