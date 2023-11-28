'use client'
import React, { ReactNode } from 'react';
import Navbar from '@/componets/Navbar';
import Cart from '@/componets/Cart';
import { CartContextProvider } from '@/contexts/cartContext';

type LayoutProps = {
    children: ReactNode;
  };

const Layout : React.FC<LayoutProps> = ({children}) => {
  return (
    <CartContextProvider>
    <div className="h-[100%] w-[100%] bg-color1">
      <Navbar/>
      <Cart/>
      {children}
    </div>
    </CartContextProvider>
  )
}

export default Layout