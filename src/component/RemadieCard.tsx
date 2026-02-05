import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const RemadieCard = ({
  heading,
  description,
  date,
  link,
  bgColor = "#EDFAF8",
}) => {
  return (
    <div
      className="flex flex-col gap-6 p-6 rounded-[20px]"
      style={{ backgroundColor: bgColor }}
    >
      {/* Heading */}
      <h1 className="text-lg font-black gray-100">{heading}</h1>

      {/* Description */}
      <p className="text-xl font-bold text-[#3D4260]">{description}</p>

      {/* Date */}
      <p className="text-sm font-semibold text-[#696863]">{date}</p>

      {/* Link */}
      <Link
        to="/Journaling/results"
        className="flex items-center gap-2 font-medium text-[#3D4260] hover:underline"
      >
        See Details
        <span>
          <Icon icon="solar:arrow-right-linear" width="24" height="24" />
        </span>
      </Link>
    </div>
  );
};

export default RemadieCard;
