import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
const Arrow = () => {
  return (
    <>
                <div className='button-prev-slide arrow left-0 md:group-hover:translate-x-12  group-hover:translate-x-8 -translate-x-32 '><IoIosArrowBack/></div>
      <div className='button-next-slide  arrow right-0 translate-x-32 md:group-hover:-translate-x-12  group-hover:-translate-x-8'><IoIosArrowForward/></div>
    </>
  )
}

export default Arrow