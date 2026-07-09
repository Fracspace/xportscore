"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Send } from "lucide-react";
import { Country } from "country-state-city";

export default function AssessmentReqForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const countries = Country.getAllCountries();

  return (
    <section className="bg-gray-50 px-4 py-8 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white shadow-sm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-5 sm:p-6 md:p-8 lg:p-10">
            {/* Heading */}
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Start Export Readiness Assessment
            </h2>
            <p className="mt-3 text-sm md:text-base text-slate-600">
              Provide your details below to start the Xport Readiness Assessment
            </p>

            {/* Form Fields */}
            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Company Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Company Name<span className="text-red-500">*</span>
                </label>

                <input
                  placeholder="Your Registered Company Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Contact Person Name<span className="text-red-500">*</span>
                </label>

                <input
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Designation<span className="text-red-500">*</span>
                </label>

                <input
                  placeholder="e.g. Export Manager"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Official Email<span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  placeholder="email@company.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Phone / WhatsApp<span className="text-red-500">*</span>
                </label>

                <input
                  {...register("phone")}
                  placeholder="+1..."
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                />
              </div>

              {/* Country */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-800">
                  Country<span className="text-red-500">*</span>
                </label>

                <select {...register("country")}  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100">
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
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-teal-700 px-8 py-3 font-semibold text-white transition hover:bg-teal-800 sm:w-auto"
              >
                Submit
                <Send size={18} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
