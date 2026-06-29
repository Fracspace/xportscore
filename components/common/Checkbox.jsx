import React from "react";

function Checkbox({ label }) {
  return (
    <label className="flex items-center gap-3">
      <input type="checkbox" />
      <span>{label}</span>
    </label>
  );
}

export default Checkbox;
