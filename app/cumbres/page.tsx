import type { Metadata } from "next"

import { prisma } from "@/lib/client"
import { PeaksPage } from "@/components/pages/peaks-page"

// // export const dynamic = "force-dynamic"

async function getPeaks() {
  const res = await prisma.peak.findMany({
    orderBy: [
      {
        elevation: "desc",
      },
      {
        name: "desc",
      },
    ],
  })
  // //   // Recommendation: handle errors
  // // if (!res.ok) {
  // //   // This will activate the closest `error.js` Error Boundary
  // //   throw new Error('Failed to fetch data');
  // // }

  return res
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
}

export default async function PeaksRoute() {
  const peaks = await getPeaks()
  return <PeaksPage peaks={peaks} />
}
