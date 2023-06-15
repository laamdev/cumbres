import { ReactNode } from "react"

export const PageTagline = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="text-base font-bold uppercase tracking-tighter text-branding-sand-900 sm:text-lg">
      {children}
    </h2>
  )
}
