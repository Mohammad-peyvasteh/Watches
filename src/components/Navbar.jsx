import React from 'react'
import { CgMenuGridR } from "react-icons/cg";
import { IoMoonOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { PiWatch } from "react-icons/pi";
import Image from 'next/image'
const menu=[
  {
    id:1,
    titel:"Home"
  },
   {
    id:2,
    titel:"Featured"
  },
   {
    id:1,
    titel:"Products"
  },
   {
    id:1,
    titel:"New"
  },
]



const Navbar = () => {
  return (
    <header className=' max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-10 py-6 relative'>
        <div className=' flex items-center z-20 relative  '>
            {/* right side */}
           <div className=' flex items-center gap-6'>
            {/* logo */}
                <div className=' flex items-center '>
                  
                    <span className='text-lg md:text-xl'><PiWatch/></span>
                      <h1 className=' font-bold'>ROLEX</h1>

                </div>

                {/* menu */}
                <div className='md:flex items-center gap-4 hidden  group' >
                  {
                    menu.map((item)=>(
                      <div key={item.id}>
                        <p className=' font-bold hover:text-[#FFB568] duration-75'>{item.titel}</p>
                      </div>
                    ))

                  }

                </div>
                
            </div>
            {/* left side */}
            
             <div className='ml-auto flex gap-2 text-lg md:text-xl text-black'>
           
            {/* right side */}
            <button><IoMoonOutline/></button>
            <button><AiOutlineShopping/></button>
              {/* mobile icons  */}
            <button className=" md:hidden block"><CgMenuGridR/></button>
           </div>
        </div>
        <div className=' py-7 z-20 relative '>
          <div className='md:flex-row flex flex-col  md:items-center md:justify-between  gap-20 md:gap-0    '>
                      {/* left side */}
                      
                         <div className=' flex flex-col gap-7 order-2 md:order-1'>
                          <h1 className=' text-3xl text-[#2E2E2E] font-bold'>NEW WATCH <br />
          COLLECTIONS B720</h1>
                          <p className='text-[#595959]'>Latest arrival of the new imported watches of the <br /> B720 series, with a modern and resistant design.</p>
                          <p className='text-[#FFB568]'>$1245</p>
                          <div>
                              <button className='bg-[#BFBFBF] px-2 py-1'>Discover</button>
                              <button className='bg-[#2B2B2B] text-white px-3 py-2'>ADD TO CART</button>
                          </div>
          
                        </div>
                        {/* right side */}
                        <div className=' order-1 md:order-2 ml-auto md:ml-0'>
                          <Image src="/assets/home1.png" width={400} height={540} alt='' className=' object-contain w-[200px] sm:w-[240px] xl:w-[400px] xl:h-auto '/>
          
                      </div>
                      
                  </div>
        </div>
        <div className='bg-[#FFB568] right-0 w-[70%] h-[50%] sm:h-[60%] md:w-[40%] md:h-full absolute top-0 z-0 '>

        </div>
    </header>
  )
}

export default Navbar