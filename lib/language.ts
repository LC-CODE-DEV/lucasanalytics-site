export type Language = "pt" | "en"

export let currentLanguage: Language = "pt"

export function setGlobalLanguage(lang: Language) {
  currentLanguage = lang
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lang)
  }
}

export function getGlobalLanguage(): Language {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("language") as Language | null
    if (stored === "pt" || stored === "en") {
      currentLanguage = stored
      return stored
    }
  }
  return currentLanguage
}
