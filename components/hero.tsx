"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function Hero() {
  const { language } = useLanguage()

  const translations = {
    pt: {
      greeting: "Olá, eu sou",
      role: "Análise de Dados",
      description:
        "Transformo dados em insights estratégicos através de SQL, Power BI e visualização de dados.",
      contact: "Entre em contato",
      projects: "Ver projetos",
    },

    en: {
      greeting: "Hello, I'm",
      role: "Data Analysis",
      description:
        "I transform data into strategic insights using SQL, Power BI and data visualization.",
      contact: "Get in touch",
      projects: "View projects",
    },
  }

  const t = translations[language]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          <div className="max-w-xl">

            <p className="text-primary font-medium mb-4">
              {t.greeting}
            </p>

            <div className="overflow-hidden">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 leading-tight">
                <span className="typing-animation inline-block">
                  Lucas Lemos Silva
                </span>
              </h1>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 sm:mb-6">
              {t.role}
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 sm:mb-8 leading-relaxed">
              {t.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">

              <Button asChild size="lg">
                <Link href="#contact">
                  {t.contact}
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg">
                <Link href="#projects">
                  {t.projects}
                </Link>
              </Button>

            </div>

            <div className="flex items-center gap-6">

              <Link
                href="https://github.com/LucasLemos-Analytics"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>

              <Link
                href="https://www.linkedin.com/in/lucas-silva-77484b353/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>

              <Link
                href="mailto:lucas.lemosslcs@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>

            </div>
          </div>

          <div className="relative order-first lg:order-last mb-8 lg:mb-0">

            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">

              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />

              <Image
                src="/hero-data.jpg"
                alt="Visualização de dados e análise"
                width={500}
                height={500}
                className="relative rounded-3xl object-cover w-full h-full border border-border"
                priority
              />

            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="h-6 w-6" />
          </Link>
        </div>

      </div>
    </section>
  )
}
