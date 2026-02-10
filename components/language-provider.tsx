"use client";

import * as React from "react";

type Language = "en" | "tl";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({
  children,
  content,
}: {
  children: React.ReactNode;
  content: any;
}) {
  const [language, setLanguage] = React.useState<Language>("en");

  // Load language from localStorage if available
  React.useEffect(() => {
    const savedLanguage = localStorage.getItem("bpxai-language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "tl")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("bpxai-language", lang);
  };

  const t = (path: string) => {
    const keys = path.split(".");
    let result = content[language];
    for (const key of keys) {
      if (result && result[key]) {
        result = result[key];
      } else {
        // Fallback to English if key missing in current language
        result = content["en"];
        for (const fallbackKey of keys) {
          if (result && result[fallbackKey]) {
            result = result[fallbackKey];
          } else {
            return path; // Return path as literal if completely missing
          }
        }
        return result;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
