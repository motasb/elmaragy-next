"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { swiperItems } from "@/lib/data";

const MySwiperComponent = () => {

  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      speed={800}
      pagination={{ clickable: true }}
      className="myswiper"
    >
      {swiperItems.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide-container !mb-7 flex justify-around items-center section p-3 md:p-5 gap-3 md:h-[80vh] bg-background-secondary rounded-2xl">
            <div className="animate-shine md:text-2xl lg:text-3xl font-semibold">
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
            </div>
            <div className="w-6/12 md:w-auto">
              <Image
                src={item.photo}
                alt="book"
                width={400}
                height={400}
                className="h-40 w-auto m-auto"
                priority
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
