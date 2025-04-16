import About from "@/components/Home/About";
// import CaseStudies from "@/components/Home/CaseStudies";
import FAQ from "@/components/Home/FAQ";
import Hero from "@/components/Home/Hero";
import OurServices from "@/components/Home/OurServices";
import OurWork from "@/components/Home/OurWork";
import RecentBlogs from "@/components/Home/RecentBlogs";
import Testimonials from "@/components/Home/Testimonials";
import VideoTablet from "@/components/Home/VideoTablet";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export const metadata = {
  title: "Adaptive Nexus Technologies",
  description:
    "Innovative solutions driving digital transformation and empowering businesses worldwide.",
  keywords: [
    "Adaptive Nexus",
    "AI Solutions",
    "Data Analytics",
    "LLM",
    "NLP",
    "Digital Transformation",
    "Business Intelligence",
    "Automation",
    "Data Security",
  ],
};

const Home = () => {
  return (
    <div className="flex flex-col gap-32">
      <div>
        <Hero />
        <VideoTablet />
      </div>

      <div className="flex flex-col gap-4 md:flex-row justify-between heading-4 lg:heading-3 xl:heading-2 w-full max-w-[1280px] 2xl:max-w-[1600px] px-4 mx-auto">
        <h2>Trusted</h2>
        <h2>Innovative</h2>
        <h2>Reliable</h2>
        <h2>Secure</h2>
        <h2>Scalable</h2>
      </div>

      <About />
      <OurServices />
      <WhyChooseUs />
      <OurWork />
      <div>
        <div className="h-[1px] max-w-[1280px] 2xl:max-w-[1600px]  mx-auto bg-[#535463]"></div>
        <div className="flex flex-col items-center gap-4 md:flex-row justify-between lg:heading-2 w-full max-w-[1280px] 2xl:max-w-[1600px] px-4 mx-auto py-10">
          <div className="text-center space-y-1">
            <p className="heading-1">3+</p>
            <p className="heading-4 text-secondary-foreground">
              Completed projects
            </p>
          </div>

          <div className="h-[60px] w-[1px] bg-[#535463] hidden md:block"></div>

          <div className="text-center space-y-1">
            <p className="heading-1">2+</p>
            <p className="heading-4 text-secondary-foreground">
              Years Of Experience
            </p>
          </div>

          <div className="h-[60px] w-[1px] bg-[#535463] hidden md:block"></div>

          <div className="text-center space-y-1">
            <p className="heading-1">10+</p>
            <p className="heading-4 text-secondary-foreground">Team Members</p>
          </div>

          <div className="h-[60px] w-[1px] bg-[#535463] hidden md:block"></div>

          <div className="text-center space-y-1">
            <p className="heading-1">3+</p>
            <p className="heading-4 text-secondary-foreground">
              Satisfied Clients
            </p>
          </div>
        </div>
      </div>
      {/* <CaseStudies /> */}
      <RecentBlogs />
      <Testimonials />
      <FAQ />
    </div>
  );
};
export default Home;
