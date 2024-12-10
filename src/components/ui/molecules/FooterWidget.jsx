import React, { Children } from 'react'

export default function FooterWidget({children,title}) {
  return (
    <div>
        <h3 className='text-xl lg:text-2xl font-bold mb-6'>{title}</h3>
        {children}
    </div>
  )
}
