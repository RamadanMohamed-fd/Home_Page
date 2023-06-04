import React from 'react'
import Image from 'next/image'
import CartAmount from '@/components/top_collection/CartAmount';

const CartItems = (props) => {
  return (
    <ul className=' bg-white text-[16px] text-black p-1 w-full rounded-md'> 
    {
        props.items.map((item)=>(
            <li key={item.id} className='m-2.5 '>
                <div>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <p>{item.amount}</p>
                    <Image src={item.image} alt="sdis" width={50} height={50}/>
                    {/* <CartAmount/> */}
                </div>
            </li>
        ))
    }
    </ul>
  )
}

export default CartItems