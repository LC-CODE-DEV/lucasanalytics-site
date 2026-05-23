"use client"

import { useLanguage } from "@/context/language-context"

const translations = {
  pt: {
    sectionTitle: "Sobre Mim",

    title:
      "Transformando dados em decisões estratégicas",

    text1:
      "Estou em transição para a área de dados, desenvolvendo habilidades em análise, manipulação e visualização de informações.",

    text2:
      "Tenho focado meus estudos em SQL, Power BI, Excel e modelagem de dados, aplicando esses conhecimentos em projetos práticos voltados à análise de vendas e geração de insights.",

    text3:
      "Possuo certificação Neo4j e grande interesse em bancos de dados, análise de dados e soluções orientadas por informações estratégicas.",

    text4:
      "Atualmente, busco evoluir constantemente através de projetos pessoais, estudos e desafios práticos que fortaleçam minha capacidade analítica e técnica.",
  },

  en: {
    sectionTitle: "About Me",

    title:
      "Transforming data into strategic decisions",

    text1:
      "I am transitioning into the data field, developing skills in analysis, data manipulation, and information visualization.",

    text2:
      "I have been focusing my studies on SQL, Power BI, Excel, and data modeling, applying this knowledge to practical projects focused on sales analysis and insight generation.",

    text3:
      "I hold a Neo4j certification and have a strong interest in databases, data analysis, and solutions driven by strategic information.",

    text4:
      "Currently, I seek continuous growth through personal projects, studies, and practical challenges that strengthen my analytical and technical skills.",
  },
}

export function About() {

  const { language } = useLanguage()

  const t = translations[language]

  return (
    <section id="about" className="py-24 md:py-32">

      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            {t.sectionTitle}
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            <div>

              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                {t.title}
              </h3>

            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-xl">

              <p>
                {t.text1}
              </p>

              <p>
                {t.text2}
              </p>

              <p>
                {t.text3}
              </p>

              <p>
                {t.text4}
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}