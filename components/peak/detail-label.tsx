import { ReactNode } from "react"

export const DetailLabel = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-xs font-medium text-branding-white/90 sm:text-sm">
      {children}
    </p>
  )
}
