"use client";

import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

export default function About() {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    items: cartItems,
    loading,
    error,
  } = useSelector((state) => state.cart);

  // Local state for quantities
  const [quantities, setQuantities] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = item.quantity || 1; // default 1
      return acc;
    }, {})
  );

  const handleIncrease = (id) => {
    setQuantities((prev) => {
      const newQty = (prev[id] || 1) + 1;
      return { ...prev, [id]: newQty };
    });
  };

  const handleDecrease = (id) => {
    setQuantities((prev) => {
      const newQty = prev[id] > 1 ? prev[id] - 1 : 1;
      return { ...prev, [id]: newQty };
    });
  };

  if (loading) return <p className="text-center py-5 lg:py-10">Adding to cart...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  // Calculate totals
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * (quantities[item.id] || 1),
    0
  );
   const handleCheckOut = () => {
    router.push(`/check-out`);
  };

  return (
    <div>
      {/* Breadcrumb */}
      <div className="flex items-center gap-x-3 px-4 sm:px-6 lg:px-32 mt-10">
        <Link href="/" className="text-sm text-gray-500">
          Home
        </Link>
        <span>/</span>
        <Link href="/cart" className="text-sm">
          Cart
        </Link>
      </div>

      {/* Table */}
      <div className="px-4 sm:px-6 lg:px-32 mt-10 overflow-x-auto">
        <table className="w-full min-w-[600px] border-separate border-spacing-y-6">
          <thead>
            <tr className="shadow-sm text-sm sm:text-base">
              <td className="rounded-l-sm px-4 sm:px-10 py-4">Product</td>
              <td>Price</td>
              <td className="text-end">Quantity</td>
              <td className="text-end rounded-r-sm px-4 sm:px-10">SubTotal</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.length === 0 ? (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-10 text-gray-500 italic"
                >
                  Your cart is empty
                </td>
              </tr>
            ) : (
              cartItems.map((item) => (
                <tr className="shadow-sm text-sm sm:text-base" key={item.id}>
                  {/* Product */}
                  <td className="text-center rounded-l-sm px-4 sm:px-10 py-7">
                    <Image
                      src={item.image}
                      alt={item.name || "Product image"}
                      width={50}
                      height={39}
                      unoptimized
                    />
                  </td>

                  {/* Price */}
                  <td className="py-7">${item.price}</td>

                  {/* Quantity */}
                  <td className="py-7">
                    <div className="flex items-center justify-end">
                      <div className="border rounded w-20 border-gray-500 flex items-center justify-center gap-x-4">
                        {quantities[item.id]}
                        <div className="flex flex-col">
                          <button
                            type="button"
                            onClick={() => handleIncrease(item.id)}
                            className="cursor-pointer"
                          >
                            <Image
                              src="/Drop-Up-Small.svg"
                              alt="up"
                              width={16}
                              height={16}
                            />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDecrease(item.id)}
                            className="cursor-pointer"
                          >
                            <Image
                              src="/Drop-Down-Small.svg"
                              alt="down"
                              width={16}
                              height={16}
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Subtotal */}
                  <td className="px-4 sm:px-10 text-end py-7 rounded-r-sm">
                    ${(item.price * (quantities[item.id] || 1)).toFixed(2)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-32 mt-6">
        <button
          type="button"
          className="py-3 px-6 sm:py-4 sm:px-12 border rounded border-[#7D8184] w-full sm:w-auto"
        >
          Return To Shop
        </button>
        <button
          type="button"
          className="py-3 px-6 sm:py-4 sm:px-12 border rounded border-[#7D8184] w-full sm:w-auto"
        >
          Update Cart
        </button>
      </div>

      {/* Cart Summary */}
      <div className="flex flex-col lg:flex-row justify-between items-start px-4 sm:px-6 lg:px-32 mt-10 gap-10">
        {/* Coupon */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
          <div className="border py-4 pl-6 rounded w-full sm:w-72">
            <p>Coupon Code</p>
          </div>
          <Button
            btn_text="Apply Coupon"
            btn_height="h-14"
            btn_width="w-full sm:w-[222px]"
            btn_color="bg-[#BD4444]"
          />
        </div>

        {/* Cart Total */}
        <div className="border rounded w-full lg:w-[470px] py-8 px-6">
          <p className="text-lg sm:text-xl font-medium">Cart Total</p>
          <div className="flex items-center mt-6 justify-between text-sm sm:text-base">
            <p>SubTotal:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <hr className="text-[#7D8184] mt-4" />
          <div className="flex items-center mt-4 justify-between text-sm sm:text-base">
            <p>Shipping:</p>
            <p>Free</p>
          </div>
          <hr className="text-[#7D8184] mt-4" />
          <div className="flex items-center mt-4 justify-between text-sm sm:text-base">
            <p>Total:</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-center mt-6">
            <Button
            onClick={handleCheckOut}
              btn_text="Proceed to Checkout"
              btn_height="h-14"
              btn_width="w-full sm:w-[260px]"
              btn_color="bg-[#BD4444]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
