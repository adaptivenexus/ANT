"use client";

import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const ServiceCard = ({ image, title, description }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-4 ${
        theme === "dark"
          ? "bg-secondary-gradient hover:service-box-shadow"
          : "bg-background service-box-shadow"
      } border-primary border rounded-[40px] hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
    >
      <div>
        <Image
          src={image}
          height={213}
          width={381}
          alt="service1"
          className="rounded-[28px] w-full"
        />
      </div>
      <div className={`p-4 space-y-4 `}>
        <h4 className="heading-5">{title}</h4>
        <div className="space-y-3">
          <p className="body-text line-clamp-3">{description}</p>
          <Link
            href={"/services"}
            className="bg-primary py-2 px-4 rounded-full text-white block w-max"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;
