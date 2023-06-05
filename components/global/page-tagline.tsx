import { ReactNode } from "react"

export const PageTagline = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-lg font-bold text-branding-sand-900 sm:text-xl">
      {children}
    </h2>
  )
}
