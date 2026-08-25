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
import { useRouter } from "next/navigation";
import VerifyEmailPage from "@/components/common/VerifyEmail";
import { useAuth } from "@/app/context/AuthContext";
import PhoneNumberInput from "@/components/common/PhoneNumberInput";

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
    country: "",
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
    const selectedName = e.target.value;

    setFormData((prev) => ({
      ...prev,
      country: selectedName
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.contactPersonName.trim()) {
      alert("Full Name is required.");
      return;
    }
    if (!formData.officeEmail.trim()) {
      alert("Work Email is required.");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      alert("Mobile Number is required.");
      return;
    }
    if (!formData.country) {
      alert("Please select a Country.");
      return;
    }
    console.log("Submitting Signup Data:", formData);
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

      console.log("Signup HTTP status:", response.status);

      const data = await response.json();
      console.log("Signup API response payload:", data);

      if (!response.ok) {
        const errorMsg =
          data?.error?.message ||
          (typeof data?.error === "string" ? data.error : null) ||
          data?.message ||
          "Registration failed";
        throw new Error(errorMsg);
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
        console.log("Internal OTP response:", otpData);

        if (!otpResponse.ok) {
          const otpErrMsg =
            otpData?.error?.message ||
            (typeof otpData?.error === "string" ? otpData.error : null) ||
            otpData?.message ||
            "Failed to send verification OTP";
          throw new Error(otpErrMsg);
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
    } catch (err) {
      console.error("Signup error caught:", err);
      alert(err.message || "An error occurred during signup");
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
                  FULL NAME <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="text"
                  name="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  placeholder="Ex: John Doe"
                  required
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                />
              </div>

              {/* Work Email */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  WORK EMAIL <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  type="email"
                  name="officeEmail"
                  value={formData.officeEmail}
                  onChange={handleChange}
                  placeholder="Ex: j.doe@company.com"
                  maxLength={300}
                  required
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                />
              </div>

              {/* Mobile & Designation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <PhoneNumberInput
                  label="MOBILE NUMBER"
                  required={true}
                  value={formData.phoneNumber}
                  countryCode={formData.countryCode}
                  placeholder="Enter Mobile Number"
                  onChange={({ phoneNumber, countryCode }) => {
                    setFormData((prev) => ({
                      ...prev,
                      phoneNumber,
                      countryCode
                    }));
                  }}
                />

                <div>
                  <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                    DESIGNATION <span className="text-red-500 ml-0.5">*</span>
                  </label>
                  <input
                    required={true}
                    type="text"
                    name="designation"
                    value={formData.designation}
                    onChange={handleChange}
                    placeholder="Ex: Export Manager"
                    className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  COMPANY NAME <span className="text-red-500 ml-0.5">*</span>
                </label>
                <input
                  required={true}
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="Ex: Global Logistics Inc."
                  className="w-full h-12 rounded border border-gray-300 bg-[#f9fbff] px-4"
                />
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
                  COUNTRY <span className="text-red-500 ml-0.5">*</span>
                </label>

                <select
                  value={formData.country}
                  onChange={handleCountryChange}
                  required
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
