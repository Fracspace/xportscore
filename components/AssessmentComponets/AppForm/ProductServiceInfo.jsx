"use client";

import { useState } from "react";
import ProductInfo from "./ProductInfo";
import ServiceInfo from "./ServiceInfo";
import { useFormContext } from "react-hook-form";

export default function ProductServiceInfo() {
  const {
    watch,
    setValue,
    register,
    formState: { errors }
  } = useFormContext();

  const exportType = watch("exportType");

  return (
    <div className="space-y-6">
      {/* Toggle */}

      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold">What do you export?</h2>

        <p className="mt-1 text-sm text-gray-500">
          Select the type of business to continue.
        </p>

        <div className="mt-6 flex w-fit rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => setValue("exportType", "product")}
            className={`rounded-md px-6 py-3 cursor-pointer text-sm font-medium transition-all ${
              exportType === "product"
                ? "bg-teal-600 text-white shadow"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Product Exporter
          </button>

          <button
            type="button"
            onClick={() => setValue("exportType", "service")}
            className={`rounded-md px-6 py-3 cursor-pointer text-sm font-medium transition-all ${
              exportType === "service"
                ? "bg-teal-600 text-white shadow"
                : "text-gray-600 hover:text-black"
            }`}
          >
            Service Exporter
          </button>
        </div>
      </div>

      {/* Render Component */}

      {exportType === "product" ? (
        <ProductInfo />
      ) : (
        <ServiceInfo />
      )}
    </div>
  );
}
