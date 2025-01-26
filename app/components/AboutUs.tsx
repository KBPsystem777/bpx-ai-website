import { Card, CardContent } from "@/components/ui/card"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Who We Are
        </h2>
        <Card className="bg-white bg-opacity-0 backdrop-blur-md border-none">
          <CardContent className="p-6">
            <p className="text-blue-200 text-lg leading-relaxed">
              BPxAI is your partner in intelligent automation. We design
              AI-powered agents tailored to meet the unique challenges of
              industries such as recruitment, HR operatios, healthcare, cars and
              fleet management, digital identities, recruitment, and BPOs. Our
              mission is to redefine operational efficiency and customer
              satisfaction through innovative, scalable solutions.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
