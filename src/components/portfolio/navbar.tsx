
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LanguageSwitch } from "@/components/ui/language-switch";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navItems = [
  { label: "Profil", target: "about" },
  { label: "Expériences", target: "experience" },
  { label: "Formation", target: "education" },
  { label: "Compétences", target: "skills" },
  { label: "Projets", target: "projects" },
  { label: "Activités", target: "activities" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
          current = section.getAttribute("id") || "";
        }
      });
      
      setActiveSection(current);
      setIsScrolled(window.pageYOffset > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };
  
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-3" : "py-5"
      )}
    >
      <div className="container max-w-4xl mx-auto px-4 flex justify-between items-center">
        <a 
          href="#" 
          className="text-portfolio-800 font-bold text-xl"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Y.A
        </a>
        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={cn(
                "text-sm font-medium transition-colors",
                activeSection === item.target 
                  ? "text-portfolio-600" 
                  : "text-portfolio-800 hover:text-portfolio-600"
              )}
            >
              {item.label}
            </button>
          ))}
          
          <div className="pl-2 border-l border-portfolio-200 flex items-center gap-3">
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
        
        <button 
          className="md:hidden text-portfolio-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "md:hidden absolute w-full bg-white shadow-md transition-all duration-300 origin-top",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        )}
      >
        <div className="container max-w-4xl mx-auto px-4 py-3 flex flex-col space-y-3">
          {navItems.map((item) => (
            <button
              key={item.target}
              onClick={() => scrollToSection(item.target)}
              className={cn(
                "text-sm font-medium py-2 transition-colors text-left",
                activeSection === item.target 
                  ? "text-portfolio-600" 
                  : "text-portfolio-800 hover:text-portfolio-600"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
