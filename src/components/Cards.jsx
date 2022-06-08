import React from 'react'
import CardData from './CardData'


const Cards = () => {
  return (
    <section className='pt-48 grid p-10 gap-12 px-8 bg-black w-full h-full overflow-hidden'>


     <div className='relative'> 
 
           <div className=''>
             {CardData.map(( {data1, data2, img3, button, desc, img }) => {
               return (
                 <div>
                    <img src={data1} alt="" className='hidden lg:block absolute top-1/4 -translate-y-1/2 -left-24 w-52'/>
                    <img src={ data2 } alt="" className='hidden lg:block absolute top-1/4 -translate-y-1/2 -right-24 w-52'/>

                          {/* body */}
                    <div className='details bg-gradient-to-r from-gray-500 to-gray-900 px-12 pt-48 rounded-2xl mb-20'>

                    <div className='com-logo block  -mt-32 mb-32 md:flex md:justify-between'>

                           <img src={img3} alt="" className='sm:w-52 sm:mx-auto md:mx-0 md:w-24 top-0 left-0'/>

                           <button className='capitalize bg-blue-600 sm:p-6 p-3 rounded-md text-white sm:w-[100%] sm:mt-6 md:w-[30%] lg:w-[20%] hover:bg-black'>{button}</button>
                      </div>

                      <div className="text-heading mb-10 text-gray-300 text-center">
                          <p>{desc}</p>
                        </div> 

                        
                        <div className='card-img '>
                                    <img src={img} alt="" className=''/>
                        </div>
                      
                    </div>


                 </div>

                  

               )
             })}
               
     </div>
</div>


    </section>
  )
}

export default Cards