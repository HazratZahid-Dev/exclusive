"use client";

import Image from "next/image";
import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { base_url } from "../config/api";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { addToCartAPI } from "../slices/cartSlice";
import { addToWishlist } from "../slices/wishlistSlice";
import { useRouter } from "next/navigation";
import Loader from "./Loader";

const Card = forwardRef(({ category, viewAll = false }, ref) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const searchQuery = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  let sliderRef = null;
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [slidesToShow, setSlidesToShow] = useState(4);

useEffect(() => {
  const width = window.innerWidth;
  if (width <= 480) setSlidesToShow(1);
  else if (width <= 768) setSlidesToShow(1);
  else if (width <= 1024) setSlidesToShow(2);
   else if (width <= 1300) setSlidesToShow(3);
  else setSlidesToShow(4);
}, []);


  useImperativeHandle(ref, () => ({
    next: () => sliderRef?.slickNext(),
    prev: () => sliderRef?.slickPrev(),
  }));

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${base_url}`);
        if (!res.ok) throw new Error("Failed to fetch data");
        const result = await res.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = data
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((item) =>
      category ? item.category.toLowerCase() === category.toLowerCase() : true
    );

  const handleAddToCart = (product) => {
    dispatch(addToCartAPI(product));
  };

  const handleViewProduct = (id) => {
    router.push(`/product/${id}`);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
   slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // <= 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // <= 768px
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // <= 480px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="lg:pt-10">
    { isClient && (<>
      {loading ? (
        <div className="flex justify-center items-center h-60 ">
          <Loader />
        </div>
      ) : error ? (
        <p className="text-[#BD4444] text-center">Error: {error}</p>
      ) : viewAll ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center">
          {filteredData.map((items) => (
            <div key={items?.id} className="w-full max-w-[270px]">
              <div className="bg-[#F5F5F5] relative rounded-sm w-full h-[250px] p-3 group overflow-hidden">
                {/* top badge */}
                <div className="flex items-center justify-between">
                  <div className="bg-[#DB4444] text-white text-xs font-medium text-center w-14 h-6 flex items-center justify-center rounded">
                    {items?.rating?.rate}
                  </div>

                  <button
                    onClick={() => dispatch(addToWishlist(items))}
                    className="w-9 h-9 cursor-pointer bg-white rounded-full flex items-center justify-center shadow"
                  >
                    <Image
                      src="/favourit.svg"
                      alt="favorite"
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

                {/* View Button */}
                <button className="w-9 h-9 cursor-pointer absolute top-16 right-3 bg-white rounded-full flex items-center justify-center shadow">
                  <Image
                    src="/view.svg"
                    alt="favorite"
                    width={20}
                    height={20}
                  />
                </button>

                {/* Add To Cart */}
                <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                  <button
                    onClick={() => handleAddToCart(items)}
                    className="w-full bg-[#BD4444] cursor-pointer text-white py-2 text-sm font-medium"
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
      ) : (
        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          {filteredData.map((items) => (
            <div key={items?.id} className="px-2">
              <div className="w-full max-w-[270px] mx-auto">
                <div className="bg-[#F5F5F5] relative rounded-sm w-full h-[250px] p-3 group overflow-hidden">
                  {/* top badge */}
                  <div className="flex items-center justify-between">
                    <div className="bg-[#DB4444] text-white text-xs font-medium text-center w-14 h-6 flex items-center justify-center rounded">
                      {items?.rating?.rate}
                    </div>
                    <button
                      onClick={() => dispatch(addToWishlist(items))}
                      className="w-9 h-9 cursor-pointer outline-none bg-white rounded-full flex items-center justify-center shadow"
                    >
                      <Image
                        src="/favourit.svg"
                        alt="favorite"
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

                  {/* View Button */}
                  <button
                    onClick={() => handleViewProduct(items.id)}
                    className="w-9 h-9 cursor-pointer outline-none absolute top-16 right-3 bg-white rounded-full flex items-center justify-center shadow"
                  >
                    <Image
                      src="/view.svg"
                      alt="favorite"
                      width={20}
                      height={20}
                    />
                  </button>

                  {/* Add To Cart */}
                  <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-in-out">
                    <button
                      onClick={() => handleAddToCart(items)}
                      className="w-full bg-[#BD4444] cursor-pointer text-white py-2 text-sm font-medium"
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
                    <p className="text-gray-400 line-through">
                      ${items?.price}
                    </p>
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
            </div>
          ))}
        </Slider>
      )}
    </>
    )}
      
    </div>
  );
});

Card.displayName = "Card";
export default Card;
