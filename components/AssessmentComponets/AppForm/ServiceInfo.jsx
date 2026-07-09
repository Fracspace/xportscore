import React from "react";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

function ServiceInfo() {
  const {
    register,
    control,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="rounded-xl border bg-white p-8">
      <h2 className="mb-8 text-3xl font-bold">Service Information</h2>

      <p className="mb-8 text-sm text-gray-500">
        Complete this section only if you are a service exporter.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <Input
          label="Primary Service Category"
          required
          placeholder="e.g. IT Services"
          {...register("primaryServiceCategory")}
          error={errors?.primaryServiceCategory?.message}
        />

        <Input
          label="Key Service Lines"
          required
          placeholder="e.g. Web Development, UI/UX"
          {...register("keyServiceLines")}
          error={errors?.keyServiceLines?.message}
        />

        <Input
          label="Industries / Sectors Served"
          required
          placeholder="e.g. Healthcare, Finance"
          {...register("industriesServed")}
          error={errors?.industriesServed?.message}
        />

        <Input
          label="Team Size"
          required
          placeholder="e.g. 25"
          type="number"
          {...register("teamSize")}
          error={errors?.teamSize?.message}
        />

        <Input
          label="Delivery Capacity (Projects / Month)"
          placeholder="e.g. 20"
          type="number"
          {...register("deliveryCapacity")}
          error={errors?.deliveryCapacity?.message}
        />

        <Input
          label="Avg Project Size (USD)"
          required
          placeholder="e.g. 5000"
          type="number"
          {...register("avgProjectSize")}
          error={errors?.avgProjectSize?.message}
        />

        <Input
          label="Min Engagement Value (USD)"
          required
          placeholder="e.g. 1000"
          type="number"
          {...register("minEngagementValue")}
          error={errors?.minEngagementValue?.message}
        />

        <Input
          label="Avg Turnaround Time"
          required
          placeholder="e.g. 2 Weeks"
          {...register("avgTurnaroundTime")}
          error={errors?.avgTurnaroundTime?.message}
        />
      </div>

      {/* Service Description */}

      <div className="mt-8">
        <label className="mb-2 block font-medium">
          Detailed Service Description <span className="text-red-500"></span>
        </label>

        <textarea
          rows={5}
          placeholder="Describe your services, expertise, technologies, methodologies, and delivery capabilities."
          className="w-full rounded-lg border border-gray-300 p-4 outline-none focus:border-blue-600"
          {...register("serviceDescription")}
        />
        {errors?.serviceDescription && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.serviceDescription?.message}
          </p>
        )}
      </div>

      {/* Delivery Model */}

      <div className="mt-8">
        <label className="mb-4 block font-medium">
          Delivery Model <span className="text-red-500"></span>
        </label>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deliveryModel"
              value="remote"
              className="h-4 w-4"
            />
            <span>Remote</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deliveryModel"
              value="onsite"
              className="h-4 w-4"
            />
            <span>On-site</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="deliveryModel"
              value="hybrid"
              className="h-4 w-4"
            />
            <span>Hybrid</span>
          </label>
        </div>
        {errors?.deliveryModel && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.deliveryModel?.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default ServiceInfo;
