import React, { useEffect } from "react";
const SingleSelect = ({ options = [], value, onChange }) => {
  useEffect(() => {
    if (!value && options.length > 0) {
      onChange(options[0]);
    }
  }, [value, options, onChange]);
  return (
    <div className="space-y-4">
      {" "}
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`w-full flex items-center justify-between !rounded-[10px] border px-5 py-4 text-left transition             
            ${
              value === option
                ? "bg-[#3D4260] text-white border-[#3D4260]"
                : "bg-white text-gray-500 border-gray-200"
            }           `}
        >
          {" "}
          <span className="font-medium">{option}</span> {/* Radio */}{" "}
          <span
            className={`h-5 w-5 rounded-full border-2 flex items-center justify-center               
              ${
                value === option ? "border-white" : "border-gray-400"
              }             `}
          >
            {" "}
            {value === option && (
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
            )}{" "}
          </span>{" "}
        </button>
      ))}{" "}
    </div>
  );
};
export default SingleSelect;
