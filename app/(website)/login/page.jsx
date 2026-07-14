"use client";

import { useState } from "react";

import VerifyEmailPage from "@/components/common/VerifyEmail";
import { ShieldCheck, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/app/context/AuthContext";

export default function Page() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [showVerifyOTP, setShowVerifyOTP] = useState(false);

  const { setUser, setApplicationId, setApplicantId, user, token } = useAuth();

  const sendOTP = async () => {
    if (!email) {
      alert("Please enter your email.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        "https://api.xportscore.com/api/auth/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026"
          },
          body: JSON.stringify({
            email
          })
        }
      );

      const data = await response.json();
      setUser(data?.user);
      setApplicantId(data?.user?.applicantId);
      setApplicationId(data?.application?.id);

      localStorage.setItem("user", JSON.stringify(data?.user));
      localStorage.setItem("applicantId", data?.user?.applicantId || "");
      localStorage.setItem("applicationId", data?.application?.id || "");

      console.log(
        "details are inside login",
        data?.user,
        data?.user?.applicantId,
        data?.application?.id
      );

      if (!response.ok) {
        throw new Error(data.message);
      }

      alert("OTP sent successfully.");
      setShowVerifyOTP(true);

      alert("OTP sent successfully.");

      setShowVerifyOTP(true);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showVerifyOTP ? (
        <div>
          <VerifyEmailPage email={email} />
        </div>
      ) : (
        <div className="min-h-screen bg-[#f5f7fc] flex items-center justify-center px-4">
          <div className="w-full max-w-md">
            {/* Top Icon */}
            <div className="flex justify-center">
              <div className="h-16 w-16 rounded-xl bg-[#0f1f44] flex items-center justify-center shadow-md">
                <ShieldCheck className="h-7 w-7 text-white" />
              </div>
            </div>

            {/* Heading */}
            <div className="mt-5 text-center">
              <h1 className="text-4xl font-bold text-[#07142e]">
                Secure Access
              </h1>

              <p className="mt-2 text-sm text-gray-500">Xport Score</p>
            </div>

            {/* Card */}
            <div className="mt-8 rounded-lg bg-white shadow-lg border border-gray-100 p-6">
              {/* Label */}
              <label className="block text-[11px] font-bold tracking-widest uppercase text-gray-600 mb-2">
                Corporate Email Address
              </label>

              {/* Input */}
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                {/* <input
                type="email"
                placeholder="e.g. compliance@globaltrade.com"
                className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              /> */}

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. compliance@globaltrade.com"
                  className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-3"
                />
              </div>

              {/* Button */}
              {/* <button className="mt-5 flex items-center justify-center gap-2 w-full rounded-md bg-[#112349] py-3 font-semibold text-white hover:bg-[#0c1c3d] transition">
              Send OTP
              <ArrowRight size={18} />
            </button> */}

              <button
                onClick={sendOTP}
                disabled={loading}
                className="mt-5 w-full rounded-md bg-[#112349] py-3 text-white"
              >
                {loading ? "Sending..." : "Send OTP"}
              </button>

              {/* Divider */}
              <div className="my-6 border-t"></div>

              {/* Footer */}
              <p className="text-center text-sm text-gray-500">
                New to XportScore?{" "}
                <Link
                  href="/signup"
                  className="font-semibold text-teal-700 hover:underline"
                >
                  Signup for an Account
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
