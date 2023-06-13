import { prisma } from "@/lib/client"

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

  return res
}

export default async function sitemap() {
  const peaks = await getPeaks()

  const peaksSitemap = await peaks.map((peak) => ({
    url: `https://cumbr.es/cumbres/${peak.slug}`,
    lastModified: new Date(),
  }))

  console.log(peaksSitemap)
  return [
    {
      url: "https://cumbr.es",
      lastModified: new Date(),
    },
    {
      url: "https://cumbr.es/cumbres",
      lastModified: new Date(),
    },
    {
      url: "https://cumbr.es",
      lastModified: new Date(),
    },
    ...peaksSitemap,
  ]
}
