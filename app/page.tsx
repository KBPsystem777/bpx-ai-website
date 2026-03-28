import { HeroSection } from "@/components/hero-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ProjectsSection } from "@/components/projects-section";
import { PartnersSection } from "@/components/partners-section";
import { ResearchSection } from "@/components/research-section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <CapabilitiesSection />
      <ProjectsSection />
      <PartnersSection />
      <ResearchSection />
      <ConsultationCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
