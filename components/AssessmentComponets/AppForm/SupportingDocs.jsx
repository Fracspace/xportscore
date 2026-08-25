import React from "react";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

function SupportingDocs() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Optional Supporting Documents</h2>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Distributor Agreement <span className="text-red-500 ml-0.5">*</span>
        </h3>

        <input
          type="file"
          required={true}
          {...register("distributorAgreement")}
          className="w-full border rounded-lg p-3 cursor-pointer"
        />

        {errors?.distributorAgreement && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.distributorAgreement?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Product Videos <span className="text-red-500 ml-0.5">*</span>
        </h3>

        <input
          type="file"
          required={true}
          {...register("productVideos")}
          className="w-full border rounded-lg p-3 cursor-pointer"
        />

        {errors?.productVideos && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.productVideos?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Factory Photos (If Available)</h3>

        <input
          type="file"
          {...register("factoryPhotos")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Certification & Quality Documents (If Available)
        </h3>

        <input
          type="file"
          {...register("qualityControlProcessDocuments")}
          className="w-full border rounded-lg p-3"
        />
      </div>
    </div>
  );
}

export default SupportingDocs;
