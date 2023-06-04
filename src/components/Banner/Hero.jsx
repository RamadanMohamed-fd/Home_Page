import React from 'react'

import Swip from "./Swip"
import dynamic from 'next/dynamic'
const Dynimic = dynamic(()=>import("./Swip"),{
  loading:()=><p>loading....</p>
}
)
const Hero = () => {
  return (
    <div className="  w-full bg-white ">
      <Dynimic/>
    </div>


  )
}

export default Hero

