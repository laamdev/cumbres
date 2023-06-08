import type { Metadata } from "next"
import { auth } from "@clerk/nextjs"

import { prisma } from "@/lib/client"
import { BadgesPage } from "@/components/pages/badges-page"

export const metadata: Metadata = {
  title: "Logros",
  description: "Insignias que has logrado con tus ascensos.",
}

async function getSummits(userId: string) {
  const summits = await prisma.summit.findMany({
    where: {
      userId: userId,
    },
    include: {
      peak: true,
    },
  })
  if (!summits) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data")
  }

  return summits
}

export default async function BadgesRoute() {
  const { userId } = await auth()

  if (!userId)
    throw new Error("Debes iniciar sesión para acceder a esta página.")

  const summitsData = await getSummits(userId)

  return <BadgesPage summits={summitsData} />
}
