'use client'
import React, { useContext } from 'react'
import { CartContext } from '@/contexts/cartContext'
import data from '@/data/data'
import Link from 'next/link'
const Url = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
interface CartProps {
  hide: boolean
}

const Cart: React.FC<CartProps> = ({ hide }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    setCartStatus,
    RemoveAll,
    getTotalCartAmount,
    itemsVal,
  } = useContext(CartContext)

  return (
    <div
      className={`z-50 w-[20.5rem] h-auto pb-[3rem] top-[5rem] left-[1.5rem] lg:top-3rem lg:left-[77%] lg:mt-2
      ${
        hide ? 'hidden' : 'absolute'
      } right-0 bg-white`}
    >
      <div className="p-[.5rem] ">
        <div className="flex pb-[1.9rem] pt-[.25rem] justify-between">
          <p className="text-[1.125rem] font-[700] uppercase tracking-[0.08rem]">
            {`Cart (${itemsVal()})`}
          </p>
          <p
            onClick={RemoveAll}
            className="text-[.93rem] underline opacity-[.5]"
          >
            Remove All
          </p>
        </div>

        <ul className="pb-[1rem]">
          {data.map((item, index) => {
            if (cartItems[item.id] !== 0) {
              return (
                <li key={index} className="pb-[.5rem] flex justify-between">
                  <div className="flex justify-center items-center bg-whitesmoke w-[4rem] h-[4rem]">
                    <img
                      className="w-[2.26rem] h-[2.5rem]"
                      src={`${Url}/assets/products/butterbeer.jpg`}
                      alt="product img"
                    />
                  </div>

                  <div className="flex flex-col px-[.5rem] justify-center">
                    <p className="text-[.9rem] font-[700]">{item.name}</p>
                    <p>{item.price}</p>
                  </div>

                  <div className="flex items-center">
                    <div className="bg-whitesmoke flex justify-between items-center w-[6rem] h-[2rem] px-[.9rem]">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-black opacity-[.25]"
                      >
                        -
                      </button>
                      <div className="text-black font-[700]">
                        {cartItems[item.id]}
                      </div>
                      <button
                        onClick={() => addToCart(item.id)}
                        className="text-black opacity-[.25]"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </li>
              )
            }
          })}
        </ul>
        <div className="flex justify-between mb-[1.5rem]">
          <p className="opacity-[0.5] text-[.93rem] uppercase">Total</p>
          <p className="text-[1.123rem] font-[700]">{getTotalCartAmount()} G</p>
        </div>
        <div
          onClick={() => setCartStatus((e) => !e)}
          className="flex justify-center"
        >
          <Link
            href="/checkout"
            className=" flex justify-center items-center uppercase text-white text-[.8rem] font-[800] tracking-[.06rem] bg-amaranth w-[17rem] h-[3rem]"
          >
            Checkout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
