import ServiceCard from "./ServiceCard";

const OurServices = () => {
  return (
    <div className="py-32 bg-accent-primary " id="services">
      <div className="wrapper space-y-10">
        <div className="space-y-3 text-center">
          <p className="heading-top text-primary">Our Services</p>
          <h3 className="heading-3 text-foreground">
            Solutions Tailored for Your Business Needs.
          </h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            Comprehensive Services to Empower Your Business.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-4">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};
export default OurServices;
