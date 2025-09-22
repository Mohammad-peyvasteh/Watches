import Image from 'next/image'
import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";

const products=[
    {
        id:1,
        title:"SPIRIT ROSE",
        image:"/assets/products/product1.png",
        price:"$1500"
    },
    {
        id:2,
        title:"KHAKI PILOT",
        image:"/assets/products/product2.png",
        price:"$1300"
    },
    {
        id:3,
        title:"JUBILEE BLACK",
        image:"/assets/products/product3.png",
        price:"$800"
    },
    {
        id:4,
        title:"FOSIL ME3",
    image:"/assets/products/product4.png",
        price:"$650"
    },
    {
        id:5,
        title:"DUCHEN",
       image:"/assets/products/product5.png",
        price:"$900"
    }
]


const Products = () => {
  return (
    <section className=' max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-10 py-16'>
        <div>
             {/* title */}
            <div  className=' flex flex-col items-center gap-1 py-10 '>
                <div className=' w-[85px] border border-[#FFB568]'></div>
                <h2>PRODUCTS</h2>

            </div>
            {/* products */}
           <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 sm:gap-6 md:gap-8 lg:gap10">
  {products.map((item) => (
    <div key={item.id} className=" relative flex flex-col items-center h-[274px] border border-[#F0F0F0] justify-around w-full">
      <Image width={90} height={150} src={item.image} alt='' />
      <p>{item.title}</p>
      <p className=' text-sm text-[#FFB568]'>{item.price}</p>
      <button className=' bottom-0 right-0 absolute bg-black text-white p-2'><AiOutlineShopping/></button>
    </div>
  ))}
</div>
        </div>

    </section>
  )
}

export default Products


