import React from "react";

function Input({ label, type = "text" }) {
  return (
    <div>
      <label className="block mb-2 text-sm font-medium">{label}</label>

      <input type={type} className="w-full border rounded-lg p-3" />
    </div>
  );
}

export default Input;
