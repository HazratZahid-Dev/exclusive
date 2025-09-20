"use client";
import { useEffect, useState } from "react";
import { useRef } from "react";
import Image from "next/image";
import Card from "./components/Card";
import Sidebar from "./components/Sidebar";

import CategoriesCard from "./components/Cat_Card";
import Slider from "react-slick";
import Button from "./components/Button";

export default function Home() {
  const sliderRef = useRef(null);
  const WEEK_IN_SECONDS = 7 * 24 * 60 * 60;
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllProduct, setShowAllProduct] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  const [timeLeft, setTimeLeft] = useState(WEEK_IN_SECONDS);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimeLeft((prev) => {
  //       if (prev <= 0) {
  //         return WEEK_IN_SECONDS; // restart after 1 week
  //       }
  //       return prev - 1;
  //     });
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  // convert seconds → days, hours, minutes, seconds
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  // format numbers with leading zeros
  const format = (n) => n.toString().padStart(2, "0");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    fade: false,
    autoplay: false,
  };

  return (
    <div className="">
      <div className="px-4 sm:px-6 xl:px-32 flex flex-col lg:flex-row gap-6">
        <Sidebar onCategorySelect={setSelectedCategory} />

        <div className="w-full lg:w-6/8 pt-6 lg:pt-10 bg-black mt-6 lg:mt-10 px-6 sm:px-10 lg:px-16 h-auto lg:h-[344px] rounded-md">
          <Slider {...settings}>
            <div>
              <div className="text-white flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
                <div className="flex flex-col gap-y-5 items-start w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex items-center gap-x-4 lg:gap-x-6 justify-center lg:justify-start">
                    <Image
                      src="/apple.svg"
                      alt="arrow"
                      width={40}
                      height={49}
                    />
                    <p className="text-base">Iphone 14 Sales</p>
                  </div>
                  <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-snug">
                    Up to 10% <br className="hidden xl:block" /> off Voucher
                  </h3>
                  <div className="flex flex-col items-center lg:items-start">
                    <button
                      type="button"
                      className="flex items-center gap-x-2.5"
                    >
                      Shop Now{" "}
                      <Image
                        src="/rightArrowWhite.svg"
                        alt="arrow"
                        width={16}
                        height={14}
                      />
                    </button>
                    <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full mt-1"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src="/iphone14.png"
                    alt="iphone"
                    width={496}
                    height={100}
                    className="w-48 sm:w-full md:w-72 lg:w-[496px] h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="text-white flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
                <div className="flex flex-col gap-y-5 items-start w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex items-center gap-x-4 lg:gap-x-6 justify-center lg:justify-start">
                    <Image
                      src="/product3.png"
                      alt="mouse"
                      width={40}
                      height={49}
                    />
                    <p className="text-base">Game Mouse Sales</p>
                  </div>
                  <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-snug">
                    Up to 10% <br className="hidden xl:block" /> off Voucher
                  </h3>
                  <div className="flex flex-col items-center lg:items-start">
                    <button
                      type="button"
                      className="flex items-center gap-x-2.5"
                    >
                      Shop Now{" "}
                      <Image
                        src="/rightArrowWhite.svg"
                        alt="arrow"
                        width={16}
                        height={14}
                      />
                    </button>
                    <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full mt-1"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src="/product3.png"
                    alt="mouse"
                    width={496}
                    height={100}
                    className="w-48 sm:w-60 md:w-72 lg:w-[496px] h-auto"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="text-white flex flex-col lg:flex-row items-center gap-6 lg:gap-0">
                <div className="flex flex-col gap-y-5 items-start w-full lg:w-1/2 text-center lg:text-left">
                  <div className="flex items-center gap-x-4 lg:gap-x-6 justify-center lg:justify-start">
                    <Image
                      src="/product4.png"
                      alt="pc"
                      width={40}
                      height={49}
                    />
                    <p className="text-base">Dell PC Sales</p>
                  </div>
                  <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl leading-snug">
                    Up to 15% <br className="hidden xl:block" /> off Voucher
                  </h3>
                  <div className="flex flex-col items-center lg:items-start">
                    <button
                      type="button"
                      className="flex items-center gap-x-2.5"
                    >
                      Shop Now{" "}
                      <Image
                        src="/rightArrowWhite.svg"
                        alt="arrow"
                        width={16}
                        height={14}
                      />
                    </button>
                    <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full mt-1"></div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center">
                  <Image
                    src="/product4.png"
                    alt="pc"
                    width={496}
                    height={100}
                    className="w-48 sm:w-60 md:w-72 lg:w-[496px] h-auto"
                  />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

      <div className="pt-20 md:pt-[140px] pb-10 md:pb-14 px-4 sm:px-8 md:px-16 lg:px-32">
        {/* Section Title */}
        <div className="flex items-center gap-x-3 sm:gap-x-4">
          <div className="bg-[#DB4444] h-8 w-3 sm:h-10 sm:w-5 rounded"></div>
          <p className="text-sm sm:text-base text-[#DB4444] font-semibold">
            Today's
          </p>
        </div>

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center gap-y-6 md:gap-y-0 gap-x-10 md:gap-x-20 mt-6">
          {/* Title */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            Flash Sales
          </h3>

          {/* Countdown */}
          <div className="flex items-center justify-start md:justify-center gap-x-3 sm:gap-x-4">
            <div className="flex flex-col items-center gap-y-1">
              <h4 className="text-xs sm:text-sm font-medium">Days</h4>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {format(days)}
              </h4>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E07575] mt-2">
              :
            </span>

            <div className="flex flex-col items-center gap-y-1">
              <h4 className="text-xs sm:text-sm font-medium">Hours</h4>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {format(hours)}
              </h4>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E07575] mt-2">
              :
            </span>

            <div className="flex flex-col items-center gap-y-1">
              <h4 className="text-xs sm:text-sm font-medium">Minutes</h4>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {format(minutes)}
              </h4>
            </div>
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E07575] mt-2">
              :
            </span>

            <div className="flex flex-col items-center gap-y-1">
              <h4 className="text-xs sm:text-sm font-medium">Seconds</h4>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold">
                {format(seconds)}
              </h4>
            </div>
          </div>

          {/* Arrows */}
          {!viewAll && (
            <div className="flex items-center gap-x-2 md:ml-auto justify-center md:justify-end  md:mt-0">
              <button
                type="button"
                onClick={() => sliderRef.current?.prev()}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 bg-[#F5F5F5] cursor-pointer rounded-full flex items-center justify-center"
              >
                <Image
                  src="/leftArrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </button>
              <button
                type="button"
                onClick={() => sliderRef.current?.next()}
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 cursor-pointer bg-[#F5F5F5] rounded-full flex items-center justify-center"
              >
                <Image
                  src="/rightArrow.svg"
                  alt="arrow"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="lg:ml-32  ">
        <Card ref={sliderRef} category={selectedCategory} viewAll={viewAll} />
      </div>

      <div className="flex items-center justify-center my-14">
        <Button
          btn_text={viewAll ? "Back to Slider" : "View All Products"}
          btn_height="h-14"
          btn_width="w-[234px]"
          btn_color="bg-[#BD4444]"
          onClick={() => setViewAll(!viewAll)}
        />
      </div>
      <div className="px-4 lg:px-32">
        <hr />
      </div>
      <div className="flex items-center gap-x-4 px-4 lg:px-32 mt-10 lg:mt-20">
        <div className="bg-[#DB4444] h-10 w-5 rounded "></div>
        <p className="text-base text-[#DB4444] font-semibold">Categories</p>
      </div>
      <div className="flex items-center gap-x-20 mt-5 px-4 lg:px-32">
        <h3 className=" text-xl lg:text-4xl font-semibold lg:mt-3">
          Browse By Category
        </h3>

        <div className="flex items-center gap-x-2 ml-auto">
          <button
            type="button"
            className="w-11 h-11  bg-[#F5F5F5] rounded-full flex items-center justify-center"
          >
            <Image src="/leftArrow.svg" alt="arrow" width={16} height={16} />
          </button>
          <button
            type="button"
            className="w-11 h-11 bg-[#F5F5F5] rounded-full flex items-center justify-center"
          >
            <Image src="/rightArrow.svg" alt="arrow" width={16} height={16} />
          </button>
        </div>
      </div>
      <CategoriesCard />

      <div className="flex items-center gap-x-4 px-4 lg:px-32 mt-10 lg:mt-20">
        <div className="bg-[#DB4444] h-10 w-5 rounded "></div>
        <p className="text-base text-[#DB4444] font-semibold">This Month</p>
      </div>
      <div className="flex items-center lg:gap-x-20 mt-5 px-4 lg:px-32">
        <h3 className="text-xl lg:text-4xl font-semibold lg:mt-3">
          Best Selling Products
        </h3>

        <div className="flex items-center gap-x-2 ml-auto">
          <Button
            onClick={() => setViewAll(!viewAll)}
            btn_text={viewAll ? "Best Selling" : "View All"}
            btn_height="h-14"
            btn_width="w-[159px]"
            btn_color="bg-[#BD4444]"
          />
        </div>
      </div>
      <div className="mt-14 px-32 ">
        {viewAll == true ? (
          <Card viewAll={viewAll} />
        ) : (
          <Card category="electronics" />
        )}
      </div>
      <div className="px-4 lg:px-32">
        <div className="mt-[140px] bg-black w-full lg:h-[500px] text-white py-10 lg:py-16 px-8 lg:px-14 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2  flex flex-col gap-y-4 lg:gap-y-8 items-start">
            <h3 className="text-[#00FF66] font-semibold">Categories</h3>
            <h1 className="text-2xl lg:text-5xl font-semibold lg:leading-14">
              Enhance Your <br /> Music Experience
            </h1>
            <div className="flex items-center gap-x-4">
              <div className="flex flex-col bg-white text-black rounded-full w-16 h-16 justify-center items-center">
                <h4 className="text-base font-semibold">{format(days)}</h4>
                <h4 className="text-xs font-medium">Days</h4>
              </div>

              <div className="flex flex-col bg-white text-black rounded-full w-16 h-16 justify-center items-center ">
                <h4 className="text-base font-semibold">{format(hours)}</h4>
                <h4 className="text-xs font-medium">Hours</h4>
              </div>

              <div className="flex flex-col bg-white text-black rounded-full w-16 h-16 justify-center items-center ">
                <h4 className="text-base font-semibold">{format(minutes)}</h4>
                <h4 className="text-xs font-medium">Minutes</h4>
              </div>

              <div className="flex flex-col bg-white text-black rounded-full w-16 h-16 justify-center items-center ">
                <h4 className="text-base font-semibold">{format(seconds)}</h4>
                <h4 className="text-xs font-medium">Seconds</h4>
              </div>
            </div>
            <div className=" lg:hidden lg:w-1/2 h-[330px] ">
              <Image
                src="/musicExp.png"
                alt="arrow"
                width={568}
                height={330}
                className="w-full h-full object-fill"
              />
            </div>
            <button
              type="button"
              className="bg-[#00FF66] py-4 w-full lg:px-12 rounded-sm"
            >
              Buy Now!
            </button>
          </div>
          <div className="hidden lg:block lg:w-1/2 h-[330px] ">
            <Image
              src="/musicExp.png"
              alt="arrow"
              width={568}
              height={330}
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-4 px-4 lg:px-32 mt-10 lg:mt-20">
        <div className="bg-[#DB4444] h-10 w-5 rounded "></div>
        <p className="text-base text-[#DB4444] font-semibold">Our Products</p>
      </div>
      <div className="flex items-center gap-x-20 mt-5 px-4 lg:px-32">
        <h3 className="text-xl lg:text-4xl font-semibold lg:mt-3">
          Explore Our Products
        </h3>

        <div className="flex items-center gap-x-2 ml-auto">
          <button
            type="button"
            onClick={() => sliderRef.current?.prev()}
            className="w-11 h-11 bg-[#F5F5F5] cursor-pointer rounded-full flex items-center justify-center"
          >
            <Image src="/leftArrow.svg" alt="arrow" width={16} height={16} />
          </button>
          <button
            type="button"
            onClick={() => sliderRef.current?.next()}
            className="w-11 h-11 cursor-pointer bg-[#F5F5F5] rounded-full flex items-center justify-center"
          >
            <Image src="/rightArrow.svg" alt="arrow" width={16} height={16} />
          </button>
        </div>
      </div>
      <div className=" px-4 lg:px-32 ">
        <Card ref={sliderRef} />
      </div>
      <div className="flex items-center gap-x-4 px-4 lg:px-32 mt-10 lg:mt-20">
        <div className="bg-[#DB4444] h-10 w-5 rounded "></div>
        <p className="text-base text-[#DB4444] font-semibold">Featured</p>
      </div>
      <div className="flex items-center gap-x-20 mt-2.5 lg:mt-5 px-4 lg:px-32">
        <h3 className="text-xl lg:text-4xl font-semibold mt-3">New Arrival</h3>
      </div>
      <div className="mt-14 px-4 sm:px-6 md:px-32 flex flex-col md:flex-row gap-6">
        {/* Left Section */}
        <div className="bg-black rounded-sm w-full md:w-1/2 h-[400px] md:h-[600px] px-6 md:px-8 pt-20 md:pt-[89px]">
          <div className="relative bg-[url('/newAr1.png')] w-full h-full bg-no-repeat bg-cover rounded-sm">
            <div className="absolute flex flex-col gap-y-4 bottom-6 md:bottom-8 px-4 md:px-0">
              <h2 className="text-white font-semibold text-xl md:text-2xl">
                PlayStation 5
              </h2>
              <p className="text-white text-sm md:text-base">
                Black and White version of the PS5{" "}
                <br className="hidden md:block" />
                coming out on sale.
              </p>
              <div>
                <button
                  type="button"
                  className="flex items-center font-medium text-white gap-x-2.5"
                >
                  Shop Now
                </button>
                <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          {/* Top Box */}
          <div className="bg-black w-full h-[200px] md:h-1/2 rounded-sm">
            <div className="relative bg-[url('/newAr2.png')] w-full h-full px-4 md:px-6 bg-no-repeat bg-cover rounded-sm">
              <div className="absolute flex flex-col gap-y-3 bottom-4 md:bottom-6">
                <h2 className="text-white font-semibold text-xl md:text-2xl">
                  Women’s Collections
                </h2>
                <p className="text-white text-sm md:text-base">
                  Featured woman collections that{" "}
                  <br className="hidden md:block" />
                  give you another vibe.
                </p>
                <div>
                  <button
                    type="button"
                    className="flex items-center font-medium text-white gap-x-2.5"
                  >
                    Shop Now
                  </button>
                  <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Two Boxes */}
          <div className="flex flex-col sm:flex-row items-stretch gap-6 h-[400px] md:h-1/2">
            {/* Box 1 */}
            <div className="bg-black w-full sm:w-1/2 h-1/2 sm:h-full rounded-sm relative">
              <div className="absolute inset-0 bg-white/10 rounded-sm"></div>
              <div className="relative bg-[url('/newAr4.png')] rounded-sm w-full h-full px-4 md:px-6 bg-no-repeat bg-center">
                <div className="absolute flex flex-col gap-y-2 bottom-4 md:bottom-6 z-10">
                  <h2 className="text-white font-semibold text-xl md:text-2xl">
                    Speakers
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    Amazon wireless speakers
                  </p>
                  <div>
                    <button
                      type="button"
                      className="flex items-center font-medium text-white gap-x-2.5"
                    >
                      Shop Now
                    </button>
                    <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-black w-full sm:w-1/2 h-1/2 sm:h-full rounded-sm relative">
              <div className="absolute inset-0 bg-white/15 rounded-sm"></div>
              <div className="relative bg-[url('/newAr3.png')] rounded-sm w-full h-full px-4 md:px-6 bg-no-repeat bg-center">
                <div className="absolute flex flex-col gap-y-2 bottom-4 md:bottom-6 z-10">
                  <h2 className="text-white font-semibold text-xl md:text-2xl">
                    Speakers
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    Amazon wireless speakers
                  </p>
                  <div>
                    <button
                      type="button"
                      className="flex items-center font-medium text-white gap-x-2.5"
                    >
                      Shop Now
                    </button>
                    <div className="w-[71px] h-0.5 bg-[#FAFAFA] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-20 md:mt-36 items-center justify-center gap-10 md:gap-x-20 text-center px-4">
        {/* Box 1 */}
        <div className="flex flex-col items-center">
          <div className="bg-black h-14 w-14 p-1 border-gray-300 border-8 rounded-full flex items-center justify-center">
            <Image
              src="/icon-delivery.svg"
              alt="delivery"
              width={40}
              height={40}
            />
          </div>
          <h4 className="font-semibold text-lg md:text-xl mt-4 md:mt-6">
            FREE AND FAST DELIVERY
          </h4>
          <p className="text-sm mt-2">Free delivery for all orders over $140</p>
        </div>

        {/* Box 2 */}
        <div className="flex flex-col items-center">
          <div className="bg-black h-14 w-14 p-1 border-gray-300 border-8 rounded-full flex items-center justify-center">
            <Image
              src="/Icon-Customer service.svg"
              alt="customer service"
              width={40}
              height={40}
            />
          </div>
          <h4 className="font-semibold text-lg md:text-xl mt-4 md:mt-6">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="text-sm mt-2">Friendly 24/7 customer support</p>
        </div>

        {/* Box 3 */}
        <div className="flex flex-col items-center">
          <div className="bg-black h-14 w-14 p-1 border-gray-300 border-8 rounded-full flex items-center justify-center">
            <Image
              src="/shield-tick.svg"
              alt="money back"
              width={40}
              height={40}
            />
          </div>
          <h4 className="font-semibold text-lg md:text-xl mt-4 md:mt-6">
            MONEY BACK GUARANTEE
          </h4>
          <p className="text-sm mt-2">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
