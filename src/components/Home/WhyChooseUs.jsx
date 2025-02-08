import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="wrapper flex flex-col lg:flex-row gap-6">
        <div className="space-y-14 flex-1">
          <div className="space-y-4">
            <p className="heading-top text-primary">Why choose us</p>
            <h3 className="heading-3 text-foreground">
              Our process streamlined
              <br />
              our solutions
            </h3>
          </div>
          <div className="flex flex-col gap-10">
            <div className="border-b border-[#0e08164f] pb-6 space-y-3">
              <div className="flex items-center gap-4">
                <p className="text-xl bg-primary py-1 w-[50px] text-center text-white font-normal rounded-xl">
                  1
                </p>
                <h4 className="heading-4">Consultation</h4>
              </div>
              <p className="subtitle-text text-secondary-foreground">
                We begin by understanding your business goals and web
                requirements. this ensures we tailor our approach.
              </p>
            </div>
            <div className="border-b border-[#0e08164f] pb-6 space-y-3">
              <div className="flex items-center gap-4">
                <p className="text-xl border-primary border-2 py-1 w-[50px] text-center text-foreground font-normal rounded-xl">
                  2
                </p>
                <h4 className="heading-4">Tailored Proposal</h4>
              </div>
              <p className="subtitle-text text-secondary-foreground">
                We provide a detailed proposal outlining the budget, timeline,
                and plan for your project.
              </p>
            </div>
            <div className="border-b border-[#0e08164f] pb-6 space-y-3">
              <div className="flex items-center gap-4">
                <p className="text-xl border-primary border-2 py-1 w-[50px] text-center text-foreground  font-normal rounded-xl">
                  3
                </p>
                <h4 className="heading-4">Development</h4>
              </div>
              <p className="subtitle-text text-secondary-foreground">
                Our team works diligently to develop your site, with regular
                check-ins to ensure your preference.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:flex hidden ">
          <Image
            src={"/whychooseus.png"}
            width={557}
            height={700}
            alt="whychooseus"
            className="block rounded-[70px] border-2 border-primary shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
export default WhyChooseUs;
