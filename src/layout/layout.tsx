'use client'
import React, { ReactNode, useContext } from 'react'
import Navbar from '@/componets/Navbar'
import Cart from '@/componets/Cart'
import { CartContext } from '@/contexts/cartContext'
import Success from '@/componets/Success'

type LayoutProps = {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cartStatus, successStatus } = useContext(CartContext)

  return (
    <div className="h-[100%] w-[100%] bg-color1">
      <Navbar />
      <Cart hide={cartStatus} />
      <Success hide={successStatus} />
      {children}
    </div>
  )
}

export default Layout
