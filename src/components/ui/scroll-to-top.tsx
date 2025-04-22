
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-5 right-5 bg-portfolio-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-portfolio-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      aria-label="Retourner en haut"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
