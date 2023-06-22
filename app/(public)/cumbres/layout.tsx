import { ReactNode } from "react"

import { Footer } from "@/components/navigation/footer"
import { Header } from "@/components/navigation/header"

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-branding-green text-branding-yellow">
      <Header color="yellow" />
      {children}
      <Footer color="yellow" />
    </div>
  )
}
