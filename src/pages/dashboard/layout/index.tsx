import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";

export default function DashboardLayout() {
  return (
    <div className="flex  min-h-screen">
      <Sidebar /> {/* Header har child page ke upar */}
      <main className="flex flex-1 w-full min-h-screen bg-[#FDFDFF]">
        <Outlet /> {/* Login / Signup / Gender / Age / AllDone */}
      </main>
    </div>
  );
}
