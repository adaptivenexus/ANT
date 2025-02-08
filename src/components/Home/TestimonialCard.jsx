import Image from "next/image";

const TestimonialCard = () => {
  return (
    <div className="space-y-7 testimonials-Card p-16 rounded-[42px] shadow-md text-accent-secondary w-full">
      <p className="subtitle font-semibold md:heading-5 text-white">
        “Lorem ipsum dolor sit amet consectetur. Eros id et semper ullamcorper
        maecenas lacus. Congue at semper sit vestibulum. Tempor sit est mi
        ultrices sit urna. Nec a tellus tellus id nunc arcu.”
      </p>
      <div className="flex items-center gap-2 justify-between">
        <div className="space-y-1">
          <h5 className="body-text md:subtitle-text text-white">John Doe</h5>
          <p className="label-text md:body-text text-[#CFE2FA]">
            CEO of Company
          </p>
        </div>
        <div>
          <Image
            src={"/quote.svg"}
            width={96}
            height={62}
            alt={"Quote"}
            className="w-16 md:w-auto drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
export default TestimonialCard;
