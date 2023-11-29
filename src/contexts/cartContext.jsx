'use client'
import { createContext, useState } from "react";

export const CartContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= 20 ; i++) {
    cart[i] = 0;
  }
  return cart;
};


export const CartContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [cartStatus, setCartStatus] = useState(false)


  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartStatus,
    setCartStatus
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};