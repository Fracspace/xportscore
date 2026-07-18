"use client";

import {
  ShieldCheck,
  User,
  Mail,
  Phone,
  Briefcase,
  Building2
} from "lucide-react";
import Link from "next/link";

import { Country } from "country-state-city";
import { useState } from "react";
import { json } from "zod";
import { da } from "zod/locales";
import { useRouter } from "next/navigation";
import VerifyEmailPage from "@/components/common/VerifyEmail";
import { useAuth } from "@/app/context/AuthContext";

export default function SignupPage() {
  const countries = Country.getAllCountries();
  const [formData, setFormData] = useState({
    companyName: "",
    contactPersonName: "",
    designation: "",
    officeEmail: "",
    password: "",
    countryCode: "+91",
    phoneNumber: "",
    formType: "export"
  });

  const [loading, setLoading] = useState(false);
  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const { setUser, setApplicantId, setApplicationId } = useAuth();

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountryChange = (e) => {
    const selectedCountry = Country.getAllCountries().find(
      (c) => c.name === e.target.value
    );

    setFormData((prev) => ({
      ...prev,
      countryCode: selectedCountry?.phonecode
        ? `+${selectedCountry.phonecode}`
        : "+91"
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);
    try {
      setLoading(true);

      const response = await fetch(
        "https://api.xportscore.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            accept: "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      console.log("resp is", response);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || data?.message || "Registration failed");
      }

      if (data?.success) {
        if (data?.data?.prefill?.applicant) {
          localStorage.setItem(
            "prefill details",
            JSON.stringify(data?.data?.prefill?.applicant)
          );
        }

        console.log("Calling send-otp internally for email:", formData.officeEmail);
        const otpResponse = await fetch(
          "https://api.xportscore.com/api/auth/send-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "Xportscore@2026"
            },
            body: JSON.stringify({
              email: formData.officeEmail
            })
          }
        );

        const otpData = await otpResponse.json();
        console.log("Internal OTP response is", otpData);

        if (!otpResponse.ok) {
          throw new Error(otpData?.error?.message || otpData?.message || "Failed to send verification OTP");
        }

        if (otpData?.success) {
          alert("Account created successfully! A verification OTP has been sent to your email.");
          setShowVerifyOTP(true);
        } else {
          alert(otpData?.error?.message || "Failed to send verification OTP");
        }
      } else {
        alert(data?.error?.message || "Registration failed");
      }

      console.log("data is", data, "token is", data?.data?.token, "appan id", data?.data?.application?.id, "applicantid", data?.data?.user?.applicantId);

    } catch (err) {
      console.error(err);
      console.error("Error:", err);
      console.error("Message:", err.message);
      console.error("Name:", err.name);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {showVerifyOTP ? (
        <VerifyEmailPage email={formData.officeEmail} backUrl="/signup" />
      ) : (
        <main className="min-h-screen bg-[#f5f7fb] bg-[radial-gradient(#d9dde7_1px,transparent_1px)] [background-size:20px_20px] flex items-center justify-center mt-12 py-12 px-4">
          <div className="w-full max-w-xl bg-white border border-gray-200 shadow-lg rounded-sm px-10 py-12">
            {/* Heading */}

            <div className="text-center">
              <h1 className="text-[46px] leading-[52px] font-bold text-[#081A3B]">
                XportScore
              </h1>

              <p className="mt-5 text-[15px] leading-6 text-gray-500">
                Join XportScore to benchmark your readiness for
                <br />
                international markets and obtain verified certification.
              </p>
            </div>

            {/* Form */}

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              {/* Full Name */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  FULL NAME
                </label>
                {/* <input
                  type="text"
                  placeholder="Johnathan Doe"
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
                /> */}
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  WORK EMAIL
                </label>
                {/* <input
                  type="email"
                  placeholder="j.doe@company.com"
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
                /> */}
                <input
                  type="email"
                  name="officeEmail"
                  value={formData.officeEmail}
                  onChange={handleChange}
                  placeholder="j.doe@company.com"
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                />
              </div>

              {/* Mobile & Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                    MOBILE NUMBER
                  </label>
                  {/* <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
                  /> */}
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="9876543210"
                    className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                    DESIGNATION
                  </label>
                  {/* <input
                    type="text"
                    placeholder="Export Manager"
                    className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
                  /> */}
                  <input
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Export Manager"
                    className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  COMPANY NAME
                </label>
                {/* <input
                  type="text"
                  placeholder="Global Logistics Inc."
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm placeholder:text-gray-400 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
                /> */}
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Global Logistics Inc."
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                />
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  COUNTRY
                </label>

                <select
                  onChange={handleCountryChange}
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4 text-sm text-gray-700 focus:border-[#0B1E48] focus:ring-2 focus:ring-blue-100 outline-none transition"
                >
                  <option value="">Select Country</option>

                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Info Box */}
              <div className="flex gap-4 rounded bg-[#f4f7fb] border-l-4 border-teal-600 p-5">
                <ShieldCheck className="text-[#0d8a80] mt-0.5 shrink-0" size={18} />

                <div>
                  <h3 className="text-sm font-semibold text-[#081A3B]">
                    Email Verification
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 leading-6">
                    A one-time verification OTP will be sent to your work email to
                    validate your institutional access.
                  </p>
                </div>
              </div>

              {/* Submit */}
              {/* <button
                type="submit"
                className="w-full bg-[#0B1E48] hover:bg-[#091738] text-white font-semibold py-4 rounded shadow-md transition"
              >
                Create Account
              </button> */}
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer rounded bg-[#0B1E48] py-4 font-semibold text-white disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Footer */}

            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#081A3B] hover:text-teal-600"
              >
                Login
              </Link>
            </p>
          </div>
        </main>
      )}
    </>
  );
}
