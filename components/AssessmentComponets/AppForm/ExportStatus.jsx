import React from "react";
import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";

function ExportStatus() {
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
          <Checkbox key={item} label={item} />
        ))}
      </div>

      <div className="mt-8">
        <Input label="Countries Exported To" />
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4">
          IEC / Export Registration
        </label>

        {["Yes", "No", "Applied", "Not Applicable"].map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

export default ExportStatus;
