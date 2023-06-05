"use client"

import Image from "next/image"
import Link from "next/link"
import { Peak } from "@prisma/client"

import { PageContainer } from "@/components/global/page-container"
import { PageTitle } from "@/components/global/page-title"

export const PeaksPage = ({ peaks }: { peaks: Peak[] }) => {
  return (
    <PageContainer>
      <PageTitle>Los 45 Techos</PageTitle>
      <p className="prose prose-xl mt-5">
        Estas son las 45 montañas que tienen el honor de ser el techo de una de
        las 50 provincias que componen España. 4 de estas montañas son
        compartidas por 2 provincias distintas.
      </p>
      <ul className="mx-auto mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {peaks.map((peak) => (
          <Link
            href={`/cumbres/${peak.slug}`}
            key={peak.slug}
            className="relative aspect-video"
          >
            <Image
              src={peak.imageUrl}
              alt={peak.name}
              fill
              className="tw-transition rounded bg-branding-sand object-cover object-center hover:opacity-90"
            />
            <h2 className="absolute bottom-2.5 left-2.5 z-10 rounded-xl bg-white px-3 py-2 text-sm font-medium text-branding-green sm:mt-2.5 sm:text-2xl">
              {peak.name}
            </h2>
          </Link>
        ))}
      </ul>
    </PageContainer>
  )
}
