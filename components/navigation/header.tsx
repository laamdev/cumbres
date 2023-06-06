import Link from "next/link"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import { GiMountaintop } from "react-icons/gi"

import { buttonVariants } from "@/components/ui/button"
import { ProfileMenu } from "@/components/ui/profile-menu"

export const Header = () => {
  return (
    <nav
      id="top"
      className="sticky top-4 z-40 mx-4 flex max-w-4xl items-center justify-between rounded bg-white p-4 sm:mx-auto"
    >
      <Link href="/">
        <GiMountaintop className="tw-transition h-8 w-8 text-branding-green hover:text-branding-green-800 sm:h-12 sm:w-12" />
      </Link>
      <SignedIn>
        <ProfileMenu />
      </SignedIn>

      <SignedOut>
        <div className="space-x-2 sm:space-x-4">
          <Link
            href="/iniciar-sesion" // // onClick={() => openSignIn()}
            className={buttonVariants({ variant: "link" })}
          >
            Iniciar Sesión
          </Link>
          <Link
            href="/registrarse"
            className={buttonVariants({ variant: "outline" })}
          >
            Registrarse
          </Link>
        </div>
      </SignedOut>
    </nav>
  )
}
