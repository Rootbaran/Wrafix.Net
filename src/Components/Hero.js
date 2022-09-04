import React from 'react'

function Hero() {
  return (
    <div>
        <div className=' mt-[100px] m-[200px]'>
          <h1 className='text-4xl font-semibold'>
            Wrafix
            <span className='font-thin'> olarak;</span>
          </h1>
          <h2 className='flex font-medium'>
            sürekli geliştiriyoruz, geliştirmeye çalışıyoruz. <br/> topluluğa yararlı olmak için her geçen gün <br /> kendimizi daha da geliştiriyoruz.
          </h2>
          <a href='#discover' className='inline-flex mt-5 uppercase bg-[#10ac84] text-white w-40 h-10 rounded-sm items-center justify-center hover:bg-[#10ce9e] transition-colors font-normal'> keşfe başla </a>
        </div>
        <div >
          <img 
          id='image-code'
          className='flex ml-auto mr-[220px]'
          src='https://img.freepik.com/free-vector/open-source-concept-illustration_114360-3583.jpg?w=900&t=st=1662320844~exp=1662321444~hmac=da456f878cf1fd4c6acce0c55fecdd6052e0b7abc20e82457dff968704be7c8e' width='350'/>
        </div>
        <h2 id='linear' className='text-center mt-20 border-b-2 h-5'><h2 className='bg-white w-14 text-center mx-auto'>Wrafix</h2></h2>
    </div>
  )
}

export default Hero