import React from "react";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

import { Country } from "country-state-city";

function BusinessDetails() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const countries = Country.getAllCountries();

  return (
    <div className="border-t border-slate-200">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Section 2: Business to be Verified
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Provide the details of the business that you want us to verify.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Input
            label="Legal Company Name*"
            placeholder="Registered Legal Company Name"
            {...register("legalCompanyName")}
            error={errors?.legalCompanyName?.message}
          />

          <Input
            label="Brand / Trading Name"
            placeholder="Brand or Trading Name (if different)"
            {...register("brandTradingName")}
            error={errors?.brandTradingName?.message}
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Country*
            </label>

            <select
              {...register("countryOfCompany")}
              defaultValue=""
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country.isoCode} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>

            {errors?.countryOfCompany && (
              <p className="mt-1 text-sm text-red-500">
                {errors.countryOfCompany.message}
              </p>
            )}
          </div>

          <Input
            label="Registered Address"
            placeholder="Registered Business Address (if known)"
            {...register("registeredAddress")}
            error={errors?.registeredAddress?.message}
          />

          <Input
            label="Website"
            placeholder="https://www.company.com"
            type="url"
            {...register("website")}
            error={errors?.website?.message}
          />

          <Input
            label="Email Address"
            placeholder="contact@company.com"
            type="email"
            {...register("companyEmail")}
            error={errors?.companyEmail?.message}
          />

          <Input
            label="Phone Number"
            placeholder="+1..."
            type="tel"
            {...register("companyPhone")}
            error={errors?.companyPhone?.message}
          />

          <Input
            label="Business Registration Number"
            placeholder="Registration Number (if known)"
            {...register("businessRegistrationNumber")}
            error={errors?.businessRegistrationNumber?.message}
          />

          <Input
            label="Tax / VAT Number"
            placeholder="Tax or VAT Number (if known)"
            {...register("taxVatNumber")}
            error={errors?.taxVatNumber?.message}
          />

          <Input
            label="Import / Export Registration Number"
            placeholder="IEC / Import-Export Registration (if known)"
            {...register("importExportRegistrationNumber")}
            error={errors?.importExportRegistrationNumber?.message}
          />

          <Input
            label="Contact Person"
            placeholder="Contact Person Name (if known)"
            {...register("businessContactPerson")}
            error={errors?.businessContactPerson?.message}
          />
        </div>
      </div>
    </div>
  );
}

export default BusinessDetails;
