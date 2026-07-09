import React from "react";
import Input from "@/components/common/Input";
import { useFormContext, useFieldArray } from "react-hook-form";

function ProductInfo() {
  const {
    register,control,
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
          {...register("productCategory")}
          error={errors?.productCategory?.message}
        />

        <Input
          label="Monthly Production / Supply Capacity"
          {...register("monthlyProductionCapacity")}
          error={errors?.monthlyProductionCapacity?.message}
        />

        <Input
          label="Minimum Order Quantity"
          {...register("minimumOrderQuantity")}
          error={errors?.minimumOrderQuantity?.message}
        />

        <Input
          label="Product Shelf Life"
          {...register("productShelfLife")}
          error={errors?.productShelfLife?.message}
        />
      </div>

      <div className="mt-6">
        <label className="block mb-2">Product Description</label>

        <textarea
          rows="4"
          className="w-full border rounded-lg p-3"
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
              <div key={field.id} className="flex gap-3">
                <Input
                  label={`SKU ${index + 1}`}
                  {...register(`skus.${index}`)}
                  error={errors.skus?.[index]?.message}
                />

                <button type="button" onClick={() => remove(index)}>
                  Remove
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => append("")}
            className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
          >
            Add SKU
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
