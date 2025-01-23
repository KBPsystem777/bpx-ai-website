import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function AIImpact() {
  const impacts = [
    {
      sector: "Humanities",
      description:
        "AI enhances research capabilities, preserves cultural heritage, and improves accessibility to knowledge.",
    },
    {
      sector: "Services",
      description: "AI streamlines customer service, personalizes user experiences, and optimizes resource allocation.",
    },
    {
      sector: "Governments",
      description:
        "AI aids in policy-making, improves public services, and enhances citizen engagement and transparency.",
    },
    {
      sector: "Businesses",
      description:
        "AI drives innovation, increases efficiency, and enables data-driven decision-making for better customer value.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">AI Impact: Adding Value Across Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {impacts.map((impact, index) => (
            <Card key={index} className="bg-white bg-opacity-10 backdrop-blur-md border-none">
              <CardHeader>
                <CardTitle className="text-purple-300">{impact.sector}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-200">{impact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

