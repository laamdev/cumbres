import { ReactNode } from "react"

export const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-serif text-5xl font-bold uppercase tracking-tighter text-branding-green sm:text-7xl">
      {children}
    </h1>
  )
}
