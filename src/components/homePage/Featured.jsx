import Image from "next/image";
import React from "react";

const items = [
  {
    image: "/assets/products/featured1.png",
    title: "JAZZMASTER",
    id: "1",
    price: "$1050",
  },
  {
    image: "/assets/products/featured2.png",
    title: "INGERSOLL",
    id: "2",
    price: "$250",
  },
  {
    image: "/assets/products/featured3.png",
    title: "ROSE GOLD",
    id: "3",
    price: "$890",
  },
];

const Featured = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 xl:px-10 py-16">
      <div>
        {/* title */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-[85px] border border-[#FFB568]"></div>
          <p>FEATURED</p>
        </div>

        {/* products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start  py-20">
  {items.map((item) => (
    <div
      key={item.id}
      className="flex flex-col items-center gap-4 border border-gray-300 p-6 rounded-lg group transition-all duration-300"
    >
      {/* تصویر */}
      <Image
        src={item.image}
        width={140}
        height={214}
        alt={item.title}
      />

      {/* نام و قیمت */}
      <div className="text-center">
        <p className="">{item.title}</p>
        <p className="text-[#FFB568]">{item.price}</p>
      </div>

      {/* دکمه Add to Cart */}
      <div className="overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-20">
        <button className="mt-4 bg-[#2B2B2B] text-white px-6 py-2 rounded">
          Add to Cart
        </button>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Featured;
