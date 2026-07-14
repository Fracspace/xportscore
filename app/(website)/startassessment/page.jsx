"use client";

import { useAuth } from "@/app/context/AuthContext";
import AppForm from "@/components/AssessmentComponets/AppForm/AppForm";
import AssessmentReqForm from "@/components/AssessmentComponets/AppForm/AssessmentReqForm";
import ApplicationForm from "@/components/AssessmentComponets/ApplicationForm";
import AssessmentCTA from "@/components/AssessmentComponets/AssessmentCTA";
import AssessmentForm from "@/components/AssessmentComponets/AssessmentForm";
import IndustriesWeServe from "@/components/AssessmentComponets/IndustriesWeServe";
import PaymentMethodSelector from "@/components/common/PaymentMethodSelector";
import React, { useEffect } from "react";
import { useRef } from "react";

function Assessment() {
  const formRef = useRef(null);

  const { paymentform, setPaymentForm } = useAuth();

  useEffect(() => {}, [paymentform]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className="mt-12">
      <AssessmentCTA onProceed={scrollToForm} />
      <IndustriesWeServe />
      <div ref={formRef}>
        {!paymentform ? <AssessmentReqForm /> : <PaymentMethodSelector />}
      </div>
      {/* <ApplicationForm /> */}
      {/* <AssessmentForm /> */}
      {/* <AppForm /> */}
    </div>
  );
}

export default Assessment;
