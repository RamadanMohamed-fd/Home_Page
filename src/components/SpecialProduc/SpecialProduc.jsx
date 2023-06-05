import Image from 'next/image';
import Title from '../Title'
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BsArrowLeftSquareFill,BsArrowRightSquareFill } from "react-icons/bs";
import useWindowSize from '../useWindowSize';
import SectionProduct from './SectionProduct';
const SpecialProduc = () => {
    const size=useWindowSize();
    let x=3
    if(size.width <= 960 && size.width >=550){
      x=2
    }else if(size.width<=550){
      x=1
    }
  const images=["/BlogImages/1.jpg","/BlogImages/2.jpg","/BlogImages/3.jpg","/BlogImages/4.jpg","/BlogImages/5.png"]  
  const title=["Peacock Silver Filigree Earring","Dhokra Casted Bullock Cart","The Golden Boat Ride","Destiny of Lover Applique Umbrella","Trendy Pure Jute Bags"]
  return (
  <div id='curated_collections' className=" bg-white w-full">
    <Title title="CraftIndika Curation" sup="Special Product" style="p-2 pt-12"/>
    <div className=" py-10 xl:w-[75%] max-[960px]:w-[80%] w-[90%] m-auto flex flex-col justify-center items-center  ">
    <Swiper
    className="relative"
        slidesPerView={x}
        spaceBetween={10}
        // loop={true}
        navigation={{
          nextEl:".button-next-slide",
          prevEl:".button-prev-slide"
        }}
        modules={[Pagination, Navigation]}>
        <div className="  ">
          {images.map((image,i)=>(
              <SwiperSlide>
              <SectionProduct img={image} title={title[i]} i={i} />
            </SwiperSlide>
          ))}
        </div>
        <div className='button-prev-slide text-3xl grid place-items-center absolute z-10 top-[40%] hover:text-[var(--color-default)] duration-300 left-0 cursor-pointer text-slate-700 opacity-70  '><BsArrowLeftSquareFill/></div>
      <div className='button-next-slide text-3xl grid place-items-center absolute z-10 top-[40%] hover:text-[var(--color-default)] duration-300 right-0 cursor-pointer text-slate-700 opacity-70'><BsArrowRightSquareFill/></div>
      </Swiper>
    </div>
  </div>
  )
}

export default SpecialProduc
