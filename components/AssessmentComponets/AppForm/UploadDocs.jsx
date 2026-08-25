import React from "react";
import { useFormContext } from "react-hook-form";

function UploadDocs() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Documents Upload</h2>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Business Documents <span className="text-red-500 ml-0.5">*</span>
        </h3>

        <input
          type="file"
          required={true}
          {...register("businessDocuments")}
          className="w-full border rounded-lg p-3 cursor-pointer"
        />

        {errors?.businessDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.businessDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Product / Service Documents <span className="text-red-500 ml-0.5">*</span>
        </h3>

        <input
          type="file"
          required={true}
          {...register("productServiceDocuments")}
          className="w-full border rounded-lg p-3 cursor-pointer"
        />

        {errors?.productServiceDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.productServiceDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Packaging Documents <span className="text-red-500 ml-0.5">*</span>
        </h3>

        <input
          type="file"
          required={true}
          {...register("packagingDocuments")}
          className="w-full border rounded-lg p-3 cursor-pointer"
        />

        {errors?.packagingDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.packagingDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Certification & Quality Documents (If Available)
        </h3>

        <input
          type="file"
          {...register("certificationQualityDocuments")}
          className="w-full border rounded-lg p-3"
        />

        {errors?.certificationQualityDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.certificationQualityDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Past Export Documents (If Available)</h3>

        <input
          type="file"
          {...register("pastExportDocuments")}
          className="w-full border rounded-lg p-3"
        />

        {errors?.pastExportDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.pastExportDocuments?.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default UploadDocs;
