import React,{useState} from 'react'


const Heart = (props) => {
  
    const [show_solid,setShow_solid]=useState(false)
    const [show_hover,setShow_hover]=useState(false)

  return (
    <span className={` duration-200 hover:scale-[1.5] hover:text-[var(--color-default)] 
              
               ${show_solid&&"text-[var(--color-default)] "}`} onClick={()=>setShow_solid(!show_solid)}  onMouseEnter={()=>setShow_hover(true)} onMouseLeave={()=>setShow_hover(false)}  >
                {(show_solid||show_hover)?<props.icon2/>:<props.icon1/>}
    </span>
  )
}

export default Heart
