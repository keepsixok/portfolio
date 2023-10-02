import React from 'react'
import Link from 'next/link'
const AddRecipeBtn = () => {
  return (
    <div className='flex justify-end'>
    <Link href={'/addRecipe'}>
    <button className='px-6 py-4 bg-emerald-400 rounded-xl font-bold text-xl'>Add Recipe</button>


    </Link>
    </div>
  )
}

export default AddRecipeBtn