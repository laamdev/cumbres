import { ReactNode } from "react"

export const BadgesSummary = ({ children }: { children: ReactNode }) => {
  return <p className="mt-2.5 text-zinc-700">{children}</p>
}
