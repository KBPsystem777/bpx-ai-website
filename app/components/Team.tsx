import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "Koleen Paunon",
      role: "Founder, CTO & CEO",
      image: "team/koleenbp.jpg",
    },
    {
      name: "Neri Suba",
      role: "Co-Founder, Business Development & HR Lead",
      image: "team/nerisuba.jpg",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
