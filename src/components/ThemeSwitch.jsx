"use client";

import { ThemeContext } from "@/providers/ThemeProvider";
import { useContext } from "react";

// Icons Import
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeSwitch = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={handleToggle}
      className="w-[56] p-1 rounded-full bg-white custom-switch-shadow relative"
    >
      <span
        className={`w-[24px] h-[24px] bg-primary rounded-full duration-300 flex items-center justify-center ${
          theme === "light" ? "translate-x-0" : "translate-x-[100%]"
        }`}
      >
        {theme === "light" ? (
          <FaSun className="text-white" />
        ) : (
          <FaMoon className="text-white" />
        )}
      </span>
    </button>
  );
};
export default ThemeSwitch;
