"use client";

import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import { useContext, useState } from "react";
import { MdMenu } from "react-icons/md";
import MobileNav from "./MobileNav";

import { usePathname } from "next/navigation";
import { ThemeContext } from "@/providers/ThemeProvider";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const { theme } = useContext(ThemeContext);

  return (
    <header
      className={`text-white flex justify-center ${
        pathname === "/" ? "fixed top-0" : "sticky top-0"
      } top-0 z-20 w-full`}
    >
      <div
        className={`mx-auto  ${
          theme === "light" ? "bg-[#6e15fd]" : "bg-[#6e15fd]"
        } bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-55 flex items-center justify-between  w-full max-w-[1280px] 2xl:max-w-[1600px] top-0 py-5 px-11 rounded-b-[60px] `}
      >
        <div className="flex-1">
          <Link href="/" className="heading-4 md:heading-3 block">
            ANT.
          </Link>
        </div>
        <div className="flex items-center justify-center gap-8 ">
          <ul className="md:flex items-center gap-4 lg:gap-6 subtitle-text hidden">
            <li>
              <Link
                href={"/#hero"}
                className={`relative w-max ${
                  pathname === "/"
                    ? "underlineOpen text-white"
                    : "underlineHover text-white"
                }`}
              >
                <span>Home</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/#about"}
                className={`relative w-max ${
                  pathname === "#about"
                    ? "underlineOpen text-white"
                    : "underlineHover text-white"
                }`}
              >
                <span>About us</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/make-payment"}
                className={`relative w-max ${
                  pathname === "/make-payment"
                    ? "underlineOpen text-white"
                    : "underlineHover text-white"
                }`}
              >
                <span>Make Payment</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/services"}
                className={`relative w-max ${
                  pathname === "/services"
                    ? "underlineOpen text-white"
                    : "underlineHover text-white"
                }`}
              >
                <span>Services</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/contact-us"}
                className={`relative w-max ${
                  pathname === "/contact-us"
                    ? "underlineOpen text-white"
                    : "underlineHover text-white"
                }`}
              >
                <span>Contact us</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white"></span>
              </Link>
            </li>
            <li>
              <Link
                href={"/blogs"}
                className={`relative w-max ${
                  pathname === "/blogs"
                    ? "underlineOpen text-white"
                    : "underlineHover text-white"
                }`}
              >
                <span>Blogs</span>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-[2px] bg-white"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-[2px] bg-white"></span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex items-center justify-end gap-3">
          <ThemeSwitch />
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            type="button"
            className="md:hidden"
          >
            <MdMenu size={32} />
          </button>
        </div>
      </div>
      {isNavOpen && (
        <div
          onClick={() => setIsNavOpen(false)}
          className="inset-0 fixed z-0 block lg:hidden"
        ></div>
      )}
      <MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
    </header>
  );
};
export default Header;
