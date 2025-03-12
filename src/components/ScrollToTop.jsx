"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowRoundUp } from "react-icons/io";

const ScrollToTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <motion.button
      className="fixed bottom-8 right-8 w-12 h-12 bg-primary rounded-full flex items-center justify-center overflow-visible group"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      style={{
        zIndex: 50,
      }}
    >
      <svg className="absolute w-full h-full rotate-90" viewBox="0 0 44 44">
        <circle
          className="stroke-white/20"
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="2"
          fill="none"
        />
        <circle
          className="stroke-white transition-all duration-300"
          cx="22"
          cy="22"
          r={radius}
          strokeWidth="2"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>

      <IoIosArrowRoundUp className="text-white z-10 text-2xl" />
    </motion.button>
  );
};

export default ScrollToTop;
