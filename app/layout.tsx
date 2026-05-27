import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/context/language-context"

import "./globals.css"

const _geist = Geist({
  subsets: ["latin"],
})

const _geistMono = Geist_Mono({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lucasanalytics.site"),

  title: "Lucas | Analista de Dados",

  description:
    "Portfólio de analista de dados especializado em SQL, Power BI, Excel e Modelagem de Dados. Transformando dados em insights estratégicos.",

  openGraph: {
    title: "Lucas | Analista de Dados",
    description:
      "Portfólio de analista de dados especializado em SQL, Power BI, Excel e Modelagem de Dados. Transformando dados em insights estratégicos.",
    url: "https://lucasanalytics.site",
    siteName: "Lucas Analytics",
    locale: "pt_BR",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lucas | Analista de Dados",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lucas | Analista de Dados",
    description:
      "Portfólio de analista de dados especializado em SQL, Power BI, Excel e Modelagem de Dados. Transformando dados em insights estratégicos.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
        </LanguageProvider>

        <Analytics />
      </body>
    </html>
  )
}