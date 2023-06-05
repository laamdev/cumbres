import Link from "next/link"
import { GiMountaintop } from "react-icons/gi"

export const HeaderDashboard = () => {
  return (
    <nav className="sticky top-4 z-50 mx-4 flex max-w-2xl items-center justify-between rounded bg-white p-4 sm:mx-auto">
      <Link href="/">
        <GiMountaintop className="tw-transition h-8 w-8 text-branding-green hover:text-branding-green-800 sm:h-12 sm:w-12" />
      </Link>
    </nav>
  )
}
