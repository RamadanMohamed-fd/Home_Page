import React, { useState } from 'react'

import { BsCart4 } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai";


import Image from 'next/image';

const Product = ({product}) => {
  return (
    <div  className=" h-[100vh] w-[100%] shadow-md rounded-md  bg-white flex overflow-hidden">
            <div className="flex p-2 gap-2 items-center w-[60%]">
              <div className=' rounded-md group/i  overflow-hidden'>
                  <Image src={product.img1} className='group-hover/i:scale-[1.3] duration-700' alt='Product_Image' width={570} height={400}/>
              </div>
              <div className=' rounded-md group/i  overflow-hidden'>
                <Image src={product.img2} className='group-hover/i:scale-[1.3] duration-700' alt='Product_Image' width={570} height={400}/>
              </div>
            </div>
           
            <div className='flex justify-around h-[70%] m-10  mx-auto flex-col items-center'>
              <div className=' flex justify-center items-center flex-col gap-4'>
                <h3 className="text-7xl font-semibold ">{product.name}</h3>
                <h1 className="text-5xl m-5 text-center text-red-700 ">{product.price}</h1>
              </div>
              <div className='flex flex-col  text-4xl'>
              <span><BsCart4/></span>
                <span><AiOutlineHeart /></span>
              </div>
            </div>
        </div>
  )
}

export default Product