import { ReactNode } from "react"

export const StatList = ({ children }: { children: ReactNode }) => {
  return <ul className="grid gap-5 sm:grid-cols-2">{children}</ul>
}
