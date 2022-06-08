import React from 'react'

import home from '../pics/home.png'
import home2 from '../pics/bg-2.png'
import elena from '../pics/elenna.png'
import arrow from '../pics/arrow.png'

import anna from '../pics/anna.jpg'


const Home = () => {
  return (
    <section className='w-full'>
           {/* backgrounds */}
            <div className='w-full h-full flex items-center justify-center'>
                <img src={home} alt="" className='w-[30rem] absolute'/>
                  <img src={home2} alt="" className='w-[30rem]'/>
            </div>

                {/* texts */}
            <div className='home-text text-center px-4'>
              
       <div className='flex flex-col md:items-center md:justify-start'>
              <div className=''>
              <img src={elena} alt="" className='w-32'/>
              </div>


             <div className=''>
             <img src={arrow} alt="" className='w-8'/>
             </div>

         </div>
              
              
            <div className='text-center sm:bg-black sm:rounded-md sm:p-6 md:bg-inherit flex flex-col items-center justify-center'>
                <h1 className='text-purple-800 sm:text-5xl md:text-6xl text-center font-bold z-10'>we <span className='text-white'>build the future <br /> of relationships </span></h1>

                <h5 className='max-w-[30rem] text-center text-white text-sm mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat suscipit non laudantium ducimus</h5>
          

             {/* button */}

             <div className='btn py-6'>
                  <button className='bg-purple-800 p-4 hover:bg-white sm:text-[13px] font-light hover:text-black rounded-md capitalize text-white sm:px-24 sm:mt-16 md:px-10'>join our adventure</button>
             </div>
             
             </div>

            </div>
    </section>
  )
}

export default Home