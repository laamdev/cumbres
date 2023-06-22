import type { Metadata } from "next"
import { auth } from "@clerk/nextjs"

import { BadgesPage } from "@/components/pages/badges-page"

export const metadata: Metadata = {
  title: "Logros",
  description: "Insignias que has logrado con tus ascensos.",
}

export default async function BadgesRoute() {
  const { userId } = await auth()

  if (!userId)
    throw new Error("Debes iniciar sesión para acceder a esta página.")

  return <BadgesPage />
}
