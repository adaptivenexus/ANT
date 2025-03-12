import Image from "next/image";
import CarouselOurWork from "./CarouselOurWork";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
        <div className="gap-5 bg-accent-secondary py-4 md:py-14 px-4 rounded-3xl md:rounded-[70px] flex items-center">
          {/* Cards */}
          {/* <div className="bg-primary-gradient-horizontal-reverse p-4 rounded-[44px]">
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
          </div> */}
          <button className="prev-btn-ourWork-swiper hidden md:block">
            <FaChevronLeft className="text-primary" size={40} />
          </button>
          <CarouselOurWork />
          <button className="next-btn-ourWork-swiper hidden md:block">
            <FaChevronRight className="text-primary" size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};
export default OurWork;
