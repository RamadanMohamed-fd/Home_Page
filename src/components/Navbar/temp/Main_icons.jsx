import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { TfiSearch } from "react-icons/tfi";
import { FiSettings } from "react-icons/fi";
import {AiOutlineShoppingCart,AiFillSetting } from "react-icons/ai";
import CartContext from '@/store/Cart_context';
import CartItems from './CartItems';

const Main_icons = (props) => {
  const cartCtx=useContext(CartContext);

  const numberOfCartItems=cartCtx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount;
  },0)

  return (
  <div className=' flex  items-center justify-between'>
   <div className="cursor-pointer mx-3 max-sm:mx-5  py-4 relative group "> <TfiSearch/></div>
      <div className=" cursor-pointer py-4 mx-3 max-sm:mx-5 relative group">
        <AiOutlineShoppingCart/>
        <span className="bg-[var(--color-default)] left-3 text-sm top-3 absolute h-5 flex justify-center items-center text-white 
        rounded-full cursor-pointer w-5
        ">{numberOfCartItems}</span>
        <div className=' absolute hidden z-[500]  group-hover:block'>
          <CartItems items={cartCtx.items}/>
        </div>
      </div>
    
      <div className="py-4 max-sm:mx-5 mx-3 cursor-pointer  group/i  relative ">
        <FiSettings/>
        <div className={` absolute z-[106]  -right-3  opacity-0 ${props.className}`}>
          <ul className=' bg-gray-50 text-[16px] rounded-md text-black p-[.7rem]  w-40 '> 
            <li className='m-1 text-lg'>Language
            <ul>
              <li className='m-1 ml-2 text-base cursor-pointer'>English</li>
              <li className='m-1 ml-2 text-base cursor-pointer'>Fransh</li>
            </ul>
            </li>
            <li className='m-1 text-lg'><a href='#'>Currency</a></li>
          </ul>
        </div>
      </div> 
    </div>
  )
}

export default Main_icons