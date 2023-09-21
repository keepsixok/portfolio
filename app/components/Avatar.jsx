import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({weight:'300', subsets:['latin']})
const Avatar = () => {

  return (
    <div className='flex-row pt-8 pb-4 w-[97%]  mx-auto rounded-t-2xl text-center bg-gradient-to-b from-[#cc472e] from-50% to-50%'>
        <Image className='mx-auto rounded-full border-[20px] border-[#2f2c23] ring-4 ring-[#e9edd9] ' src="/avatar.png" width={200} height={250} alt="avatar" />
    </div>
    
     
  
  )
}

export default Avatar