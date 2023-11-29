'use client'

import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '@/contexts/cartContext'

const Navbar = () => {
  const { setCartStatus } = useContext(CartContext );
  const handleCart = () => {
      setCartStatus((x: boolean) => !x)
  }

  return (
    <nav className="bg-black text-white p-4">
      <div className="flex items-center justify-between">

        <div className="w-[1rem] h-[.9rem] text-white cursor-pointer">
          <img src='http://localhost:3000/assets/icons/ham.svg' alt="hamburger icon" />
        </div>

        <div>
          <Link href="/">
              <img className="w-[10rem] h-[2rem]" src="http://localhost:3000/assets/icons/logo.png" alt="Logo"/>
          </Link>
        </div>

        <div onClick={handleCart} className="w-[1.43rem] h-[1.25rem] text-white cursor-pointer">
            <img src="http://localhost:3000/assets/icons/cart_icon.svg" alt="Logo" className="w-16" />
        </div>

      </div>
    </nav>
  )
}

export default Navbar
