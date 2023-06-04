import React from 'react'
import Banner from '../Banner/Banner'
import Title from '../Title'
import useWindowSize from '../useWindowSize';
import SwiperSection from '../SwiperSection';
const IntricateHandlooms = () => {
  const size=useWindowSize();
  let x=3
  if(size.width <= 960 && size.width >=533){
    x=2
  }else if(size.width<=533){
    x=1
  }
  return (
    <div id='intricate_handlooms' className=' relative w-full'>
    <Banner img="bg-[url('/Handloom/Saree.jpg')] " title="Intricate Handlooms Collection" sup="Exclusive Offers" style="md:text-[4rem]" bg="bg-red-50/20 "/> 
    <div id='mesmerica_arts' className=" py-8 w-full relative bg-white flex flex-col justify-center items-center">
    <Title title="Handloom Collection" sup="Exclusive Gallery" style="my-4"/>
    <div className='py-5 md:w-[80%] w-[95%] m-auto  flex flex-col justify-center items-center'>
    <SwiperSection x={x}/>
    </div>
    <div className='btn e_btn ' ><a href='#intricate_handlooms'>Explore More </a></div>
 </div> 
    </div>
  )
}

export default IntricateHandlooms







{/* <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                 <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full h-[250px] bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1632907706046-49b7eba9c62d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')]">
                <div className="absolute w-full h-full top-0 left-0 grid grid-rows-3 grid-cols-4 group">
                  <SliderHover/>
                </div>
              </div>
              <div className="flex items-center flex-col relative mt-3">
                <h4 className="text-red-400 text-lg">29 January 2022</h4>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorem ipsum dola Lorem ipsum dola
                </h3>
                <h3 className="text-[1.2rem] font-bold uppercase">
                  Lorm Ipsum dolar
                </h3>
                <div className="w-[2/4] h-[2px] bg-red-400"></div>
                <p className="text-md text-gray-400 font-semibold">
                  by by John Dio, 2 comment
                </p>
              </div>
            </SwiperSlide> */}