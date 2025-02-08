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
import Image from "next/image";
import Link from "next/link";

export default ({ blogs }) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, FreeMode, Autoplay]}
      slidesPerView={1}
      spaceBetween={16}
      navigation={{
        nextEl: ".next-btn-swiper-blogs-home",
        prevEl: ".prev-btn-swiper-blogs-home",
      }}
      loop={true}
      pagination={{ enabled: false }}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
    >
      {blogs?.map((elem) => {
        return (
          <SwiperSlide key={elem._id} className="p-4 md:p-10">
            <div className="bg-accent-primary border p-5 md:p-12 rounded-3xl flex gap-10 shadow-xl items-center flex-col">
              <div className="flex-1 w-full">
                <Image
                  src={elem.imageUrl}
                  alt=""
                  width={800}
                  height={800}
                  className="rounded-3xl aspect-video shadow-xl w-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between min-h-full gap-4">
                <div className="space-y-5">
                  <h4 className="heading-5 md:heading-4 font-bold line-clamp-3 md:line-clamp-none">
                    {elem.title}
                  </h4>
                  <p className="body-text md:subtitle-text mt-2 text-secondary-foreground line-clamp-4 md:line-clamp-none">
                    {elem.overview}
                  </p>
                </div>
                <div className="flex-1 flex items-end justify-between">
                  <div className="space-y-2">
                    <p className="capitalize label-text  md:body-text text-secondary-foreground">
                      <span className="font-semibold">Author:</span>{" "}
                      {elem?.author?.name}
                    </p>
                    <p className="body-text text-secondary-foreground label-text  md:body-text">
                      <span className="font-semibold">Published Date:</span>{" "}
                      {elem?.publishedAt.slice(0, 10)}
                    </p>
                  </div>
                  <Link
                    href={`/blogs/${elem.slug.current}`}
                    className="btn-primary label-text p-4  md:body-text text-white w-max h-max"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
