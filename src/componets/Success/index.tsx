'use client'
import React, { useContext } from 'react'
import { CartContext } from '@/contexts/cartContext'
import data from '@/data/data'
import Link from 'next/link'

interface SuccessProps {
  hide: boolean
}

const Success: React.FC<SuccessProps> = ({ hide }) => {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    setCartStatus,
    RemoveAll,
    getTotalCartAmount,
    itemsVal,
    firstItemId,
    setSuccessStatus,
  } = useContext(CartContext)

  const handleClick = () => {
    setSuccessStatus(true)
    RemoveAll()
  }

  return (
    <div
      className={`z-50 w-[20.5rem] h-[35rem] pb-[3rem] top-[14rem] left-[1.5rem] ${
        hide ? 'hidden' : 'absolute'
      } right-0 bg-white`}
    >
      <div className="p-[2rem] ">
        <div className="flex justify-center items-center w-[4rem] h-[4rem] rounded-[50%] bg-amaranth">
          <img
            className="w-[1.4rem] h-[1rem]"
            src="http://localhost:3000/assets/icons/tick.svg"
          />
        </div>

        <div className="mt-[1.5rem]">
          <p className="text-[1.3rem] font-[700] tracking-[0.03rem] leading-[1.7rem]">
            THANK YOU <br /> FOR YOUR ORDER
          </p>
        </div>
        {itemsVal() > 0 ? (
          <div className="bg-zinc-100 self-stretch flex flex-col mt-7 pt-6 rounded-lg">
            <div className="self-center flex w-[215px] max-w-full items-stretch gap-4">
              <div className="bg-zinc-100 flex aspect-square flex-col justify-center items-center px-3 py-2.5 rounded-lg">
                <img
                  loading="lazy"
                  src="http://localhost:3000/assets/products/butterbeer.jpg"
                  className="aspect-[0.88] object-contain object-center w-7 overflow-hidden"
                />
              </div>
              <div className="self-center flex grow basis-[0%] flex-col items-stretch my-auto">
                <div className="flex items-stretch justify-between gap-5">
                  <div className="text-black text-base font-bold leading-6">
                    {data[firstItemId() - 1].name}
                  </div>
                  <div className="text-black text-right text-base font-bold leading-6 opacity-50">
                    x{cartItems[firstItemId()]}
                  </div>
                </div>
                <div className="text-black flex text-sm font-bold leading-6 opacity-50 mt-3.5">
                  <p className="pr-[.2rem]">
                    {(
                      data[firstItemId() - 1].price * cartItems[firstItemId()]
                    ).toFixed(2)}
                  </p>
                  <p>G</p>
                </div>
              </div>
            </div>
            <div className="bg-black bg-opacity-10 self-center flex w-[215px] shrink-0 h-px flex-col mt-3" />
            <div className="flex justify-center text-black text-xs font-bold tracking-tight opacity-50 mt-4">
              {itemsVal() > 1
                ? `and ${itemsVal() - 1} other item${
                    itemsVal() - 1 > 1 ? `s` : ``
                  }`
                : ``}
            </div>
            <div className="bg-black rounded-b-lg self-stretch flex flex-col mt-7 pl-6 pr-20 py-6 items-start max-md:px-5">
              <div className="text-white text-base leading-6 opacity-50">
                GRAND TOTAL
              </div>
              <div className="text-white text-lg font-bold uppercase mt-5">
                {`${getTotalCartAmount()}G`}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <div onClick={() => handleClick()} className="flex justify-center">
        <Link
          href="/"
          className="uppercase flex justify-center items-center text-white text-[.8rem] font-[800] tracking-[.06rem] bg-amaranth w-[17rem] h-[3rem]"
        >
          Back To Home
        </Link>
      </div>
    </div>
  )
}

export default Success
