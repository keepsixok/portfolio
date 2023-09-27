import React from 'react'
import Image from 'next/image'
import { Roboto } from 'next/font/google'

const roboto = Roboto({weight:'300', subsets:['latin']})
const Avatar = () => {

  return (
    <div className='flex-row w-[97%] mx-auto rounded-t-2xl text-center bg-gradient-to-b from-[#cc472e] from-50% to-50%'>
        <Image className='mx-auto' src="/burgers.png" width={200} height={0} alt="avatar" />
    </div>
    
     
  
  )
}

export default Avatar