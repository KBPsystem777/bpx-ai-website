import Image from "next/image";

export default function Partners() {
  const partners = [
    { name: "Beneda", logo: "/partners/beneda.jpg" },
    { name: "LX Studio Labs", logo: "/partners/lx_studiolabs_logo.jpg" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-blue-900">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-white">
          Our Partners
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="text-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={80}
                className="mx-auto mb-2"
              />
              <p className="text-blue-200">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
