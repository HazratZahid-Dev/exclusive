"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";

export default function Signin() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // 🧠 Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🧩 Handle Login
// 🧩 Handle Login
// 🧩 Handle Login
const handleLogin = async (e) => {
  e.preventDefault();
  setErrorMsg("");
  setSuccessMsg("");

  if (!formData.email.trim() || !formData.password.trim()) {
    setErrorMsg("Please fill in both fields.");
    return;
  }

  setLoading(true);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (error) {
      // 🎯 Handle specific error messages
      if (error.message.includes("Invalid login credentials")) {
        setErrorMsg("Invalid email or password. Please try again.");
      } else if (error.message.includes("Email not confirmed")) {
        setErrorMsg("Please verify your email before logging in.");
      } else {
        setErrorMsg("Something went wrong. Please try again later.");
      }

      // Optional: keep as warning for developers
      console.warn("Supabase login error:", error.message);
      setLoading(false);
      return;
    }

    // ✅ Login successful
    setSuccessMsg("Login successful!");
    setTimeout(() => {
      router.push("/"); // Redirect to home page or dashboard
    }, 1500);
  } catch (err) {
    console.error("Unexpected error:", err.message);
    setErrorMsg("Something went wrong. Please try again later.");
  } finally {
    setLoading(false);
  }
};



  // 🧠 Forgot password (can be implemented later)
  const handleForgotPassword = () => {
    alert("Forgot password feature coming soon!");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-14 px-4 sm:px-8 lg:px-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <Image
          src="/Side Image.png"
          alt="login side image"
          width={805}
          height={0}
          className="w-full h-auto max-w-lg lg:max-w-none"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-start w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-start">
            Log in to Exclusive
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-600">
            Enter your details below
          </p>

          <form
            onSubmit={handleLogin}
            className="mt-8 sm:mt-12 flex flex-col gap-y-6 sm:gap-y-10 w-full"
          >
            {/* Email */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Email"
              required
            />

            {/* Password with toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base w-full pr-10"
                placeholder="Password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Error / Success messages */}
            {errorMsg && (
              <p className="text-red-500 text-sm mt-2">{errorMsg}</p>
            )}
            {successMsg && (
              <p className="text-green-600 text-sm mt-2">{successMsg}</p>
            )}

            {/* Login button & Forgot Password */}
            <div className="flex items-center justify-between mt-2">
              <Button
                btn_text={loading ? "Logging In..." : "Log In"}
                btn_height="h-12 sm:h-14"
                btn_width="w-[143px]"
                btn_color={loading ? "bg-gray-400" : "bg-[#BD4444]"}
                type="submit"
                disabled={loading}
              />

              <button
                type="button"
                onClick={handleForgotPassword}
                className="font-medium text-[#DB4444] cursor-pointer text-sm sm:text-base"
              >
                Forgot Password?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
