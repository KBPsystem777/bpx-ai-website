import { CheckIcon } from "lucide-react";
import Image from "next/image";

type AboutUsProps = {
  content: {
    title: string;
    mainHeadline: string;
    description: string;
    features: string[];
    conclusion: string;
  };
};

export default function AboutUs({ content }: AboutUsProps) {
  // Team members data
  const teamMembers = [
    {
      name: "Koleen Paunon",
      role: "Founder & Technology Lead",
      image: "/team/koleenbp.jpg?height=100&width=200",
      bio: "13+ years experience transforming business challenges into technology solutions.",
    },
    {
      name: "Neri Suba",
      role: "Co-Founder, Business Development & HR Lead",
      image: "/team/nerisuba.jpg?height=100&width=200",
      bio: "Expert in aligning technology with business goals and managing talent.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        {/* About Us Content */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center text-blue-900">
            {content.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-800">
                {content.mainHeadline}
              </h3>
              <p className="text-lg text-blue-700">{content.description}</p>

              <div className="space-y-3 mt-6">
                {content.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                      <CheckIcon className="w-4 h-4 text-blue-600" />
                    </div>
                    <p className="text-blue-700">{feature}</p>
                  </div>
                ))}
              </div>

              <p className="text-lg text-blue-900 font-medium pt-4 border-t border-blue-100">
                {content.conclusion}
              </p>
            </div>

            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/bpxai-team.jpg?height=600&width=800"
                alt="BPxAI Team at Work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <h3 className="text-2xl font-bold mb-10 text-center text-blue-900">
            Meet Our Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-blue-900">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-sm text-blue-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
