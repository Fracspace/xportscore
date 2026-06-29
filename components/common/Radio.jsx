import React from "react";

function Radio({ label }) {
  return (
    <label className="flex items-center gap-3">
      <input type="radio" name="radio-group" />
      <span>{label}</span>
    </label>
  );
}

export default Radio;
