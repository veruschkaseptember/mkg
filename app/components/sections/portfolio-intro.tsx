// components/sections/portfolio-intro.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  {
    src: '/lourens.png',
    title: 'Lourens Garden in Somerset West',
  },
];

export default function PortfolioIntro() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-[1440px] mx-auto">
        {/* Text Content */}
        {/* ... previous content remains the same ... */}

        {/* Carousel Section */}
        <div className="relative mb-20">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="w-full h-[909px]">
            {images.map((image) => (
              <SwiperSlide key={image.src} className="relative">
                <div className="relative w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute bottom-8 left-0 right-0 z-10">
                    <h3 className="text-[23px] text-[#FDFCFA] font-bold text-center">
                      {image.title}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button
            className="swiper-button-prev absolute left-8 top-1/2 -translate-y-1/2 z-10
              w-[59px] h-[59px] rounded-full bg-[rgba(178,99,154,0.3)]
              flex items-center justify-center">
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="swiper-button-next absolute right-8 top-1/2 -translate-y-1/2 z-10
              w-[59px] h-[59px] rounded-full bg-[rgba(178,99,154,0.3)]
              flex items-center justify-center">
            <span className="sr-only">Next</span>
          </button>

          {/* Pagination Dots */}
          <div className="swiper-pagination !-bottom-12 relative flex justify-center gap-4" />
        </div>
      </div>
    </section>
  );
}
