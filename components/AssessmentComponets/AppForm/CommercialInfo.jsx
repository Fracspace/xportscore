import React from "react";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";

function CommercialInfo() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Commercial Information</h2>

      <div className="space-y-8">
        <div>
          <h3 className="font-semibold mb-4">Current Price List Available?</h3>

          <Checkbox label="Yes" />
          <Checkbox label="No" />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Export Price List Available?</h3>

          <Checkbox label="Yes" />
          <Checkbox label="No" />
        </div>

        <div>
          <h3 className="font-semibold mb-4">Preferred Pricing Currency</h3>

          <div className="grid md:grid-cols-3 gap-4">
            {["USD", "INR", "EUR", "GBP", "AED"].map((item) => (
              <Checkbox key={item} label={item} />
            ))}
          </div>

          <div className="mt-4">
            <Input label="Other Currency" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Payment Terms</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "100% advance",
              "Advance + balance before dispatch",
              "Letter of Credit",
              "Credit period",
              "Negotiable",
              "Not finalised"
            ].map((item) => (
              <Checkbox key={item} label={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommercialInfo;
