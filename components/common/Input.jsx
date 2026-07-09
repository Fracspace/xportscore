import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, type = "text", error, className = "", ...props }, ref) => {
    return (
      <div>
        <label className="mb-2 block text-sm font-medium">{label}</label>

        <input
          ref={ref}
          type={type}
          {...props}
          className={`w-full rounded-lg border p-3 outline-none transition-colors
            ${
              error
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-blue-600"
            }
            ${className}`}
        />

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
