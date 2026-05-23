"use client"

import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/context/language-context"

const translations = {
  pt: {
    sectionTitle: "Habilidades",
    title: "Tecnologias e Ferramentas",

    categories: [
      {
        title: "Bancos de Dados & SQL",
        skills: [
          "SQL Server",
          "MySQL",
          "Modelagem de Dados",
          "Consultas SQL",
          "Relacionamentos",
          "Join",
        ],
      },

      {
        title: "Visualização de Dados",
        skills: [
          "Power BI",
          "Tableau",
          "Excel",
          "DAX",
          "Power Query",
          "Dashboards Interativos",
          "Indicadores",
        ],
      },

      {
        title: "Fundamentos de Dados",
        skills: [
          "Limpeza de Dados",
          "Tratamento de Dados",
          "Análise Exploratória",
          "Insights de Negócios",
        ],
      },

      {
        title: "Soft Skills",
        skills: [
          "Organização",
          "Pensamento Analítico",
          "Comunicação",
          "Resolução de Problemas",
        ],
      },
    ],
  },

  en: {
    sectionTitle: "Skills",
    title: "Technologies and Tools",

    categories: [
      {
        title: "Databases & SQL",
        skills: [
          "SQL Server",
          "MySQL",
          "Data Modeling",
          "SQL Queries",
          "Relationships",
          "Join",
        ],
      },

      {
        title: "Data Visualization",
        skills: [
          "Power BI",
          "Tableau",
          "Excel",
          "DAX",
          "Power Query",
          "Interactive Dashboards",
          "KPIs",
        ],
      },

      {
        title: "Data Fundamentals",
        skills: [
          "Data Cleaning",
          "Data Processing",
          "Exploratory Analysis",
          "Business Insights",
        ],
      },

      {
        title: "Soft Skills",
        skills: [
          "Organization",
          "Analytical Thinking",
          "Communication",
          "Problem Solving",
        ],
      },
    ],
  },
}

export function Skills() {

  const { language } = useLanguage()

  const t = translations[language]

  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-card"
    >

      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            {t.sectionTitle}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            {t.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {t.categories.map((category) => (

              <div
                key={category.title}
                className="space-y-4"
              >

                <h4 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h4>

                <div className="flex flex-wrap gap-2">

                  {category.skills.map((skill) => (

                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {skill}
                    </Badge>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}