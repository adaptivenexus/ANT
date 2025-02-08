import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="py-24">
      <div className="wrapper space-y-16">
        <div className="space-y-6">
          <p className="heading-top text-primary">About us</p>
          <h3 className="heading-3 text-foreground">What We Envision</h3>
          <p className="description-large text-secondary-foreground font-semibold">
            Our mission is to use Ai to streamline workflows, boost task
            efficiency, and support informed decision-making, creating a
            seamless, productive environment for teams.
          </p>
        </div>
        <div className="flex gap-3">
          <div>
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
