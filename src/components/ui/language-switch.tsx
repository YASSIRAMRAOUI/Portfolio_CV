
import { useState } from "react";
import { Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function LanguageSwitch() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 text-sm text-portfolio-800 hover:text-portfolio-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="h-4 w-4" />
        <span>FR</span>
      </button>
      
      <div
        className={cn(
          "absolute right-0 mt-2 bg-white rounded-md shadow-md border border-portfolio-100 transition-all duration-200 origin-top-right",
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
        )}
      >
        <button className="block w-full text-left px-4 py-2 text-sm text-portfolio-800 hover:bg-portfolio-50 transition-colors">
          Français (actuel)
        </button>
        <button disabled className="block w-full text-left px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
          English (à venir)
        </button>
      </div>
    </div>
  );
}
