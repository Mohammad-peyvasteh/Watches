import Image from 'next/image'
import React from 'react'

const HeroBanner = () => {
  return (
    <section className=' max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-10 py-6'>
        <div className='md:flex-row flex flex-col  md:items-center md:justify-between    '>
            {/* left side */}
            
               <div className=' flex flex-col gap-5 order-2 md:order-1'>
                <h1 className=' text-2xl font-bold'>NEW WATCH 
COLLECTIONS B720</h1>
                <p className='text-[#595959]'>Latest arrival of the new imported watches of the B720 series, with a modern and resistant design.</p>
                <p className='text-[#FFB568]'>$1245</p>
                <div>
                    <button>Discover</button>
                    <button>ADD TO CART</button>
                </div>

              </div>
              {/* right side */}
              <div className=' order-1 md:order-2 ml-auto md:ml-0'>
                <Image src="/assets/home1.png" width={400} height={540} alt='' className=' object-contain w-[260px] xl:w-[400px] xl:h-auto '/>

            </div>
            
        </div>
    </section>
  )
}

export default HeroBanner