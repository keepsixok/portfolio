import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({weight:'300', subsets:['latin']})
const Avatar = () => {

  return (
    <div className='flex-row w-full border-b py-8 border-black text-center bg-gradient-to-b from-black from-50% to-50%'>
        <Image className='rounded-full border-[20px] border-black mx-auto' src="/avatar.png" width={250} height={250} alt="avatar" />
    </div>
     
  
  )
}

export default Avatar