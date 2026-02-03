import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "./AuthHeader";

export default function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <AuthHeader />    {/* Header har child page ke upar */}
      <main className="relative flex flex-col flex-1 justify-center items-center h-full">
        <Outlet />       {/* Login / Signup / Gender / Age / AllDone */}
      </main>

    </div>
  );
}
