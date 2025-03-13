"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ThemeContext } from "@/providers/ThemeProvider";

const AboutUsCard = ({ name, description, image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex flex-col gap-6">
      <motion.div
        className={`rounded-full cursor-pointer h-max relative ${theme === "dark" ? "bg-white" : "bg-accent-secondary"}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 100, damping: 25 }}
      >
        <motion.div
          className="p-6 rounded-full bg-primary"
          animate={{ scale: isHovered ? 0.98 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <motion.div
            className="p-4 rounded-full bg-white"
            animate={{ scale: isHovered ? 0.98 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <Image
              src={image}
              alt={name}
              width={400}
              height={400}
              className="w-full h-full object-cover object-center aspect-square rounded-xl"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className={`mb-5 px-8 text-black w-full space-y-2 overflow-hidden ${theme === "dark" ? "text-black" : "text-white"}`}
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0,
            marginTop: isHovered ? "1rem" : 0,
            marginBottom: isHovered ? "1.25rem" : 0,
          }}
          initial={{ height: 0, opacity: 0, marginTop: 0, marginBottom: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 40,
            opacity: { duration: 0.2 },
          }}
        >
          <div className="py-2">
            <motion.h3
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                delay: 0.1,
              }}
              className="heading-5 text-center"
            >
              {name}
            </motion.h3>
            <motion.p
              animate={{
                opacity: isHovered ? 1 : 0,
                y: isHovered ? 0 : 10,
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
                delay: 0.2,
              }}
              className="text-center pb-8 w-full text-wrap"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {!isHovered && (
          <motion.h3
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="heading-5 text-center"
          >
            {name}
          </motion.h3>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AboutUsCard;
// return (
//   <div className="card h-[400px]">
//     <div className="card__content text-center relative p-20 transition-transform duration-1000 text-foreground font-bold w-full h-full">
//       <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-2 flex items-center justify-center w-full h-full   service-box-shadow rounded-xl overflow-hidden bg-border-gradient-about">
//         <div className="w-full h-full bg-about-box-shadow rounded-xl flex items-center justify-center">
//           <h3 className="heading-1 ">{name}</h3>
//         </div>
//       </div>
//       <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-2 flex items-center justify-center w-full h-full   service-box-shadow rounded-xl overflow-hidden bg-border-gradient-about">
//         <div className="w-full h-full bg-about-box-shadow rounded-xl flex items-center justify-center px-5 text-secondary-foreground">
//           <p
//             className={`body-text ${name === "Core Values" ? "text-xl" : "text-3xl"} font-normal  text-center`}
//           >
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>
// );
