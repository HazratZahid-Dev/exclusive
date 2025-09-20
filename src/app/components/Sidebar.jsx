"use client";
import Image from "next/image";

export default function Sidebar({ onCategorySelect }) {
  return (
    <div className="xl:w-2/8 border-r border-[#F5F5F5] pt-10">
      <ul className="space-y-4">
        <li
          onClick={() => onCategorySelect("women's clothing")}
          className="flex items-center justify-between w-full pr-6 cursor-pointer"
        >
          Woman’s Fashion
          <Image src="/blackRightArrow.svg" alt="arrow" width={8} height={12} />
        </li>

        <li
          onClick={() => onCategorySelect("men's clothing")}
          className="flex items-center justify-between w-full pr-6 cursor-pointer"
        >
          Men’s Fashion
          <Image src="/blackRightArrow.svg" alt="arrow" width={8} height={12} />
        </li>

        <li
          onClick={() => onCategorySelect("electronics")}
          className="cursor-pointer"
        >
          Electronics
        </li>
        <li
          onClick={() => onCategorySelect("jewelery")}
          className="cursor-pointer"
        >
          Jewelry
        </li>
        <li onClick={() => onCategorySelect(null)} className="cursor-pointer">
          All Products
        </li>
      </ul>
    </div>
  );
}
