"use client";

import PaymentMethodSelector from "@/components/common/PaymentMethodSelector";
import Hero from "@/components/XportVerifyComponents/Hero";
import Pricing from "@/components/XportVerifyComponents/Pricing";
import VerificationAreas from "@/components/XportVerifyComponents/VerificationAreas";
import VerificationRequestForm from "@/components/XportVerifyComponents/VerifyForm/VerificationRequestForm";
import VerifyForm from "@/components/XportVerifyComponents/VerifyForm/VerifyForm";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useAuth } from "@/app/context/AuthContext";

function XportVerify() {
  const formRef = useRef(null);

  const { paymentform, setPaymentForm } = useAuth();

  useEffect(() => { }, [paymentform])

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div>
      <h1>Export Verify</h1>
      <div>
        <Hero onProceed={scrollToForm} />
        <VerificationAreas />
        <Pricing />
        <div ref={formRef}>
          {!paymentform ? <VerificationRequestForm />
            : <PaymentMethodSelector />}
        </div>
        {/* <VerifyForm /> */}
      </div>
    </div>
  );
}

export default XportVerify;
