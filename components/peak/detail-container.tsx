import { ReactNode } from "react"

export const DetailContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-0.5">
      {children}
    </div>
  )
}
