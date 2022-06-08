import React from 'react'

import team from '../pics/team.jpg'

const Team = () => {
  return (
    <section className='w-full h-full top-0'>
      <div className='bg' data-aos='zoom-in' data-aos-delay="600">
                    <img src={team} alt="" />
          <div className='btn text-center mb-6'>
            <button className='text-white sm:w-[80%] md:w-[20%] p-4 bg-purple-600 rounded-md px-6 capitalize hover:bg-black'>join our adventure</button>
            </div>
      </div>
            
    </section>
  )
}

export default Team