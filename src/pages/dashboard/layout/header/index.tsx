import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = ({
  title = "Welcome back Harry!",
  subtitle = "REMaDI your situation right away.",
}) => {
  return (
    <div className="flex justify-between items-center mb-12">
      {/* Left side */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold gray-100">{title}</h1>
        <p className="text-xl font-bold gray-100">{subtitle}</p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <Icon
          icon="mdi:bell-outline"
          className="text-gray-500 text-2xl cursor-pointer"
        />
        <Icon
          icon="mdi:chevron-down"
          className="text-gray-500 text-xl cursor-pointer"
        />
        <Link
          to="/Dashboard/profile"
          className="h-[24px] w-[24px] rounded-full"
        >
          <img
            src="/public/images/Profile.svg"
            alt="Profile"
            className="w-full h-full object-cover cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
