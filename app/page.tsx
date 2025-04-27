import Header from "./components/Header";
import Hero from "./components/Hero";
import AITools from "./components/AITools";
import Partners from "./components/Partners";
import Services from "./components/Services";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import IndustriesWeServe from "./components/IndustriesWeServe";
import ValueProposition from "./components/ValueProposition";

import { siteContent } from "./data/content";
import CtaSection from "./components/CtaSection";
import WhyChooseUs from "./components/WhyChooseUs";
import ProjectHighlights from "./components/ProjectHighlights";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header
        navigation={siteContent.navigation}
        siteName={siteContent.meta.siteName}
      />
      <main>
        <Hero content={siteContent.hero} />
        <AboutUs content={siteContent.about} />
        <Services content={siteContent.services} />
        <WhyChooseUs content={siteContent.whyChooseUs} />

        {/*  />
      
        <Testimonial content={siteContent.testimonial} />
       */}
        <ProjectHighlights content={siteContent.projectHighlights} />

        <Partners />
        <CtaSection content={siteContent.cta} />
      </main>
      <Footer content={siteContent.footer} />
    </div>
  );
}
