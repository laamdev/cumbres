import { ReactNode } from "react"

export const BadgesList = ({ children }: { children: ReactNode }) => {
  return (
    <ul className="mt-5 grid grid-cols-2 place-items-center gap-10 rounded-xl border-2 bg-white to-branding-green px-5 py-10 sm:grid-cols-4">
      {children}
    </ul>
  )
}
