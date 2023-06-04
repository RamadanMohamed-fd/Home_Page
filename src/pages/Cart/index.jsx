import CartContext from '@/store/Cart_context';
import React, { useContext } from 'react'
import CartItems from '@/components/Navbar/temp/CartItems';
const index = () => {
  const cartCtx=useContext(CartContext)
  return (

    <div >
    {/* <CartItems items={cartCtx.items}/> */}
    {cartCtx.items}
    </div> 
  )
}

export default index