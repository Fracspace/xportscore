import React from "react";
import Input from "@/components/common/Input";
import { useFormContext, useFieldArray } from "react-hook-form";
import { Trash2 } from "lucide-react";

function ProductInfo() {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "skus"
  });

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Product Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input
          label="Product / Service Category"
          required={true}
          {...register("productCategory")}
          error={errors?.productCategory?.message}
        />

        <Input
          label="Monthly Production / Supply Capacity"
          required={true}
          {...register("monthlyProductionCapacity")}
          error={errors?.monthlyProductionCapacity?.message}
        />

        <Input
          label="Minimum Order Quantity (Optional)"
          {...register("minimumOrderQuantity")}
          error={errors?.minimumOrderQuantity?.message}
        />

        <Input
          label="Product Shelf Life (Optional)"
          {...register("productShelfLife")}
          error={errors?.productShelfLife?.message}
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2 text-sm font-medium">
          Product Description <span className="text-red-500 ml-0.5">*</span>
        </label>

        <textarea
          rows="4"
          required={true}
          className={`w-full border rounded-lg p-3 outline-none transition-colors ${errors?.productDescription
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-600"
            }`}
          {...register("productDescription")}
        />
        {errors?.productDescription && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.productDescription?.message}
          </p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="font-semibold mb-4">
          Main Products / SKUs to be Assessed
        </h3>

        <div className="space-y-4">
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="flex items-end gap-3">
                <div className="flex-1">
                  <Input
                    label={`SKU ${index + 1}`}
                    {...register(`skus.${index}`)}
                    error={errors.skus?.[index]?.message}
                    placeholder="Enter SKU / Item Code"
                  />
                </div>

                {/* {fields.length > 1 && ( */}
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="flex items-center gap-1.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600 transition hover:bg-red-100 hover:text-red-700 cursor-pointer mb-0.5"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
                {/* )} */}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => append("")}
            className="mt-4 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 cursor-pointer"
          >
            Add SKU
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
