"use client";

import AboutUsCard from "./AboutUsCard";

const About = () => {
  const cardDescriptions = [
    {
      name: "Mission",
      image: "/aboutImages/1.png",
      description:
        "Enabling businesses with secure, scalable, AI-driven solutions for innovation.",
    },
    {
      name: "Purpose",
      image: "/aboutImages/2.png",
      description:
        "Empowering businesses with secure, automated, and insightful data-driven solutions.",
    },
    {
      name: "Core Values",
      image: "/aboutImages/3.png",
      description:
        "Integrity & Transparency Customer-Centric Approach Data-Driven Excellence",
    },
    {
      name: "Vision",
      image: "/aboutImages/4.png",
      description:
        "Leading IT data services with AI-driven security, automation, and analytics.",
    },
  ];

  return (
    <div id="about" className="pt-24">
      <div className="wrapper space-y-16">
        <div className="space-y-6">
          <p className="heading-top text-primary">About us</p>
          <h3 className="heading-3 text-foreground">Who we are</h3>
          <p className="heading-5 text-secondary-foreground font-normal">
            At Adaptive Nexus, we believe in the power of structured growth,
            discipline, and purposeful innovation—just like an ant. Every
            solution we build is crafted with precision, strategy, and a
            long-term vision, ensuring that small yet impactful advancements
            collectively drive transformational change for businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* <div>
            <Image
              src={"/about1.png"}
              height={430}
              width={750}
              alt="About1"
              className="block rounded-[70px] border-2 border-primary"
            />
          </div>
          <div>
            <Image
              src={"/about2.png"}
              height={430}
              width={494}
              alt="About1"
              className="block rounded-[70px] border-2 border-primary"
            />
          </div> */}
          {cardDescriptions.map((card, index) => (
            <AboutUsCard
              key={index}
              name={card.name}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
        <div className="space-y-6">
          <p className="heading-5 text-secondary-foreground font-normal ">
            We specialize in AI-driven solutions, LLMs, NLP, and advanced data
            strategies, helping businesses in finance, retail, and manufacturing
            tackle real-world challenges with intelligence and efficiency. With
            a strong commitment to data security, automation, and AI-driven
            analytics, we empower businesses to unlock hidden opportunities,
            enhance decision-making, and drive operational excellence. Build
            solutions with a disciplined, strategic, and scalable mindset.
          </p>
          <p className="heading-5 text-secondary-foreground font-normal italic">
            At Adaptive Nexus, we don’t just create technology—we engineer
            progress, one step at a time. Let’s build the future of data-driven
            innovation together.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
