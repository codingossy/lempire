import React from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

import logo from '../pics/logo.svg'

const Footer = () => {
  return (
    <section className='bg-black w-full h-[100%] py-12 text-center  flex flex-col items-center justify-center'>
            <div>
                <ul className='text-white  flex gap-10 capitalize text-center py-6'>
                    <li>team</li>
                    <li>podcasts</li>
                    <li>blog</li>
                </ul>
            </div>

            <div className='logo'>
                <img src={logo} alt="" className='w-32'/>
            </div>

            <div className='desc text-white py-5'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <div className="socials flex text-gray-300 gap-5 text-2xl">
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>

            <div className="details-company text-gray-300 py-8 capitalize">
                <p className='capitalize'>@2021 lempire - all rights reserved</p>
                <p>privacy policy</p>
                <p>manage cookies</p>
            </div>
    </section>
  )
}

export default Footer