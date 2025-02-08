import ServiceSection from "@/components/Services/ServiceSection";

const ServicesPage = () => {
  const servicesData = [
    {
      title: "Tailored AI Solutions",
      image: "/service1.png",
      orientation: "right",
      description:
        "At Adaptive Nexus, we pride ourselves on our innovative solutions, unwavering focus on client satisfaction, and a proven track record of delivering results. With a deep understanding of industry trends and a commitment to excellence, we combine cutting-edge technology and personalized strategies to help our clients achieve sustainable success.",
    },
    {
      title: "Confident Outsourcing with AI",
      image: "/service2.png",
      orientation: "left",
      description:
        "At Adaptive Nexus, we pride ourselves on our innovative solutions, unwavering focus on client satisfaction, and a proven track record of delivering results. With a deep understanding of industry trends and a commitment to excellence, we combine cutting-edge technology and personalized strategies to help our clients achieve sustainable success.",
    },
    {
      title: "Strategic AI Consulting",
      image: "/service3.png",
      orientation: "right",
      description:
        "At Adaptive Nexus, we pride ourselves on our innovative solutions, unwavering focus on client satisfaction, and a proven track record of delivering results. With a deep understanding of industry trends and a commitment to excellence, we combine cutting-edge technology and personalized strategies to help our clients achieve sustainable success.",
    },
    {
      title: "Smart & Seamless Integrations",
      image: "/service4.png",
      orientation: "left",
      description:
        "At Adaptive Nexus, we pride ourselves on our innovative solutions, unwavering focus on client satisfaction, and a proven track record of delivering results. With a deep understanding of industry trends and a commitment to excellence, we combine cutting-edge technology and personalized strategies to help our clients achieve sustainable success.",
    },
    {
      title: "AI-Driven Product Development",
      image: "/service5.png",
      orientation: "right",
      description:
        "At Adaptive Nexus, we pride ourselves on our innovative solutions, unwavering focus on client satisfaction, and a proven track record of delivering results. With a deep understanding of industry trends and a commitment to excellence, we combine cutting-edge technology and personalized strategies to help our clients achieve sustainable success.",
    },
    {
      title: "Tailored AI Solutions with ANT Tech",
      image: "/service6.png",
      orientation: "left",
      description:
        "At Adaptive Nexus, we pride ourselves on our innovative solutions, unwavering focus on client satisfaction, and a proven track record of delivering results. With a deep understanding of industry trends and a commitment to excellence, we combine cutting-edge technology and personalized strategies to help our clients achieve sustainable success.",
    },
  ];

  return (
    <section className="pt-8">
      <div className="wrapper flex flex-col gap-20">
        {servicesData.map((service, index) => (
          <ServiceSection key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
export default ServicesPage;
