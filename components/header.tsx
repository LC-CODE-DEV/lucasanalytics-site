"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

const translations = {
  pt: {
    logoRole: "Analista de Dados em Formação",

    nav: [
      { name: "Início", href: "#home" },
      { name: "Sobre", href: "#about" },
      { name: "Habilidades", href: "#skills" },
      { name: "Projetos", href: "#projects" },
      { name: "Contato", href: "#contact" },
    ],
  },

  en: {
    logoRole: "Data Analyst in Training",

    nav: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ],
  },
}

export function Header() {

  const [isOpen, setIsOpen] = useState(false)

  const { language, setLanguage } = useLanguage()

  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">

      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link
            href="#home"
            className="flex flex-col items-center"
          >

            <span className="text-xl font-bold text-foreground">
              Lucas Silva
            </span>

            <span className="text-xs text-primary">
              {t.logoRole}
            </span>

          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">

            {t.nav.map((item) => (

              <li key={item.name}>

                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

          {/* Idioma Desktop */}
          <div className="hidden md:flex items-center gap-3">

            {/* Brasil */}
            <button
              onClick={() => setLanguage("pt")}
              className={`transition hover:scale-110 ${
                language === "pt"
                  ? "opacity-100"
                  : "opacity-60"
              }`}
            >

              <Image
                src="/flags/br.svg"
                alt="Português"
                width={28}
                height={28}
                className="rounded-full border border-primary"
              />

            </button>

            {/* EUA */}
            <button
              onClick={() => setLanguage("en")}
              className={`transition hover:scale-110 ${
                language === "en"
                  ? "opacity-100"
                  : "opacity-60"
              }`}
            >

              <Image
                src="/flags/us.svg"
                alt="English"
                width={28}
                height={28}
                className="rounded-full border border-primary"
              />

            </button>

          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >

            {isOpen
              ? <X className="h-5 w-5" />
              : <Menu className="h-5 w-5" />
            }

          </Button>

        </div>

        {/* Mobile Navigation */}
        {isOpen && (

          <div className="md:hidden mt-4 pb-4 space-y-4">

            <ul className="space-y-4">

              {t.nav.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

            {/* Idioma Mobile */}
            <div className="flex items-center gap-3 pt-4">

              {/* Brasil */}
              <button
                onClick={() => setLanguage("pt")}
                className={`transition hover:scale-110 ${
                  language === "pt"
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              >

                <Image
                  src="/flags/br.svg"
                  alt="Português"
                  width={28}
                  height={28}
                  className="rounded-full border border-primary"
                />

              </button>

              {/* EUA */}
              <button
                onClick={() => setLanguage("en")}
                className={`transition hover:scale-110 ${
                  language === "en"
                    ? "opacity-100"
                    : "opacity-60"
                }`}
              >

                <Image
                  src="/flags/us.svg"
                  alt="English"
                  width={28}
                  height={28}
                  className="rounded-full border border-primary"
                />

              </button>

            </div>

          </div>

        )}

      </nav>

    </header>
  )
}
