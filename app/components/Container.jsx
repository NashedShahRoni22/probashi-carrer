import React from 'react'

export default function Container({children}) {
  return (
    <div className='md:max-4-4xl md:mx-auto'>
      {children}
    </div>
  )
}
