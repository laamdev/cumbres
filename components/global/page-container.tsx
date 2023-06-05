import { ReactNode } from "react"

export const PageContainer = ({ children }: { children: ReactNode }) => {
  return <div className="mx-auto my-10 max-w-7xl px-5 sm:my-20">{children}</div>
}
