import "@/app/globals.css";

import { ReactNode } from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/navigation/header";
import { Footer } from "@/components/navigation/footer";

import { esES } from "@/data/clerkLocalization";

const serif = localFont({
  src: [
    {
      path: "../../public/fonts/eiko/thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/thin-italic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/extraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/extraLight-italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/medium-italic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/bold-italic.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/black.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/black-italic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/eiko/heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/eiko/heavy-italic.woff2",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: [
    {
      path: "../../public/fonts/mori/extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/extralight-italic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/regular-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/mori/semiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/mori/semiBold-italic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cumbres",
    template: "%s | Cumbres",
  },
  description:
    "Únete al reto de las 45 cumbres y asciende las montañas más altas de cada provincia española.",
  openGraph: {
    title: "Cumbres",
    description:
      "Únete al reto de las 45 cumbres y asciende las montañas más altas de cada provincia española.",
    url: "https://cumbr.es",
    siteName: "Cumbres",
    images: [
      {
        url: "https://cumbr.es/og.jpg",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "es-ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="es" className={`${sans.variable} ${serif.variable}`}>
        <body>
          <Header color="green" />
          <main className="relative min-h-screen">{children}</main>
          <Toaster />
          <Footer color="green" />
        </body>
      </html>
    </ClerkProvider>
  );
}
