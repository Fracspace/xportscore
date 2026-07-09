

"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

import Input from "@/components/common/Input";
import Checkbox from "@/components/common/Checkbox";
import Radio from "@/components/common/Radio";

function CommercialInfo() {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();

  const selectedCurrencies = watch("preferredPricingCurrency") || [];

  return (
    <div className="rounded-xl border bg-white p-8">
      <h2 className="mb-8 text-3xl font-bold">Commercial Information</h2>

      <div className="space-y-8">
        {/* Current Price List */}

        <div>
          <h3 className="mb-4 font-semibold">Current Price List Available?</h3>

          <div className="space-y-3">
            <Radio
              label="Yes"
              value="Yes"
              {...register("currentPriceListAvailable")}
            />

            <Radio
              label="No"
              value="No"
              {...register("currentPriceListAvailable")}
            />
          </div>

          {errors.currentPriceListAvailable && (
            <p className="mt-2 text-sm text-red-500">
              {errors.currentPriceListAvailable.message}
            </p>
          )}
        </div>

        {/* Export Price List */}

        <div>
          <h3 className="mb-4 font-semibold">Export Price List Available?</h3>

          <div className="space-y-3">
            <Radio
              label="Yes"
              value="Yes"
              {...register("exportPriceListAvailable")}
            />

            <Radio
              label="No"
              value="No"
              {...register("exportPriceListAvailable")}
            />
          </div>

          {errors.exportPriceListAvailable && (
            <p className="mt-2 text-sm text-red-500">
              {errors.exportPriceListAvailable.message}
            </p>
          )}
        </div>

        {/* Preferred Pricing Currency */}

        <div>
          <h3 className="mb-4 font-semibold">Preferred Pricing Currency</h3>

          <div className="grid gap-4 md:grid-cols-3">
            {["USD", "INR", "EUR", "GBP", "AED", "Other"].map((item) => (
              <Checkbox
                key={item}
                label={item}
                value={item}
                {...register("preferredPricingCurrency")}
              />
            ))}
          </div>

          {errors.preferredPricingCurrency && (
            <p className="mt-2 text-sm text-red-500">
              {errors.preferredPricingCurrency.message}
            </p>
          )}

          {selectedCurrencies.includes("Other") && (
            <div className="mt-4">
              <Input
                label="Other Currency"
                {...register("otherCurrency")}
                error={errors.otherCurrency}
              />
            </div>
          )}
        </div>

        {/* Payment Terms */}

        <div>
          <h3 className="mb-4 font-semibold">Payment Terms</h3>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "100% advance",
              "Advance + balance before dispatch",
              "Letter of Credit",
              "Credit period",
              "Negotiable",
              "Not finalised"
            ].map((item) => (
              <Checkbox
                key={item}
                label={item}
                value={item}
                {...register("paymentTerms")}
              />
            ))}
          </div>

          {errors.paymentTerms && (
            <p className="mt-2 text-sm text-red-500">
              {errors.paymentTerms.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CommercialInfo;
