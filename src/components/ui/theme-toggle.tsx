
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    
    // Pour une démonstration simple, on change juste quelques couleurs
    // Dans une application complète, il faudrait implémenter un vrai mode sombre
    document.body.style.backgroundColor = newMode ? "#0f172a" : "";
    document.body.style.backgroundImage = newMode ? "none" : "";
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-portfolio-100 hover:bg-portfolio-200 transition-colors"
      aria-label={darkMode ? "Passer au mode clair" : "Passer au mode sombre"}
    >
      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
