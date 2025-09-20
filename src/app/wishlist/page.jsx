"use client";

import Card from "../components/Card";

export default function Wishlist() {
  return (
    <div className="px-4 space-y-10 lg:space-y-0 lg:px-32">
      <div className="flex  items-center justify-between mt-20">
        <p>Wish List</p>
        <button type="button" className="py-2 text-sm lg:text-base lg:py-4 px-6 lg:px-12 border font-medium rounded">
          Move All To Bag
        </button>
      </div>
      <Card />
      <div className="flex  items-center justify-between mt-20">
        <div className="flex items-center gap-x-4  ">
          <div className="bg-[#DB4444] h-10 w-5 rounded "></div>
          <p className="text-base text-[#DB4444] font-semibold">
            Just For You{" "}
          </p>
        </div>
        <button type="button" className="py-2 text-sm lg:text-base lg:py-4 px-6 lg:px-12 border font-medium rounded">
          See All
        </button>
      </div>
      <Card />
    </div>
  );
}
