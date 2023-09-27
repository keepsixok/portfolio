import React from 'react'
import { BsPencil } from 'react-icons/bs'
import Link from 'next/link'

const EditRecipeBTN = () => {
  return (
    <div>
    <Link href={'/pages/editRecipe'}>

      <div className='flex gap-0.5 items-center'>
      <BsPencil size={13} /> 
      <h1>edit</h1>
      </div>

    </Link>

    </div>
  )
}

export default EditRecipeBTN