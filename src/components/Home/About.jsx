import AboutUsCard from "./AboutUsCard";

const About = () => {
  const cardDescriptions = [
    {
      name: "Mission",
      description:
        "Helping businesses unlock their full potential by providing secure, scalable, and AI-driven data solutions that fuel innovation, efficiency, and long-term success.",
    },
    {
      name: "Purpose",
      description:
        "To enable businesses to harness the full potential of their data by providing secure, automated, and insightful IT solutions that drive operational excellence, risk mitigation, and strategic decision-making.",
    },
    {
      name: "Core Values",
      description:
        "Integrity & Transparency – Upholding ethical data management and fostering trust through accountability. Customer-Centric Approach – Prioritizing tailored solutions to meet the unique needs of every client. Data-Driven Excellence – Transforming raw data into strategic business intelligence. Collaboration & Growth – Cultivating teamwork and continuous learning to stay ahead in the digital landscape.",
    },
    {
      name: "Vision",
      description:
        "To be a leader in IT data services, revolutionizing data security, automation, and analytics through AI-driven innovation and next-generation technology solutions.",
    },
  ];

  return (
    <div id="about" className="py-24">
      <div className="wrapper space-y-16">
        <div className="space-y-6">
          <p className="heading-top text-primary">About us</p>
          <h3 className="heading-3 text-foreground">What We Envision</h3>
          <p className="heading-5 text-secondary-foreground font-medium">
            At Adaptive Nexus, we believe in the power of structured growth,
            discipline, and purposeful innovation—just like an ant. Every
            solution we build is crafted with precision, strategy, and a
            long-term vision, ensuring that small yet impactful advancements
            collectively drive transformational change for businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
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
            />
          ))}
        </div>
        <div className="space-y-6">
          <p className="heading-5 text-secondary-foreground font-medium">
            We specialize in AI-driven solutions, LLMs, NLP, and advanced data
            strategies, helping businesses in finance, retail, and manufacturing
            tackle real-world challenges with intelligence and efficiency. With
            a strong commitment to data security, automation, and AI-driven
            analytics, we empower businesses to unlock hidden opportunities,
            enhance decision-making, and drive operational excellence. Build
            solutions with a disciplined, strategic, and scalable mindset.
          </p>
          <p className="heading-5 text-secondary-foreground font-medium italic">
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
