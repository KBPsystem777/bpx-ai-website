import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "Koleen Paunon",
      role: "CEO & AI Strategist",
      image: "/jane-doe.jpg",
    },
    {
      name: "Koleen Paunon",
      role: "CTO & Lead Developer",
      image: "/john-smith.jpg",
    },
    {
      name: "Koleen Paunon",
      role: "AI Research Scientist",
      image: "/alice-johnson.jpg",
    },
    {
      name: "Koleen Paunon",
      role: "Blockchain Engineering Lead",
      image: "/bob-williams.jpg",
    },
  ]

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-300">
                {member.name}
              </h3>
              <p className="text-blue-200">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
