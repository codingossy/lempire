import React from 'react'

import logo1 from '../pics/book11.png'
import bookman from '../pics/book1.png'

import logo2 from '../pics/book22.png'
import bookman2 from '../pics/book2.png'




const Books = () => {
  return (
    <section className='flex flex-col w-full h-[100%] px-10 py-10 items-center justify-center bg-star bg-center bg-cover bg-no-repeat gap-10 mb-10'>

                {/* first card */}
            <div className='bg-gray-300 sm:w-[100%] md:w-[70%] flex sm:flex-col-reverse md:flex-row-reverse  rounded-2xl sm:mt-10' data-aos='flip-right' data-aos-delay="400">

                        {/* details */}
                <div className='first flex px-3 py-4' >
                    <img src={bookman} alt="" className='sm:w-52 sm:mx-auto md:mr-20 w-24 mb-10'/>
                </div>

                <div className='py-6 px-4'>
                        <img src={logo1} alt="" className='sm:w-56 sm:m-6 w-20 h-16' />

                        <div className='sm:text-center'>
                        <h3 className='text sm:text-[15px] text-gray-500 text-sm max-w-[20rem] mt-8'>the secrets behind growing a multi projects company in 2022</h3>
                        </div>

                        <button className='p-3 sm:w-[100%] bg-yellow-500 rounded-md mt-5 text-white'>Read now</button>
                        <p className='text-gray-600 mt-2 mb-4 sm:text-center'>join waitlist</p>
                </div>
                       

            </div>


              {/* sec card */}
             <div className='bg-gray-300 sm:w-[100%] md:w-[70%] flex sm:flex-col-reverse md:flex-row-reverse  rounded-2xl' data-aos='flip-left' data-aos-delay="400">

                {/* details */}
                <div className='first flex px-3 py-4'>
                <img src={bookman2} alt="" className='sm:w-52 sm:mx-auto md:mr-20 w-24 mb-10 rounded-2xl'/>
                </div>

                <div className='py-6 px-4'>
                <img src={logo2} alt="" className='sm:w-56 sm:m-6 w-20 h-16' />

                <div className='sm:text-center'>
                <h3 className='text sm:text-[15px] text-gray-500 text-sm max-w-[20rem] mt-8'>the secrets behind growing a multi projects company in 2022</h3>
                </div>

                </div>


                </div>


              





            
    </section>
  )
}

export default Books
