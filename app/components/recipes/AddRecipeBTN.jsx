import React from 'react'
import Link from 'next/link'
const AddRecipeBTN = () => {
  return (
    <div className='flex justify-end px-4'>
    <Link href={'/pages/addRecipe'}>

    <button className='bg-blue-600 hover:bg-blue-500 text-white font-bold px-4 py-2 rounded'>Add Recipe</button>

    </Link>

    </div>
  )
}

export default AddRecipeBTN