import React, { forwardRef } from "react";

const Radio = forwardRef(({ label, value, name, error, ...props }, ref) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        ref={ref}
        type="radio"
        name={name}
        value={value}
        {...props}
        className="h-4 w-4"
      />

      <span>{label}</span>
    </label>
  );
});

Radio.displayName = "Radio";

export default Radio;
