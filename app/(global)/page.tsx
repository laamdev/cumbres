import Image from "next/image"
import Link from "next/link"
import { clerkClient, SignedIn, SignedOut } from "@clerk/nextjs"

import { prisma } from "@/lib/client"
import { getKm, getSum } from "@/lib/helpers"
import { Separator } from "@/components/ui/separator"
import { StatCard } from "@/components/dashboard/stat-card"
import { PageContainer } from "@/components/global/page-container"
import { Clouds } from "@/components/home/clouds"
import { CustomLink } from "@/components/home/custom-link"

// Prisma does not support Edge without the Data Proxy currently
export const runtime = "nodejs" // default
export const preferredRegion = "home"
export const dynamic = "force-dynamic"

export const revalidate = 60

async function getPeaks() {
  const res = await prisma.peak.findMany({
    take: 5,
    orderBy: [
      {
        elevation: "desc",
      },
      {
        name: "desc",
      },
    ],
  })
  return res
}

async function getSummits() {
  const res = await prisma.summit.count()
  return res
}

async function getSummitsElevation() {
  const res = await prisma.summit.findMany({
    select: {
      peak: {
        select: {
          elevation: true,
        },
      },
    },
  })
  return res
}

async function getTotalUsers() {
  const users = await clerkClient.users.getCount()
  return users
}

export default async function HomePage() {
  const peaksData = await getPeaks()
  const summitsData = await getSummits()
  const usersData = await getTotalUsers()
  const elevationData = await getSummitsElevation()

  const [peaks, totalSummits, totalUsers, allElevation] = await Promise.all([
    peaksData,
    summitsData,
    usersData,
    elevationData,
  ])
  const elevationArray = allElevation.map((item: any) => item.peak.elevation)
  const totalElevation = getKm(elevationArray)

  return (
    <PageContainer>
      <section className="mx-auto max-w-3xl">
        <div className="relative">
          <Image
            alt={`Cumbres`}
            src={"/images/hero-1.webp"}
            width={1280}
            height={1280}
            className="rounded"
            priority
          />
          <h1 className="absolute left-1/2 top-6 -z-10 -translate-x-1/2 -translate-y-1/2 font-serif text-6xl font-semibold uppercase leading-none tracking-tighter text-branding-green sm:top-14 lg:text-9xl">
            Cumbres
          </h1>

          <Clouds />

          <div className="absolute left-1/2 top-2/3 z-10 w-11/12 -translate-x-1/2 space-y-2 rounded-xl bg-branding-green p-5 text-center font-serif text-lg leading-relaxed shadow-lg sm:space-y-6 sm:text-3xl">
            <p>
              <span className="text-branding-white">{`La cima de `}</span>
              <CustomLink href={`/cumbres`}>{`45 montañas `}</CustomLink>
              <span className="text-branding-white">{`ostentan los puntos más altos de las 50 provincias españolas.`}</span>
            </p>
            <p>
              <SignedIn>
                <CustomLink
                  href={`/perfil/cumbres`}
                >{`Visita tu perfil `}</CustomLink>

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
        {/* <TextWrapper className="mt-5">
          Estas son las 45 montañas que tienen el honor de ser el techo de una
          de las 50 provincias que componen España. 4 de estas montañas son
          compartidas entre provincias colindantes y 2 forman parte de distintas
          cordilleras.
        </TextWrapper> */}

        <div className="mt-10 grid gap-10 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-y-2.5 rounded-xl border-2 border-branding-green bg-branding-yellow px-10 py-5 font-serif shadow">
            <div className="text-6xl font-semibold uppercase leading-none tracking-tighter">
              {`${totalUsers}`}
            </div>
            <div className="text-lg lowercase leading-none tracking-tighter">
              {`Usuarios`}
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2.5 rounded-xl border-2 border-branding-green bg-branding-yellow px-10 py-5 font-serif shadow">
            <div className="text-6xl font-semibold uppercase leading-none tracking-tighter">
              {`${totalSummits}`}
            </div>
            <div className="text-lg lowercase leading-none tracking-tighter">
              {`Cumbres Ascendidas`}
            </div>
          </div>
          <div className="flex flex-col items-center gap-y-2.5 rounded-xl border-2 border-branding-green bg-branding-yellow px-10 py-5 font-serif shadow">
            <div className="text-6xl font-semibold uppercase leading-none tracking-tighter">
              {`${totalElevation}`}
              <span className="ml-2.5 font-sans text-xl font-normal lowercase">
                {`km`}
              </span>
            </div>
            <div className="text-lg lowercase leading-none tracking-tighter">
              {`Distancia Ascendida`}
            </div>
          </div>
          {/* <StatCard label="Usuarios" value={totalUsers} />
          <StatCard label="Cumbes Ascendidas" value={totalSummits} />
          <StatCard
            label="Distancia Ascendida"
            value={totalElevation}
            unit="km"
          /> */}
        </div>
      </section>
    </PageContainer>
  )
}
