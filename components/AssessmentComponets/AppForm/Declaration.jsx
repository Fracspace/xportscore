import React from "react";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

function Declaration() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Declaration</h2>

      <div className="space-y-5">
        <Checkbox
          label={
            <span>
              Information Accuracy <span className="text-red-500 ml-0.5">*</span>
            </span>
          }
          required={true}
          {...register("informationAccuracy")}
          error={errors.informationAccuracy}
        />

        <Checkbox
          label={
            <span>
              Document Authenticity <span className="text-red-500 ml-0.5">*</span>
            </span>
          }
          required={true}
          {...register("documentAuthenticity")}
          error={errors.documentAuthenticity}
        />

        <Checkbox
          label={
            <span>
              Private Audit Acknowledgement <span className="text-red-500 ml-0.5">*</span>
            </span>
          }
          required={true}
          {...register("privateAuditAcknowledgement")}
          error={errors.privateAuditAcknowledgement}
        />

        <Checkbox
          label={
            <span>
              No Guarantee Acknowledgement <span className="text-red-500 ml-0.5">*</span>
            </span>
          }
          required={true}
          {...register("noGuaranteeAcknowledgement")}
          error={errors.noGuaranteeAcknowledgement}
        />

        <Checkbox
          label={
            <span>
              Revocation Acknowledgement <span className="text-red-500 ml-0.5">*</span>
            </span>
          }
          required={true}
          {...register("revocationAcknowledgement")}
          error={errors.revocationAcknowledgement}
        />

        <Checkbox
          label={
            <span>
              Data Consent <span className="text-red-500 ml-0.5">*</span>
            </span>
          }
          required={true}
          {...register("dataConsent")}
          error={errors.dataConsent}
        />
      </div>
    </div>
  );
}

export default Declaration;
