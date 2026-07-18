import React from "react";
import Checkbox from "@/components/common/Checkbox";
import { useFormContext } from "react-hook-form";

function BusinessRelation() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
            Why are you requesting this verification?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-12 md:gap-y-5">
            <Checkbox
              label="Before placing an order"
              {...register("beforePlacingOrder")}
              error={errors?.beforePlacingOrder?.message}
            />

            <Checkbox
              label="Before shipping goods"
              {...register("beforeShippingGoods")}
              error={errors?.beforeShippingGoods?.message}
            />

            <Checkbox
              label="Before making payment"
              {...register("beforeMakingPayment")}
              error={errors?.beforeMakingPayment?.message}
            />

            <Checkbox
              label="Before appointing an importer"
              {...register("beforeAppointingImporter")}
              error={errors?.beforeAppointingImporter?.message}
            />

            <Checkbox
              label="Before appointing a distributor"
              {...register("beforeAppointingDistributor")}
              error={errors?.beforeAppointingDistributor?.message}
            />

            <Checkbox
              label="Before appointing a supplier"
              {...register("beforeAppointingSupplier")}
              error={errors?.beforeAppointingSupplier?.message}
            />

            <Checkbox
              label="Vendor onboarding"
              {...register("vendorOnboarding")}
              error={errors?.vendorOnboarding?.message}
            />

            <Checkbox
              label="Investment due diligence"
              {...register("investmentDueDiligence")}
              error={errors?.investmentDueDiligence?.message}
            />

            <Checkbox
              label="Strategic partnership"
              {...register("strategicPartnership")}
              error={errors?.strategicPartnership?.message}
            />

            <Checkbox
              label="Other"
              {...register("otherReason")}
              error={errors?.otherReason?.message}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessRelation;