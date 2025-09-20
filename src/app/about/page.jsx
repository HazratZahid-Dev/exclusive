"use client";

import Image from "next/image";
import Link from "next/link";

const about_card = [
  {
    id: 1,
    icon: "/icon_shop.svg",
    digit: "10.5k",
    desc: "Sallers active our site",
    team_member: "/teamMember1.png",
    name: "Tom Cruise",
    category: "Founder & Chairman",
    social_icons: [
      "/icon-LinkedinV2.svg",
      "/Icon-TwitterV2.svg",
      "/icon-instagramV2.svg",
    ],
  },
  {
    id: 2,
    icon: "/Icon-sale.svg",
    digit: "35k",
    desc: "Monthly Product Sale",
    team_member: "/teamMember2.png",
    name: "Emma Watson",
    category: "Managing Director",
    social_icons: [
      "/icon-LinkedinV2.svg",
      "/Icon-TwitterV2.svg",
      "/icon-instagramV2.svg",
    ],
  },
  {
    id: 3,
    icon: "/Icon-shopping bag.svg",
    digit: "45.5k",
    desc: "Customer active in our site",
    team_member: "/teamMembe3.png",
    name: "Will Smith",
    category: "Product Designer",
    social_icons: [
      "/icon-LinkedinV2.svg",
      "/Icon-TwitterV2.svg",
      "/icon-instagramV2.svg",
    ],
  },
  {
    id: 4,
    icon: "/anualGrossSale.svg",
    digit: "10.5k",
    desc: "Annual gross sale in our site",
  },
];

export default function About() {
  return (
    <div className="px-4 sm:px-8 lg:px-32">
      {/* Breadcrumb */}
      <div className="flex items-center gap-x-2 mt-10 text-sm">
        <Link href="/home" className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <Link href="/home" className="text-black">
          About
        </Link>
      </div>

      {/* Story Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mt-10">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Our Story
          </h1>
          <p className="mt-6 text-sm sm:text-base leading-relaxed">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by a wide
            range of tailored marketing, data, and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers across
            the region.
            <br />
            <br />
            Exclusive has more than 1 Million products to offer, growing very fast.
            Exclusive offers a diverse assortment in categories ranging from consumer.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image
            src="/about-left-side.png"
            alt="about left side image"
            width={705}
            height={0}
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {about_card.map((items) => (
          <div
            key={items.id}
            className={`${
              items.id === 2 ? "bg-[#DB4444] text-white" : "border bg-white"
            } rounded flex flex-col items-center justify-center py-10`}
          >
            <div
              className={`${
                items.id === 2 ? "bg-white" : "bg-black"
              } rounded-full w-16 h-16 flex items-center justify-center border-4 border-gray-300`}
            >
              <Image src={items.icon} width={40} height={40} alt={items.desc} />
            </div>
            <p className="font-bold text-2xl sm:text-3xl mt-6">{items.digit}</p>
            <p className="mt-3 text-center text-sm sm:text-base">{items.desc}</p>
          </div>
        ))}
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
        {about_card.slice(0, 3).map((items) => (
          <div key={items.id} className="text-center">
            <div className="bg-[#F5F5F5] rounded flex justify-center items-end h-[430px]">
              <Image
                src={items.team_member}
                width={236}
                height={391}
                alt={items.category}
                className="h-[391px] w-[236px] object-cover"
              />
            </div>
            <p className="font-medium text-xl sm:text-2xl mt-6">{items.name}</p>
            <p className="mt-2 text-sm sm:text-base">{items.category}</p>
            {items.social_icons && (
              <div className="flex items-center justify-center gap-x-3 mt-4">
                {items.social_icons.map((icon, index) => (
                  <Image
                    key={index}
                    width={24}
                    height={24}
                    src={icon}
                    alt={`icon-${index}`}
                    className="w-6 h-6"
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Features Section */}
      <div className="flex flex-col sm:flex-row sm:justify-center sm:gap-x-10 lg:gap-x-20 mt-20 gap-y-12 sm:gap-y-0">
        <div className="flex flex-col items-center text-center">
          <div className="bg-black h-14 w-14 p-1 border-gray-300 border-8 rounded-full flex items-center justify-center">
            <Image src="/icon-delivery.svg" alt="delivery" width={40} height={40} />
          </div>
          <h4 className="font-semibold text-lg sm:text-xl mt-4">
            FREE AND FAST DELIVERY
          </h4>
          <p className="text-sm mt-2">Free delivery for all orders over $140</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-black h-14 w-14 p-1 border-gray-300 border-8 rounded-full flex items-center justify-center">
            <Image
              src="/Icon-Customer service.svg"
              alt="customer service"
              width={40}
              height={40}
            />
          </div>
          <h4 className="font-semibold text-lg sm:text-xl mt-4">
            24/7 CUSTOMER SERVICE
          </h4>
          <p className="text-sm mt-2">Friendly 24/7 customer support</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="bg-black h-14 w-14 p-1 border-gray-300 border-8 rounded-full flex items-center justify-center">
            <Image src="/shield-tick.svg" alt="secure" width={40} height={40} />
          </div>
          <h4 className="font-semibold text-lg sm:text-xl mt-4">
            MONEY BACK GUARANTEE
          </h4>
          <p className="text-sm mt-2">We return money within 30 days</p>
        </div>
      </div>
    </div>
  );
}
