import React from 'react';
import Image from 'next/image';
import { ProductType } from '@/interfaces/prod_type';

interface ProductComponentProps {
  products: ProductType[];
}

const ProductComponent: React.FC<ProductComponentProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[.5rem]">
      {products.map((product) => (
        <div key={product.id} className='w-[95%] ml-[.7rem] mt-[1rem] h-[7rem] bg-white border-[.001rem] rounded-sm border-borderRed p-4'>
            <div className='flex p-[1rem]'>
                {/* <img className='w-[5rem] h-[5rem]' src="" alt="" /> */} <p className='w-[5rem] h-[5rem]'>img</p>
                <div>
                    <p className='text-prodText text-[1rem]'>Apple Cider</p>
                    <p className='text-priceText font-bold text-[1rem]'>$57.00</p>
                    <p className='text-amaranth text-[.8rem] font-bold'>New Arrival</p>
                </div>
            </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;