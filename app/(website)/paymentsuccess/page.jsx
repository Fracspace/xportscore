"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function PaymentSuccess() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  console.log("order id is", orderId);

  useEffect(() => {
    // if (!orderId) return;

    const fetchPaymentDetails = async () => {
      try {
        const response = await fetch(
          `https://api.xportscore.com/api/payments/verify-payment`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": "Xportscore@2026"
            },
            body: JSON.stringify({
              razordpayOrderId:"order_TC3gMiLZbn8t9a"
            })
          }
        );

        const data = await response.json();

        console.log("payment resp is",data);

        if (!response.ok) {
          throw new Error(data.message);
        }

        // setPaymentDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        // setLoading(false);
      }
    };

    fetchPaymentDetails();
  }, []);
  return (
    <div>
      <h2 className="mt-30 mb-20">Payment Success</h2>
    </div>
  );
}

export default PaymentSuccess;
