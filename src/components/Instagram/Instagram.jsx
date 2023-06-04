import Title from '../Title'
import InstSaction from './InstSaction'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { EffectCards } from "swiper";
const Instagram = () => {
  return (
    <div className='bg-white w-full h-full'>
        <Title title="#INSTAGRAM"/>
        <div className=" max-w-[450px] overflow-hidden  m-auto max-sm:px-16 p-10">
    <Swiper
        effect={"cards"}
        grabCursor={true}
        loop={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
            <InstSaction/>
        </SwiperSlide>
        <SwiperSlide>
            <InstSaction/>
        </SwiperSlide>
        <SwiperSlide>
            <InstSaction/>
        </SwiperSlide>
        <SwiperSlide>
            <InstSaction/>
        </SwiperSlide>
        <SwiperSlide>
            <InstSaction/>
        </SwiperSlide>
        <SwiperSlide>
            <InstSaction/>
        </SwiperSlide>
      </Swiper>
      </div>
</div>
  )
}

export default Instagram