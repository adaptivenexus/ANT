import Image from "next/image";

const CaseStudies = () => {
  return (
    <div className="bg-accent-primary py-32">
      <div className="wrapper space-y-10">
        <div className="text-center space-y-3">
          <p className="heading-top text-primary">Case Studies</p>
          <h3 className="heading-3 text-foreground">Featured Case Studies</h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            Explore how our AI solutions have helped businesses achieve success
            and drive growth
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-primary rounded-[28px] overflow-hidden service-box-shadow">
              <div className="">
                <Image
                  src={"/case1.png"}
                  height={360}
                  width={604}
                  alt="case1"
                />
              </div>
              <div className="bg-white p-4 space-y-3">
                <h5 className="heading-5 text-black">
                  AI-Powered Marketing Automation
                </h5>
                <p className="body-text text-secondary-foreground">
                  We developed a custom AI-driven marketing automation platform
                  that helped a leading e-commerce brand improve their customer
                  engagement by 40%. By integrating personalized content
                  recommendations and predictive analytics, the platform
                  optimized campaigns, increased conversion rates, and
                  significantly reduced marketing costs.
                </p>
                <button
                  type="button"
                  className="bg-primary py-2 px-4 rounded-full text-white"
                >
                  Read More
                </button>
              </div>
            </div>
            <div className="border border-primary rounded-[28px] overflow-hidden service-box-shadow">
              <div className="">
                <Image
                  src={"/case2.png"}
                  height={360}
                  width={604}
                  alt="case1"
                />
              </div>
              <div className="bg-white p-4 space-y-3">
                <h5 className="heading-5 text-black">
                  AI-Powered Marketing Automation
                </h5>
                <p className="body-text text-secondary-foreground">
                  We developed a custom AI-driven marketing automation platform
                  that helped a leading e-commerce brand improve their customer
                  engagement by 40%. By integrating personalized content
                  recommendations and predictive analytics, the platform
                  optimized campaigns, increased conversion rates, and
                  significantly reduced marketing costs.
                </p>
                <button
                  type="button"
                  className="bg-primary py-2 px-4 rounded-full text-white"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CaseStudies;
