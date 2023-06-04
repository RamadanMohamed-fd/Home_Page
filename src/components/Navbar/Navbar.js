import { useState,useEffect } from "react";
import  { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import LeftMenuMain from "./LeftMenu/LeftMenuMain";
import Menu from "./MiddleMenu/Menu";
import RightMenuMain from "./RightMenu/RightMenuMain";
import {GiHamburgerMenu} from "react-icons/gi";
import {HiOutlineSquaresPlus} from "react-icons/hi2";
import Image from "next/image";
import FirstHead from "./temp/FirstHead";
import CartContext from '@/store/Cart_context';
import CartItems from "./temp/CartItems";

const Navbar = () => {

  const cartCtx=useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)
  const [showLeftMenu,setShowLeftMenu]=useState(false);
  const showLeftMenuHandler=()=>{
    setShowLeftMenu(!showLeftMenu);
  }

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => {setOffset(window.pageYOffset)};
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []); 
const [showMenu,setShowMenu]=useState(false);
  return (
   <div>
     <div className={`${(showMenu && offset>100)&& "fixed animate-topdown flex flex-col z-[500] w-full "}`}>
      {(showMenu && offset>100) && <FirstHead/>}
      <div className="flex justify-between bg-gray-50 pt-2 shadow-md right-0 left-0 w-full xl:items-start  px-[4.8%]  z-[250]">
      <div className="flex max-[570px]:justify-between relative h-[100px]  items-center ">
        <span className="text-[1.8rem] absolute left-[10%]  cursor-pointer   duration-200 hover:text-[var(--color-default)] text-slate-600" onClick={showLeftMenuHandler}><GiHamburgerMenu/></span>
        <Image src="/CraftIndika.png" alt="Logo " className="ml-12 pr-8 " width="300" height="200"></Image>
      </div>
      
      <div className="flex justify-center items-center">
      <RightMenuMain />
        <Menu />
       <LeftMenuMain show={showLeftMenu} getBack={showLeftMenuHandler}/>
      </div>
      </div>
    </div>
    
    <div className={`  ${offset>=100 ? "translate-x-0":"translate-x-[100px]"} duration-700  text-center w-14  text-2xl flex flex-col justify-center items-center -mr-2 fixed top-[25%] right-0 z-[2000]`}>
    <div className=" p-1  rounded-s-md mb-2 cursor-pointer bg-[#eee]" onClick={()=>setShowMenu(!showMenu)} >
      <HiOutlineSquaresPlus className="m-2"/>
    </div>
    <div className="p-1 rounded-s-md  bg-[#eee] cursor-pointer relative group">
        <FaShoppingCart className="m-2  "/>
        <span className="bg-[var(--color-default)] left-5 text-xs top-3 absolute h-4 flex justify-center items-center text-white 
        rounded-full cursor-pointer w-4
        ">{numberOfCartItems}</span>
        <div className=' absolute hidden z-[500]  group-hover:block'>
          <CartItems items={cartCtx.items}/>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;