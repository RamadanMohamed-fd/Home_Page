import Image from 'next/image'
import React from 'react'

const Section = (props) => {
  return (
  <div className="flex items-center group px-6 max-md:border-none last-of-type:border-none border-r-2 py-5 group justify-center flex-col ">
    <div className=" w-fit h-[100px] flex flex-col  items-start  cursor-pointer justify-center">
        <span className=' text-[#ff4c3b] text-[4rem] translate-x-10  group-hover:translate-x-0 duration-[500ms]'>
            {props.children}
        </span>
        <div className='flex flex-col -mt-  items-start justify-center'>
            <h3 className="text-xl font-semibold  group-hover:text-[#ff4c3b] text-[var(--color-default)] duration-500 font-mono">{props.sub}</h3>
            <p className="text-[20px] sm:text-[18px] text-slate-500 ">{props.title}</p>
        </div>                             
    </div>
  </div>
  )
}

export default Section