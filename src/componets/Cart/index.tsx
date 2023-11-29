'use client'
import React from 'react'

interface CartProps {
  hide: boolean;
}

const Cart: React.FC<CartProps> = ({ hide }) => {

  return (
    <div className={`z-50 w-[20.5rem] h-[30.5rem] top-[5rem] left-[1.5rem] ${hide?'hidden':'absolute'} right-0 p-4 bg-white`}>
      <h4>Cart</h4>
      <ul>
        <li>Item1</li>
        <li>Item2</li>
      </ul>
    </div>
  )
}

export default Cart

