import React from "react";
import { Icon } from "@iconify/react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="relative hidden lg:block w-[300px] min-h-screen overflow-hidden">
      <div className="absolute top-50 left-12 inset-0 flex justify-center z-[-1]">
        <div className="w-[120%] h-[800px] bg-gradient-to-b from-[#A0A7F9] via-[#ACF9A0] to-[#F1FF9E] rounded-[50%_/_40%] blur-3xl opacity-20" />
      </div>

      <div className="flex flex-col justify-between h-screen ">
        <div className="flex flex-col">
          {/* Logo */}
          <div className="flex justify-center w-full w-[212px] h-auto my-6">
            <Link to="/Dashboard">
              <img
                src="/images/Logo.svg"
                alt="logo"
                className="w-full h-full"
              />
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col">
            <NavLink
              to="/Dashboard"
              end
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 ps-16 h-[58px] ${
                  isActive
                    ? "bg-[#EDEBFF] border-l-5 border-[#A0A7F9] text-[#A0A7F9] font-semibold"
                    : "text-gray-500 font-semibold"
                }`
              }
            >
              <div className="flex items-center gap-3.5">
                <Icon icon="oui:nav-dashboards" width="24" height="24" />
                <p>Dashboard</p>
              </div>
            </NavLink>

            <NavLink
              to="/Dashboard/previous-session"
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 ps-16 h-[58px] ${
                  isActive
                    ? "bg-[#EDEBFF] border-l-5 border-[#A0A7F9] text-[#A0A7F9] font-semibold"
                    : "text-gray-500 font-semibold"
                }`
              }
            >
              <div className="flex items-center gap-3.5">
                <Icon icon="proicons:history" width="24" height="24" />
                <p>Previous Session</p>
              </div>
            </NavLink>

            <NavLink
              to="/Dashboard/remadies"
              className={({ isActive }) =>
                `flex items-center gap-3.5 px-4 ps-16 h-[58px] ${
                  isActive
                    ? "bg-[#EDEBFF] border-l-5 border-[#A0A7F9] text-[#A0A7F9] font-semibold"
                    : "text-gray-500 font-semibold"
                }`
              }
            >
              <div className="flex items-center gap-3.5">
                <Icon icon="lucide:file-spreadsheet" width="24" height="24" />
                <p>Remadies</p>
              </div>
            </NavLink>
          </nav>
        </div>
        <div className="flex flex-col gap-10 mb-11">
          {/* Help */}
          <Link
            to="/Dashboard"
            className="flex items-center gap-3.5 mx-4 ms-16 text-gray-500 font-semibold hover:text-[#A0A7F9] transition w-fit"
          >
            <Icon icon="mdi:help-circle-outline" width="24" height="24" />
            <p>Help</p>
          </Link>

          {/* Dark Mode */}
          <Link
            to="/Dashboard"
            className="flex items-center gap-3.5 mx-4 ms-16 text-gray-500 font-semibold hover:text-[#A0A7F9] transition w-fit"
          >
            <Icon icon="mdi:weather-night" width="24" height="24" />
            <p>Dark Mode</p>
          </Link>

          {/* Settings */}
          <Link
            to="/Dashboard/profile"
            className="flex items-center gap-3.5 mx-4 ms-16 text-gray-500 font-semibold hover:text-[#A0A7F9] transition w-fit"
          >
            <Icon icon="mdi:cog-outline" width="24" height="24" />
            <p>Settings</p>
          </Link>

          {/* Logout */}
          <Link
            to="/Dashboard/help"
            className="flex items-center gap-3.5 mx-4 ms-16 text-red-300 font-semibold hover:text-red-500 transition w-fit"
          >
            <Icon icon="mdi:logout" width="24" height="24" />
            <p>Logout</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
