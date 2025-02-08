"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoIosArrowRoundUp } from "react-icons/io";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <section className="mt-32 bg-accent-primary">
      {pathname !== "/contact-us" && (
        <div className="space-y-6 flex flex-col items-center py-16 text-center">
          <h3 className="heading-3">Get in Touch</h3>
          <p className="subtitle-text-2 text-secondary-foreground">
            We're Here to Collaborate and Help You Achieve Your Vision!
          </p>
          <button
            type="button"
            className="px-5 py-3 rounded-full bg-primary subtitle-text text-white"
          >
            Contact Us
          </button>
        </div>
      )}
      <footer className="bg-accent-secondary py-16">
        <div className="wrapper space-y-10">
          {/* <div className="bg-[#420D97] flex text-white rounded-2xl overflow-hidden relative ">
            <div className="space-y-2 py-10 p-6 md:pr-20">
              <h4 className="heading-4">Do you need help?</h4>
              <p className="body-text">
                We will provide detailed information about our services, types
                of work, and top projects. We will calculate the cost and
                prepare a commercial proposal.
              </p>
              <button
                type="button"
                className="sm:hidden py-3 mt-2 px-5 md:px-5 bg-primary rounded-full hover:opacity-80 transition-all duration-300"
              >
                Get consultation
              </button>
            </div>
            <div className="bg-[#4B0FAB] hidden sm:flex items-center justify-center px-8 md:px-24 rounded-l-full opacity-0">
              <h5 className="heading-5 w-max">Get consultation</h5>
            </div>
            <div className="bg-[#4B0FAB] hidden sm:flex items-center justify-center px-8 md:px-24 rounded-l-full aspect-square absolute right-0 top-1/2 -translate-y-1/2">
              <h5 className="heading-5 w-max ">Get consultation</h5>
            </div>
          </div> */}
          <div>
            <div className="flex gap-16">
              <div className="flex-1">
                <div className="subtitle-text space-y-5">
                  <h6 className="font-semibold text-white">Pages</h6>
                  <nav className="space-y-14">
                    <ul className="text-[#95909B] space-y-2">
                      <li>
                        <Link href={"/"} className="">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"} className="">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"} className="">
                          Services
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"} className="">
                          Contact us
                        </Link>
                      </li>
                    </ul>
                    <div className="space-y-3">
                      <div className="h-[1px] w-full bg-[#95909B]"></div>
                      <Link
                        href={"/"}
                        className="flex justify-between items-center w-full py-4"
                      >
                        <span className="text-[#95909B]">Gmail</span>
                        <div>
                          <SiGmail color="#ffffff" />
                        </div>
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>

              <div className="flex-1">
                <div className="subtitle-text space-y-5">
                  <h6 className="font-semibold text-white">Quick Links</h6>
                  <nav className="space-y-14">
                    <ul className="text-[#95909B] space-y-2">
                      <li>
                        <Link href={"/"} className="">
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"} className="">
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"} className="">
                          Terms and Conditions
                        </Link>
                      </li>
                      <li>
                        <Link href={"/"} className="">
                          Privacy Policy
                        </Link>
                      </li>
                    </ul>
                    <div className="space-y-3">
                      <div className="h-[1px] w-full bg-[#95909B]"></div>
                      <Link
                        href={"/"}
                        className="flex justify-between items-center w-full py-4"
                      >
                        <span className="text-[#95909B]">Whatsapp</span>
                        <div>
                          <FaWhatsapp color="#ffffff" />
                        </div>
                      </Link>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="space-y-10">
                <h3 className="heading-3 text-white text-end">ANT.</h3>
                <div className="flex flex-col items-end text-[#95909B] gap-5">
                  <div className="h-[2px] w-12 bg-[#51485C]"></div>
                  <div className="space-y-3 text-end">
                    <p>+1 981 981-23-19</p>
                    <p>hello@logoipsum.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 flex justify-between items-center">
              <p className="text-[#95909B] subtitle-text">© 2025 — Copyright</p>
              <Link
                href={"#hero"}
                className="flex text-white p-2 border-[#95909B] border w-max rounded-full"
              >
                <IoIosArrowRoundUp size={40} />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};
export default Footer;
