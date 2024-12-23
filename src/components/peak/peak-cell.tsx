import { ReactNode } from "react"
import clsx from "clsx"

export const PeakCell = ({
  children,
  left,
  right,
  center,
}: {
  children: ReactNode
  left?: boolean
  right?: boolean
  center?: boolean
}) => {
  return (
    <div
      className={clsx(
        "flex flex-col",
        right && "text-right",
        left && "text-left",
        center && "text-center"
      )}
    >
      {children}
    </div>
  )
}
