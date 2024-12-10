import React from 'react'
import Image from 'next/image'
import SearchCity from './SearchCity'
export default function Hero() {
  return (
    <section className=''>
        <Image src="/design__1_.png" width={1440} height={350} className='w-full h-auto' alt='hero Torino' />
        <h1 className='text-center text-base lg:text-3xl pt-4 text-gray'><span className='text-primary'>تورینو</span> برگزار کننده بهترین تور های داخلی و خارجی</h1>
        <SearchCity/>
    </section>
  )
}
