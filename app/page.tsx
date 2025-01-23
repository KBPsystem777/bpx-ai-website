import Header from "./components/Header"
import Hero from "./components/Hero"
import Insights from "./components/Insights"
import AITools from "./components/AITools"
import Partners from "./components/Partners"
import Services from "./components/Services"
import AIImpact from "./components/AIImpact"
import Team from "./components/Team"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-blue-900">
      <Header />
      <main>
        <Hero />
        <Insights />
        <AITools />
        <Partners />
        <Services />
        <AIImpact />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

