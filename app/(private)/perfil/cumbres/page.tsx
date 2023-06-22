import type { Metadata } from "next"
import { auth } from "@clerk/nextjs"

import { SummitsPage } from "@/components/pages/summits-page"

export const metadata: Metadata = {
  title: "Tus Cumbres",
  description:
    "Registro de las cumbres que has coronado y las que te faltan por coronar.",
}

export default function PeaksRoute() {
  const { userId } = auth()

  if (!userId)
    throw new Error("Debes iniciar sesión para acceder a esta página.")
  return <SummitsPage />
}
