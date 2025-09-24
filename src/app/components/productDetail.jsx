"use client";
import { useEffect, useState } from "react";
import { base_url } from "@/app/config/api";
import Image from "next/image";
import Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import Link from "next/link";
import { addToWishlist } from "../slices/wishlistSlice";
import { useDispatch } from "react-redux";
import Loader from "./Loader";

export default function ProductDetail({ id }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  //   // Handle size
  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${base_url}/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <div className="flex items-center justify-center lg:mt-20">
    <Loader/>
  </div>;
  if (!product) return <p>Not Found</p>;

  console.log("prrr", product);

  return (
    <div className="px-4 sm:px-8 lg:px-32">
      {/* Breadcrumb */}
      <div className="flex items-center gap-x-2 mt-10 text-sm">
        <Link href="/home" className="text-gray-500">
          Account
        </Link>
        <span>/</span>
        <Link href="/home" className="text-black">
          Category
        </Link>
      </div>

      {/* Main Layout */}
      <div className="w-full flex mt-20 gap-x-16">
        {/* Images */}
        <div className="w-2/3 flex gap-x-8">
          <div className="flex flex-col gap-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-[#F5F5F5] w-44 h-full rounded flex items-center justify-center"
              >
                <Image
                  src={product.image}
                  alt="product"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
          <div className="bg-[#F5F5F5] w-full relative rounded flex items-center justify-center">
            <div className="w-[calc(100%-60px)] h-full relative">
              <Image
                src={product.image}
                alt="product"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="w-2/6">
          <div>
            <h1 className="text-2xl font-semibold">{product.title}</h1>

            {/* Stars */}
            <div className="mt-4">
              <div className="flex gap-x-4 items-center ">
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Image
                      key={i}
                      src={
                        i < Math.round(product?.rating?.rate)
                          ? "/star.svg"
                          : "/empty-star.svg"
                      }
                      alt="rating"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-400">
                  ({product?.rating?.count || 0} Reviews)
                </p>
                <span className="h-4 bg-gray-200 w-0.5"></span>
                <p className="text-[#00FF66] text-sm">In Stock </p>
              </div>

              {/* Price */}
              <h2 className="text-2xl mt-4">$ {product.price}</h2>

              {/* Description */}
              <p className="text-sm mt-6">{product.description}</p>

              <hr className="text-gray-200 mt-6" />

              {/* Colors */}
              <div className="mt-6 flex gap-x-6">
                <p className="text-xl">Colors: </p>
                <div className="flex gap-x-2">
                  <span className="bg-gray-300 w-5 h-5 rounded-full cursor-pointer"></span>
                  <span className="bg-[#BD3344] w-5 h-5 rounded-full cursor-pointer"></span>
                </div>
              </div>

              {/* Sizes */}
              <div className="mt-6 flex gap-x-6">
                <p className="text-xl">Size: </p>
                <div className="flex gap-x-4">
                  {["XS", "S", "M", "L", "XL"].map((size) => (
                    <span
                      key={size}
                      onClick={() => handleSizeClick(size)}
                      className={`border w-8 h-8 flex items-center justify-center rounded-sm text-sm cursor-pointer transition 
                      ${
                        selectedSize === size
                          ? "bg-black text-white border-black"
                          : "hover:bg-gray-200"
                      }`}
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Counter & Actions */}
              <div className="flex items-center mt-6 gap-x-4">
                <div className="border rounded w-40 h-11 flex items-center justify-around text-xl font-medium">
                  <button
                    onClick={decreaseQty}
                    className="border-r p-1 text-center w-full cursor-pointer"
                  >
                    -
                  </button>
                  <span className="border-r p-1 text-center w-full">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQty}
                    className="p-1 text-center w-full cursor-pointer"
                  >
                    +
                  </button>
                </div>
                <Button
                  btn_text="Buy Now"
                  btn_height="h-11"
                  btn_width="w-40"
                  btn_color="bg-[#BD1144]"
                />
                <button
                  onClick={() => dispatch(addToWishlist(product))}
                  className="border w-11 cursor-pointer h-11 flex items-center justify-center rounded-sm text-sm"
                >
                  <Image
                    src="/favourit.svg"
                    width={20}
                    height={20}
                    alt="fvrt"
                  />
                </button>
              </div>

              {/* Delivery Info */}
              <div className="border border-gray-300 mt-10 flex flex-col rounded">
                <div className="flex items-center gap-x-4 p-4">
                  <Image
                    src="/icon-delivery.svg"
                    alt=""
                    width={40}
                    height={40}
                  />
                  <div>
                    <p className="text-base font-medium">Free Delivery</p>
                    <p className="text-xs font-medium">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <hr className="text-gray-300" />
                <div className="flex items-center gap-x-4 p-4">
                  <Image src="/Icon-return.svg" alt="" width={40} height={40} />
                  <div>
                    <p className="text-base font-medium">Return Delivery</p>
                    <p className="text-xs font-medium">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Items */}
      <div className="flex items-center gap-x-4 mt-10 lg:mt-20">
        <div className="bg-[#DB4444] h-10 w-5 rounded"></div>
        <p className="text-base text-[#DB4444] font-semibold">Related Items</p>
      </div>

      <Card />
    </div>
  );
}
