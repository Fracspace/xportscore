import React from "react";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

function VerifyDeclaration() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  const declarationPoints = [
    "I confirm that I am requesting this report for lawful business due diligence purposes.",
    "I understand that XportVerify is a private Business Verification & Trade Due Diligence service.",
    "I understand that the report is based on information available from public records, commercial data providers, open-source intelligence, and documents supplied by the requesting party or verified business where applicable.",
    "I understand that XportVerify does not guarantee payment, financial stability, commercial performance, or future conduct of the business being verified.",
    "I acknowledge that certain information may not be available in every jurisdiction and report content may vary accordingly."
  ];
  return (
    <div className="border-t border-slate-200 p-10">
      <h2 className="text-3xl font-bold text-slate-800">
        Section 8: Declaration
      </h2>

      <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-8">
        <div className="space-y-5">
          {declarationPoints.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-teal-600"></span>

              <p className="leading-7 text-slate-700">{point}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <Checkbox label="I Agree" {...register("agree")} />
        </div>
      </div>
    </div>
  );
}

export default VerifyDeclaration;
