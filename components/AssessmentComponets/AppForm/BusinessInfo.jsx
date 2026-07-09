import React from "react";
import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

function BusinessInfo() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Business Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Legal Business Name"
          {...register("legalBusinessName")}
          error={errors?.legalBusinessName?.message}
        />
        <Input
          label="Brand / Trade Name"
          {...register("brandName")}
          error={errors?.brandName?.message}
        />

        <Input
          label="Country of Registration"
          {...register("country")}
          error={errors?.country?.message}
        />
        <Input
          label="City / State"
          {...register("city")}
          error={errors?.city?.message}
        />

        <Input label="Website" {...register("website")} />
        <Input
          label="Year Established"
          {...register("yearEstablished")}
          error={errors?.yearEstablished?.message}
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Registered Business Address</label>

        <textarea
          rows={4}
          className="w-full border rounded-lg p-3"
          {...register("address")}
        />

        {errors?.address?.message && <p className="mt-1 text-sm text-red-500">{errors?.address?.message}</p>}
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4">Business Type</label>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Manufacturer",
            "Trader",
            "Merchant Exporter",
            "Service Provider",
            "Distributor",
            "Brand Owner"
          ].map((item) => (
            <label
              key={item}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input type="radio" value={item} {...register("businessType")} />

              {item}
            </label>
          ))}
           
          <Input label="Other" {...register("otherBusinessType")} />
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
