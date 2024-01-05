import React from "react";

function MayUi_Input({ label, name, type, onChange, value, disabled }) {
  return (
    <div className="relative inline-block w-full">
      <label
        htmlFor={name}
        className="absolute -top-2 left-4 px-1 bg-white text-gray-600 text-xs"
      >
        {label}
      </label>
      <input
        type={type || "text"}
        disabled={disabled}
        name={name}
        id={name}
        value={value || ""}
        onChange={(e) => onChange(e)}
        className="block appearance-none w-full border   border-green-300  text-green-800 py-[17px] px-4 pr-8 rounded leading-tight focus:outline-none focus:border-green-900 focus:ring-0 disabled:text-gray-400"
      />
    </div>
  );
}

export default MayUi_Input;
