import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Left side */}
      <div className="flex flex-col">
        <h1 className="text-4xl font-bold gray-100">Welcome back Harry!</h1>
        <p className="text-xl font-bold gray-100">
          REMaDI your situation right away.
        </p>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        {/* Bell icon */}
        <Icon
          icon="mdi:bell-outline"
          className="text-gray-500 text-2xl cursor-pointer"
        />
        {/* Dropdown icon */}
        <Icon
          icon="mdi:chevron-down"
          className="text-gray-500 text-xl cursor-pointer"
        />
        <Link
          to="/Dashboard/profile"
          className="h-[24px] w-[24px] rounded-full"
        >
          <img
            src="/public/images/Profile.svg" // replace with your profile image
            alt="Profile"
            className="w-full h-full object-cover cursor-pointer"
          />
        </Link>{" "}
      </div>
    </div>
  );
};

export default Header;
