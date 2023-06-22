import { ReactNode } from "react"

export const PublicPeakList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="mx-auto mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2">
      {children}
    </ul>
  )
}
