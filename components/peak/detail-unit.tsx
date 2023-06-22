import { ReactNode } from "react"

export const DetailUnit = ({ children }: { children: ReactNode }) => {
  return (
    <span className="font-sans text-sm font-normal normal-case">
      {children}
    </span>
  )
}
