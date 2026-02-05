import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const SessionCard = ({ title, totalMessages, tags = [], date, time, link }) => {
  return (
    <div className="rounded-2xl border-1 border-gray-200 bg-[#FDFDFF] p-3 space-y-3 w-[320px]">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-black gray-100">{title}</h2>
        <p className="text-sm font-semibold text-[#6F6966]">
          {totalMessages} Total Messages
        </p>
        <p className="text-sm font-bold text-100">Tags</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-bold rounded-full bg-[#CECED1] gray-900"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-sm font-semibold text-[#6F696 6]">
          {date} | {time}
        </p>
      </div>

      {/* Footer */}
      <div>
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
    </div>
  );
};

export default SessionCard;
