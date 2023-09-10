"use client"
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Nav = () => {
  const [nav, setNav] = useState(true)
  const handleNav = () => {
    setNav(!nav)
  }

  return (

    <div id="nav-container" className='flex items-center  mx-auto justify-between w-full h-24 px-4 md:w-[768px] lg:w-[1024px]'>
        

    {/* Title / Logo */}
    <div>
    <h1 className='uppercase text-2xl font-bold'>ML</h1>
    </div>

    {/* Large Screen Menu */}
    <div className='hidden md:flex'>
        <ul className='flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Contact</li>
        </ul>
    </div>

    {/* Mobile Menu */}
    <div onClick={handleNav} className='black md:hidden'>
    {!nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
    </div>
    <div className={!nav ? 'fixed top-0 left-0 w-[60%] border-r border-black bg-white h-full ease-in-out duration-500 md:hidden' : 'fixed h-full top-0 left-[-100%] ease-in-out duration-500' }>
    <h1 className='text-2xl font-bold m-4 pt-4'>Mitchell</h1>
    <ul className='uppercase p-4'>
        <li className='p-4 border-b border-black'>Home</li>
        <li className='p-4 border-b border-black'>About</li>
        <li className='p-4'>Contact</li>
    </ul>
    </div>
    </div>
  )
}

export default Nav