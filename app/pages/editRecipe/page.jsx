import React from 'react'

const page = () => {
  return (
    <div className='mx-auto w-[75%]'>
    <form action="" className='flex flex-col gap-3'>
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='' />
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='' />
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='' />

        <button className='w-fit bg-green-600 font-bold text-white px-8 py-4 rounded-lg'>Update Recipe</button>
    </form>
    </div>
  )
}

export default page