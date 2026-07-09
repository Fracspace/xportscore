import React, { forwardRef } from "react";

const Checkbox = forwardRef(
  ({ label, value, error, className = "", ...props }, ref) => {
    return (
      <div className="mb-2">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            ref={ref}
            type="checkbox"
            value={value}
            className={`h-4 w-4 rounded border-gray-300 ${className}`}
            {...props}
          />

          <span>{label}</span>
        </label>

        {error && <p className="mt-1 text-sm text-red-500">{error.message}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
