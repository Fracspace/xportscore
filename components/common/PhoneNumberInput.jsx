"use client";

import React, { useState, useEffect } from "react";
import PhoneInput, { parsePhoneNumber, isValidPhoneNumber } from "react-phone-number-input";
import { AsYouType } from "libphonenumber-js/min";

const getCountryMaxDigits = (country) => {
  if (!country) return 10;
  const c = country.toUpperCase();
  if (["GB", "DE", "CN", "RU", "BR", "JP"].includes(c)) return 11;
  if (["AU", "AE", "SG", "NZ", "FR", "IL", "HK", "GR", "PT"].includes(c)) return 9;
  if (["DK", "NO"].includes(c)) return 8;
  return 10; // Default for Other Countries
};

export default function PhoneNumberInput({
  label,
  required = false,
  value = "",
  countryCode = "+91",
  onChange,
  defaultCountry = "IN",
  placeholder = "Enter Mobile Number",
  error = "",
  className = ""
}) {
  const getInitialRaw = () => {
    if (value?.startsWith("+")) return value;
    const code = countryCode?.startsWith("+") ? countryCode : `+${countryCode || "91"}`;
    return value ? `${code}${value}` : code;
  };

  const [rawPhone, setRawPhone] = useState(getInitialRaw());

  useEffect(() => {
    if (value !== undefined) {
      if (value.startsWith("+")) {
        setRawPhone(value);
      } else if (value && countryCode) {
        const code = countryCode.startsWith("+") ? countryCode : `+${countryCode}`;
        setRawPhone(`${code}${value}`);
      } else if (countryCode) {
        const code = countryCode.startsWith("+") ? countryCode : `+${countryCode}`;
        setRawPhone(code);
      } else {
        setRawPhone("");
      }
    }
  }, [value, countryCode]);

  const handlePhoneChange = (inputValue) => {
    if (!inputValue) {
      setRawPhone("");
      if (onChange) {
        onChange({ phoneNumber: "", countryCode: countryCode || "+91", rawValue: "" });
      }
      return;
    }

    let finalValue = inputValue;
    let extractedCode = countryCode || "+91";
    let nationalNum = "";

    // Check phone number is lessthan 15
    const totalDigits = inputValue.replace(/\D/g, "");
    if (totalDigits.length > 15) {
      if (rawPhone) {
        finalValue = rawPhone;
      } else {
        finalValue = `+${totalDigits.slice(0, 15)}`;
      }
    }

    try {
      const parsed = parsePhoneNumber(finalValue);
      if (parsed) {
        if (parsed.countryCallingCode) {
          extractedCode = `+${parsed.countryCallingCode}`;
        }
        if (parsed.nationalNumber) {
          nationalNum = parsed.nationalNumber;
          const maxDigits = getCountryMaxDigits(parsed.country);
          if (nationalNum.length > maxDigits) {
            nationalNum = nationalNum.slice(0, maxDigits);
            finalValue = `+${parsed.countryCallingCode}${nationalNum}`;
          }
        }
      } else {
        const asYouType = new AsYouType();
        asYouType.input(finalValue);
        const callingCode = asYouType.getCallingCode();
        nationalNum = asYouType.getNationalNumber();
        if (callingCode) {
          extractedCode = `+${callingCode}`;
        }
        const country = asYouType.getCountry();
        const maxDigits = getCountryMaxDigits(country);
        if (nationalNum && nationalNum.length > maxDigits) {
          nationalNum = nationalNum.slice(0, maxDigits);
          finalValue = `+${callingCode}${nationalNum}`;
        }
      }
    } catch (err) {
      console.error("Phone parse error:", err);
    }

    if (inputValue !== finalValue) {
      setRawPhone("");
      setTimeout(() => {
        setRawPhone(finalValue);
      }, 0);
    } else {
      setRawPhone(finalValue);
    }

    if (onChange) {
      onChange({
        phoneNumber: nationalNum || finalValue.replace(/^\+\d+\s*/, ""),
        countryCode: extractedCode,
        rawValue: finalValue,
        isValid: isValidPhoneNumber(finalValue)
      });
    }
  };

  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block text-[10px] font-bold tracking-[2px] text-gray-600 uppercase">
          {label} {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="w-full rounded border border-gray-300 bg-[#f9fbff] px-4 py-2.5 focus-within:border-[#0B1E48] focus-within:ring-2 focus-within:ring-blue-100 transition">
        <PhoneInput
          international
          withCountryCallingCode
          limitMaxLength={true}
          defaultCountry={defaultCountry}
          value={rawPhone}
          onChange={handlePhoneChange}
          placeholder={placeholder}
          className="flex items-center gap-2 text-sm text-gray-800 [&_.PhoneInputInput]:outline-none [&_.PhoneInputInput]:w-full [&_.PhoneInputInput]:bg-transparent [&_.PhoneInputCountrySelect]:bg-white cursor-pointer"
        />
      </div>

      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
