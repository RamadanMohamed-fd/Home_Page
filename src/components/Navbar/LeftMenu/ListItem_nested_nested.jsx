import React from 'react'

const ListItem_nested = (props) => {
  return (
    <ul className={`p-1 n-li -ml-7 pl-10 bg-red-50 w-[112%] mt-2 xl:absolute xl:bg-white  xl:ml-[175px] xl:-mt-8 xl:w-[180px] xl:pl-8 ${!props.show_nested&&"hidden"} xl:hidden ${props.show_nested&&"block"} xl:group-hover/item:block`}>
        {
            props.bags_nested.map((item,i)=>(
                <li key={i}><a href="#">{item}</a></li>  
            ))
        }     
    </ul>
  )
}

export default ListItem_nested