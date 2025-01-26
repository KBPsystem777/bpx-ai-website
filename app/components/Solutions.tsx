import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Users } from "lucide-react"

export default function Solutions() {
  const solutions = [
    {
      title: "Recruitment",
      description:
        "Transform the hiring process with AI agents that source, screen, and engage candidates autonomously.",
      icon: Users,
    },
    {
      title: "BPO Automation",
      description:
        "Streamline repetitive tasks, improve accuracy, and save costs with AI-powered automation.",
      icon: DollarSign,
    },
    {
      title: "Healthcare Solution",
      description:
        "Reduce wait times and enhance patient outcomes with intelligent scheduling and data analysis.",
      icon: Clock,
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          AI Agents Built for Your Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border-none"
            >
              <CardHeader>
                <solution.icon className="w-12 h-12 text-purple-300 mb-4" />
                <CardTitle className="text-purple-300">
                  {solution.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
