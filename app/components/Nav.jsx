"use client"
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
const Nav = () => {
  const [nav, setNav] = useState(true)

  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <div className='flex items-center mx-auto justify-between w-full h-16 px-4 md:w-[768px] lg:w-[1024px]'>
        

    {/* Title / Logo */}
    <Link href={'/'}>
    <div className='flex'>
    <h1 className='uppercase text-3xl font-bold'>Open Source Chef</h1>
   
    </div>
    </Link>
    
    
    {/* Large Screen Menu */}
    <div className='hidden md:flex'>
        <ul className='flex uppercase'>
            <li className='p-4'><Link href={'/'}>Home</Link></li>
            <li className='p-4'><Link href={'/about'}>About</Link></li>
            <li className='p-4'><Link href={'/contact'}>Contact</Link></li>
            
        </ul>
    </div>

    {/* Mobile Menu */}
    <div onClick={handleNav} className='md:hidden'>
    {!nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
    </div>
    <div className={!nav ? 'fixed top-0 left-0 w-[60%] border-r border-black bg-white bg-opacity-[97%] h-full ease-in-out duration-500 md:hidden' : 'fixed h-full top-0 left-[-100%] ease-in-out duration-500' }>
    <h1 className='text-xl uppercase m-4 pt-4'>Open Source Chef</h1>
    <ul className='uppercase p-4'>
            <li className='p-4 border-b border-black'><Link href={'/'}>Home</Link></li>
            <li className='p-4 border-b border-black'><Link href={'/about'}>About</Link></li>
            <li className='p-4'><Link href={'/contact'}>Contact</Link></li>
    </ul>
    </div>
    </div>
  )
}

export default Nav