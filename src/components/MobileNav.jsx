"use client";
import Link from "next/link";
import {
  FaBook,
  FaHome,
  FaInfoCircle,
  FaNewspaper,
  FaQuestion,
  FaTags,
} from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { MdPayment } from "react-icons/md";

const MobileNav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav
      className={`mobile-navbar ${
        isNavOpen ? "mobNavIsOpen" : null
      } shadow-lg md:hidden sm:tabNavSize flex flex-col py-10 px-10 gap-5 relative justify-center z-20`}
    >
      <ul className="space-y-3 border-b border-borderColor w-full py-5 transition-all duration-500 text-foreground">
        <li
          onClick={() => setIsNavOpen(false)}
          className="flex gap-2 items-center"
        >
          <FaHome className="text-primary" />
          <Link href="/" className="text-xl">
            Home
          </Link>
        </li>

        <li
          onClick={() => setIsNavOpen(false)}
          className="flex gap-2 items-center"
        >
          <FaInfoCircle className="text-primary" />
          <Link href="/#about" className="text-xl">
            About us
          </Link>
        </li>

        <li
          onClick={() => setIsNavOpen(false)}
          className="flex gap-2 items-center"
        >
          <FaBook className="text-primary" />
          <Link href="/services" className="text-xl">
            Services
          </Link>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="flex gap-2 items-center"
        >
          <MdPayment className="text-primary" />
          <Link href="/make-payment" className="text-xl">
            Make a Payment
          </Link>
        </li>

        <li
          onClick={() => setIsNavOpen(false)}
          className="flex gap-2 items-center"
        >
          <FaQuestion className="text-primary" />
          <Link href="/contact-us" className="text-xl">
            Contact us
          </Link>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="flex gap-2 items-center"
        >
          <FaNewspaper className="text-primary" />
          <Link href="/blogs" className="text-xl">
            Blogs
          </Link>
        </li>
      </ul>

      <h2 className="heading-4 text-foreground text-center">ANT.</h2>

      <button
        onClick={() => setIsNavOpen(false)}
        className="closeBtn block text-primary"
      >
        <IoCloseOutline size={32} />
      </button>
    </nav>
  );
};
export default MobileNav;
