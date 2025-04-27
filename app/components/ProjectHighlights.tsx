import Image from "next/image";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

type ProjectItem = {
  title: string;
  description: string;
  image?: string;
};

type ProjectHighlightsProps = {
  content: {
    title: string;
    items: ProjectItem[];
  };
};

export default function ProjectHighlights({ content }: ProjectHighlightsProps) {
  // Project images - in a real implementation, these would come from the CMS
  const projectImages = [
    "https://koleenbp.com/images/portfolio/bpx-commerce.png?height=300&width=600",
    "https://koleenbp.com/images/clients/bge.png",
    "https://koleenbp.com/images/clients/mlife.png",
    "https://koleenbp.com/images/clients/entergy.png",
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
          {content.title}
        </h2>
        <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">
          Real solutions for real businesses. See how we've helped our clients
          achieve their goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {content.items.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-64 w-full">
                <Image
                  src={projectImages[index] || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 ">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-blue-100 mb-4">{project.description}</p>
                {/* <Button
                  variant="outline"
                  size="sm"
                  className="    border-white hover:bg-white hover:text-blue-900"
                >
                  Visit Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                 </Button>  */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
