import React from "react";
import Checkbox from "@/components/common/Checkbox";

function Declaration() {
  const declarations = [
    "Information Accuracy",
    "Document Authenticity",
    "Private Audit Acknowledgement",
    "No Guarantee Acknowledgement",
    "Revocation Acknowledgement",
    "Data Consent"
  ];
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Declaration</h2>

      <div className="space-y-5">
        {declarations.map((item) => (
          <Checkbox key={item} label={item} />
        ))}
      </div>
    </div>
  );
}

export default Declaration;
