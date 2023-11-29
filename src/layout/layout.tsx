'use client'
import React, { ReactNode, useContext } from 'react';
import Navbar from '@/componets/Navbar';
import Cart from '@/componets/Cart';
import { CartContext } from '@/contexts/cartContext';

type LayoutProps = {
    children: ReactNode;
  };


const Layout : React.FC<LayoutProps> = ({children}) => {
  const { cartStatus } = useContext(CartContext );
  return (
    <div className="h-[100%] w-[100%] bg-color1">
      <Navbar/>
      <Cart hide={cartStatus} />
      {children}
    </div>
  )
}

export default Layout