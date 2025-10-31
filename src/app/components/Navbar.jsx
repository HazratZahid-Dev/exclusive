"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { supabase } from "../lib/supabaseClient";
import { setSearchQuery } from "../slices/searchSlice";
import Modal from "../components/Modal"; // ✅ import modal

export default function Navbar() {
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const cartItems = useSelector((state) => state.cart.items);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false); // ✅ confirmation modal
  const [loading, setLoading] = useState(false); // ✅ loader state
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    async function fetchUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
    }

    fetchUser();

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setLoading(false);
    setShowModal(false);
    setOpen(false);
    router.push("/login");
  };

  const links = [
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact" },
    { name: "About", href: "/about" },
  ];

  if (!user) {
    links.push({ name: "Sign Up", href: "/signup" });
  }

  const underlineWidths = {
    "/": "w-12",
    "/contact": "w-14",
    "/about": "w-12",
    "/signup": "w-14",
  };

  const userInfo = [
    { id: 1, icon: "/user-white.svg", category: "Manage My Account" },
    { id: 2, icon: "/Icon-Shopping bag.svg", category: "My Order" },
    { id: 3, icon: "/icon-cancel.svg", category: "My Cancellations" },
    { id: 4, icon: "/Icon-Reviews.svg", category: "My Reviews" },
    {
      id: 5,
      icon: "/Icon-logout.svg",
      category: "LogOut",
      action: () => setShowModal(true), // ✅ show modal on click
    },
  ];

  return (
    <>
      <div className="border-b pt-6 pb-4 px-6 xl:px-32 border-[#F5F5F5] flex items-center justify-between">
        <h2 className="font-bold text-xl lg:text-2xl">Exclusive</h2>

        <ul className="hidden lg:flex items-center text-base gap-x-12 mx-auto">
          {links.map((link) => (
            <li key={link.href} className="flex flex-col items-center min-h-[20px]">
              <Link
                href={link.href}
                className={`hover:text-black transition ${
                  pathname === link.href ? "text-black" : "text-black"
                }`}
              >
                {link.name}
              </Link>
              <div
                className={`bg-black h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                  pathname === link.href ? underlineWidths[link.href] : "w-0"
                }`}
              ></div>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-x-8">
          <div className="flex items-center bg-[#F5F5F5] h-9 px-5 gap-x-3 rounded-sm">
            <input
              type="text"
              className="outline-none w-full text-sm bg-transparent"
              placeholder="What are you looking for?"
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            />
            <Image src="/search.svg" alt="search" width={16} height={16} />
          </div>

          <Link href="/wishlist" className="relative">
            {wishlistItems.length > 0 && (
              <div className="bg-[#BD4444] flex items-center justify-center rounded-full w-4 h-4 absolute -top-2 -right-2 text-xs text-white">
                <p>{wishlistItems.length}</p>
              </div>
            )}
            <Image src="/favourit.svg" alt="wishlist" width={20} height={18} />
          </Link>

          <Link href="/cart" className="relative">
            {cartItems.length > 0 && (
              <div className="bg-[#BD4444] flex items-center justify-center rounded-full w-4 h-4 absolute -top-2 -right-2 text-xs text-white">
                <p>{cartItems.length}</p>
              </div>
            )}
            <Image src="/cart.svg" alt="cart" width={20} height={18} />
          </Link>

          {user && (
            <div className="relative">
              <div
                onClick={() => setOpen(!open)}
                className={`cursor-pointer ${
                  open ? "bg-[#BD4444]" : ""
                } rounded-full h-8 w-8 flex items-center justify-center`}
              >
                <Image
                  src={open ? "/user-white.svg" : "/user.svg"}
                  alt="user"
                  width={20}
                  height={18}
                />
              </div>

              {open && (
                <div className="absolute right-0 mt-2 w-56 bg-black/90 text-white rounded z-50">
                  {userInfo.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        if (item.action) item.action();
                        setOpen(false);
                      }}
                      className="flex items-center cursor-pointer gap-x-4 w-full px-4 py-2 text-sm hover:bg-[#BD4444]"
                    >
                      <Image src={item.icon} width={24} height={24} alt={item.category} />
                      {item.category}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* ✅ Logout Confirmation Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => !loading && setShowModal(false)}
        onConfirm={handleLogout}
        loading={loading}
      />
    </>
  );
}
