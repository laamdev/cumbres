import { ReactNode } from "react"

import { Footer } from "@/components/navigation/footer"
import { Header } from "@/components/navigation/header"

export default function ProfileLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-branding-yellow text-branding-green">
      <Header color="green" />
      {children}
      <Footer color="green" />
    </div>
  )
}
