import React from 'react'
import SliderHover from '../Intricate Handlooms/SliderHover';
import Image from 'next/image';
const SectionProduct = (props) => {
  return (
    <div key={props.kay} className=' text-center'>
        <div  className="   m-auto rounded-t-lg overflow-hidden  cursor-pointer flex">
            <div className="group relative w-[100%] h-[270px]  xl:h-[290px]   duration-1000 ">
                <Image quality={100} src={props.img} width={350} height={350} objectFit='cover' placeholder='blure'/>
                <div className="absolute w-full h-full  top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                    <SliderHover/>
                </div>
            </div>
        </div>
    
        <div className="mt-4">
            <h4 className=" text-slate-600   tracking-wider text-[18px] f -mt-1">{props.title}</h4>
        </div>
    </div>
  )
}

export default SectionProduct
