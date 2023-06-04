import React from 'react'
import {BsTwitter,BsFacebook,BsYoutube,BsPinterest,BsInstagram} from "react-icons/bs"
const News = () => {
  return (
    <div className='bg-[var(--color-default)] py-6  text-white flex flex-col justify-center items-center'>
      <p className='text-[2.2rem] max-sm:text-[2rem] mb-4 font-mono'>KEEP IN TOUCH</p>
      <div className='flex text-[2rem] justify-center items-center flex-wrap '>
        <a className='m-4 duration-150 hover:scale-[1.1] hover:text-[var(--color-default)] hover:bg-white p-1 rounded-full' href="#"><BsTwitter/></a>
        <a className='m-4 duration-150 hover:scale-[1.1] hover:text-[var(--color-default)] hover:bg-white p-1 rounded-full' href="#"><BsFacebook/></a>
        <a className='m-4 duration-150 hover:scale-[1.1] hover:text-[var(--color-default)] hover:bg-white p-1 rounded-full' href="#"><BsYoutube/></a>
        <a className='m-4 duration-150 hover:scale-[1.1] hover:text-[var(--color-default)] hover:bg-white p-1 rounded-full' href="#"><BsPinterest/></a>
        <a className='m-4 duration-150 hover:scale-[1.1] hover:text-[var(--color-default)] hover:bg-white p-1 rounded-full' href="#"><BsInstagram/></a>
      </div>
    </div>
  )
}

export default News


 