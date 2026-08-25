import React from "react";
import { useFormContext } from "react-hook-form";

const placeholderText = `For example:
• Are you concerned about the company's legitimacy?
• Do you want us to verify manufacturing capability?
• Have you received suspicious communications?
• Any other specific questions...`;

function AdditionalInfo() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div>
      <div className="border-t border-slate-200 p-10">
        <h2 className="text-3xl font-bold text-slate-800">
          Section 6: Additional Information
        </h2>

        <div className="mt-10">
          <label className="mb-2 block text-lg font-semibold text-slate-800">
            Please mention any specific concerns or questions you would like us
            to investigate.
          </label>

          {/* <ul className="mb-4 space-y-1.5 text-sm text-slate-500 list-disc list-inside">
            <li>Are you concerned about the company&apos;s legitimacy?</li>
            <li>Do you want us to verify manufacturing capability?</li>
            <li>Have you received suspicious communications?</li>
            <li>Any other specific questions or requirements...</li>
          </ul> */}

          <textarea
            {...register("additionalInformation")}
            rows={6}

            placeholder={placeholderText}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-700 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-200"
          />

          {errors?.additionalInformation && (
            <p className="mt-4 text-sm text-red-500">
              {errors?.additionalInformation?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdditionalInfo;
