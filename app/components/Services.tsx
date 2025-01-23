import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Brain,
  Lightbulb,
  Smartphone,
  Layers,
  FileCode,
  Database,
  BotIcon as Robot,
  Eye,
  LineChartIcon as ChartLine,
  BitcoinIcon as Blockchain,
  Cpu,
  MessageSquare,
} from "lucide-react"

export default function Services() {
  const services = [
    { title: "AI Development", description: "Custom AI solutions tailored to your business needs", icon: Brain },
    { title: "AI Consulting", description: "Expert guidance on integrating AI into your operations", icon: Lightbulb },
    {
      title: "Smart Application Development",
      description: "Intelligent apps powered by cutting-edge AI",
      icon: Smartphone,
    },
    {
      title: "Web3 & AI Integration",
      description: "Combining blockchain and AI for innovative solutions",
      icon: Layers,
    },
    { title: "Smart Contracts", description: "Secure and efficient blockchain-based agreements", icon: FileCode },
    { title: "Machine Learning Models", description: "Develop and deploy advanced ML models", icon: Database },
    { title: "Natural Language Processing", description: "Implement NLP for text and speech analysis", icon: Robot },
    { title: "Computer Vision Solutions", description: "AI-powered image and video processing", icon: Eye },
    {
      title: "Predictive Analytics",
      description: "Data-driven forecasting for informed decision-making",
      icon: ChartLine,
    },
    {
      title: "Blockchain Development",
      description: "Custom blockchain solutions for various industries",
      icon: Blockchain,
    },
    { title: "IoT & AI Integration", description: "Combining IoT devices with AI for smart systems", icon: Cpu },
    {
      title: "AI-Powered Chatbots",
      description: "Intelligent conversational agents for customer service",
      icon: MessageSquare,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md border-none">
              <CardHeader>
                <service.icon className="w-12 h-12 text-purple-300 mb-4" />
                <CardTitle className="text-purple-300">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

