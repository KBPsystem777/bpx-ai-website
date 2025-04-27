import type React from "react";

import { Code, Database, Bot, Lightbulb } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  iconName: string;
};

type ServicesProps = {
  content: {
    title: string;
    items: ServiceItem[];
  };
};

export default function Services({ content }: ServicesProps) {
  // Map icon names to actual icon components
  const iconMap: Record<string, React.ElementType> = {
    Code,
    Database,
    Bot,
    Lightbulb,
  };

  return (
    <section
      id="services"
      className="py-20 px-4 bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-4 text-center text-blue-900">
          {content.title}
        </h2>
        <p className="text-blue-700 text-center mb-12 max-w-2xl mx-auto">
          We deliver technology solutions that are practical, scalable, and
          aligned with your business goals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.items.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Code;

            return (
              <div
                key={index}
                className="group flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-b-4 border-transparent hover:border-blue-600"
              >
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-blue-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-blue-700">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
