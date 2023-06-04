import Image from 'next/image'
import React from 'react'

const Icons = () => {
  return (
<div className='bg-white py-12 w-full flex  justify-center items-center'>
<div className=' w-[80%] flex justify-evenly flex-wrap items-cente max-sm:w-[95%]'>
        <span className='w-[100px] p-4 flex justify-center items-center'><Image src="/IconsSection/1.jpg" width={500} height={500} placeholder='blure'/></span>
        <span className='w-[100px] p-4 flex justify-center items-center'><Image src="/IconsSection/2.png" width={500} height={500} placeholder='blure'/></span>
        <span className='w-[100px] p-4 flex justify-center items-center'><Image src="/IconsSection/3.jpg" width={500} height={500} placeholder='blure'/></span>
        <span className='w-[100px] p-4 flex justify-center items-center'><Image src="/IconsSection/4.jpg" width={500} height={500} placeholder='blure'/></span>
        <span className='w-[100px] p-4 flex justify-center items-center'><Image src="/IconsSection/th.jfif" width={5000} height={200} placeholder='blure'/></span>
    </div>
</div>
  )
}

export default Icons