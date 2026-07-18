import VerifyForm from "@/components/XportVerifyComponents/VerifyForm/VerifyForm";
import React, { Suspense } from "react";

function page() {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <VerifyForm />
        </Suspense>
      </div>
    </div>
  );
}

export default page;
