import React from 'react'
import { BsInstagram } from "react-icons/bs"
const InstSaction = () => {
  return (
    <div className="  border-2 shadow-sm rounded-lg  relative group cursor-pointer">
    <img
      className="w-full h-full object-cover rounded-lg"
      src="https://images.unsplash.com/photo-1597175848600-5ef8d4d15c30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
    />
    <span className="absolute top-3 left-3 max-sm:text-[1.5rem] text-[2.5rem] group-hover:top-[50%] group-hover:translate-x-[-50%] group-hover:translate-y-[-50%] group-hover:left-[50%] group-hover:text-red-400 text-white max-sm:group-hover:text-[6rem] group-hover:text-[8rem] group-hover:-rotate-90 group-hover:scale-50 duration-[0.7s] ease-in-out">
      <BsInstagram />
    </span>
  </div>
  )
}

export default InstSaction