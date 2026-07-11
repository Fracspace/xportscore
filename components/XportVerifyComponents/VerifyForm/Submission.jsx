import React from "react";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

function Submission() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <div className="border-t border-slate-200 p-10">
      <h2 className="text-3xl font-bold text-slate-800">
        Section 9: Final Submission
      </h2>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input
          label="Requestor Name*"
          placeholder="Full Name"
          {...register("requestorName")}
          error={errors?.requestorName?.message}
        />

        <Input
          label="Company*"
          placeholder="Company Name"
          {...register("company")}
          error={errors?.company?.message}
        />

        <Input
          label="Date*"
          type="date"
          {...register("date")}
          error={errors?.date?.message}
        />

        <Input
          label="Digital Signature / Confirmation*"
          {...register("digitalSignature")}
          placeholder="Type your full name as your digital signature"
          error={errors?.digitalSignature?.message}
        />
      </div>

      {/* Summary */}
      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-6">
        <h3 className="text-lg font-semibold text-slate-800">
          Ready to Submit
        </h3>

        <p className="mt-3 leading-7 text-slate-600">
          By submitting this request, you confirm that all information provided
          is accurate to the best of your knowledge and that you agree to the
          XportVerify Terms of Service and Privacy Policy.
        </p>
      </div>

      {/* Submit Button */}
      {/* <div className="mt-10 flex justify-end">
        <button
          type="submit"
          className="rounded-lg bg-teal-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          Request XportVerify Report
        </button>
      </div> */}
    </div>
  );
}

export default Submission;
