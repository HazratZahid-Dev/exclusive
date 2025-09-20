"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";

export default function Contact() {
  return (
    <div className="px-4 sm:px-8 lg:px-32">
      {/* Breadcrumb */}
      <div className="flex items-center gap-x-3 mt-10 sm:mt-20 text-sm">
        <Link href="/home" className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <Link href="/home" className="text-black">
          Contact
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-x-7 mt-10 lg:mt-20">
        {/* Left Box */}
        <div className="w-full lg:w-1/3 rounded shadow-sm py-8 sm:py-11 px-6 sm:px-8">
          <div>
            <div className="flex items-center gap-x-4">
              <div className="bg-[#DB4444] h-10 w-10 flex items-center justify-center rounded-full">
                <Image
                  src="/call-icons.svg"
                  alt="call icon"
                  height={20}
                  width={20}
                />
              </div>
              <h2 className="font-medium text-base sm:text-lg">Call To Us</h2>
            </div>
            <p className="text-sm mt-6">
              We are available 24/7, 7 days a week.
            </p>
            <p className="text-sm mt-4">Phone: +8801611112222</p>
            <hr className="mt-8 text-[#c9c8c8]" />
          </div>

          <div className="mt-8">
            <div className="flex items-center gap-x-4">
              <div className="bg-[#DB4444] h-10 w-10 flex items-center justify-center rounded-full">
                <Image
                  src="/message-icon.svg"
                  alt="message icon"
                  height={20}
                  width={20}
                />
              </div>
              <h2 className="font-medium text-base sm:text-lg">Write To Us</h2>
            </div>
            <p className="text-sm mt-6">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <p className="text-sm mt-4">Emails: customer@exclusive.com</p>
            <p className="text-sm mt-4">Emails: support@exclusive.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-2/3 rounded shadow-sm py-8 sm:py-10 px-6 sm:px-8">
          <form>
            {/* Inputs */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="text"
                className="h-12 w-full sm:w-1/3 outline-none rounded bg-[#F5F5F5] px-4"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="h-12 w-full sm:w-1/3 outline-none rounded bg-[#F5F5F5] px-4"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="h-12 w-full sm:w-1/3 outline-none rounded bg-[#F5F5F5] px-4"
                placeholder="Your Phone"
              />
            </div>

            {/* Textarea */}
            <textarea
              className="bg-[#F5F5F5] outline-none rounded w-full mt-6 sm:mt-8 py-3 px-4"
              rows="7"
              placeholder="Your Message"
            ></textarea>

            {/* Button */}
            <div className="flex justify-end mt-6 sm:mt-8">
              <Button
                btn_text="Send Message"
                btn_height="h-12 sm:h-14"
                btn_width="w-full sm:w-[215px]"
                btn_color="bg-[#BD4444]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
