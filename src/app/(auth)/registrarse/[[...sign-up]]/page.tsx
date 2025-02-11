import { Metadata } from "next";
import Link from "next/link";
import { SignUp } from "@clerk/nextjs";

import { Logo } from "@/components/global/logo";

export const metadata: Metadata = {
  title: "Regístrate",
  description:
    "Regístrate en cumbres y únete al reto de los 45 Techos de España.",
};
export default function SignUpPage() {
  return (
    <>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1606497612814-87bfcdcf57f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80)",
          }}
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/">
            <Logo className="tw-transition h-8 w-8 text-white hover:text-white/90 sm:h-12 sm:w-12" />
          </Link>
        </div>
        <div className="relative z-20 mt-auto text-branding-green">
          <blockquote className="space-y-2">
            <p className="text-lg font-semibold">{`"Las montañas son catedrales en las que practico mi religión"`}</p>
            <footer className="text-sm">{`– Anatoli Boukreev`}</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <SignUp
            signInUrl="/iniciar-sesion"
            appearance={{
              elements: {
                formButtonPrimary:
                  "bg-branding-green hover:bg-branding-green-800 tw-transition",
                formFieldInput:
                  "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-branding-green",
                footerActionLink:
                  "text-branding-green font-bold hover:text-branding-green-800 tw-transition",
                headerTitle: "font-serif",
              },
              layout: {
                logoPlacement: "inside",
                showOptionalFields: true,
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "iconButton",
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
