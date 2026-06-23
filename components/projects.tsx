"use client"

import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/context/language-context"

const translations = {
  pt: {
    sectionTitle: "Projetos",
    title: "Trabalhos selecionados",

    projects: [
     

      {
        title: "Sales Data Analysis Project",

        description:
          "Interactive dashboard developed from a retail database, featuring sales, revenue, product performance, and customer analysis indicators. SQL was used for data querying, while Power BI was utilized for data visualization and business insights generation.",

        image: "/projects/project-1.png",

        tags: [
          "My SQL",
          "Excel",
          "ETL",
          "DAX",
          "Power BI",
        ],

        github: "https://github.com/LucasLemos-Analytics",

        status: "completed",
      },


    ],
  },

  en: {
    sectionTitle: "Projects",
    title: "Selected Works",

    projects: [

   
      {
        title: "Sales Dashboard",

        description:
          "Interactive Power BI dashboard for sales analysis with KPIs, trends, and regional comparisons. SQL Server integration for automatic updates.",

        image: "/projects/project-1.png",

        tags: [
          "My SQL",
          "Excel",
          "ETL",
          "DAX",
          "Power BI",
        ],

        github: "https://github.com/LucasLemos-Analytics",

        status: "completed",
      },

     
    
    ],
  },
}

export function Projects() {

  const { language } = useLanguage()

  const t = translations[language]

  return (
    <section
      id="projects"
      className="py-24 md:py-32"
    >

      <div className="container mx-auto px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
            {t.sectionTitle}
          </h2>

          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">
            {t.title}
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            {t.projects.map((project) => (

              <Card
                key={project.title}
                className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                
                <div className="relative aspect-video overflow-hidden bg-secondary">
                 
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      project.status === "completed"
                        ? "group-hover:scale-105"
                        : "opacity-80"
                    }`}
                  />
                

                  {project.status === "construction" && (
                    <div className="absolute inset-0 bg-background/70 flex items-center justify-center">

                      <div className="text-center">

                        <h4 className="text-2xl font-bold text-primary mb-2">
                          🚧
                        </h4>

                        <p className="text-lg font-semibold text-foreground">
                          {language === "pt"
                            ? "Projeto em elaboração"
                            : "Project in Progress"}
                        </p>

                      </div>

                    </div>
                  )}

                  {project.status === "completed" && (
                    <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">

                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-background/90 rounded-full text-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-5 w-5" />

                        <span className="sr-only">
                          GitHub
                        </span>

                      </Link>


                    </div>
                  )}

                </div>

                <CardContent className="p-6">

                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {project.title}
                  </h4>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">

                    {project.tags.map((tag) => (

                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </Badge>

                    ))}

                  </div>

                </CardContent>

              </Card>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}