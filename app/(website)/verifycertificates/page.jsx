import { Suspense } from "react";

import VerifyCertificate from "@/components/common/VerifyCertificate";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyCertificate />
    </Suspense>
  );
}
