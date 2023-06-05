import Image from "next/image"
import Link from "next/link"
import { SignedIn, SignedOut } from "@clerk/nextjs"

import { prisma } from "@/lib/client"
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

export default async function HomePage() {
  const peaksData = getPeaks()
  const summitsData = getSummits()

  const [peaks, totalSummits] = await Promise.all([peaksData, summitsData])

  const globalData = [
    {
      id: 1,
      name: "Participantes",
    },
    {
      id: 2,
      name: "Cumbres Coronadas",
    },
  ]

  return (
    <main className="mx-auto mt-16 max-w-3xl px-2.5 sm:mt-20">
      <section>
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
    </main>
  )
}
