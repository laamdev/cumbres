import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const TextWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p
      className={cn(
        className,
        "max-w-3xl font-serif text-lg leading-relaxed sm:text-2xl"
      )}
    >
      {children}
    </p>
  )
}
