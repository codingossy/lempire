import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


import logo from '../pics/logo.svg'



const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <nav className='py-5 px-4 flex justify-between items-center h-24 w-full mx-auto'>
       
       <img src={logo} alt="" className='w-32'/>

        <ul className='flex uppercase cursor-pointer transition-all font-semibold text-1xl text-white'>
       
        <div onClick={handleNav} className='block z-20000  text-white'>
           {nav ? <AiOutlineClose size={30} /> :  <AiOutlineMenu size={30} /> }
          
           
        </div>
        </ul>

   

        {/* drop down */}

        <div className={nav ? 'fixed text-center left-0 top-0 w-full bg-gradient-to-t from-black to-black border-r-gray-900 h-full transition-all ease-in-out duration-500 z-10000' : 'fixed bottom-[-100%]' }>
       <img src={logo} alt="" className='w-38 mt-4 p-3'/>

            <ul className='pt-20 capitalize cursor-pointer p-4 text-white text-3xl'> 
            <li className='p-6 hover:text-red-500'>team</li>
            <li className='p-6 hover:text-red-500'>podcasts</li>
            <li className='p-6 hover:text-red-500'>job</li>
            <li className='p-6 hover:text-red-500'>blog</li>

            <button className='bg-gray-700 p-3 rounded-lg text-center sm:w-full md:w-[50%] capitalize hover:bg-black hover:text-white text-sm sm:mt-56 bottom-0  md:mt-20'>join lempire </button>
          
            </ul>

        </div>


    </nav>
  )
}

export default Navbar