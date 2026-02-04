import React, { useEffect } from "react";

const SingleSelect = ({
  options = [],
  value = [], // array for multi-select
  onChange,
  layout = "col", // "col" | "row"
  allowMultiple = false, // enable multi-select
}) => {
  useEffect(() => {
    if (!value.length && options.length > 0 && !allowMultiple) {
      onChange([options[0]]);
    }
  }, [value, options, onChange, allowMultiple]);

  const handleClick = (option) => {
    if (allowMultiple) {
      if (value.includes(option)) {
        onChange(value.filter((v) => v !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      onChange([option]);
    }
  };

  return (
    <div
      className={`gap-4 ${
        layout === "row"
          ? "flex flex-row flex-wrap justify-center" // center items in row
          : "flex flex-col"
      }`}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`flex !rounded-[10px] border px-5 py-4 transition
            ${
              layout === "row"
                ? "w-auto min-w-[60px] justify-center items-center gap-2 text-center"
                : "w-full items-center justify-between text-left"
            }
            ${
              value.includes(option)
                ? "bg-[#3D4260] text-white border-[#3D4260]"
                : "bg-white text-gray-500 border-gray-200"
            }`}
        >
          <span className="font-medium">{option}</span>

          {/* Radio — only in column layout */}
          {layout !== "row" && (
            <span
              className={`h-5 w-5 rounded-full border-2 flex items-center justify-center
                ${value.includes(option) ? "border-white" : "border-gray-400"}`}
            >
              {value.includes(option) && (
                <span className="h-2.5 w-2.5 rounded-full bg-white" />
              )}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default SingleSelect;
