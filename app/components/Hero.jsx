import React from 'react'
import Image from 'next/image'
const Hero = () => {

  return (
    <div className=' w-full h-auto border-b border-black'>
      <Image classname= className='rounded-full' src="/avatar.png" width={200} height={200} alt="avatar"/>

      </div>
  )
}

export default Hero