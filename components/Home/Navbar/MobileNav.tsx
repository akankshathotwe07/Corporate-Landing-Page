import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React from "react";
import { CgClose } from "react-icons/cg";

type Props ={
  showNav : boolean;
  closeNav:()=> void;
}

const MobileNav = ({closeNav, showNav} : Props) => {

  const navOpenStyles = showNav ? "translate-x-0" : "translate-x-[-100%]"
  
  return (
    <div>
      {/* Overlay */}
      <div className={`fixed ${navOpenStyles} inset-0 transform transition-all duration-500 z-[1002] bg-black opacity-70 w-full h-screen`}></div>

      {/* NAVLINKS */}
      <div className={`text-white ${navOpenStyles} fixed top-0 left-0 flex flex-col justify-center h-screen w-[80%] bg-[#b96974] space-y-5 z-[1050]`}>
        {NAVLINKS.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="ml-12 text-[20px] sm:text-[28px] font-medium hover:text-gray-200 transition-all duration-300"
          >
            {link.label}
          </Link>
        ))}

        <CgClose onClick={closeNav} className="absolute top-5 right-5 w-7 h-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default MobileNav;
