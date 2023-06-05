import React, { useContext, useState } from 'react'
import Title from '../Title'
import {TopCollection_data} from "./TopCollection_data";

import { BsArrowLeftSquareFill,BsArrowRightSquareFill,BsBalloonHeartFill } from "react-icons/bs";

import Heart from './Heart';
import Image from 'next/image';
import Cart from './Cart';
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import useWindowSize from '../useWindowSize';

const TopCollection = (props) => {
  const size=useWindowSize();
  const [categoryName,setCategoryName]=useState(true);
  const [categoryfilter,setCategoryfilter]=useState(true);
  const [b,setb]=useState(false)
  const [f,setf]=useState(false)
  const [r,setr]=useState(false)
 const handlb=()=>{
  setb(!b)
  setf(false)
  setr(false)
  setCategoryName("Best Seller")
  if(b===true){
    setCategoryfilter(true)
  }else{
    setCategoryfilter(false)
  }
 }
 const handlf=()=>{
  setb(false)
  setf(!f)
  setr(false)
  setCategoryName("Featured")
  if(f===true){
    setCategoryfilter(true)
  }else{
    setCategoryfilter(false)
  }
 }
 const handlr=()=>{
  setb(false)
  setf(false)
  setr(!r)
  setCategoryName("Recommended")
  if(r===true){
    setCategoryfilter(true)
  }else{
    setCategoryfilter(false)
  }
 }

  let x=4
  if(size.width <= 960 && size.width >=780){
    x=3
  }else if(size.width <= 780 && size.width>=450){
    x=2
  }else if(size.width<=450){
    x=1
  }
  return (
  <div id='top_collection' className=" mt-5 mb-10  w-full relative bg-white">
    <Title title="Top Collectoin" sup="Curated for You"/>
    <div className='pt-5 w-[90%] m-auto flex flex-col justify-center items-center'>
      <div className={`flex text-xl max-[500px]:text-[12px]   font-semibold py-4   `}>
        <div onClick={handlb} className={`cat ${!b?"text-slate-600":"bg-[var(--color-default)] rounded-md  text-white "} py-1`}>Best Seller</div>
        <div onClick={handlf} className={`cat ${!f?"text-slate-600":"bg-[var(--color-default)] rounded-md  text-white "} py-1`}>Featured</div>
        <div onClick={handlr} className={`cat ${!r?"text-slate-600":"bg-[var(--color-default)] rounded-md  text-white "} py-1`}>Recommended</div>
      </div>
    <Swiper
    className="relative group/i"
        slidesPerView={x}
        spaceBetween={15}
        loop={true}
        navigation={{
          nextEl:".button-next-slide",
          prevEl:".button-prev-slide"
        }}
        modules={[Pagination, Navigation]}>
        <div className=" ">
          {TopCollection_data.filter(!(categoryfilter)? (p)=>p.Category===categoryName:(p)=>true).map((product, i) => (
            <SwiperSlide>
           <div key={i} className="   shadow-md rounded-md cursor-pointer">
            <div className="group relative w-[100%]  overflow-hidden">
              <div className=' object-cover rounded-md transition duration-300 ease-in-out'>
                <Image src={product.img1} alt='Product_Image' width={500} height={500}/>
                <div className='text-3xl hover:scale-[1.2] duration-200 absolute z-40 right-0 bottom-0 m-2 '>
                  <Heart icon1={BsBalloonHeartFill} icon2={BsBalloonHeartFill} />
                </div>
              </div>
              <div className=' object-cover absolute top-0 left-0 -translate-x-[100vw] group-hover:translate-x-[0vw] rounded-md transition duration-500 ease-in-out'>
                <Image src={product.img2} alt='Product_Image' width={500} height={500}/>
              </div>
            </div>
            <div className='flex justify-evenly items-center my-2 '>
              <div className=' flex flex-col justify-evenly items-center text-center'>
                <h3 className="text-lg  pr-2">{product.name}</h3>
                <h1 className="text-lg text-center text-[#ff4c3b] mb-2">{product.price}</h1>
              </div>
              <Cart item={product}/>
            </div>
          </div>
        </SwiperSlide>
      ))}
      </div>
      <div className='button-prev-slide text-3xl grid place-items-center absolute z-10 top-[40%] hover:text-[var(--color-default)] duration-300 left-0 cursor-pointer text-slate-700 opacity-70  '><BsArrowLeftSquareFill/></div>
      <div className='button-next-slide text-3xl grid place-items-center absolute z-10 top-[40%] hover:text-[var(--color-default)] duration-300 right-0 cursor-pointer text-slate-700 opacity-70'><BsArrowRightSquareFill/></div>
      </Swiper>
      <div className='e_btn' ><a href='#intricate_handlooms'>Explore More </a></div>
    </div>
  </div>
  )
}

export default TopCollection