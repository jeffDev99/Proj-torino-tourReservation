import React from 'react'

export default function Container({children , className}) {
  return (
    <div className={`max-w-[1188px] m-auto  px-9 ${className}`}>{children}</div>
  )
}
