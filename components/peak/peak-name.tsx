import { ReactNode } from "react"
import clsx from "clsx"

export const PeakName = ({
  children,
  isSummited,
}: {
  children: ReactNode
  isSummited?: boolean
}) => {
  return (
    <h2
      className={clsx(
        "mt-1 w-full text-center font-serif text-xl font-bold uppercase leading-none sm:text-3xl",
        isSummited ? "text-white" : "text-black"
      )}
    >
      {children}
    </h2>
  )
}
