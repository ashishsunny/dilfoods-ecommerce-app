'use client'
import React from "react"
import ProductComponent from "@/componets/Prod"
import data from '@/data/data'

export default function Home() {
  return (
   <div className="h-screen z-0">
      <ProductComponent products={data} />
   </div>
  )
}
