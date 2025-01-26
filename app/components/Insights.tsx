import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Lightbulb, Briefcase, Cpu } from "lucide-react"

export default function Insights() {
  const insights = [
    {
      title: "AI-Driven Innovation",
      content: "Pioneering AI solutions for business transformation",
      icon: Lightbulb,
    },
    {
      title: "Expert Consultation",
      content: "Tailored AI strategies for your unique challenges",
      icon: Briefcase,
    },
    {
      title: "Cutting-Edge Technology",
      content: "Leveraging the latest in AI and blockchain",
      icon: Cpu,
    },
  ]

  return (
    <section
      id="insights"
      className="py-20 px-4 bg-gradient-to-r from-purple-800 to-blue-800"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Company Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border-none"
            >
              <CardHeader>
                <insight.icon className="w-12 h-12 text-purple-300 mb-4" />
                <CardTitle className="text-purple-300">
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">{insight.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
