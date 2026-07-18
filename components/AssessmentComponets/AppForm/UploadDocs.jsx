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
        <h3 className="font-semibold text-lg mb-4">Business Documents</h3>

        <input
          type="file"
          {...register("businessDocuments")}
          className="w-full border rounded-lg p-3"
        />

        {errors?.businessDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.businessDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Product / Service Documents
        </h3>

        <input
          type="file"
          {...register("productServiceDocuments")}
          className="w-full border rounded-lg p-3"
        />

        {errors?.productServiceDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.productServiceDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">Packaging Documents</h3>

        <input
          type="file"
          {...register("packagingDocuments")}
          className="w-full border rounded-lg p-3"
        />

        {errors?.packagingDocuments && (
          <p className="text-red-500 text-sm mt-1">
            {errors?.packagingDocuments?.message}
          </p>
        )}
      </div>

      <div className="mb-8">
        <h3 className="font-semibold text-lg mb-4">
          Certification & Quality Documents
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
        <h3 className="font-semibold text-lg mb-4">Past Export Documents</h3>

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
