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
    <label className="relative inline-flex items-center cursor-pointer w-max">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={handleToggle}
        className="sr-only"
      />
      <div className="w-14 h-8 bg-white rounded-full p-1 flex items-center transition-colors duration-300 custom-switch-shadow">
        <div
          className={`w-6 h-6 bg-primary rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
            theme === "light" ? "translate-x-0" : "translate-x-6"
          }`}
        >
          {theme === "light" ? (
            <FaSun className="text-white" />
          ) : (
            <FaMoon className="text-white" />
          )}
        </div>
      </div>
    </label>
  );
};
export default ThemeSwitch;
