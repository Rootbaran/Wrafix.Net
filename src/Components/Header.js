import React, { useEffect, useState } from 'react'

function Header() {



  return (
    <div class='h-15 border-b border-gray-100 w-full   px-4'>
       <ul className='bg-white h-16 text-black shadow-md'>
          <a href="/" className='inline-flex font-semibold text-2xl uppercase font-[Montserrat] m-4 float-left '>./Wrafix</a>
           
           <div className=' float-right m-3'> 
          
          
          <button type="button" class="float-right py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Projeler</button>
          <button type="button" class="float-right align-items  py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Blog</button>
           
         
          
           </div>
       
       </ul>
    </div>
  )
}

export default Header

