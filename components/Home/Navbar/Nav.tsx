import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/dist/client/link";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props={
  openNav : ()=> void;
}

const Nav = ({openNav} : Props) => {
  return (
    <div className="h-[12vh] relative z-10 lg:mt-8">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />

        {/* Nav Links for Large Screen */}
        <div className="hidden lg:flex bg-white h-[10vh] md:pl-4 items-center space-x-10">
          {NAVLINKS.map((link) => (
            <Link
              href={link.url}
              key={link.id}
              className="text-black hover:text-[#9f7c4e] font-semibold transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          {/* Button */}
          <button className="h-full p-3 bg-[#b96974] cursor-pointer text-white font-bold">
            Create Account
          </button>
        </div>
        {/* Hamburger Icon for mobile */}
        <div onClick={openNav} className="lg:hidden">
          <HiBars3BottomRight className="w-9 h-9 text-[#b96974] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
