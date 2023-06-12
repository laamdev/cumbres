import Image from "next/image"
import Link from "next/link"
import { clerkClient, SignedIn, SignedOut } from "@clerk/nextjs"

import { prisma } from "@/lib/client"
import { getKm, getSum } from "@/lib/helpers"
import { StatCard } from "@/components/dashboard/stat-card"
import { Clouds } from "@/components/home/clouds"

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
    <main className="mt-16 px-2.5 sm:mt-20">
      <section className="mx-auto max-w-3xl">
        <div className="relative">
          <Image
            alt={`Cumbres`}
            src={"/images/hero-1.webp"}
            width={1280}
            height={1280}
            className="rounded"
          />
          <h1 className="absolute left-1/2 top-6 -z-10 -translate-x-1/2 -translate-y-1/2 font-serif text-6xl uppercase text-branding-green sm:top-14 lg:text-9xl">
            Cumbres
          </h1>

          <Clouds />

          <div className="absolute left-1/2 top-2/3 z-10 w-11/12 -translate-x-1/2 space-y-2 rounded-xl bg-branding-green-950/80 p-4 text-center font-serif text-lg font-light leading-relaxed text-branding-sand shadow-lg backdrop-blur-xl sm:space-y-6 sm:text-3xl">
            <p>
              <span className="text-branding-sand">{`La cima de `}</span>
              <Link
                href="/cumbres"
                className="hover:text-branding- tw-transition font-medium italic text-branding-green-500 hover:text-branding-green-400"
              >{`45 montañas `}</Link>
              <span className="text-branding-sand">{`ostentan los puntos más altos de las 50 provincias españolas.`}</span>
            </p>
            <p>
              <SignedIn>
                <Link
                  href="/perfil/cumbres"
                  className="hover:text-branding- tw-transition font-medium italic text-branding-green-500 hover:text-branding-green-400"
                >
                  <span>{`Visita tu perfil `}</span>
                </Link>
                <span className="text-branding-sand">{`y gestiona el registro de los Techos de España que has coronado y los que aún te quedan por visitar.`}</span>
              </SignedIn>
              <SignedOut>
                <Link href="/iniciar-sesion">
                  <span className="font-medium italic text-branding-green-500">{`Inicia sesión `}</span>
                </Link>
                <span className="text-branding-sand">{`o `}</span>
                <Link href="/registrarse">
                  <span className="font-medium italic text-branding-green-500">{`regístrate `}</span>
                </Link>
                <span className="text-branding-sand">{`en Cumbres y lleva un registro de los Techos de España que has coronado y los que aún te quedan por visitar.`}</span>
              </SignedOut>
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-20 mt-40 max-w-5xl ">
        <h2 className="text-center font-serif text-3xl font-medium text-branding-green sm:text-5xl">
          Nuestra Comunidad
        </h2>
        {/* <TextWrapper className="mt-5">
          Estas son las 45 montañas que tienen el honor de ser el techo de una
          de las 50 provincias que componen España. 4 de estas montañas son
          compartidas entre provincias colindantes y 2 forman parte de distintas
          cordilleras.
        </TextWrapper> */}
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          <StatCard label="Usuarios" value={totalUsers} />
          <StatCard label="Cumbes Ascendidas" value={totalSummits} />
          <StatCard
            label="Distancia Ascendida"
            value={totalElevation}
            unit="km"
          />
        </div>
      </section>
    </main>
  )
}
