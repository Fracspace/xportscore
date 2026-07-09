"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, RotateCcw } from "lucide-react";

export default function VerifyEmailPage() {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/g, "");

    e.target.value = value;

    if (value && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f7fb] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-md border border-gray-200 bg-white shadow-lg p-8">
        {/* Back Button */}
        <Link
          href="/register"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 transition"
        >
          <ArrowLeft size={16} />
          Back
        </Link>

        {/* Icon */}
        <div className="mt-6 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-200">
            <ShieldCheck className="h-6 w-6 text-[#0B1E48]" />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-6 text-center">
          <h1 className="text-4xl font-bold text-[#081A3B]">
            Verify Your Email
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            We've sent a 6-digit verification code to your
            <br />
            corporate email address. Please enter it below to
            <br />
            confirm your identity.
          </p>
        </div>

        {/* OTP */}
        <div className="mt-8">
          <div className="flex justify-center gap-2 rounded border border-gray-300 bg-[#f7f9fc] p-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <input
                key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                maxLength={1}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className="h-12 w-10 border-none bg-transparent text-center text-3xl font-semibold tracking-wide text-[#4B5563] outline-none"
              />
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded bg-[#0B1E48] py-3 font-semibold text-white transition hover:bg-[#09183A]">
          Verify & Login
        </button>

        {/* Resend */}
        <button className="mt-6 flex w-full items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#0B1E48] transition">
          <RotateCcw size={14} />
          Resend Code Now
        </button>
      </div>
    </main>
  );
}
