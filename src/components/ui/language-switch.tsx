
import { useState, useEffect } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

// Define the type for language
type Language = "FR" | "EN";

// Create a context to manage language state across components
export function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("FR");
  
  useEffect(() => {
    // Check stored preference
    const storedLang = localStorage.getItem("language") as Language;
    if (storedLang === "EN" || storedLang === "FR") {
      setCurrentLanguage(storedLang);
    }
  }, []);
  
  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false);
    
    // Simulate language change by reloading the page
    // In a real app, you would use a language context or i18n library
    window.location.reload();
  };
  
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-sm text-portfolio-800 hover:text-portfolio-600 transition-colors dark:text-portfolio-100 dark:hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span>{currentLanguage}</span>
      </button>
      
      <div
        className={cn(
          "absolute right-0 mt-2 bg-white rounded-md shadow-md border border-portfolio-100 transition-all duration-200 origin-top-right dark:bg-portfolio-800 dark:border-portfolio-700",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        <button 
          className={cn(
            "block w-full text-left px-4 py-2 text-sm transition-colors", 
            currentLanguage === "FR" 
              ? "text-portfolio-600 bg-portfolio-50 dark:bg-portfolio-700 dark:text-white" 
              : "text-portfolio-800 hover:bg-portfolio-50 dark:text-portfolio-100 dark:hover:bg-portfolio-700"
          )}
          onClick={() => changeLanguage("FR")}
        >
          Français {currentLanguage === "FR" && "(actuel)"}
        </button>
        <button 
          className={cn(
            "block w-full text-left px-4 py-2 text-sm transition-colors", 
            currentLanguage === "EN" 
              ? "text-portfolio-600 bg-portfolio-50 dark:bg-portfolio-700 dark:text-white" 
              : "text-portfolio-800 hover:bg-portfolio-50 dark:text-portfolio-100 dark:hover:bg-portfolio-700"
          )}
          onClick={() => changeLanguage("EN")}
        >
          English {currentLanguage === "EN" && "(current)"}
        </button>
      </div>
    </div>
  );
}
