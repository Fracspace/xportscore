import React from "react";
import Radio from "@/components/common/Radio";

function RegistryConset() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Registry Consent</h2>

      <p className="text-slate-600 mb-6">
        Do you want your business to be listed on the XportScore Verified
        Registry if certified?
      </p>

      <div className="space-y-3">
        <Radio label="Yes" />
        <Radio label="No" />
        <Radio label="Decide Later" />
      </div>

      <div className="mt-8 bg-slate-50 rounded-lg p-5">
        <h4 className="font-semibold mb-3">Public Registry May Display</h4>

        <ul className="list-disc ml-5 space-y-2">
          <li>Company Name</li>
          <li>Country</li>
          <li>Product Category</li>
          <li>Readiness Status</li>
          <li>Certificate Validity</li>
          <li>Verification Status</li>
        </ul>
      </div>
    </div>
  );
}

export default RegistryConset;
