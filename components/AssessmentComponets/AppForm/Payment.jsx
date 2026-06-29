import React from "react";
import Input from "@/components/common/Input";

function Payment() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Payment Confirmation</h2>

      <div className="bg-[#041B4D] text-white rounded-xl p-6 mb-8">
        <p className="text-sm uppercase">Assessment Fee</p>

        <h3 className="text-4xl font-bold mt-2">USD 299</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Payment Reference Number" />

        <Input label="Billing Name" />

        <Input label="Billing Email" type="email" />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Billing Address</label>
        <textarea rows="4" className="w-full border rounded-lg p-3" />
      </div>
    </div>
  );
}

export default Payment;
