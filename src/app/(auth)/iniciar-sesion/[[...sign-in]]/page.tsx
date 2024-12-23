import { Metadata } from "next";
import Link from "next/link";
import { SignIn } from "@clerk/nextjs";

import { Logo } from "@/components/global/logo";

export const metadata: Metadata = {
  title: "Inicia Sesión",
  description:
    "Inicia sesión, accede a tu perfil de Cumbres y explora el reto de los 45 Techos de España.",
};

export default function SignInPage() {
  return (
    <>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1563768227195-c752361b171c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVpZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60)",
          }}
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Link href="/">
            <Logo className="tw-transition h-8 w-8 text-white hover:text-white/90 sm:h-12 sm:w-12" />
          </Link>
        </div>
        <div className="relative z-20 mt-auto text-branding-white">
          <blockquote className="space-y-2">
            <p className="text-lg font-semibold">
              &ldquo;Suceden grandes cosas cuando las montañas y el hombre se
              juntan&rdquo;
            </p>
            <footer className="text-sm">– William Blake</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <SignIn
            signUpUrl="/registrarse"
            // // redirectUrl={redirectUrl || '/dashboard'}

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
                //   logoImageUrl: 'https://clerk.dev/logo.png',
                logoPlacement: "inside",
                showOptionalFields: true,
                socialButtonsPlacement: "bottom",
                socialButtonsVariant: "iconButton",
                //   helpPageUrl: 'https://clerk.dev/support',
                //   privacyPageUrl: 'https://clerk.dev/privacy',
                //   termsPageUrl: 'https://clerk.dev/terms',
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

// // import { SignIn } from "@clerk/nextjs"

// // import { PageContainer } from "@/components/global/page-container"

// // export default async function SignInPage() {
// //   return (
// //     <div>
// //       <SignIn
// //         signUpUrl="/registrarse"
// //         // // redirectUrl={redirectUrl || '/dashboard'}
// //         redirectUrl={"/perfil/cumbres"}
// //         appearance={{
// //           elements: {
// //             formButtonPrimary:
// //               "bg-branding-green hover:bg-branding-green-800 tw-transition",
// //             formFieldInput:
// //               "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-branding-green",
// //             footerActionLink:
// //               "text-branding-green font-bold hover:text-branding-green-800 tw-transition",
// //           },
// //           layout: {
// //             //   logoImageUrl: 'https://clerk.dev/logo.png',
// //             logoPlacement: "inside",
// //             showOptionalFields: true,
// //             socialButtonsPlacement: "bottom",
// //             socialButtonsVariant: "iconButton",
// //             //   helpPageUrl: 'https://clerk.dev/support',
// //             //   privacyPageUrl: 'https://clerk.dev/privacy',
// //             //   termsPageUrl: 'https://clerk.dev/terms',
// //           },
// //         }}
// //       />
// //     </div>
// //   )
// // }
