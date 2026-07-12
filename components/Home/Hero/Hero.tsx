import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
<div className="w-full h-[80vh] bg-[#1f242c] flex justify-center flex-col">
  <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

        {/* Text Content */}
        <div>
          {/* Title */}
          <h1 data-aos="fade-up"
            className="text-4xl md:text-7xl font-bold text-white ">
            Crafting your digital story with passion
          </h1>

          {/* Description */}
          <p  data-aos="fade-up"
            data-aos-delay="150"
            className="ml-0 md:ml-10 md:mt-10 mt-5 text-sm md:text-base font-semibold text-white">
            Payment solutions enable businesses to accept payments. Payment
            solutions enable businesses to accept payments from customers
            conveniently and securely.
          </p>

          {/* Button */}
          <button   data-aos="fade-up"
              data-aos-delay="300"
             className="px-8 py-3 rounded-full mt-10 ml-0 md:ml-12 text-white font-semibold cursor-pointer hover:bg-[#b96974] 
             transition-all duration-300  border-2 border-gray-300">
            Discover More
          </button>

        </div>

        {/* Image content */}
        <div data-aos="fade-down"
             data-aos-delay="450"
           className="absolute top-0 right-48 hidden lg:block">
            <Image src="/images/hero.png" width={550} height={550} alt="img"/>
        </div>

      </div>
    </div>
  );
};

export default Hero;