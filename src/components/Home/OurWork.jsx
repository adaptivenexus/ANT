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
            <a
              target="_blank"
              href={"https://bluesky-innovate.com/"}
              className="block bg-white rounded-[44px] overflow-hidden h-full"
            >
              <div className="border-b border-[#E6E6E6]">
                <Image
                  src={"/Project1.png"}
                  height={298}
                  width={585}
                  alt="work1"
                />
              </div>
              <div className="p-4 space-y-2">
                <h5 className="text-black heading-5">
                  Bluesky Innovate Website
                </h5>
                <p className="text-[#535463] body-text">
                  Redesigned the Bluesky Innovate website with a modern and
                  user-friendly interface, enhancing the user experience and
                  increasing site engagement by 50%.
                </p>
              </div>
            </a>
          </div>
          <div className="bg-primary-gradient-horizontal p-4 rounded-[44px]">
            <a
              target="_blank"
              href={"https://www.sc.ai/"}
              className="block bg-white rounded-[44px] overflow-hidden h-full"
            >
              <div className="border-b border-[#E6E6E6]">
                <Image
                  src={"/Project2.png"}
                  height={298}
                  width={585}
                  alt="work2"
                />
              </div>
              <div className="p-4 space-y-2">
                <h5 className="text-black heading-5">
                  SCAI: Custom Product Development
                </h5>
                <p className="text-[#535463] body-text">
                  The Product SCAI is a cutting-edge Document Management
                  solution that leverages advanced AI technology to streamline
                  data extraction, categorization, and retrieval processes.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
