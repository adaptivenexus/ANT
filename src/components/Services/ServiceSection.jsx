"use client";
import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useContext } from "react";

const ServiceSection = ({ image, orientation, title, description }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div
      className={`flex gap-10 items-center flex-col md:flex-row ${
        orientation === "left" && "md:flex-row-reverse"
      }`}
    >
      <div className="flex-1 space-y-8">
        <h6
          className={`heading-4 ${
            theme === "dark" ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h6>
        <p className="subtitle-text text-secondary-foreground">{description}</p>
      </div>
      <div className="flex-1">
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full rounded-3xl h-full object-cover object-center"
        />
      </div>
    </div>
  );
};
export default ServiceSection;
