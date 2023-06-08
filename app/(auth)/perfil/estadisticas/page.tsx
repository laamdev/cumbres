import type { Metadata } from "next"
import { auth } from "@clerk/nextjs"

// // import { prisma } from "@/lib/client"
import { StatsPage } from "@/components/pages/stats-page"

export const metadata: Metadata = {
  title: "Tus Cumbres",
  description:
    "Registro de las cumbres que has coronado y las que te faltan por coronar.",
}

// // async function getSummits(userId: string) {
// //   const summits = await prisma.summit.findMany({
// //     where: {
// //       userId: userId,
// //     },
// //     include: {
// //       peak: true,
// //     },
// //   })
// //   if (!summits) {
// //     // This will activate the closest `error.js` Error Boundary
// //     throw new Error("Failed to fetch data")
// //   }

// //   return summits
// // }

export default async function StatsRoute() {
  const { userId } = await auth()

  if (!userId)
    throw new Error("Debes iniciar sesión para acceder a esta página.")

  // // const summitsData = await getSummits(userId)

  // // return <StatsPage summits={summitsData} />
  return <StatsPage />
}
