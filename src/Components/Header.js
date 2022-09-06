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
                <a href='#' className='float-right m-[18px] text-xl uppercase font-thin font-sans'>Referanslar</a>
            </li>
        </ul>
    </div>
  )
}

export default Header