import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-[#f5f7fa]">
      <div className="w-[90%] lg:w-[80%] mx-auto">
        {/* Heading */}
        <h2 className="text-[#b96974] text-lg text-center font-medium tracking-[4px] uppercase">
          Contact Us
        </h2>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mt-4 leading-tight">
          Let's Start a Conversation
          <br />
          With Our Team
        </h1>

        <p className="text-center text-gray-600 text-sm md:text-base mt-5 max-w-xl mx-auto leading-7">
          We'd love to hear from you. Send us your questions or ideas, and we'll
          get back to you as soon as possible.
        </p>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_1fr] gap-10 mt-16 items-start">
          {/* Contact Form */}
           <div data-aos="zoom in"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "0"
           className="rounded-3xl bg-[#1f242c] p-8 shadow-2xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full mb-5 px-6 py-3 rounded-full bg-[#2b313d] border border-gray-700 text-white placeholder:text-gray-400 outline-none focus:border-[#b96974] transition-all duration-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full mb-5 px-6 py-3 rounded-full bg-[#2b313d] border border-gray-700 text-white placeholder:text-gray-400 outline-none focus:border-[#b96974] transition-all duration-300"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full mb-5 px-6 py-3 rounded-full bg-[#2b313d] border border-gray-700 text-white placeholder:text-gray-400 outline-none focus:border-[#b96974] transition-all duration-300"
            />

            <textarea
              rows={5}
              placeholder="Write your message..."
             className="w-full mb-6 px-6 py-4 rounded-3xl bg-[#2b313d] border border-gray-700 text-white placeholder:text-gray-400 outline-none resize-none focus:border-[#b96974] transition-all duration-300"
            />

            <button className="w-full py-3 rounded-full bg-[#b96974] text-white font-semibold uppercase tracking-[3px] hover:bg-[#a65d69] hover:scale-[1.02] transition-all duration-300 shadow-lg">
              Send Message
            </button>
          </div>

          {/* Contact Cards */}
          <div 
            data-aos="zoom-out"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "100"
          className="space-y-6">
            {/* Phone */}
            <div className="bg-[#1f242c] rounded-2xl border border-gray-700 shadow-xl p-6 flex items-center gap-5 hover:border-[#b96974] hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#b96974] flex items-center justify-center shadow-lg">
                <FaPhoneAlt className="text-white text-lg" />
              </div>

              <div>
                <p className="text-xs tracking-[3px] uppercase text-gray-400">
                  Call Us
                </p>

                <h2 className="text-white text-xl font-bold mt-1">
                  +91 8899556621
                </h2>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#1f242c] rounded-2xl border border-gray-700 shadow-xl p-6 flex items-center gap-5 hover:border-[#b96974] hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#b96974] flex items-center justify-center shadow-lg">
                <FaEnvelope className="text-white text-lg" />
              </div>

              <div>
                <p className="text-xs tracking-[3px] uppercase text-gray-400">
                  Email Us
                </p>

                <h2 className="text-white text-lg font-bold mt-1">
                  info@primeedge.com
                </h2>
              </div>
            </div>

            {/* Address */}
            <div className="bg-[#1f242c] rounded-2xl border border-gray-700 shadow-xl p-6 flex items-center gap-5 hover:border-[#b96974] hover:-translate-y-2 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-[#b96974] flex items-center justify-center shadow-lg">
                <FaMapMarkerAlt className="text-white text-lg" />
              </div>

              <div>
                <p className="text-xs tracking-[3px] uppercase text-gray-400">
                  Office
                </p>

                <h2 className="text-white text-lg font-bold mt-1">
                  Pune, Maharashtra
                </h2>

                <p className="text-gray-400 text-sm mt-1">
                  Baner Road, Pune 411045
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
