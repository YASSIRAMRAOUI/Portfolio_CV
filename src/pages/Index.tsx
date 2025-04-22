
import { Header } from "@/components/portfolio/header";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience"; 
import { Education } from "@/components/portfolio/education";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { Activities } from "@/components/portfolio/activities";
import { Footer } from "@/components/portfolio/footer";
import { Navbar } from "@/components/portfolio/navbar";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { SectionDivider } from "@/components/ui/section-divider";
import { PageLoader } from "@/components/ui/page-loader";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Portfolio - Yassir Amraoui";
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <PageLoader />
      <Navbar />
      <div className="container max-w-4xl mx-auto px-4 py-10">
        <div className="fade-in" style={{ animationDelay: "0.2s" }}>
          <Header />
        </div>
        <SectionDivider />
        <section id="about" className="fade-in" style={{ animationDelay: "0.4s" }}>
          <About />
        </section>
        <SectionDivider />
        <section id="experience" className="fade-in" style={{ animationDelay: "0.6s" }}>
          <Experience />
        </section>
        <SectionDivider />
        <section id="education" className="fade-in" style={{ animationDelay: "0.8s" }}>
          <Education />
        </section>
        <SectionDivider />
        <section id="skills" className="fade-in" style={{ animationDelay: "1s" }}>
          <Skills />
        </section>
        <SectionDivider />
        <section id="projects" className="fade-in" style={{ animationDelay: "1.2s" }}>
          <Projects />
        </section>
        <SectionDivider />
        <section id="activities" className="fade-in" style={{ animationDelay: "1.4s" }}>
          <Activities />
        </section>
        <div className="fade-in" style={{ animationDelay: "1.6s" }}>
          <Footer />
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
