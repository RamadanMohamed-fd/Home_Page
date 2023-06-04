import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Arrow from "../Arrow";

export default function App() {
  return (
    <div className=" w-full h-[270px] xl:h-[600px] md:h-[450px] sm:h-[400px] m-auto relative group mb-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        loop={true}
        navigation={{
          nextEl:".button-next-slide",
          prevEl:".button-prev-slide"
        }}
         modules={[Autoplay, Pagination, Navigation]}
        className="group"
      >
        <SwiperSlide>
          <div className='w-full h-full rounded-2xl duration-500'>
         <Image quality={100}  fill alt="Banner_image" src={"/baner_image/Banner_1.jpg"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-full  bg-black transition duration-150 ease-in-out">
          <video src="/VIDEOS/1.mp4" alt="Banner_image" loop muted autoPlay/>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full rounded-2xl duration-500'>
         <Image quality={100} fill alt="Banner_image" src={"/baner_image/Banner-2.jpg"}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=" w-full  bg-black transition duration-150 ease-in-out">
          <video src="/VIDEOS/2.mp4" alt="Banner_image" loop className=" h-full " muted autoPlay />
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='w-full h-full rounded-2xl duration-500'>
         <Image quality={100} alt="Banner_image" fill src={"/baner_image/Banner_3.jpg"}/>
          </div>
        </SwiperSlide>
      
        <SwiperSlide>
        <div className=" w-full h-[450px] md:h-[550px] bg-black transition duration-150 ease-in-out">
          <video src="/VIDEOS/3.mp4" loop  className=" h-full " muted autoPlay />
        </div>
        </SwiperSlide>
          <Arrow/>
          <button className=" absolute btn z-[200] top-[80%] left-[15%]  bg-[var(--color-default)] text-white font-bold px-4 py-2 text-lg max-sm:text-xs rounded-md ">BUY NOW</button>
      </Swiper>
    </div>
  );
}
