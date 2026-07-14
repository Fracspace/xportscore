import AppForm from "@/components/AssessmentComponets/AppForm/AppForm";
import React from "react";
import { Suspense } from "react";

function page() {
  return (
    <div>
         <Suspense fallback={<div>Loading...</div>}></Suspense>
      <div>
        <AppForm />
      </div>
      <Suspense />
    </div>
  );
}

export default page;
