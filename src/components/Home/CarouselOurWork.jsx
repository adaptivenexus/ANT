"use client";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import WorkCard from "./WorkCard";

export default () => {
  const workCards = [
    {
      name: "Bluesky Innovate Website",
      description:
        "Redesigned the Bluesky Innovate website with a modern and user-friendly interface, enhancing the user experience and increasing site engagement by 50%.",
      image: "/Project1.png",
      url: "https://bluesky-innovate.com/",
      gradientAlignment: "right",
    },
    {
      name: "Muslim Chamber of Commerce",
      description:
        "Redesigned the Muslim Chamber of Commerce website with a modern and user-friendly interface, enhancing the user experience and increasing site engagement by 50%.",
      image: "/Project3.png",
      url: "https://mchamber.org/",
      gradientAlignment: "left",
    },

    {
      name: "SCAI: Custom Product Development",
      description:
        "The Product SCAI is a cutting-edge Document Management solution that leverages advanced AI technology to streamline data extraction, categorization, and retrieval processes.",
      image: "/Project2.png",
      url: "/work-in-progress",
      gradientAlignment: "right",
    },
  ];

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay]}
      slidesPerView={1}
      spaceBetween={40}
      navigation={{
        nextEl: ".next-btn-ourWork-swiper",
        prevEl: ".prev-btn-ourWork-swiper",
      }}
      loop={true}
      pagination={{ enabled: false }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      autoHeight={true}
      breakpoints={{
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {workCards.map((card, index) => (
        <SwiperSlide key={index} className="!h-full">
          <WorkCard {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
