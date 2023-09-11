import React from 'react'
import { AiOutlineFacebook, AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
const Hero = () => {
  return (
    <div className='text-center'>
        <div id='name-card-title' className='text-center'>
            <h1 className='font-bold text-4xl '>Mitchell</h1>
            <h1 className='font-light'>Web Developer</h1>
            <h1 className='font-light pb-4'>Email: Mitchell@fcku.com</h1>
            <div className='flex w-[50%] mx-auto justify-between items-center md:w-[30%]'>
                 <a href=""><AiOutlineFacebook  size={40} /></a>
                 <a href=""><AiOutlineInstagram size={40} /></a>
                 <a href=""><AiOutlineTwitter size={40} /></a>
                 <a href=""><AiOutlineLinkedin size={40} /></a>
                 <a href=""><AiOutlineGithub size={40} /></a>

            </div>
        </div>

        
        
    </div>
  )
}

export default Hero