
import { SectionHeader } from "@/components/ui/section-header";

export function Activities() {
  return (
    <section className="py-10">
      <SectionHeader title="ACTIVITÉS EXTRA-SCOLAIRES" />
      
      <div className="bg-portfolio-50 p-6 rounded-lg mt-8">
        <p className="text-gray-700 leading-relaxed">
          En tant que responsable du département développement au <span className="font-semibold">CINDH</span>, 
          j'ai développé l'application mobile <span className="font-semibold">DarLkhir</span> pour Android et iOS, 
          visant à promouvoir le volontariat. J'ai supervisé l'ensemble du processus technique, de la conception 
          à la mise en production.
        </p>
      </div>
    </section>
  );
}
