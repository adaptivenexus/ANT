import ServiceCard from "./ServiceCard";

const OurServices = () => {
  const services = [
    {
      title: "Product Development & Innovation",
      image: "/service1.png",
      description:
        "Developing AI-driven SaaS solutions customized for different industries. Enterprise-focused AI assistants, knowledge management, and decision-making tools.",
    },
    {
      title: "Data Strategy & Governance",
      image: "/service2.png",
      orientation: "left",
      description:
        "Optimizing data pipelines with AI-powered security frameworks. Ensuring compliance with data regulations and enhancing privacy protection.",
    },
    {
      title: "AI Research & Experimentation Lab",
      image: "/service5.png",
      orientation: "right",
      description:
        "Exploring cutting-edge AI technologies and cognitive computing. Building prototypes for next-gen AI applications and autonomous systems.",
    },
  ];

  return (
    <div className="py-32 bg-accent-primary " id="services">
      <div className="wrapper space-y-10">
        <div className="space-y-3 text-center">
          <p className="heading-top text-primary">Our Services</p>
          <h3 className="heading-3 text-foreground">
            Solutions Tailored for Your Business Needs.
          </h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            At Adaptive Nexus, we are at the forefront of AI product innovation,
            developing next-generation solutions that redefine how businesses
            leverage Artificial Intelligence, automation, and data intelligence.
            Our expertise spans across finance, retail, and manufacturing.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          {services.map((elem, index) => (
            <ServiceCard
              key={index}
              image={elem.image}
              title={elem.title}
              description={elem.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurServices;
