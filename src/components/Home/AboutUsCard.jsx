const AboutUsCard = ({ name, description }) => {
  return (
    <div className="card h-[400px]">
      <div className="card__content text-center relative p-20 transition-transform duration-1000 text-foreground font-bold w-full h-full">
        <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-2 flex items-center justify-center w-full h-full   service-box-shadow rounded-xl overflow-hidden bg-border-gradient-about">
          <div className="w-full h-full bg-about-box-shadow rounded-xl flex items-center justify-center">
            <h3 className="heading-1 ">{name}</h3>
          </div>
        </div>
        <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-2 flex items-center justify-center w-full h-full   service-box-shadow rounded-xl overflow-hidden bg-border-gradient-about">
          <div className="w-full h-full bg-about-box-shadow rounded-xl flex items-center justify-center px-5">
            <p
              className={`body-text ${name === "Core Values" ? "text-xl" : "text-3xl"} font-normal  text-center`}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsCard;
