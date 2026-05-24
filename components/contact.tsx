"use client"

import { useState } from "react"
import Link from "next/link"
import {
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"

import { useLanguage } from "@/context/language-context"

const translations = {
  pt: {
    sectionTitle: "Contato",

    title: "Vamos trabalhar juntos?",

    description:
      "Se você tem um projeto em mente ou apenas quer dizer oi, estou sempre disponível para uma conversa. Entre em contato!",

    form: {
      name: "Nome",
      namePlaceholder: "Seu nome",

      email: "Email",
      emailPlaceholder: "seu@email.com",

      message: "Mensagem",
      messagePlaceholder: "Sua mensagem...",

      button: "Enviar mensagem",
    },

    directContact:
      "Ou entre em contato diretamente",

    social:
      "Me encontre nas redes",

    whatsappText: (
      name: string,
      email: string,
      message: string
    ) => `
Olá Lucas! Meu nome é ${name}.

Email: ${email}

Mensagem:
${message}
`,
  },

  en: {
    sectionTitle: "Contact",

    title: "Let's work together?",

    description:
      "If you have a project in mind or just want to say hi, I’m always available for a conversation. Get in touch!",

    form: {
      name: "Name",
      namePlaceholder: "Your name",

      email: "Email",
      emailPlaceholder: "your@email.com",

      message: "Message",
      messagePlaceholder: "Your message...",

      button: "Send message",
    },

    directContact:
      "Or contact me directly",

    social:
      "Find me on social media",

    whatsappText: (
      name: string,
      email: string,
      message: string
    ) => `
Hello Lucas! My name is ${name}.

Email: ${email}

Message:
${message}
`,
  },
}

export function Contact() {

  const { language } = useLanguage()

  const t = translations[language]

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      message: "",
    })

  const handleWhatsApp = (
    e: React.FormEvent
  ) => {

    e.preventDefault()

    const texto = t.whatsappText(
      formData.name,
      formData.email,
      formData.message
    )

    const url =
      `https://wa.me/5511989126085?text=${encodeURIComponent(texto)}`

    window.open(url, "_blank")

    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-card"
    >

      <div className="container mx-auto px-4 sm:px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            {t.sectionTitle}
          </h2>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 text-balance">
            {t.title}
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 md:mb-12 max-w-2xl">
            {t.description}
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">

            {/* FORMULÁRIO */}
            <form
              onSubmit={handleWhatsApp}
              className="space-y-6"
            >

              <FieldGroup>

                <Field>

                  <FieldLabel htmlFor="name">
                    {t.form.name}
                  </FieldLabel>

                  <Input
                    id="name"
                    type="text"
                    placeholder={t.form.namePlaceholder}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    required
                    className="bg-background"
                  />

                </Field>

                <Field>

                  <FieldLabel htmlFor="email">
                    {t.form.email}
                  </FieldLabel>

                  <Input
                    id="email"
                    type="email"
                    placeholder={t.form.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    required
                    className="bg-background"
                  />

                </Field>

                <Field>

                  <FieldLabel htmlFor="message">
                    {t.form.message}
                  </FieldLabel>

                  <Textarea
                    id="message"
                    placeholder={t.form.messagePlaceholder}
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        message: e.target.value,
                      })
                    }
                    required
                    className="bg-background resize-none"
                  />

                </Field>

              </FieldGroup>

              <Button
                type="submit"
                size="lg"
                className="w-full md:w-auto"
              >

                <Send className="h-4 w-4 mr-2" />

                {t.form.button}

              </Button>

            </form>

            {/* CONTATOS */}
            <div className="space-y-8">

              <div>

                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {t.directContact}
                </h4>

                <div className="space-y-4">

                  <Link
                    href="mailto:lucas.lemosslcs@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >

                    <Mail className="h-5 w-5" />

                    <span>
                      lucas.lemosslcs@gmail.com
                    </span>

                  </Link>

                </div>

              </div>

              <div>

                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {t.social}
                </h4>

                <div className="flex items-center gap-4">

                  <Link
                    href="https://github.com/LucasLemos-Analytics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >

                    <Github className="h-5 w-5" />

                    <span className="sr-only">
                      GitHub
                    </span>

                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/lucas-silva-77484b353"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                  >

                    <Linkedin className="h-5 w-5" />

                    <span className="sr-only">
                      LinkedIn
                    </span>

                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
