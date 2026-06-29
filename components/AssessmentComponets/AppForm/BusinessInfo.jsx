import React from "react";
import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";

function BusinessInfo() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Business Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Legal Business Name" />
        <Input label="Brand / Trade Name" />

        <Input label="Country of Registration" />
        <Input label="City / State" />

        <Input label="Website" />
        <Input label="Year Established" />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Registered Business Address</label>

        <textarea rows={4} className="w-full border rounded-lg p-3" />
      </div>

      <div className="mt-8">
        <label className="font-semibold block mb-4">Business Type</label>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Manufacturer",
            "Trader",
            "Merchant Exporter",
            "Service Provider",
            "Distributor",
            "Brand Owner"
          ].map((item) => (
            <Checkbox key={item} label={item} />
          ))}

          <Input label="Other" />
        </div>
      </div>
    </div>
  );
}

export default BusinessInfo;
