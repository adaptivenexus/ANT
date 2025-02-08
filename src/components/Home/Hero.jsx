const Hero = () => {
  return (
    <div
      id="hero"
      className="pt-48 pb-40 md:py-0 md:h-screen w-full custom-drop-shadow-hero flex items-center justify-center text-white hero-Container md:rounded-b-full z-10"
    >
      <div className="wrapper w-full flex flex-col items-center justify-center space-y-5">
        <div className="text-center space-y-3 w-full">
          <h1 className="heading-3 sm:heading-2 md:display-text">
            Revolutionizing Business with AI
          </h1>
          <p className="body-text sm:subtitle-text">
            Empowering businesses to thrive with cutting-edge, tailored IT
            solutions designed for sustainable growth.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="py-3 px-2 md:px-5 bg-primary rounded-md hover:opacity-80 transition-all duration-300"
          >
            Explore Our Services
          </button>
          <button
            type="button"
            className="py-3 px-2 md:px-5 border-primary border-2 rounded-md hover:opacity-80 transition-all duration-300"
          >
            Get a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};
export default Hero;
