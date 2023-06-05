import { ReactNode } from "react"
import clsx from "clsx"

export const PeakValue = ({
  children,
  isSummited,
}: {
  children: ReactNode
  isSummited?: boolean
}) => {
  return (
    <h3
      className={clsx(
        "font-serif text-lg font-medium leading-tight",
        isSummited ? "text-stone-100" : "text-stone-900"
      )}
    >
      {children}
    </h3>
  )
}
