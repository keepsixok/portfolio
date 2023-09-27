import {  AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail, } from 'react-icons/ai'
const Hero = () => {
  return (
    <div>
        <div className='text-center'>
            <h1 className='font-bold text-4xl '>Open Source Chef</h1>
            <h1 className='font-light'>Designer</h1>
              <div className='flex w-[50%] justify-center mx-auto md:w-[30%]'>
                 <a href=""><AiOutlineLinkedin size={40} className='mr-2' /></a>
                 <a href=""><AiOutlineGithub size={40} className='mr-2'  /></a>
                 <a href=""><AiOutlineMail size={40} /></a>


            </div> 
            <div className='mx-auto w-[75%] h-[0.2rem] rounded-2xl bg-[#2f2c23] mt-4'></div>
        </div>

        
        
    </div>
  )
}

export default Hero