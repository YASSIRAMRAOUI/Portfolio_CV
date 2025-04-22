
import { Mail, MapPin } from "lucide-react";
import { CVDownload } from "@/components/portfolio/cv-download";

export function ContactCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold text-portfolio-800 mb-4">Contact</h3>
      <div className="space-y-3 mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-portfolio-100 p-2 rounded-full">
            <Mail className="h-5 w-5 text-portfolio-600" />
          </div>
          <span className="text-gray-700">mr.yassir.amraoui@gmail.com</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-portfolio-100 p-2 rounded-full">
            <MapPin className="h-5 w-5 text-portfolio-600" />
          </div>
          <span className="text-gray-700">Rabat, Maroc</span>
        </div>
      </div>
      
      <CVDownload />
    </div>
  );
}
