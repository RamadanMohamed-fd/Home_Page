import React from 'react'
import { TopCollection_data } from './top_collection/TopCollection_data';

import { BsArrowLeftSquareFill,BsArrowRightSquareFill,BsBalloonHeartFill } from "react-icons/bs";
import Heart from './top_collection/Heart';
import Cart from './top_collection/Cart';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/grid";
// import "./styles.css";
// import required modules
import { Pagination, Navigation,Grid } from "swiper";
const SwiperSection = (props) => {
  return (
    <Swiper
    className="group/i  w-[100%] "
        slidesPerView={props.x}
        spaceBetween={0}
        
        grid={{
          rows: 2,
          fill:"row",
        }}
        // loop={true}
        navigation={{
          nextEl:".button-next-slide",
          prevEl:".button-prev-slide"
        }}
        modules={[Grid,Pagination, Navigation]}>
      <div className=" ">
        {TopCollection_data.map((product, i) => (
        <SwiperSlide>
         <div key={i} className=" p-1 m-auto bg-slate-50   h-[180px] max-w-[320px] shadow-md rounded-md border-2 cursor-pointer flex">
          <div className="group relative w-[50%]  h-full">
            <img className="w-full h-full object-cover rounded-t-md transition duration-300 ease-in-out"
             src={product.img1} />
           <div className='text-3xl hover:scale-[1.2] duration-200 absolute z-40 right-0 bottom-0 m-2 '>
                  <Heart icon1={BsBalloonHeartFill} icon2={BsBalloonHeartFill} />
                </div>
            <img className="w-full h-full object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 rounded-t-md transition duration-300 ease-in-out"
             src={product.img2} />
          </div>
         
        <div className=' w-[45%] pt-4 h-[180px]'>
          <h3 className="text-md ml-2 text-lg ">{product.name}</h3>
          <h2 className="text-xl  ml-2 pb-1  border-b-2 text-[#ff4c3b]">{product.price}</h2>
          <div className='flex items-center pt-6  justify-center'>
            <Cart item={product}/>
          </div>  
        </div>  
      </div>
        </SwiperSlide>
      ))}
     </div>
     <div className='button-prev-slide text-3xl grid place-items-center absolute z-10 top-[46%] hover:text-[var(--color-default)] duration-300 left-[0%] cursor-pointer text-slate-700 opacity-70  '><BsArrowLeftSquareFill/></div>
      <div className='button-next-slide text-3xl grid place-items-center absolute z-10 top-[46%] hover:text-[var(--color-default)] duration-300 right-[0%] cursor-pointer text-slate-700 opacity-70'><BsArrowRightSquareFill/></div>
      </Swiper>
  )
}

export default SwiperSection