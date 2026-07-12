import Logo from "@/components/Helper/Logo";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="pt-16 pb-16">
      {/* Top part */}
      <div className="w-[80%] mx-auto  items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
       
       {/* 1st Part */}
<div>

  {/* Logo */}
  <Logo />

  {/* Description */}
  <p className="mt-6 text-gray-400 leading-7 text-sm">
    We help businesses grow through innovative digital
    solutions, creative strategies, and cutting-edge
    technology that delivers measurable results.
  </p>

  {/* Social Icons */}
  <div className="flex items-center gap-4 mt-8">

    <div className="w-12 h-12 rounded-xl bg-[#222833] border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-[#b96974] hover:-translate-y-2 transition-all duration-300">
      <FaFacebookF className="text-white text-lg" />
    </div>

    <div className="w-12 h-12 rounded-xl bg-[#222833] border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-[#b96974] hover:-translate-y-2 transition-all duration-300">
      <FaTwitter className="text-white text-lg" />
    </div>

    <div className="w-12 h-12 rounded-xl bg-[#222833] border border-gray-700 flex items-center justify-center cursor-pointer hover:bg-[#b96974] hover:-translate-y-2 transition-all duration-300">
      <FaInstagram className="text-white text-lg" />
    </div>

  </div>

</div>
        
        {/* 2nd Part */}
<div>

  <h2 className="text-[#b96974] uppercase tracking-[3px] text-sm font-semibold mb-8">
    Contact Info
  </h2>

  <div className="space-y-6">

    {/* Address */}
    <div className="flex items-start gap-4 group cursor-pointer">

      <div className="w-12 h-12 rounded-xl bg-[#222833] border border-gray-700 flex items-center justify-center group-hover:bg-[#b96974] transition-all duration-300">
        <FaMapMarkerAlt className="text-white text-lg" />
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Office Address
        </h3>

        <p className="text-gray-400 text-sm mt-1 leading-6">
          Baner Road,<br />
          Pune, Maharashtra 411045
        </p>
      </div>

    </div>

    {/* Phone */}
    <div className="flex items-start gap-4 group cursor-pointer">

      <div className="w-12 h-12 rounded-xl bg-[#222833] border border-gray-700 flex items-center justify-center group-hover:bg-[#b96974] transition-all duration-300">
        <FaPhone className="text-white text-lg" />
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Call Us
        </h3>

        <p className="text-gray-400 text-sm mt-1">
          +91 98765 43210
        </p>
      </div>

    </div>

    {/* Email */}
    <div className="flex items-start gap-4 group cursor-pointer">

      <div className="w-12 h-12 rounded-xl bg-[#222833] border border-gray-700 flex items-center justify-center group-hover:bg-[#b96974] transition-all duration-300">
        <FaEnvelope className="text-white text-lg" />
      </div>

      <div>
        <h3 className="text-white font-semibold">
          Email Us
        </h3>

        <p className="text-gray-400 text-sm mt-1 break-all">
          info@primeedge.com
        </p>
      </div>

    </div>

  </div>

</div>

       {/* 3rd Part */}
<div>

  <h2 className="text-[#b96974] uppercase tracking-[3px] text-sm font-semibold mb-8">
    Our Services
  </h2>

  <div className="space-y-5">

    <div className="group flex items-center gap-3 cursor-pointer">
      <MdKeyboardDoubleArrowRight className="text-[#b96974] text-xl group-hover:translate-x-2 transition-all duration-300" />
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
        Web Development
      </p>
    </div>

    <div className="group flex items-center gap-3 cursor-pointer">
      <MdKeyboardDoubleArrowRight className="text-[#b96974] text-xl group-hover:translate-x-2 transition-all duration-300" />
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
        UI / UX Design
      </p>
    </div>

    <div className="group flex items-center gap-3 cursor-pointer">
      <MdKeyboardDoubleArrowRight className="text-[#b96974] text-xl group-hover:translate-x-2 transition-all duration-300" />
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
        Mobile App Development
      </p>
    </div>

    <div className="group flex items-center gap-3 cursor-pointer">
      <MdKeyboardDoubleArrowRight className="text-[#b96974] text-xl group-hover:translate-x-2 transition-all duration-300" />
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
        Digital Marketing
      </p>
    </div>

    <div className="group flex items-center gap-3 cursor-pointer">
      <MdKeyboardDoubleArrowRight className="text-[#b96974] text-xl group-hover:translate-x-2 transition-all duration-300" />
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
        SEO Optimization
      </p>
    </div>

    <div className="group flex items-center gap-3 cursor-pointer">
      <MdKeyboardDoubleArrowRight className="text-[#b96974] text-xl group-hover:translate-x-2 transition-all duration-300" />
      <p className="text-gray-400 text-sm group-hover:text-white transition-all duration-300">
        Brand Strategy
      </p>
    </div>

  </div>

</div>
        {/* 4th Part */}
        <div className="mx-auto">
          <h1 className="text-lg font-bold text-white">Newsletter</h1>

          <div className="mt-8">
            <p className="font-medium text-sm text-white leading-7">
              Stay updated with our latest news, insights, and business
              solutions.
            </p>

            {/* Blog */}
            <div className="mt-6 flex items-center space-x-4">
              <Image
                src="/images/b1.png"
                alt="blog"
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />

              <div className="flex-1">
                <div className="flex items-center">
                  <CiCalendar className="text-[#b96974] w-5 h-5 mr-2" />

                  <p className="text-white font-semibold text-sm">
                    7 July, 2026
                  </p>
                </div>

                <h2 className="text-white mt-2 text-sm font-medium hover:text-[#b96974] transition-all duration-300 cursor-pointer">
                  Boost Your Business With Smart Digital Solutions
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Part */}
      <div className="border-t-2 w-[80%] mx-auto border-gray-700 mt-8">
        <p className="text-gray-300 text-center py-6 text-sm">
          © 2026 PrimeEdge. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
