import React, { useEffect, useState } from 'react'
import ReactDOM from "react-dom" 
import {AiOutlineClose} from "react-icons/ai";
const View = ({show,onClose,children}) => {
    const [isBrowser,setIsBroser]=useState(false);
    useEffect(()=>{
        setIsBroser(true)
},[])
    const handleClose=(e)=>{
        e.preventDefault();
        onClose()
    }
    const modelContent=show ? (
        <div className='bg-[rgba(0,0,0,0.2)] top-0 h-full w-full z-[300] fixed overflow-hideen'>
            <div>
                <div>
                    <a href="#" onClick={handleClose} className='hover:scale-[1.05] duration-200 absolute right-0 font-semibold 
                    text-lg bg-white flex justify-center items-center
                     w-10 h-10 shadow-xl  m-2 rounded-full z-[301]  hover:text-[var(--color-default)]'>
                        <button ><AiOutlineClose/></button>
                    </a>
                </div>
                <div>{children}</div>
            </div>
        </div>
    ):null;
    if(isBrowser){
        return ReactDOM.createPortal(
            modelContent,
            document.querySelector("#view-root"))
    }
    else return null

}

export default View