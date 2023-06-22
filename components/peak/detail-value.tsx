import { ReactNode } from "react"

export const DetailValue = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="font-serif text-base font-semibold uppercase text-branding-green md:text-lg">
      {children}
    </h4>
  )
}
