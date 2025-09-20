"use client";

import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopNav from "../components/TopNav";
import Button from "../components/Button";

export default function Signin() {
  return (
    <div className="flex items-center justify-between mt-14">
      <div className="w-1/2">
        <Image src="/Side Image.png" alt="arrow" width={805} height={0} />
      </div>
      <div className="w-1/2 flex items-center justify-center ">
        <div className="flex flex-col  items-start  w-96">
          <h1 className="text-4xl text-start font-medium">
            Log in to Exclusive
          </h1>
          <p className="mt-6">Enter your detail below</p>
          <form className="mt-12 flex flex-col gap-y-10  w-full ">
            <input
              type="text"
              className="border-b border-gray-300 placeholder-gray-500 p-0 outline-none"
              placeholder="Email or Phone Number"
            ></input>
            <input
              type="text"
              className="border-b border-gray-300 placeholder-gray-500 p-0 outline-none"
              placeholder="Password"
            ></input>

            <div className="flex items-center justify-between ">
              <Button
                btn_text="Log In"
                btn_height="h-14"
                btn_width="w-[143px]"
                btn_color="bg-[#BD4444]"
              />
              <button
                type="button"
                className="font-medium  text-[#DB4444] cursor-pointer"
              >
                Forget Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
