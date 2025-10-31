"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import Button from "../components/Button";

export default function Signup() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // 🧠 Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🧩 Handle Signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
      setErrorMsg("All fields are required.");
      return;
    }

    setLoading(true);

    try {
      console.log("Signing up with:", formData.email);

      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        console.error("Supabase signup error:", error);
        setErrorMsg(error.message);
      } else {
        console.log("Signup successful:", data);

        // Optionally store name in a 'profiles' table (recommended way)
        const { error: profileError } = await supabase
          .from("profiles")
          .insert([{ id: data.user.id, name: formData.name }]);

        if (profileError) {
          console.warn("Profile insert error:", profileError);
        }

        setSuccessMsg("Account created! Please check your email for confirmation.");
        setFormData({ name: "", email: "", password: "" });

        // Redirect after delay
        setTimeout(() => {
          router.push("/login");
        }, 2000);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      setErrorMsg("Network or configuration issue — please check console.");
    }

    setLoading(false);
  };

  // 🧠 Google Sign-Up
  const handleGoogleSignup = async () => {
    setErrorMsg("");
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) setErrorMsg(error.message);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-14 px-4 sm:px-8 lg:px-0">
      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
        <Image
          src="/Side Image.png"
          alt="signup side image"
          width={805}
          height={0}
          className="w-full h-auto max-w-lg lg:max-w-none"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="flex flex-col items-start w-full max-w-md">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-start">
            Create an account
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base">
            Enter your details below
          </p>

          <form
            onSubmit={handleSignup}
            className="mt-8 sm:mt-12 flex flex-col gap-y-6 sm:gap-y-10 w-full"
          >
            {/* Inputs */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Email"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border-b border-gray-300 placeholder-gray-500 p-2 sm:p-0 outline-none text-sm sm:text-base"
              placeholder="Password"
              required
            />

            {/* Create Account Button */}
            <Button
              btn_text={loading ? "Creating Account..." : "Create Account"}
              btn_height="h-12 sm:h-14"
              btn_width="w-full"
              btn_color="bg-[#BD4444]"
              type="submit"
            />

            {/* Google Signup */}
            <button
              type="button"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="h-12 sm:h-14 border flex items-center justify-center gap-x-3 sm:gap-x-4 border-gray-300 text-black font-medium rounded cursor-pointer"
            >
              <Image
                src="/Icon-google.svg"
                width={20}
                height={20}
                alt="google icon"
                className="sm:w-6 sm:h-6"
              />
              <span className="text-sm sm:text-base">Sign up with Google</span>
            </button>

            {/* Messages */}
            {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
            {successMsg && <p className="text-green-600 text-sm">{successMsg}</p>}

            {/* Already Have Account */}
            <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-x-4 text-sm sm:text-base mt-2">
              <p>Already have an account?</p>
              <button
                type="button"
                className="font-medium cursor-pointer relative group"
                onClick={() => router.push("/login")}
              >
                Log in
                <div className="w-0 h-0.5 bg-black rounded-full transition-all duration-300 group-hover:w-full"></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
