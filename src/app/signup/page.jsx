"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "../components/Button";

export default function Signup() {
  const router = useRouter();
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-14 px-4 sm:px-8 lg:px-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <Image
          src="/Side Image.png"
          alt="signup side image"
          width={805}
          height={0}
          className="w-full h-auto max-w-lg lg:max-w-none"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-start w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-start">
            Create an account
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base">
            Enter your details below
          </p>

          <form className="mt-8 sm:mt-12 flex flex-col gap-y-6 sm:gap-y-10 w-full">
            {/* Inputs */}
            <input
              type="text"
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Name"
            />
            <input
              type="text"
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Email or Phone Number"
            />
            <input
              type="password"
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Password"
            />

            {/* Create Account Button */}
            <Button
              btn_text="Create Account"
              btn_height="h-12 sm:h-14"
              btn_width="w-full"
              btn_color="bg-[#BD4444]"
            />

            {/* Google Signup */}
            <button
              type="submit"
              className="h-12 sm:h-14 border flex items-center justify-center gap-x-3 sm:gap-x-4 border-gray-300 text-black font-medium rounded cursor-pointer"
            >
              <Image
                src="/Icon-google.svg"
                width={20}
                height={20}
                alt="google icon"
                className="sm:w-6 sm:h-6"
              />
              <span className="text-sm sm:text-base">Sign up with Google</span>
            </button>

            {/* Already Have Account */}
            <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-x-4 text-sm sm:text-base mt-2">
              <p>Already have an account?</p>
              <button
                type="button"
                className="font-medium cursor-pointer relative group"
                onClick={() => router.push("/login")}
              >
                Log in
                <div className="w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
