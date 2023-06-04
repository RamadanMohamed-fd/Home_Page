
import React from 'react'
const Banner = (props) => {
  return (

  <div className={`flex items-center bg-center  justify-center relative md:py-40 sm:py-24 bg-no-repeat bg-cover  max-sm:py-20   ${props.img} bg-fixed`}>
     <div className="flex items-center  justify-center  ">
      <div className={`flex flex-col items-center max-sm:px-2 p-10 w-[70%] max-lg:w-[95%] rounded-xl shadow-xl justify-center  text-center border-2 ${props.bg}`}>
        <h1 className={`text-[var(--color-default)] mb-10 max-sm:mb-4  max-md:text-[3rem] max-sm:text-[1.8rem] font-bold ${props.style} uppercase`}> {props.title}</h1>
        <h1 className=" font-bold  mb-2 text-slate-700 text-center md:text-[2rem] max-md:text-[1.8rem] max-sm:text-[1.3rem] uppercase">{props.sup}</h1>
        <div className="w-fit px-6 py-2 tracking-wider   font-bold bg-[var(--color-default)]  text-white text-xl btn shadow-xl ">Shop Now</div>
      </div>
    </div>
      </div>
  )
}

export default Banner