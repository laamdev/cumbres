import type { Metadata } from "next"
import { auth } from "@clerk/nextjs"

import { SummitsPage } from "@/components/pages/summits-page"

export const metadata: Metadata = {
  title: "Tus Cumbres",
  description:
    "Registro de las cumbres que has coronado y las que te faltan por coronar.",
}

export default function PeaksRoute() {
  const { userId, session } = auth()

  if (!userId) throw new Error("Login is required to access this page.")
  return <SummitsPage />
}
