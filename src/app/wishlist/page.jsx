"use client";

import { useSelector } from "react-redux";
import Image from "next/image";
import { addToCartAPI, addToCartLocal } from "../slices/cartSlice";
import { useDispatch } from "react-redux";
import { clearWishlist, removeFromWishlist } from "../slices/wishlistSlice";
import Card from "../components/Card";
import { useState } from "react";
import Button from "../components/Button";

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const [viewAll, setViewAll] = useState(false);

  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCartAPI(product));
  };

  const handleMoveAllToCart = () => {
    wishlistItems.forEach((item) => {
      dispatch(addToCartLocal(item));
    });
    dispatch(clearWishlist());
  };
  return (
    <div className="px-4 space-y-10 lg:space-y-0 lg:px-32">
      <div className="flex items-center justify-between mt-20">
        <p className="text-xl ">Wish List ({wishlistItems.length})</p>
        {wishlistItems.length < 2 ? (
          ""
        ) : (
          <button
            type="button"
            onClick={handleMoveAllToCart}
            className="py-2 cursor-pointer text-sm lg:text-base lg:py-4 px-6 lg:px-12 border font-medium rounded"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <p className="text-center py-5 lg:py-10">No items in wish list</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center mt-7 lg:mt-14">
          {wishlistItems.map((items) => (
            <div key={items?.id} className="w-full max-w-[270px]">
              <div className="bg-[#F5F5F5] relative rounded-sm w-full h-[250px] p-3 group overflow-hidden">
                {/* top badge */}
                <div className="flex items-center justify-between">
                  <div className="bg-[#DB4444] text-white text-xs font-medium text-center w-14 h-6 flex items-center justify-center rounded">
                    {items?.rating?.rate}
                  </div>

                  <button
                    onClick={() => dispatch(removeFromWishlist(items.id))}
                    className="w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow"
                  >
                    <Image
                      src="/trash.svg"
                      alt="trash"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>

                {/* Product Image */}
                <div className="w-full flex items-center justify-center h-[150px]">
                  <Image
                    src={items.image}
                    alt={items?.title}
                    width={172}
                    height={152}
                    className="object-contain max-h-[150px]"
                    unoptimized
                  />
                </div>

                {/* Add To Cart */}
                <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <button
                    onClick={() => handleAddToCart(items)}
                    className="w-full bg-black cursor-pointer text-white py-2 text-sm font-medium"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>

              <div className="space-y-2 mt-4">
                <h3 className="text-sm sm:text-base font-medium mt-4 truncate">
                  {items.title}
                </h3>

                <div className="flex items-center gap-x-3">
                  <p className="text-[#DB4444] font-medium">
                    ${items?.price ? (items.price * 0.8).toFixed(2) : ""}
                  </p>
                  <p className="text-gray-400 line-through">${items?.price}</p>
                </div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Image
                      key={i}
                      src={
                        i < Math.round(items?.rating?.rate)
                          ? "/star.svg"
                          : "/empty-star.svg"
                      }
                      alt="rating"
                      width={20}
                      height={20}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center mt-10 lg:mt-20">
        <div className="flex items-center gap-x-4  ">
          <div className="bg-[#DB4444] h-10 w-5 rounded "></div>
          <p className="text-base text-[#DB4444] font-semibold">Just For You</p>
        </div>

        <div className="flex items-center gap-x-2 ml-auto">
          <Button
            onClick={() => setViewAll(!viewAll)}
            btn_text={viewAll ? "For You" : "View All"}
            btn_height="h-14"
            btn_width="w-[159px]"
            btn_color="bg-[#BD4444]"
          />
        </div>
      </div>
      <div className="mt-14  ">
        {viewAll == true ? (
          <Card viewAll={viewAll} />
        ) : (
          <Card category="electronics" />
        )}
      </div>
    </div>
  );
}
