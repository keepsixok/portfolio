import React from 'react'
import {  AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='text-center'>
        <div id='name-card-title' className='text-center'>
            <h1 className='font-bold text-4xl '>Mitchell</h1>
            <h1 className='font-light'>Designer, Developer, Chef</h1>
            <h1 className='font-light pb-4'>Email: Mitchell@fcku.com</h1>
            <div className='flex w-[50%] justify-center mx-auto items-center md:w-[30%]'>
                 <a href=""><AiOutlineLinkedin size={40} /></a>
                 <a href=""><AiOutlineGithub size={40} /></a>

            </div>
        </div>

        
        
    </div>
  )
}

export default Hero