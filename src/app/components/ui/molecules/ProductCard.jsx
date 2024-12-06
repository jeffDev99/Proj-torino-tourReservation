import React from 'react'
import Image from 'next/image'
export default function ProductCard({imgSrc , title , desc , price , className}) {
  return (
    <figure className={`shadow-cus-1 rounded-[10px] overflow-hidden ${className}`}>
        <Image src={imgSrc} alt={title} width={278} height={160} className='w-full object-contain'/>
        <figcaption>
            <h4 className='text-xl p-2 pb-0'>{title}</h4>
            <p className='text-gray p-2 truncate'>{desc}</p>
            <div className='flex items-center justify-between p-2 border-t border-[#D9D9D9]'>
                <button>رزرو</button>
                <p className='text-gray text-xs'> <span className='text-lightGreen text-base'>{price}</span>تومان </p>
            </div>
        </figcaption>
    </figure>
        
  )
}
