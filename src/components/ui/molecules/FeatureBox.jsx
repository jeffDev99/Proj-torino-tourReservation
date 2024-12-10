import React from 'react'
import Image from 'next/image'

export default function FeatureBox({ImgSrc , title , desc , className}) {
  return (
    <article className={`flex items-center gap-x-2 ${className}`}>
        <Image src={ImgSrc} alt={ImgSrc} width={104} height={104} className='w-16 lg:w-28 h-w-16 lg:h-28'/>
        <div>
            <h3 className='text-sm lg:text-2xl mb-2'>{title}</h3>
            <p className='text-xs lg:text-base text-darkGray mb-2'>{desc}</p>
        </div>
    </article>
  )
}
