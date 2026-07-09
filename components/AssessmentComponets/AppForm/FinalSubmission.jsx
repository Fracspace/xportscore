import React from "react";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

function FinalSubmission() {
  const {
    register,
    formState: { errors }
  } = useFormContext();
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Final Submission</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Applicant Name" />

        <Input label="Company Name" />

        <Input label="Date" type="date" />

        <Input label="Digital Signature" />
      </div>

      <button
        type="submit"
        className="mt-10 w-full bg-[#041B4D] text-white py-4 rounded-lg font-medium hover:bg-[#062766]"
      >
        Submit Application for XportScore Audit
      </button>
    </div>
  );
}

export default FinalSubmission;
