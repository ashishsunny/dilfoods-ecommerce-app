'use client'
import { createContext, useState } from 'react'
import data from '@/data/data'

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i <= data.length; i++) {
    cart[i] = 0
  }
  return cart
}

export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [cartStatus, setCartStatus] = useState(true)
  const [successStatus, setSuccessStatus] = useState(true)

  const getTotalCartAmount = () => {
    let totalAmount = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = data.find((i) => i.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price
      }
    }
    return totalAmount.toFixed(2)
  }

  const itemsVal = () => {
    let i = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        i++
      }
    }
    return i
  }

  const firstItemId = () => {
    let i = 0
    for (const item in cartItems) {
      if (cartItems[item] > 0 && i < 1) {
        i++
        return item
      }
    }
  }

  const addToCart = (itemId) => {
    if(cartItems[itemId]<(data[itemId-1].stock)){
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    }
    else{
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId]}))
    }
    console.log(cartItems)
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const CartHandler = (itemId, val) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + val }))
  }

  const RemoveAll = () => {
    setCartItems(getDefaultCart())
  }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartStatus,
    setCartStatus,
    CartHandler,
    RemoveAll,
    getTotalCartAmount,
    itemsVal,
    firstItemId,
    successStatus,
    setSuccessStatus,
  }

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  )
}
