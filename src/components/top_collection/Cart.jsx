import React, { useContext, useState } from 'react'
import { BsFillCartPlusFill,BsFillCartCheckFill } from "react-icons/bs";
import Heart from './Heart';
import CartContext from '@/store/Cart_context';
import CartItems from '../Navbar/temp/CartItems';
const Cart = ({item}) => {
    const cartCtx=useContext(CartContext);
    const [clickState,setClickState]=useState(true)

    const clickHandler=()=>{
            cartCtx.addItem({
                id:item.id,
                name:item.name,
                amount:1,
                price:item.price,
                image:item.img1
              })    
      }
  return (
    <div className='flex flex-col justify-center items-center gap-5 text-3xl'
    onClick={clickHandler}>
        <Heart icon1={BsFillCartPlusFill} icon2={BsFillCartCheckFill}/>
    </div>
  )
}

export default Cart