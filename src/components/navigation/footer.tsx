import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getYear } from "date-fns";

import { FooterLink } from "@/components/navigation/footer-link";
import { Logo } from "@/components/global/logo";

import { cn } from "@/lib/utils";

interface FooterProps {
  color?: string;
}

export const Footer = ({ color }: FooterProps) => {
  return (
    <footer
      className={cn(
        "bg-branding-green p-5 text-xs text-branding-white sm:px-0 sm:text-sm",
        color === "green" && "bg-branding-green",
        color === "yellow" && "bg-branding-yellow"
      )}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 place-items-center items-start gap-y-10 py-10 text-center sm:grid-cols-3 sm:gap-y-0 sm:py-20 sm:text-left">
        <Link
          href="#top"
          className="col-span-1 flex flex-col gap-y-1 text-center sm:col-span-1"
        >
          <Logo
            className={cn(
              "tw-transition size-20 sm:size-36 fill-branding-white"
            )}
          />
          <span className="font-serif text-xl sm:text-3xl">Cumbr.es</span>
        </Link>

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
              <FooterLink href="/perfil/estadisticas">Estadísticas</FooterLink>
              <FooterLink href="/perfil/logros">Logros</FooterLink>
            </SignedIn>
            <SignedOut>
              <FooterLink href="/iniciar-sesion">Iniciar Sesión</FooterLink>
              <FooterLink href="/registrarse">Registrarse</FooterLink>
            </SignedOut>
          </ul>
        </div>
      </div>
      <div className="mt-10 grid place-content-center text-xs opacity-75 sm:text-sm">
        <span>{`© Cumbres ${getYear(new Date())}`}</span>
      </div>
    </footer>
  );
};
