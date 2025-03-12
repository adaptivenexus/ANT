import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="wrapper space-y-16">
        <div className="space-y-4">
          <p className="heading-top text-primary">Why choose us</p>
          <h3 className="heading-3 text-foreground">
            AI Innovators: Shaping the Future of Business
          </h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            We’re not just a technology provider—we’re AI innovators shaping the
            future of business intelligence, automation, and data-driven
            decision-making. Let’s build the next wave of AI-powered
            transformation together.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="space-y-14 flex-1">
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <p className="text-xl bg-primary py-1 w-[50px] text-center text-white font-normal rounded-xl">
                    1
                  </p>
                  <h4 className="heading-4">
                    Pioneers in AI Product Innovation
                  </h4>
                </div>
                <p className="subtitle-text text-secondary-foreground">
                  We excel in building cutting-edge AI solutions that drive
                  industry transformation.
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#BCBABE]"></div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <p className="text-xl border-primary border-2 py-1 w-[50px] text-center text-foreground font-normal rounded-xl">
                    2
                  </p>
                  <h4 className="heading-4">Industry-Tailored AI Solutions</h4>
                </div>
                <p className="subtitle-text text-secondary-foreground">
                  We develop business-specific AI models that create measurable
                  value.
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#BCBABE]"></div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <p className="text-xl border-primary border-2 py-1 w-[50px] text-center text-foreground  font-normal rounded-xl">
                    3
                  </p>
                  <h4 className="heading-4">AI-First, Data-Driven Execution</h4>
                </div>
                <p className="subtitle-text text-secondary-foreground">
                  Every solution is structured, scalable, and built for
                  long-term impact.
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#BCBABE]"></div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <p className="text-xl border-primary border-2 py-1 w-[50px] text-center text-foreground  font-normal rounded-xl">
                    4
                  </p>
                  <h4 className="heading-4">
                    Security, Compliance & Scalability
                  </h4>
                </div>
                <p className="subtitle-text text-secondary-foreground">
                  We ensure secure AI adoption with enterprise-grade compliance.
                </p>
              </div>
              <div className="h-[1px] w-full bg-[#BCBABE]"></div>

              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <p className="text-xl border-primary border-2 py-1 w-[50px] text-center text-foreground  font-normal rounded-xl">
                    5
                  </p>
                  <h4 className="heading-4">Future-Ready AI Products</h4>
                </div>
                <p className="subtitle-text text-secondary-foreground">
                  We stay ahead of trends by continuously innovating AI-driven
                  solutions.
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
    </div>
  );
};
export default WhyChooseUs;
