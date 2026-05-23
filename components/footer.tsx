"use client"

import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react"

import { useLanguage } from "@/context/language-context"

const translations = {
  pt: {
    role: "Analista de Dados",
    rights: "Todos os direitos reservados.",
  },

  en: {
    role: "Data Analyst",
    rights: "All rights reserved.",
  },
}

export function Footer() {

  const currentYear =
    new Date().getFullYear()

  const { language } =
    useLanguage()

  const t =
    translations[language]

  return (

    <footer className="py-8 border-t border-border">

      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-sm text-muted-foreground text-center md:text-left">

            © {currentYear} Lucas | {t.role}. {t.rights}

          </p>

          <div className="flex items-center gap-4">

            <Link
              href="https://github.com/LucasLemos-Analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >

              <Github className="h-5 w-5" />

              <span className="sr-only">
                GitHub
              </span>

            </Link>

            <Link
              href="https://www.linkedin.com/in/lucas-silva-77484b353/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >

              <Linkedin className="h-5 w-5" />

              <span className="sr-only">
                LinkedIn
              </span>

            </Link>

            <Link
              href="mailto:lucas.lemosslcs@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >

              <Mail className="h-5 w-5" />

              <span className="sr-only">
                Email
              </span>

            </Link>

          </div>

        </div>

      </div>

    </footer>
  )
}