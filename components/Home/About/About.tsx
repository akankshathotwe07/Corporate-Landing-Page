import Image from "next/image";
import AboutProgress from "./AboutProgress";

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Content */}
        <div data-aos="zoom-in"
             data-aos-anchor-placement="top-center"
            className="relative flex justify-center items-center">
          {/* Main Image */}
          <Image
            src="/images/a3.png"
            alt="img"
            width={500}
            height={500}
            className="animate-spin [animation-duration:20s]"
          />

          {/* Centered Image */}
          <Image
            src="/images/a4.png"
            alt="img"
            width={350}
            height={350}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
          />
        </div>
        {/* Text Content */}
        <div>
          {/* Subheading */}
          <h1 data-aos="fade-up"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "150"
            className="text-blue-700 text-lg font-medium tracking-widest">
            About Us
          </h1>

          {/* Main Heading */}
          <h1 data-aos="fade-up"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "300"
           className="text-3xl md:text-5xl font-bold mt-4 text-black">
            Innovative solutions for digital success
          </h1>

          {/* Description */}
          <p data-aos="fade-up"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "450"
           className="mt-8 md:mt-12 md:ml-0 text-black text-sm md:text-base font-semibold leading-loose">
            Payment solutions enable businesses to accept payments. Payment
            solutions enable businesses to accept payments from customers
            conveniently and securely from customers conveniently and securely.
          </p>
          <AboutProgress/>
        </div>
      </div>
    </div>
  );
};

export default About;
