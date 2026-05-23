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
  title: "Lucas | Analista de Dados",

  description:
    "Portfólio de analista de dados especializado em SQL, Power BI, Python e R. Transformando dados em insights estratégicos.",

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