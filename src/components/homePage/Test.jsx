'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// آیکون‌ها از react-icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function CustomSwiper() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* دکمه قبلی */}
      <button
        className="custom-prev  left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
      >
        <FaArrowLeft className="text-xl text-gray-700" />
      </button>

      {/* دکمه بعدی */}
      <button
        className="custom-next  right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
      >
        <FaArrowRight className="text-xl text-gray-700" />
      </button>

      {/* خود Swiper */}
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        spaceBetween={20}
        slidesPerView={1}
        loop 
        className=""
      >
        <SwiperSlide>
          <div className="bg-blue-300 p-10 rounded-xl text-center text-lg font-bold">
            اسلاید ۱
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-300 p-10 rounded-xl text-center text-lg font-bold">
            اسلاید ۲
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-red-300 p-10 rounded-xl text-center text-lg font-bold">
            اسلاید ۳
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
