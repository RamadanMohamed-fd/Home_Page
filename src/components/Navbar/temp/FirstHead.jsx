import React,{useEffect,useState} from 'react'
import { AiTwotonePhone,AiOutlineDown,} from "react-icons/ai";
import { BsFillPersonFill,BsFillSuitHeartFill } from "react-icons/bs";
import Main_icons from './Main_icons';


const FirstHead = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={``} >
    <div className={`flex ${offset>=100 &&" bg-slate-50 text-slate-600 h-8 z-[510]"} justify-between items-center tracking-wider px-12 py-[0px] font-normal  text-[14px] bg-[var(--color-default)] text-[var(--color-primary)]  max-[570px]:hidden`}>
      <div className="flex justify-between items-center gap-6 ml-[4.3rem]">
        <p className='hidden xl:block'>Welcome to CraftIndika</p>
        <div title='call number' className="xl:flex justify-evenly items-center hidden ">
         <AiTwotonePhone className="text-base"/>  
        <p className="ml-2">Call Us: +91-9827894737 </p>
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 mr-[7%] w-[15rem] ">
        <div className="flex justify-between  items-center ">
        <BsFillSuitHeartFill/>
        <p className="ml-2 underline hover:no-underline"><a href='#'>Wishlist</a></p>
        </div>
        <div className="flex justify-between items-center relative group/t py-2.5">
          <BsFillPersonFill/>
          <p className="mx-2 cursor-pointer ">My account</p>
          <ul className=' bg-gray-50 text-[16px] absolute rounded-md  -top-[10rem] opacity-0 group-hover/t:animate-moveUp right-0 text-black p-4 z-[510] w-40 '> 
            <li className='m-2.5  underline hover:no-underline'><a href='#'>Login</a></li>
            <li className='m-2.5 underline hover:no-underline'><a href='#'>Register</a></li>
            <li className='m-2.5 '><a href='#'>Logout</a></li>
          </ul>
          <AiOutlineDown/>
        </div>
      </div>
    </div>

    <div className='min-[570px]:hidden bg-[var(--color-secondary)] fixed  w-full bottom-0 flex justify-evenly items-center text-[24px] text-slate-400 cursor-pointer z-[200]'>
      
      <Main_icons className="group-hover/i:animate-moveDown1 bottom-[-10rem] -right-[0px]" className1="group-hover/i:animate-moveDown1 bottom-[-8rem] -right-[160px]"/>
      <BsFillSuitHeartFill/>
      
      <div className="p-4  group/i  ">
        <BsFillPersonFill/>
        <div className=" absolute z-[106] max-sm:-right-0 opacity-0 group-hover/i:animate-moveDown1 bottom-[-10rem]">
          <ul className=' bg-white text-[16px] rounded-md text-black p-4  w-40 '> 
            <li className='m-2.5  underline hover:no-underline'><a href='#'>Login</a></li>
            <li className='m-2.5 underline hover:no-underline'><a href='#'>Register</a></li>
            <li className='m-2.5 '><a href='#'>Logout</a></li>
          </ul>
        </div>
      </div>
      
     
    </div>
  </div>
  )
}

export default FirstHead