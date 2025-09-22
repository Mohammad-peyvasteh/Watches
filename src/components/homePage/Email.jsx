import React from 'react'

const Email = () => {
  return (
    <section className=' max-w-7xl mx-auto    px-6 sm:px-8 lg:px-10 xl:px-10 py-16'>
        <div className=' gap-10 flex-col lg:flex-row flex justify-between items-center p-10 my-auto bg-[#FFB568] '>
            {/* */}
            <div className='flex-1 flex flex-col gap-6 items-center md:items-start'>
               <h2 className=' text-3xl font-bold'>Subscribe Our <br /> Newsletter</h2>
               <p className='text-[#595959] text-sm'>Don't miss out on your discounts. Subscribe to our email newsletter to get the best offers, discounts, coupons, gifts and much more.</p>
            </div>
             {/* */}
            <div className=' flex-1 flex items-center justify-center'>
                <div className='flex-col gap-3 md:flex-row flex md:gap-0'>
                    <input placeholder='Enter your email' className=' outline-none border-none bg-[#F0F0F0] md:px-6 md:py-2 py-2 px-4' />
                    <button className='bg-black text-white py-2 px-4 md:py-3 md:px-6'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Email