import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Carousel from "./Carousel";

const Testimonials = () => {
  return (
    <section>
      <div className="xl:max-w-[1280px] px-4 mx-auto space-y-10">
        <div className="text-center space-y-3">
          <p className="heading-top text-primary">Testimonials</p>
          <h3 className="heading-3 text-foreground">
            See What Our Customers Love About Us
          </h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            Explore the unique stories and feedback from our users, showcasing
            the impact and versatility of our platform.
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-6 w-full">
          <button type="button" className="prev-btn-swiper">
            <FaChevronLeft className="text-3xl md:text-6xl text-primary" />
          </button>

          <Carousel />

          <button type="button" className="next-btn-swiper">
            <FaChevronRight className="text-3xl md:text-6xl text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
