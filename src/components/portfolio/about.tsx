
import { SectionHeader } from "@/components/ui/section-header";
import { TypingEffect } from "@/components/ui/typing-effect";
import { ContactCard } from "@/components/ui/contact-card"; 

export function About() {
  return (
    <section className="py-10">
      <SectionHeader title="PROFIL" />
      <div className="bg-white p-6 rounded-lg shadow-sm border border-portfolio-100 mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="md:w-1/3">
            <img
              src="/lovable-uploads/28886b67-4177-4d86-8870-617d314c5de8.png"
              alt="Yassir Amraoui"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-2/3">
            <h3 className="text-xl font-semibold text-portfolio-800 mb-3">
              <TypingEffect 
                text="Développeur Full Stack & Data Engineer" 
                speed={70} 
              />
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Étudiant en Data Software Sciences à l'ENSIAS (2ème année) avec des compétences en développement full-stack 
              d'applications web/mobile et en pratiques DevOps, à la recherche active d'un stage.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-portfolio-100 text-portfolio-700 px-3 py-1 rounded-full text-sm hover:bg-portfolio-200 transition-colors">React Native</span>
              <span className="bg-portfolio-100 text-portfolio-700 px-3 py-1 rounded-full text-sm hover:bg-portfolio-200 transition-colors">Java EE</span>
              <span className="bg-portfolio-100 text-portfolio-700 px-3 py-1 rounded-full text-sm hover:bg-portfolio-200 transition-colors">Laravel</span>
              <span className="bg-portfolio-100 text-portfolio-700 px-3 py-1 rounded-full text-sm hover:bg-portfolio-200 transition-colors">DevOps</span>
              <span className="bg-portfolio-100 text-portfolio-700 px-3 py-1 rounded-full text-sm hover:bg-portfolio-200 transition-colors">Data Engineering</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-portfolio-100 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-portfolio-800 mb-3">À propos de moi</h3>
          <p className="text-gray-700 leading-relaxed">
            Passionné par le développement logiciel et les technologies de données, 
            j'ai acquis une solide expérience dans la création d'applications mobiles et web. 
            Je recherche activement un stage qui me permettra de mettre à profit mes compétences
            tout en continuant à apprendre et à évoluer dans le domaine du génie logiciel.
          </p>
        </div>
        <ContactCard />
      </div>
    </section>
  );
}
