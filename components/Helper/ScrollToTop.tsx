"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show / Hide button functionality
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-[#b96974] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:bg-[#a65d69] transition-all duration-300 animate-pulse"
        >
          <FaArrowUp className="text-lg" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
