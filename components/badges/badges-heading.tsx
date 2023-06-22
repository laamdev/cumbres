import { ReactNode } from "react"

export const BadgesHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="font-serif text-3xl font-semibold uppercase leading-none tracking-tighter">
      {children}
    </h2>
  )
}
