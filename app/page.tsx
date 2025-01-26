import Header from "./components/Header"
import Hero from "./components/Hero"
import AITools from "./components/AITools"
import Partners from "./components/Partners"
import Services from "./components/Services"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import AboutUs from "./components/AboutUs"
import IndustriesWeServe from "./components/IndustriesWeServe"
import ValueProposition from "./components/ValueProposition"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900">
      <Header />
      <main>
        <Hero />
        <IndustriesWeServe />
        <Services />
        <ValueProposition />
        <AITools />
        <Partners />
        <Team />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
