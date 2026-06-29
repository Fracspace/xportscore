import React from "react";
import Input from "@/components/common/Input";

function ProductInfo() {
  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Product / Service Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Product / Service Category" />

        <Input label="Monthly Production / Supply Capacity" />

        <Input label="Minimum Order Quantity" />

        <Input label="Product Shelf Life" />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Product / Service Description</label>

        <textarea rows="4" className="w-full border rounded-lg p-3" />
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-4">
          Main Products / SKUs to be Assessed
        </h3>

        <div className="space-y-4">
          <Input label="SKU 1" />
          <Input label="SKU 2" />
          <Input label="SKU 3" />
          <Input label="SKU 4" />
          <Input label="SKU 5" />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
