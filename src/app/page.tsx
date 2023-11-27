import React from "react"
import ProductComponent from "@/componets/Slider"
import { ProductType } from "@/interfaces/prod_type"
import data from '@/data/data'

export default function Home() {

  return (
   <div>
      <ProductComponent products={data} />
   </div>
  )
}
