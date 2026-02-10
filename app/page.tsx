import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { ProjectsSection } from "@/components/projects-section";
import { PartnersSection } from "@/components/partners-section";
import { TeamSection } from "@/components/team-section";
import { ConsultationCTA } from "@/components/consultation-cta";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <ProjectsSection />
      <PartnersSection />
      <TeamSection />
      <ConsultationCTA />
      <ContactSection />
      <Footer />
    </main>
  );
}
