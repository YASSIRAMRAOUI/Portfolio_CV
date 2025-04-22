
import { ContactButton } from "@/components/ui/contact-button";
import { Mail, Linkedin, Github } from "lucide-react";

export function Header() {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-6 py-10 border-b border-portfolio-200">
      <div className="flex items-center gap-4">
        <div className="overflow-hidden rounded-full border-4 border-portfolio-200 h-24 w-24 flex-shrink-0">
          <img 
            src="/lovable-uploads/28886b67-4177-4d86-8870-617d314c5de8.png" 
            alt="Yassir Amraoui" 
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-portfolio-800 mb-1">YASSIR AMRAOUI</h1>
          <p className="bg-gradient-to-r from-portfolio-700 via-portfolio-500 to-portfolio-800 text-transparent bg-clip-text bg-size-200 animate-bg-position-x text-lg font-medium">
            Étudiant Ingénieur en Data Software Sciences
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <ContactButton 
          href="mailto:mr.yassir.amraoui@gmail.com" 
          icon={<Mail />} 
          label="mr.yassir.amraoui@gmail.com" 
        />
        <ContactButton 
          href="https://linkedin.com/in/yassir-amraoui" 
          icon={<Linkedin />} 
          label="linkedin.com/in/yassir-amraoui" 
        />
        <ContactButton 
          href="https://github.com/YASSIRAMRAOUI" 
          icon={<Github />} 
          label="github.com/YASSIRAMRAOUI" 
        />
      </div>
    </header>
  );
}
