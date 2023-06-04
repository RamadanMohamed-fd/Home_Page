import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Title'
import useWindowSize from '../useWindowSize';
import SwiperSection from '../SwiperSection';
const ExquisiteHandicrafts = () => {
  const size=useWindowSize();
  let x=3
  if(size.width <= 960 && size.width >=533){
    x=2
  }else if(size.width<=533){
    x=1
  }
  return (
    <div id='exquisite_handicrafts' className=' w-full relative'>
    <Banner img="bg-[url('/Handicraft/DSC_08690.jpg')] " title=" Exquisite Handicrafts Collection" sup="Exclusive Offers" style="md:text-[4rem]" bg="bg-red-50/20 "/> 
    <div id='mesmerica_arts' className=" py-8 w-full relative bg-white flex flex-col justify-center items-center">
    <Title title="Handicraft Collection" sup="Exclusive Gallery" style="my-4"/>
    <div className='py-5 md:w-[80%] w-[95%] m-auto  flex flex-col justify-center items-center'>
    <SwiperSection x={x}/>
    </div>
    <div className=' e_btn  btn  ' ><a href='#intricate_handlooms'>Explore More </a></div>
 </div> 
    </div>
  )
}

export default ExquisiteHandicrafts