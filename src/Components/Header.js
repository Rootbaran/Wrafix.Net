import React, { useEffect, useState } from 'react'

function Header() {



  return (
    <div>
        <ul className='bg-white h-16 text-black shadow-md'>
            <li className=''>
                <a href="/" className='inline-flex font-semibold text-2xl uppercase font-[Montserrat] m-4 float-left '>Wrafix.Net</a>
            </li>
            <li>
                <a href='#' className='float-right m-[18px] text-xl uppercase font-thin font-sans'>Projeler</a>
            </li>
            <li>

            <button type="button" class="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Alternative</button>
            </li>
        </ul>
    </div>
  )
}

export default Header