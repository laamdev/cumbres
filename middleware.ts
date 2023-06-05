import { authMiddleware } from "@clerk/nextjs"

export default authMiddleware({
  publicRoutes: ["/", "/cumbres(.*)", "/iniciar-sesion", "/registrarse"],
})

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)"],
}
