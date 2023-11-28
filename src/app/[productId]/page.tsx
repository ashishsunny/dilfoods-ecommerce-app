'use client'
import React from 'react'
import { textColorHandler } from '@/handlers/textColor'
import data  from "@/data/data"
import { ProductType } from '@/interfaces/prod_type'

interface ProductComponentProps {
  data: ProductType[];
}

const ProductDetails = ({ params }: { params: { productId: string } }) => {
  const idVal = parseInt(params.productId)-1;
  return (
    <div className="pb-[5rem]">
      <div className="px-[1.5rem] flex flex-col justify-center">
        <div className="py-[1rem]">
          <p className="font-medium text-black text-[.9rem] opacity-50">
            Go Back
          </p>
        </div>
        <div>Details about ptod{params.productId}</div>
        <div className="flex justify-center items-center bg-whitesmoke w-[20rem] h-[20rem]">
          <img
            className="w-[16.5rem] h-[15rem]"
            src="http://localhost:3000/assets/products/butterbeer.jpg"
            alt="product img"
          />
        </div>

        <div className="pt-[2rem] pb-[1.5rem] h-[1.2rem]">
          <p
            className={`${textColorHandler(
              data[idVal].availability
            )} font-normal tracking-[.6rem] text-[.875rem] uppercase`}
          >
            {data[idVal].availability}
          </p>
        </div>

        <p className="text-[1.75rem] pb-[1.5rem] w-[15rem] text-black font-bold tracking-[.06rem]">
        {data[idVal].name}
        </p>

        <p className="text-black opacity-50 leading-[1.5rem] text-.9rem font-[600] text-left pb-[1.5rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde non
          quas repellendus rem at rerum nihil debitis tempore minus, voluptatum
          nesciunt repudiandae numquam fugiat ad maiores sapiente excepturi
          consequatur atque.
        </p>

        <p className="text-black uppercase text-[1.125rem] tracking-[0.05rem] pb-[2rem] font-[700]">
        {data[idVal].price} G
        </p>

        <div className="flex">
          <div className="bg-whitesmoke flex justify-between items-center w-[7.5rem] h-[3rem] px-[.9rem] mr-[1rem]">
            <div className="text-black opacity-[.25]">-</div>
            <div className="text-black font-[700]">1</div>
            <div className="text-black opacity-[.25]">+</div>
          </div>
          <button className="uppercase text-white text-[.8rem] font-[800] tracking-[.06rem] bg-amaranth w-[10rem] h-[3rem]">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
