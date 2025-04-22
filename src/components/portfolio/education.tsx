
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";

export function Education() {
  return (
    <section className="py-10">
      <SectionHeader title="ÉDUCATION" />
      
      <div className="mt-8">
        <TimelineItem
          title="2ème année cycle ingénieur, ENSIAS"
          subtitle="Ingénierie en Data Software Sciences - DSS"
          date="2023 - 2026"
        />
        
        <TimelineItem
          title="CPGE Settat"
          subtitle="Classes Préparatoires aux Grandes Écoles, filière Technologie et Sciences Industrielles (TSI)"
          date="2021 - 2023"
        />
      </div>
    </section>
  );
}
