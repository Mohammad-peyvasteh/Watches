import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineFacebook } from "react-icons/md";


const Footer = () => {
  return (
  <section className='max-w-7xl mx-auto  px-6 sm:px-8 lg:px-10 xl:px-10 pt-16 py-5'>
    <div className=' md:grid-cols-2 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-6' >
      <div className='flex flex-col lg:items-center items-start   gap-3 '>
        <h2 className=' font-bold '>Our information</h2>
        <p  className='text-sm'>1234 - Peru</p>
        <p  className='text-sm'>La Libertad 43210</p>
        <p  className='text-sm'>123-456-789</p>

      </div>
      <div className='flex flex-col lg:items-center items-start   gap-3'>
        <h2 className=' font-bold'>About Us</h2>
        <p className='text-sm'>Support Center</p>
        <p  className='text-sm'>Customer Support</p>
        <p  className='text-sm'>Copy Right</p>
      </div>
      <div className='flex flex-col lg:items-center items-start  gap-3  '>
        <h2 className=' font-bold'>Social</h2>
     <div className=' flex items-center justify-center gap-4'>
      <span><FaTwitter/></span>
     <span><FaTelegramPlane/></span>
     <span><MdOutlineFacebook/></span>
     </div>

      
      </div>
        
    </div>

    <p className=' text-center pt-20 text-sm'>Bedimcode. All rigths reserved</p>

  </section>
  )
}

export default Footer