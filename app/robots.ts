import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/cumbres/*"],
      disallow: ["/perfil/*"],
    },
    sitemap: "https://cumbr.es/sitemap.xml",
  }
}
