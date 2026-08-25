import React from "react";
import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";
import Radio from "@/components/common/Radio";
import { useFormContext } from "react-hook-form";

function ExportStatus() {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();

  const selectedIecRegistration = watch("iecExportRegistration");

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Export Status</h2>

      <div className="space-y-4">
        {[
          "Already exporting",
          "Export-ready but not yet exporting",
          "Preparing to export",
          "Only samples sent",
          "International enquiries received",
          "Not exported yet"
        ].map((item) => (
          <Radio
            key={item}
            label={item}
            value={item}
            {...register("exportStatus")}
          />
        ))}
        {errors?.exportStatus && (
          <p className="text-red-500 text-sm">
            {errors?.exportStatus?.message}
          </p>
        )}
      </div>

      <div className="mt-8">
        <Input
          label="Countries Willing/Exported To"
          required={true}
          {...register("countriesExportedTo")}
          error={errors?.countriesExportedTo?.message}
          placeholder="Enter In Comma Seperated"
        />
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4">
          IEC / Export Registration <span className="text-red-500 ml-0.5">*</span>
        </label>
        {["Yes", "No", "Applied", "Not Applicable"].map((item) => (
          <Radio
            key={item}
            label={item}
            value={item}
            {...register("iecExportRegistration")}
          />
        ))}

        {errors?.iecExportRegistration && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.iecExportRegistration?.message}
          </p>
        )}

        {(selectedIecRegistration === "Yes" || selectedIecRegistration === "Applied") && (
          <div className="mt-6 max-w-md">
            <Input
              label="IEC Code / Number"
              required={true}
              {...register("iecNumber")}
              error={errors?.iecNumber?.message}
              placeholder="Enter your IEC Code / Registration number"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ExportStatus;
