"use client";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// import swiper react components and types
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

const MySwiperComponent = () => {
  const images = [
    {
      photo: "book1",
      h2: "مرحبًا بك في أكادمية المراغي لتعلم القرآن",
      p: "نوفر لك دروسًا متميزة لتعلم التجويد والتلاوة الصحيحة.",
    },
    {
      photo: "book2",
      h2: "من يرد الله به خيرا يفقه فى الدين",
      p: "نوفر لك دروسًا متميزة لتعلم التجويد والتلاوة الصحيحة.",
    },
    { photo: "book3", h2: "ان هذا الكتاب يرفع الله به اقوام ويحط اخرين"  },
  ];

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
      {images.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-slide-container !mb-7 flex justify-around items-center section">
            <div className="">
              <h2>{item.h2}</h2>
              <p>{item.p}</p>
            </div>
            <div>
              <Image
                src={`/images/books/${item.photo}.png`}
                alt="book"
                width={230}
                height={230}
                className="h-40 w-auto m-auto"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiperComponent;
