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
        <h3 className="font-semibold text-lg mb-4">Distributor Agreement</h3>

        <input
          type="file"
          multiple
          {...register("distributorAgreement")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Product Videos</h3>

        <input
          type="file"
          multiple
          {...register("productVideos")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Factory Photos</h3>

        <input
          type="file"
          multiple
          {...register("factoryPhotos")}
          className="w-full border rounded-lg p-3"
        />
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Certification & Quality Documents
        </h3>

        <input
          type="file"
          multiple
          {...register("qualityControlProcessDocuments")}
          className="w-full border rounded-lg p-3"
        />
      </div>
    </div>
  );
}

export default SupportingDocs;
