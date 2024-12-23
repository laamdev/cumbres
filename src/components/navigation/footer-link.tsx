import { ReactNode } from "react"
import Link from "next/link"

export const FooterLink = ({
  children,
  href,
}: {
  children: ReactNode
  href: string
}) => {
  return (
    <Link
      href={href}
      className="tw-transition text-base hover:text-branding-white/75 sm:text-xl"
    >
      {children}
    </Link>
  )
}
