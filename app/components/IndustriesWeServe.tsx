import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Hospital, Car, Fingerprint, Users, Building2 } from "lucide-react"

export default function IndustriesWeServe() {
  const industries = [
    {
      name: "Human Resources (Recruitment)",
      description:
        "Intelligent candidate sourcing, screening, and interview management.",
      icon: Users,
    },

    {
      name: "Digital Identities",
      description: "Secure and streamline identity verification processes.",
      icon: Fingerprint,
    },

    {
      name: "Car Rentals and Fleet Management",
      description: "Automate fleet management, bookings, and customer support.",
      icon: Car,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">
          Tailored AI Solutions for Every Industry
        </h2>
        <p className="text-xl text-blue-200 text-center mb-10">
          BPxAI delivers impactful AI agents that adapt to the specific needs of
          your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border-none"
            >
              <CardHeader>
                <industry.icon className="w-12 h-12 text-purple-300 mb-4" />
                <CardTitle className="text-purple-300">
                  {industry.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
