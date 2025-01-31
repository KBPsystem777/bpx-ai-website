import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import {
  Brain,
  Lightbulb,
  Layers,
  FileCode,
  BitcoinIcon as Blockchain,
  MessageSquare,
} from "lucide-react"

import BookAMeetingCTA from "./BookAMeetingCTA"

export default function Services() {
  const services = [
    {
      title: "AI Agents Development",
      description:
        "We build AI tools to automate tasks and improve your business performance.",
      icon: Brain,
    },
    {
      title: "AI Consulting",
      description:
        "Get expert advice on how AI can solve your business challenges.",
      icon: Lightbulb,
    },
    {
      title: "Blockchain, Smart Contracts, Web3 & AI Integration",
      description:
        "Combine blockchain and AI for secure, next-gen business solutions.",
      icon: Layers,
    },
  ]

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border-none"
            >
              <CardHeader>
                <service.icon className="w-12 h-12 text-purple-300 mb-4" />
                <CardTitle className="text-purple-300">
                  {service.title}
                </CardTitle>
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
