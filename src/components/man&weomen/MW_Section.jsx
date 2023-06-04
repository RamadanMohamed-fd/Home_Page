import React from 'react'
import Image from 'next/image';
const MW_Section = (props) => {
  return (
    <div className=" relative flex  justify-evenly items-center group  overflow-hidden rounded-xl shadow-md cursor-pointer w-[370px] max-h-[250px] ">
          <div className=" group-hover:scale-[1.1] duration-500"><Image src={props.src_image} alt={props.alt} width={370} height={250} placeholder='blure'/></div>
          <div className=" absolute w-full font-medium h-[60px] group-hover:h-full group-hover:opacity-60 text-center bg-black opacity-80 flex flex-col justify-center items-center duration-200  bottom-0 ">
            <h3 className=" text-white max-sm:text-[.9rem] text-[1rem] tracking-wide ">{props.off}</h3>
            <p className=' text-[.9rem] max-sm:text-[.87rem] tracking-wide text-white'>{props.title} </p>
          </div>
          
    </div>
  )
}

export default MW_Section