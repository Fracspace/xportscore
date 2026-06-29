import React from "react";
import Input from "@/components/common/Input";

function ApplicantInfo() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Applicant Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Applicant Name" />
        <Input label="Designation" />
        <Input label="Email Address" type="email" />
        <Input label="Mobile / WhatsApp Number" />
      </div>
    </div>
  );
}

export default ApplicantInfo;
