"use client";

import Link from "next/link";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";
import { usePathname } from "next/navigation";
import { FaXTwitter } from "react-icons/fa6";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { MdMailOutline, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  const logos = [
    {
      url: "/powered-by/aws.png",
      alt: "aws",
    },
    {
      url: "/powered-by/chatgpt.png",
      alt: "chatgpt",
    },
    {
      url: "/powered-by/copilot.avif",
      alt: "copilot",
    },
    {
      url: "/powered-by/microsoft.png",
      alt: "microsoft",
    },
    {
      url: "/powered-by/meta.png",
      alt: "meta",
    },
    {
      url: "/powered-by/openai.png",
      alt: "openai",
    },
    {
      url: "/powered-by/langchain.png",
      alt: "langchain",
    },
    {
      url: "/powered-by/gemini.png",
      alt: "gemini",
    },
    {
      url: "/powered-by/azure.png",
      alt: "azure",
    },
  ];

  const pathname = usePathname();
  return (
    <div className="mt-32">
      {/* {pathname === "/" && (
        <Marquee speed={200} className="w-full bg-slate-200 py-10">
          <div className="flex items-center">
            {logos.map((logo, index) => (
              <div
                className="aspect-video h-[120px] flex items-center mr-20"
                key={index}
              >
                <Image
                  src={logo.url}
                  width={500}
                  height={500}
                  alt={logo.alt}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </Marquee>
      )} */}
      <section className=" bg-accent-primary">
        {pathname !== "/contact-us" && (
          <div className="space-y-6 flex flex-col items-center py-16 text-center">
            <h3 className="heading-3">Get in Touch</h3>
            <p className="subtitle-text-2 text-secondary-foreground">
              We're Here to Collaborate and Help You Achieve Your Vision!
            </p>
            <Link
              href={"/contact-us"}
              className="px-5 py-3 rounded-full bg-primary subtitle-text text-white"
            >
              Contact Us
            </Link>
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
              <div className="flex gap-16 flex-col md:flex-row">
                <div className="flex-1 space-y-6">
                  <div className="subtitle-text space-y-5">
                    <h6 className="font-semibold text-white">Quick Links</h6>
                    <nav className="space-y-14">
                      <ul className="text-[#95909B] space-y-2">
                        <li>
                          <Link href={"/"} className="">
                            Home
                          </Link>
                        </li>
                        <li>
                          <Link href={"/#about"} className="">
                            About
                          </Link>
                        </li>
                        <li>
                          <Link href={"/services"} className="">
                            Services
                          </Link>
                        </li>
                        <li>
                          <Link href={"/contact-us"} className="">
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="space-y-3 md:block hidden">
                    <div className="flex gap-6 items-center text-white">
                      <a
                        href="https://www.linkedin.com/company/adaptive-nexus-technologies/"
                        target="_blank"
                        className="block"
                      >
                        <FaLinkedin size={32} />
                      </a>
                      <a href="/" target="_blank" className="block">
                        <FaFacebookSquare size={32} />
                      </a>
                      <a href="/" target="_blank" className="block">
                        <FaXTwitter size={32} />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="subtitle-text space-y-5">
                    <h6 className="font-semibold text-white opacity-0">
                      Quick Links
                    </h6>
                    <nav className="space-y-14">
                      <ul className="text-[#95909B] space-y-2">
                        <li>
                          <Link href={"/blogs"} className="">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link href={"/#casestudies"} className="">
                            Case Studies
                          </Link>
                        </li>
                        <li>
                          <Link href={"/terms-and-conditions"} className="">
                            Terms and Conditions
                          </Link>
                        </li>
                        <li>
                          <Link href={"/privacy-policy"} className="">
                            Privacy Policy
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="space-y-3 md:hidden block">
                  <div className="flex gap-6 items-center text-white">
                    <a
                      href="https://www.linkedin.com/company/adaptive-nexus-technologies/"
                      target="_blank"
                      className="block"
                    >
                      <FaLinkedin size={32} />
                    </a>
                    <a href="/" target="_blank" className="block">
                      <FaFacebookSquare size={32} />
                    </a>
                    <a href="/" target="_blank" className="block">
                      <FaXTwitter size={32} />
                    </a>
                  </div>
                </div>
                <div className="space-y-20">
                  <h3 className="heading-3 text-white md:text-end">ANT.</h3>
                  <div className="flex flex-col md:items-end text-[#95909B] gap-5">
                    <div className="space-y-3 md:text-end subtitle-text">
                      <p className="flex items-center gap-2">
                        <MdOutlinePhoneInTalk
                          size={20}
                          className=" text-white"
                        />
                        <span>(904) 800-9254</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MdMailOutline size={20} className=" text-white" />
                        <span>business@adaptivenexus.com</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-20 flex justify-between items-center">
                <p className="text-[#95909B] subtitle-text">
                  © 2025 — Copyright
                </p>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};
export default Footer;
