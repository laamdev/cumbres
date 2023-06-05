import { ReactNode } from "react"
import clsx from "clsx"

export const PeakLabel = ({
  children,
  isSummited,
}: {
  children: ReactNode
  isSummited?: boolean
}) => {
  return (
    <p
      className={clsx(
        "text-base",
        isSummited ? "text-stone-400" : "text-stone-600"
      )}
    >
      {children}
    </p>
  )
}
