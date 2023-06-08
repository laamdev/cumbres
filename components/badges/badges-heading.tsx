import { ReactNode } from "react"

export const BadgesHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="font-serif text-3xl font-medium italic">{children} </h2>
}
