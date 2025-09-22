"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const comments = [
  {
    id: 1,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt laborum provident dignissimos quis accusantium minima modi veniam magnam totam.",
    calender: "March 27. 2021",
    image: "/assets/logo/testimonial11.png",
    name: "Lee Doe",
  },
  {
    id: 2,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt laborum provident dignissimos quis accusantium minima modi veniam magnam totam.",
    calender: "March 27. 2021",
    image: "/assets/logo/testimonial11.png",
    name: "Lee Doe",
  },
  {
    id: 3,
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam deserunt laborum provident dignissimos quis accusantium minima modi veniam magnam totam.",
    calender: "March 27. 2021",
    image: "/assets/logo/testimonial11.png",
    name: "Lee Doe",
  },
];

const SliderComments = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 xl:px-10 py-16">
      <div className="flex flex-col lg:flex-row lg:gap-6 gap-20  lg:items-center lg:justify-between items-center ">
        {/* comments */}
        <div className=" flex flex-col gap-10 lg:w-[50%] w-full order-2 lg:order-1">
        <div className="">
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
            {comments.map((item) => (
              <SwiperSlide key={item.id}>
                <div className=" flex flex-col items-start gap-3">
                  <p className=" text-[#595959]">{item.des}</p>
                  <p className="">{item.calender}</p>
                  <div className=" flex justify-center gap-3 items-center">
                    <Image
                      src={item.image}
                      width={60}
                      height={60}
                      alt=""
                      className="rounded-full"
                    />
                    <p className="">{item.name}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* navigation buttons */}
          
        </div>
        <div className=" flex gap-4 items-center ">
            <button className="custom-prev p-3 rounded-sm    ">
            <FaArrowLeft className="text-xl text-[#FFB568]   " />
          </button>
          <button className="custom-next  p-3 rounded-sm   ">
            <FaArrowRight className="text-xl text-[#FFB568] " />
          </button>
        </div>
        </div>

        {/* image  */}
        <div className=' relative  order-1 md:order-2'>
                            <Image width={450} height={450} src="/assets/testimonial.png" alt='' className='w-[200px] xl:w-[450px] lg:w-[350px]  relative z-20 -top-5 xl:-top-9 left-6 xl:left-15'/>                   
                            {/* bg yellow */}
                            <div className=' absolute lg:w-[350px] lg:h-[350px] w-[200px] h-[200px] xl:w-[450px] xl:h-[450px] bg-[#FFB568] xl:-bottom-4 -bottom-2'  ></div>
        
                        </div>
        </div>
    </section>
  );
};

export default SliderComments;
