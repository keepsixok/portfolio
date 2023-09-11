import React from 'react'
const Projects = () => {
  return (

    <div className='flex flex-wrap justify-center w-full px-4'>
        <div>
            <h1 className='text-4xl font-bold  pt-8'>Tasks</h1>
        </div>

       <div className='flex flex-wrap w-full h-48 border border-black rounded-2xl shadow-lg shadow-gray-300 '>

        <div className='flex justify-center items-center border-b border-black w-full' >
          <h1>Open Source Chef</h1>
        </div>
      
      <div className='flex flex-wrap justify-center py-4'>
      <div className='flex items-center bg-green-300'>
          <h1 className='p-4'>Recipe Database</h1>
        </div>
        <div className='flex items-center bg-blue-200'>
          <h1 className='p-4'>Recipe Scaling</h1>
        </div>
        <div className='flex items-center bg-pink-300 '>
          <h1 className='p-4'>Prep Lists</h1>
        </div>
        <div className='flex items-center bg-yellow-200'>
          <h1 className='p-4'>Food Costing</h1>
        </div>
        </div>


      </div>
      

      </div>
     

    

    

  
    
  )
  
}

export default Projects