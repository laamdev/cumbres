import { ReactNode } from "react"
import Link from "next/link"

export const CustomLink = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) => {
  return (
    <Link
      href={href}
      className="tw-transition font-bold italic text-branding-yellow hover:text-branding-yellow/90"
    >
      {children}
    </Link>
  )
}
