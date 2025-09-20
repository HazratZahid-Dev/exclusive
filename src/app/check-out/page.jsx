"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
      <div className="flex items-center gap-x-3 pl-32 mt-20">
        <Link href="/home" className="text-sm text-gray-500">
          Account
        </Link>
        <span className="text-gray-500">/</span>
        <Link href="/home" className="text-sm text-gray-500">
          My Account
        </Link>
        <span className="text-gray-500">/</span>

        <Link href="/home" className="text-sm text-gray-500">
          Product
        </Link>
        <span className="text-gray-500">/</span>

        <Link href="/home" className="text-sm text-gray-500">
          View Cart
        </Link>
        <span className="text-gray-500">/</span>

        <Link href="/home" className="text-sm ">
          CheckOut
        </Link>
      </div>
      <h1 className="text-4xl font-medium mt-20 px-32">Billing Details</h1>

      <div className="px-32 flex items-start gap-x-44 mt-12">
        <div className="w-1/2 ">
          <form className="">
            <div>
              <label className="text-gray-500">First Name</label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">Company Name</label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">
                Street Address<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">
                Town/City<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">
                Phone Number<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">
                Email Address<span className="text-[#DB4444]">*</span>
              </label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="mt-8">
              <label className="text-gray-500">First Name</label>
              <input
                type="text"
                className="w-full mt-2 h-12 bg-[#F5F5F5] rounded px-6 outline-none"
              ></input>
            </div>
            <div className="flex items-center gap-x-4 mt-6">
              <input type="checkbox" />
              <p>Save this information for faster check-out next time</p>
            </div>
          </form>
        </div>
        <div className="w-1/2 mt-8">
          <div className="flex items-center justify-between ">
            <div className="flex items-center gap-x-6">
              <Image src="/product3.png" alt=" " width={48} height={42} />
              <p>LCD Monitor</p>
            </div>
            <p>$650</p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <p>SubTotal:</p>
            <p>$650</p>
          </div>
          <hr className="text-[#7D8184] mt-4" />
          <div className="flex items-center justify-between mt-8">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className="text-[#7D8184] mt-4" />
          <div className="flex items-center justify-between mt-8">
            <p>Total:</p>
            <p>$650</p>
          </div>
          <div className="flex items-center justify-between mt-8 ">
            <div className="flex gap-x-4">
              <input type="checkbox" className="" />
              <p>Bank</p>
            </div>
            <div className="flex gap-x-2">
              <button type="button" className="cursor-pointer">
                <Image src="/kash.svg" alt="bank1" width={50} height={16} />
              </button>
              <button type="button" className="cursor-pointer">
                <Image src="/visa.svg" alt="bank1" width={50} height={16} />
              </button>
              <button type="button" className="cursor-pointer">
                <Image
                  src="/Mastercard.svg"
                  alt="bank1"
                  width={50}
                  height={16}
                />
              </button>
              <button type="button" className="cursor-pointer">
                <Image
                  src="/bank-bangla.svg"
                  alt="bank1"
                  width={50}
                  height={16}
                />
              </button>
            </div>
          </div>
          <div className="flex gap-x-4">
            <input type="checkbox" className="" />
            <p>Cash on Delivery</p>
          </div>
          <div className="flex gap-x-4 mt-8">
            <div className="border w-3/5 py-4 pl-6 rounded ">
              <p>Coupon Code</p>
            </div>
            <button
              type="button"
              className="py-4  w-2/5 text-white cursor-pointer bg-[#DB4444] hover:bg-[#E07575] rounded "
            >
              Apply Coupon
            </button>
          </div>
          <button
            type="button"
            className="py-4 mt-8 w-2/5 text-white cursor-pointer bg-[#DB4444] hover:bg-[#E07575] rounded "
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
