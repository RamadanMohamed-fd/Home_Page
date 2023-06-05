import React,{useState} from 'react'


const Heart = (props) => {
  
    const [show_solid,setShow_solid]=useState(false)

  return (
    <span className={` duration-200  hover:scale-[1.3] hover:text-[var(--color-default)] 
              
               ${show_solid?"text-[var(--color-default)] ":"text-slate-800"}`} onClick={()=>setShow_solid(!show_solid)}   >
                {(show_solid)?<props.icon2/>:<props.icon1/>}
    </span>
  )
}

export default Heart