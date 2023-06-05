import { ReactNode } from "react"

export const TextWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <p className="max-w-3xl font-serif text-lg leading-relaxed text-branding-white-950 sm:text-2xl">
      {children}
    </p>
  )
}
