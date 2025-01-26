import { useRouter } from "next/router"

import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-white">Welcome to BPxAI</h1>
        <p className="text-xl mb-8 text-blue-200">
          Empowering businesses with cutting-edge AI solutions
        </p>
        <a href="#insights">
          <Button className="bg-purple-600 text-white hover:bg-purple-700">
            Learn More
          </Button>
        </a>
      </div>
    </section>
  )
}
