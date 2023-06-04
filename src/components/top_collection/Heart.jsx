import React,{useState} from 'react'


const Heart = (props) => {
    const [show_solid,setShow_solid]=useState(false)
  return (
    <span className={` duration-100 hover:scale-[1.1]  hover:text-[var(--color-default)] 
              
               ${show_solid&&"text-[var(--color-default)]"}`}onClick={()=>setShow_solid(!show_solid)}>
                {!show_solid?<props.icon1/>:<props.icon2/>}
    </span>
  )
}

export default Heart