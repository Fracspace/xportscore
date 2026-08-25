"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Send } from "lucide-react";
import { Country } from "country-state-city";

import { useAuth } from "@/app/context/AuthContext";
import Input from "@/components/common/Input";
import VerifyEmailPage from "@/components/common/VerifyEmail";
import PhoneNumberInput from "@/components/common/PhoneNumberInput";
import CountrySelect from "@/components/common/CountrySelect";

export default function VerificationRequestForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      company: "",
      fullname: "",
      designation: "",
      email: "",
      phone: "",
      country: ""
    }
  });

  const { setFormType, setPaymentForm, token, user, setApplicationId } = useAuth();

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const [formEmail, setFormEmail] = useState("");
  const [pendingFormData, setPendingFormData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rawPhone, setRawPhone] = useState("");

  const countries = Country.getAllCountries();

  const submitFormWithToken = async (formData, submitToken) => {
    const payload = {
      requestingCompany: {
        contactPerson: formData.fullname,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone,
        companyName: formData.company,
        country: formData.country
      }
    };

    console.log("payload is :", payload);

    try {
      const response = await fetch(
        "https://api.xportscore.com/api/verify-requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            Authorization: `Bearer ${submitToken}`
          },
          body: JSON.stringify(payload)
        }
      );

      setFormType("xport_verify");

      const result = await response.json();

      console.log("result of the verify form sub is", result);

      if (result?.success) {
        const reqId = result?.data?.id;
        const verificationApplicantId = result?.data?.applicant_id
        if (reqId) {
          setApplicationId(reqId);
          localStorage.setItem("verifyApplicantId", verificationApplicantId);
          localStorage.setItem("verificationRequestId", reqId);
        }
        setPaymentForm(true);
        console.log("Success:", result);
        alert("Export Verification request submitted successfully!");
      } else {
        throw new Error(result?.error?.message || result?.message || "Failed to submit verification request");
      }

      console.log("response is ", result);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const onSubmit = async (data) => {
    if (token) {
      await submitFormWithToken(data, token);
      return;
    }

    try {
      setIsSubmitting(true);
      const selectedCountry = countries.find((c) => c.name === data.country);
      const countryCode = selectedCountry?.phonecode
        ? `+${selectedCountry.phonecode}`
        : "+91";

      const signupPayload = {
        companyName: data.company,
        contactPersonName: data.fullname,
        designation: data.designation,
        officeEmail: data.email,
        password: "",
        countryCode,
        phoneNumber: data.phone,
        formType: "export"
      };

      console.log("Submitting signup payload:", signupPayload);

      const response = await fetch(
        "https://api.xportscore.com/api/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026",
            accept: "application/json"
          },
          body: JSON.stringify(signupPayload)
        }
      );

      const signupResult = await response.json();
      console.log("Signup response is:", signupResult);

      let proceedToOtp = false;

      if (response.ok && signupResult?.success) {
        if (signupResult?.data?.prefill?.applicant) {
          localStorage.setItem(
            "xportverify prefill details",
            JSON.stringify(signupResult?.data?.prefill?.applicant)
          );
        }
        proceedToOtp = true;
      } else {
        const errMsg = signupResult?.error?.message || signupResult?.message || "";
        if (
          errMsg.toLowerCase().includes("exist") ||
          errMsg.toLowerCase().includes("already") ||
          response.status === 400 ||
          response.status === 409
        ) {
          console.log("Email already registered. Attempting direct login via OTP...");
          proceedToOtp = true;
        } else {
          throw new Error(errMsg || "Signup failed");
        }
      }

      if (proceedToOtp) {
        console.log("Calling send-otp for email:", data.email);
        const otpResponse = await fetch(
          "https://api.xportscore.com/api/auth/send-otp",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "Xportscore@2026"
            },
            body: JSON.stringify({
              email: data.email
            })
          }
        );

        const otpData = await otpResponse.json();
        console.log("Internal OTP response:", otpData);

        if (!otpResponse.ok) {
          throw new Error(otpData?.error?.message || otpData?.message || "Failed to send verification OTP");
        }

        if (otpData?.success) {
          setPendingFormData(data);
          setFormEmail(data.email);
          setShowVerifyOTP(true);
        } else {
          alert(otpData?.error?.message || "Failed to send verification OTP");
        }
      }
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSuccess = async (otpResponseData) => {
    const submitToken = otpResponseData?.token;
    if (submitToken && pendingFormData) {
      await submitFormWithToken(pendingFormData, submitToken);
    } else {
      alert("Verification successful, but token or pending form data was missing. Please submit again.");
    }
  };

  if (showVerifyOTP) {
    return (
      <VerifyEmailPage
        email={formEmail}
        onBack={() => setShowVerifyOTP(false)}
        onSuccess={handleOtpSuccess}
      />
    );
  }

  return (
    <section className="bg-gray-50 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-5 sm:p-6 md:p-8 lg:p-10">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Xport Verify Request
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Provide your details below to start the verification process for
              the business you want to verify.
            </p>

            {/* Form Fields */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Company Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Company Name <span className="text-red-500">*</span>
                </label>
                <Input
                  required={true}
                  {...register("company", { required: "Company Name is required" })}
                  error={errors?.company?.message}
                  placeholder="Ex: Example pvt.ltd"
                />
              </div>

              {/* Contact Person / Applicant Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Applicant Name <span className="text-red-500">*</span>
                </label>
                <Input
                  required={true}
                  {...register("fullname", { required: "Applicant Name is required" })}
                  error={errors?.fullname?.message}
                  placeholder="Ex: John Doe"
                />
              </div>

              {/* Designation */}
              <div>
                <Input
                  label="Designation"
                  {...register("designation")}
                  error={errors?.designation?.message}
                  placeholder="Describe Designation"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  required={true}
                  type="email"
                  {...register("email", { required: "Email Address is required" })}
                  error={errors?.email?.message}
                  placeholder="Ex: j.doe@gmail.com"
                />
              </div>

              {/* Mobile / WhatsApp Number */}
              <div>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Mobile / WhatsApp Number is required" }}
                  render={({ field }) => (
                    <PhoneNumberInput
                      label="MOBILE / WHATSAPP NUMBER"
                      required={true}
                      value={field.value}
                      placeholder="Ex: 1234567890"
                      onChange={({ phoneNumber, countryCode, rawValue }) => {
                        setRawPhone(rawValue);
                        field.onChange(rawValue || phoneNumber);
                      }}
                      error={errors?.phone?.message}
                    />
                  )}
                />
              </div>

              {/* Country */}
              <div>
                <Controller
                  name="country"
                  control={control}
                  rules={{ required: "Country is required" }}
                  render={({ field }) => (
                    <CountrySelect
                      label="Country"
                      required={true}
                      value={field.value}
                      onChange={field.onChange}
                      error={errors?.country?.message}
                    />
                  )}
                />
              </div>
            </div>

            {/* Checkbox */}
            <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required={true}
                  {...register("agree")}
                  className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 accent-teal-600 cursor-pointer"
                />

                <span className="text-sm leading-6 text-slate-700">
                  I understand that my work email address will be used as my
                  primary login credential, and OTPs will be sent to this email
                  for secure authentication.<span className="text-red-500">*</span>
                </span>
              </label>
            </div>

            {/* Divider */}
            <hr className="my-8 border-gray-200" />

            {/* Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal-700 px-8 py-3 font-semibold text-white transition hover:bg-teal-800 sm:w-auto disabled:opacity-50 cursor-pointer"
              >
                {isSubmitting ? "Processing..." : "Submit"}
                <Send size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
