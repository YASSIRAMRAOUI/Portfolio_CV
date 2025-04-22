
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference or stored preference
    const isDark = localStorage.getItem("theme") === "dark" || 
      (localStorage.getItem("theme") === null && 
       window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    setDarkMode(isDark);
    
    // Apply the theme when component mounts
    applyTheme(isDark);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    applyTheme(newMode);
    
    // Save preference
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };
  
  const applyTheme = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#0f172a";
      document.body.style.color = "#f8fafc";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center p-2 rounded-full bg-portfolio-100 hover:bg-portfolio-200 transition-colors dark:bg-portfolio-800 dark:hover:bg-portfolio-700"
      aria-label={darkMode ? "Passer au mode clair" : "Passer au mode sombre"}
    >
      {darkMode ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
