import React from "react";
import Input from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

function ApplicantInfo() {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="bg-white border rounded-xl p-8">
      <h2 className="text-3xl font-bold mb-8">Applicant Information</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <Input label="Applicant Name" {...register("fullname")} error={errors?.fullname?.message} />
        <Input label="Designation" {...register("designation")} error={errors?.designation?.message} />
        <Input label="Email Address" type="email" {...register("email")} error={errors?.email?.message} />
        <Input label="Mobile / WhatsApp Number" {...register("phone")} error={errors?.phone?.message} />
      </div>
    </div>
  );
}

export default ApplicantInfo;
