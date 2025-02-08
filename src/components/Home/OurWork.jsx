import Image from "next/image";

const OurWork = () => {
  return (
    <div>
      <div className="wrapper space-y-14">
        <div className="text-center space-y-3">
          <p className="heading-top text-primary">Our Work</p>
          <h3 className="heading-3 text-foreground">
            Innovative Solutions in Action.
          </h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            Explore our innovative projects that highlight the power of AI and
            custom solutions in driving business success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-accent-secondary p-4 md:p-14 rounded-lg md:rounded-[70px]">
          {/* Cards */}
          <div className="bg-primary-gradient-horizontal-reverse p-4 rounded-[44px]">
            <div className="bg-white rounded-[44px] overflow-hidden ">
              <div>
                <Image
                  src={"/Project1.png"}
                  height={298}
                  width={585}
                  alt="work1"
                />
              </div>
              <div className="p-4 space-y-2">
                <h5 className="text-black heading-5">
                  Custom Website Development for Online Store
                </h5>
                <p className="text-[#535463] body-text">
                  Designed and developed a fully responsive website for an
                  e-commerce brand, enhancing user experience and driving a 20%
                  increase in online sales.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary-gradient-horizontal p-4 rounded-[44px]">
            <div className="bg-white rounded-[44px] overflow-hidden h-full">
              <div>
                <Image
                  src={"/Project2.png"}
                  height={298}
                  width={585}
                  alt="work2"
                />
              </div>
              <div className="p-4 space-y-2">
                <h5 className="text-black heading-5">
                  Responsive Portfolio Website Design
                </h5>
                <p className="text-[#535463] body-text">
                  Created a sleek, mobile-friendly portfolio website for a
                  creative professional, showcasing their work and increasing
                  client inquiries by 40%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
