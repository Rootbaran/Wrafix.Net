import React from 'react'

function Hero() {
  return (
    <div >
       
       
        <div className=' mt-[100px] m-[200px]'>
        
          <h1 className='text-4xl font-semibold'>
            Wrafix
            <span className='font-thin'> olarak;</span>
          </h1>

          <h2 className=' p-1,5 m-1 flex font-medium leading-6,5	 '>
            sürekli geliştiriyoruz, geliştirmeye çalışıyoruz. <br/> topluluğa yararlı olmak için her geçen gün <br /> kendimizi daha da geliştiriyoruz.
          </h2>

          <a href='#discover' className='inline-flex mt-5 uppercase bg-[#0e57b8] text-white w-40 h-10 rounded-sm items-center justify-center hover:bg-[#1f4db1] transition-colors font-normal'> keşfe başla </a>
      
        </div>
      
      
        <div >
          <img 
          id='image-code'
          className='flex ml-auto mr-[150px] '
          src='https://img.freepik.com/free-vector/pair-programming-concept-illustration_114360-2170.jpg?w=740&t=st=1662499056~exp=1662499656~hmac=dca34ae4353eb10f12543216e336003f23b4b0392d9ed9bd334dfcdfd8ba6f5d' width='315'/>
        </div>

        <div className=' p-5'> </div>
          <div className=' flex flex-wrap justify-center '> 
          
          <img className='  	'
          src='https://i.hizliresim.com/7sff5eb.jpg' width='1000'/>
        
          </div>
        <h2 id='linear' className='text-center mt-20 border-b-2 h-5 border-[#c2c2c2]'><h2 className='bg-white w-14 text-center mx-auto'>Wrafix</h2></h2>
    </div>
    
  )
} 

export default Hero