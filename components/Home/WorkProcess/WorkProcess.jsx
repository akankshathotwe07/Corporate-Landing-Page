import React from "react";
import WorkProcessCard from "./WorkProcessCard";

const WorkProcess = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <h1 className="text-[#b96974] text-lg text-center font-medium tracking-widest">
        Work Process
      </h1>

      <h1 className="text-3xl md:text-5xl mt-4 font-bold text-black text-center">
        Transforming ideas into <br />
        digital reality
      </h1>

      {/* Work Process Card */}
      <div className="w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14 text-black">

        <WorkProcessCard number="01" title="Creative Craft" extraClass="" />

        <WorkProcessCard number="02" title="Brand Boost" />

        <WorkProcessCard number="03" title="Media Minds" extraClass="" />

        <WorkProcessCard number="04" title="Media Minds" />
      </div>
    </div>
  );
};

export default WorkProcess;
