"use client"
import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (

    <div id="nav-container" className='flex items-center justify-between first:w-full h-24 border-b-2 border-black px-4'>
        
    {/* Title / Logo */}
    <div>
        <h1 className='text-2xl font-bold'>Mitchell</h1>
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
    <div onClick={handleNav}>
    {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
    </div>
    <div className={!nav ? 'fixed top-0 left-0 w-[60%] bg-gray-400 h-full ease-in-out duration-500' : 'fixed h-full top-0 left-[-100%] ease-in-out duration-500' }>
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