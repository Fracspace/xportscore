import React from "react";
import Input from "@/components/common/Input";
import CountrySelect from "@/components/common/CountrySelect";
import PhoneNumberInput from "@/components/common/PhoneNumberInput";
import { useFormContext, Controller } from "react-hook-form";

function BusinessDetails() {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext();

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
            required={true}
            label="Legal Company Name"
            placeholder="Registered Company Name"
            {...register("legalCompanyName")}
            error={errors?.legalCompanyName?.message}
          />

          <Input
            required={true}
            label="Brand / Trading Name"
            placeholder="Brand or Trading Name (if different)"
            {...register("brandTradingName")}
            error={errors?.brandTradingName?.message}
          />

          <Controller
            name="countryOfCompany"
            control={control}
            render={({ field }) => (
              <CountrySelect
                label="Country"
                required={true}
                value={field.value}
                onChange={(countryName) => field.onChange(countryName)}
                error={errors?.countryOfCompany?.message}
              />
            )}
          />

          <Input
            label="Registered Address"
            placeholder="Registered Business Address (if known)"
            {...register("registeredAddress")}
            error={errors?.registeredAddress?.message}
          />

          <Input
            label="Website"
            placeholder="Ex: https://www.company.com (if known)"
            type="url"
            {...register("website")}
            error={errors?.website?.message}
          />

          <Input
            required={true}
            label="Email Address"
            placeholder="Ex: contact@company.com"
            type="email"
            {...register("companyEmail")}
            error={errors?.companyEmail?.message}
          />

          <Controller
            name="companyPhone"
            control={control}
            render={({ field }) => (
              <PhoneNumberInput
                label="Phone Number"
                required={true}
                value={field.value}
                onChange={(data) => field.onChange(data?.rawValue || data)}
                error={errors?.companyPhone?.message}
              />
            )}
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
