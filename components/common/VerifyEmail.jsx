"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "@/app/context/AuthContext";

export default function VerifyEmailPage({ email }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);

  const router = useRouter();

  const { setUser, setApplicationId, setApplicantId } = useAuth();

  const verifyOTP = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.xportscore.com/api/auth/verify-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026"
          },
          body: JSON.stringify({
            email,
            otp
          })
        }
      );

      const data = await response.json();

      setUser(data?.data?.user);
      setApplicantId(data?.data?.user?.applicantId);
      setApplicationId(data?.data?.application?.id);

      console.log(
        "details are",
        data?.data?.user,
        data?.data?.user?.applicantId,
        data?.data?.application?.id
      );

      if (!response.ok) {
        throw new Error(data.message);
      }

      console.log("data is", data?.data);

      // Save JWT if returned
      localStorage.setItem("token", data?.data.token);

      // router.push("/dashboard");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
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
        {/* OTP */}
        <div className="mt-8">
          <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
            Enter OTP
          </label>

          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
            maxLength={6}
            placeholder="Enter OTP"
            className="w-full rounded-md border border-gray-300 bg-[#f7f9fc] px-4 py-3 text-center text-2xl font-semibold tracking-[0.5em] text-[#081A3B] outline-none transition focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100"
          />

          <p className="mt-2 text-center text-xs text-gray-500">
            Enter the 6-digit verification code sent to your email.
          </p>
        </div>

        {/* Button */}
        <button
          onClick={verifyOTP}
          disabled={loading || otp.length !== 6}
          className="mt-6 w-full rounded bg-[#0B1E48] py-3 font-semibold text-white transition hover:bg-[#09183A] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify & Login"}
        </button>

        {/* Resend */}
        {/* <button className="mt-6 flex w-full items-center justify-center gap-2 text-sm text-gray-500 hover:text-[#0B1E48] transition">
          <RotateCcw size={14} />
          Resend Code Now
        </button> */}
      </div>
    </main>
  );
}
