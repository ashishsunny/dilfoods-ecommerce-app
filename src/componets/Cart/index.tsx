'use client'
import React, { useContext } from 'react'
import { CartContext } from '@/contexts/cartContext'
import data from '@/data/data'
interface CartProps {
  hide: boolean
}

const Cart: React.FC<CartProps> = ({ hide }) => {
  
  const { cartItems, addToCart, removeFromCart } = useContext(CartContext );

  return (
    <div
      className={`z-50 w-[20.5rem] h-auto pb-[3rem] top-[5rem] left-[1.5rem] ${
        hide ? 'hidden' : 'absolute'
      } right-0 bg-white`}
    >
      <div className="p-[.5rem] ">
        <div className="flex pb-[1.9rem] pt-[.25rem] justify-between">
          <p className="text-[1.125rem] font-[700] uppercase tracking-[0.08rem]">
            Cart (3)
          </p>
          <p className="text-[.93rem] underline opacity-[.5]">Remove All</p>
        </div>

        <ul className='pb-[1rem]'>
            {
              data.map((item, index)=>{
                if(cartItems[item.id]!==0){
                  return(
                  <li key={index} className='pb-[.5rem] flex justify-between'>
                  <div className="flex justify-center items-center bg-whitesmoke w-[4rem] h-[4rem]">
                  <img
                    className="w-[2.26rem] h-[2.5rem]"
                    src="http://localhost:3000/assets/products/butterbeer.jpg"
                    alt="product img"
                  />
                  </div>
        
                  <div className='flex flex-col px-[.5rem] justify-center'>
                    <p className='text-[.9rem] font-[700]'>{item.name}</p>
                    <p>{item.price}</p>
                  </div>
        
                  <div className='flex items-center'>
                  <div className="bg-whitesmoke flex justify-between items-center w-[6rem] h-[2rem] px-[.9rem]">
                    <button onClick={()=>removeFromCart(item.id)} className="text-black opacity-[.25]">-</button>
                    <div className="text-black font-[700]">{cartItems[item.id]}</div>
                    <button onClick={()=>addToCart(item.id)} className="text-black opacity-[.25]">+</button>
                  </div>
                  </div>
        
                  </li>
                  )
                }
              })
            }
        </ul>

      </div>
    </div>
  )
}

export default Cart
