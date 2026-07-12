import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div  id="blog"
     className="pt-16 pb-16 bg-white">
      <h2 className="text-[#b96974] text-lg text-center font-medium tracking-widest">
        Blog
      </h2>

      <h1 className="text-3xl md:text-5xl mt-4 text-black font-bold text-center">
        Latest news & articles <br />
        From Our Blog
      </h1>

      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
        {/* Blog Cards Here */}
        <div 
        data-aos="fade-left"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "0">
          <BlogCard
            image="/images/b1.png"
            title="How Digital Marketing Can Transform Your Business Growth"
          />
        </div>

        <div data-aos="fade-left"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "100">
          <BlogCard
            image="/images/b2.png"
            title="Top Business Strategies Every Startup Should Follow in 2026"
          />
        </div>

         <div data-aos="fade-left"
             data-aos-anchor-placement="top-center"
             data-aos-delay= "200">
          <BlogCard
            image="/images/b3.png"
            title="Building Strong Customer Relationships Through Innovation"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
