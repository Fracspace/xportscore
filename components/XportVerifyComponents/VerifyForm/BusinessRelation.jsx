import React from "react";
import Checkbox from "@/components/common/Checkbox";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

function BusinessRelation() {
  const {
    register,
    watch,
    formState: { errors }
  } = useFormContext();

  const isOtherSelected = watch("otherReason");

  return (
    <div className="border-t border-slate-200">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Section 3: Nature of Business Relationship
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Tell us why you&apos;re requesting this business verification.
        </p>

        <div className="mt-8">
          <h3 className="mb-5 text-lg font-semibold text-slate-800">
            Why are you requesting this verification? <span className="text-red-500 ml-0.5">*</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-5">
            <Checkbox
              label="Before placing an order"
              {...register("beforePlacingOrder")}
            />

            <Checkbox
              label="Before shipping goods"
              {...register("beforeShippingGoods")}
            />

            <Checkbox
              label="Before making payment"
              {...register("beforeMakingPayment")}
            />

            <Checkbox
              label="Before appointing an importer"
              {...register("beforeAppointingImporter")}
            />

            <Checkbox
              label="Before appointing a distributor"
              {...register("beforeAppointingDistributor")}
            />

            <Checkbox
              label="Before appointing a supplier"
              {...register("beforeAppointingSupplier")}
            />

            <Checkbox
              label="Vendor onboarding"
              {...register("vendorOnboarding")}
            />

            <Checkbox
              label="Investment due diligence"
              {...register("investmentDueDiligence")}
            />

            <Checkbox
              label="Strategic partnership"
              {...register("strategicPartnership")}
            />

            <Checkbox
              label="Other"
              {...register("otherReason")}
            />
          </div>

          {errors?.otherReason?.message && (
            <p className="mt-3 text-sm text-red-500 font-medium">
              {errors.otherReason.message}
            </p>
          )}

          {isOtherSelected && (
            <div className="mt-5 max-w-md">
              <Input
                label="Please Specify Other Reason"
                required={true}
                {...register("otherText")}
                error={errors?.otherText?.message}
                placeholder="Specify reason for verification"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessRelation;