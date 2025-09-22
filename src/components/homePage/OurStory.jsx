import Image from 'next/image'
import React from 'react'

const OurStory = () => {
  return (
    <section className=' max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-10'> 
        <div className=' flex  justify-between items-center flex-col xl:flex-row xl:gap-0 gap-20'>
            {/* image & cover */}
            <div className=' flex-1 order-2 xl:order-1 '>
                <div className=' relative'>
                    <Image width={450} height={450} src="/assets/story1.png" alt='' className='w-[200px] xl:w-[450px] lg:w-[350px]  relative z-20 -top-5 xl:-top-9 left-6 xl:left-15'/>                   
                    {/* bg yellow */}
                    <div className=' absolute lg:w-[350px] lg:h-[350px] w-[200px] h-[200px] xl:w-[450px] xl:h-[450px] bg-[#FFB568] xl:-bottom-4 -bottom-2'  ></div>

                </div>
                
            </div>
            {/* texts */}
           <div className=' flex-1 flex flex-col items-start gap-8 order-1 xl:order-2  '>
            <div className=' xl:mx-0  mx-auto flex flex-col gap-1'>
            <div className=' w-[85px] border border-[#FFB568]'></div>
            <h2 className=''>OUR STORY</h2>
            </div>
            <p className=' text-3xl'>Inspirational Watch of 
this year</p>
            <p className=' text-sm text-[#595959]'>The latest and modern watches of this year, is available in various presentations in this store, discover them now.</p>
            <button className=' bg-[#2B2B2B] text-white text-sm px-3 py-2 rounded'>Discover</button>
           </div>
        </div>
    </section>
  )
}

export default OurStory