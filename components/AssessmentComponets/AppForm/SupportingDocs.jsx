import React from "react";
import Checkbox from "@/components/common/Checkbox";

function SupportingDocs() {
  const docs = [
    "Website Link",
    "Buyer Enquiry Emails",
    "Distributor Agreement",
    "Product Videos",
    "Factory Photos",
    "Quality Control Process Document",
    "Logistics Partner Details"
  ];
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Optional Supporting Documents</h2>

      <div className="space-y-4">
        {docs.map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>

      <div className="mt-8">
        <input type="file" multiple className="w-full border rounded-lg p-3" />
      </div>
    </div>
  );
}

export default SupportingDocs;
