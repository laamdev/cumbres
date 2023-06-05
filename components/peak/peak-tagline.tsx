import { ReactNode } from "react"
import clsx from "clsx"

export const PeakTagline = ({
  children,
  isSummited,
}: {
  children: ReactNode
  isSummited?: boolean
}) => {
  return (
    <div
      className={clsx(
        "text-sm uppercase tracking-widest",
        isSummited ? "text-green-200" : "text-green-800"
      )}
    >
      {children}
    </div>
  )
}
