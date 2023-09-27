import React from 'react'
import Link from 'next/link'
import { BsTrash } from 'react-icons/bs'
const DelRecipeBTN = () => {
  return (
    <div>
    <Link href={'/pages/editRecipe'}>

      <div className='flex gap-0.5 items-center'>
      <BsTrash size={13} /> 
      <h1>delete</h1>
      </div>

    </Link>

    </div>
  )
}

export default DelRecipeBTN