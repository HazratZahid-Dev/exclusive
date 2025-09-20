"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="px-32">
      <div className="flex items-center justify-between  mt-20">
        <div className="flex items-center gap-x-3  ">
          <Link href="/home" className="text-sm text-gray-500">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <Link href="/home" className="text-sm ">
            Account
          </Link>
        </div>
        <p>
          Welcom! <span className="text-[#DB4444]">Zahid</span>
        </p>
      </div>
      <div className="flex mt-20">
        <div className="w-2/8">
          <h2 className="text-base font-medium">Manage My Account</h2>
          <ul className="flex flex-col gap-y-2 mt-4 ml-6">
            <li>My Profile</li>
            <li>Address Book</li>
            <li>My Payment Options</li>
          </ul>
          <h2 className="text-base font-medium mt-6">My Orders</h2>
          <ul className="flex flex-col gap-y-2 mt-4 ml-6">
            <li>My Returns</li>
            <li>My Cancellations</li>
          </ul>
          <h2 className="text-base font-medium mt-6">My WishList</h2>
        </div>
        <div className="w-full shadow py-10 px-20">
          <h2 className="text-[#BD4444] text-xl font-medium">
            Edit Your Profile
          </h2>
          <form className="mt-4">
            <div className="flex items-center justify-between gap-x-12">
              <div className="flex flex-col gap-y-2 w-1/2">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Hazrat"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
              </div>
              <div className="flex flex-col gap-y-2 w-1/2">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Zahid"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
              </div>
            </div>
            <div className="flex items-center mt-6 justify-between gap-x-12">
              <div className="flex flex-col gap-y-2 w-1/2">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="hazratzahid11@gmail.com"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
              </div>
              <div className="flex flex-col gap-y-2 w-1/2">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="Islamabad Pakistan"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
              </div>
            </div>
            <div className="flex flex-col gap-y-4 mt-6 justify-between gap-x-12">
                <label>Password Change</label>
                <input
                  type="password"
                  placeholder="Current Password"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
                <input
                  type="password"
                  placeholder="New Password"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="px-4 py-3 bg-[#F5F5F5] outline-none"
                ></input>
            </div>
            <div className="flex items-center gap-x-6 mt-6 justify-end">
            <button
              type="button"
              className="py-4   text-black cursor-pointer "
            >
              Cancel
            </button>
                <button
              type="button"
              className="py-4  w-52 text-white cursor-pointer bg-[#DB4444] hover:bg-[#E07575] rounded "
            >
              Save Change
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
