import { BsPlusSquareFill } from "react-icons/bs";
import { AiFillMinusSquare } from "react-icons/ai";
const CartAmount = () => {
    
  return (
    <div className=' flex flex-col justify-evenly  items-center '>
    <span onClick={()=>setcounter(counter+1)} className="  text-2xl  duration-200 hover:text-[var(--color-default)]"><BsPlusSquareFill/></span>
    <div className={` 
         relative p-2 text-[var(--color-default)]`}>
        
        <span className="bg-[var(--color-default)] left-5 text-sm top-2 absolute h-5 flex justify-center items-center text-white 
        rounded-full cursor-pointer w-5
        ">{counter}</span>
      </div>
        <span onClick={()=>setcounter(counter-1)} className=" text-3xl  duration-200 hover:text-[var(--color-default)]"><AiFillMinusSquare/></span>
    </div>
  )
}

export default CartAmount