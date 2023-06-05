import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { prisma } from "@/lib/client"
import { PeakPage } from "@/components/pages/peak-page"

export async function generateStaticParams() {
  const peaks = await prisma.peak.findMany()

  return peaks.map((peak: any) => ({
    slug: peak.slug,
  }))
}

async function getPeak(params: any) {
  const peak = await prisma.peak.findUnique({
    where: {
      slug: params.slug.toString(),
    },
  })

  if (!peak) {
    null
  }

  return peak
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const peak = await getPeak(params)
  if (!peak) {
    return
  }

  const { name, slug, createdAt, imageUrl }: any = peak

  const ogImage = imageUrl
    ? `https://cumbr.es${imageUrl}`
    : `https://cumbr.es/api/og?title=${name}`

  return {
    title: name,
    // // description,
    openGraph: {
      title: name,
      // // description,
      type: "article",
      publishedTime: createdAt,
      url: `https://cumbr.es/cumbres/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      // // description,
      images: [ogImage],
    },
  }
}

export default async function PeakRoute({
  params,
}: {
  params: { slug: string }
}) {
  const peak = await getPeak(params)

  if (!peak) {
    return notFound()
  }

  return <PeakPage peak={peak} />
}
