import { SignedIn, SignedOut } from "@clerk/nextjs"
import { GiMountaintop } from "react-icons/gi"

import { FooterLink } from "@/components/navigation/footer-link"

export const Footer = () => {
  return (
    <footer className="bg-branding-green p-5 text-xs text-branding-white sm:px-0 sm:text-sm">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 py-10 sm:grid-cols-3 sm:py-20">
        <div className="col-span-2 flex flex-col items-center gap-y-1 sm:col-span-1 sm:w-fit">
          <GiMountaintop className="h-20 w-20 sm:h-40 sm:w-40" />
          <span className="font-serif text-xl sm:text-3xl">Cumbr.es</span>
        </div>

        <div className="col-span-1">
          <div className="flex justify-between gap-x-5">
            <div>
              <p className="font-semibold uppercase sm:text-lg">Info</p>
              <ul className="mt-2.5 flex flex-col space-y-2.5 text-lg sm:text-xl">
                <FooterLink href="/cumbres">Los 45 Techos</FooterLink>
              </ul>
            </div>

            <div>
              <p className="font-semibold uppercase sm:text-lg">Perfil</p>

              <ul className="mt-2.5 flex flex-col space-y-2.5">
                <SignedIn>
                  <FooterLink href="/perfil/cumbres">Tus Cumbres</FooterLink>
                  <FooterLink href="/perfil/estadisticas">
                    Estadísticas
                  </FooterLink>
                  <FooterLink href="/perfil/logros">Logros</FooterLink>
                </SignedIn>
                <SignedOut>
                  <FooterLink href="/iniciar-sesion">Iniciar Sesión</FooterLink>
                  <FooterLink href="/registrarse">Registrarse</FooterLink>
                </SignedOut>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 grid place-content-center text-xs opacity-75 sm:text-sm">
        <span>© Cumbres 2023</span>
      </div>
    </footer>
  )
}
