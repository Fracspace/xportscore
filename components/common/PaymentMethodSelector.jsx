"use client";

import { useState } from "react";
import {
  IndianRupee,
  Globe2,
  ShieldCheck,
  AlertTriangle,
  Info,
  CheckCircle2
} from "lucide-react";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function PaymentMethodSelector() {
  const [paymentMethod, setPaymentMethod] = useState("international");

  const {
    formType,
    setFormType,
    paymentType,
    setPaymentType,
    applicationId,
    setApplicationId,
    token,

    setUser,
    applicantId,
    setApplicantId
  } = useAuth();

  const router = useRouter();
  console.log("stored details are", paymentType, applicantId, applicationId);

  const openRazorpayFromHtml = (htmlForm) => {
    // Remove previous Razorpay container if it exists
    const existingContainer = document.getElementById("razorpay-container");

    if (existingContainer) {
      existingContainer.remove();
    }

    // Create hidden container
    const container = document.createElement("div");
    container.id = "razorpay-container";
    container.style.display = "none";

    document.body.appendChild(container);

    // Parse returned HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlForm, "text/html");

    const form = doc.querySelector("form");
    const script = doc.querySelector("script");

    if (!form || !script) {
      throw new Error("Invalid Razorpay HTML received.");
    }

    // Create form
    const newForm = document.createElement("form");

    Array.from(form.attributes).forEach((attr) => {
      newForm.setAttribute(attr.name, attr.value);
    });

    container.appendChild(newForm);

    // Create script
    const newScript = document.createElement("script");

    Array.from(script.attributes).forEach((attr) => {
      newScript.setAttribute(attr.name, attr.value);
    });

    newScript.onload = () => {
      // Razorpay injects button after script loads
      setTimeout(() => {
        const button = newForm.querySelector(".razorpay-payment-button");

        if (button) {
          button.click();
        } else {
          console.error("Razorpay button not found.");
        }
      }, 500);
    };

    newForm.appendChild(newScript);
  };

  const handleContinue = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "https://api.xportscore.com/api/payments/create-order/direct",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-key": "Xportscore@2026"
          },
          body: JSON.stringify({
            applicationId,
            applicantId,
            planName: formType,
            paymentType
          })
        }
      );

      const data = await response.json();

      // if (!response.ok) {
      //   throw new Error(data.message || "Failed to create payment");
      // }

      console.log("html data is ", data?.data?.htmlForm);

      console.log("payment res is", data?.data);

      openRazorpayFromHtml(data?.data?.htmlForm);

      // Domestic
      if (paymentType === "international") {
        // Open Razorpay
        // Example:
        // openRazorpay(data);
      }

      // International
      // if (paymentType === "international") {
      //   window.location.href = data.approvalUrl;
      // }
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-slate-900">
          Choose Your Payment Method
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-slate-600 leading-7">
          The application fee for this service is{" "}
          <span className="font-semibold">USD 299</span> (approximately{" "}
          <span className="font-semibold">₹28,500</span>). Please select the
          payment method that corresponds to the billing address associated with
          your card or bank account.
        </p>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm italic text-slate-500">
          <Info size={16} />
          <span>
            The final amount may vary slightly based on the prevailing exchange
            rate and any charges applied by your bank or payment provider.
          </span>
        </div>
      </div>

      {/* Payment Cards */}
      <div className="mt-10 space-y-6">
        {/* Domestic */}
        <label
          className={`relative block cursor-pointer rounded-xl border transition-all duration-300 ${
            paymentMethod === "domestic"
              ? "border-cyan-500 bg-cyan-50 shadow-md"
              : "border-slate-200 bg-white hover:border-cyan-300 hover:shadow-sm"
          }`}
        >
          <input
            type="radio"
            name="payment"
            className="hidden"
            checked={paymentMethod === "domestic"}
            onChange={() => {setPaymentMethod("domestic");setPaymentType("domestic")}}
          />

          <div className="p-7">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-100">
                <IndianRupee className="text-cyan-700" size={24} />
              </div>

              {paymentMethod === "domestic" ? (
                <CheckCircle2
                  className="text-cyan-600"
                  fill="currentColor"
                  size={24}
                />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
              )}
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              🇮🇳 Domestic Payment (India)
            </h2>

            <p className="mt-2 text-4xl font-bold text-cyan-700">₹28,500</p>

            <p className="mt-1 text-sm text-slate-500">
              Approximate equivalent of USD 299
            </p>

            <p className="mt-6 leading-7 text-slate-600">
              Choose this option if your card or bank account has a billing
              address in India. Your payment will be processed securely through
              <span className="font-semibold"> Razorpay</span>, supporting
              Indian debit cards, credit cards, UPI, net banking, and other
              domestic payment methods.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-700">
              <ShieldCheck size={18} />
              Secure Domestic Gateway
            </div>
          </div>
        </label>

        {/* International */}
        <label
          className={`relative block cursor-pointer rounded-xl border transition-all duration-300 ${
            paymentMethod === "international"
              ? "border-cyan-500 bg-cyan-50 shadow-md"
              : "border-slate-200 bg-white hover:border-cyan-300 hover:shadow-sm"
          }`}
        >
          <input
            type="radio"
            name="payment"
            className="hidden"
            checked={paymentMethod === "international"}
            onChange={() =>{ setPaymentMethod("international");setPaymentType("international")}}
          />

          <div className="p-7">
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Globe2 className="text-blue-700" size={24} />
              </div>

              {paymentMethod === "international" ? (
                <CheckCircle2
                  className="text-cyan-600"
                  fill="currentColor"
                  size={24}
                />
              ) : (
                <div className="h-5 w-5 rounded-full border-2 border-slate-300" />
              )}
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-slate-900">
              🌍 International Payment
            </h2>

            <p className="mt-2 text-4xl font-bold text-cyan-700">USD 299</p>

            <p className="mt-6 leading-7 text-slate-600">
              Choose this option if your card or bank account has a billing
              address outside India. Your payment will be processed securely
              through <span className="font-semibold">PayPal</span>, allowing
              payments using internationally issued credit cards, debit cards,
              or a PayPal account.
            </p>

            <div className="mt-6 flex items-center gap-2 text-sm font-medium text-cyan-700">
              <ShieldCheck size={18} />
              Global Encryption Protocol
            </div>
          </div>
        </label>
      </div>

      {/* Important */}
      <div className="mt-8 rounded-xl border border-blue-200 bg-blue-50 p-5">
        <div className="flex gap-3">
          <AlertTriangle
            className="mt-1 text-red-500 flex-shrink-0"
            size={20}
          />

          <div>
            <h3 className="font-semibold text-slate-900">Important</h3>

            <p className="mt-1 text-sm leading-6 text-slate-600">
              Please select the payment option that matches the billing address
              of the payment method you intend to use. Choosing the incorrect
              payment method may result in your transaction being declined or
              unsuccessful.
            </p>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="mt-10 flex justify-center">
        <button
          className="rounded-lg bg-slate-900 px-10 py-3 font-semibold text-white transition hover:bg-slate-800"
          onClick={handleContinue}
        >
          Continue to Payment →
        </button>
      </div>
    </div>
  );
}
