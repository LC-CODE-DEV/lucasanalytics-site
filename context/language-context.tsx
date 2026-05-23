"use client"

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react"

type Language = "pt" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: "pt",
  setLanguage: () => {},
})

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {

  const [language, setLanguage] =
    useState<Language>("pt")

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}