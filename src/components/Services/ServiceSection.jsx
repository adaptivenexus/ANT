"use client";
import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import { useContext } from "react";
import { motion } from "framer-motion";

const ServiceSection = ({ image, orientation, title, list }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const variants = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className={`flex gap-10 items-center flex-col md:flex-row ${
        orientation === "left" && "md:flex-row-reverse"
      }`}
    >
      <motion.div
        className="flex-1 space-y-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
      >
        <h6
          className={`heading-4 ${
            theme === "dark" ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </h6>
        <ul>
          {list.map((item, index) => (
            <li
              key={index}
              className="subtitle-text text-secondary-foreground list-disc ml-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div
        className="flex-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={variants}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={500}
          className="w-full rounded-3xl h-full object-cover object-center"
        />
      </motion.div>
    </div>
  );
};

export default ServiceSection;
