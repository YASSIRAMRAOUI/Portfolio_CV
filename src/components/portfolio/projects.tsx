
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/ui/project-card";

export function Projects() {
  return (
    <section className="py-10">
      <SectionHeader title="PROJETS" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ProjectCard
          title="Système de Gestion des Guides Touristiques"
          date="Novembre 2024 - Janvier 2025"
          description="TourGuide est un système de gestion complet conçu pour faciliter les circuits et activités touristiques, permettant aux touristes d'explorer le Maroc avec l'assistance de guides qualifiés."
          technologies={["Java EE", "Oracle", "JSP", "Tailwind CSS", "Chatbot"]}
        />
        
        <ProjectCard
          title="My E-Note"
          date="Mai 2024 - Septembre 2024"
          description="Développement d'une application de gestion de notes"
          technologies={["PHP", "Laravel", "HTML", "CSS", "Javascript", "MYSQL"]}
        />
      </div>
    </section>
  );
}
