import React, { useContext } from 'react';
import Image from 'next/image';
import { textColorHandler } from '@/handlers/textColor';
import { ProductType } from '@/interfaces/prod_type';
import { CartContext } from '@/contexts/cartContext';
const Url = process.env.NEXT_PUBLIC_API_URL
import Link from 'next/link';

interface ProductComponentProps {
  products: ProductType[];
}


const ProductComponent: React.FC<ProductComponentProps> = ({ products }) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[.5rem] pb-[3rem]">
      {products.map((product, index) => (
        <Link key={index} href={`/${product.id}`}>
        <div className='w-[95%] ml-[.7rem] mt-[1rem] h-[7rem] bg-gray border-[.001rem] rounded-sm border-borderRed p-4'>
            <div className='flex'>
                <img className='w-[5rem] h-[5rem] mr-[.5rem]' src={`${Url}/assets/products/${product.imageUrl}.jpg`} alt="" /> 
                <div>
                    <p className='text-prodText text-[1rem]'>{product.name}</p>
                    <p className='text-priceText font-bold text-[1rem]'>${product.price}G</p>
                    <div className='flex'><p className={`${textColorHandler(product.availability)} text-[.8rem] font-bold pr-[.5rem]`}>{product.availability}</p><p className='text-lightgray text-[.8rem] font-light'>{product.stock-cartItems[product.id]} left</p></div>
                </div>
            </div>
        </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductComponent;