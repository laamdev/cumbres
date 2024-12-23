import Image from "next/image";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { createClerkClient } from "@clerk/backend";

import { PageContainer } from "@/components/global/page-container";
import { Clouds } from "@/components/home/clouds";
import { CustomLink } from "@/components/home/custom-link";

import { getTotalElevation, getTotalSummitCount } from "@/prisma/queries";

export default async function HomePage() {
  const clerkClient = await createClerkClient({
    secretKey: process.env.CLERK_SECRET_KEY,
  });

  const [summitsCount, elevationCount, usersCount] = await Promise.all([
    getTotalSummitCount(),
    getTotalElevation(),
    clerkClient.users.getCount(),
  ]);

  return (
    <PageContainer>
      <section className="mx-auto max-w-3xl">
        <div className="relative">
          <Image
            alt={`Cumbres`}
            src={"/images/hero-1.webp"}
            width={1280}
            height={1280}
            className="rounded-lg"
            priority
          />
          <h1 className="absolute left-1/2 top-6 -z-10 -translate-x-1/2 -translate-y-1/2 font-serif text-6xl font-semibold uppercase leading-none tracking-tighter text-branding-green sm:top-14 lg:text-9xl">
            Cumbres
          </h1>

          <Clouds />

          <div className="absolute left-1/2 top-2/3 z-10 w-11/12 -translate-x-1/2 space-y-2 rounded-lg bg-branding-green p-5 text-center font-serif text-lg leading-relaxed shadow-lg sm:space-y-6 sm:text-3xl">
            <p>
              <span className="text-branding-white">{`La cima de `}</span>
              <CustomLink href={`/cumbres`}>{`45 montañas `}</CustomLink>
              <span className="text-branding-white">{`ostentan los puntos más altos de las 50 provincias españolas.`}</span>
            </p>
            <p>
              <SignedIn>
                <CustomLink
                  href={`/cumbres`}
                >{`Ver todas las cumbres`}</CustomLink>

                <span className="text-branding-white">{`y gestiona el registro de los Techos de España que has coronado y los que aún te quedan por visitar.`}</span>
              </SignedIn>
              <SignedOut>
                <CustomLink
                  href={`/iniciar-sesion`}
                >{`Inicia sesión `}</CustomLink>
                <span className="text-branding-white">{`o `}</span>
                <CustomLink href={`/registrarse`}>{`regístrate `}</CustomLink>

                <span className="text-branding-white">{`y lleva un registro de los Techos de España que has coronado y los que aún te quedan por visitar.`}</span>
              </SignedOut>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 mt-56 max-w-5xl md:mt-40 ">
        <h2 className="text-center font-serif text-3xl font-medium text-branding-green sm:text-5xl">
          Nuestra Comunidad
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-y-2.5 rounded-lg border-2 border-branding-green bg-branding-yellow px-10 py-5 font-serif shadow">
            <div className="text-6xl font-semibold uppercase leading-none tracking-tighter">
              {`${usersCount}`}
            </div>
            <div className="text-lg lowercase leading-none tracking-tighter">
              {`Usuarios`}
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2.5 rounded-lg border-2 border-branding-green bg-branding-yellow px-10 py-5 font-serif shadow">
            <div className="text-6xl font-semibold uppercase leading-none tracking-tighter">
              {`${summitsCount}`}
            </div>
            <div className="text-lg lowercase leading-none tracking-tighter">
              {`Cumbres Ascendidas`}
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2.5 rounded-lg border-2 border-branding-green bg-branding-yellow px-10 py-5 font-serif shadow">
            <div className="text-6xl font-semibold uppercase leading-none tracking-tighter">
              {`${elevationCount}`}
              <span className="ml-2.5 font-sans text-xl font-normal lowercase">
                {`km`}
              </span>
            </div>
            <div className="text-lg lowercase leading-none tracking-tighter">
              {`Distancia Ascendida`}
            </div>
          </div>
        </div>
      </section>
    </PageContainer>
  );
}
