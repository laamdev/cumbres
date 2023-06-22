import type { Metadata } from "next"
import { auth } from "@clerk/nextjs"

import { StatsPage } from "@/components/pages/stats-page"

export const metadata: Metadata = {
  title: "Tus Cumbres",
  description:
    "Registro de las cumbres que has coronado y las que te faltan por coronar.",
}

export default async function StatsRoute() {
  const { userId } = await auth()

  if (!userId)
    throw new Error("Debes iniciar sesión para acceder a esta página.")

  return <StatsPage />
}
