import React from 'react'
import {BsBookmark } from 'react-icons/bs'
import Link from 'next/link'

const SaveRecipeBTN = () => {
  return (
    <div>
    <Link href={'/pages/editRecipe'}>

      <div className='flex gap-0.5 items-center'>
      <BsBookmark size={13} /> 
      <h1>save</h1>
      </div>

    </Link>

    </div>
  )
}

export default SaveRecipeBTN