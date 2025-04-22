
import { SectionHeader } from "@/components/ui/section-header";
import { SkillBar } from "@/components/ui/skill-bar";

export function Skills() {
  return (
    <section className="py-10">
      <SectionHeader title="COMPÉTENCES" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        <div>
          <h3 className="text-lg font-semibold text-portfolio-800 mb-4">Compétences techniques</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-medium text-portfolio-700 mb-2">Développement WEB</h4>
              <SkillBar label="Java Enterprise Edition" percentage={85} />
              <SkillBar label="PHP Laravel" percentage={80} />
              <SkillBar label="React" percentage={85} />
            </div>
            
            <div>
              <h4 className="font-medium text-portfolio-700 mb-2">Développement Mobile</h4>
              <SkillBar label="React Native" percentage={90} />
              <SkillBar label="Android Studio" percentage={75} />
              <SkillBar label="Flutter" percentage={70} />
            </div>
            
            <div>
              <h4 className="font-medium text-portfolio-700 mb-2">Gestion base de données</h4>
              <SkillBar label="MySQL" percentage={85} />
              <SkillBar label="Oracle" percentage={80} />
              <SkillBar label="Firebase" percentage={85} />
            </div>

            <div>
              <h4 className="font-medium text-portfolio-700 mb-2">Conception et modélisation</h4>
              <p className="text-sm text-gray-600">UML, Gestion de versions (Git, GitHub)</p>
            </div>
            
            <div>
              <h4 className="font-medium text-portfolio-700 mb-2">DevOps et Méthodes</h4>
              <p className="text-sm text-gray-600">Méthode agile (SCRUM), DevOps (Unix, Docker, Kubernetes)</p>
            </div>
            
            <div>
              <h4 className="font-medium text-portfolio-700 mb-2">Autres</h4>
              <p className="text-sm text-gray-600">System Design, Machine Learning, DataWarehouse, NoSQL, XML</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-portfolio-800 mb-4">Soft Skills</h3>
          <div className="bg-portfolio-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-portfolio-600 rounded-full"></div>
                <p className="text-portfolio-800">Esprit d'équipe</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-portfolio-600 rounded-full"></div>
                <p className="text-portfolio-800">Communication</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-3 w-3 bg-portfolio-600 rounded-full"></div>
                <p className="text-portfolio-800">Adaptabilité</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
