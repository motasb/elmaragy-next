'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Image from 'next/image';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="bg-background-secondary py-16 rounded-3xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-10 text-center">
          <p className="text-sm text-primary font-semibold uppercase">Real Customers Reviews</p>
          <h2 className="text-3xl font-bold mt-2">What people say</h2>
          <p className="text-primary font-semibold mt-1">See what our customers have to say about their experience.</p>
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-transparent">
          </div>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 z-10">
          <div className="bg-transparent">
          </div>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-background p-6 rounded-xl shadow-md text-center h-full flex flex-col justify-between min-h-[350px]">
                <p className=" mb-4 min-h-[170px]">{item.text}</p>
                <div className="flex justify-center mb-2 ">
                  <div className="flex text-yellow-400 text-lg">★★★★★</div>
                </div>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-semibold">{item.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
