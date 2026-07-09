import React from "react";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

import { Country } from "country-state-city";

function CompanyDetails() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const countries = Country.getAllCountries();

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
        Section 1: Requesting Company Details
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Please provide the details of the company requesting verification.
      </p>

      {/* Form */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
        <Input
          label="Company Name*"
          placeholder="Your Registered Company Name"
          {...register("companyName")}
          error={errors?.companyName?.message}
        />

        <Input
          label="Contact Person Name*"
          placeholder="Full Name"
          {...register("contactPerson")}
          error={errors?.contactPerson?.message}
        />

        <Input
          label="Designation*"
          placeholder="e.g. Export Manager"
          {...register("designation")}
          error={errors?.designation?.message}
        />

        <Input
          label="Official Email*"
          type="email"
          placeholder="email@company.com"
          {...register("email")}
          error={errors?.email?.message}
        />

        <Input
          label="Phone / WhatsApp*"
          placeholder="+91..."
          {...register("phone")}
          error={errors?.phone?.message}
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Country*
          </label>

          <select
            {...register("country")}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.isoCode} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>

          {errors?.country && (
            <p className="mt-1 text-sm text-red-500">
              {errors.country.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
