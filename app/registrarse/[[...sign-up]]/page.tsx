import { SignUp } from "@clerk/nextjs"

export default function SignUpPage() {
  return (
    <main className="mx-auto mt-16 grid max-w-2xl place-content-center sm:mt-20">
      <SignUp
        signInUrl="/iniciar-sesion"
        // // redirectUrl={redirectUrl || '/dashboard'}
        redirectUrl={"/perfil/cumbres"}
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-branding-green hover:bg-branding-green-800 tw-transition",
            formFieldInput:
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-branding-green",
            footerActionLink:
              "text-branding-green font-bold hover:text-branding-green-800 tw-transition",
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
    </main>
  )
}
