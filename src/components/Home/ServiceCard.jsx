"use client";

import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const ServiceCard = () => {
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
          src={"/service1.png"}
          height={213}
          width={381}
          alt="service1"
          className="rounded-[28px] w-full"
        />
      </div>
      <div className={`p-4 space-y-4 `}>
        <h4 className="heading-4">Tailored AI Solutions</h4>
        <div className="space-y-3">
          <p className="body-text">
            Empower your business with tailored AI. Streamline operations, drive
            innovation, and stay ahead with custom solutions.
          </p>
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
