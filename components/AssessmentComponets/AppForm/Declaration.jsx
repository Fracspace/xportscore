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
          label="Information Accuracy"
          {...register("informationAccuracy")}
          error={errors.informationAccuracy}
        />

        <Checkbox
          label="Document Authenticity"
          {...register("documentAuthenticity")}
          error={errors.documentAuthenticity}
        />

        <Checkbox
          label="Private Audit Acknowledgement"
          {...register("privateAuditAcknowledgement")}
          error={errors.privateAuditAcknowledgement}
        />

        <Checkbox
          label="No Guarantee Acknowledgement"
          {...register("noGuaranteeAcknowledgement")}
          error={errors.noGuaranteeAcknowledgement}
        />

        <Checkbox
          label="Revocation Acknowledgement"
          {...register("revocationAcknowledgement")}
          error={errors.revocationAcknowledgement}
        />

        <Checkbox
          label="Data Consent"
          {...register("dataConsent")}
          error={errors.dataConsent}
        />

      
      </div>
    </div>
  );
}

export default Declaration;
