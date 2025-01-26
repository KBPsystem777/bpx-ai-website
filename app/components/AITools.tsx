import Image from "next/image"

export default function AITools() {
  const tools = [
    { name: "Axar.AI", logo: "/techs/axarai.webp" },
    { name: "elizaOS", logo: "/techs/elizaOS.jpg" },
    { name: "OpenAI", logo: "techs/openai.png" },
    { name: "Virtual Protocols", logo: "techs/virtual-protocol.png" },
    { name: "React", logo: "techs/react.png" },
  ]

  return (
    <section
      id="tools"
      className="py-20 px-4 bg-gradient-to-r from-blue-900 to-purple-900"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          AI Tools & Technologies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {tools.map((tool, index) => (
            <div key={index} className="text-center">
              <Image
                src={tool.logo || "/placeholder.svg"}
                alt={tool.name}
                width={100}
                height={100}
                className="mx-auto mb-2"
              />
              <p className="text-blue-200">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
