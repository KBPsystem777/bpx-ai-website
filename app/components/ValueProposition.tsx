import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Settings, TrendingUp, Clock, Zap } from "lucide-react"
import BookAMeetingCTA from "./BookAMeetingCTA"

export default function ValueProposition() {
  const values = [
    {
      title: "Customizable",
      description: "Solutions tailored to your industry needs.",
      icon: Settings,
    },
    {
      title: "Scalable",
      description: "Grow without increasing operational costs.",
      icon: TrendingUp,
    },
    {
      title: "Efficient",
      description:
        "Automate time-consuming tasks, freeing your team for strategic work.",
      icon: Clock,
    },
    {
      title: "Future-Ready",
      description: "Cutting-edge AI agents designed for 2025 and beyond.",
      icon: Zap,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Why BPxAI?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border-none"
            >
              <CardHeader>
                <value.icon className="w-12 h-12 text-purple-300 mb-4" />
                <CardTitle className="text-purple-300">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
