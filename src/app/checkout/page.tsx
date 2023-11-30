'use client'
import React, { ChangeEvent, FormEvent, useState, useContext } from 'react'
import data from '@/data/data'
import Link from 'next/link'
import { CartContext } from '@/contexts/cartContext'
const Url = process.env.NEXT_PUBLIC_API_URL
interface FormData {
  name: string
  email: string
  phone: string
  address: string
  zip: string
  city: string
  country: string
  paymentMethods: string[]
  emoneyNumber: string
  emoneyPin: string
}

export default function Home() {
  const { cartItems, getTotalCartAmount, itemsVal, setSuccessStatus } =
    useContext(CartContext)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    zip: '',
    city: '',
    country: '',
    paymentMethods: [],
    emoneyNumber: '',
    emoneyPin: '',
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === 'checkbox'
          ? checked
            ? [...prevData[name], value]
            : prevData[name].filter((item) => item !== value)
          : value,
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Add your logic to save the data, e.g., send it to a server or store it locally
    console.log('Form data:', formData)
  }

  const handleClick = () => {
    handleSubmit
    setSuccessStatus(false)
  }

  return (
    <div className="bg-white h-full z-0 pb-[3rem]">
      <div className="px-[1.5rem] py-[1rem] flex flex-col justify-center">
        <Link href="/">
          <p className="cursor-pointer font-medium text-black text-[.9rem] opacity-50">
            Go Back
          </p>
        </Link>

        <div className="bg-gray flex flex-col items-stretch mt-8 px-6 py-8 rounded-lg max-md:px-5">
          <div className="text-black text-3xl font-bold tracking-wider uppercase">
            CHECKOUT
          </div>
          <div className="text-amaranth text-sm font-bold leading-6 tracking-wider uppercase mt-12 max-md:mt-10">
            Billing details
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="name">Name</label>
            <input
              placeholder="Harry Potter"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="email">Email</label>
            <input
              placeholder="harrypotter@ministryofmagic.tech"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="phone">Phone</label>
            <input
              placeholder="+(00)999999999"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-amaranth text-sm font-bold leading-6 tracking-wider uppercase mt-10">
            shipping info
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="address">Your Address:</label>
            <input
              placeholder="Privet Dr"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="zip">ZIP:</label>
            <input
              placeholder="10001"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="text"
              name="zip"
              value={formData.zip}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="address">City:</label>
            <input
              placeholder="Edinburgh"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="country">Country:</label>
            <input
              placeholder="UK"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-amaranth text-sm font-bold leading-6 tracking-wider uppercase mt-10">
            payment details
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            Payment Method
          </div>

          <div>
            <input
              type="radio"
              id="emoney"
              name="paymentMethods"
              value="emoney"
              onChange={handleInputChange}
            />
            <label htmlFor="emoney">eMoney</label>
          </div>
          <div>
            <input
              type="radio"
              id="cod"
              name="paymentMethods"
              value="cod"
              onChange={handleInputChange}
            />
            <label htmlFor="cod">COD</label>
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="zip">E-Money Number:</label>
            <input
              placeholder="32423424324"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="text"
              name="emoneyNumber"
              value={formData.emoneyNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="text-black text-xs font-bold tracking-tight mt-7">
            <label htmlFor="zip">E-Money PIN:</label>
            <input
              placeholder="3242"
              className="border bg-white w-[100%] mt-3 px-5 py-6 rounded-lg focus:outline-none border-stone-300 text-black text-sm font-bold tracking-tight opacity-[70%]"
              type="password"
              name="emoneyPin"
              value={formData.emoneyPin}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="p-[1rem] pt-[2rem]">
        <p className="pl-[1.5rem] pb-[2rem] text-[1.125rem] font-[700] uppercase leading-[.08rem]">
          Summary
        </p>
        <ul className="pb-[1rem]">
          {data.map((item, index) => {
            if (cartItems[item.id] !== 0) {
              return (
                <li
                  key={index}
                  className="px-[1.5rem] pb-[.5rem] flex justify-between"
                >
                  <div className="flex justify-center items-center bg-whitesmoke w-[4rem] h-[4rem]">
                    <img
                      className="w-[2.26rem] h-[2.5rem]"
                      src={`${Url}/assets/products/${item.imageUrl}.jpg`}
                      alt="product img"
                    />
                  </div>

                  <div className="flex flex-col px-[.5rem] justify-center">
                    <p className="text-[.9rem] font-[700]">{item.name}</p>
                    <div className="flex justify-end">
                      <p>{item.price}</p>
                      <p className="px-[.3rem]">x</p>
                      <p>{cartItems[item.id]}</p>
                    </div>
                  </div>
                </li>
              )
            }
          })}
        </ul>

        {itemsVal() > 0 ? (
          <div className="flex px-[1.5rem] justify-between mb-[1.5rem]">
            <p className="opacity-[0.5] text-[.93rem] uppercase">Total</p>
            <p className="text-[1.123rem] font-[700]">
              {getTotalCartAmount()} G
            </p>
          </div>
        ) : null}
      </div>
      <div onClick={() => handleClick()} className="flex justify-center">
        <button className="uppercase text-white text-[.8rem] font-[800] tracking-[.06rem] bg-amaranth w-[17rem] h-[3rem]">
          Continue & Pay
        </button>
      </div>
    </div>
  )
}
