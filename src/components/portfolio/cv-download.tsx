
import { Download } from "lucide-react";

export function CVDownload() {
  return (
    <a 
      href="#" 
      className="inline-flex items-center gap-2 bg-portfolio-600 hover:bg-portfolio-700 transition-colors text-white py-2 px-4 rounded-md shadow-sm"
      onClick={(e) => {
        e.preventDefault();
        alert("La fonctionnalité de téléchargement de CV sera disponible prochainement.");
      }}
    >
      <Download className="h-4 w-4" />
      <span>Télécharger CV</span>
    </a>
  );
}
