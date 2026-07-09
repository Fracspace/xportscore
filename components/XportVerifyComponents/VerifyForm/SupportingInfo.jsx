import React from "react";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

const supportingDocuments = [
  "Purchase Order",
  "Quotation",
  "Invoice",
  "Contract",
  "Company Profile",
  "Catalogue",
  "Product Brochure",
  "Business Card",
  "Email Correspondence",
  "WhatsApp Conversation",
  "Website Screenshots",
  "Other Supporting Documents"
];

function SupportingInfo() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <div className="border-t border-slate-200 p-10">
      <h2 className="text-3xl font-bold text-slate-800">
        Section 5: Supporting Information
      </h2>

      <div className="mt-10">
        <h3 className="mb-5 text-xl font-semibold text-slate-800">
          Please upload any information available.
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
          {supportingDocuments.map((document) => (
            <Checkbox
              key={document}
              label={document}
              value={document}
              {...register("supportingDocuments")}
            />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Upload Supporting Documents
        </label>

        <input
          type="file"
          multiple
          {...register("uploadedDocuments")}
          className="block w-full rounded-lg border border-slate-300 p-3 file:mr-4 file:rounded-md file:border-0 file:bg-teal-600 file:px-4 file:py-2 file:text-white hover:file:bg-teal-700"
        />

        <p className="mt-2 text-sm text-slate-500">
          Accepted formats: PDF, DOC, DOCX, JPG, JPEG, PNG (Maximum 20 MB per
          file)
        </p>
      </div>
    </div>
  );
}

export default SupportingInfo;
