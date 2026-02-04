import React from "react";
import { Link, useLocation } from "react-router-dom";

const JournalingHeader = () => {
  return (
    <>
      <div className="flex justify-start px-12 py-5 border-b border-gray-20 bg-white">
        {/* Left: Logo */}
        <Link to="/">
          <img
            src="/images/Logo.svg"
            alt="logo"
            className="w-auto h-auto"
          />
        </Link>
      </div>
    </>
  );
};

export default JournalingHeader;
