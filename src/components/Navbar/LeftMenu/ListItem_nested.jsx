import React from 'react'
const ListItem_nested = (props) => {
  return (
   <>
   {
    props.bags.map((item,i)=>(
        <li key={i}><a href="#">{item}</a></li>
    ))
   }
   </>
  )
}

export default ListItem_nested