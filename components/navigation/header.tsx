"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { SignedIn, SignedOut } from "@clerk/nextjs"
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion"
import { GiMountaintop } from "react-icons/gi"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/components/ui/button"

import { ProfileMenu } from "../ui/profile-menu"

const clamp = (number: number, min: number, max: number) =>
  Math.min(Math.max(number, min), max)

function useBoundedScroll(bounds: number) {
  const [x, setX] = useState(0)
  const { scrollYProgress } = useScroll()
  const scrollYBounded = useMotionValue(0)
  const scrollYBoundedProgress = useTransform(
    scrollYBounded,
    [0, bounds],
    [0, 1]
  )

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setX(latest)
  })

  return { scrollYBoundedProgress, x }
}

export const Header = ({ color }: { color: string }) => {
  let { scrollYBoundedProgress, x } = useBoundedScroll(400)
  let scrollYBoundedProgressThrottled = useTransform(
    scrollYBoundedProgress,
    [0, 0.75, 1],
    [0, 0, 1]
  )
  const pathname = usePathname()

  return (
    <div className="relative z-40 mx-auto flex w-full max-w-5xl flex-1 overflow-hidden">
      <div className="z-0 flex-1 overflow-y-scroll">
        <motion.header
          style={{
            height: useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [80, 50]
            ),
            backgroundColor: useMotionTemplate`rgb(19, 52, 38 / ${useTransform(
              scrollYBoundedProgressThrottled,
              [0, 1],
              [1, 0.1]
            )})`,
          }}
          className={cn(
            "fixed inset-x-0 mx-auto flex h-20 max-w-7xl border-b backdrop-blur-md",
            color === "green" && "border-branding-green",
            color === "yellow" && "border-branding-yellow"
          )}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5">
            <motion.p
              style={{
                scale: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0.9]
                ),
              }}
              className="flex origin-left items-center text-xl font-semibold uppercase"
            >
              <Link href="/">
                <GiMountaintop
                  className={cn(
                    "tw-transition h-7 w-7 sm:h-10 sm:w-10",
                    color === "green" &&
                      "text-branding-green hover:text-branding-green/90",
                    color === "yellow" &&
                      "text-branding-yellow hover:text-branding-yellow/90"
                  )}
                />
              </Link>
            </motion.p>
            <motion.nav
              style={{
                opacity: useTransform(
                  scrollYBoundedProgressThrottled,
                  [0, 1],
                  [1, 0]
                ),
              }}
              className="flex space-x-4 text-xs font-medium text-slate-400"
            >
              <SignedOut>
                <div className="space-x-2 sm:space-x-4">
                  <Button
                    asChild
                    size="sm"
                    variant={color === "green" ? "outlineGreen" : "outline"}
                  >
                    <Link href="/iniciar-sesion">Iniciar Sesión</Link>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant={color === "green" ? "green" : "default"}
                  >
                    <Link href="/registrarse">Registrarse</Link>
                  </Button>
                </div>
              </SignedOut>
              <SignedIn>
                <ProfileMenu color={color} />
              </SignedIn>
            </motion.nav>
          </div>
        </motion.header>

        {/* <main className="px-8 pt-28">
          <h1 className="h-10 w-4/5 rounded bg-slate-200 text-2xl font-bold" />
          <div className="mt-8 space-y-6">
            {[...Array(2).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
            <div className="h-64 rounded bg-slate-200"></div>
            {[...Array(90).keys()].map((i) => (
              <div key={i} className="space-y-2 text-sm">
                <p className="h-4 w-5/6 rounded bg-slate-200" />
                <p className="h-4 rounded bg-slate-200" />
                <p className="h-4 w-4/6 rounded bg-slate-200" />
              </div>
            ))}
          </div>
        </main> */}
      </div>
    </div>
  )
}

// // import Link from "next/link"
// // import { SignedIn, SignedOut } from "@clerk/nextjs"
// // import { GiMountaintop } from "react-icons/gi"

// // import { buttonVariants } from "@/components/ui/button"
// // import { ProfileMenu } from "@/components/ui/profile-menu"

// // export const Header = () => {
// //   return (
// //     // <nav
// //     //   id="top"
// //     //   className="fixed z-40 mx-auto flex w-full max-w-screen-xl items-center justify-between border-b-2 border-b-branding-green p-5"
// //     // >
// //     //   <Link href="/">
// //     //     <GiMountaintop className="tw-transition h-8 w-8 text-branding-green hover:text-branding-green-800 sm:h-12 sm:w-12" />
// //     //   </Link>
// //     //   <SignedIn>
// //     //     <ProfileMenu />
// //     //   </SignedIn>

// //     //   <SignedOut>
// //     //     <div className="space-x-2 sm:space-x-4">
// //     //       <Link
// //     //         href="/iniciar-sesion" // // onClick={() => openSignIn()}
// //     //         className={buttonVariants({ variant: "link" })}
// //     //       >
// //     //         Iniciar Sesión
// //     //       </Link>
// //     //       <Link
// //     //         href="/registrarse"
// //     //         className={buttonVariants({ variant: "outline" })}
// //     //       >
// //     //         Registrarse
// //     //       </Link>
// //     //     </div>
// //     //   </SignedOut>
// //     // </nav>
// //   )
// // }
