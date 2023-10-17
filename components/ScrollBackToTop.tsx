"use client";
import { LuArrowUpCircle } from "react-icons/lu";
import { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`scroll-to-top fixed bottom-8 right-8 bg-blue-500 text-white p-4 rounded-full opacity-0 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : ""
      }`}
      onClick={scrollToTop}
    >
      <LuArrowUpCircle className="text-2xl" />
    </div>
  );
};

export default ScrollToTop;
