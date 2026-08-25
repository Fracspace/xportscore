import React from "react";
import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext, Controller } from "react-hook-form";
import CountrySelect from "@/components/common/CountrySelect";

function BusinessInfo() {
  const {
    register,
    control,
    watch,
    formState: { errors }
  } = useFormContext();

  const selectedBusinessType = watch("businessType");

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Business Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="mb-2 block text-sm font-medium">
            Legal Business Name <span className="text-red-500 ml-0.5">*</span>
          </label>
          <Input
            required={true}
            {...register("legalBusinessName")}
            error={errors?.legalBusinessName?.message}
          />
        </div>

        <Input
          label="Brand / Trade Name"
          required={true}
          {...register("brandName")}
          error={errors?.brandName?.message}
        />

        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <CountrySelect
              label="Country of Registration"
              required={true}
              value={field.value}
              onChange={field.onChange}
              error={errors?.country?.message}
            />
          )}
        />

        <div>
          <label className="mb-2 block text-sm font-medium">
            City / State <span className="text-red-500 ml-0.5">*</span>
          </label>
          <Input
            required={true}
            {...register("city")}
            error={errors?.city?.message}
          />
        </div>

        <Input label="Website (Optional)" {...register("website")} />

        <Input
          required={true}
          label="Year Established"
          {...register("yearEstablished")}
          maxLength="6"
          error={errors?.yearEstablished?.message}
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2 text-sm font-medium">
          Registered Business Address <span className="text-red-500 ml-0.5">*</span>
        </label>

        <textarea
          rows={4}
          required={true}
          className={`w-full border rounded-lg p-3 outline-none transition-colors ${errors?.address
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-600"
            }`}
          {...register("address")}
        />

        {errors?.address?.message && (
          <p className="mt-1 text-sm text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4 text-sm font-medium">
          Business Type <span className="text-red-500 ml-0.5">*</span>
        </label>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Manufacturer",
            "Trader",
            "Merchant Exporter",
            "Service Provider",
            "Distributor",
            "Brand Owner",
            "Others"
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
            >
              <input
                type="radio"
                value={item}
                required
                {...register("businessType")}
              />
              {item}
            </label>
          ))}
        </div>

        {errors?.businessType?.message && (
          <p className="mt-2 text-sm text-red-500">{errors.businessType.message}</p>
        )}

        {selectedBusinessType === "Others" && (
          <div className="mt-4 max-w-md">
            <label className="mb-2 block text-sm font-medium">
              Please Specify Other Business Type <span className="text-red-500 ml-0.5">*</span>
            </label>
            <Input
              required
              placeholder="Specify your business type"
              {...register("otherBusinessType")}
              error={errors?.otherBusinessType?.message}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default BusinessInfo;
