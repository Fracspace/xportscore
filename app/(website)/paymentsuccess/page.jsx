"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function PaymentSuccess() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);

  const orderId = searchParams.get("orderId");
  console.log("order id is", orderId);

  const router = useRouter();

  const navigateRoute = (formType, assessmentId, token) => {
    if (formType == "export") {
      router.push(`/xportassessmentform?${assessmentId}&token=${token}`);
    } else {
      router.push(`/xportverifyform?${assessmentId}`);
    }
  };

  useEffect(() => {
    // if (!orderId) return;

    const orderId = searchParams.get("orderId");
    const razorpayOrderId = searchParams.get("razorpayOrderId");
    const razorpayPaymentId = searchParams.get("razorpayPaymentId");
    const razorpaySignature = searchParams.get("razorpaySignature");
    const formType = searchParams.get("formType");
    const applicantId = searchParams.get("applicantId");
    // const assessmentId = searchParams.get("exportAssessmentId");
    // const verifyId = searchParams.get("verifyRequestId");

    console.log(orderId);
    console.log(razorpayOrderId);
    console.log(razorpayPaymentId);
    console.log(razorpaySignature);
    console.log(formType);
    console.log(applicantId);

    const fetchPaymentDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.xportscore.com/api/payments/verify-payment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "Xportscore@2026"
            },
            body: JSON.stringify({
              razorpayOrderId,
              razorpayPaymentId,
              razorpaySignature
            })
          }
        );

        const data = await response.json();

        console.log(
          "payment resp is",
          data,
          data?.data?.success,
          data?.data?.token,
          data?.data?.exportAssessmentId,
          "********",
          data?.data?.verifyRequestId
        );

        if (data?.success) {
          // navigateRoute(formType);
          if (formType == "export") {
            router.push(
              `/xportassessmentform?assessmentId=${data?.data?.exportAssessmentId}&token=${encodeURIComponent(data?.data?.token)}`
            );
          } else {
            router.push(
              `/xportverifyform?verifyId=${data?.data?.verifyRequestId}&token=${encodeURIComponent(data?.data?.token)}`
            );
          }
        }

        if (!response.ok) {
          throw new Error(data.message);
        }

        setLoading(false);

        // setPaymentDetails(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, []);
  return (
    <>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="text-center">
            <div className="w-14 h-14 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6" />

            <h2 className="text-2xl font-semibold">Verifying Your Payment</h2>

            <p className="text-gray-500 mt-2">
              Please wait while we verify your payment.
              <br />
              Do not refresh or close this page.
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className="mt-30 mb-20">Payment Success</h2>
        </div>
      )}
    </>
  );
}

export default PaymentSuccess;
