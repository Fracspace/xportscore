"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { Country } from "country-state-city";

import Input from "@/components/common/Input";
import { useAuth } from "@/app/context/AuthContext";
import VerifyEmailPage from "@/components/common/VerifyEmail";

export default function AssessmentReqForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const { setFormType, setPaymentForm, token, user, setApplicationId } = useAuth();

  const [showVerifyOTP, setShowVerifyOTP] = useState(false);
  const [formEmail, setFormEmail] = useState("");
  const [pendingFormData, setPendingFormData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const countries = Country.getAllCountries();

  console.log("token is", token);

  useEffect(() => {
    let prefill = null;
    try {
      const storedPrefill = localStorage.getItem("prefill details");
      if (storedPrefill) {
        prefill = JSON.parse(storedPrefill);
      }
    } catch (e) {
      console.error("Error parsing prefill details", e);
    }

    if (user || prefill) {
      reset({
        company: prefill?.company || user?.company || user?.companyName || user?.applicant?.company || user?.applicant?.companyName || "",
        fullname: prefill?.fullname || user?.fullname || user?.contactPersonName || user?.name || user?.applicant?.fullname || user?.applicant?.contactPersonName || "",
        designation: prefill?.designation || user?.designation || user?.applicant?.designation || "",
        email: prefill?.email || user?.email || user?.officeEmail || user?.applicant?.email || user?.applicant?.officeEmail || "",
        phone: prefill?.phone || user?.phone || user?.phoneNumber || user?.applicant?.phone || user?.applicant?.phoneNumber || "",
        country: prefill?.country || user?.country || user?.applicant?.country || ""
      });
    }
  }, [user, reset]);

  const submitFormWithToken = async (formData, submitToken) => {
    const payload = {
      applicant: {
        fullname: formData.fullname,
        designation: formData.designation,
        email: formData.email,
        phone: formData.phone
      }
    };

    console.log("payload is :", payload);

    try {
      const response = await fetch(
        "https://api.xportscore.com/api/export-assessments",
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

      setFormType("xport_assessment");

      const result = await response.json();

      console.log("result of the form sub is", result);

      if (result?.success) {
        const assessmentId = result?.data?.application_id;
        if (assessmentId) {
          setApplicationId(assessmentId);
          localStorage.setItem("applicationId", assessmentId);
          localStorage.setItem("assessmentId", assessmentId);
          localStorage.setItem("applicantId", result?.data?.applicant_id);
        }
        setPaymentForm(true);
        console.log("Success:", result);
        // alert("Assessment request submitted successfully!");
      } else {
        // throw new Error(result?.error?.message || result?.message || "Failed to submit assessment request");
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
            "prefill details",
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
              Start Xport Score Assessment
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Provide your details below to start the Xport Score Assessment
            </p>

            {/* Form Fields */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Company Name */}
              <div>
                <Input
                  label="Company Name"
                  {...register("company")}
                  error={errors?.company?.message}
                />
              </div>

              {/* Contact Person */}
              <div>
                <Input
                  label="Applicant Name"
                  {...register("fullname")}
                  error={errors?.fullname?.message}
                />
              </div>

              {/* Designation */}
              <div>
                <Input
                  label="Designation"
                  {...register("designation")}
                  error={errors?.designation?.message}
                />
              </div>

              {/* Email */}
              <div>
                <Input
                  label="Email Address"
                  type="email"
                  {...register("email")}
                  error={errors?.email?.message}
                />
              </div>

              {/* Phone */}
              <div>
                <Input
                  label="Mobile / WhatsApp Number"
                  {...register("phone")}
                  error={errors?.phone?.message}
                />
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Country<span className="text-red-500">*</span>
                </label>

                <select
                  {...register("country")}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                >
                  <option value="">Select Country</option>

                  {countries.map((country) => (
                    <option key={country.isoCode} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50 p-4">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  {...register("agree")}
                  className="mt-1 h-5 w-5 shrink-0 rounded border-gray-300 accent-teal-600"
                />

                <span className="text-sm leading-6 text-slate-700">
                  I understand that my work email address will be used as my
                  primary login credential, and OTPs will be sent to this email
                  for secure authentication.
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
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-700 px-8 py-3 font-semibold text-white transition hover:bg-teal-800 sm:w-auto disabled:opacity-50"
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
