"use client";
import Image from "next/image";
import { useState } from "react";

export default function TopNav() {
  const [selectedLang, setSelectedLang] = useState("English");
  const [open, setOpen] = useState(false);

  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Urdu",
    "Arabic",
  ];
  return (
    <nav className="relative bg-black text-xs  sm:text-sm  text-[#FAFAFA] w-full h-auto py-3 lg:py-0 lg:h-12 flex  items-center justify-center px-4">
      {/* Center content */}
      <div className="flex flex-wrap items-center justify-center gap-x-2 text-center">
        <p className=" ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <div className="flex flex-col items-center">
        <button className="font-semibold cursor-pointer ">Shop Now</button>
        <div className="bg-[#FAFAFA] w-16 h-[2px] rounded-full"></div>

        </div>
      </div>

      {/* Right section (responsive, fixed 136px from right on lg+) */}
      <div className="absolute hidden lg:flex right-32 items-center gap-2.5">
        <div className="relative ">
          {/* Trigger Button */}
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2.5 cursor-pointer select-none"
          >
            <p className="hidden sm:block font-medium">{selectedLang}</p>
            <Image
              src="/bottomArrow.svg"
              alt="arrow"
              width={12}
              height={12}
              className={`transition-transform ${open ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown Menu */}
          {open && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md text-black rounded-lg border border-gray-200 z-50">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    setSelectedLang(lang);
                    setOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 ${
                    selectedLang === lang ? "font-semibold text-blue-600" : ""
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
