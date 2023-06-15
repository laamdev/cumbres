import { ReactNode } from "react"

import { cn } from "@/lib/utils"

export const PageContainer = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <div className={cn("mx-auto max-w-7xl px-5 py-16 sm:py-40", className)}>
      {children}
    </div>
  )
}
