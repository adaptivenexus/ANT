import Image from "next/image";

const WorkCard = ({ name, description, image, url, gradientAlignment }) => {
  return (
    <div
      className={`${gradientAlignment === "left" ? "bg-primary-gradient-horizontal" : " bg-primary-gradient-horizontal-reverse"} p-4 rounded-[44px] h-full`}
    >
      <a
        target="_blank"
        href={url}
        className="block bg-white rounded-[44px] overflow-hidden h-full"
      >
        <div className="border-b border-[#E6E6E6]">
          <Image src={image} height={298} width={585} alt="work2" />
        </div>
        <div className="p-4 space-y-2">
          <h5 className="text-black heading-5">{name}</h5>
          <p className="text-[#535463] body-text pb-4">{description}</p>
        </div>
      </a>
    </div>
  );
};
export default WorkCard;
