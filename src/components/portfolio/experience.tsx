
import { SectionHeader } from "@/components/ui/section-header";
import { TimelineItem } from "@/components/ui/timeline-item";

export function Experience() {
  return (
    <section className="py-10">
      <SectionHeader title="EXPÉRIENCES PROFESSIONNELLES" />
      
      <div className="mt-8">
        <TimelineItem
          title="Stage PFA - WhiteBox Media"
          subtitle="Développeur Mobile"
          date="Juillet 2024 - Septembre 2024"
        >
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-1">
            <li>Developed a mobile cross-platform e-Commerce app for men's clothing with real-time synchronization to the website.</li>
            <li className="font-medium">Outils: React Native, Node.js, JavaScript, JSX, Tsx, Expo Go, Java, Rest API</li>
          </ul>
        </TimelineItem>
        
        <TimelineItem
          title="Responsable du Développement - DarLkhir"
          subtitle="Lead Developer"
          date="Septembre 2024 - Septembre 2025"
        >
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-1">
            <li>Supervision du développement de l'application mobile DarLkhir, visant à promouvoir l'engagement volontaire, avec une victoire du premier prix lors de l'événement Forme Social à l'ENSAM de Meknès.</li>
            <li className="font-medium">Outils: React Native, Firebase, Git, GitHub, Expo Go, Android Studio, Xcode</li>
          </ul>
        </TimelineItem>
      </div>
    </section>
  );
}
