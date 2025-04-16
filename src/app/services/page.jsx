import ServiceSection from "@/components/Services/ServiceSection";

// metadata title
export const metadata = {
  title: "Services | Adaptive Nexus Technologies",
  description:
    "Discover our AI-driven services, including product development, generative AI solutions, process automation, data strategy, and more.",
};

const ServicesPage = () => {
  const servicesData = [
    {
      title: "Product Development & Innovation",
      image: "/service1.png",
      orientation: "right",
      list: [
        "Custom AI-driven SaaS products for various industries.",
        "LLM-powered AI assistants tailored to enterprise needs.",
        "AI-powered knowledge management platforms.",
        "AI-enhanced decision support systems for complex business workflows.",
        "AI-powered recommendation engines for personalized user experiences.",
        "Scalable cloud-based AI solutions for seamless business integration.",
      ],
    },
    {
      title: "Generative AI & Large Language Model (LLM) Solutions",
      image: "/service3.png",
      orientation: "left",
      list: [
        "Fine-tuned LLMs for industry-specific applications.",
        "NLP-based document summarization & text analytics.",
        "Conversational AI & GPT-powered virtual agents.",
        "AI-powered content generation for marketing, blogs, and reports.",
        "AI-driven code generation and optimization for software development.",
      ],
    },
    {
      title: "Process Automation & Efficiency Enhancement",
      image: "/service4.png",
      orientation: "right",
      list: [
        "AI-powered workflow automation for enterprises.",
        "Intelligent document processing & contract analysis.",
        "AI-based data extraction & structured reporting.",
        "Fraud detection & risk mitigation in financial services.",
        "AI-driven chatbots for automated customer support and query resolution.",
        "Robotic Process Automation (RPA) powered by AI for repetitive tasks.",
      ],
    },
    {
      title: "Data Strategy & Governance",
      image: "/service2.png",
      orientation: "left",
      list: [
        "End-to-end data pipeline optimization.",
        "Secure AI-driven data management frameworks.",
        "Regulatory-compliant AI governance (GDPR, HIPAA, financial regulations).",
        "AI-enhanced data privacy & security solutions.",
        "AI-powered anomaly detection to identify data inconsistencies.",
        "Scalable data warehousing solutions with AI-driven insights.",
      ],
    },
    {
      title: "AI Research & Experimentation Lab",
      image: "/service5.png",
      orientation: "right",
      list: [
        "Dedicated AI research team exploring next-gen models.",
        "Prototyping new AI-driven applications & frameworks.",
        "LLM and NLP innovation to push AI frontiers.",
        "AI-based cognitive computing & autonomous systems.",
        "Developing AI models for real-time decision-making and adaptive learning.",
        "Experimenting with multimodal AI combining text, images, and video processing.",
      ],
    },
    {
      title: "AI-Powered Business Intelligence & Analytics",
      image: "/service6.png",
      orientation: "left",
      list: [
        "Predictive & prescriptive analytics for strategic decision-making",
        "Data visualization and interactive dashboards",
        "Automated insights generation using AI-driven reporting",
        "Customer sentiment & behavioral analytics",
        "AI-driven financial forecasting and risk assessment tools",
        "AI-powered demand forecasting and supply chain optimization",
      ],
    },
  ];

  return (
    <section className="pt-8 space-y-10">
      <div className="wrapper space-y-4">
        <h2 className="heading-top text-primary">Our Services</h2>
        <p className="heading-5 text-secondary-foreground">
          At Adaptive Nexus, we are at the forefront of AI product innovation,
          developing next-generation solutions that redefine how businesses
          leverage Artificial Intelligence, automation, and data intelligence.
          Our expertise spans across finance, retail, and manufacturing,
          delivering secure, scalable, and AI-powered solutions tailored to
          real-world challenges.
        </p>
      </div>
      <div className="wrapper flex flex-col gap-20">
        {servicesData.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
export default ServicesPage;
