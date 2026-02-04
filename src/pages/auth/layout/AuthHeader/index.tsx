import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function AuthHeader() {
  const location = useLocation();

  // Home page pe header hide
  if (location.pathname === "/auth") return null;

  return (
    <div className="flex justify-between items-center px-12 py-5 border-b border-gray-20">
      {/* Left: Logo */}
      <Link to="/">
        <img
          src="/images/Logo.svg"
          alt="logo"
          className="w-auto h-auto"
        />
      </Link>

      {/* Right: Login / Signup buttons (ab optional, ya har page pe same) */}
      <Link
        to="/auth/login"
        className="font-semibold gray-90 border border-gray-90 px-6 py-4 rounded transition"
      >
        Sign Up/Login
      </Link>
    </div>
  );
}
